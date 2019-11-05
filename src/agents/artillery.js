import { clearCanvas, createCanvas } from "../canvas";
import { deadSymbol, gameObjectType } from "../constants";
import { centeredFire } from "../weapons/fire";
import { reduceHpOnHit } from "../weapons/onHit";
import { vectorAngle } from "../utils/geometry";

export function artillery(game, { id = 0 } = {}) {
	let position = (id % 2) ? 'bottom' : 'top';
	let { width: canvasWidth, height: canvasHeight } = game.canvasBundle.canvas;
	return {
		update: updateArtillery,
		draw: drawArtillery,
		fire: centeredFire({ cooldown: 1 }),
		onHit: reduceHpOnHit,
		x: canvasWidth + 100,
		y: position === 'bottom' ? 20 : canvasHeight - 20,
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
		type: gameObjectType.agent,
	};
}

export function updateArtillery(time, dt, game) {
	let xSpeed = -150;
	let dx = dt * xSpeed;
	this.x += dx;
	if (this.x < -100) this[deadSymbol] = true;
	this.angle = angleToPlayer(this, game);
	this.fire(time, game.gameObjects);
}

export function angleToPlayer(mob, { player }) {
	let vecX = mob.x - player.x;
	let vecY = mob.y - player.y;
	let angle = vectorAngle(vecX, vecY);
	if (vecY > 0) angle = -angle;
	return angle;
}

export function drawArtillery({ ctx }) {
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