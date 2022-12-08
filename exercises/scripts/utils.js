"use strict";
import context from "./context.js";


/**
 * fill circle
 * @param {number} x x-coordonate of the centre of the circle
 * @param {number} y y-coordonate of the centre of the circle
 * @param {number} r the radius of the circle
 */



export function fillCircle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fill();

}

/**
 * 
 * @param {number} x1 x-coordinate of the startingpoint
 * @param {number} y1 y-coordinate of the startingpoint 
 * @param {number} x2 x-coordinate of endingpoint of line 
 * @param {number} y2 y-coordinate of endingpoint of the line
 */

export function drawLine(x1, y1, x2, y2) {

    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();

}