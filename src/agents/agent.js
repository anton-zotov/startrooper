export function updateAgent(time, dt, game) {
	let controls = this.getControls(game.keysPressed, game.mouseMovement);
	let acceleration = 10;
	// if (controls.forward && controls.sideways) speed *= Math.SQRT1_2;
	let ax = controls.forward * dt * acceleration;
	let ay = controls.upward * dt * acceleration;
	this.vx += ax;
	this.vy += ay;
	this.x += this.vx;
	this.y += this.vy;
	if (controls.dAngle) {
		this.angle += controls.dAngle;
	}
	if (controls.fire) {
		this.fire(time, game.gameObjects);
	}
}
