"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{415:function(n,t,e){e.r(t);var r=e(861),i=e(439),c=e(757),o=e.n(c),u=e(791),a=e(689),s=e(87),h=e(184),f={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI"}};t.default=function(){var n=(0,a.TH)(),t=(0,u.useState)([]),e=(0,i.Z)(t,2),c=e[0],l=e[1];return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",f);case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})().then((function(n){var t=n.results;l(t)})).catch((function(n){return console.error(n)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{children:"Trending today"}),(0,h.jsx)("ul",{children:c.map((function(t){return(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"movies/".concat(t.id),state:{from:n},children:t.title?t.title:t.name})},t.id)}))})]})}},861:function(n,t,e){function r(n,t,e,r,i,c,o){try{var u=n[c](o),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,c){var o=n.apply(t,e);function u(n){r(o,i,c,u,a,"next",n)}function a(n){r(o,i,c,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=415.6e1df9db.chunk.js.map