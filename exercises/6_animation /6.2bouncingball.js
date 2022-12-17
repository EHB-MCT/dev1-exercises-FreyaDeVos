"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let size = 50;
let x = Utils.randomNumber(size, width - size);
let y = Utils.randomNumber(size, height - size);
let hSpeed = 5;
let vSpeed = 5;
let isPlaying = true;

document.onmousedown = click;

/**
 * 
 * @param {MouseEvent} eventData 
 */


function click(eventData) {
    //console.log(eventData.pageX + " " + eventData.pageY, x, y);
    if (Utils.calculateDisctance(eventData.pageX, eventData.pageY, x, y) < size) {
        isPlaying = false;
        context.fillStyle = "red";
        Utils.fillCircle(eventData.pageX, eventData.pageY, size / 2);
    }
}

draw();

function draw() {
    if (isPlaying == true) {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "blue";
        Utils.fillCircle(x, y, size);
        x += hSpeed;
        y += vSpeed;
        if (x >= width - size || x <= size) {
            hSpeed *= -1;
        }
        if (y >= height - size || y <= size) {
            vSpeed *= -1;
        }
        requestAnimationFrame(draw);
    }
}