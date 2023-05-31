"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[33],{33:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var i,r,o,s,a,c,l,h,d=t(861),x=t(439),p=t(757),m=t.n(p),u=t(689),f=t(791),g=t(214),j=t(135),v=t(168),Z=t(444),b=t(87),w=Z.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  margin-top: 5px;\n  padding-bottom: 100px;\n"]))),I=Z.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),_=(0,Z.ZP)(b.rU)(o||(o=(0,v.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.03em;\n  text-decoration: none;\n  color: #212121;\n\n  &:hover {\n    color: #ff4500;\n  }\n"]))),y=Z.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n\n  ","\n  margin-bottom: 20px;\n\n  > img {\n    margin-right: 40px;\n  }\n"])),""),z=Z.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  max-width: 600px;\n\n  > h1 {\n    font-size: 26px;\n    letter-spacing: 0.03em;\n\n    margin-bottom: 10px;\n  }\n\n  > h2 {\n    font-size: 20px;\n    font-weight: 600;\n    letter-spacing: 0.03em;\n\n    margin-bottom: 10px;\n  }\n\n  > h3 {\n    font-size: 18px;\n    font-weight: 600;\n    letter-spacing: 0.03em;\n\n    margin-bottom: 10px;\n  }\n\n  > p {\n    font-size: 16px;\n    letter-spacing: 0.03em;\n    line-height: 1.25;\n    margin-bottom: 15px;\n  }\n\n  > ul {\n    display: flex;\n    list-style: none;\n  }\n\n  li:not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),J=Z.ZP.h4(c||(c=(0,v.Z)(["\n  margin-bottom: 20px;\n"]))),U=Z.ZP.ul(l||(l=(0,v.Z)(["\n  border-bottom: 2px solid #d3d3d3;\n  padding-bottom: 7px;\n  margin-left: 16px;\n  margin-bottom: 20px;\n\n  > li:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),k=(0,Z.ZP)(b.rU)(h||(h=(0,v.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.03em;\n  color: #212121;\n\n  &:hover {\n    color: #ff4500;\n  }\n"]))),M=t(599),S=t(184),Y=function(){var n,e,t=(0,f.useState)(""),i=(0,x.Z)(t,2),r=i[0],o=i[1],s=(0,f.useState)([]),a=(0,x.Z)(s,2),c=a[0],l=a[1],h=(0,f.useState)(""),p=(0,x.Z)(h,2),v=p[0],Z=p[1],b=(0,f.useState)(0),Y=(0,x.Z)(b,2),G=Y[0],P=Y[1],N=(0,f.useState)(""),D=(0,x.Z)(N,2),O=D[0],R=D[1],T=(0,u.TH)(),W=(0,f.useRef)(null!==(n=null===(e=T.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),C=(0,u.UO)().movieId;return(0,f.useEffect)((function(){function n(){return(n=(0,d.Z)(m().mark((function n(){var e,t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(M._,"/movie/").concat(C,"?language=en-US"),M.Y);case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})().then((function(n){o("https://image.tmdb.org/t/p/w500/".concat(n.poster_path)),l(n.genres),Z(n.title),P((10*n.vote_average).toFixed(0)),R(n.overview)})).catch((function(n){return console.error(n)}))}),[C]),(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(w,{children:[(0,S.jsxs)(I,{children:[(0,S.jsx)(j.x_l,{style:{width:9,marginRight:5,marginTop:3}}),(0,S.jsx)(_,{to:W.current,children:"Go back"})]}),(0,S.jsxs)(y,{children:[(0,S.jsx)("img",{src:r,width:"300",alt:v}),(0,S.jsxs)(z,{children:[(0,S.jsx)("h1",{children:v}),(0,S.jsxs)("p",{children:["User score: ",G,"%"]}),(0,S.jsx)("h2",{children:"Overview"}),(0,S.jsx)("p",{children:O}),(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)("ul",{children:c.map((function(n){var e=n.id,t=n.name;return(0,S.jsx)("li",{children:t},e)}))})]})]}),(0,S.jsx)(J,{children:"Additional information:"}),(0,S.jsxs)(U,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(k,{to:"cast",children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(k,{to:"reviews",children:"Reviews"})})]}),(0,S.jsx)(f.Suspense,{fallback:(0,S.jsx)(g.a,{}),children:(0,S.jsx)(u.j3,{})})]})})}},599:function(n,e,t){t.d(e,{Y:function(){return i},_:function(){return r}});var i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI"}},r="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=33.f450661a.chunk.js.map