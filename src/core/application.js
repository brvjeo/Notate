import { AuthFormExemplar } from './exemplars/authform.exemplar';

export class Application {
    constructor(){
        document.addEventListener('logged-in',this.run.bind(this));
    }

    auth() {
        const authform = new AuthFormExemplar();
        document.body.classList.add('d-flex', 'align-items-center', 'justify-content-center');
        document.body.appendChild(authform.render().element);
    }

    run(e){
        console.log('Start');
        document.removeEventListener('logged-in',this.run);

        console.log(document);
    }
}