"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drawCircle();

function drawCircle() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = 100 + i * 60;
            let y = 100 + j * 50;
            let r = j * 1
            context.fillStyle = Utils.hsla(Utils.randomNumber(9, 300), 70, 20, 20);
            Utils.fillCircle(x, y, r);

        }

    }
}