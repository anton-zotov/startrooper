import { getHumanControls } from "../controls";
import { centeredFire } from "../weapons/fire";
import { dieOnHit, reduceHpOnHit } from "../weapons/onHit";
import { createCanvas } from "../canvas";
import { gravity } from "../constants";
import { clearCanvas } from "../canvas";
import { images } from "../assets";
import { shield } from "./shield";
import { inBoundaries } from "../utils/geometry";


export function player() {
	let playerObject = {
		update: updatePlayer,
		draw: drawPlayer,
		getControls: getHumanControls,
		fire: centeredFire({ cooldown: 0.2 }),
		onHit: reduceHpOnHit,
		x: 100,
		y: 100,
		vx: 0,
		vy: 0,
		angle: 0,
		width: images.playerShip.width,
		height: images.playerShip.height,
		weaponX: 25,
		canvasBundle: createCanvas(100, 100),
		interactsWithAmmo: true,
		team: 1,
		maxHp: 100,
		hp: 10,
		shieldActive: false,
		score: 0,
	};
	let shieldObject = shield(playerObject);
	playerObject.shield = shieldObject;
	return [playerObject, shieldObject];
}

export function updatePlayer(time, dt, game) {
	let controls = this.getControls(game.keysPressed, game.mouseMovement);
	let accelerationTop = -30;
	let accelerationBottom = 20;
	let yMaxSpeed = 8;
	let speed = 400;
	if (controls.forward && controls.upward) speed *= Math.SQRT1_2;

	let vx = controls.forward * dt * speed;
	this.x += vx;
	this.x = inBoundaries(this.x, this.width / 2, game.canvasBundle.canvas.width - this.width / 2);
	
	let vy = controls.upward * dt * speed;
	this.y += vy;
	this.y = inBoundaries(this.y, this.height / 2, game.canvasBundle.canvas.height - this.height / 2);

	// let ay = gravity * dt;
	// if (controls.upward === 1) ay += accelerationBottom * dt;
	// else if (controls.upward === -1) ay += accelerationTop * dt;
	// this.vy += ay;
	// if (this.vy > yMaxSpeed) this.vy = yMaxSpeed;
	// if (this.vy < -yMaxSpeed) this.vy = -yMaxSpeed;
	// this.y += this.vy;

	this.angle = controls.angle;
	if (controls.fire) {
		this.fire(time, game.gameObjects);
	}
	this.shieldActive = controls.secondary;
}

export function drawPlayer({ ctx }) {
	// clearCanvas(this.canvasBundle);
	// this.canvasBundle.ctx.fillStyle = "#" + Math.round((1 - 0) * 255).toString(16).padEnd('0', 2) + 'F000';
	// this.canvasBundle.ctx.fillRect(
	// 	-this.width / 2,
	// 	-this.height / 2,
	// 	this.width,
	// 	this.height);
	// ctx.drawImage(
	// 	this.canvasBundle.canvas, 
	// 	this.x - this.canvasBundle.canvas.width / 2, 
	// 	this.y - this.canvasBundle.canvas.height / 2, 
	// // );
	ctx.drawImage(
		images.playerShip,
		this.x - images.playerShip.width / 2,
		this.y - images.playerShip.height / 2,
	);
}

// function drawAim({ ctx }) {
// 	let aimDistance = 120;
// 	let aimRadius = 10;
// 	let aimX = this.x + this.weaponX + aimDistance * Math.cos(this.angle);
// 	let aimY = this.y + aimDistance * Math.sin(this.angle);
// 	ctx.strokeStyle = '#00F000';
// 	ctx.beginPath();
// 	ctx.arc(aimX, aimY, aimRadius, 0, Math.PI * 2);
// 	ctx.stroke();
// }