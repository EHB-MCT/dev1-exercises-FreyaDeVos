"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drawSquares();

function drawSquares() {
    let color = 0;
    for (let column = 0; column < 10; column++) {
        for (let row = 0; row < 10; row++) {
            context.fillStyle = Utils.hsl(3.6 * color, 200, 50);
            context.fillRect(50 + column * 55, 50 + row * 55, 50, 50);
            color++;
        }
    }


}