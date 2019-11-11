import { inBoundaries } from "./utils/geometry";

export function initInputs(window, canvas) {
	let keysPressed = new Set();
	let mouseMovement = { x: 100, y: 100 };

	window.onkeydown = e => onKeyDown(e.key, keysPressed);
	window.onkeyup = e => onKeyUp(e.key, keysPressed);
	window.onmousemove = e => {
		mouseMovement.x += e.movementX;
		mouseMovement.y += e.movementY;
		mouseMovement.x = inBoundaries(mouseMovement.x, 0, canvas.width);
		mouseMovement.y = inBoundaries(mouseMovement.y, 0, canvas.height);
	};
	canvas.onmousedown = e => onKeyDown(getMouseKey(e), keysPressed);
	canvas.onmouseup = e => onKeyUp(getMouseKey(e), keysPressed);
	canvas.oncontextmenu = () => false;

	return () => {
		return { keysPressed, mouseMovement };
	};
}

export const mouseButton = Object.freeze({
	left: 'lmb',
	right: 'rmb',
	middle: 'mmb',
});

function getMouseKey(e) {
	switch (e.button) {
		case 0:
			return mouseButton.left;
		case 1:
			return mouseButton.middle;
		case 2:
			return mouseButton.right;
	}
}

function onKeyDown(key, keysPressed) {
	keysPressed.add(key.toLowerCase());
}

function onKeyUp(key, keysPressed) {
	keysPressed.delete(key.toLowerCase());
	// keys_not_released.delete(key.toLowerCase());
}