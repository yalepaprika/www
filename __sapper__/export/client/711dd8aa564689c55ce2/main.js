!function(t){function e(e){for(var n,c,o=e[0],a=e[1],s=0,l=[];s<o.length;s++)c=o[s],r[c]&&l.push(r[c][0]),r[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(i&&i(e);l.length;)l.shift()()}var n={},r={0:0};function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,c){n=r[t]=[e,c]});e.push(n[2]=o);var a,s=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(t){return c.p+"711dd8aa564689c55ce2/"+({1:"index",2:"contributors",3:"contributors_$slug",4:"subscribe",5:"articles",6:"articles_$slug",7:"archive__layout",8:"archive",9:"archive_contributors",10:"archive_articles",11:"archive_folds",12:"search",13:"about",14:"folds",15:"folds_$slug",16:"rsvp",17:"$slug"}[t]||t)+"."+t+".js"}(t),a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+c+": "+o+")");a.type=c,a.request=o,n[1](a)}r[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,s.appendChild(i)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="client/",c.oe=function(t){throw console.error(t),t};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var i=a;c(c.s=6)}([function(t,e,n){"use strict";function r(){}function c(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){for(var n in e)t[n]=1;return t}function a(t,e){e.appendChild(t)}function s(t,e,n){e.insertBefore(t,n)}function i(t){t.parentNode.removeChild(t)}function l(t){for(;t.previousSibling;)t.parentNode.removeChild(t.previousSibling)}function u(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)}function f(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function p(){return document.createComment("")}function m(t,e,n){t.setAttribute(e,n)}function j(t){return Array.from(t.childNodes)}function O(t,e,n,r){for(var c=0;c<t.length;c+=1){var o=t[c];if(o.nodeName===e){for(var a=0;a<o.attributes.length;a+=1){var s=o.attributes[a];n[s.name]||o.removeAttribute(s.name)}return t.splice(c,1)[0]}}return r?d(e):h(e)}function _(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=e,t.splice(n,1)[0]}return b(e)}function g(t,e,n){t.style.setProperty(e,n)}n.d(e,"q",function(){return P}),n.d(e,"d",function(){return R}),n.d(e,"t",function(){return k}),n.d(e,"a",function(){return a}),n.d(e,"r",function(){return s}),n.d(e,"o",function(){return i}),n.d(e,"n",function(){return l}),n.d(e,"m",function(){return u}),n.d(e,"l",function(){return f}),n.d(e,"i",function(){return h}),n.d(e,"j",function(){return d}),n.d(e,"k",function(){return b}),n.d(e,"h",function(){return p}),n.d(e,"u",function(){return m}),n.d(e,"e",function(){return j}),n.d(e,"f",function(){return O}),n.d(e,"g",function(){return _}),n.d(e,"v",function(){return g}),n.d(e,"p",function(){return v}),n.d(e,"s",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return o});function v(t,e){for(var n={},r={},c={},o=t.length;o--;){var a=t[o],s=e[o];if(s){for(var i in a)i in s||(r[i]=1);for(var i in s)c[i]||(n[i]=s[i],c[i]=1);t[o]=s}else for(var i in a)c[i]=1}for(var i in r)i in n||(n[i]=void 0);return n}function y(t){this.destroy=r,this.fire("destroy"),this.set=r,this._fragment.d(!1!==t),this._fragment=null,this._state={}}function E(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function w(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var r=0;r<n.length;r+=1){var c=n[r];if(!c.__calling)try{c.__calling=!0,c.call(this,e)}finally{c.__calling=!1}}}function S(){return this._state}function P(t,e){t._handlers=Object.create(null),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=e.store||t.root.store}function C(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function A(t){this._set(c({},t)),this.root._lock||(this.root._lock=!0,R(this.root._beforecreate),R(this.root._oncreate),R(this.root._aftercreate),this.root._lock=!1)}function L(t){var e=this._state,n={},r=!1;for(var o in t)this._differs(t[o],e[o])&&(n[o]=r=!0);r&&(this._state=c(c({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))}function R(t){for(;t&&t.length;)t.shift()()}function x(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}var k={destroy:y,get:S,fire:w,on:C,set:A,_recompute:r,_set:L,_mount:x,_differs:E}},function(t,e,n){(function(e){for(var r=n(4),c="undefined"==typeof window?e:window,o=["moz","webkit"],a="AnimationFrame",s=c["request"+a],i=c["cancel"+a]||c["cancelRequest"+a],l=0;!s&&l<o.length;l++)s=c[o[l]+"Request"+a],i=c[o[l]+"Cancel"+a]||c[o[l]+"CancelRequest"+a];if(!s||!i){var u=0,f=0,h=[];s=function(t){if(0===h.length){var e=r(),n=Math.max(0,1e3/60-(e-u));u=n+e,setTimeout(function(){var t=h.slice(0);h.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(n))}return h.push({handle:++f,callback:t,cancelled:!1}),f},i=function(t){for(var e=0;e<h.length;e++)h[e].handle===t&&(h[e].cancelled=!0)}}t.exports=function(t){return s.call(c,t)},t.exports.cancel=function(){i.apply(c,arguments)},t.exports.polyfill=function(t){t||(t=c),t.requestAnimationFrame=s,t.cancelAnimationFrame=i}}).call(this,n(3))},function(t,e,n){"use strict";n.d(e,"a",function(){return c});const r=!1;function c(){window.fbq&&(fbq("track","PageView"),r&&console.log("FB: page view")),window.fathom&&(fathom("trackPageview"),r&&console.log("Fathom: page view"))}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){(function(){var n,r,c,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:void 0!==e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-a)/1e6},r=e.hrtime,o=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),s=1e9*e.uptime(),a=o-s):Date.now?(t.exports=function(){return Date.now()-c},c=Date.now()):(t.exports=function(){return(new Date).getTime()-c},c=(new Date).getTime())}).call(this)}).call(this,n(5))},function(t,e){var n,r,c=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var i,l=[],u=!1,f=-1;function h(){u&&i&&(u=!1,i.length?l=i.concat(l):f=-1,l.length&&d())}function d(){if(!u){var t=s(h);u=!0;for(var e=l.length;e;){for(i=l,l=[];++f<e;)i&&i[f].run();f=-1,e=l.length}i=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function b(t,e){this.fun=t,this.array=e}function p(){}c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new b(t,e)),1!==l.length||u||s(d)},b.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=p,c.addListener=p,c.once=p,c.off=p,c.removeListener=p,c.removeAllListeners=p,c.emit=p,c.prependListener=p,c.prependOnceListener=p,c.listeners=function(t){return[]},c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),o=n.n(c);function a(){o.a.cancel(this.animation)}function s(t){if(Object(r.q)(this,t),this._state=Object(r.b)(Object(r.b)({undefined:void 0},{hidden:!1,position:0}),t.data),this._intro=!0,this._handlers.destroy=[a],document.getElementById("svelte-1omf71z-style")||function(){var t=Object(r.i)("style");t.id="svelte-1omf71z-style",t.textContent="header.svelte-1omf71z{transition:transform 250ms ease}header.hidden.svelte-1omf71z{transform:translate(0, -100%);-webkit-transform:translate(0, -100%);-ms-transform:translate(0, -100%)}",Object(r.a)(t,document.head)}(),t.root||(this._oncreate=[]),this._fragment=function(t,e){var n,c,o,a,s,i,l,u,f,h,d,b,p,m,j,O,_,g,v,y,E,w,S,P,C,A,L,R,x;return{c(){n=Object(r.i)("header"),c=Object(r.i)("ul"),o=Object(r.i)("li"),a=Object(r.i)("a"),s=Object(r.k)("Paprika!"),l=Object(r.i)("li"),u=Object(r.i)("a"),f=Object(r.k)("Folds"),d=Object(r.i)("li"),b=Object(r.i)("a"),p=Object(r.k)("Archive"),j=Object(r.k)("\n  "),O=Object(r.i)("ul"),_=Object(r.i)("li"),g=Object(r.i)("a"),v=Object(r.k)("Subscribe"),E=Object(r.i)("li"),w=Object(r.i)("a"),S=Object(r.k)("About"),C=Object(r.i)("li"),A=Object(r.i)("a"),L=Object(r.k)("Search"),this.h()},l(t){n=Object(r.f)(t,"HEADER",{class:!0},!1);var e=Object(r.e)(n);c=Object(r.f)(e,"UL",{class:!0},!1);var i=Object(r.e)(c);o=Object(r.f)(i,"LI",{class:!0},!1);var h=Object(r.e)(o);a=Object(r.f)(h,"A",{rel:!0,href:!0},!1);var m=Object(r.e)(a);s=Object(r.g)(m,"Paprika!"),m.forEach(r.o),h.forEach(r.o),l=Object(r.f)(i,"LI",{class:!0},!1);var y=Object(r.e)(l);u=Object(r.f)(y,"A",{rel:!0,href:!0},!1);var P=Object(r.e)(u);f=Object(r.g)(P,"Folds"),P.forEach(r.o),y.forEach(r.o),d=Object(r.f)(i,"LI",{class:!0},!1);var R=Object(r.e)(d);b=Object(r.f)(R,"A",{rel:!0,href:!0},!1);var x=Object(r.e)(b);p=Object(r.g)(x,"Archive"),x.forEach(r.o),R.forEach(r.o),i.forEach(r.o),j=Object(r.g)(e,"\n  "),O=Object(r.f)(e,"UL",{class:!0},!1);var k=Object(r.e)(O);_=Object(r.f)(k,"LI",{class:!0},!1);var N=Object(r.e)(_);g=Object(r.f)(N,"A",{rel:!0,href:!0},!1);var T=Object(r.e)(g);v=Object(r.g)(T,"Subscribe"),T.forEach(r.o),N.forEach(r.o),E=Object(r.f)(k,"LI",{class:!0},!1);var $=Object(r.e)(E);w=Object(r.f)($,"A",{rel:!0,href:!0},!1);var q=Object(r.e)(w);S=Object(r.g)(q,"About"),q.forEach(r.o),$.forEach(r.o),C=Object(r.f)(k,"LI",{class:!0},!1);var D=Object(r.e)(C);A=Object(r.f)(D,"A",{rel:!0,href:!0},!1);var H=Object(r.e)(A);L=Object(r.g)(H,"Search"),H.forEach(r.o),D.forEach(r.o),k.forEach(r.o),e.forEach(r.o),this.h()},h(){a.rel="prefetch",a.href="/",o.className=i="di pr1 "+(e.segment===e.undefined?"fsi":""),u.rel="prefetch",u.href="/folds",l.className=h="di pr1 "+("folds"===e.segment?"fsi":""),b.rel="prefetch",b.href="/archive",d.className=m="di pr1 "+("archive"===e.segment?"fsi":""),c.className="c12 sm-c6 pl2 mb0",g.rel="prefetch",g.href="/subscribe",_.className=y="di pr1 "+("subscribe"===e.segment?"fsi":""),w.rel="prefetch",w.href="/about",E.className=P="di pr1 "+("about"===e.segment?"fsi":""),A.rel="prefetch",A.href="/search",C.className=R="di pr1 "+("search"===e.segment?"fsi":""),O.className="c12 sm-c6 pl2 mb0",n.className=x=(e.hidden?"hidden":"")+" psf c12 usn t0 l0 r0 x xw px1 bgc-paprika z1 svelte-1omf71z"},m(t,e){Object(r.r)(n,t,e),Object(r.a)(c,n),Object(r.a)(o,c),Object(r.a)(a,o),Object(r.a)(s,a),Object(r.a)(l,c),Object(r.a)(u,l),Object(r.a)(f,u),Object(r.a)(d,c),Object(r.a)(b,d),Object(r.a)(p,b),Object(r.a)(j,n),Object(r.a)(O,n),Object(r.a)(_,O),Object(r.a)(g,_),Object(r.a)(v,g),Object(r.a)(E,O),Object(r.a)(w,E),Object(r.a)(S,w),Object(r.a)(C,O),Object(r.a)(A,C),Object(r.a)(L,A)},p(t,e){(t.segment||t.undefined)&&i!==(i="di pr1 "+(e.segment===e.undefined?"fsi":""))&&(o.className=i),t.segment&&h!==(h="di pr1 "+("folds"===e.segment?"fsi":""))&&(l.className=h),t.segment&&m!==(m="di pr1 "+("archive"===e.segment?"fsi":""))&&(d.className=m),t.segment&&y!==(y="di pr1 "+("subscribe"===e.segment?"fsi":""))&&(_.className=y),t.segment&&P!==(P="di pr1 "+("about"===e.segment?"fsi":""))&&(E.className=P),t.segment&&R!==(R="di pr1 "+("search"===e.segment?"fsi":""))&&(C.className=R),t.hidden&&x!==(x=(e.hidden?"hidden":"")+" psf c12 usn t0 l0 r0 x xw px1 bgc-paprika z1 svelte-1omf71z")&&(n.className=x)},d(t){t&&Object(r.o)(n)}}}(0,this._state),this.root._oncreate.push(()=>{(function(){this.animation=o()(function t(){var{position:e}=this.get();if(e!==window.scrollY){var n=e;this.set({position:window.scrollY}),n>window.scrollY||window.scrollY<100?this.set({hidden:!1}):this.set({hidden:!0})}o()(t.bind(this))}.bind(this))}).call(this),this.fire("update",{changed:Object(r.c)({},this._state),current:this._state})}),t.target){var e=Object(r.e)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(r.o),this._mount(t.target,t.anchor),Object(r.d)(this._oncreate)}}Object(r.b)(s.prototype,r.t);var i=s;function l(){clearTimeout(this.timeout)}function u(t){if(Object(r.q)(this,t),this._state=Object(r.b)({visible:!1},t.data),this._intro=!0,this._handlers.destroy=[l],document.getElementById("svelte-4t6ywm-style")||function(){var t=Object(r.i)("style");t.id="svelte-4t6ywm-style",t.textContent="svg.svelte-4t6ywm{height:1rem}",Object(r.a)(t,document.head)}(),t.root||(this._oncreate=[]),this._fragment=function(t,e){var n,c,o,a,s,i,l,u;return{c(){n=Object(r.j)("svg"),c=Object(r.j)("path"),o=Object(r.j)("animateTransform"),a=Object(r.j)("path"),s=Object(r.j)("animateTransform"),i=Object(r.j)("path"),l=Object(r.j)("animateTransform"),this.h()},l(t){n=Object(r.f)(t,"svg",{class:!0,xmlns:!0,viewBox:!0,width:!0,height:!0,preserveAspectRatio:!0},!0);var e=Object(r.e)(n);c=Object(r.f)(e,"path",{fill:!0,transform:!0,d:!0},!0);var u=Object(r.e)(c);o=Object(r.f)(u,"animateTransform",{attributeName:!0,type:!0,values:!0,dur:!0,begin:!0,repeatCount:!0,keySplines:!0,calcMode:!0},!0),Object(r.e)(o).forEach(r.o),u.forEach(r.o),a=Object(r.f)(e,"path",{fill:!0,transform:!0,d:!0},!0);var f=Object(r.e)(a);s=Object(r.f)(f,"animateTransform",{attributeName:!0,type:!0,values:!0,dur:!0,begin:!0,repeatCount:!0,keySplines:!0,calcMode:!0},!0),Object(r.e)(s).forEach(r.o),f.forEach(r.o),i=Object(r.f)(e,"path",{fill:!0,transform:!0,d:!0},!0);var h=Object(r.e)(i);l=Object(r.f)(h,"animateTransform",{attributeName:!0,type:!0,values:!0,dur:!0,begin:!0,repeatCount:!0,keySplines:!0,calcMode:!0},!0),Object(r.e)(l).forEach(r.o),h.forEach(r.o),e.forEach(r.o),this.h()},h(){Object(r.u)(o,"attributeName","transform"),Object(r.u)(o,"type","translate"),Object(r.u)(o,"values","0 0; 24 0; 0 0"),Object(r.u)(o,"dur","2s"),Object(r.u)(o,"begin","0"),Object(r.u)(o,"repeatCount","indefinite"),Object(r.u)(o,"keySplines","0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"),Object(r.u)(o,"calcMode","spline"),Object(r.u)(c,"fill","#eb5c28"),Object(r.u)(c,"transform","translate(0 0)"),Object(r.u)(c,"d","M2 14 V18 H6 V14z"),Object(r.u)(s,"attributeName","transform"),Object(r.u)(s,"type","translate"),Object(r.u)(s,"values","0 0; 24 0; 0 0"),Object(r.u)(s,"dur","2s"),Object(r.u)(s,"begin","0.1s"),Object(r.u)(s,"repeatCount","indefinite"),Object(r.u)(s,"keySplines","0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"),Object(r.u)(s,"calcMode","spline"),Object(r.u)(a,"fill","#eb5c28"),Object(r.u)(a,"transform","translate(0 0)"),Object(r.u)(a,"d","M0 14 V18 H8 V14z"),Object(r.u)(l,"attributeName","transform"),Object(r.u)(l,"type","translate"),Object(r.u)(l,"values","0 0; 24 0; 0 0"),Object(r.u)(l,"dur","2s"),Object(r.u)(l,"begin","0.2s"),Object(r.u)(l,"repeatCount","indefinite"),Object(r.u)(l,"keySplines","0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"),Object(r.u)(l,"calcMode","spline"),Object(r.u)(i,"fill","#ffffff"),Object(r.u)(i,"transform","translate(0 0)"),Object(r.u)(i,"d","M0 14 V18 H8 V14z"),Object(r.u)(n,"class",u="psf t0 l0 r0 w100 pen z3 "+(e.visible?"":"dn")+" svelte-4t6ywm"),Object(r.u)(n,"xmlns","http://www.w3.org/2000/svg"),Object(r.u)(n,"viewBox","0 14 32 18"),Object(r.u)(n,"width","32"),Object(r.u)(n,"height","4"),Object(r.u)(n,"preserveAspectRatio","none")},m(t,e){Object(r.r)(n,t,e),Object(r.a)(c,n),Object(r.a)(o,c),Object(r.a)(a,n),Object(r.a)(s,a),Object(r.a)(i,n),Object(r.a)(l,i)},p(t,e){t.visible&&u!==(u="psf t0 l0 r0 w100 pen z3 "+(e.visible?"":"dn")+" svelte-4t6ywm")&&Object(r.u)(n,"class",u)},d(t){t&&Object(r.o)(n)}}}(0,this._state),this.root._oncreate.push(()=>{(function(){this.timeout=setTimeout(()=>{this.set({visible:!0})},250)}).call(this),this.fire("update",{changed:Object(r.c)({},this._state),current:this._state})}),t.target){var e=Object(r.e)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(r.o),this._mount(t.target,t.anchor),Object(r.d)(this._oncreate)}}Object(r.b)(u.prototype,r.t);var f=u;function h(t,e){var n=new f({root:t.root,store:t.store});return{c(){n._fragment.c()},l(t){n._fragment.l(t)},m(t,e){n._mount(t,e)},d(t){n.destroy(t)}}}function d(t){if(Object(r.q)(this,t),this._state=Object(r.b)({},t.data),this._intro=!0,document.getElementById("svelte-17noc30-style")||function(){var t=Object(r.i)("style");t.id="svelte-17noc30-style",t.textContent="main.svelte-17noc30{min-height:100vh}#background.svelte-17noc30{height:100vh;z-index:-1;background:linear-gradient(\n      to top,\n      hsla(16, 83%, 54%, 0) 0%,\n      hsla(16, 83%, 54%, 0.262) 19%,\n      hsla(16, 83%, 54%, 0.459) 34%,\n      hsla(16, 83%, 54%, 0.618) 47%,\n      hsla(16, 83%, 54%, 0.722) 56.5%,\n      hsla(16, 83%, 54%, 0.806) 65%,\n      hsla(16, 83%, 54%, 0.874) 73%,\n      hsla(16, 83%, 54%, 0.925) 80.2%,\n      hsla(16, 83%, 54%, 0.958) 86.1%,\n      hsla(16, 83%, 54%, 0.979) 91%,\n      hsla(16, 83%, 54%, 0.992) 95.2%,\n      hsla(16, 83%, 54%, 0.998) 98.2%,\n      hsla(16, 83%, 54%, 1) 100%\n    )}",Object(r.a)(t,document.head)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var n,c,o,a,s,l={segment:e.child.segment},u=new i({root:t.root,store:t.store,data:l}),f=e.preloading&&h(t),d=[e.child.props],b=e.child.component;function p(e){for(var n={},c=0;c<d.length;c+=1)n=Object(r.b)(n,d[c]);return{root:t.root,store:t.store,data:n}}if(b)var m=new b(p());return{c(){u._fragment.c(),n=Object(r.k)("\n\n"),f&&f.c(),c=Object(r.k)("\n\n"),o=Object(r.i)("main"),a=Object(r.i)("div"),s=Object(r.k)("\n  "),m&&m._fragment.c(),this.h()},l(t){u._fragment.l(t),n=Object(r.g)(t,"\n\n"),f&&f.l(t),c=Object(r.g)(t,"\n\n"),o=Object(r.f)(t,"MAIN",{class:!0},!1);var e=Object(r.e)(o);a=Object(r.f)(e,"DIV",{id:!0,class:!0},!1),Object(r.e)(a).forEach(r.o),s=Object(r.g)(e,"\n  "),m&&m._fragment.l(e),e.forEach(r.o),this.h()},h(){a.id="background",a.className="psf t0 l0 r0 svelte-17noc30",o.className="pt4 pb1 px1 psr svelte-17noc30"},m(t,e){u._mount(t,e),Object(r.r)(n,t,e),f&&f.m(t,e),Object(r.r)(c,t,e),Object(r.r)(o,t,e),Object(r.a)(a,o),Object(r.a)(s,o),m&&m._mount(o,null)},p(e,n){var a={};e.child&&(a.segment=n.child.segment),u._set(a),n.preloading?f||((f=h(t)).c(),f.m(c.parentNode,c)):f&&(f.d(1),f=null);var s=e.child?Object(r.p)(d,[n.child.props]):{};b!==(b=n.child.component)?(m&&m.destroy(),b?((m=new b(p()))._fragment.c(),m._mount(o,null)):m=null):b&&m._set(s)},d(t){u.destroy(t),t&&Object(r.o)(n),f&&f.d(t),t&&(Object(r.o)(c),Object(r.o)(o)),m&&m.destroy()}}}(this,this._state),t.target){var e=Object(r.e)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(r.o),this._mount(t.target,t.anchor),this._lock=!0,Object(r.d)(this._beforecreate),Object(r.d)(this._oncreate),Object(r.d)(this._aftercreate),this._lock=!1}}Object(r.b)(d.prototype,r.t);var b=d,p=n(2);function m(t){if(Object(r.q)(this,t),this._state=Object(r.b)({},t.data),this._intro=!0,t.root||(this._oncreate=[]),this._fragment=function(t,e){var n,c,o,a,s,i,l,u=e.error.message;return document.title=n=e.status,{c(){c=Object(r.k)("\n\n"),o=Object(r.i)("h1"),a=Object(r.k)(e.status),s=Object(r.k)("\n\n"),i=Object(r.i)("p"),l=Object(r.k)(u)},l(t){c=Object(r.g)(t,"\n\n"),o=Object(r.f)(t,"H1",{},!1);var n=Object(r.e)(o);a=Object(r.g)(n,e.status),n.forEach(r.o),s=Object(r.g)(t,"\n\n"),i=Object(r.f)(t,"P",{},!1);var f=Object(r.e)(i);l=Object(r.g)(f,u),f.forEach(r.o)},m(t,e){Object(r.r)(c,t,e),Object(r.r)(o,t,e),Object(r.a)(a,o),Object(r.r)(s,t,e),Object(r.r)(i,t,e),Object(r.a)(l,i)},p(t,e){t.status&&n!==(n=e.status)&&(document.title=n),t.status&&(a.data=e.status),t.error&&u!==(u=e.error.message)&&(l.data=u)},d(t){t&&(Object(r.o)(c),Object(r.o)(o),Object(r.o)(s),Object(r.o)(i))}}}(0,this._state),this.root._oncreate.push(()=>{(function(){Object(p.a)()}).call(this),this.fire("update",{changed:Object(r.c)({},this._state),current:this._state})}),t.target){var e=Object(r.e)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(r.o),this._mount(t.target,t.anchor),Object(r.d)(this._oncreate)}}Object(r.b)(m.prototype,r.t);var j=m;const O=[/^\/index.json$/,/^\/last-modified.json$/,/^\/contributors.json$/,/^\/contributors\/([^\/]+?).json$/,/^\/support.json$/,/^\/search.json$/,/^\/about.json$/,/^\/articles.json$/,/^\/articles\/([^\/]+?).json$/,/^\/folds.json$/,/^\/folds\/([^\/]+?).json$/],_=[{js:()=>n.e(1).then(n.bind(null,17)),css:"__SAPPER_CSS_PLACEHOLDER:index.html__"},{js:()=>n.e(2).then(n.bind(null,18)),css:"__SAPPER_CSS_PLACEHOLDER:contributors/index.html__"},{js:()=>n.e(3).then(n.bind(null,19)),css:"__SAPPER_CSS_PLACEHOLDER:contributors/[slug].html__"},{js:()=>n.e(4).then(n.bind(null,20)),css:"__SAPPER_CSS_PLACEHOLDER:subscribe.html__"},{js:()=>n.e(5).then(n.bind(null,21)),css:"__SAPPER_CSS_PLACEHOLDER:articles/index.html__"},{js:()=>n.e(6).then(n.bind(null,22)),css:"__SAPPER_CSS_PLACEHOLDER:articles/[slug].html__"},{js:()=>n.e(7).then(n.bind(null,23)),css:"__SAPPER_CSS_PLACEHOLDER:archive/_layout.html__"},{js:()=>n.e(8).then(n.bind(null,24)),css:"__SAPPER_CSS_PLACEHOLDER:archive/index.html__"},{js:()=>n.e(9).then(n.bind(null,31)),css:"__SAPPER_CSS_PLACEHOLDER:archive/contributors.html__"},{js:()=>n.e(10).then(n.bind(null,32)),css:"__SAPPER_CSS_PLACEHOLDER:archive/articles.html__"},{js:()=>n.e(11).then(n.bind(null,33)),css:"__SAPPER_CSS_PLACEHOLDER:archive/folds.html__"},{js:()=>n.e(12).then(n.bind(null,25)),css:"__SAPPER_CSS_PLACEHOLDER:search.html__"},{js:()=>n.e(13).then(n.bind(null,26)),css:"__SAPPER_CSS_PLACEHOLDER:about.html__"},{js:()=>n.e(14).then(n.bind(null,30)),css:"__SAPPER_CSS_PLACEHOLDER:folds/index.html__"},{js:()=>n.e(15).then(n.bind(null,27)),css:"__SAPPER_CSS_PLACEHOLDER:folds/[slug].html__"},{js:()=>n.e(16).then(n.bind(null,28)),css:"__SAPPER_CSS_PLACEHOLDER:rsvp.html__"},{js:()=>n.e(17).then(n.bind(null,29)),css:"__SAPPER_CSS_PLACEHOLDER:[slug].html__"}],g=(t=>[{pattern:/^\/?$/,parts:[{i:0}]},{pattern:/^\/contributors\/?$/,parts:[null,{i:1}]},{pattern:/^\/contributors\/([^\/]+?)\/?$/,parts:[null,{i:2,params:e=>({slug:t(e[1])})}]},{pattern:/^\/subscribe\/?$/,parts:[{i:3}]},{pattern:/^\/articles\/?$/,parts:[null,{i:4}]},{pattern:/^\/articles\/([^\/]+?)\/?$/,parts:[null,{i:5,params:e=>({slug:t(e[1])})}]},{pattern:/^\/archive\/?$/,parts:[{i:6},{i:7}]},{pattern:/^\/archive\/contributors\/?$/,parts:[{i:6},{i:8}]},{pattern:/^\/archive\/articles\/?$/,parts:[{i:6},{i:9}]},{pattern:/^\/archive\/folds\/?$/,parts:[{i:6},{i:10}]},{pattern:/^\/search\/?$/,parts:[{i:11}]},{pattern:/^\/about\/?$/,parts:[{i:12}]},{pattern:/^\/folds\/?$/,parts:[null,{i:13}]},{pattern:/^\/folds\/([^\/]+?)\/?$/,parts:[null,{i:14,params:e=>({slug:t(e[1])})}]},{pattern:/^\/rsvp\/?$/,parts:[{i:15}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:16,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);let v,y,E,w,S=!1,P=[];const C={path:null,params:null,query:null,child:{segment:null,component:null,props:{}}};let A,L,R=null;let x,k=1;const N="undefined"!=typeof __SAPPER__&&__SAPPER__,T="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},$={};function q(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(N.baseUrl))return null;const e=t.pathname.slice(N.baseUrl.length);if(!O.some(t=>t.test(e)))for(let n=0;n<g.length;n+=1){const r=g[n],c=r.pattern.exec(e);if(c){const n={};return t.search.length>0&&t.search.slice(1).split("&").forEach(t=>{const[,e,r]=/([^=]*)(?:=(.*))?/.exec(t);n[decodeURIComponent(e)]=decodeURIComponent((r||"").replace(/\+/g," "))}),{url:t,path:e,page:r,match:c,query:n}}}}function D(){return{x:scrollX,y:scrollY}}function H(t,e,n,r){if(e)x=e;else{const t=D();$[x]=t,e=x=++k,$[x]=n?t:{x:0,y:0}}x=e,v&&v.set({preloading:!0});const c=R&&R.href===t.url.href?R.promise:I(t);R=null;const o=y={};return c.then(({redirect:t,data:c,nullable_depth:a})=>{if(t)return function(t,e={replaceState:!1}){const n=q(new URL(t,document.baseURI));return n?(T[e.replaceState?"replaceState":"pushState"]({id:x},"",t),H(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});!function(t,e,n,r,c,o){if(y!==o)return;if(v){let n=t.child;for(let t=0;t<e&&t!==e;t+=1)n=n.props.child;const{component:r}=n;n.component=null,v.set({child:t.child}),n.component=r,v.set(t)}else{const e=document.querySelector("#sapper-head-start"),n=document.querySelector("#sapper-head-end");if(e&&n){for(;e.nextSibling!==n;)U(e.nextSibling);U(e),U(n)}Object.assign(t,w),v=new b({target:L,data:t,store:A,hydrate:!0})}if(!r){if(c){const t=document.querySelector(c);t&&(n={x:0,y:t.getBoundingClientRect().top})}$[x]=n,n&&scrollTo(n.x,n.y)}Object.assign(C,t),S=!0}(c,a,$[e],n,r,o),document.activeElement&&document.activeElement.blur()})}function I(t){const{page:e,path:n,query:r}=t,c=n.split("/").filter(Boolean);let o=0;for(;P[o]&&c[o]&&P[o]===c[o];)o+=1;let a=null,s=null;const i={store:A,fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:(t,e)=>{s={statusCode:t,message:e}}};return E||(E=b.preload?N.preloaded[0]||b.preload.call(i,{path:n,query:r,params:{}}):{}),Promise.all(e.parts.map((e,c)=>c<o?null:e?z(_[e.i]).then(o=>{const a={path:n,query:r,params:e.params?e.params(t.match):{}};let s;return s=S||!N.preloaded[c+1]?o.preload?o.preload.call(i,a):{}:N.preloaded[c+1],Promise.resolve(s).then(t=>({Component:o,preloaded:t}))}):null)).catch(t=>(s={statusCode:500,message:t},[])).then(t=>w?t:Promise.resolve(E).then(e=>(w=e,t))).then(i=>{if(a)return{redirect:a};P=c;const l=(e.parts[e.parts.length-1].params||(()=>({})))(t.match);if(s){const t={path:n,query:r,params:l,error:"string"==typeof s.message?new Error(s.message):s.message,status:s.statusCode};return{data:Object.assign({},t,{preloading:!1,child:{component:j,props:t}})}}const u={path:n,query:r,error:null,status:null},f={path:n,preloading:!1,child:Object.assign({},C.child,{segment:P[0]})};V(r,C.query)&&(f.query=r),V(l,C.params)&&(f.params=l);let h=f.child,d=0;for(let c=0;c<e.parts.length;c+=1){const a=e.parts[c];if(!a)continue;const s=a.params||(()=>({}));c<o?(h.props.path=n,h.props.query=r,h.props.child=Object.assign({},h.props.child),d+=1):(h.component=i[c].Component,h.props=Object.assign({},h.props,u,{params:s(t.match)},i[c].preloaded),h.props.child={}),(h=h.props.child).segment=P[c+1]}return{data:f,nullable_depth:d}})}function M(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function z(t){const e="string"==typeof t.css?[]:t.css.map(M);return e.unshift(t.js()),Promise.all(e).then(t=>t[0].default)}function U(t){t.parentNode.removeChild(t)}function V(t,e){return JSON.stringify(t)!==JSON.stringify(e)}function B(t){const e=q(new URL(t,document.baseURI));if(e)return R&&t===R.href||function(t,e){R={href:t,promise:e}}(t,I(e)),R.promise}let F;function Y(t){clearTimeout(F),F=setTimeout(()=>{J(t)},20)}function J(t){const e=G(t.target);e&&"prefetch"===e.rel&&B(e.href)}function K(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=G(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const c=new URL(r);if(c.pathname===location.pathname&&c.search===location.search)return;const o=q(c);if(o){H(o,null,e.hasAttribute("sapper-noscroll"),c.hash),t.preventDefault(),T.pushState({id:x},"",c.href)}}function G(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function W(t){if($[x]=D(),t.state){const e=q(new URL(location.href));e?H(e,t.state.id):location.href=location.href}else!function(t){k=t}(k+1),function(t){x=t}(k),T.replaceState({id:x},"",location.href)}!function(t){"scrollRestoration"in T&&(T.scrollRestoration="manual"),function(t){L=t}(t.target),t.store&&function(t){A=t(N.store)}(t.store),addEventListener("click",K),addEventListener("popstate",W),addEventListener("touchstart",J),addEventListener("mousemove",Y),Promise.resolve().then(()=>{const{hash:t,href:e}=location;if(T.replaceState({id:k},"",e),!N.error){const e=q(new URL(location.href));if(e)return H(e,k,!1,t)}})}({target:document.querySelector("#sapper")})}]);