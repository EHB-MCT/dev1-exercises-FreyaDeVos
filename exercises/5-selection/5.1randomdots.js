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

/* context.fillRect(0, 0, width, height);
for (let i = 0; i < 100000; i++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    if (y > height / 3 * 2) {
        context.fillStyle = "blue";
    } else if (y > height / 3) {
        context.fillStyle = "white";
    } else {
        context.fillStyle = "red";
    }
    Utils.fillCircle(x, y, 2);
} */


//5.1.3
/* 
drawRandomCircles();

function drawRandomCircles() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 10000; i++) {

        let x = Math.random() * width;
        let y = Math.random() * height;


        let distance = Utils.calculateDisctance(x, y, width / 2, height / 2);

        if (x < width / 4) {
            context.fillStyle = "red";
        } else if (x > width / 4 && x < width * 3 / 4) {
            context.fillStyle = "white";
        } else if (x > width * 3 / 4) {
            context.fillStyle = "blue";
        }
        Utils.fillCircle(x, y, 2);
    }
} */

/* //5.1.4 green and white 
drawRandomDots();

function drawRandomDots() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDisctance(x, y, width / 2, height / 2);
        if (x < width * 3 / 4 && y < height * 3 / 4) {
            context.fillStyle = "green";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, y, 2);
    }
} */


//5.1.5 blue and white 

/* drawRandomDots();

function drawRandomDots() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        
        if (x > width / 4 && x < width * 3 / 4 && y > height / 4 && y < height * 3 / 4) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "blue";
        }
        Utils.fillCircle(x, y, 2);

    }
} */

//5.1. D circle 
drawRandomDots();

function drawRandomDots() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDisctance(x, y, width / 2, height / 2);

        if (distance < height / 3 && distance < width / 2) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, y, 2);

    }
}