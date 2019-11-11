import { start } from './game';
import './main.css';

let canvas = document.getElementById('scene');
canvas.width  = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

start(canvas);