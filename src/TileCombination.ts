import {Tile} from "./Tile";

export class TileCombination {

    private tiles: Tile[];

    constructor(tiles: Tile[]) {
        this.tiles = tiles;
    }

    hasThreeOfTheSameKind() : boolean {
        return this.tiles[0].isMarked() &&
            this.tiles[1].getMark() == this.tiles[2].getMark() &&
            this.tiles[0].getMark() == this.tiles[2].getMark();
    }
}