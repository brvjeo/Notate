import { AuthFormComponent } from "./components/authform.component";

export class Application{
    auth(){
        const authform = new AuthFormComponent();
        document.body.classList.add('d-flex','align-items-center','justify-content-center');
        document.body.appendChild(authform.element);
    }
}