"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[818],{

/***/ 289:
/***/ (function() {


;// CONCATENATED MODULE: ./core/handlers/form.handler.js
class FormHandler{
    constructor(form){
        this.form = form;
    }

    set onsubmit(value){
        this.form.onsubmit = value;
    }

    static transferToJSON(formData){
        let data = {};

        for(let [key,value] of formData.entries()){
            data[key] = value;
        }

        return JSON.stringify(data);
    }
}

;// CONCATENATED MODULE: ./core/events/signin.event.js
class LoginEvent extends Event{
    constructor(){
        super('auth-login');
    }
}
;// CONCATENATED MODULE: ./core/handlers/authform.handler.js



class AuthFormHandler extends FormHandler{
    constructor(form){
        super(form);

        this.onsubmit = this.#onSubmit.bind(this);
    }

    #onSubmit(e){
        e.preventDefault();

        this.data = FormHandler.transferToJSON(new FormData(this.form));
    }
}
;// CONCATENATED MODULE: ./auth.js


const authform = new AuthFormHandler(document.forms['auth-form']);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(289));
/******/ }
]);