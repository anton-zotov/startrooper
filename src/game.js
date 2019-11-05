import { requestPointerLock } from './canvas';
import { initInputs } from './inputs';
import { player as createPlayer } from './agents/player';
import { dumbGuard } from './agents/dumbGuard';
import { deadSymbol, gameObjectType } from './constants';
import { drawFps, drawGUI } from './gui';
import { loadAssets } from './assets';
import { drawBackground } from './background';
import { spawnWave, waveSpawner } from './agents/spawn';

let spawner;

export async function start(canvas) {
	let ctx = canvas.getContext('2d');
	let canvasBundle = { canvas, ctx };

	await loadAssets();

	canvas.onclick = function() {
		requestPointerLock(canvasBundle);
	}
	let gameObjects = [];
	let game = {
		canvasBundle,
		gameObjects,
		getInputs: initInputs(window, canvas),
	}
	let [player, shield] = createPlayer();
	game.player = player;
	game.shield = shield;

	spawner = waveSpawner(game);
	gameObjects.push(player, shield);
	// gameObjects.push(dumbGuard());

	requestAnimationFrame(t => frame(game, t));
}

function frame(game, time, lastTime = null) {
	game.currentTime = time;
	let dt = 0;
	if (lastTime) dt = (time - lastTime) / 1000;
	drawBackground(game.canvasBundle);
	let { keysPressed, mouseMovement } = game.getInputs();
	game.keysPressed = keysPressed;
	game.mouseMovement = mouseMovement;
	let enemyCount = 0;

	for (let go of game.gameObjects) {
		go.draw(game.canvasBundle);
		go.update(time, dt, game);
		if (go.type === gameObjectType.agent && go.team === 2) enemyCount++;
	}
	game.gameObjects = game.gameObjects.filter(go => !go[deadSymbol]);
	if (!enemyCount) spawner.nextWave();

	drawGUI(game.canvasBundle, {
		dt,
		player: game.player,
		shield: game.shield,
		wave: spawner.getWaveNumber()
	});
	requestAnimationFrame(t => frame(game, t, time));
}
