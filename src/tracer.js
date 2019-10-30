import { clearCanvas } from "./canvas";

export function drawTracer({ ctx }) {
	clearCanvas(this.canvasBundle);
	this.canvasBundle.ctx.fillStyle = "#" + Math.round((1 - 0) * 255).toString(16).padEnd('0', 2) + 'F000';
	this.canvasBundle.ctx.fillRect(
		-this.width / 2,
		-this.height / 2,
		this.width,
		this.height);
	ctx.drawImage(
		this.canvasBundle.canvas, 
		this.x - this.canvasBundle.canvas.width / 2, 
		this.y - this.canvasBundle.canvas.height / 2, 
	);
	drawAim.call(this, { ctx });
}

function drawAim({ ctx }) {
	let aimDistance = 120;
	let aimRadius = 10;
	let aimX = this.x + aimDistance * Math.cos(this.angle);
	let aimY = this.y + aimDistance * Math.sin(this.angle);
	ctx.strokeStyle = '#00F000';
	ctx.beginPath();
	ctx.arc(aimX, aimY, aimRadius, 0, Math.PI * 2);
	ctx.stroke();
}