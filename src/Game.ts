import { Board } from "./Board";
import { HumanPlayer } from "./HumanPlayer";
import { Player } from "./Player";
import { AIPlayer } from "./AIPlayer";

export class Game {
    private viewport : Element ;
    private board : Board ;
    private players : Player[] ;
    private currentPlayer : number = 0;

    constructor(viewport : Element) {
        this.viewport = viewport;
        this.players = [
            new AIPlayer('x'),
            new AIPlayer('o')
        ];
        this.board = new Board();
    }

    start() : void {
        this.viewport.innerHTML = this.board.getBoardAsHTML();

        this.executeMove()
    }

    private isFinished() : boolean {
        return this.board.isFull() || this.board.hasThreeInARowOfTheSameKind("x") || this.board.hasThreeInARowOfTheSameKind("o");
    }

    private executeMove() {
        setTimeout(x => {
            if (!this.isFinished()) {
                let clonedBoard = this.board.clone();
                let currentPlayer = this.players[this.currentPlayer];
                let currentMove = currentPlayer.getMove(clonedBoard);
                let mark = currentPlayer.getMark();
                this.board.executeMove(mark, currentMove);
                this.currentPlayer = this.currentPlayer === 1 ? 0 : 1;

                this.executeMove();
            }

            this.viewport.innerHTML = this.board.getBoardAsHTML();

        }, 250);

    }
}