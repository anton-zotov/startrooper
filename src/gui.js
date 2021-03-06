import { drawText, drawCircle } from "./canvas";

export function drawFps({ ctx }, fps) {
	if (fps === undefined) return;
	drawText(`FPS: ${fps}`, ctx, { x: 50, y: 20 });
}

export function drawHealth({ ctx, canvas }, player) {
	let percent = Math.round(player.hp / player.maxHp * 100);
	drawText(`Health: ${percent}%`, ctx, { x: 70, y: canvas.height - 30 });
}

export function drawShield({ ctx, canvas }, player) {
	let percent = Math.round(player.shield.hp / player.shield.maxHp * 100);
	drawText(`Shield: ${percent}%`, ctx, { x: canvas.width - 100, y: canvas.height - 30 });
}

export function drawScore({ ctx, canvas }, player) {
	drawText(`Score: ${player.score || 0}`, ctx, { x: canvas.width / 2, y: canvas.height - 55 });
}

export function drawWaveNumber({ ctx, canvas }, wave) {
	drawText(`Wave: ${wave}`, ctx, { x: canvas.width / 2, y: canvas.height - 30 });
}

export function drawGUI(canvasBundle, { dt, player, wave }) {
	drawFps(canvasBundle, dt);
	drawHealth(canvasBundle, player);
	drawShield(canvasBundle, player);
	drawScore(canvasBundle, player);
	drawWaveNumber(canvasBundle, wave);
}

export function drawPauseMessage({ ctx, canvas }) {
	let pauseMessage = ['Click on the screen to resume the game',
		'Use W, A, S, D to move,',
		'left mouse button to shoot',
		'right mouse button to activate shield'];
	drawText(pauseMessage, ctx, { x: canvas.width / 2, y: canvas.height / 2 - 40 });
}

export function drawAim({ ctx, canvas }, pos) {
	if (!pos) return;
	let { x, y } = pos;
	drawCircle(ctx, { x, y, r: 14, color: 'white' });
	drawCircle(ctx, { x, y, r: 1, color: 'white' });
}

export function drawGameOverMessage({ ctx, canvas }, score) {
	drawText(['Game over', `You score: ${score}`], ctx,
		{ x: canvas.width / 2, y: canvas.height * 0.5 - 70, fontSize: 40 });
	drawText('Click to play again', ctx, { x: canvas.width / 2, y: canvas.height * 0.5 + 10 });
}