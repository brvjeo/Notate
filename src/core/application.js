import * as bootstrap from 'bootstrap';
import { app, firebaseConfig } from './firebase/firebase';
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from './instances/authform';
import { SignupForm } from './instances/signupform';
import { FormHandler } from './functions';

export default class Application {
    constructor() {
        this.app = {};
        this.app.element = document.getElementById('app');
        this.app.firebase = { config: firebaseConfig, app, auth: getAuth(app) };
    }

    run() {
        if (true) {
            let login, password;
            let authform = new AuthForm();
            authform.component.onsubmit = function (e) {
                e.preventDefault();

                if (this.disabled) return;

                login = this.elements[this.controls.input_login].value;
                password = this.elements[this.controls.input_password].value;

                this.dispatchEvent(new Event(e.submitter.name));
            }
            authform.component.addEventListener(authform.component.controls.btn_login, (e) => {
                this.loginUser(login, password);
            });
            authform.component.addEventListener(authform.component.controls.btn_signup, (e) => {
                authform.component.reset();
                this.createUser();
            });
            this.app.element.append(authform.component);
            this.app.element.classList.add('d-flex', 'align-items-center', 'justify-content-center');
        }
    }

    loginUser(login, password) { }
    createUser() {
        let signupform = new SignupForm();
        this.app.element.append(signupform.component);

        let bsModal = new bootstrap.Modal(`#${signupform.component.id}`);
        bsModal.show();

        signupform.component.onsubmit = (e) => {
            e.preventDefault();

            let passwordField = signupform.component.elements[signupform.component.controls.input_password];
            let confirmField = signupform.component.elements[signupform.component.controls.input_confirm];

            if (passwordField.value != confirmField.value) {
                signupform.showTooltip('Not equals!');
                return;
            }

            let formdata = FormHandler.transferToObject(new FormData(signupform.component));
            let login = formdata[signupform.component.controls.input_email];
            let password = formdata[signupform.component.controls.input_password];

            createUserWithEmailAndPassword(this.app.firebase.auth, login, password)
                .then(userCredential => {
                    console.log(userCredential);
                    console.log(this.app.firebase.auth);

                    bsModal.hide();
                    signupform.component.remove();
                })
                .catch(error => {
                    if (error.code == AuthErrorCodes.EMAIL_EXISTS) {
                        signupform.showTooltip('Email already exists!');
                    } else if (error.code == AuthErrorCodes.WEAK_PASSWORD) {
                        signupform.showTooltip('Too weak password! Password length should be at least 6 symbols!', 'alert-warning');
                    } else {
                        signupform.showTooltip('Something went wrong. Try later!');
                    }
                });
        }

        signupform.onclose = function (e) {
            bsModal.hide();
            signupform.component.remove();
        }
    }
}