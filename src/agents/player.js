import { getHumanControls } from "../controls";
import { centeredFire } from "../weapons/fire";
import { dieOnHit } from "../weapons/onHit";
import { createCanvas } from "../canvas";
import { gravity } from "../constants";
import { clearCanvas } from "../canvas";

export function player() {
	return {
		update: updatePlayer,
		draw: drawPlayer,
		getControls: getHumanControls,
		fire: centeredFire({ cooldown: 0.2 }),
		onHit: dieOnHit,
		x: 100,
		y: 100,
		vx: 0,
		vy: 0,
		angle: 0,
		width: 30,
		height: 100,
		canvasBundle: createCanvas(100, 100),
		interactsWithAmmo: true,
		team: 1,
		hp: 10,
		affectedByGravity: true,
	};
}

export function updatePlayer(time, dt, game) {
	let controls = this.getControls(game.keysPressed, game.mouseMovement);
	let accelerationTop = -30;
	let accelerationBottom = 20;
	let yMaxSpeed = 8;
	let xSpeed = 200;

	let vx = controls.forward * dt * xSpeed;
	this.x += vx;

	let ay = gravity * dt;
	if (controls.upward === 1) ay += accelerationBottom * dt;
	else if (controls.upward === -1) ay += accelerationTop * dt;

	this.vy += ay;
	if (this.vy > yMaxSpeed) this.vy = yMaxSpeed;
	if (this.vy < -yMaxSpeed) this.vy = -yMaxSpeed;
	this.y += this.vy;

	if (controls.dAngle) {
		this.angle += controls.dAngle;
	}
	if (controls.fire) {
		this.fire(time, game.gameObjects);
	}
}

export function drawPlayer({ ctx }) {
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