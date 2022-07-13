import { FormHandler } from "./form.handler";
import { LoginEvent } from "../events/signin.event";

export class AuthFormHandler extends FormHandler{
    constructor(form){
        super(form);

        this.onsubmit = this.#onSubmit.bind(this);
    }

    #onSubmit(e){
        e.preventDefault();

        this.data = FormHandler.transferToJSON(new FormData(this.form));
    }
}