import {Tile} from "./Tile";
import {TileCombination} from "./TileCombination";

export class Board
{
    private tiles: Tile[];
    private tileCombinations: TileCombination[];

    constructor(tiles:Tile[] = null) {
        if(!tiles ){
            this.tiles = [
                new Tile(),
                new Tile(),
                new Tile(),
                new Tile(),
                new Tile(),
                new Tile(),
                new Tile(),
                new Tile(),
                new Tile()
            ];
        } else {
            this.tiles = tiles;
        }

        this.tileCombinations = [
            this.createTileCombination(0,1,2),
            this.createTileCombination(3,4,5),
            this.createTileCombination(6,7,8),
            this.createTileCombination(0,4,8),
            this.createTileCombination(2,4,6),
            this.createTileCombination(0,3,6),
            this.createTileCombination(1,4,7),
            this.createTileCombination(2,5,8)
        ]

    }

    createTileCombination(index1: number, index2: number, index3: number) : TileCombination {
        return new TileCombination([this.tiles[index1], this.tiles[index2], this.tiles[index3]])
    }

    clone() : Board {
        return new Board([
            this.tiles[0].clone(),
            this.tiles[1].clone(),
            this.tiles[2].clone(),
            this.tiles[3].clone(),
            this.tiles[4].clone(),
            this.tiles[5].clone(),
            this.tiles[6].clone(),
            this.tiles[7].clone(),
            this.tiles[8].clone()
        ]);
    }

    executeMove(mark: string, position: number) : void {
        this.tiles[position].setMark(mark);
    }

    isFull() : boolean {
        for (let tile of this.tiles) {
            if (!tile.isMarked()) {
                return false;
            }
        }
        return true;
    }

    getEmptyPositions() : number[] {
        let emptyPositions = [];
        for (let i = 0; i < this.tiles.length; i++) {
            if (!this.tiles[i].isMarked()) {
                emptyPositions.push(i);
            }
        }
        return emptyPositions;
    }

    hasThreeInARowOfTheSameKind() : boolean {
        for(let i = 0; i < this.tileCombinations.length; i++) {
            if(this.tileCombinations[i].hasThreeOfTheSameKind()) {
                return true
            }
        }
        return false
    }

    getBoardAsHTML() : string {
        return `${this.getMark(0)} ${this.getMark(1)} ${this.getMark(2)} <br/> 
                ${this.getMark(3)} ${this.getMark(4)} ${this.getMark(5)} <br/> 
                ${this.getMark(6)} ${this.getMark(7)} ${this.getMark(8)} <br/>`
    }

    getMark(index : number) : string {

        return this.tiles[index].isMarked() ? this.tiles[index].getMark() : '-';
    }
}