"use strict";


drawStar();

function drawStar() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //kader 
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.beginPath();
    context.rect(100, 100, 600, 600);
    context.stroke();

    //ronde hoeken 
    context.beginPath();
    context.moveTo(100, 100);
    context.arc(100, 100, 300, 0, Math.PI / 2, false);
    context.moveTo(700, 100);
    context.arc(700, 100, 300, Math.PI / 2, Math.PI, false);
    context.moveTo(100, 700);
    context.arc(100, 700, 300, 3 * Math.PI / 2, 0, false);
    context.moveTo(700, 700);
    context.arc(700, 700, 300, Math.PI, 3 * Math.PI / 2, false);
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

    //vierkant 
    context.beginPath();
    context.fillStyle = "orange";
    context.strokeStyle = "6";
    context.translate(350, 350);
    context.rotate((Math.PI / 180) * 45)
    //context.moveTo(400, 400);
    context.rect(0, -70, 140, 140);
    context.fill();
    context.stroke();

}