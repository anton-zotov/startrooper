import { clearCanvas, createCanvas, drawRotated } from "../canvas";
import { deadSymbol, gameObjectType } from "../constants";
import { centeredFire } from "../weapons/fire";
import { reduceHpOnHit } from "../weapons/onHit";
import { vectorAngle } from "../utils/geometry";
import { images } from "../assets";

let id = 0;

export function artillery(game) {
	let position = (id++ % 2) ? 'bottom' : 'top';
	let { width: canvasWidth, height: canvasHeight } = game.canvasBundle.canvas;
	return {
		update: updateArtillery,
		draw: drawArtillery,
		fire: centeredFire({ cooldown: 1 }),
		onHit: reduceHpOnHit,
		x: canvasWidth + 100,
		y: position === 'bottom' ? 20 : canvasHeight - 20,
		position,
		angle: Math.PI,
		width: 23,
		height: 39,
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
	const gunLength = 10;
	let xSpeed = -150;
	let dx = dt * xSpeed;
	this.x += dx;
	if (this.x < -100) this[deadSymbol] = true;
	this.angle = angleToPlayer(this, game);
	this.weaponX = gunLength * Math.cos(this.angle);
	this.weaponY = gunLength * Math.sin(this.angle);
	this.fire(time, game.gameObjects);
}

export function angleToPlayer(mob, { player }) {
	let vecX = mob.x - player.x;
	let vecY = mob.y - player.y;
	let angle = vectorAngle(vecX, vecY);
	if (vecY > 0) angle = -angle;
	return angle;
}

export function drawArtillery(canvasBundle) {
	drawRotated(
		canvasBundle,
		images.artilleryBody,
		this.x,
		this.y,
		this.position === 'top' ? Math.PI / 2 : - Math.PI / 2
	);
	drawRotated(
		canvasBundle,
		images.artilleryGun,
		this.x,
		this.y,
		this.angle,
		0.15,
		0.5
	);
}