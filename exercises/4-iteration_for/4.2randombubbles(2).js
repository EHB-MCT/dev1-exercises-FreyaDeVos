"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
    context.fillRect(0, 0, width, height);
    drawBubbles()
}
//he position of the circles should always be within the boundaries of the window, 
//with a margin of 200 pixels from the sides, no matter how big the windows

function drawBubbles() {
    for (let i = 0; i < 100; i++) {
        let x = Utils.randomNumber(200, (width - 200));
        let y = Utils.randomNumber(200, (height - 200));
        let size = Utils.randomNumber(2, 100);
        context.fillStyle = Utils.hsl(Utils.randomNumber(1, 100), 230, 90);
        Utils.fillAndStrokeCircle(x, y, size);

    }
}