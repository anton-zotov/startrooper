import { clearCanvas, createCanvas } from "../canvas";
import { deadSymbol, gameObjectType } from "../constants";
import { centeredFire } from "../weapons/fire";
import { reduceHpOnHit } from "../weapons/onHit";
import { images } from "../assets";

export function wavyMob(game) {
	let { width: canvasWidth, height: canvasHeight } = game.canvasBundle.canvas;
	return {
		update: updateWavyMob,
		draw: drawWavyMob,
		fire: centeredFire({ cooldown: 1 }),
		onHit: reduceHpOnHit,
		x: canvasWidth + 100,
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
		timeLived: 0,
		type: gameObjectType.agent,
	};
}

export function updateWavyMob(time, dt, game) {
	let xSpeed = -250;
	let dx = dt * xSpeed;
	this.x += dx;
	this.y = this.canvasHeight * 0.4 * (1.2 + Math.sin(this.timeLived * 2));
	this.stepTimeLeft -= dt;
	this.timeLived += dt;
	if (this.stepTimeLeft <= 0) {
		this.stepTimeLeft = this.stepTime;
		this.step = (this.step + 1) % 2;
	}
	if (this.x < -100) this[deadSymbol] = true;
	this.fire(time, game.gameObjects);
}

export function drawWavyMob({ ctx }) {
	ctx.drawImage(
		images.enemy1,
		this.x - images.enemy1.width / 2,
		this.y - images.enemy1.height / 2,
	);
}