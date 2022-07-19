export class Component{
    constructor(){
        throw new Error('Can\'t create an instance of Component class!');
    }

    applyStyles(styles){
        for(let key in styles){
            this.style[key] = styles[key];
        }
    }

    render(){
        if(this.view != null){
            this.innerHTML = this.view.content;
            Component.prototype.applyStyles.call(this, this.view.styles);
        }
    }
}