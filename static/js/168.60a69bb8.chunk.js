"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(885),c=n(320),a=n(791),i=n(689),o=n(643),u="Reviews_reviewsList__hDAQA",s="Reviews_reviewItem__ax7Fo",p="Reviews_loader__S6erf",f=n(184),h=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],h=t[1],l=(0,a.useState)(!1),v=(0,r.Z)(l,2),d=v[0],m=v[1],w=(0,i.UO)().movieId;return(0,a.useEffect)((function(){m(!0),(0,c.mo)(Number(w)).then((function(e){h(e.results),m(!1)})).finally((function(){setTimeout((function(){window.scrollBy({top:280,behavior:"smooth"})}),100)}))}),[w]),d?(0,f.jsx)("div",{className:p,children:(0,f.jsx)(o.g4,{height:"80",width:"80",radius:"9",color:"#ccc",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}):(0,f.jsx)("ul",{className:u,children:0!==n.length?n.map((function(e){return(0,f.jsxs)("li",{className:s,children:[(0,f.jsx)("h2",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)})):(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})})}},320:function(e,t,n){n.d(t,{LI:function(){return d},VQ:function(){return s},l2:function(){return o},mo:function(){return l},s_:function(){return f}});var r=n(861),c=n(757),a=n.n(c),i="abf5df7d75a67bd02b3b1e4ead1fc14d";function o(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i,"&page=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t,"&page=").concat(n));case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},861:function(e,t,n){function r(e,t,n,r,c,a,i){try{var o=e[a](i),u=o.value}catch(s){return void n(s)}o.done?t(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var i=e.apply(t,n);function o(e){r(i,c,a,o,u,"next",e)}function u(e){r(i,c,a,o,u,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=168.60a69bb8.chunk.js.map