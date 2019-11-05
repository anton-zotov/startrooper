let dtHistory = [];
let historyMaxSize = 10;

export function drawFps({ ctx }, dt) {
	dtHistory.push(dt);
	if (dtHistory.length > historyMaxSize) dtHistory.shift();
	let avDt = dtHistory.reduce((sum, cur) => sum + cur, 0) / dtHistory.length;
	let fps = Math.round(1 / avDt);

	ctx.fillStyle = "red";
	ctx.font = "20px Open Sans";
	ctx.fillText(`FPS: ${fps}`, 10, 20);
}

export function drawHealth({ ctx, canvas }, player) {
	ctx.fillStyle = "red";
	ctx.font = "20px Open Sans";
	let percent = Math.round(player.hp / player.maxHp * 100);
	ctx.fillText(`Health: ${percent}%`, 10, canvas.height - 100);
}

export function drawGUI(canvasBundle, { dt, player, wave }) {
	drawFps(canvasBundle, dt);
	drawHealth(canvasBundle, player);
}