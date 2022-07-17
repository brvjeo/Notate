import { AuthForm } from "./components/auth-form.component";

export default class Application {
    constructor() {
        this.app = document.getElementById('app');
    }

    run() {
        this.app.classList.add('d-flex', 'align-items-center', 'justify-content-center');
        this.app.appendChild(new AuthForm());
    }
}