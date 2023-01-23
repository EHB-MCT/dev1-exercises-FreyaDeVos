"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "blue";
    context.fillStyle = "yellow";
    context.fillRect(0, 0, 600, 300);
    Wormhole();
}

function Wormhole() {
    for (let i = 0; i <= 30; i++) {
        Utils.drawLine(i * 20, 0, 600 - i * 20, 300);
        Utils.drawLine(0, i * 10, 600, 300 - i * 10);
    }
}