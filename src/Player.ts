import { Board } from "./Board";

export interface Player
{
    getMove(board: Board) : number;
    getMark() : string;
}