"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[296],{440:function(e,t,n){n(173);class s{constructor(e){this.element=document.createElement(e)}set hidden(e){this.element.hidden=!!e}set styles(e){this.setStyles(e)}set id(e){this.addId(e)}set textContent(e){this.setTextContent(e)}setTextContent(e){return this.element.textContent=e,this}setStyles(e){for(let t in e)this.element.style[t]=e[t];return this}removeStyles(...e){for(let t of e)this.element.style[t]=null;return this}addId(e){this.element.id=e}addClass(e){return e.split(" ").forEach((e=>this.element.classList.add(e))),this}removeClass(...e){this.element.classList.remove(...e)}merge(...e){return e.forEach((e=>this.element.appendChild(e.element))),this}render(){return this.element.outerHTML}}class i extends s{constructor(e,t){super("form"),this.method=t,this.name=e}set name(e){this.element.name=e}get name(){return this.element.name}set method(e){"get"!=(e=String(e).toLocaleLowerCase())&&"post"!=e||(this.element.method=e)}get method(){return this.element.method}reset(){this.element.reset()}merge(...e){super.merge(...e);for(let e of this.element.elements)e.name=`${this.name}-${e.name}`}getControl(e){return this.element.elements[`${this.name}-${e}`]}set onsubmit(e){this.element.onsubmit=e.bind(this)}}class o extends s{constructor(e,t){super("img"),this.src=e,null!=t&&(this.alt=t)}set src(e){this.element.src=e}set alt(e){this.element.alt=e}}class l extends s{constructor(e,t){super("input"),this.name=e,this.type=t}set placeholder(e){this.setPlaceHolder(e)}set name(e){this.element.name=e}set type(e){this.element.type=e}setPlaceHolder(e){return this.element.placeholder=e,this}}class r extends s{constructor(e,t,n){super("button"),this.element.name=e,this.textContent=t,null!=n&&(this.element.type=n)}}class d extends s{constructor(e){super(e),this.hidden=!0}}class a extends i{#e="Invalid login or password!";#t;constructor(){super("auth-form"),this.onsubmit=this.#n,this.onlogin=this.#s,this.onsignin=this.#i,this.#t=new d("div"),this.#t.setTextContent(this.#e),this.#t.addClass("mb-3 text-center text-danger")}render(){return this.addClass(this.name),this.merge(new s("div").addClass("mb-5 auth-logo d-flex justify-content-center").merge(new o("./assets/brand-notate.svg","brand-notate")),new s("div").addClass("mb-3").merge(new l("login","text").setPlaceHolder("Login").addClass("form-control")),new s("div").addClass("mb-3").merge(new l("password","password").setPlaceHolder("Password").addClass("form-control")),this.#t,new s("div").addClass("d-flex flex-column justify-content-center").merge(new r("btn-login","Login").addClass("btn btn-outline-dark rounded mb-3"),new r("btn-signin","Signin").addClass("btn btn-dark rounded"))),this}set onlogin(e){this.element.addEventListener("auth-form-btn-login",e.bind(this))}set onsignin(e){this.element.addEventListener("auth-form-btn-signin",e.bind(this))}#n(e){e.preventDefault(),this.element.dispatchEvent(new Event(e.submitter.name)),this.#o(5e3,this.getControl("btn-login"),this.getControl("btn-signin"))}#s(e){this.element.dispatchEvent(new Event("logged-in",{once:!0,bubbles:!0}))}#i(e){console.log("signin")}#o(e,...t){for(let e of t)e.classList.add("disabled");setTimeout((()=>{for(let e of t)e.classList.remove("disabled")}),e)}}(new class{constructor(){document.addEventListener("logged-in",this.run.bind(this))}auth(){const e=new a;document.body.classList.add("d-flex","align-items-center","justify-content-center"),document.body.appendChild(e.render().element)}run(e){console.log("Start"),document.removeEventListener("logged-in",this.run),console.log(document)}}).auth()}},function(e){e.O(0,[736],(function(){return 440,e(e.s=440)})),e.O()}]);