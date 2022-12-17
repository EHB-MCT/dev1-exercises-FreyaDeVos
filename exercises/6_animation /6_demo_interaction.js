"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let colorAngle = 0;

window.onmousemove = move;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);





/**
 * 
 * @param {MouseEvent} eventData 
 */

function move(eventData) {
    let x = eventData.pageX;
    let y = eventData.pageY;

    context.fillStyle = Utils.hsl(colorAngle, 100, 50)
    Utils.fillCircle(x, y, 25);
    colorAngle++;
}