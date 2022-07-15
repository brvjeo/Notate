import { Component } from "./component";

export class ButtonComponent extends Component {
    constructor(name, text, type) {
        super('button');

        this.element.name = name;
        this.text = text;

        if (type != undefined) this.element.type = type;
    }
}