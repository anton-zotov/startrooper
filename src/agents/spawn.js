import { wavyMob } from "./wavyMob";
import { artillery } from "./artillery";

export function waveSpawner(game, canvas) {
	let waveNumber = 0;
	let betweenWavesPause = false;
	let mobs = [];
	let pause = 0;

	const spawn = (...args) => spawnWave(game, ...args);
	return {
		nextWave: function() {
			console.log('mobs', mobs)
			if (mobs.length) return;
			betweenWavesPause = true;
			waveNumber++;
			mobs = getMobs(waveNumber);
		},
		getWaveNumber: () => waveNumber,
		update: (dt) => {
			if (pause) {
				pause = Math.max(0, pause - dt);
			} else if (mobs.length) {
				let next = mobs.shift();
				if (typeof next === 'number') {
					pause = next;
				} else {
					game.gameObjects.push(next(game, { id: 0 }));
				}
			}
		}
	};
}

function getMobs(waveNumber) {
	let artilleryCount = Math.min(10, Math.floor(waveNumber / 2));
	let wawyCount = Math.min(10, 1 + waveNumber / 2);
	let mobs = [];
	while (artilleryCount > 0 || wawyCount > 0) {
		if (artilleryCount-- > 0) mobs.push(artillery);
		if (wawyCount-- > 0) mobs.push(wavyMob);
		mobs.push(1);
	}
	return mobs;
}