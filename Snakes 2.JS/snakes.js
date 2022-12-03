"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


/* //3.1.A horizonatle lijnen 

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 0;
    while (i <= 10) {
        Utils.drawLine(50, 75 + i * 20, 320, 75 + i * 20);
        i = i + 1;
    }
} */


//3.1B grid

draw();

export function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    while (i <= 5); {
        let x = 75 + i * 50;
        let y = x;
        Utils.drawLine(x, 75, x, 325);
        Utils.drawLine(75, y, 325, y);
        i = i + 1;
    }

}

//3.1.C horizomnatla en verticale lijnen 
/* draw();
function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let space = 150 + i * 25;
        Utils.drawLine(50, space, 350, space);
        Utils.drawLine(space, 50, space, 350);
        i = i + 1;
    }
} */