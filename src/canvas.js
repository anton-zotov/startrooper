export function createCanvas(width = 0, height = 0, angle = 0, center_x = 0.5, center_y = 0.5, scale = 1.5) {
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext('2d');
	canvas.width = width * scale;
	canvas.height = height * scale;
	ctx.translate(canvas.width * center_x, canvas.height * center_y);
	ctx.rotate(angle);
	return { canvas, ctx };
}

export function clearCanvas({ canvas, ctx }) {
	ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width * 2, canvas.height * 2);
}

export function fillCanvas({ canvas, ctx }, color = '#000') {
	ctx.fillStyle = color;
	ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width * 2, canvas.height * 2);
}

export function drawImage({ ctx }, image, x, y) {
	ctx.drawImage(image, Math.floor(x), Math.floor(y));
}

export function drawRotated({ ctx }, image, x, y, angle, cx = 0.5, cy = 0.5) {
	ctx.setTransform(1, 0, 0, 1, x, y);
	ctx.rotate(angle);
	drawImage({ ctx }, image, -image.width * cx, -image.height * cy);
	ctx.setTransform(1, 0, 0, 1, 0, 0);
}

export function requestPointerLock(canvas) {
	canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
	canvas.requestPointerLock();
}

export function addPointerLockEventListeners(canvas, onLock, onUnlock) {
	function lockChanged() {
		if (document.pointerLockElement === canvas ||
			document.mozPointerLockElement === canvas) {
			onLock();
		} else {
			onUnlock();
		}
	}

	document.addEventListener('pointerlockchange', lockChanged, false);
	document.addEventListener('mozpointerlockchange', lockChanged, false);
}

export function drawText(lines, ctx, { x, y, color = 'white', fontSize = 20 }) {
	if (!Array.isArray(lines)) lines = [lines];
	ctx.textAlign = "center";
	ctx.fillStyle = color;
	ctx.font = `${fontSize}px Open Sans`;
	for (let line of lines) {
		ctx.fillText(line, x, y);
		y += fontSize;
	}
}

export function drawCircle(ctx, { x, y, r, color }) {
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.stroke();
}