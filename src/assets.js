import shipImage from './assets/ship1.png';
import shieldImage from './assets/shield.png';
import artilleryBodyImage from './assets/artillery-body.png';
import artilleryGunImage from './assets/artillery-gun.png';

export const images = {
	playerShip: shipImage,
	shield: shieldImage,
	artilleryBody: artilleryBodyImage,
	artilleryGun: artilleryGunImage,
}

export function loadAssets() {
	let promises = [];
	for (let assetName in images) {
		let img = new Image();
		img.src = images[assetName];
		promises.push(new Promise(resolve => img.onload = resolve));
		images[assetName] = img;
	}
	return Promise.all(promises);
}