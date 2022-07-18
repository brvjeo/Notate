import { trimSpaces } from '../functions';
import { component } from './component';

export class BaseForm extends HTMLFormElement {
    constructor(name = 'base-form') {
        super();

        Object.assign(this.constructor.prototype, component);
        this.name = name;
        this.classList.add(this.name);
        this.controlsDisabled = true;
    }

    deactivateControls(names) {
        names.forEach(name => this.elements[name].setAttribute('disabled', true));

        this.controlsDisabled = true;
    }

    activateControls() {
        for (let control of this.elements) {
            control.removeAttribute('disabled');
        }

        this.controlsDisabled = false;
    }

    inputIsNotEmpty(...inputs) {
        return inputs.every(input => {
            if (!trimSpaces(this.elements[input].value).length) {
                return false;
            } else {
                return true;
            }
        }, this);
    }
}

window.customElements.define('base-form', BaseForm, { extends: 'form' });