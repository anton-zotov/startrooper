import { clearCanvas, createCanvas } from "../canvas";
import { deadSymbol } from "../constants";
import { centeredFire } from "../weapons/fire";
import { reduceHpOnHit } from "../weapons/onHit";

export function wavyMob(game) {
	let { width: canvasWidth, height: canvasHeight } = game.canvasBundle.canvas;
	return {
		update: updateWavyMob,
		draw: drawWavyMob,
		fire: centeredFire({ cooldown: 1 }),
		onHit: reduceHpOnHit,
		x: canvasWidth + 0,
		y: 100,
		angle: Math.PI,
		width: 50,
		height: 50,
		canvasBundle: createCanvas(50, 50),
		stepTime: 3,
		stepTimeLeft: 3,
		step: 0,
		interactsWithAmmo: true,
		team: 2,
		hp: 5,
		canvasWidth,
		canvasHeight,
		created: game.currentTime,
	};
}

export function updateWavyMob(time, dt, game) {
	let xSpeed = -150;
	let dx = dt * xSpeed;
	this.x += dx;
	this.y = this.canvasHeight * 0.4 * (1.2 + Math.sin((time - this.created) * 0.0015));
	this.stepTimeLeft -= dt;
	if (this.stepTimeLeft <= 0) {
		this.stepTimeLeft = this.stepTime;
		this.step = (this.step + 1) % 2;
	}
	this.fire(time, game.gameObjects);
}

export function drawWavyMob({ ctx }) {
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