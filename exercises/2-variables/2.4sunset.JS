"use strict"

drawSunset();

function drawSunset() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    context.fillStyle = "#FFA500";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#FF4500";
    context.fillRect(0, canvasHeight * 1 / 4, canvasWidth, canvasHeight * 1 / 4);
    context.fillStyle = "#8B0000";
    context.fillRect(0, canvasHeight / 2, canvasWidth, canvasHeight * 1 / 4);
    context.fillStyle = "#F9E79F";
    context.beginPath();
    context.arc(canvasWidth / 2, canvasHeight * 3 / 4, canvasWidth / 4, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#00198C";
    context.fillRect(0, canvasHeight * 3 / 4, canvasWidth, canvasHeight * 1 / 4);
}

