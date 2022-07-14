import { Component } from "./component";

export class FormComponent extends Component{
    constructor(name, method) {
        super('form');
        
        if(name != undefined) this.name = name;
        if(method != undefined) this.method = method;
    }

    set method(method){
        method = String(method).toLocaleLowerCase();
        if('get' != method && 'post' != method) return;
         
        this.element.method = method;
    }

    reset(){
        this.element.reset();
    }
}