export function updateAgent(dt, controls) {
	let speed = 100;
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
}