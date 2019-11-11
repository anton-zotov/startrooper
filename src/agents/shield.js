import { images } from "../assets";
import { reduceHpOnHit } from "../weapons/onHit";
import { createCanvas } from "../canvas";

const recoveryPause = 1;
const recoverySpeed = 25;

export function shield(agent) {
	return {
		update: updateShield,
		draw: drawShield,
		onHit: reduceHpOnHit,
		onDie: shieldDepleted,
		x: 100,
		y: 100,
		width: images.shield.width,
		height: images.shield.height,
		canvasBundle: createCanvas(100, 100),
		host: agent,
		team: agent.team,
		hp: 100,
		maxHp: 100,
		interactsWithAmmo: true,
	};
}

function drawShield({ ctx }) {
	if (!this.host.shieldActive || this.isDepleted) return;
	ctx.drawImage(
		images.shield,
		this.x + 70 - images.shield.width / 2,
		this.y - images.shield.height / 2,
	);
}

function updateShield(time, dt) {

	if (this.recoveryPause) {
		this.recoveryPause = Math.max(0, this.recoveryPause - dt);
	}

	if (!this.host.shieldActive || this.isDepleted) {
		if (!this.isRecovering) {
			this.isRecovering = true;
			this.recoveryPause = recoveryPause;
		} else {
			if (!this.recoveryPause) {
				this.hp = Math.min(this.maxHp, this.hp + recoverySpeed * dt);
				if (this.hp === this.maxHp) {
					this.isDepleted = false;
				}
			}
		}
	} else {
		this.recoveryPause = recoveryPause;
	}
	this.x = this.host.x + 70;
	this.y = this.host.y;
	this.interactsWithAmmo = this.host.shieldActive;
}

function shieldDepleted() {
	this.isDepleted = true;
	this.isRecovering = true;
	this.recoveryPause = recoveryPause;
}