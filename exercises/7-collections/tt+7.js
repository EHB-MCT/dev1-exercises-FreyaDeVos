"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


/* let x = 0;
let y = 0;
for (let i = 0; i < 10; i++) {
    if (y >= 10) {
        y += 2;
        x++;
        console.log(x);
    } else if (x == y) {
        break;
    } else {
        x += 2;
    }
    console.log(x);

/*  */


function count() {
    let i = 0;
    let x = 5;
    while (i < x) {
        i += 2;
        x -= 1;
    }
    console.log(x)
}
//function drawDiamond(x, y, size) {

for (let i = 0; i < 1000; i++) {
    let color = Utils.randomNumber(1, 2);

    context.beginPath();
    context.lineWidth = 2;
    if (color == 1) {
        context.strokeStyle = Utils.hsl(0, 0, 25);
    } else {
        context.strokeStyle = Utils.hsl(0, 0, 75);
    }
    context.moveTo(diamondXPos[i], diamondYPos[i] - (diamondSize[i] / 2));
    context.lineTo(diamondXPos[i] + (diamondSize[i] / 2), diamondYPos[i]);
    context.lineTo(diamondXPos[i], diamondYPos[i] + (diamondSize[i] / 2));
    context.lineTo(diamondXPos[i] - (diamondSize[i] / 2), diamondYPos[i]);
    context.closePath();
    context.stroke();
}