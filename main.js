/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={baseUrl:"https://nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"b120d1c9-a963-45b6-94ed-3fdd57c6b237","Content-Type":"application/json"}};function e(e,n){return r("".concat(t.baseUrl,"/cards/likes/").concat(e),n?"PUT":"DELETE")}function r(e,r,n){return fetch(e,{method:r,headers:t.headers,body:n}).then((function(t){return(e=t).ok?e.json():Promise.reject("Ошибка: ".concat(e.status));var e}))}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:C(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",v="suspendedYield",y="executing",m="completed",_={};function g(){}function b(){}function S(){}var L={};f(L,u,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(T([])));E&&E!==r&&i.call(E,u)&&(L=E);var x=S.prototype=g.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,a,c,u){var l=d(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function C(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,_;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=S,a(x,"constructor",{value:S,configurable:!0}),a(S,"constructor",{value:b,configurable:!0}),b.displayName=f(S,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,l,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),_}},e}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t,e,r){var n=r.deleteCard,o=r.setLike,i=r.showImagePopup,a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=a.querySelector(".card__title");c.textContent=t.name;var u=a.querySelector(".card__image");u.alt=t.name,u.src=t.link;var l=a.querySelector(".card__delete-button");t.owner._id!==e?l.style.display="none":l.addEventListener("click",(function(){return n(t._id,a)}));var s=a.querySelector(".card__like-button");s.addEventListener("click",(function(){return o(s,f,t._id,e)}));var f=a.querySelector(".card__like-count"),p=t.likes;return f.textContent=p.length,0!==p.filter((function(t){return t._id===e})).length&&s.classList.toggle("card__like-button_is-active"),u.addEventListener("click",(function(){i(u.src,c.textContent)})),a}function c(e,n){var o;(o=e,r("".concat(t.baseUrl,"/cards/").concat(o),"DELETE")).then((function(){return n.remove()})).catch(console.error)}function u(t,e,r){return l.apply(this,arguments)}function l(){var t;return t=o().mark((function t(r,n,i){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r.classList.contains("card__like-button_is-active"),e(i,!a).then((function(t){n.textContent=t.likes.length,r.classList.toggle("card__like-button_is-active")})).catch(console.error);case 2:case"end":return t.stop()}}),t)})),l=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))},l.apply(this,arguments)}function s(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",p)}function f(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",p)}function p(t){"Escape"===t.key&&f(document.querySelector(".popup_is-opened"))}var d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-is-disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function h(t,e,r){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);n.forEach((function(r){y(r,t.querySelector(".".concat(r.id,"-error")),e),r.value=""})),v(o,e),r(o,!1)}function v(t,e){t.classList.add(e.inactiveButtonClass),t.disabled=!0}function y(t,e,r){t.classList.remove(r.inputErrorClass),e.classList.remove(r.errorClass),e.textContent=""}function m(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";e.preventDefault();var n=e.submitter,o=n.textContent;_(!0,n,o,r),t().then((function(){return e.target.reset()})).catch((function(t){return console.error("Ошибка: ".concat(t))})).finally((function(){return _(!1,n,o)}))}function _(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";e.textContent=t?n:r}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var b=document.querySelector(".places__list"),S=document.querySelector(".popup.popup_type_image"),L=S.querySelector(".popup__image"),w=S.querySelector(".popup__caption"),E=document.querySelector(".profile__add-button"),x=document.querySelector(".popup.popup_type_new-card"),k=document.forms["new-place"],q=k.querySelector(".popup__input_type_card-name"),C=k.querySelector(".popup__input_type_url"),O=document.querySelector(".profile__edit-button"),j=document.querySelector(".popup.popup_type_edit"),A=document.forms["edit-profile"],P=A.querySelector(".popup__input_type_name"),T=A.querySelector(".popup__input_type_description"),N=document.querySelector(".profile__title"),I=document.querySelector(".profile__description"),G=document.querySelector(".profile__image"),U=document.querySelector(".popup.popup_type-avatar"),B=document.forms["avatar-form"],F=document.querySelectorAll(".popup__close"),M="";function D(t,e){L.src=t,L.alt=e,w.textContent=e,s(S)}Promise.all([r("".concat(t.baseUrl,"/users/me"),"GET"),r("".concat(t.baseUrl,"/cards"),"GET")]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];M=o._id,N.textContent=o.name,I.textContent=o.about,G.style.backgroundImage="url(".concat(o.avatar,")"),i.forEach((function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"append",r=a(t,M,{deleteCard:c,setLike:u,showImagePopup:D});b[e](r)}(t)}))})).catch(console.error),E.addEventListener("click",(function(){h(k,d),s(x)})),O.addEventListener("click",(function(){var t;h(A,d),t=j,P.value=N.textContent,T.value=I.textContent,s(t)})),G.addEventListener("click",(function(){h(B,d),s(U)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()}));var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(o){o.addEventListener("input",(function(){var i=e.querySelector(".".concat(o.id,"-error")),a=function(t){var e=t.validity;if(!1===e.valid){if(!0===e.patternMismatch)return t.dataset.errorMessage;if(!0===e.tooShort&&!1===e.valueMissing){var r=t.value.length;return"Минимальное количество символов: "+t.minLength+". Длина текста сейчас: "+r+" символ."}return t.validationMessage}return""}(o);""===a?y(o,i,t):function(t,e,r,n){t.classList.add(n.inputErrorClass),e.classList.add(n.errorClass),e.textContent=r}(o,i,a,t);var c=r.some((function(t){return!1===t.validity.valid}));c?v(n,t):function(t,e){t.classList.remove(e.inactiveButtonClass),t.disabled=!1}(n,t)}))}))}))}(d),F.forEach((function(t){t.addEventListener("click",(function(){return f(t.closest(".popup"))}))})),document.querySelectorAll(".popup").forEach((function(t){t.addEventListener("click",(function(e){t===e.target&&f(t)}))})),x.addEventListener("submit",(function(e){return n=x,void m((function(){return(e=q.value,o=C.value,r("".concat(t.baseUrl,"/cards"),"POST",JSON.stringify({name:e,link:o}))).then((function(t){var e=a(t,M,{deleteCard:c,setLike:u,showImagePopup:D});b.insertBefore(e,b.firstChild),f(n)}));var e,o}),e);var n})),j.addEventListener("submit",(function(e){return n=j,void m((function(){return(e=P.value,o=T.value,r("".concat(t.baseUrl,"/users/me"),"PATCH",JSON.stringify({name:e,about:o}))).then((function(t){N.textContent=t.name,I.textContent=t.about,f(n)}));var e,o}),e);var n})),U.addEventListener("submit",(function(e){return function(e,n){var o=n.querySelector(".popup__input_type_url");m((function(){return(e=o.value,r("".concat(t.baseUrl,"/users/me/avatar"),"PATCH",JSON.stringify({avatar:e}))).then((function(t){G.style.backgroundImage="url(".concat(t.avatar,")"),f(n)}));var e}),e)}(e,U)}))})();