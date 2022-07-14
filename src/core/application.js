import { AuthFormComponent } from "./components/authform.component";

export class Application{
    auth(){
        const authform = new AuthFormComponent();
        authform.addClass('auth-form');

        document.body.classList.add('d-flex','align-items-center','justify-content-center');
        document.body.insertAdjacentHTML('beforeend', authform.render());

        console.log(document.querySelector('form'));
    }
}