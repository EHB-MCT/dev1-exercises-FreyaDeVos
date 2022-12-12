"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


//The startposition (on the x-axis) of each row should alternate by 50 pixels.

drawBricks()

function drawBricks() {
    let row = 8;
    let column = 8;
    let width = 100;
    let height = 50;
    let space = 50;
    context.fillstyle = "red";
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {

            let y = space + j * (height + 5);
            context.fillRect(x, y, width, height);

        }

    }



}