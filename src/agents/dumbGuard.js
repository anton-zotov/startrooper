import { clearCanvas, createCanvas } from "../canvas";
import { deadSymbol } from "../constants";
import { centeredFire } from "../weapons/fire";
import { reduceHpOnHit } from "../weapons/onHit";

export function dumbGuard() {
	return {
		update: updateDumbGuard,
		draw: drawDumbGuard,
		fire: centeredFire({ cooldown: 1 }),
		onHit: reduceHpOnHit,
		x: 500,
		y: 100,
		angle: 0,
		width: 50,
		height: 50,
		canvasBundle: createCanvas(50, 50),
		stepTime: 3,
		stepTimeLeft: 3,
		step: 0,
		interactsWithAmmo: true,
		team: 2,
		hp: 5,
	};
}

export function updateDumbGuard(time, dt, game) {
	let speed = 100;
	let dy = dt * speed;
	this.y += dy * (this.step === 0 ? 1 : -1);
	this.stepTimeLeft -= dt;
	if (this.stepTimeLeft <= 0) {
		this.stepTimeLeft = this.stepTime;
		this.step = (this.step + 1) % 2;
	}
	this.fire(time, game.gameObjects);
}

export function drawDumbGuard({ ctx }) {
	clearCanvas(this.canvasBundle);
	this.canvasBundle.ctx.fillStyle = '#F000F0';
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