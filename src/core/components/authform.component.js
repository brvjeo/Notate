import { Component } from "./component";
import { FormComponent } from "./form.component";
import { ImageComponent } from "./image.component";
import { InputComponent } from "./input.component";
import { SubmitButtonComponent } from './submitbutton.component';

export class AuthFormComponent extends FormComponent {
    constructor() {
        super('auth-form');

        this.merge(
            new Component('div').addClass('mb-5 auth-logo d-flex justify-content-center')
                .merge(new ImageComponent('./assets/brand-notate.svg', 'brand-notate')),
            new Component('div').addClass('mb-3')
                .merge(new InputComponent('text', 'auth-login').setPlaceHolder('Login').addClass('form-control')),
            new Component('div').addClass('mb-3')
                .merge(new InputComponent('password', 'auth-passw').setPlaceHolder('Password').addClass('form-control')),
            new Component('div').addClass('d-flex flex-column justify-content-center')
                .merge(
                    new SubmitButtonComponent('auth-log-in').addClass('btn btn-outline-dark mb-3').setTextContent('Login'),
                    new SubmitButtonComponent('auth-sign-in').addClass('btn btn-dark').setTextContent('Signin')
                )
        ).addClass('auth-form');

        this.onsubmit = this.#onSubmit;
        this.onlogin = this.#onLogin;
        this.onsignin = this.#onSignin;
    }

    set onsubmit(value) {
        this.element.onsubmit = value;
    }

    set onlogin(value) {
        this.element.addEventListener('auth-log-in', value);
    }

    set onsignin(value) {
        this.element.addEventListener('auth-sign-in', value);
    }

    #onSubmit(e) {
        e.preventDefault();
        
        this.dispatchEvent(new Event(e.submitter.name));
    }

    #onLogin(e){
        console.log('login');
    }

    #onSignin(e){
        console.log('signin');
    }
}