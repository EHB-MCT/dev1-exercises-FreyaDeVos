"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
let xPos = width / 2;
let yPos = height / 2;

context.fillStyle = "white";
context.fillRect(0, 0, width, height);
update();

function update(currentTime) {
    frameCount++;

    context.fillStyle = Utils.hsl(frameCount, 100, 50);
    Utils.fillCircle(xPos, yPos, 25);

    xPos += Utils.randomNumber(-9, 5);
    yPos += Utils.randomNumber(-5, 5);

    requestAnimationFrame(update);
}