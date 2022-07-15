import { Component } from "./component";

export class FormComponent extends Component {
    constructor(name, method) {
        super('form');

        this.method = method;
        this.name = name;
    }

    set name(value) {
        this.element.name = value;
    }

    get name() {
        return this.element.name;
    }

    set method(value) {
        value = String(value).toLocaleLowerCase();
        if ('get' != value && 'post' != value) return;

        this.element.method = value;
    }

    get method() {
        return this.element.method;
    }

    reset() {
        this.element.reset();
    }

    merge(...components) {
        super.merge(...components);

        for (let control of this.element.elements) {
            control.name = `${this.name}-${control.name}`;
        }
    }

    getControl(name) {
        return this.element.elements[`${this.name}-${name}`];
    }

    set onsubmit(value) {
        this.element.onsubmit = value.bind(this);
    }
}