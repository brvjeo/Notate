import { Component } from "./component";

export class FormComponent extends Component{
    constructor(name, method) {
        super('form');
        
        if(name != undefined) this.name = name;
        if(method != undefined) this.method = method;
    }

    set name(value){
        this.element.name = value;
    }

    set method(value){
        value = String(value).toLocaleLowerCase();
        if('get' != value && 'post' != value) return;
         
        this.element.method = value;
    }

    reset(){
        this.element.reset();
    }
}