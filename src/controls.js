export function getHumanControls(keysPressed, mouseMovement) {
	let forward = 0;
	let upward = 0;
	let fire = false;
	let secondary = false;
	let dAngle = mouseMovement.dy * 0.0015;
	if (keysPressed.has('w')) upward = -1;
	if (keysPressed.has('s')) upward = 1;
	if (keysPressed.has('d')) forward = 1;
	if (keysPressed.has('a')) forward = -1;
	if (keysPressed.has('lmb')) fire = true;
	if (keysPressed.has('rmb')) secondary = true;
	return {
		upward,
		forward,
		dAngle,
		fire,
		secondary,
	}
}