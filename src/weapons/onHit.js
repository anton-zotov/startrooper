import { deadSymbol } from "../constants";

export function dieOnHit() {
	this[deadSymbol] = true;
}

export function reduceHpOnHit(ammo) {
	this.hp -= ammo.damage;
	if (this.hp <= 0) {
		this[deadSymbol] = true;
	}
}