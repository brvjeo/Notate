import { Component } from "./component";

export class HiddenComponent extends Component{
    constructor(tagName){
        super(tagName);

        this.hidden = true;
    }
}