import { requestPointerLock, addPointerLockEventListeners } from './canvas';
import { initInputs } from './inputs';
import { player as createPlayer } from './agents/player';
import { dumbGuard } from './agents/dumbGuard';
import { deadSymbol, gameObjectType } from './constants';
import { drawFps, drawGUI, drawPauseMessage } from './gui';
import { loadAssets } from './assets';
import { drawBackground } from './background';
import { spawnWave, waveSpawner } from './agents/spawn';
import { shortRangeBullet } from './weapons/weapons';

export async function start(canvas) {
	let ctx = canvas.getContext('2d');
	let canvasBundle = { canvas, ctx };

	await loadAssets();

	let gameObjects = [];
	let game = {
		canvasBundle,
		gameObjects,
		getInputs: initInputs(window, canvas),
	}
	let [player, shield] = createPlayer();
	game.player = player;
	game.shield = shield;

	game.spawner = waveSpawner(game);
	gameObjects.push(player, shield);
	// gameObjects.push(shortRangeBullet({ x: 0, y: 0, angle: 1 }));

	addPointerLockEventListeners(canvas, resume.bind(null, game), pause.bind(null, game));
	canvas.onclick = function() {
		requestPointerLock(canvas);
	}
	draw(game);
}

function frame(game, time, lastTime = time) {
	if (!game.isRunning) return;
	game.currentTime = time;
	let dt = 0;
	if (lastTime) dt = (time - lastTime) / 1000;
	draw(game);
	update(game, time, dt);
	requestAnimationFrame(t => frame(game, t, time));
}

function draw(game) {
	drawBackground(game.canvasBundle);

	for (let go of game.gameObjects) {
		go.draw(game.canvasBundle);
	}

	drawGUI(game.canvasBundle, {
		player: game.player,
		shield: game.shield,
		wave: game.spawner.getWaveNumber()
	});
	drawFps(game.canvasBundle, game.fps);
	if (!game.isRunning) drawPauseMessage(game.canvasBundle);
}

function update(game, time, dt) {
	let { keysPressed, mouseMovement } = game.getInputs();
	game.keysPressed = keysPressed;
	game.mouseMovement = mouseMovement;
	let enemyCount = 0;

	for (let go of game.gameObjects.filter(go => go.type !== gameObjectType.agent)) {
		go.update(time, dt, game);
		if (go.type === gameObjectType.agent && go.team === 2) enemyCount++;
	}
	for (let go of game.gameObjects.filter(go => go.type === gameObjectType.agent)) {
		go.update(time, dt, game);
		if (go.team === 2) enemyCount++;
	}
	game.gameObjects = game.gameObjects.filter(go => !go[deadSymbol]);
	if (!enemyCount) game.spawner.nextWave();
	calcFps(game, dt);
}

function calcFps(game, dt) {
	const historyMaxSize = 10;
	if (!game.dtHistory) game.dtHistory = [];
	game.dtHistory.push(dt);
	if (game.dtHistory.length > historyMaxSize) game.dtHistory.shift();
	let avDt = game.dtHistory.reduce((sum, cur) => sum + cur, 0) / game.dtHistory.length;
	game.fps = avDt ? Math.round(1 / avDt) : 0;
}

export function pause(game) {
	game.isRunning = false;
	draw(game);
}

export function resume(game) {
	if (game.isRunning) return;
	game.isRunning = true;
	requestAnimationFrame(t => frame(game, t));
}