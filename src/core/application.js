import { AuthErrorCodes, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthFormExemplar } from './exemplars/authform.exemplar';
import { firebaseConfig, initializeApp, getAnalytics, getAuth} from './firebase/firebase';
import { FormHandler } from './handlers/form.handler';

export class Application {
    constructor() {
        this.loggedin = this.run;
        this.AuthForm = new AuthFormExemplar();

        // Initialize Firebase
        this.app = initializeApp(firebaseConfig);
        this.analytics = getAnalytics(this.app);

        document.body.addEventListener('log-in', (e) => {
            if(!this.AuthForm.isDisabled){
                this.loginUser();
            }
        });
        document.body.addEventListener('sign-up', (e) => {
            if(!this.AuthForm.isDisabled){
                this.signupUser();
            }
        });
    }

    start() {
        this.showInitialPage();
    }

    loginUser() {
        let { login, password } = FormHandler.transferToObject(this.AuthForm);

        const auth = getAuth();
        console.log('Sending request!');
        this.AuthForm.deactivateControls();

        signInWithEmailAndPassword(auth,login,password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                this.AuthForm.showInvalidAuthComponent();
            })
            .finally(() => {
                this.AuthForm.activateControls();
            });
    }

    signupUser() {
        let { login, password } = FormHandler.transferToObject(this.AuthForm);

        const auth = getAuth();
        console.log('Sending request!');
        this.AuthForm.deactivateControls();

        createUserWithEmailAndPassword(auth, login, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                if(error.code == AuthErrorCodes.EMAIL_EXISTS){
                    this.AuthForm.showInvalidAuthComponent('Email already exists!');
                }
            })
            .finally(() => {
                this.AuthForm.activateControls();
            });
    }

    showInitialPage(){
        document.body.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center');
        document.body.appendChild(this.AuthForm.element);
    }
}