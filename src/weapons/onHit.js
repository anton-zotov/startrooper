import { deadSymbol } from "../constants";

export function dieOnHit(ammo) {
	this.hp = 0;
	onDie(this, ammo);
}

export function reduceHpOnHit(ammo) {
	this.hp = Math.max(0, this.hp - ammo.damage);
	if (this.hp <= 0) {
		onDie(this, ammo);
	}
}

function onDie(obj, ammo) {
	if (ammo.owner && !ammo.owner[deadSymbol]) {
		ammo.owner.score = (ammo.owner.score || 0) + (obj.worthPoints || 100);
	}
	if (obj.onDie) obj.onDie();
	else obj[deadSymbol] = true;
}