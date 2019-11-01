import { gravity } from "../constants";

export function updateAgent(time, dt, game) {
	let controls = this.getControls(game.keysPressed, game.mouseMovement);
	let accelerationTop = -30;
	let accelerationBottom = 20;
	let yMaxSpeed = 8;
	let xSpeed = 200;
	// if (controls.forward && controls.sideways) speed *= Math.SQRT1_2;
	let vx = controls.forward * dt * xSpeed;

	let ay = gravity * dt;
	if (controls.upward === 1) ay += accelerationBottom * dt;
	else if (controls.upward === -1) ay += accelerationTop * dt;

	this.vy += ay;
	if (this.vy > yMaxSpeed) this.vy = yMaxSpeed;
	if (this.vy < -yMaxSpeed) this.vy = -yMaxSpeed;
	console.log('this.vy',this.vy)
	this.x += vx;
	this.y += this.vy;
	if (controls.dAngle) {
		this.angle += controls.dAngle;
	}
	if (controls.fire) {
		this.fire(time, game.gameObjects);
	}
}
