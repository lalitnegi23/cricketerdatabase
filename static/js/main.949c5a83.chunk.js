(this.webpackJsonpreduxtoolkitprac=this.webpackJsonpreduxtoolkitprac||[]).push([[0],{13:function(n,e,t){n.exports={outerContainer:"ListItem_outerContainer__3bMiK",container:"ListItem_container__3XFH_",container2:"ListItem_container2__2xO8M",batbowl:"ListItem_batbowl__3YBnX",card:"ListItem_card__2fVYd"}},18:function(n,e,t){n.exports={layout:"Cric_layout__1ZcNL",searched:"Cric_searched__1bW6e",searchIcon:"Cric_searchIcon__cd22x",icon:"Cric_icon__n58HM"}},52:function(n,e,t){},53:function(n,e,t){},92:function(n,e,t){"use strict";t.r(e);var i=t(0),l=t.n(i),s=t(14),c=t.n(s),a=(t(52),t(53),t(11)),o=t.n(a),d=t(20),r=t(12),u=t(21),v=t.n(u),j=t(27),h=t.n(j),b=t(111),O=t(108),x=t(13),p=t.n(x),g=t(2);h.a.setAppElement("#root");var m=function(n){var e,t,l,s,c,a,u,j,x,m,I,f,_,w,k,y,M,N,C,B,D,T,W,L,R,S,P,E,J,X,U,V,F,H,Q,Y,q,z,A,K,Z,$,G,nn,en,tn,ln,sn,cn,an,on,dn,rn,un,vn=Object(i.useState)({}),jn=Object(r.a)(vn,2),hn=jn[0],bn=jn[1],On=Object(i.useState)(!1),xn=Object(r.a)(On,2),pn=xn[0],gn=xn[1];function mn(){return(mn=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://cricapi.com/api/playerStats?apikey=vv3PJNB3QmhB0VuU1En7mBXo0183&pid=".concat(n.item.pid));case 3:t=e.sent,bn(t.data),gn(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("no such player exists");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(g.jsxs)("div",{children:[Object(g.jsx)(b.a,{onClick:function(){return mn.apply(this,arguments)},className:p.a.card,children:Object(g.jsx)(O.a,{variant:"h6",children:n.item.fullName})}),Object(g.jsxs)(h.a,{isOpen:pn,onRequestClose:function(){gn(!1)},contentLabel:"Player Data",children:[Object(g.jsx)("h2",{children:null===hn||void 0===hn?void 0:hn.fullName}),Object(g.jsx)("img",{src:hn.imageURL}),Object(g.jsxs)("div",{className:p.a.batbowl,children:[Object(g.jsx)("h3",{children:"Batting"}),Object(g.jsx)("h3",{children:"Bowling"})]}),Object(g.jsxs)("div",{className:p.a.outerContainer,children:[Object(g.jsxs)("div",{className:p.a.container,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"ODIs"}),Object(g.jsxs)("h3",{children:["Matches - ",null===hn||void 0===hn||null===(e=hn.data)||void 0===e||null===(t=e.batting)||void 0===t||null===(l=t.ODIs)||void 0===l?void 0:l.Mat]}),Object(g.jsxs)("h3",{children:["Innings - ",null===hn||void 0===hn||null===(s=hn.data)||void 0===s||null===(c=s.batting)||void 0===c||null===(a=c.ODIs)||void 0===a?void 0:a.Inns]}),Object(g.jsxs)("h3",{children:["Runs - ",null===hn||void 0===hn||null===(u=hn.data)||void 0===u||null===(j=u.batting)||void 0===j||null===(x=j.ODIs)||void 0===x?void 0:x.Runs]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"T20Is"}),Object(g.jsxs)("h3",{children:["Matches - ",null===hn||void 0===hn||null===(m=hn.data)||void 0===m||null===(I=m.batting)||void 0===I||null===(f=I.T20Is)||void 0===f?void 0:f.Mat]}),Object(g.jsxs)("h3",{children:["Innings - ",null===hn||void 0===hn||null===(_=hn.data)||void 0===_||null===(w=_.batting)||void 0===w||null===(k=w.T20Is)||void 0===k?void 0:k.Inns]}),Object(g.jsxs)("h3",{children:["Runs - ",null===hn||void 0===hn||null===(y=hn.data)||void 0===y||null===(M=y.batting)||void 0===M||null===(N=M.T20Is)||void 0===N?void 0:N.Runs]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Tests"}),Object(g.jsxs)("h3",{children:["Matches - ",null===hn||void 0===hn||null===(C=hn.data)||void 0===C||null===(B=C.batting)||void 0===B||null===(D=B.tests)||void 0===D?void 0:D.Mat]}),Object(g.jsxs)("h3",{children:["Innings - ",null===hn||void 0===hn||null===(T=hn.data)||void 0===T||null===(W=T.batting)||void 0===W||null===(L=W.tests)||void 0===L?void 0:L.Inns]}),Object(g.jsxs)("h3",{children:["Runs - ",null===hn||void 0===hn||null===(R=hn.data)||void 0===R||null===(S=R.batting)||void 0===S||null===(P=S.tests)||void 0===P?void 0:P.Runs]})]})]}),Object(g.jsxs)("div",{className:p.a.container2,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"ODIs"}),Object(g.jsxs)("h3",{children:["Matches - ",null===hn||void 0===hn||null===(E=hn.data)||void 0===E||null===(J=E.bowling)||void 0===J||null===(X=J.ODIs)||void 0===X?void 0:X.Mat]}),Object(g.jsxs)("h3",{children:["Innings - ",null===hn||void 0===hn||null===(U=hn.data)||void 0===U||null===(V=U.bowling)||void 0===V||null===(F=V.ODIs)||void 0===F?void 0:F.Inns]}),Object(g.jsxs)("h3",{children:["Wickets - ",null===hn||void 0===hn||null===(H=hn.data)||void 0===H||null===(Q=H.bowling)||void 0===Q||null===(Y=Q.ODIs)||void 0===Y?void 0:Y.Wkts]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"T20Is"}),Object(g.jsxs)("h3",{children:["Matches - ",null===hn||void 0===hn||null===(q=hn.data)||void 0===q||null===(z=q.bowling)||void 0===z||null===(A=z.T20Is)||void 0===A?void 0:A.Mat]}),Object(g.jsxs)("h3",{children:["Innings - ",null===hn||void 0===hn||null===(K=hn.data)||void 0===K||null===(Z=K.bowling)||void 0===Z||null===($=Z.T20Is)||void 0===$?void 0:$.Inns]}),Object(g.jsxs)("h3",{children:["Wickets - ",null===hn||void 0===hn||null===(G=hn.data)||void 0===G||null===(nn=G.bowling)||void 0===nn||null===(en=nn.T20Is)||void 0===en?void 0:en.Wkts]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Tests"}),Object(g.jsxs)("h3",{children:["Matches - ",null===hn||void 0===hn||null===(tn=hn.data)||void 0===tn||null===(ln=tn.bowling)||void 0===ln||null===(sn=ln.tests)||void 0===sn?void 0:sn.Mat]}),Object(g.jsxs)("h3",{children:["Innings - ",null===hn||void 0===hn||null===(cn=hn.data)||void 0===cn||null===(an=cn.bowling)||void 0===an||null===(on=an.tests)||void 0===on?void 0:on.Inns]}),Object(g.jsxs)("h3",{children:["Wickets - ",null===hn||void 0===hn||null===(dn=hn.data)||void 0===dn||null===(rn=dn.bowling)||void 0===rn||null===(un=rn.tests)||void 0===un?void 0:un.Wkts]})]})]})]})]})]})},I=t(110),f=t(109),_=t(18),w=t.n(_),k=t(45),y=t.n(k),M=function(){var n=Object(i.useState)(""),e=Object(r.a)(n,2),t=e[0],l=e[1],s=Object(i.useState)([]),c=Object(r.a)(s,2),a=c[0],u=c[1];function j(){return(j=Object(d.a)(o.a.mark((function n(){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.get("https://cricapi.com/api/playerFinder?apikey=vv3PJNB3QmhB0VuU1En7mBXo0183&name=".concat(t));case 3:e=n.sent,u(e.data.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("no such player exists");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}return Object(g.jsxs)("div",{className:w.a.layout,children:[Object(g.jsx)(O.a,{variant:"h4",align:"center",children:"Cricket Player's Database"}),Object(g.jsx)(I.a,{type:"text",value:t,onChange:function(n){return l(n.target.value)},placeholder:"Search for Player...",fullWidth:!0}),Object(g.jsx)("div",{className:w.a.searchIcon,children:Object(g.jsx)(y.a,{onClick:function(){return j.apply(this,arguments)},className:w.a.icon,fontSize:"large"})}),Object(g.jsx)("div",{className:w.a.searched,children:Object(g.jsx)(f.a,{container:!0,spacing:3,children:a.map((function(n){return Object(g.jsx)(f.a,{xs:12,sm:6,md:6,children:Object(g.jsx)(m,{item:n})},n.pid)}))})})]})};var N=function(){return Object(g.jsx)(M,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[92,1,2]]]);
//# sourceMappingURL=main.949c5a83.chunk.js.map