"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{134:function(e,t,n){n.r(t);var r=n(861),i=n(439),u=n(757),a=n.n(u),c=n(791),o=n(87),s=n(689),l=n(402),h=n(184),f={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI"}};t.default=function(){var e,t=(0,c.useState)(null),n=(0,i.Z)(t,2),u=n[0],d=n[1],v=(0,o.lr)({}),p=(0,i.Z)(v,2),j=p[0],m=p[1],x=(0,c.useState)(!1),y=(0,i.Z)(x,2),I=y[0],Z=y[1],g=(0,s.TH)(),J=(0,c.useState)(""),_=(0,i.Z)(J,2),b=_[0],k=_[1],w=null!==(e=j.get("query"))&&void 0!==e?e:"";(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?".concat(b,"&include_adult=false&language=en-US&page=1"),f);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}""!==b&&(d(null),Z(!0),function(){return e.apply(this,arguments)}().then((function(e){var t=e.results;d(t)})).catch((function(e){return console.error(e)})).finally(Z(!1)))}),[b]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;k("query=".concat(t.elements.searchQuery.value)),t.reset()},children:[(0,h.jsx)("input",{type:"text",name:"searchQuery",value:w,onChange:function(e){var t=e.target.value;m(""===t?{}:{query:t})}}),(0,h.jsx)("button",{type:"submit",children:"Search"})]}),I&&(0,h.jsx)("div",{children:(0,h.jsx)(l.s5,{strokeColor:"#FF0000",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})}),(0,h.jsx)("ul",{children:u&&u.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"".concat(e.id),state:{from:g},children:e.title?e.title:e.name})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,i,u,a){try{var c=e[u](a),o=c.value}catch(s){return void n(s)}c.done?t(o):Promise.resolve(o).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,u){var a=e.apply(t,n);function c(e){r(a,i,u,c,o,"next",e)}function o(e){r(a,i,u,c,o,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=134.334015dc.chunk.js.map