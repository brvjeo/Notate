import { model } from '../models/modal.model';

export class Modal extends HTMLElement {
    constructor(id) {
        super();
        this.id = id;

        this.setAttribute('tabindex', '-1');
        this.classList.add('modal', 'fade');
        this.model = model();
    }

    connectedCallback() {
        this.insertAdjacentHTML('afterbegin', this.model);
    }

    set static(value){
        if(value === true){
            this.setAttribute('data-bs-backdrop', 'static');
            this.setAttribute('data-bs-keyboard', 'false');
        }
    }
}

window.customElements.define('notate-modal', Modal);