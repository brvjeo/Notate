export class Component{ 

    constructor(tagName){
        this.element = document.createElement(tagName);
    }

    set hidden(value){
        this.element.hidden = !!value;
    }

    set styles(value){
        this.setStyles(value);
    }

    set id(value){
        this.addId(value);
    }

    set textContent(value){
        this.setTextContent(value);
    }

    setTextContent(text){
        this.element.textContent = text;

        return this;
    }

    setStyles(stylesObject){
        for(let key in stylesObject){
            this.element.style[key] = stylesObject[key];
        }

        return this;
    }

    addId(id){
        this.element.id = `#${id}`;
    }

    addClass(classes){
        classes.split(' ').forEach(value => this.element.classList.add(value));

        return this;
    }

    merge(...components){
        components.forEach(component => this.element.appendChild(component.element));

        return this;
    }
}