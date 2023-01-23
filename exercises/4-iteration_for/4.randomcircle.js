"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drawCircle6();

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

function drawCircle6() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            context.fillStyle = Utils.hsla(60 + i % 2 * 90, 150, 20, 40 + j % 2 * 50);
            Utils.fillCircle(x, y, 50);
        }
    }
}