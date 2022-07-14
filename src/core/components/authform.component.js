import { Component } from "./component";
import { FormComponent } from "./form.component";
import { SubmitButtonComponent } from './submitbutton.component';

export class AuthFormComponent extends FormComponent{
    constructor(){
        super('auth-form');

        this.merge(
            new Component('div').addClass('mb-5 auth-logo d-flex justify-content-center')
                .setInnerHTML('<img src="./assets/brand-notate.svg" alt="brand-notate">'),
            new Component('div').addClass('mb-3')
                .setInnerHTML('<input type="text" name="auth-login" class="form-control" placeholder="Login">'),
            new Component('div').addClass('mb-3')
                .setInnerHTML('<input type="password" name="auth-passw" class="form-control" placeholder="Password">'),
            new Component('div').addClass('d-flex flex-column justify-content-center')
                .merge( 
                    new SubmitButtonComponent('auth-log-in').addClass('btn btn-outline-dark mb-3').setTextContent('Login'),
                    new SubmitButtonComponent('auth-sign-in').addClass('btn btn-dark').setTextContent('Signin')
                )
        );

        console.log(this.element);
    }
}