"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;


drawDots();

function drawDots() {
    context.fillStyle = "#E74C3C";
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let dist = calculateDistance(x, y, width / 2, height / 2);
        if (dist < height / 2) {
            Utils.fillCircle(x, y, 2);
        }
    }
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}