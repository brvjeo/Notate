import { ButtonComponent } from "./button.component";

export class SubmitButtonComponent extends ButtonComponent{
    constructor(name){
        super();

        this.type = 'submit';
        if(name != undefined) this.name = name;
    }

    set type(type){
        this.element.type = type;
    }
}