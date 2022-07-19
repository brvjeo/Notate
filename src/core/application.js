import * as bootstrap from 'bootstrap';
import { app, firebaseConfig } from './firebase/firebase';
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from './instances/authform';

export default class Application {
    constructor() {
        this.app = {};
        this.app.element = document.getElementById('app');
        this.app.firebase = { config: firebaseConfig, app };
    }

    run() {
        if (true) {
            let login,password;
            let authform = new AuthForm();
            authform.component.onsubmit = function(e){
                e.preventDefault();

                if (this.disabled) return;

                login = this.elements[this.controls.input_login].value;
                password = this.elements[this.controls.input_password].value;
                
                authform.freeze(7000);
                // authform.component.dispatchEvent(new Event(e.submitter.name));
            }
            authform.component.addEventListener(authform.component.controls.btn_login, (e) => {
                this.loginUser(login,password);
            });
            authform.component.addEventListener(authform.component.controls.btn_signup, (e) => {
                this.createUser(login,password);
            });
            this.app.element.append(authform.component);
            this.app.element.classList.add('d-flex', 'align-items-center', 'justify-content-center');
        }
    }

    loginUser(login,password){}
    createUser(login,password){}
}