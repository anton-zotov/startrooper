import { fillCanvas, createCanvas, drawImage } from "./canvas";
import { randomElement } from "./utils/array";
import { starDensity } from "./constants";

let initialized = false;
let starCBs = [];
let panes = [];

function createPane(x, w, h, speed) {
	return {
		x,
		speed,
		canvasBundle: createCanvas(w, h, 0, 0, 0, 1)
	}
}

function init({ canvas, ctx }) {
	for (let i = 0; i < 20; i++) {
		let starCB = createCanvas(10, 10);
		createStar(starCB, 1 + i % 3);
		starCBs.push(starCB);
	}

	for (let i = 1; i <= 5; i++) {
		panes.push(createPane(0, canvas.width, canvas.height, i));
		panes.push(createPane(canvas.width, canvas.width, canvas.height, i));
	}

	let starCount = Math.floor(canvas.width * canvas.height * starDensity);
	for (let i = 0; i < starCount; i++) {
		for (let pane of panes) {
			drawStar(pane.canvasBundle);
		}
	}
	initialized = true;
}

function drawStar({ canvas, ctx }) {
	let starCB = randomElement(starCBs);
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	drawImage({ ctx }, starCB.canvas, x, y);
}

function createStar({ ctx }, size) {
	let opacity = 0.7 * Math.random();
	ctx.beginPath();
	for (let i = 0; i < 5; i++) {
		ctx.lineTo(0, size);
		ctx.translate(0, size);
		ctx.rotate((Math.PI * 2 / 10));
		ctx.lineTo(0, - size);
		ctx.translate(0, - size);
		ctx.rotate(-(Math.PI * 6 / 10));
	}
	ctx.lineTo(0, size);
	ctx.closePath();
	ctx.fillStyle = `rgb(255, 255, 200)`;
	ctx.fillStyle = `rgba(255, 255, 200, ${opacity})`;
	ctx.fill();
}

export function drawBackground(canvasBundle) {
	if (!initialized) init(canvasBundle);
	fillCanvas(canvasBundle);
	for (let pane of panes) {
		canvasBundle.ctx.drawImage(pane.canvasBundle.canvas, pane.x, 0);
		pane.x -= pane.speed;
		if (pane.x + pane.canvasBundle.canvas.width < 0) pane.x += pane.canvasBundle.canvas.width * 2;
	}
}
