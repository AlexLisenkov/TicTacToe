import { Board } from "./Board";
import { Player } from "./Player";
import {Node} from "./Node";

export class AIPlayer implements Player
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

        const tree = this.getBestMove(board, true);
        console.log(tree);

        return emptySpots[0];
    }

    getMark() : string {
        return this.mark;
    }

    getBestMove(board:Board, isMyMove : boolean) : Node {
        const mark = isMyMove ? 'o' : 'x';
        let emptyPositions = board.getEmptyPositions();
        let node = new Node(isMyMove);

        for(let position of emptyPositions) {
            let clonedBoard = board.clone();
            clonedBoard.executeMove(mark, position);
            let child = this.getBestMove(clonedBoard, !isMyMove);
            node.addChild(child);
        }
        return node;
    }

}