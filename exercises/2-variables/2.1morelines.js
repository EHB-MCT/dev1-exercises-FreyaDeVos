"use strict";
let context;

drawLine();
//drawTree(300, 500);
//drawTree(400, 500);
//drawTree(200, 300);

function drawLine() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");

    //get the width of the canvas
    let canvasWidth = context.canvas.width;

    //distance from the sides of the window
    let distance = 200;

    context.strokeStyle = "black";
    context.lineWidth = "4";
    context.beginPath();
    context.moveTo(distance, 50);
    context.lineTo(canvasWidth - distance, 50);
    context.moveTo(distance, 150);
    context.lineTo(canvasWidth - distance, 150);
    context.moveTo(distance, 250);
    context.lineTo(canvasWidth - distance, 250);
    context.moveTo(distance, 350);
    context.lineTo(canvasWidth - distance, 350);
    context.moveTo(distance, 450);
    context.lineTo(canvasWidth - distance, 450);
    context.closePath();
    context.stroke();





}

//function drawTree(x, y) {

context.fillStyle = "green";
context.fillRect(x, y, 20, 100);
context.fillStyle = "black";
context.beginPath();
context.ellipse(x + 10, y - 50, 40, 80, 0, 0, Math.PI * 2);
context.fill();


//function drawHouse() {

let x = 100;
let y = 500;
context.fillStyle = "#a52a2a";
context.fillRect(x, y, 100, 100);
context.fillStyle = "green";
context.fillRect(x + 50, y + 50, 25, 50);
context.fillStyle = "brown";
context.beginPath();
context.moveTo(x, y);
context.lineTo(x + 50, y - 50);
context.lineTo(x + 100, y);
context.fill();