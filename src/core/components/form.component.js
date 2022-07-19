import { trimSpaces } from '../functions';

export class FormComponent extends HTMLFormElement {
    constructor() {
        super();

        this.disabled = false;
        this.controls = null;
    }

    deactivateControls(names = Object.values(this.controls)) {
        names.forEach(name => this.elements[name].setAttribute('disabled', true));

        this.disabled = true;
    }

    activateControls() {
        for (let control of this.elements) {
            control.removeAttribute('disabled');
        }

        this.disabled = false;
    }

    isEmpty(...inputs){
        return inputs.some(input => !trimSpaces(this.getControl(input)?.value).length, this);
    }
    
    getControl(name) {
        return this.elements[name];
    }
}

window.customElements.define('form-component', FormComponent, { extends: 'form' });