import { createCanvas, clearCanvas, requestPointerLock, fillCanvas } from './canvas';
import { initInputs } from './inputs';
import { drawTracer } from './tracer';
import { updateAgent } from './agent';
import { getPlayerControls } from './controls';
import { centeredFire } from './fire';
import { drawFps } from './gui';
import { deadSymbol } from './constants';
import { dumbGuard } from './dumbGuard';
import { dieOnHit } from './onHit';

export function start(canvas) {
	let ctx = canvas.getContext('2d');
	let canvasBundle = { canvas, ctx };
	canvas.onclick = function() {
		requestPointerLock(canvasBundle);
	}
	let gameObjects = [];
	let game = {
		canvasBundle,
		gameObjects,
		getInputs: initInputs(window, canvas),
	}

	gameObjects.push(createGameObject({
		update: updateAgent,
		draw: drawTracer,
		getControls: getPlayerControls,
		fire: centeredFire({ cooldown: 0.2 }),
		onHit: dieOnHit,
		x: 100,
		y: 100,
		angle: 0,
		width: 30,
		height: 100,
		canvasBundle: createCanvas(100, 100),
		interactsWithAmmo: true,
		team: 1,
		hp: 10,
	}));
	gameObjects.push(dumbGuard());

	requestAnimationFrame(t => frame(game, t));
}

function frame(game, time, lastTime = null) {
	let dt = 0;
	if (lastTime) dt = (time - lastTime) / 1000;
	fillCanvas(game.canvasBundle);
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

function createGameObject(config) {
	return {
		...config
	};
}
