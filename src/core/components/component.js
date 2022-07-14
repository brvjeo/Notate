export class Component {

    constructor(tagName){
        this.element = document.createElement(tagName);
    }

    set styles(stylesObj){
        for(let key in stylesObj){
            this.element.style[key] = stylesObj[key];
        }
    }

    set name(name){
        this.element.name = name;
    }

    set innerHTML(innerHTML){
        this.element.innerHTML = innerHTML;
    }

    set textContent(text){
        this.element.textContent = text;
    }

    setName(name){
        this.name = name;

        return this;
    }

    setTextContent(text){
        this.textContent = text;
        
        return this;
    }

    setInnerHTML(innerHTML){
        this.innerHTML = innerHTML;

        return this;
    }

    setStyles(stylesObj){
        this.styles = stylesObj;

        return this;
    }

    addClass(items){
        for(let i of items.split(' ')){
            this.element.classList.add(i);
        }

        return this;
    }

    merge(...components){
        for(let component of components){
            if(!(component instanceof Component)) continue;

            this.element.insertAdjacentHTML('beforeend',component.render());
        }

        return this;
    }

    render(){
        console.log(this);

        return this.element.outerHTML;
    }
}