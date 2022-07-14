import { Component } from "./component";

export class InputComponent extends Component{
    constructor(type, name){
        super('input');
        if(name != undefined) this.name = name;
        this.type = type ?? 'text';
    }

    set placeholder(value){
        this.setPlaceHolder(value);
    }

    set name(value){
        this.element.name = value;
    }

    set type(value){
        this.element.type = value;
    }

    setPlaceHolder(value){
        this.element.placeholder = value;

        return this;
    }
}