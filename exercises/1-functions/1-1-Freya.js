"use strict";

drawFreya();




function drawFreya() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //draw F 
    context.lineWidth = 4;
    context.strokeStyle = "pink";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(50, 200);
    context.moveTo(50, 50);
    context.lineTo(100, 50);
    context.moveTo(50, 100);
    context.lineTo(100, 100);
    context.stroke();

    //draw R
    context.lineWidth = 4;
    context.strokeStyle = "red"
    context.beginPath();
    context.moveTo(120, 50);
    context.arc(120, 90, 40, 1.5 * Math.PI, 0.5 * Math.PI, false);
    context.stroke();
    context.moveTo(120, 50);
    context.lineTo(120, 200);
    context.moveTo(120, 125);
    context.lineTo(160, 200);
    context.stroke();


    //draw E
    context.lineWidth = 4;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(200, 200);
    context.moveTo(200, 50);
    context.lineTo(250, 50);
    context.moveTo(200, 100);
    context.lineTo(250, 100);
    context.moveTo(200, 200);
    context.lineTo(250, 200);
    context.stroke();

    //draw Y
    context.lineWidth = 4;
    context.strokeStyle = "yellow";
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(320, 200);
    context.moveTo(320, 50);
    context.lineTo(310, 130);
    context.stroke();

    //draw A
    context.lineWidth = 4;
    context.strokeStyle = "brown";
    context.beginPath();
    context.moveTo(400, 50);
    context.lineTo(380, 200);
    context.moveTo(400, 50);
    context.lineTo(420, 200);
    context.moveTo(388, 150);
    context.lineTo(412, 150);
    context.stroke();

}