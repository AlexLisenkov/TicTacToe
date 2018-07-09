import {Tile} from "./Tile";

export class TileCombination {

    private tiles: Tile[];

    constructor(tiles: Tile[]) {
        this.tiles = tiles;
    }

    hasThreeOfTheSameKind(mark: string) : boolean {
        return this.tiles[0].getMark() === mark && this.tiles[1].getMark() === mark && this.tiles[2].getMark() === mark;
    }
}