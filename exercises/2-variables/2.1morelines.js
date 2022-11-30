"use strict";
let context;
setup(x, y);

drawLine(x, y);

function drawLine() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    let x = 50;
    let y = 50;

    //line
    context.lineWidth = '4';
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(x, y)
    context.lineTo(x + 50, y + 50);
    context.stroke();

}