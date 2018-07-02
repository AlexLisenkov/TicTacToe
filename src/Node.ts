import {Board} from "./Board";

export class Node {
    private children : Node[] = [];
    private isMyMove: boolean;

    constructor(isMyMove:boolean) {
        this.isMyMove = isMyMove;
    }

    setChildren(value: Node[]) {
        this.children = value;
    }

    addChild(node: Node) {
        this.children.push(node);
    }

}