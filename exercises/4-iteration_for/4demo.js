"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

drawSquares();

function drawSquares() {
    let total = context.canvas.width;
    for (let i = 0; 1 < 100; i++) {
        let y = Noise.perlinNoise(i) * 500;
        context.fillRect(i, y, 2, 2);

    }
}



/* let x = Math.random() * context.canvas.width;
    let y = Math.random() * context.canvas.height;
    context.fillRect(x, y, 5, 5); */