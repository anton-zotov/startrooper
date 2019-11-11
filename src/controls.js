import { vectorAngle } from "./utils/geometry";

export function getHumanControls(keysPressed, mouseMovement) {
	let forward = 0;
	let upward = 0;
	let fire = false;
	let secondary = false;
	let x = this.x + (this.weaponX || 0);
	let y = this.y + (this.weaponY || 0);
	let angle = vectorAngle(x - mouseMovement.x, y - mouseMovement.y);
	if (mouseMovement.y < this.y) angle = -angle;
	if (keysPressed.has('w')) upward = -1;
	if (keysPressed.has('s')) upward = 1;
	if (keysPressed.has('d')) forward = 1;
	if (keysPressed.has('a')) forward = -1;
	if (keysPressed.has('lmb')) fire = true;
	if (keysPressed.has('rmb')) secondary = true;
	return {
		upward,
		forward,
		angle,
		fire,
		secondary,
	}
}