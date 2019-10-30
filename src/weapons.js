import { clearCanvas, createCanvas } from "./canvas";
import { deadSymbol } from "./constants";

export function shortRangeBullet(agent) {
	return {
		update: updateBullet,
		draw: drawBullet,
		x: agent.x,
		y: agent.y,
		angle: agent.angle,
		width: 20,
		height: 6,
		canvasBundle: createCanvas(20, 20, agent.angle),
		liveTimeLeft: 1,
	};
}

export function updateBullet(time, dt) {
	let speed = 500;
	let dx = dt * speed * Math.cos(this.angle);
	let dy = dt * speed * Math.sin(this.angle);
	this.x += dx;
	this.y += dy;
	this.liveTimeLeft -= dt;
	if (this.liveTimeLeft <= 0) this[deadSymbol] = true;
}

export function drawBullet({ ctx }) {
	clearCanvas(this.canvasBundle);
	this.canvasBundle.ctx.fillStyle = '#00F0F0';
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
}