import { clearCanvas, createCanvas, drawImage } from "../canvas";
import { deadSymbol, gameObjectType } from "../constants";
import { dieOnHit } from "./onHit";

export function shortRangeBullet(agent) {
	let bullet = {
		update: updateBullet,
		draw: drawBullet,
		onHit: dieOnHit,
		x: agent.x + (agent.weaponX || 0),
		y: agent.y + (agent.weaponY || 0),
		angle: agent.angle,
		width: 20,
		height: 6,
		canvasBundle: createCanvas(20, 20, agent.angle),
		liveTimeLeft: 3,
		team: agent.team,
		owner: agent,
		damage: 25,
		type: gameObjectType.bullet,
	};

	bullet.canvasBundle.ctx.fillStyle = '#00F0F0';
	bullet.canvasBundle.ctx.fillRect(
		-bullet.width / 2,
		-bullet.height / 2,
		bullet.width,
		bullet.height);

	return bullet;
}

export function updateBullet(time, dt, game) {
	let speed = 500;
	let dx = dt * speed * Math.cos(this.angle);
	let dy = dt * speed * Math.sin(this.angle);
	this.x += dx;
	this.y += dy;
	this.liveTimeLeft -= dt;
	if (this.liveTimeLeft <= 0) this[deadSymbol] = true;
	checkHit(this, game);
}

export function drawBullet(canvasBundle) {
	// clearCanvas(this.canvasBundle);

	drawImage(
		canvasBundle,
		this.canvasBundle.canvas,
		this.x - 15,
		this.y - 15,
	);
}

export function checkHit(ammo, { gameObjects }) {
	for (let go of gameObjects) {
		if (go === ammo) continue;
		if (!go.interactsWithAmmo) continue;
		if (ammo.team && ammo.team === go.team) continue;
		if (checkCollision(ammo, go)) {
			ammo.onHit(go);
			go.onHit(ammo);
		}
	}
}

export function checkCollision(go1, go2) {
	let r1 = Math.min(go1.width, go1.height);
	let r2 = Math.min(go2.width, go2.height);
	return ((go1.x - go2.x) ** 2 + (go1.y - go2.y) ** 2) <= (r1 + r2) ** 2;
}