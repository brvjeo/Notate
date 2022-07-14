import { ButtonComponent } from "./button.component";

export class SubmitButtonComponent extends ButtonComponent{
    constructor(name){
        super();

        this.type = 'submit';
        if(name != undefined) this.name = name;
    }

    set name(value){
        this.element.name = value;
    }

    set type(value){
        this.element.type = value;
    }
}