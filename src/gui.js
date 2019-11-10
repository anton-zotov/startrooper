import { drawText } from "./canvas";

export function drawFps({ ctx }, fps) {
	if (fps === undefined) return;
	drawText(`FPS: ${fps}`, ctx, { x: 50, y: 20 });
}

export function drawHealth({ ctx, canvas }, player) {
	let percent = Math.round(player.hp / player.maxHp * 100);
	drawText(`Health: ${percent}%`, ctx, { x: 70, y: canvas.height - 30 });
}

export function drawGUI(canvasBundle, { dt, player, wave }) {
	drawFps(canvasBundle, dt);
	drawHealth(canvasBundle, player);
}

export function drawPauseMessage({ ctx, canvas }) {
	let pauseMessage = ['Click on the screen to resume the game',
		'Use W, A, S, D to move,',
		'left mouse button to shoot',
		'right mouse button to activate shield'];
	drawText(pauseMessage, ctx, { x: canvas.width / 2, y: canvas.height / 2 - 40 });
}