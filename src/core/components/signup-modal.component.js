import { Modal } from "./modal.component";
import { model } from "../models/signup-modal.model";

export class SignupModal extends Modal {
    constructor(id) {
        super(id);

        this.model = model();
        this.static = true;
    }
}

window.customElements.define('signup-modal', SignupModal);