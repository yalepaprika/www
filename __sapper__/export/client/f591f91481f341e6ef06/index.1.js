(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(t,e,c){"use strict";var r=c(0);function a(t,e){var c,a=e.article.title&&i(t,e);return{c(){a&&a.c(),c=Object(r.i)()},l(t){a&&a.l(t),c=Object(r.i)()},m(t,e){a&&a.m(t,e),Object(r.t)(c,t,e)},p(e,r){r.article.title?a?a.p(e,r):((a=i(t,r)).c(),a.m(c.parentNode,c)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&Object(r.p)(c)}}}function s(t,e){var c,a,s,n,i=e.contributor.title.rendered;return{c(){c=Object(r.j)("span"),a=Object(r.j)("noscript"),s=Object(r.l)(","),n=Object(r.l)(" ")},l(t){c=Object(r.g)(t,"SPAN",{},!1);var e=Object(r.f)(c);a=Object(r.j)("noscript"),s=Object(r.h)(e,","),n=Object(r.h)(e," "),e.forEach(r.p)},m(t,e){Object(r.t)(c,t,e),Object(r.b)(a,c),a.insertAdjacentHTML("beforebegin",i),Object(r.b)(s,c),Object(r.b)(n,c)},p(t,e){t.articles&&i!==(i=e.contributor.title.rendered)&&(Object(r.o)(a),a.insertAdjacentHTML("beforebegin",i))},d(t){t&&Object(r.p)(c)}}}function n(t,e){for(var c,a=e.article.meta.contributors,n=[],i=0;i<a.length;i+=1)n[i]=s(0,l(e,a,i));return{c(){for(var t=0;t<n.length;t+=1)n[t].c();c=Object(r.i)()},l(t){for(var e=0;e<n.length;e+=1)n[e].l(t);c=Object(r.i)()},m(t,e){for(var a=0;a<n.length;a+=1)n[a].m(t,e);Object(r.t)(c,t,e)},p(t,e){if(t.articles){a=e.article.meta.contributors;for(var r=0;r<a.length;r+=1){const i=l(e,a,r);n[r]?n[r].p(t,i):(n[r]=s(0,i),n[r].c(),n[r].m(c.parentNode,c))}for(;r<n.length;r+=1)n[r].d(1);n.length=a.length}},d(t){Object(r.m)(n,t),t&&Object(r.p)(c)}}}function i(t,e){var c,a,s,i,b,l=e.article.title.rendered,o=e.article.meta.contributors&&n(0,e);return{c(){c=Object(r.j)("li"),a=Object(r.j)("a"),o&&o.c(),s=Object(r.l)("\n      "),i=Object(r.j)("span"),this.h()},l(t){c=Object(r.g)(t,"LI",{},!1);var e=Object(r.f)(c);a=Object(r.g)(e,"A",{rel:!0,href:!0},!1);var n=Object(r.f)(a);o&&o.l(n),s=Object(r.h)(n,"\n      "),i=Object(r.g)(n,"SPAN",{class:!0},!1),Object(r.f)(i).forEach(r.p),n.forEach(r.p),e.forEach(r.p),this.h()},h(){i.className="fsi",a.rel="prefetch",a.href=b="/articles/"+e.article.slug},m(t,e){Object(r.t)(c,t,e),Object(r.b)(a,c),o&&o.m(a,null),Object(r.b)(s,a),Object(r.b)(i,a),i.innerHTML=l},p(t,e){e.article.meta.contributors?o?o.p(t,e):((o=n(0,e)).c(),o.m(a,s)):o&&(o.d(1),o=null),t.articles&&l!==(l=e.article.title.rendered)&&(i.innerHTML=l),t.articles&&b!==(b="/articles/"+e.article.slug)&&(a.href=b)},d(t){t&&Object(r.p)(c),o&&o.d()}}}function b(t,e,c){const r=Object.create(t);return r.article=e[c],r.each_value=e,r.article_index=c,r}function l(t,e,c){const r=Object.create(t);return r.contributor=e[c],r.each_value_1=e,r.contributor_index=c,r}function o(t){if(Object(r.s)(this,t),this._state=Object(r.c)({},t.data),this._intro=!0,this._fragment=function(t,e){for(var c,s=e.articles,n=[],i=0;i<s.length;i+=1)n[i]=a(t,b(e,s,i));return{c(){c=Object(r.j)("ul");for(var t=0;t<n.length;t+=1)n[t].c()},l(t){c=Object(r.g)(t,"UL",{},!1);for(var e=Object(r.f)(c),a=0;a<n.length;a+=1)n[a].l(e);e.forEach(r.p)},m(t,e){Object(r.t)(c,t,e);for(var a=0;a<n.length;a+=1)n[a].m(c,null)},p(e,r){if(e.articles){s=r.articles;for(var i=0;i<s.length;i+=1){const l=b(r,s,i);n[i]?n[i].p(e,l):(n[i]=a(t,l),n[i].c(),n[i].m(c,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},d(t){t&&Object(r.p)(c),Object(r.m)(n,t)}}}(this,this._state),t.target){var e=Object(r.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(r.p),this._mount(t.target,t.anchor)}}Object(r.c)(o.prototype,r.v),e.a=o},18:function(t,e,c){"use strict";c.r(e);var r=c(0),a=c(2),s=c(7),n=c(10);function i(t,e){var c,a,s,i={articles:e.fold.meta.posts},b=new n.a({root:t.root,store:t.store,data:i});return{c(){c=Object(r.j)("h3"),a=Object(r.l)("Articles"),s=Object(r.l)("\n      "),b._fragment.c()},l(t){c=Object(r.g)(t,"H3",{},!1);var e=Object(r.f)(c);a=Object(r.h)(e,"Articles"),e.forEach(r.p),s=Object(r.h)(t,"\n      "),b._fragment.l(t)},m(t,e){Object(r.t)(c,t,e),Object(r.b)(a,c),Object(r.t)(s,t,e),b._mount(t,e)},p(t,e){var c={};t.fold&&(c.articles=e.fold.meta.posts),b._set(c)},d(t){t&&(Object(r.p)(c),Object(r.p)(s)),b.destroy(t)}}}function b(t){if(Object(r.s)(this,t),this._state=Object(r.c)({},t.data),this._intro=!0,document.getElementById("svelte-15fnxyj-style")||function(){var t=Object(r.j)("style");t.id="svelte-15fnxyj-style",t.textContent=".mailing-list.svelte-15fnxyj{width:100%;border:0.2rem solid black}input[type=submit].svelte-15fnxyj{color:white;background:black;padding:8px 16px}input[type=email].svelte-15fnxyj{color:black;border-bottom:0.2rem solid black;font-size:2rem;line-height:0.9;font-weight:400;margin-right:1rem;width:100%\n  }.posts.svelte-15fnxyj{margin-top:7rem}@media(min-width: 768px){.posts.svelte-15fnxyj{margin-top:15rem}}.fold-front.svelte-15fnxyj{opacity:0.8;mix-blend-mode:screen}",Object(r.b)(t,document.head)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var c,a,n,b,l,o,j,O,d,f,h,m,p,u,g,v,_,y,x,E,w,I,N,k,L,M,V=e.fold.content.rendered,A={title:e.fold.title.rendered},D=new s.a({root:t.root,store:t.store,data:A}),T=e.fold.meta.posts&&i(t,e);return{c(){c=Object(r.l)("\n  "),a=Object(r.j)("div"),n=Object(r.j)("div"),b=Object(r.j)("img"),o=Object(r.l)("\n"),j=Object(r.j)("div"),D._fragment.c(),O=Object(r.l)("\n"),d=Object(r.j)("div"),f=Object(r.j)("div"),T&&T.c(),h=Object(r.l)("\n    "),m=Object(r.j)("div"),p=Object(r.j)("form"),u=Object(r.j)("div"),g=Object(r.j)("label"),v=Object(r.l)("Sign up to receive new Paprika! issues by email"),_=Object(r.l)("\n        "),y=Object(r.j)("input"),x=Object(r.l)("\n          \n          "),E=Object(r.j)("div"),w=Object(r.j)("input"),I=Object(r.l)("\n          "),N=Object(r.j)("div"),k=Object(r.j)("input"),L=Object(r.l)("\n  "),M=Object(r.j)("div"),this.h()},l(t){c=Object(r.h)(t,"\n  "),a=Object(r.g)(t,"DIV",{class:!0},!1);var e=Object(r.f)(a);n=Object(r.g)(e,"DIV",{class:!0},!1);var s=Object(r.f)(n);b=Object(r.g)(s,"IMG",{class:!0,src:!0},!1),Object(r.f)(b).forEach(r.p),s.forEach(r.p),e.forEach(r.p),o=Object(r.h)(t,"\n"),j=Object(r.g)(t,"DIV",{class:!0},!1);var i=Object(r.f)(j);D._fragment.l(i),i.forEach(r.p),O=Object(r.h)(t,"\n"),d=Object(r.g)(t,"DIV",{class:!0},!1);var l=Object(r.f)(d);f=Object(r.g)(l,"DIV",{class:!0},!1);var V=Object(r.f)(f);T&&T.l(V),h=Object(r.h)(V,"\n    "),m=Object(r.g)(V,"DIV",{class:!0},!1);var A=Object(r.f)(m);p=Object(r.g)(A,"FORM",{action:!0,method:!0,id:!0,name:!0,class:!0,target:!0,novalidate:!0},!1);var H=Object(r.f)(p);u=Object(r.g)(H,"DIV",{id:!0},!1);var z=Object(r.f)(u);g=Object(r.g)(z,"LABEL",{for:!0},!1);var q=Object(r.f)(g);v=Object(r.h)(q,"Sign up to receive new Paprika! issues by email"),q.forEach(r.p),_=Object(r.h)(z,"\n        "),y=Object(r.g)(z,"INPUT",{type:!0,value:!0,name:!0,class:!0,id:!0,required:!0},!1),Object(r.f)(y).forEach(r.p),x=Object(r.h)(z,"\n          \n          "),E=Object(r.g)(z,"DIV",{style:!0,"aria-hidden":!0},!1);var P=Object(r.f)(E);w=Object(r.g)(P,"INPUT",{type:!0,name:!0,tabindex:!0,value:!0},!1),Object(r.f)(w).forEach(r.p),P.forEach(r.p),I=Object(r.h)(z,"\n          "),N=Object(r.g)(z,"DIV",{class:!0},!1);var S=Object(r.f)(N);k=Object(r.g)(S,"INPUT",{type:!0,value:!0,name:!0,id:!0,class:!0},!1),Object(r.f)(k).forEach(r.p),S.forEach(r.p),z.forEach(r.p),H.forEach(r.p),A.forEach(r.p),V.forEach(r.p),L=Object(r.h)(l,"\n  "),M=Object(r.g)(l,"DIV",{class:!0},!1),Object(r.f)(M).forEach(r.p),l.forEach(r.p),this.h()},h(){document.title="Paprika!",b.className="mx100 fold-front svelte-15fnxyj",b.src=l=e.fold.meta.fold_front.media_details.sizes.full.source_url,n.className="w100 oh bgc-paprika",a.className="psa co1 mt3 c10 sm-c4 t0 l0 z1",j.className="x",g.htmlFor="mce-EMAIL",Object(r.x)(y,"type","email"),y.value="",y.name="EMAIL",y.className="email svelte-15fnxyj",y.id="mce-EMAIL",y.required=!0,Object(r.x)(w,"type","text"),w.name="b_4ca966a132d110cd3f44a5d47_5281aa2685",w.tabIndex="-1",w.value="",Object(r.y)(E,"position","absolute"),Object(r.y)(E,"left","-5000px"),Object(r.x)(E,"aria-hidden","true"),Object(r.x)(k,"type","submit"),k.value="Sign Up",k.name="subscribe",k.id="mc-embedded-subscribe",k.className="button svelte-15fnxyj",N.className="clear pt1",u.id="mc_embed_signup_scroll",p.action="https://yalepaprika.us1.list-manage.com/subscribe/post?u=4ca966a132d110cd3f44a5d47&id=5281aa2685",p.method="post",p.id="mc-embedded-subscribe-form",p.name="mc-embedded-subscribe-form",p.className="validate",p.target="_blank",p.noValidate=!0,m.className="mailing-list p1 svelte-15fnxyj",f.className="c12 sm-co2 sm-c4 posts pr1 mb1 svelte-15fnxyj",M.className="c12 sm-c4",d.className="x xw psr z2 text"},m(t,e){Object(r.t)(c,t,e),Object(r.t)(a,t,e),Object(r.b)(n,a),Object(r.b)(b,n),Object(r.t)(o,t,e),Object(r.t)(j,t,e),D._mount(j,null),Object(r.t)(O,t,e),Object(r.t)(d,t,e),Object(r.b)(f,d),T&&T.m(f,null),Object(r.b)(h,f),Object(r.b)(m,f),Object(r.b)(p,m),Object(r.b)(u,p),Object(r.b)(g,u),Object(r.b)(v,g),Object(r.b)(_,u),Object(r.b)(y,u),Object(r.b)(x,u),Object(r.b)(E,u),Object(r.b)(w,E),Object(r.b)(I,u),Object(r.b)(N,u),Object(r.b)(k,N),Object(r.b)(L,d),Object(r.b)(M,d),M.innerHTML=V},p(e,c){e.fold&&l!==(l=c.fold.meta.fold_front.media_details.sizes.full.source_url)&&(b.src=l);var r={};e.fold&&(r.title=c.fold.title.rendered),D._set(r),c.fold.meta.posts?T?T.p(e,c):((T=i(t,c)).c(),T.m(f,h)):T&&(T.d(1),T=null),e.fold&&V!==(V=c.fold.content.rendered)&&(M.innerHTML=V)},d(t){t&&(Object(r.p)(c),Object(r.p)(a),Object(r.p)(o),Object(r.p)(j)),D.destroy(),t&&(Object(r.p)(O),Object(r.p)(d)),T&&T.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){Object(a.a)()}).call(this),this.fire("update",{changed:Object(r.d)({},this._state),current:this._state})}),t.target){var e=Object(r.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(r.p),this._mount(t.target,t.anchor),this._lock=!0,Object(r.e)(this._beforecreate),Object(r.e)(this._oncreate),Object(r.e)(this._aftercreate),this._lock=!1}}Object(r.c)(b.prototype,r.v),b.preload=async function({params:t,query:e}){const c=await this.fetch("/index.json?fields=title/rendered,content/rendered,meta(volume,number,publication_date,fold_front/media_details/sizes/full/source_url,fold_editors(title/rendered,slug),graphic_designer(title/rendered,slug),positions_editor(title/rendered,slug),web_editor(title/rendered,slug),posts(title/rendered,slug,meta/contributors(title/rendered)),)");if(!c.ok){const t=await c.text();return this.error(c.status,t)}return{fold:await c.json()}},e.default=b},7:function(t,e,c){"use strict";var r=c(0);function a(t){if(Object(r.s)(this,t),this._state=Object(r.c)({},t.data),this._intro=!0,document.getElementById("svelte-quv5ds-style")||function(){var t=Object(r.j)("style");t.id="svelte-quv5ds-style",t.textContent="h1.svelte-quv5ds{font-size:3rem;line-height:0.9;font-weight:400;margin-bottom:3rem}@media(min-width: 768px){h1.svelte-quv5ds{font-size:4rem}}",Object(r.b)(t,document.head)}(),this._fragment=function(t,e){var c,a;return{c(){c=Object(r.j)("div"),a=Object(r.j)("h1"),this.h()},l(t){c=Object(r.g)(t,"DIV",{class:!0},!1);var e=Object(r.f)(c);a=Object(r.g)(e,"H1",{class:!0},!1),Object(r.f)(a).forEach(r.p),e.forEach(r.p),this.h()},h(){a.className="co2 c8 sm-co4 sm-c4 svelte-quv5ds",c.className="c12 z2"},m(t,s){Object(r.t)(c,t,s),Object(r.b)(a,c),a.innerHTML=e.title},p(t,e){t.title&&(a.innerHTML=e.title)},d(t){t&&Object(r.p)(c)}}}(0,this._state),t.target){var e=Object(r.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(r.p),this._mount(t.target,t.anchor)}}Object(r.c)(a.prototype,r.v),e.a=a}}]);