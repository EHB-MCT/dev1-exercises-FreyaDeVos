"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drawSquares();

function drawSquares() {
    for (leti = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillRect(50 + i * 55, 50 + j * 55, 50, 50);
        }
    }


}