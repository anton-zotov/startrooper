import { fillCanvas, createCanvas } from "./canvas";
import { randomElement } from "./utils/array";

const starDensity = 0.001;

let starCount;
let initialized = false;
let stars = [];
let starCBs = [];

function init(canvasBundle) {
	for (let i = 0; i < 20; i++) {
		let starCB = createCanvas(10, 10);
		drawStar(starCB, 1 + i % 3);
		starCBs.push(starCB);
	}

	starCount = Math.floor(canvasBundle.canvas.width * canvasBundle.canvas.height * starDensity);
	for (let i = 0; i < starCount; i++) {
		stars.push(star(canvasBundle));
	}
	initialized = true;
}

function star(canvasBundle) {
	let starCB = randomElement(starCBs);
	let x = Math.random() * canvasBundle.canvas.width;
	let y = Math.random() * canvasBundle.canvas.height;
	let speed = Math.random() * 8;

	function draw() {
		canvasBundle.ctx.drawImage(starCB.canvas, Math.floor(x), Math.floor(y));
	}
	function update() {
		x -= speed;
		if (x < 30) {
			x = canvasBundle.canvas.width + 30;
			starCB = randomElement(starCBs);
		}
	}

	return {
		draw,
		update,
	};
}

function drawStar({ ctx }, size) {
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
	for (let star of stars) {
		star.draw();
		star.update();
	}
}
