(window.webpackJsonp=window.webpackJsonp||[]).push([[6],[,,,,,,,function(t,e,r){"use strict";var n=r(0);function c(t){if(Object(n.s)(this,t),this._state=Object(n.c)({},t.data),this._intro=!0,document.getElementById("svelte-quv5ds-style")||function(){var t=Object(n.j)("style");t.id="svelte-quv5ds-style",t.textContent="h1.svelte-quv5ds{font-size:3rem;line-height:0.9;font-weight:400;margin-bottom:3rem}@media(min-width: 768px){h1.svelte-quv5ds{font-size:4rem}}",Object(n.b)(t,document.head)}(),this._fragment=function(t,e){var r,c;return{c(){r=Object(n.j)("div"),c=Object(n.j)("h1"),this.h()},l(t){r=Object(n.g)(t,"DIV",{class:!0},!1);var e=Object(n.f)(r);c=Object(n.g)(e,"H1",{class:!0},!1),Object(n.f)(c).forEach(n.p),e.forEach(n.p),this.h()},h(){c.className="co2 c8 sm-co4 sm-c4 svelte-quv5ds",r.className="c12 z2"},m(t,a){Object(n.t)(r,t,a),Object(n.b)(c,r),c.innerHTML=e.title},p(t,e){t.title&&(c.innerHTML=e.title)},d(t){t&&Object(n.p)(r)}}}(0,this._state),t.target){var e=Object(n.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(n.p),this._mount(t.target,t.anchor)}}Object(n.c)(c.prototype,n.v),e.a=c},function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(9),c=r.n(n);function a(t){return c()(t).format("MMMM D, YYYY")}},function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",c="day",a="week",i="month",s="year",o=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,u=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},d={padStart:h,padZoneStr:function(t){var e=Math.abs(t),r=Math.floor(e/60),n=e%60;return(t<=0?"+":"-")+h(r,2,"0")+":"+h(n,2,"0")},monthDiff:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,"months"),c=e-n<0,a=t.clone().add(r+(c?-1:1),"months");return Number(-(r+(e-n)/(c?n-a:a-n)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(o){return{M:i,y:s,w:a,d:c,h:n,m:r,s:e,ms:t}[o]||String(o||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},b="en",f={};f[b]=l;var j=function(t){return t instanceof g},m=function(t,e,r){var n;if(!t)return null;if("string"==typeof t)f[t]&&(n=t),e&&(f[t]=e,n=t);else{var c=t.name;f[c]=t,n=c}return r||(b=n),n},O=function(t,e){if(j(t))return t.clone();var r=e||{};return r.date=t,new g(r)},p=function(t,e){return O(t,{locale:e.$L})},$=d;$.parseLocale=m,$.isDayjs=j,$.wrapper=p;var g=function(){function l(t){this.parse(t)}var h=l.prototype;return h.parse=function(t){var e,r;this.$d=null===(e=t.date)?new Date(NaN):$.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(r=e.match(o))?new Date(r[1],r[2]-1,r[3]||1,r[5]||0,r[6]||0,r[7]||0,r[8]||0):new Date(e),this.init(t)},h.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||m(t.locale,null,!0)||b},h.$utils=function(){return $},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.$compare=function(t){return this.valueOf()-O(t).valueOf()},h.isSame=function(t){return 0===this.$compare(t)},h.isBefore=function(t){return this.$compare(t)<0},h.isAfter=function(t){return this.$compare(t)>0},h.year=function(){return this.$y},h.month=function(){return this.$M},h.day=function(){return this.$W},h.date=function(){return this.$D},h.hour=function(){return this.$H},h.minute=function(){return this.$m},h.second=function(){return this.$s},h.millisecond=function(){return this.$ms},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var u=this,l=!!$.isUndefined(o)||o,h=function(t,e){var r=p(new Date(u.$y,e,t),u);return l?r:r.endOf(c)},d=function(t,e){return p(u.toDate()[t].apply(u.toDate(),l?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),u)};switch($.prettyUnit(t)){case s:return l?h(1,0):h(31,11);case i:return l?h(1,this.$M):h(0,this.$M+1);case a:return h(l?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case c:case"date":return d("setHours",0);case n:return d("setMinutes",1);case r:return d("setSeconds",2);case e:return d("setMilliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(a,o){switch($.prettyUnit(a)){case c:this.$d.setDate(this.$D+(o-this.$W));break;case"date":this.$d.setDate(o);break;case i:this.$d.setMonth(o);break;case s:this.$d.setFullYear(o);break;case n:this.$d.setHours(o);break;case r:this.$d.setMinutes(o);break;case e:this.$d.setSeconds(o);break;case t:this.$d.setMilliseconds(o)}return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.add=function(t,o){var u=this;t=Number(t);var l,h=$.prettyUnit(o),d=function(e,r){var n=u.set("date",1).set(e,r+t);return n.set("date",Math.min(u.$D,n.daysInMonth()))};if(h===i)return d(i,this.$M);if(h===s)return d(s,this.$y);switch(h){case r:l=6e4;break;case n:l=36e5;break;case c:l=864e5;break;case a:l=6048e5;break;case e:l=1e3;break;default:l=1}var b=this.valueOf()+t*l;return p(b,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,r=t||"YYYY-MM-DDTHH:mm:ssZ",n=$.padZoneStr(this.$d.getTimezoneOffset()),c=this.$locale(),a=c.weekdays,i=c.months,s=function(t,e,r,n){return t&&t[e]||r[e].substr(0,n)};return r.replace(u,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return $.padStart(e.$M+1,2,"0");case"MMM":return s(c.monthsShort,e.$M,i,3);case"MMMM":return i[e.$M];case"D":return String(e.$D);case"DD":return $.padStart(e.$D,2,"0");case"d":return String(e.$W);case"dd":return s(c.weekdaysMin,e.$W,a,2);case"ddd":return s(c.weekdaysShort,e.$W,a,3);case"dddd":return a[e.$W];case"H":return String(e.$H);case"HH":return $.padStart(e.$H,2,"0");case"h":case"hh":return 0===e.$H?12:$.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0");case"a":return e.$H<12?"am":"pm";case"A":return e.$H<12?"AM":"PM";case"m":return String(e.$m);case"mm":return $.padStart(e.$m,2,"0");case"s":return String(e.$s);case"ss":return $.padStart(e.$s,2,"0");case"SSS":return $.padStart(e.$ms,3,"0");case"Z":return n;default:return n.replace(":","")}})},h.diff=function(t,o,u){var l=$.prettyUnit(o),h=O(t),d=this-h,b=$.monthDiff(this,h);switch(l){case s:b/=12;break;case i:break;case"quarter":b/=3;break;case a:b=d/6048e5;break;case c:b=d/864e5;break;case n:b=d/36e5;break;case r:b=d/6e4;break;case e:b=d/1e3;break;default:b=d}return u?b:$.absFloor(b)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return f[this.$L]},h.locale=function(t,e){var r=this.clone();return r.$L=m(t,e,!0),r},h.clone=function(){return p(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},h.toJSON=function(){return this.toISOString()},h.toISOString=function(){return this.toDate().toISOString()},h.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},h.toString=function(){return this.$d.toUTCString()},l}();return O.extend=function(t,e){return t(e,g,O),O},O.locale=m,O.isDayjs=j,O.en=f[b],O}()},,function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(12),c=r.n(n);function a(t){return c()(t,"all")}},function(t,e,r){"use strict";var n,c=r(13),a={},i={default:{"&quot;":'"',"&#34;":'"',"&apos;":"'","&#39;":"'","&amp;":"&","&#38;":"&","&gt;":">","&#62;":">","&lt;":"<","&#60;":"<"},extras:{"&cent;":"¢","&#162;":"¢","&copy;":"©","&#169;":"©","&euro;":"€","&#8364;":"€","&pound;":"£","&#163;":"£","&reg;":"®","&#174;":"®","&yen;":"¥","&#165;":"¥"}};function s(t,e){if(!function(t){return t&&"string"==typeof t}(t))return"";var r=i[e||"default"],n=function(t,e){if(a[t])return a[t];var r=Object.keys(e).join("|"),n=new RegExp("(?=("+r+"))\\1","g");return a[t]=n,n}(e,r);return t.replace(n,function(t){return r[t]})}Object.defineProperty(i,"all",{get:function(){return n||(n=c({},i.default,i.extras))}}),s.chars=i.default,s.extras=i.extras,Object.defineProperty(s,"all",{get:function(){return i.all}}),t.exports=s},function(t,e,r){"use strict";var n=r(14);function c(t,e){for(var r in e)a(e,r)&&(t[r]=e[r])}function a(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t){n(t)||(t={});for(var e=arguments.length,r=1;r<e;r++){var a=arguments[r];n(a)&&c(t,a)}return t}},function(t,e,r){"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */t.exports=function(t){return void 0!==t&&null!==t&&("object"==typeof t||"function"==typeof t)}},,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(0),c=r(8),a=r(11),i=r(2),s=r(7);function o(t,e){var r,c,a,i,s,o=e.contributor.title.rendered,l=e.contributor.meta.degree&&e.contributor.meta.graduation_year&&u(t,e);return{c(){r=Object(n.j)("li"),c=Object(n.j)("h2"),a=Object(n.j)("a"),s=Object(n.l)("\n              "),l&&l.c(),this.h()},l(t){r=Object(n.g)(t,"LI",{},!1);var e=Object(n.f)(r);c=Object(n.g)(e,"H2",{},!1);var i=Object(n.f)(c);a=Object(n.g)(i,"A",{rel:!0,href:!0},!1),Object(n.f)(a).forEach(n.p),i.forEach(n.p),s=Object(n.h)(e,"\n              "),l&&l.l(e),e.forEach(n.p),this.h()},h(){a.rel="prefetch",a.href=i="/contributors/"+e.contributor.slug},m(t,e){Object(n.t)(r,t,e),Object(n.b)(c,r),Object(n.b)(a,c),a.innerHTML=o,Object(n.b)(s,r),l&&l.m(r,null)},p(e,n){e.article&&o!==(o=n.contributor.title.rendered)&&(a.innerHTML=o),e.article&&i!==(i="/contributors/"+n.contributor.slug)&&(a.href=i),n.contributor.meta.degree&&n.contributor.meta.graduation_year?l?l.p(e,n):((l=u(t,n)).c(),l.m(r,null)):l&&(l.d(1),l=null)},d(t){t&&Object(n.p)(r),l&&l.d()}}}function u(t,e){var r,c,a,i,s=e.contributor.meta.degree,o=e.contributor.meta.graduation_year;return{c(){r=Object(n.j)("h3"),c=Object(n.l)(s),a=Object(n.l)(", "),i=Object(n.l)(o)},l(t){r=Object(n.g)(t,"H3",{},!1);var e=Object(n.f)(r);c=Object(n.h)(e,s),a=Object(n.h)(e,", "),i=Object(n.h)(e,o),e.forEach(n.p)},m(t,e){Object(n.t)(r,t,e),Object(n.b)(c,r),Object(n.b)(a,r),Object(n.b)(i,r)},p(t,e){t.article&&s!==(s=e.contributor.meta.degree)&&(c.data=s),t.article&&o!==(o=e.contributor.meta.graduation_year)&&(i.data=o)},d(t){t&&Object(n.p)(r)}}}function l(t,e){for(var r,c=e.article.meta.contributors,a=[],i=0;i<c.length;i+=1)a[i]=o(t,b(e,c,i));return{c(){r=Object(n.j)("ul");for(var t=0;t<a.length;t+=1)a[t].c()},l(t){r=Object(n.g)(t,"UL",{},!1);for(var e=Object(n.f)(r),c=0;c<a.length;c+=1)a[c].l(e);e.forEach(n.p)},m(t,e){Object(n.t)(r,t,e);for(var c=0;c<a.length;c+=1)a[c].m(r,null)},p(e,n){if(e.article){c=n.article.meta.contributors;for(var i=0;i<c.length;i+=1){const s=b(n,c,i);a[i]?a[i].p(e,s):(a[i]=o(t,s),a[i].c(),a[i].m(r,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=c.length}},d(t){t&&Object(n.p)(r),Object(n.m)(a,t)}}}function h(t,e){var r,a,i,s,o,u,l,h,d,b=e.article.meta.fold.meta.volume,f=e.article.meta.fold.meta.number,j=e.article.meta.fold.title.rendered,m=Object(c.a)(e.article.meta.fold.meta.publication_date);return{c(){r=Object(n.j)("p"),a=Object(n.l)(b),i=Object(n.l)("-"),s=Object(n.l)(f),o=Object(n.l)("\n        "),u=Object(n.j)("p"),l=Object(n.l)("\n        "),h=Object(n.j)("h5"),d=Object(n.l)(m),this.h()},l(t){r=Object(n.g)(t,"P",{class:!0},!1);var e=Object(n.f)(r);a=Object(n.h)(e,b),i=Object(n.h)(e,"-"),s=Object(n.h)(e,f),e.forEach(n.p),o=Object(n.h)(t,"\n        "),u=Object(n.g)(t,"P",{},!1),Object(n.f)(u).forEach(n.p),l=Object(n.h)(t,"\n        "),h=Object(n.g)(t,"H5",{},!1);var c=Object(n.f)(h);d=Object(n.h)(c,m),c.forEach(n.p),this.h()},h(){r.className="mb0"},m(t,e){Object(n.t)(r,t,e),Object(n.b)(a,r),Object(n.b)(i,r),Object(n.b)(s,r),Object(n.t)(o,t,e),Object(n.t)(u,t,e),u.innerHTML=j,Object(n.t)(l,t,e),Object(n.t)(h,t,e),Object(n.b)(d,h)},p(t,e){t.article&&b!==(b=e.article.meta.fold.meta.volume)&&(a.data=b),t.article&&f!==(f=e.article.meta.fold.meta.number)&&(s.data=f),t.article&&j!==(j=e.article.meta.fold.title.rendered)&&(u.innerHTML=j),t.article&&m!==(m=Object(c.a)(e.article.meta.fold.meta.publication_date))&&(d.data=m)},d(t){t&&(Object(n.p)(r),Object(n.p)(o),Object(n.p)(u),Object(n.p)(l),Object(n.p)(h))}}}function d(t,e){var r,c,a=e.article.meta.contributors&&l(t,e),i=e.article.meta.fold&&h(0,e);return{c(){a&&a.c(),r=Object(n.l)("\n      "),i&&i.c(),c=Object(n.i)()},l(t){a&&a.l(t),r=Object(n.h)(t,"\n      "),i&&i.l(t),c=Object(n.i)()},m(t,e){a&&a.m(t,e),Object(n.t)(r,t,e),i&&i.m(t,e),Object(n.t)(c,t,e)},p(e,n){n.article.meta.contributors?a?a.p(e,n):((a=l(t,n)).c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null),n.article.meta.fold?i?i.p(e,n):((i=h(0,n)).c(),i.m(c.parentNode,c)):i&&(i.d(1),i=null)},d(t){a&&a.d(t),t&&Object(n.p)(r),i&&i.d(t),t&&Object(n.p)(c)}}}function b(t,e,r){const n=Object.create(t);return n.contributor=e[r],n.each_value=e,n.contributor_index=r,n}function f(t){if(Object(n.s)(this,t),this._state=Object(n.c)({},t.data),this._intro=!0,document.getElementById("svelte-cnetnj-style")||function(){var t=Object(n.j)("style");t.id="svelte-cnetnj-style",t.textContent=".content img{display:block;margin-bottom:1rem;width:100%;height:auto}",Object(n.b)(t,document.head)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var r,c,i,o,u,l,h,b=e.article.content.rendered;document.title=r=Object(a.a)(e.article.title.rendered);var f={title:e.article.title.rendered},j=new s.a({root:t.root,store:t.store,data:f}),m=e.article.meta&&d(t,e);return{c(){c=Object(n.l)("\n\n"),j._fragment.c(),i=Object(n.l)("\n"),o=Object(n.j)("div"),u=Object(n.j)("div"),m&&m.c(),l=Object(n.l)("\n  "),h=Object(n.j)("div"),this.h()},l(t){c=Object(n.h)(t,"\n\n"),j._fragment.l(t),i=Object(n.h)(t,"\n"),o=Object(n.g)(t,"DIV",{class:!0},!1);var e=Object(n.f)(o);u=Object(n.g)(e,"DIV",{class:!0},!1);var r=Object(n.f)(u);m&&m.l(r),r.forEach(n.p),l=Object(n.h)(e,"\n  "),h=Object(n.g)(e,"DIV",{class:!0},!1),Object(n.f)(h).forEach(n.p),e.forEach(n.p),this.h()},h(){u.className="c12 sm-c2 p1",h.className="c12 sm-c6 p1 content",o.className="x xafs xw"},m(t,e){Object(n.t)(c,t,e),j._mount(t,e),Object(n.t)(i,t,e),Object(n.t)(o,t,e),Object(n.b)(u,o),m&&m.m(u,null),Object(n.b)(l,o),Object(n.b)(h,o),h.innerHTML=b},p(e,n){e.article&&r!==(r=Object(a.a)(n.article.title.rendered))&&(document.title=r);var c={};e.article&&(c.title=n.article.title.rendered),j._set(c),n.article.meta?m?m.p(e,n):((m=d(t,n)).c(),m.m(u,null)):m&&(m.d(1),m=null),e.article&&b!==(b=n.article.content.rendered)&&(h.innerHTML=b)},d(t){t&&Object(n.p)(c),j.destroy(t),t&&(Object(n.p)(i),Object(n.p)(o)),m&&m.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){Object(i.a)()}).call(this),this.fire("update",{changed:Object(n.d)({},this._state),current:this._state})}),t.target){var e=Object(n.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(n.p),this._mount(t.target,t.anchor),this._lock=!0,Object(n.e)(this._beforecreate),Object(n.e)(this._oncreate),Object(n.e)(this._aftercreate),this._lock=!1}}Object(n.c)(f.prototype,n.v),f.preload=async function({params:t,query:e}){const r=await this.fetch(`articles/${t.slug}.json?fields=title/rendered,content/rendered,meta(contributors(title/rendered,slug,meta(degree,graduation_year)),fold(title/rendered,meta(volume,number,publication_date))`);if(!r.ok){const t=await r.text();return this.error(r.status,t)}return{article:await r.json()}},e.default=f}]]);