export function updateAgent(time, dt, game) {
	let controls = this.getControls(game.keysPressed, game.mouseMovement);
	let speed = 300;
	if (controls.forward && controls.sideways) speed *= Math.SQRT1_2;
	let dx = controls.forward * dt * speed * Math.cos(this.angle);
	let dy = controls.forward * dt * speed * Math.sin(this.angle);
	dx -= controls.sideways * dt * speed * Math.sin(this.angle);
	dy += controls.sideways * dt * speed * Math.cos(this.angle);
	this.x += dx;
	this.y += dy;
	if (controls.dAngle) {
		this.angle += controls.dAngle;
		this.canvasBundle.ctx.rotate(controls.dAngle);
	}
	if (controls.fire) {
		this.fire(time, game.gameObjects);
	}
}
