import { Component } from "../components/component";
import { FormComponent } from "../components/form.component";
import { view } from "../view/authform.view";

export class AuthForm {
    constructor() {
        this.component = new FormComponent();
        this.component.name = 'auth-form';
        this.component.autocomplete = 'off';
        this.component.controls = {
            input_login: this.component.name + '-login',
            input_password: this.component.name + '-password',
            btn_login: this.component.name + '-log-in',
            btn_signup: this.component.name + '-sign-up'
        };
        this.component.view = view(this.component);
        Component.prototype.render.call(this.component);
        this.component.deactivateControls.call(this.component, [this.component.controls.btn_login, this.component.controls.btn_signup]);

        this.component.oninput = (e) => {
            if(this.component.isEmpty(this.component.controls.input_login,this.component.controls.input_password)){
                this.component.deactivateControls.call(this.component, [this.component.controls.btn_login, this.component.controls.btn_signup]);
            }else{
                this.component.activateControls.call(this.component);
            }
        }
    }

    showTooltip(text = 'Invalid login or password!',color = 'text-danger'){
        let tooltip = this.component.querySelector(`#${this.component.name}-tooltip`);
        tooltip.classList.add(color);
        tooltip.textContent = text;
        tooltip.classList.remove('animated-hidden');

        setTimeout(() => {
            tooltip.classList.add('animated-hidden');
            tooltip.textContent = '';
            tooltip.classList.remove(color);
        }, 4000);
    }

    freeze(ms){
        this.component.deactivateControls();
        setTimeout(() => {
            this.component.activateControls();
        },ms);
    }
}