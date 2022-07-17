import { model } from '../models/auth-form.model';

export class AuthForm extends HTMLFormElement {
    constructor(name = 'auth-form') {
        super();

        this.name = name;
        this.classList.add(this.name);
        this.model = model(this.controlNames);
        this.controlsDisabled = true;

        this.onsubmit = (e) => {
            e.preventDefault();

            this.showTooltip();
        }
    }

    connectedCallback(){
        this.insertAdjacentHTML('afterbegin', this.model);
        console.log(this);
    }

    get controlNames() {
        let that = this;

        return {
            input_login: that.name + '-' + 'login',
            input_password: that.name + '-' + 'password',
            btn_login: that.name + '-' + 'log-in',
            btn_signup: that.name + '-' + 'sign-up'
        }
    }

    deactivateControls() {
        for (let name in this.controlNames) {
            this.elements[this.controlNames[name]].setAttribute('disabled', true);
        }

        this.controlsDisabled = true;
    }

    activateControls() {
        for (let name in this.controlNames) {
            this.elements[this.controlNames[name]].removeAttribute('disabled', true);
        }

        this.controlsDisabled = false;
    }

    showTooltip(){
        let tooltip = this.querySelector(`#${this.name}-tooltip`);
        tooltip.textContent = 'Invalid email or password!';
        tooltip.classList.remove('animated-hidden');
        
        setTimeout(() => {
            tooltip.classList.add('animated-hidden');
        }, 4000);
    }
}
window.customElements.define('auth-form', AuthForm, { extends: 'form'} );

function cutString(str, substr){
    return str.substring(str.indexOf(substr) + substr.length);
}
