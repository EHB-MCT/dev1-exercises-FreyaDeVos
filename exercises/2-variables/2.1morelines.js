 "use strict";
 let context;

 drawLine();


 function drawLine() {
     let canvas = document.querySelector("canvas");
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     context = canvas.getContext("2d");

     //get the width of the canvas
     let canvasWidth = context.canvas.width;

     //distance from the sides of the window
     let distance = 300;

     context.lineWidth = 4;
     context.beginPath();
     context.moveTo(distance, 50);
     context.lineTo(canvasWidth - distance, 50);
     context.lineTo(distance, 150);
     context.lineTo(canvasWidth - distance, 150);
     context.lineTo(distance, 250);
     context.lineTo(canvasWidth - distance, 250);
     context.lineTo(distance, 350);
     context.lineTo(canvasWidth - distance, 350);
     context.lineTo(distance, 450);
     context.lineTo(canvasWidth - distance, 450);
     context.closePath();
     context.stroke();
 }