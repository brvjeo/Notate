import { model, styles } from '../models/auth-form.model';
import '../models/auth-form.styles.scss';

export class AuthForm extends HTMLFormElement {
    constructor(name = 'auth-form') {
        super();

        this.name = name;
        this.classList.add(this.name);
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

    applyStyles(styles) {
        for (let style in styles) {
            this.style[style] = styles[style];
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

    inputIsNotEmpty(...inputs) {
        return inputs.every(input => {
            if(!trimSpaces(this.elements[input].value).length){
                return false;
            }else{
                return true;
            }
        },this);
    }

    deactivateControls(names = [...this.controlNames]) {
        names.forEach(name => this.elements[name].setAttribute('disabled', true));

        this.controlsDisabled = true;
    }

    activateControls() {
        for (let name in this.controlNames) {
            this.elements[this.controlNames[name]].removeAttribute('disabled', true);
        }

        this.controlsDisabled = false;
    }

    async showTooltip(text = 'Invalid email or password!', color = 'text-danger') {
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

    async freezeFor(ms){
        this.deactivateControls();
        setTimeout(() => {
            this.activateControls();
        },ms);
    }
}
window.customElements.define('auth-form', AuthForm, { extends: 'form' });

function cutString(str, substr) {
    return str.substring(str.indexOf(substr) + substr.length);
}

function trimSpaces(str){ // think about Array.prototype.splice.call(str,...);
    str = [...str];

    let index = str.findIndex(value => value == ' ');
    while(index != -1){
        str.splice(index,1);
        index = str.findIndex(value => value == ' ');
    }

    return str.join('');
}


