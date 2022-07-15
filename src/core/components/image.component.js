import { Component } from "./component";

export class ImageComponent extends Component {
    constructor(url, alt) {
        super('img');

        this.src = url;
        if (alt != undefined) this.alt = alt;
    }

    set src(value) {
        this.element.src = value;
    }

    set alt(value) {
        this.element.alt = value;
    }
}
