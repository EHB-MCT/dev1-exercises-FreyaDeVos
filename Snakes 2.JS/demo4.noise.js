"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../Snakes 2.JS/scripts/noise.js";


drawSquares();


function drawSquares() {
    for (let i = 0; i < 500; i++) {
        let y = Noise.perlinNoise(i / 100) * 500;
        context.fillRect(i, y, 40, 40);
    }

}