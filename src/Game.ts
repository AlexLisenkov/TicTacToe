export class Game {
    private viewport : Element ;

    constructor(viewport : Element) {
        this.viewport = viewport;
    }

    start() : void {
        this.viewport.innerHTML = 'TODO!';
    }
}