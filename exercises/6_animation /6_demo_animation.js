"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
let xPos = width / 2;
let yPos = height / 2;
context.fillRect(0, 0, width, height);
update();

function update(currentTime) {
    frameCount++;

    context.fillStyle = Utils.hsl(frameCount, 100, 50);
    Utils.fillCircle(xPos, yPos, 25);

    xPos += Utils.randomNumber(-9, 5);
    yPos += Utils.randomNumber(-5, 5);

    requestAnimationFrame(update);
}



//bewegende bolledtje van links nar rechtsv a scherm - als het rechts van scherm is begint het trg van links 
/* let frameCount = 0; // best globale variabele 
let lastTime = 0 //doel aantal frames per sec uitrekennen - moet globale variabele zijn - deze varaibele bevat de waarde/ tijd van de vorige frame. 
//currentTime= tijd van het huisige frame. in millieseconden
//fps=frame per second 

update();

function update(currentTime) {
    console.log(currentTime);
    let difference = (currentTime - lastTime) / 1000; // verschil tussen tijdstipp vorige frame en tijdstip huidige frame.(was in millieseconden/1000 = seconden) )
    let FPS = 1 / difference;
    console.log("FPS=" + FPS);

    lastTime = currentTime; // de laatste tijd is nu de huidige tijd, zo wordt het voorbereid voor de volgende stap. 

    frameCount++;
    if (frameCount < width) {
        frameCount = 0;
    }
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";
    Utils.fillCircle(frameCount, 200, 25);
    requestAnimationFrame(update);

} */

//bewegend bolletje van midden van scherm 


/* let frameCount = 0; // best globale variabele 
let xPos = width / 2;
let yPos = height / 2;

context.fillRect(0, 0, width, height);

//update();

function update(currentTime) {
    frameCount++;
    context.fillStyle = "black";

    context.fillStyle = Utils.hsl(frameCount, 100, 50);
    Utils.fillCircle(xPos, yPos, 25);

    xPos += Utils.randomNumber(-10, 10);
    yPos += Utils.randomNumber(-5, 5);

    requestAnimationFrame(update);

} */