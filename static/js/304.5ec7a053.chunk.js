"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{304:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,i,o=e(861),c=e(439),u=e(757),a=e.n(u),s=e(791),f=e(689),h=e(87),l=e(168),d=e(444),p=d.ZP.ul(r||(r=(0,l.Z)(["\n  padding: 0 16px;\n\n  > li {\n    font-size: 14px;\n    font-weight: 500;\n    letter-spacing: 0.03em;\n  }\n\n  > li:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),m=d.ZP.h1(i||(i=(0,l.Z)(["\n  font-size: 26px;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n\n  margin-bottom: 20px;\n"]))),v=e(599),x=e(184),g=function(){var n=(0,f.TH)(),t=(0,s.useState)([]),e=(0,c.Z)(t,2),r=e[0],i=e[1];return(0,s.useEffect)((function(){function n(){return(n=(0,o.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(v._,"/trending/all/day?language=en-US"),v.Y);case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})().then((function(n){var t=n.results;i(t)})).catch((function(n){return console.error(n)}))}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{children:"Trending today"}),(0,x.jsx)(p,{children:r.map((function(t){return(0,x.jsx)("li",{children:(0,x.jsx)(h.rU,{to:"movies/".concat(t.id),state:{from:n},children:t.title?t.title:t.name})},t.id)}))})]})}},599:function(n,t,e){e.d(t,{Y:function(){return r},_:function(){return i}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI"}},i="https://api.themoviedb.org/3"},861:function(n,t,e){function r(n,t,e,r,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var c=n.apply(t,e);function u(n){r(c,i,o,u,a,"next",n)}function a(n){r(c,i,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=304.5ec7a053.chunk.js.map