import * as bootstrap from 'bootstrap';
import { app, firebaseConfig } from './firebase/firebase';
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
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
            let authform = new AuthForm();
            authform.component.onsubmit = function (e) {
                e.preventDefault();

                if (this.disabled) return;

                authform.component.deactivateControls([authform.component.controls.btn_login, authform.component.controls.btn_signup]);
                this.dispatchEvent(new Event(e.submitter.name));
            }

            authform.component.addEventListener(authform.component.controls.btn_login, (e) => {
                let login = authform.component.elements[authform.component.controls.input_login].value;
                let password = authform.component.elements[authform.component.controls.input_password].value;

                this.loginUser(login, password, authform);
            });

            authform.component.addEventListener(authform.component.controls.btn_signup, (e) => {
                authform.component.reset();
                this.createUser(authform);
            });

            this.app.element.append(authform.component);
            this.app.element.classList.add('d-flex', 'align-items-center', 'justify-content-center');
        }
    }

    loginUser(login, password, form) {
        signInWithEmailAndPassword(this.app.firebase.auth, login, password)
            .then(userCredential => {
                form.component.activateControls();
                form.component.remove();
                this.app.element.classList.remove(...this.app.element.classList);
                this.start();
            })
            .catch(error => {
                if (error.code == AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
                    form.freeze(20 * 1000);
                    form.showTooltip('Too many attempts! Try later!', 'text-warning');
                } else {
                    form.showTooltip();
                    form.component.activateControls();
                }
            });
    }

    createUser(form) {
        let signupform = new SignupForm();
        this.app.element.append(signupform.component);

        let bsModal = new bootstrap.Modal(`#${signupform.component.id}`);
        bsModal.show();

        signupform.component.onsubmit = (e) => {
            e.preventDefault();

            let passwordField = signupform.component.elements[signupform.component.controls.input_password];
            let confirmField = signupform.component.elements[signupform.component.controls.input_confirm];

            if (passwordField.value != confirmField.value) {
                signupform.showTooltip('Passwords are not equal!');
                return;
            }

            if(passwordField.value.length < 6){
                signupform.showTooltip('Too weak password! Password length should be at least 6 symbols!', 'alert-warning');
                return;
            }
            
            let formdata = FormHandler.transferToObject(new FormData(signupform.component));
            let login = formdata[signupform.component.controls.input_email];
            let password = formdata[signupform.component.controls.input_password];
            let name = formdata[signupform.component.controls.input_name];
            let lastname = formdata[signupform.component.controls.input_lastname];

            createUserWithEmailAndPassword(this.app.firebase.auth, login, password)
                .then(userCredential => {
                    console.log(userCredential);
                    console.log(this.app.firebase.auth);

                    bsModal.hide();
                    signupform.component.remove();
                    updateProfile(this.app.firebase.auth.currentUser, {
                        displayName: name + ' ' + lastname
                    })
                    .catch(error => {
                        console.log(error.code);
                    });

                    form.component.remove();
                    this.app.element.classList.remove(...this.app.element.classList);
                    this.start();
                })
                .catch(error => {
                    if (error.code == AuthErrorCodes.EMAIL_EXISTS) {
                        signupform.showTooltip('Email already exists!');
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

    start(){
        console.log('Application start!');
        console.log(this.app.firebase.auth.currentUser);

        // let header = new AppHeader();
    }
}