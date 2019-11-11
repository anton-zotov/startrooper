export const vectorAngle = (x, y) => Math.acos(-x / Math.sqrt(x ** 2 + y ** 2));

export const inBoundaries = (val, min, max) => val > max ? max : (val < min ? min : val);