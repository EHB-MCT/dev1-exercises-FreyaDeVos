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

