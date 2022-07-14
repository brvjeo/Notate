"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[296],{

/***/ 120:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ../node_modules/bootstrap/dist/js/bootstrap.esm.js + 58 modules
var bootstrap_esm = __webpack_require__(173);
;// CONCATENATED MODULE: ./core/components/component.js
class Component{ 

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
;// CONCATENATED MODULE: ./core/components/form.component.js


class FormComponent extends Component{
    constructor(name, method) {
        super('form');
        
        if(name != undefined) this.name = name;
        if(method != undefined) this.method = method;
    }

    set name(value){
        this.element.name = value;
    }

    set method(value){
        value = String(value).toLocaleLowerCase();
        if('get' != value && 'post' != value) return;
         
        this.element.method = value;
    }

    reset(){
        this.element.reset();
    }
}
;// CONCATENATED MODULE: ./core/components/image.component.js


class ImageComponent extends Component{
    constructor(url,alt){
        super('img');

        this.src = url;
        if(alt != undefined) this.alt = alt;
    }

    set src(value){
        this.element.src = value;
    }

    set alt(value){
        this.element.alt = value;
    }
}
;// CONCATENATED MODULE: ./core/components/input.component.js


class InputComponent extends Component{
    constructor(type, name){
        super('input');
        if(name != undefined) this.name = name;
        this.type = type ?? 'text';
    }

    set placeholder(value){
        this.setPlaceHolder(value);
    }

    set name(value){
        this.element.name = value;
    }

    set type(value){
        this.element.type = value;
    }

    setPlaceHolder(value){
        this.element.placeholder = value;

        return this;
    }
}
;// CONCATENATED MODULE: ./core/components/button.component.js


class ButtonComponent extends Component{
    constructor(){
        super('button');
    }
}

;// CONCATENATED MODULE: ./core/components/submitbutton.component.js


class SubmitButtonComponent extends ButtonComponent{
    constructor(name){
        super();

        this.type = 'submit';
        if(name != undefined) this.name = name;
    }

    set name(value){
        this.element.name = value;
    }

    set type(value){
        this.element.type = value;
    }
}
;// CONCATENATED MODULE: ./core/components/authform.component.js






class AuthFormComponent extends FormComponent {
    constructor() {
        super('auth-form');

        this.merge(
            new Component('div').addClass('mb-5 auth-logo d-flex justify-content-center')
                .merge(new ImageComponent('./assets/brand-notate.svg', 'brand-notate')),
            new Component('div').addClass('mb-3')
                .merge(new InputComponent('text', 'auth-login').setPlaceHolder('Login').addClass('form-control')),
            new Component('div').addClass('mb-3')
                .merge(new InputComponent('password', 'auth-passw').setPlaceHolder('Password').addClass('form-control')),
            new Component('div').addClass('d-flex flex-column justify-content-center')
                .merge(
                    new SubmitButtonComponent('auth-log-in').addClass('btn btn-outline-dark mb-3').setTextContent('Login'),
                    new SubmitButtonComponent('auth-sign-in').addClass('btn btn-dark').setTextContent('Signin')
                )
        ).addClass('auth-form');

        this.onsubmit = this.#onSubmit;
        this.onlogin = this.#onLogin;
        this.onsignin = this.#onSignin;
    }

    set onsubmit(value) {
        this.element.onsubmit = value;
    }

    set onlogin(value) {
        this.element.addEventListener('auth-log-in', value);
    }

    set onsignin(value) {
        this.element.addEventListener('auth-sign-in', value);
    }

    #onSubmit(e) {
        e.preventDefault();
        
        this.dispatchEvent(new Event(e.submitter.name));
    }

    #onLogin(e){
        console.log('login');
    }

    #onSignin(e){
        console.log('signin');
    }
}
;// CONCATENATED MODULE: ./core/application.js


class Application{
    auth(){
        const authform = new AuthFormComponent();
        document.body.classList.add('d-flex','align-items-center','justify-content-center');
        document.body.appendChild(authform.element);
    }
}
;// CONCATENATED MODULE: ./core/index.js






const app = new Application();
app.auth();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [736], function() { return __webpack_exec__(120); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);