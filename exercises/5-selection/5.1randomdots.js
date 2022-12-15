"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;



//5.1 a helft helft 
/* drawRandomCircles();

function drawRandomCircles() {

    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {

        let x = Math.random() * width;
        let y = Math.random() * height;


        let distance = Utils.calculateDisctance(x, y, width / 2, height / 2);

        if (x < width / 2) {
            context.fillStyle = "red";
        } else if (x > width / 2) {
            context.fillStyle = "yellow";
        } else {
            context.fillStyle = "black";
        }
        Utils.fillCircle(x, y, 2);
    }
} */


//5.1 B dutch flag 

drawRandomCircles();

function drawRandomCircles() {

    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {

        let x = Math.random() * width;
        let y = Math.random() * height;


        let distance = Utils.calculateDisctance(x, y, width / 2, height / 2);

        if (y < height / 3) {
            context.fillStyle = "red";
        } else if (y > height * 1 / 3 && y < height * 2 / 3) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "blue";
        }
        Utils.fillCircle(x, y, 2);
    }
}