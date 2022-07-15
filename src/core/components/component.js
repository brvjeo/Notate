export class Component {
    constructor(tag) {
        this.element = document.createElement(tag);
    }

    set hidden(value) {
        this.element.hidden = !!value;
    }

    set styles(value) {
        this.setStyles(value);
    }

    set id(value) {
        this.addId(value);
    }

    set text(value) {
        this.setText(value);
    }

    setText(text) {
        this.element.textContent = text;

        return this;
    }

    setStyles(stylesObject) {
        for (let key in stylesObject) {
            this.element.style[key] = stylesObject[key];
        }

        return this;
    }

    removeStyles(...styles){
        for(let style of styles){
            this.element.style[style] = null;
        }

        return this;
    }

    addId(id) {
        this.element.id = id;
    }

    addClass(...classes) {
        this.element.classList.add(...classes);

        return this;
    }

    removeClass(...classes){
        this.element.classList.remove(...classes);
    }

    merge(...components) {
        components.forEach(component => this.element.appendChild(component.element));

        return this;
    }

    render() {
        return this.element.outerHTML;
    }
}