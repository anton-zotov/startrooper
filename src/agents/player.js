import { updateAgent } from "./agent";
import { drawTracer } from "./tracer";
import { getPlayerControls } from "../controls";
import { centeredFire } from "../weapons/fire";
import { dieOnHit } from "../weapons/onHit";
import { createCanvas } from "../canvas";

export function tracerPlayer() {
	return {
		update: updateAgent,
		draw: drawTracer,
		getControls: getPlayerControls,
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