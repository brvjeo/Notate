import { Component } from "../components/component";
import { FormComponent } from "../components/form.component";
import { view } from "../view/signupform.view";


export class SignupForm {
    constructor() {
        this.component = new FormComponent();
        this.component.name = 'signup-form';
        this.component.id = this.component.name;
        this.component.classList.add('modal', 'fade');
        this.component.setAttribute('tabindex', '-1');
        this.component.setAttribute('data-bs-backdrop', 'static');
        this.component.setAttribute('data-bs-keyboard', 'false');
        this.component.controls = {
            input_name: this.component.name + '-name',
            input_lastname: this.component.name + '-lastname',
            input_email: this.component.name + '-email',
            input_country: this.component.name + '-country',
            input_password: this.component.name + '-password',
            input_confirm: this.component.name + '-confirm',
            btn_close: this.component.name + '-close',
            btn_signup: this.component.name + 'signup'
        }
        this.component.view = view(this.component);
        Component.prototype.render.call(this.component);
    }

    showTooltip(text, type = 'alert-danger'){
        let tooltip = this.component.querySelector(`#${this.component.name}-tooltip`);
        tooltip.classList.add(type);
        tooltip.textContent = text;
        tooltip.classList.remove('animated-hidden');

        setTimeout(() => {
            tooltip.classList.add('animated-hidden');
            tooltip.textContent = '';
            tooltip.classList.remove(type);
        }, 6000);
    }
    
    set onclose(value){
        this.component.querySelector(`#${this.component.controls.btn_close}`).addEventListener('click', value);
    }
}