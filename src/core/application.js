import { AuthForm } from "./components/auth-form.component";
import { app, firebaseConfig } from './firebase/firebase';
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default class Application {
    #firebaseApp;
    #loginCounts = 0;
    #freezeTime = 30;

    constructor() {
        this.app = document.getElementById('app');
        this.#firebaseApp = { config: firebaseConfig, app };
    }

    run() {
        if (true) {
            const authform = new AuthForm();
            const auth = getAuth(this.#firebaseApp.app);
            authform.autocomplete = 'off';
            this.app.classList.add('d-flex', 'align-items-center', 'justify-content-center');
            this.app.appendChild(authform);

            let login, password;
            authform.onsubmit = (e) => {
                e.preventDefault();
                if(authform.controlsDisabled){
                    return;
                }

                login = authform.elements[authform.controlNames.input_login].value;
                password = authform.elements[authform.controlNames.input_password].value;

                authform.dispatchEvent(new Event(e.submitter.name));
            }
            authform.addEventListener(authform.controlNames.btn_login, () => {
                this.#onLogin(auth, login, password, authform);
            });
            authform.addEventListener(authform.controlNames.btn_signup, () => {
                this.#onSignup(auth, login, password, authform);
            });
        } else {
            this.open(null);
        }
    }

    #onLogin(auth, login, password, form) {
        signInWithEmailAndPassword(auth, login, password)
            .then(userCredential => {
                console.log('User login!');
                console.log(userCredential.user);
                this.#loginCounts = 0;
                this.#freezeTime = 30;
            })
            .catch(error => {
                this.#loginCounts++;
                if(this.#loginCounts > 5){
                    form.showTooltip(`Too much tries! Freeze for ${this.#freezeTime} sec!`);
                    form.freezeFor(this.#freezeTime * 1000);
                    this.#freezeTime *= 2;
                }else{
                    form.showTooltip();
                }
            });
    }

    #onSignup(auth, login, password, form) {
        createUserWithEmailAndPassword(auth, login, password)
            .then(userCredential => {
                console.log('User create!');
                console.log(userCredential.user);
            })
            .catch(error => {
                if(error.code == AuthErrorCodes.WEAK_PASSWORD){
                    form.showTooltip('Too weak password!Must be at least 6 symbols!','text-warning');
                }else if(error.code == AuthErrorCodes.EMAIL_EXISTS){
                    form.showTooltip('Email is already in use!');
                }else{
                    form.showTooltip('Something went wrong!');
                }
            });
    }

    open(userId) { }
}