"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


//The startposition (on the x-axis) of each row should alternate by 50 pixels.

drawBricks()


function drawBricks() {
    let row = 6;
    let column = 6;
    let space = 50;
    let w = 100;
    let h = 50;
    context.fillStyle = "darkred";
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            let x = space + i * (w + 5) + j % 2 * 50;
            let y = space + j * (h + 5);
            context.fillRect(x, y, w, h);
        }
    }
}