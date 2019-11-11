import { wavyMob } from "./wavyMob";
import { artillery } from "./artillery";

export function spawnWave(game, mob, amount, interval, mobParams = {}) {
	const spawn = () => {
		if (!--amount) clearInterval(intervalId);
		game.gameObjects.push(mob(game, { ...mobParams, id: amount }));
	};
	let intervalId = setInterval(spawn, interval * 1000);
	spawn();
}

export function waveSpawner(game, canvas) {
	let waveNumber = 0;
	let betweenWavesPause = false;
	const spawn = (...args) => spawnWave(game, ...args);
	return {
		spawnWawyMobs: () => spawn(wavyMob, 5, 0.5),
		spawnArtillery: () => spawn(artillery, 5, 0.5),
		nextWave: function() {
			if (betweenWavesPause) return;
			betweenWavesPause = true;
			setTimeout(() => {
				betweenWavesPause = false;
				waveNumber++;
				this.spawnWawyMobs();
			}, 1000);
		},
		getWaveNumber: () => waveNumber,
	};
}