"use strict";

drawLine();

function drawLine() {
    let canvas = document.querySelectir("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 4;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(173, 50);
    context.lineTo(300, 50)
    context.stroke();

}