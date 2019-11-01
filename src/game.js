import { requestPointerLock } from './canvas';
import { initInputs } from './inputs';
import { player } from './agents/player';
import { dumbGuard } from './agents/dumbGuard';
import { deadSymbol } from './constants';
import { drawFps } from './gui';
import { loadAssets } from './assets';
import { drawBackground } from './background';

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

	gameObjects.push(...player());
	gameObjects.push(dumbGuard());

	requestAnimationFrame(t => frame(game, t));
}

function frame(game, time, lastTime = null) {
	let dt = 0;
	if (lastTime) dt = (time - lastTime) / 1000;
	drawBackground(game.canvasBundle);
	let { keysPressed, mouseMovement } = game.getInputs();
	game.keysPressed = keysPressed;
	game.mouseMovement = mouseMovement;

	for (let go of game.gameObjects) {
		go.draw(game.canvasBundle);
		go.update(time, dt, game);
	}
	game.gameObjects = game.gameObjects.filter(go => !go[deadSymbol]);

	drawFps(game.canvasBundle, dt);
	requestAnimationFrame(t => frame(game, t, time));
}
