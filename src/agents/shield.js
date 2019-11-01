import { images } from "../assets";
import { reduceHpOnHit } from "../weapons/onHit";
import { createCanvas } from "../canvas";


export function shield(agent) {
	return {
		update: updateShield,
		draw: drawShield,
		onHit: reduceHpOnHit,
		x: 100,
		y: 100,
		width: images.shield.width,
		height: images.shield.height,
		canvasBundle: createCanvas(100, 100),
		host: agent,
		team: agent.team,
		hp: 3,
		interactsWithAmmo: true,
	};
}

function drawShield({ ctx }) {
	if (!this.host.shieldActive) return;
	ctx.drawImage(
		images.shield,
		this.x + 70 - images.shield.width / 2,
		this.y - images.shield.height / 2,
	);
}

function updateShield() {
	this.x = this.host.x + 70;
	this.y = this.host.y;
}