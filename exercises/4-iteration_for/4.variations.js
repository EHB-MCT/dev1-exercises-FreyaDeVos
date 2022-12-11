"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

context.fillStyle = "#2C3E50";
context.fillRect(50, 50, 400, 400);

let n = 11; // total (element count)s
let d = 10; // diameter
let m = 75; // margin
for (let i = 0; i < n; i++) {
    let x = m + 35 * i;
    for (let j = 0; j < n; j++) {
        context.fillStyle = Utils.hsl(0, 0, j % 3 * 100);
        let y = m + 35 * j;
        Utils.fillCircle(x, y, d);
    }
}