"use strict";

drawSunSet();


function drawSunSet() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //sky
    context.fillStyle = "orange";
    context.beginPath();
    context.rect(50, 50, 500, 400);
    context.fill();

    //sun
    context.fillStyle = "yellow";
    context.beginPath();
    context.ellipse(300, 400, 200, 150, 0, 0, 2 * Math.PI)
    context.fill();

    //sea
    context.fillStyle = "blue";
    context.beginPath();
    context.rect(50, 400, 500, 200);
    context.fill();

}