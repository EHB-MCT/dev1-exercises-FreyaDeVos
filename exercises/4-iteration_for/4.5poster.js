"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


drawSquare();

function drawSquare() {
    context.fillRect(0, 0, width, height);
    drawRandomLines()
}

function drawRandomLines() {
    for (let i = 0; i < 70; i++) {
        context.strokeStyle = "pink";
        context.lineWidth = 3;
        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);
        Utils.drawLine(x, y, x + (i * Utils.randomNumber(x, width) * 200), y * i * Utils.randomNumber(x, height) * 10);
    };
}