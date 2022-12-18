"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);


let names = []; //lege lijst en nadien waarden steken . 

names[0] = "peter";
names[1] = "rayan";
names[2] = "sofie";
names[3] = "jan";
names[4] = "ian";



//let r = Utils.randomNumber(0, 3); // want vier posities 
//console.log(names[r]); // kijken op indek 2, derde plaats in lijstje 

// hier kan een kansspel gemaakt van worden. 


// het volledige lijst afprointen: 


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}