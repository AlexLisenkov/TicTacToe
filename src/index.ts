import { Game } from "./Game";

const viewport = document.querySelector("#viewport");
const game = new Game(viewport);
game.start();