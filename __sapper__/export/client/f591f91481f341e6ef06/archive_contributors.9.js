(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{32:function(t,e,r){"use strict";r.r(e);var c=r(0),n=r(2);var i=function(t){let e=t.split(" ");return e[e.length-1]};function o({contributors:t}){return function(t,e,r){if(e<2)return[t];var c,n=t.length,i=[],o=0;if(n%e==0)for(c=Math.floor(n/e);o<n;)i.push(t.slice(o,o+=c));else if(r)for(;o<n;)c=Math.ceil((n-o)/e--),i.push(t.slice(o,o+=c));else{for(e--,n%(c=Math.floor(n/e))==0&&c--;o<c*e;)i.push(t.slice(o,o+=c));i.push(t.slice(c*e))}return i}(t.reduce((t,e)=>{let r="";if(t.length>1){r=s(t[t.length-1].contributor)}let c=s(e);return c!==r&&t.push({type:"title",title:c}),t.push({type:"contributor",contributor:e}),t},[]),6,!0)}function s(t){return(t.meta.organization?t.title.rendered:i(t.title.rendered)).normalize("NFD").charAt(0).toUpperCase()}function h(t,e){for(var r,n,i=e.chunk,o=[],s=0;s<i.length;s+=1)o[s]=a(t,b(e,i,s));return{c(){r=Object(c.j)("div"),n=Object(c.j)("ul");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){r=Object(c.g)(t,"DIV",{class:!0},!1);var e=Object(c.f)(r);n=Object(c.g)(e,"UL",{},!1);for(var i=Object(c.f)(n),s=0;s<o.length;s+=1)o[s].l(i);i.forEach(c.p),e.forEach(c.p),this.h()},h(){r.className="sm-c2 pr1"},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r);for(var i=0;i<o.length;i+=1)o[i].m(n,null)},p(e,r){if(e.chunks){i=r.chunk;for(var c=0;c<i.length;c+=1){const s=b(r,i,c);o[c]?o[c].p(e,s):(o[c]=a(t,s),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=i.length}},d(t){t&&Object(c.p)(r),Object(c.m)(o,t)}}}function a(t,e){var r;function n(t){return"contributor"==t.item.type?u:l}var i=n(e),o=i(t,e);return{c(){o.c(),r=Object(c.i)()},l(t){o.l(t),r=Object(c.i)()},m(t,e){o.m(t,e),Object(c.t)(r,t,e)},p(e,c){i===(i=n(c))&&o?o.p(e,c):(o.d(1),(o=i(t,c)).c(),o.m(r.parentNode,r))},d(t){o.d(t),t&&Object(c.p)(r)}}}function u(t,e){var r,n,i,o=e.item.contributor.title.rendered;return{c(){r=Object(c.j)("li"),n=Object(c.j)("a"),this.h()},l(t){r=Object(c.g)(t,"LI",{},!1);var e=Object(c.f)(r);n=Object(c.g)(e,"A",{rel:!0,href:!0},!1),Object(c.f)(n).forEach(c.p),e.forEach(c.p),this.h()},h(){n.rel="prefetch",n.href=i="contributors/"+e.item.contributor.slug},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),n.innerHTML=o},p(t,e){t.chunks&&o!==(o=e.item.contributor.title.rendered)&&(n.innerHTML=o),t.chunks&&i!==(i="contributors/"+e.item.contributor.slug)&&(n.href=i)},d(t){t&&Object(c.p)(r)}}}function l(t,e){var r,n,i=e.item.title;return{c(){r=Object(c.j)("li"),n=Object(c.l)(i),this.h()},l(t){r=Object(c.g)(t,"LI",{class:!0},!1);var e=Object(c.f)(r);n=Object(c.h)(e,i),e.forEach(c.p),this.h()},h(){r.className="title svelte-1tawkfh"},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r)},p(t,e){t.chunks&&i!==(i=e.item.title)&&(n.data=i)},d(t){t&&Object(c.p)(r)}}}function f(t,e,r){const c=Object.create(t);return c.chunk=e[r],c.each_value=e,c.chunk_index=r,c}function b(t,e,r){const c=Object.create(t);return c.item=e[r],c.each_value_1=e,c.item_index=r,c}function j(t){if(Object(c.s)(this,t),this._state=Object(c.c)({},t.data),this._recompute({contributors:1},this._state),this._intro=!0,document.getElementById("svelte-1tawkfh-style")||function(){var t=Object(c.j)("style");t.id="svelte-1tawkfh-style",t.textContent="li.title.svelte-1tawkfh:not(:first-child){margin-top:1.2rem}",Object(c.b)(t,document.head)}(),this._fragment=function(t,e){for(var r,n=e.chunks,i=[],o=0;o<n.length;o+=1)i[o]=h(t,f(e,n,o));return{c(){r=Object(c.j)("div");for(var t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){r=Object(c.g)(t,"DIV",{class:!0},!1);for(var e=Object(c.f)(r),n=0;n<i.length;n+=1)i[n].l(e);e.forEach(c.p),this.h()},h(){r.className="c12 sm-x"},m(t,e){Object(c.t)(r,t,e);for(var n=0;n<i.length;n+=1)i[n].m(r,null)},p(e,c){if(e.chunks){n=c.chunks;for(var o=0;o<n.length;o+=1){const s=f(c,n,o);i[o]?i[o].p(e,s):(i[o]=h(t,s),i[o].c(),i[o].m(r,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(t){t&&Object(c.p)(r),Object(c.m)(i,t)}}}(this,this._state),t.target){var e=Object(c.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.p),this._mount(t.target,t.anchor)}}Object(c.c)(j.prototype,c.v),j.prototype._recompute=function(t,e){t.contributors&&this._differs(e.chunks,e.chunks=o(e))&&(t.chunks=!0)};var O=j;function p(t){if(Object(c.s)(this,t),this._state=Object(c.c)({},t.data),this._intro=!0,t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var r,n={contributors:e.contributors},i=new O({root:t.root,store:t.store,data:n});return{c(){r=Object(c.l)("\n\n"),i._fragment.c(),this.h()},l(t){r=Object(c.h)(t,"\n\n"),i._fragment.l(t),this.h()},h(){document.title="Contributors"},m(t,e){Object(c.t)(r,t,e),i._mount(t,e)},p(t,e){var r={};t.contributors&&(r.contributors=e.contributors),i._set(r)},d(t){t&&Object(c.p)(r),i.destroy(t)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){Object(n.a)()}).call(this),this.fire("update",{changed:Object(c.d)({},this._state),current:this._state})}),t.target){var e=Object(c.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.p),this._mount(t.target,t.anchor),this._lock=!0,Object(c.e)(this._beforecreate),Object(c.e)(this._oncreate),Object(c.e)(this._aftercreate),this._lock=!1}}Object(c.c)(p.prototype,c.v),p.preload=async function({params:t,query:e}){const r=await this.fetch("/contributors.json?fields=title/rendered,slug,meta/organization");if(!r.ok){const t=await r.text();return this.error(r.status,t)}return{contributors:await r.json()}};e.default=p}}]);