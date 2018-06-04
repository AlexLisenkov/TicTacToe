import { Board } from "./Board";
import { Player } from "./Player";

export class Game {
    private viewport : Element ;
    private board : Board ;
    private players : Player[] ;
    private currentPlayer : number = 0;

    constructor(viewport : Element) {
        this.viewport = viewport;
        this.players = [
            new Player('x'),
            new Player('o')
        ];
        this.board = new Board();
    }

    start() : void {
        while( !this.isFinished() ){
            let clonedBoard = this.board.clone();
            let currentPlayer = this.players[this.currentPlayer];
            let currentMove = currentPlayer.getMove(clonedBoard);
            let mark = currentPlayer.getMark();
            this.board.executeMove(mark, currentMove);
            this.currentPlayer = this.currentPlayer === 1 ? 0 : 1;
        }

        this.viewport.innerHTML = JSON.stringify(this.board);
    }

    private isFinished() : boolean {
        return this.board.isFull() || this.board.hasThreeInARowOfTheSameKind();
    }
}