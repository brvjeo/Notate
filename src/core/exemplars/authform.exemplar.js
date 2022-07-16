import { Component } from '../components/component';
import { FormComponent } from "../components/form.component";
import { ImageComponent } from '../components/image.component';
import { InputComponent } from '../components/input.component';
import { ButtonComponent } from '../components/button.component';
import { getFormControlName } from '../functions';
import { InputHandler } from '../handlers/input.handler';

export class AuthFormExemplar extends FormComponent {
    #InvalidAuthMessage = 'Invalid login or password!';
    InvalidAuthComponent = new Component('div').addClass('mb-3', 'text-center', 'text-danger', 'border-danger', 'animated-hidden', 'transition-hidden');

    #isDisabled = true;

    constructor() {
        super('auth-form');

        this.addClass(this.name);
        this.merge(
            new Component('div')
                .addClass('mb-5', 'auth-logo', 'd-flex', 'justify-content-center')
                .merge(
                    new ImageComponent('./assets/brand-notate.svg', 'brand-notate')
                ),
            new Component('div')
                .addClass('mb-3')
                .merge(
                    new InputComponent('login', 'email')
                        .setPlaceHolder('Login')
                        .addClass('form-control')
                ),
            new Component('div')
                .addClass('mb-3')
                .merge(
                    new InputComponent('password', 'password')
                        .setPlaceHolder('Password')
                        .addClass('form-control')
                ),
            this.InvalidAuthComponent,
            new Component('div')
                .addClass('d-flex', 'flex-column', 'justify-content-center')
                .merge(
                    new ButtonComponent('log-in', 'Login')
                        .addClass('btn', 'btn-outline-dark', 'rounded', 'mb-3'),
                    new ButtonComponent('sign-up', 'Signup')
                        .addClass('btn', 'btn-dark', 'rounded'),
                )
        );
        this.deactivateControls();
        
        this.onsubmit = (e) => {
            e.preventDefault();
            this.element.dispatchEvent(new Event(getFormControlName(e.submitter.name, this.name + '-'), {
                bubbles: true
            }));
        };
        this.element.addEventListener('input', (e) => {
            if(!InputHandler.isEmpty(this.getControl('login')) && !InputHandler.isEmpty(this.getControl('password'))){
                this.activateControls();
            }else{
                this.deactivateControls();
            }
        });
    }

    get isDisabled(){
        return this.#isDisabled;
    }

    deactivateControls() {
        for (let control of this.element.elements) {
            if (control instanceof HTMLButtonElement) {
                control.classList.add('disabled');
            }
        }
        this.#isDisabled = true;
    }

    activateControls() {
        for (let control of this.element.elements) {
            if (control instanceof HTMLButtonElement) {
                control.classList.remove('disabled');
            }
        }
        this.#isDisabled = false;
    }

    hideInvalidAuthComponent(){
        this.InvalidAuthComponent.addClass('animated-hidden');
        this.InvalidAuthComponent.text = '';
    }

    showInvalidAuthComponent(msg = this.#InvalidAuthMessage){
        this.InvalidAuthComponent.text = msg;
        this.InvalidAuthComponent.removeClass('animated-hidden');

        setTimeout(() => {
            this.hideInvalidAuthComponent();
        },4000);
    }
}