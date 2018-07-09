import { Board } from "./Board";
import { Player } from "./Player";

enum MinMax {
    Min = -1,
    Max = 1
}

class MoveScore {
    public move : number;
    public score : number;

    constructor(move : number, score : number) {
        this.move = move;
        this.score = score;
    }
}

export class AIPlayer implements Player
{
    private mark : string;

    constructor (mark : string) {
        this.mark = mark;
    }

    getMove(board: Board) : number {
        const moveScores = this.calculateMovesAndScores(board, this.mark);
        const choosenMove = this.chooseMove(moveScores, MinMax.Max);

        return choosenMove.move;
    }

    getMark() : string {
        return this.mark;
    }

    private chooseMove(moveScores: MoveScore[], minMax: MinMax) : MoveScore {
        let correctedMoves = moveScores
            .map(x => new MoveScore(x.move, x.score * minMax));

        for(let correctedMove of correctedMoves) {
            if (correctedMove.score == 1) {
                return correctedMove;
            }
        }
        for(let correctedMove of correctedMoves) {
            if (correctedMove.score == 0) {
                return correctedMove;
            }
        }
        return correctedMoves[0];
    }

    private calculateMovesAndScores(board : Board, mark : string) : MoveScore[] {
        let result : MoveScore[] = [];

        for(let move of board.getEmptyPositions()) {

            let clonedBoard = board.clone();
            clonedBoard.executeMove(mark, move);

            let moveScore: MoveScore;

            if(clonedBoard.hasThreeInARowOfTheSameKind(mark)) {
                moveScore = new MoveScore(move, 1);
            }else if(clonedBoard.hasThreeInARowOfTheSameKind(mark === "x" ? "o" : "x")) {
                moveScore = new MoveScore(move, -1);
            }else if(clonedBoard.isFull()) {
                moveScore = new MoveScore(move, 0);

            } else {
                let moveScores = this.calculateMovesAndScores(clonedBoard, mark === "x" ? "o" : "x");
                moveScore = this.chooseMove(moveScores, mark === this.getMark() ? MinMax.Max : MinMax.Min);
            }

            result.push(moveScore);
        }

        return result;
    }
}