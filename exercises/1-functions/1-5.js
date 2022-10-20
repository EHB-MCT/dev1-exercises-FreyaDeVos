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

    //sea
    context.fillStyle = "blue";
    context.beginPath();
    context.rect(50, 400, 500, 200);
    context.fill();

    //sun
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(300, 400, 200, 0, Math.PI, true);
    context.fill();
}