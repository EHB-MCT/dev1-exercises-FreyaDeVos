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