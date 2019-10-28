export function createCanvas(width = 0, height = 0, angle = 0, center_x = 0.5, center_y = 0.5) {
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext('2d');
	canvas.width = width * 1.5;
	canvas.height = height * 1.5;
	ctx.translate(canvas.width * center_x, canvas.height * center_y);
	// ctx.rotate(angle);
	return { canvas, ctx };
}

export function clearCanvas({ canvas, ctx }) {
	ctx.fillStyle = "#000";
	ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width * 2, canvas.height * 2);
}

export function requestPointerLock({ canvas }) {
	canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
	canvas.requestPointerLock();
}