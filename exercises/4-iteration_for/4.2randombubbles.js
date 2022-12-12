"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
    context.fillRect(0, 0, width, height);
    drawBubbles();

}


//he position of the circles should always be within the boundaries of the window, 
//with a margin of 200 pixels from the sides, no matter how big the windows



function drawBubbles() {
    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 10; j++) {
            let x = Utils.randomNumber(200, width - 200);
            let y = Utils.randomNumber(200, height - 200);
            let size = Utils.randomNumber(10, 50);
            context.fillStyle = Utils.hsla(Utils.randomNumber(0, 180), 75, 50, 30);
            Utils.fillCircle(x, y, size);
        }
    }
}