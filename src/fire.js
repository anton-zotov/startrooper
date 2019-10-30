import { shortRangeBullet } from "./weapons";

export function centeredFire({ cooldown }) {
	cooldown *= 1000;
	const cooldownSymbol = Symbol('centered fire cooldown');
	return function(time, gameObjects) {
		if (!this[cooldownSymbol] || (this[cooldownSymbol] + cooldown) < time) {
			gameObjects.push(shortRangeBullet(this));
			this[cooldownSymbol] = time;
		}
	}
}