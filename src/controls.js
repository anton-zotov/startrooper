export function getPlayerControls(keysPressed, mouseMovement) {
	let forward = 0;
	let sideways = 0;
	let fire = false;
	let dAngle = mouseMovement.dx * 0.0015;
	if (keysPressed.has('w')) forward = 1;
	if (keysPressed.has('s')) forward = -1;
	if (keysPressed.has('d')) sideways = 1;
	if (keysPressed.has('a')) sideways = -1;
	if (keysPressed.has(' ')) fire = true;
	return {
		forward,
		sideways,
		dAngle,
		fire,
	}
}