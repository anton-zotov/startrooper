import { createCanvas, clearCanvas, requestPointerLock } from './canvas';
import { initInputs } from './inputs';
import { drawTracer } from './tracer';
import { updateAgent } from './agents/agent';

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
		x: 100,
		y: 100,
		angle: 0,
		width: 30,
		height: 100,
		canvasBundle: createCanvas(100, 100),
	}));

	requestAnimationFrame(t => frame(game, t));
}

function frame(game, time, lastTime = null) {
	let dt = 0;
	if (lastTime) dt = (time - lastTime) / 1000;
	clearCanvas(game.canvasBundle);
	let { keysPressed, mouseMovement } = game.getInputs();
	game.keysPressed = keysPressed;
	game.mouseMovement = mouseMovement;

	for (let go of game.gameObjects) {
		go.draw(game.canvasBundle);
		let controls = go.getControls(game.keysPressed, game.mouseMovement);
		go.update(dt, controls);
	}

	requestAnimationFrame(t => frame(game, t, time));
}

function createGameObject(config) {
	return {
		...config
	};
}

function getPlayerControls(keysPressed, mouseMovement) {
	let forward = 0;
	let sideways = 0;
	if (keysPressed.has('w')) forward = 1;
	if (keysPressed.has('s')) forward = -1;
	if (keysPressed.has('d')) sideways = 1;
	if (keysPressed.has('a')) sideways = -1;
	let dAngle = mouseMovement.dy * 0.002;
	return {
		forward,
		sideways,
		dAngle,
	}
}