import { Board } from "./Board";
import { Player } from "./Player";

export class HumanPlayer implements Player
{
    private mark : string;

    constructor (mark : string) {
        this.mark = mark;
    }

    getMove(board: Board) : number {
        const emptySpots = board.getEmptyPositions();

        if(!emptySpots.length) {
            throw new Error('Cannot determine a move without empty tiles');
        }
        return parseInt(window.prompt('Zet? ' + emptySpots.join(', ')));
    }

    getMark() : string {
        return this.mark;
    }
}