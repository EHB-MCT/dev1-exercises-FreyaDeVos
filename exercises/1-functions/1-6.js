"use strict";


drawStar();

function drawStar() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.strokeStyle = "orange";
    context.lineWidth = 5;
    context.beginPath();
    context.rect(100, 100, 600, 600);
    context.stroke();

    //diagonalen
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(700, 700);

    context.moveTo(150, 100);
    context.lineTo(700, 650);
    context.moveTo(200, 100);
    context.lineTo(700, 600);

    context.moveTo(100, 150);
    context.lineTo(650, 700);
    context.moveTo(100, 200);
    context.lineTo(600, 700);

    //van r naar links diagonalen 
    context.moveTo(700, 100);
    context.lineTo(100, 700);

    context.moveTo(650, 100);
    context.lineTo(100, 650);
    context.moveTo(600, 100);
    context.lineTo(100, 600);

    context.moveTo(700, 150);
    context.lineTo(150, 700);
    context.moveTo(700, 200);
    context.lineTo(200, 700);
    context.stroke();


    context.fillStyle = "pink";
    context.beginPath();
    //context.arc(100, 100, 100, Math.PI, 0, true);
    context.arc(100, 100, 200, Math.PI / 2, Math.PI, true);
    context.fill();






}