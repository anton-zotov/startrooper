import shipImage from './assets/ship1.png';
import shieldImage from './assets/shield.png';

export const images = {
	playerShip: new Image(),
	shield: new Image(),
}

export function loadAssets() {
	images.playerShip.src = shipImage;
	images.shield.src = shieldImage;

	let promises = Object.values(images)
		.map(img => new Promise(resolve => img.onload = resolve));
	return Promise.all(promises);
}