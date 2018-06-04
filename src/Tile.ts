export class Tile {
    private mark: string = null;

    setMark(mark: string) : void {
        if (this.mark) {
            throw new Error('Tile already filled');
        }

        this.mark = mark;
    }

    isMarked() : boolean {
        return this.mark !== null;
    }

    getMark() : string {
        return this.mark;
    }

    clone() : Tile {
        const tile =  new Tile();
        tile.setMark(this.mark);
        return tile;
    }
}