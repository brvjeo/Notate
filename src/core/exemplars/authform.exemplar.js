import { Component } from '../components/component';
import { FormComponent } from "../components/form.component";
import { ImageComponent } from '../components/image.component';
import { InputComponent } from '../components/input.component';
import { ButtonComponent } from '../components/button.component';
import { HiddenComponent } from '../components/hidden.component';


export class AuthFormExemplar extends FormComponent {
    #InvalidAuthMessage = 'Invalid login or password!';
    #InvalidAuthComponent;

    constructor() {
        super('auth-form');

        this.onsubmit = this.#onSubmit;
        this.onlogin = this.#onLogin;
        this.onsignin = this.#onSignin;

        this.#InvalidAuthComponent = new HiddenComponent('div');
        this.#InvalidAuthComponent.setTextContent(this.#InvalidAuthMessage);
        this.#InvalidAuthComponent.addClass('mb-3 text-center text-danger');
    }

    render() {
        this.addClass(this.name);
        this.merge(
            new Component('div')
                .addClass('mb-5 auth-logo d-flex justify-content-center')
                .merge(new ImageComponent('./assets/brand-notate.svg', 'brand-notate')),
            new Component('div')
                .addClass('mb-3')
                .merge(new InputComponent('login', 'text').setPlaceHolder('Login').addClass('form-control')),
            new Component('div')
                .addClass('mb-3')
                .merge(new InputComponent('password', 'password').setPlaceHolder('Password').addClass('form-control')),
            this.#InvalidAuthComponent,
            new Component('div').addClass('d-flex flex-column justify-content-center')
                .merge(
                    new ButtonComponent('btn-login', 'Login').addClass('btn btn-outline-dark rounded mb-3'),
                    new ButtonComponent('btn-signin', 'Signin').addClass('btn btn-dark rounded'),
                )
        );

        return this;
    }

    set onlogin(value) {
        this.element.addEventListener('auth-form-btn-login', value.bind(this));
    }
    set onsignin(value) {
        this.element.addEventListener('auth-form-btn-signin', value.bind(this));
    }

    #onSubmit(e) {
        e.preventDefault();

        this.element.dispatchEvent(new Event(e.submitter.name));
        this.#disableButtons(5000, this.getControl('btn-login'), this.getControl('btn-signin'));
    }

    #onLogin(e) {
        if (false) {
            this.#InvalidAuthComponent.hidden = false;

            setTimeout(() => {
                this.#InvalidAuthComponent.hidden = true;
            }, 5000);
        }

        this.element.dispatchEvent(new Event('logged-in', { once: true, bubbles: true }));
    }

    #onSignin(e) {
        console.log('signin');
    }

    #disableButtons(ms, ...buttons) {
        for (let button of buttons) {
            button.classList.add('disabled');
        }

        setTimeout(() => {
            for (let button of buttons) {
                button.classList.remove('disabled');
            }
        }, ms);
    }
}