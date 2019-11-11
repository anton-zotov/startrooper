import { deadSymbol } from "../constants";

export function dieOnHit() {
	this.hp = 0;
	onDie(this);
}

export function reduceHpOnHit(ammo) {
	this.hp = Math.max(0, this.hp - ammo.damage);
	if (this.hp <= 0) {
		onDie(this);
	}
}

function onDie(obj) {
	if (obj.onDie) obj.onDie();
	else obj[deadSymbol] = true;
}