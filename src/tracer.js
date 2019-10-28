import { clearCanvas } from "./canvas";

export function drawTracer({ ctx }) {
	clearCanvas(this.canvasBundle);
	this.canvasBundle.ctx.fillStyle = "#" + Math.round((1 - 0) * 255).toString(16).padEnd('0', 2) + 'F000';
	this.canvasBundle.ctx.fillRect(
		-this.width / 2,
		-this.height / 2,
		this.width,
		this.height);
	ctx.drawImage(this.canvasBundle.canvas, this.x - this.width / 2, this.y - this.height);
}