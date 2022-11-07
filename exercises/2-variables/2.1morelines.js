"use strict";


function drawLine();



function drawSunSet() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    //sun
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(300, 400, 200, 0, Math.PI, true);
    context.fill();

}