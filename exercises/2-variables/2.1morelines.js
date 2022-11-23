"use strict";

drawHouse();

function drawHouse() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.fillStyle = "#a52a2a";
    context.fillRect(300, 300, 100, 100);

}