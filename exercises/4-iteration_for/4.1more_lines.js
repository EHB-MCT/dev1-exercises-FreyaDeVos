"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "blue";
    context.fillStyle = "pink";
    context.fillRect(50, 50, 600, 300);
    drawWormhole();
}

function drawWormhole() {
    for (let i = 0; i <= 30; i++) {
        Utils.drawLine(50 + i * 10, 50, 650 - i * 10, 350);
        Utils.drawLine(350 + i * 10, 50, 350 - i * 10, 350);
        Utils.drawLine(50, 50 + i * 10, 650, 350 - i * 10)
    }
}

/* 
There are 60 lines horizontally and 30 lines vertically.
The image is 600 pixels wide and 300 pixels high
You can solve this excercise in several ways! (using 1 or more for-loops) */