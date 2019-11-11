import { requestPointerLock, addPointerLockEventListeners } from './canvas';
import { initInputs } from './inputs';
import { player as createPlayer } from './agents/player';
import { dumbGuard } from './agents/dumbGuard';
import { deadSymbol, gameObjectType } from './constants';
import { drawFps, drawGUI, drawPauseMessage, drawAim, drawGameOverMessage } from './gui';
import { loadAssets } from './assets';
import { drawBackground } from './background';
import { spawnWave, waveSpawner } from './agents/spawn';
import { shortRangeBullet } from './weapons/weapons';

let game;

export async function start(canvas) {
	let ctx = canvas.getContext('2d');
	let canvasBundle = { canvas, ctx };

	await loadAssets();

	createNewGame(canvas);
	draw();

	addPointerLockEventListeners(canvas, resume, pause);
	canvas.addEventListener('click', () => requestPointerLock(canvas));
	canvas.addEventListener('mousedown', onMouseDown);
}

function createNewGame(canvas) {
	let ctx = canvas.getContext('2d');
	let canvasBundle = { canvas, ctx };

	let gameObjects = [];
	game = {
		canvasBundle,
		gameObjects,
		getInputs: initInputs(window, canvas),
		scoreTimer: 0,
	}
	let [player, shield] = createPlayer();
	game.player = player;
	game.shield = shield;

	game.spawner = waveSpawner(game);
	gameObjects.push(player, shield);
}

function frame(time, lastTime = time) {
	if (!game.isRunning) return;
	game.currentTime = time;
	let dt = 0;
	if (lastTime) dt = (time - lastTime) / 1000;
	update(time, dt);
	draw();
	requestAnimationFrame(t => frame(t, time));
}

function draw() {
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
	drawAim(game.canvasBundle, game.mouseMovement);
	if (game.player[deadSymbol]) drawGameOverMessage(game.canvasBundle, game.player.score);
	else if (!game.isRunning) drawPauseMessage(game.canvasBundle);
}

function update(time, dt) {
	let { keysPressed, mouseMovement } = game.getInputs();
	game.keysPressed = keysPressed;
	game.mouseMovement = mouseMovement;
	let enemyCount = 0;

	for (let go of game.gameObjects) {
		go.update(time, dt, game);
		if (go.type === gameObjectType.agent && go.team === 2) enemyCount++;
	}
	game.spawner.update(dt);
	game.gameObjects = game.gameObjects.filter(go => !go[deadSymbol]);
	if (!enemyCount) game.spawner.nextWave();
	calcFps(dt);
	addScore(dt);
}

function addScore(dt) {
	if (game.player[deadSymbol]) return;
	game.scoreTimer += dt;
	if (game.scoreTimer >= 1) {
		game.scoreTimer -= 1;
		game.player.score += 10;
	}
}

function calcFps(dt) {
	const historyMaxSize = 10;
	if (!game.dtHistory) game.dtHistory = [];
	game.dtHistory.push(dt);
	if (game.dtHistory.length > historyMaxSize) game.dtHistory.shift();
	let avDt = game.dtHistory.reduce((sum, cur) => sum + cur, 0) / game.dtHistory.length;
	game.fps = avDt ? Math.round(1 / avDt) : 0;
}

export function pause() {
	game.isRunning = false;
	draw();
}

export function resume() {
	if (game.isRunning) return;
	game.isRunning = true;
	requestAnimationFrame(frame);
}

export function onMouseDown() {
	if (game.player[deadSymbol]) {
		createNewGame(game.canvasBundle.canvas);
		game.isRunning = true;
	}
}