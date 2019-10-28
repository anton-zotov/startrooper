export function initInputs(window, canvas) {
	const getClearMouseMovement = () => ({ dx: 0, dy: 0 });

	let keysPressed = new Set();
	let mouseMovement = getClearMouseMovement();;

	window.onkeydown = e => onKeyDown(e.key, keysPressed);
	window.onkeyup = e => onKeyUp(e.key, keysPressed);
	window.onmousemove = e => {
		mouseMovement.dx += e.movementX;
		mouseMovement.dy += e.movementY;
	};
	canvas.onmousedown = e => onKeyDown(getMouseKey(e), keysPressed);
	canvas.onmouseup = e => onKeyUp(getMouseKey(e), keysPressed);
	canvas.oncontextmenu = () => false;

	return () => {
		let mm = mouseMovement;
		mouseMovement = getClearMouseMovement();
		return { keysPressed, mouseMovement: mm };
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