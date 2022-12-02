"use strict";

import * as Utils from "../scripts/utils.js";
import context from "../scripts/context.js";


drawCircles();

function drawCircles() {
   

    let i = 1;
    while (i <= 4) {

        Utils.fillCirclefillCircle(i * 100, 100, 50);
        i++;
    }

}