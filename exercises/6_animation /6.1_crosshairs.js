"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

/**
 * 
 * @param {Mouseevent} eventData 
 */

function move(eventData) {
    let x = eventData.pageX;
    let y = eventData.pageY;
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "red";
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();

}