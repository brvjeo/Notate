import { AuthFormExemplar } from './exemplars/authform.exemplar';

export class Application {
    constructor(){
        this.loggedin = this.run;
    }

    start(){
        if(true){
            this.authenticate()
        }else{
            this.run();
        }
    }

    authenticate() {
        document.body.classList.add('d-flex', 'align-items-center', 'justify-content-center');
        this.render(new AuthFormExemplar().render());
    }

    run(){
        console.log('run');
    }

    set loggedin(value){
        document.addEventListener('loggedin', value);
    }

    render(component){
        document.body.appendChild(component.element);
    }
}