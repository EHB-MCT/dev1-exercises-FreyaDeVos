"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

/* For each part of the maze, generate an random that can be either 0 or 1.
If the random number is a 0 then draw a diagonal line one way: /
If the number is 1 ten draw a diagonal line the other way: \
The spacing between the diagonal lines is 10 pixels, the linewidth is 5;
function drawMaze() { */

drawMaze();

//drawColorMaze();

function drawMaze() {
    context.fillStyle = "darkgray";
    context.lineCap = "square";
    context.lineWidth = 5;
    context.fillRect(0, 0, width, height);
    let space = 10;
    for (let i = 0; i < width / space; i++) {
        for (let j = 0; j < height / space; j++) {
            //let r = Math.floor(Math.random() * 2);
            let r = Math.round(Math.random());
            console.log(r);
            if (r == 0) {
                Utils.drawLine(i * space, j * space, (i + 1) * space, (j + 1) * space);
            } else {
                Utils.drawLine(i * space, (j + 1) * space, (i + 1) * space, j * space);
            }
        }
    }
}




function drawColorMaze() {
    context.fillStyle = "black";
    context.lineCap = "square";
    context.lineWidth = 5;
    context.fillRect(0, 0, width, height);
    let space = 10;
    for (let i = 0; i < width / space; i++) {
        for (let j = 0; j < height / space; j++) {
            let r = Math.floor(Math.random() * 3);
            context.strokeStyle = Utils.hsl(Math.random() * 360, 50, 50);
            if (r == 0) {
                Utils.drawLine(i * space, j * space, (i + 1) * space, (j + 1) * space);
            } else {
                Utils.drawLine(i * space, (j + 1) * space, (i + 1) * space, j * space);
            }
        }
    }
}