import { wavyMob } from "./wavyMob";

export function spawnWave(game, mob, amount, interval) {
	let intervalId = setInterval(() => {
		if (!--amount) clearInterval(intervalId);
		game.gameObjects.push(mob(game));
	}, interval * 1000);
}

export function waveSpawner(game, canvas) {
	const spawn = (...args) => spawnWave(game, ...args);
	return {
		spawnWawyMobs: () => spawn(wavyMob, 5, 0.5)
	};
}