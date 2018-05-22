import { Game } from "./Game";

var viewport = document.querySelector("#viewport");
var game = new Game(viewport);
game.start();