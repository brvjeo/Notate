"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[296],{410:function(e,t,n){n(173);class s{constructor(e){this.element=document.createElement(e)}set hidden(e){this.element.hidden=!!e}set styles(e){this.setStyles(e)}set id(e){this.addId(e)}set text(e){this.setText(e)}setText(e){return this.element.textContent=e,this}setStyles(e){for(let t in e)this.element.style[t]=e[t];return this}removeStyles(...e){for(let t of e)this.element.style[t]=null;return this}addId(e){this.element.id=e}addClass(...e){return this.element.classList.add(...e),this}toggleClass(...e){return this.element.classList.toggle(...e),this}removeClass(...e){return this.element.classList.remove(...e),this}merge(...e){return e.forEach((e=>this.element.appendChild(e.element))),this}}class i extends s{constructor(e,t){super("form"),this.method=t,this.name=e}set name(e){this.element.name=e}get name(){return this.element.name}set method(e){"get"!=(e=String(e).toLocaleLowerCase())&&"post"!=e||(this.element.method=e)}get method(){return this.element.method}reset(){this.element.reset()}merge(...e){super.merge(...e);for(let e of this.element.elements)e.name=`${this.name}-${e.name}`}getControl(e){return this.element.elements[`${this.name}-${e}`]}set onsubmit(e){this.element.onsubmit=e.bind(this)}}class l extends s{constructor(e,t){super("img"),this.src=e,null!=t&&(this.alt=t)}set src(e){this.element.src=e}set alt(e){this.element.alt=e}}class r extends s{constructor(e,t){super("input"),this.name=e,this.type=t}set placeholder(e){this.setPlaceHolder(e)}set name(e){this.element.name=e}set type(e){this.element.type=e}setPlaceHolder(e){return this.element.placeholder=e,this}}class d extends s{constructor(e,t,n){super("button"),this.element.name=e,this.text=t,null!=n&&(this.element.type=n)}}class o extends i{#e="Invalid login or password!";#t=new s("div");constructor(){super("auth-form"),this.addClass(this.name),this.onsubmit=this.#n,this.onlogin=this.#s,this.#t.text=this.#e,this.#t.addClass("mb-3","text-center","text-danger","border-danger","animated-hidden","transition-hidden")}render(){return this.merge(new s("div").addClass("mb-5","auth-logo","d-flex","justify-content-center").merge(new l("./assets/brand-notate.svg","brand-notate")),new s("div").addClass("mb-3").merge(new r("login","text").setPlaceHolder("Login").addClass("form-control")),new s("div").addClass("mb-3").merge(new r("password","password").setPlaceHolder("Password").addClass("form-control")),this.#t,new s("div").addClass("d-flex","flex-column","justify-content-center").merge(new d("log-in","Login").addClass("btn","btn-outline-dark","rounded","mb-3"),new d("sign-in","Signin").addClass("btn","btn-dark","rounded"))),this}set onlogin(e){this.element.addEventListener("auth-form-log-in",e.bind(this))}set onsignin(e){this.element.addEventListener("auth-form-sign-in",e.bind(this))}#n(e){e.preventDefault(),this.element.dispatchEvent(new Event(e.submitter.name))}#s(e){this.element.dispatchEvent(new Event("loggedin",{once:!0,bubbles:!0}))}}(new class{constructor(){this.loggedin=this.run,this.AuthForm=new o}start(){this.authenticate()}authenticate(){document.body.classList.add("d-flex","flex-column","align-items-center","justify-content-center"),this.render(this.AuthForm.render())}run(){document.body.removeChild(this.AuthForm.element),document.body=document.createElement("body")}set loggedin(e){document.addEventListener("loggedin",e.bind(this))}render(e){document.body.appendChild(e.element)}}).start()}},function(e){e.O(0,[736],(function(){return 410,e(e.s=410)})),e.O()}]);