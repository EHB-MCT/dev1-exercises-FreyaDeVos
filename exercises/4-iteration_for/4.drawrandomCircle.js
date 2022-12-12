"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drawCircle4();

/* function drawCircle1() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillStyle = Utils.hsla(220, 140, 30, 90);
            let x = i * 100;
            let y = j * 100;
            Utils.fillCircle(x, y, 50);
        }
    }
} */

/* function drawCircle2() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillStyle = Utils.hsla(220, 140, 30, 90);
            let x = i * 100;
            let y = j * 100;
            Utils.fillCircle(x, y, Utils.randomNumber(0, 5) * 10);
        }
    }
} */

/* function drawCircle3() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillStyle = Utils.hsla(220, 140, 30, 90);
            let x = i * 100;
            let y = j * 100;
            Utils.fillCircle(x, y, 20 + y / 10);
        }
    }
} */

function drawCircle4() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            context.fillStyle = Utils.hsla(20 + i % 2 * 20, 150, 20 + i % 2 * 20, 90 + i % 2 * 30);
            Utils.fillCircle(x, y, 50);
        }
    }
}