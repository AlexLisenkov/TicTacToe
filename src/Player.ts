import { Board } from "./Board";

export class Player
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

        return emptySpots[0];
    }

    getMark() : string {
        return this.mark;
    }
}