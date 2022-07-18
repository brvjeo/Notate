import { model, styles } from '../models/auth-form.model';
import { BaseForm } from './base-form.component';
import '../styles/auth-form.styles';

export class AuthForm extends BaseForm {
    constructor(name = 'auth-form') {
        super(name);

        this.applyStyles(styles);
        this.model = model(this.name, this.controlNames);

        this.oninput = (e) => {
            if (this.inputIsNotEmpty(this.controlNames.input_login, this.controlNames.input_password)) {
                this.activateControls();
            } else {
                this.deactivateControls([this.controlNames.btn_login,this.controlNames.btn_signup]);
            }
        }
    }

    connectedCallback() {
        this.insertAdjacentHTML('afterbegin', this.model);
        this.deactivateControls([this.controlNames.btn_login,this.controlNames.btn_signup]);
    }

    get controlNames() {
        let that = this;

        return {
            input_login: that.name + '-' + 'login',
            input_password: that.name + '-' + 'password',
            btn_login: that.name + '-' + 'log-in',
            btn_signup: that.name + '-' + 'sign-up',
            *[Symbol.iterator]() {
                for (let key in this) {
                    yield this[key];
                }
            }
        };
    }

    deactivateControls(names = [...this.controlNames]){
        super.deactivateControls(names);
    }

    showTooltip(text = 'Invalid email or password!', color = 'text-danger') {
        let tooltip = this.querySelector(`#${this.name}-tooltip`);
        tooltip.classList.add(color);
        tooltip.textContent = text;
        tooltip.classList.remove('animated-hidden');

        setTimeout(() => {
            tooltip.classList.add('animated-hidden');
            tooltip.textContent = '';
            tooltip.classList.remove(color);
        }, 4000);
    }

    freezeFor(ms){
        this.deactivateControls();
        setTimeout(() => {
            this.activateControls();
        },ms);
    }
}
window.customElements.define('auth-form', AuthForm, {extends: 'form'});