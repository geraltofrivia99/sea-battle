(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(n,e,t){"use strict";t.r(e);var r=t(5),i=t(69),a=t(2),o=t.n(a),c=t(13),u=t(22),s=t(45);function l(n,e){var t=Object(s.c)();return Object(a.useMemo)(function(){return Array.isArray(n)?n.map(function(n){return Object(u.bindActionCreators)(n,t)}):Object(u.bindActionCreators)(n,t)},e?[t].concat(Object(c.a)(e)):e)}function p(n){return Object(s.d)(n,s.b)}var d=t(12),f=t(11),b=t(67),m=t(68),x=t(26);function h(){var n=Object(b.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');\n    * {\n        font-family: Mansalva, cursive   \n    }\n"]);return h=function(){return n},n}function g(){var n=Object(b.a)(["\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    flex-grow: 1;\n    justify-content: space-evenly;\n"]);return g=function(){return n},n}function v(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 5% 10%;\n    /* background-image: url(",");\n    background-size: cover;\n    background-repeat: no-repeat; */\n    /* height: 100vh; */\n"]);return v=function(){return n},n}var j=m.c.div(v(),x.d),O=m.c.div(g()),w=Object(m.a)(h());function E(){var n=Object(b.a)(["\n  background-color: #fff;\n  padding: 3px 3px 5px 5px;\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  bottom: 5px;\n  left: 5px;\n  border-radius: 1px 3px 1px 3px;\n  opacity: .9;\n  /* box-shadow: inset 0 0 2px rgba(0,0,0,.6);\n\t\t-moz-box-shadow: inset 0 0 2px rgba(0,0,0,.6);\n\t\t-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6); */\n"]);return E=function(){return n},n}function y(){var n=Object(b.a)(["\n  position: relative;\n  /* border: 1px solid red; */\n  background: linear-gradient(to right, #868f96 , #596164);\n  box-sizing: border-box;\n  /* border-width: 3px 3px 5px 5px; */\n  border-radius:10% 95% 20% 95%/95% 4% 92% 5%;\n  height: 35px;\n  width: ",";\n  opacity: ",";\n  transform: ",";\n  transform-origin: ",";\n"]);return y=function(){return n},n}function k(){var n=Object(b.a)(["\n  position: absolute;\n  top: ",";\n  left: ",";\n"]);return k=function(){return n},n}var S=Object(m.c)("div")(k(),function(n){return n.top},function(n){return n.left}),z=Object(m.c)("div")(y(),function(n){var e=n.decks;return"".concat(33*e,"px")},function(n){return n.isVisible?1:0},function(n){return n.isVertical?"rotate(90deg)":""},function(n){return n.isVertical?"17.5px 17.5px":""}),C=m.c.div(E()),R=o.a.memo(function(n){var e=n.ship,t=n.onContextMenu,r=Object(a.useCallback)(function(n){n.preventDefault(),n.stopPropagation(),t&&t(e)},[e]);return o.a.createElement(S,{left:"".concat(33*e.y0,"px"),top:"".concat(33*e.x0,"px")},o.a.createElement(z,{className:"ship",decks:e.decks,isVertical:!!e.kx,"data-decks":e.decks,"data-shipname":e.shipname,onContextMenu:r,isVisible:e.isVisible},o.a.createElement(C,null)))});function U(){var n=Object(b.a)(['\n  width: 29px;\n  height: 28px;\n  background: \n  /* On "top" */\n  repeating-linear-gradient(\n    -45deg,\n    transparent,\n    transparent 2px,\n    #ccc 2px,\n    #ccc 3px\n  );\n  opacity: .8;\n']);return U=function(){return n},n}function V(){var n=Object(b.a)(["\n  width: 90%;\n  height: 82%;\n  margin: 3px;\n"]);return V=function(){return n},n}function D(){var n=Object(b.a)(["\n  position: relative;\n  width: 30px;\n  height: 30px;\n"]);return D=function(){return n},n}function M(){var n=Object(b.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  border: 1px solid white;\n  box-sizing: border-box;\n  box-shadow: inset 0 0 5px;\n  transition: border-width .3s, box-shadow .3s;\n  animation: "," .2s linear forwards;\n  background-color: black;\n"]);return M=function(){return n},n}function A(){var n=Object(b.a)(["\n  position: relative;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    box-shadow: inset 0 0 5px;\n    border-radius: 100%;\n  }\n"]);return A=function(){return n},n}function X(){var n=Object(b.a)(["\n  width: 33px;\n  height: 33px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: ",";\n  left: ",";\n  box-shadow: ",";\n"]);return X=function(){return n},n}function Y(){var n=Object(b.a)(["\n  0% {\n    border-width: 1px;\n  }\n  100% {\n    box-shadow: none;\n    border-width: 4px;\n  }\n"]);return Y=function(){return n},n}var q=Object(m.d)(Y()),G=Object(m.c)("div")(X(),function(n){var e=n.top;return"".concat(e,"px")},function(n){var e=n.left;return"".concat(e,"px")},function(n){return n.isShaded?"inset 0 0 5px rgba(0,0,0,.95)":""}),B=m.c.div(A()),P=(m.c.span(M(),q),m.c.span(D())),T=m.c.img(V()),_=m.c.span(U()),J=function(n){var e=n.cell,t=e.icon,r=e.coords,i=r.x,a=r.y;return o.a.createElement(G,{top:33*i,left:33*a,isShaded:"shaded"===t},N(t))},N=function(n){switch(n){case"dot":return o.a.createElement(B,null);case"red-cross":return o.a.createElement(P,null," ",o.a.createElement(T,{src:x.g,alt:""})," ");case"shaded":return o.a.createElement(_,null);default:return}},F=t(133),L=t(149);function W(){var n=Object(b.a)(["\n  /* padding: 10px 25px; */\n  padding-left: 35px;\n  height: 3rem;\n  min-width: 5rem;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  transform: ",";\n  opacity: 0;\n  z-index: 1;\n  transition: transform .3s, opacity .2s;\n  ",":hover & {\n    transform: translateX(-25px);\n    opacity: 1;\n  }\n"]);return W=function(){return n},n}function H(){var n=Object(b.a)(['\n  position: relative;\n  border-radius: 100%;\n  border: solid black;\n  border-width: 1px;\n  width: 3.5rem;\n  height: 3.5rem;\n  z-index: 2;\n  box-shadow: inset 0 0 14px;\n  cursor: pointer;\n  &::before {\n    content: "";\n    border-radius: inherit;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbox-shadow: inset 0 0 8px rgba(0,0,0,.6);\n\t\t-moz-box-shadow: inset 0 0 8px rgba(0,0,0,.6);\n\t\t-webkit-box-shadow: inset 0 0 8px rgba(0,0,0,.6);\n  }\n']);return H=function(){return n},n}function I(){var n=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  float: left;\n  border-radius: inherit;\n"]);return I=function(){return n},n}function K(){var n=Object(b.a)(["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: ",";\n"]);return K=function(){return n},n}var Q=Object(F.a)(function(n){return Object(L.a)({avatar:{margin:10},bigAvatar:{margin:10,width:60,height:60},chip:{margin:n.spacing(1)}})}),Z=Object(m.c)("div")(K(),function(n){return n.isUser?"row":"row-reverse"}),$=m.c.img(I()),nn=m.c.div(H()),en=Object(m.c)("div")(W(),function(n){var e=n.width,t=n.isUser;return"translateX(".concat(t?-e:e,"px)")},Z),tn=o.a.memo(function(n){var e=n.img,t=n.lable,r=n.isUser,c=Object(a.useRef)(null),u=Object(a.useState)(0),s=Object(i.a)(u,2),l=s[0],p=s[1];return Object(a.useEffect)(function(){c.current&&p(c.current.getBoundingClientRect().width)},[c.current]),o.a.createElement(Z,{isUser:r},o.a.createElement(nn,null,o.a.createElement($,{src:e,alt:t})),o.a.createElement(en,{ref:c,width:l,isUser:r},t))});function rn(){var n=Object(b.a)(["\n\n"]);return rn=function(){return n},n}function an(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: ",";\n    padding: 0.5rem 1rem;\n"]);return an=function(){return n},n}var on=Object(m.c)("div")(an(),function(n){return n.isUser?"row":"row-reverse"}),cn=(m.c.div(rn()),Object(a.memo)(function(n){var e=n.name,t=n.isUser,r=n.img;return o.a.createElement(on,{isUser:t},o.a.createElement(tn,{img:r,lable:e,isUser:t}))})),un=t(14);function sn(){var n=Object(b.a)(["\n  width: 1px;\n  height: 330px;\n  background-color: #000;\n  opacity: .5;\n  position: absolute;\n  left: ",";\n  top: 0;\n  bottom: 0;\n"]);return sn=function(){return n},n}function ln(){var n=Object(b.a)(["\n  width: 330px;\n  height: 1px;\n  background-color: #000;\n  opacity: .5;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: ",";\n"]);return ln=function(){return n},n}function pn(){var n=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(10, 33px);\n  grid-template-rows: repeat(10, 33px);\n  /* border: 1px solid black; */\n  /* box-sizing: border-box; */\n  position: relative;\n  /* z-index: 1; */\n"]);return pn=function(){return n},n}function dn(){var n=Object(b.a)(["\n  position: relative;\n  background-color: #000;\n  border-spacing: 1px;\n"]);return dn=function(){return n},n}function fn(){var n=Object(b.a)(["\n  width: 30px;\n  height: 30px;\n  /* border: 1px solid black; */\n  background-color: #fff;\n"]);return fn=function(){return n},n}function bn(){var n=Object(b.a)(['\n  position: relative;\n  border-width: 5px 3px 3px 5px;\n  border-radius:95% 4% 97% 5%/4% 94% 3% 95%;\n  border: solid #596164;\n  overflow: hidden;\n  z-index: 10;\n  &::before {\n    content: "";\n    border-radius: inherit;\n\t\tposition: absolute;\n\t\ttop: -3px;\n\t\tbottom: -3px;\n\t\tleft: -3px;\n\t\tright: -3px;\n\t\tbox-shadow: inset 0 0 20px rgba(0,0,0,.95);\n    z-index: 100;\n  }\n']);return bn=function(){return n},n}function mn(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  visibility: ",";\n"]);return mn=function(){return n},n}var xn=Object(m.c)("div")(mn(),function(n){return n.isVisible?"visible":"hidden"}),hn=m.c.div(bn()),gn=(m.c.td(fn()),m.c.table(dn()),m.c.div(pn())),vn=Object(m.c)("div")(ln(),function(n){var e=n.top;return"".concat(e,"px")}),jn=Object(m.c)("div")(sn(),function(n){var e=n.left;return"".concat(e,"px")}),On=[0,33,66,99,132,165,198,231,264,297,330],wn=function(n){return{squadron:n.field.squadron,cells:n.field.cells,opponent:n.init.opponent}},En=o.a.memo(function(n){var e=n.innerRef,t=p(wn),a=t.squadron,c=t.cells,u=t.opponent,s=l([d.e,d.l,d.m,d.k,d.p],[]),f=Object(i.a)(s,5),b=f[0],m=(f[1],f[2],f[3],f[4]),x=function(n){if(n.stopPropagation(),n.preventDefault(),0===n.button){Object(d.l)(!0);var e=n.target,t=Object(un.e)(e),i=t.left,o=t.top,c=n.pageX-i,u=n.pageY-o,s=e.dataset,l=s.decks,p=s.shipname,f={isVisible:!1,shipname:p,decks:l,isDragging:!0},b={left:n.pageX-c,top:n.pageY-u,decks:l,shiftX:c,shiftY:u,isSuccess:!1,kx:0,ky:1,defaultElement:Object(r.a)({downX:n.pageX,downY:n.pageY},f)},x=a.map(function(n){if(n.shipname===p)return Object(r.a)({},n,{isVisible:!1})});m(x),Object(d.m)(b)}};return o.a.createElement(xn,{isVisible:!0},o.a.createElement(cn,{name:"You",isUser:!0,img:un.j[u].img}),o.a.createElement(hn,null,o.a.createElement(gn,{id:"field_user",ref:e},On.map(function(n){return o.a.createElement(vn,{top:n,key:"horizontal-".concat(n)})}),On.map(function(n){return o.a.createElement(jn,{left:n,key:"vertical-".concat(n)})})),a&&!!a.length&&a.map(function(n,e){return o.a.createElement(R,{ship:n,key:n.shipname+e,onContextMenu:b,onShipDown:x})}),function(n){return n.map(function(n,e){return o.a.createElement(J,{cell:n,key:"".concat(n.coords.x,"-").concat(n.coords.y,"-").concat(e)})})}(c)))}),yn=[0,33,66,99,132,165,198,231,264,297,330],kn=function(n){return{squadron:n.enemy.squadron,cells:n.enemy.cells,isGameStarted:n.init.isGameStarted,opponent:n.init.opponent}},Sn=o.a.memo(function(n){var e=n.innerRef,t=p(kn),r=t.squadron,a=t.cells,c=t.isGameStarted,u=t.opponent,s=l([f.m,f.f],[]),d=Object(i.a)(s,2),b=d[0],m=d[1];return o.a.createElement(xn,{isVisible:c},o.a.createElement(cn,{name:un.j[u].name,isUser:!1,img:un.j[u].img}),o.a.createElement(hn,{onClick:function(n){n.persist(),b(n)},onContextMenu:function(n){n.preventDefault(),n.persist(),m(n)}},o.a.createElement(gn,{id:"field_enemy",ref:e},yn.map(function(n){return o.a.createElement(vn,{top:n,key:"horizontal-".concat(n)})}),yn.map(function(n){return o.a.createElement(jn,{left:n,key:"vertical-".concat(n)})})),r&&!!r.length&&r.map(function(n,e){return o.a.createElement(R,{ship:n,key:n.shipname+e})}),function(n){return n.map(function(n,e){return o.a.createElement(J,{cell:n,key:"".concat(n.coords.x,"-").concat(n.coords.y,"-").concat(e)})})}(a)))}),zn=t(23),Cn=t(148),Rn=t(145),Un=t(138),Vn=t(136),Dn=o.a.memo(function(n){var e=n.img,t=Q();return o.a.createElement(Vn.a,{alt:"Remy Sharp",src:e,className:t.avatar})});function Mn(){var n=Object(b.a)(["\n    animation: ",";\n    animation-duration: 1s;\n"]);return Mn=function(){return n},n}function An(){var n=Object(b.a)(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]);return An=function(){return n},n}function Xn(){var n=Object(b.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);return Xn=function(){return n},n}var Yn=Object(m.d)(Xn()),qn=Object(m.d)(An()),Gn=Object(m.c)("div")(Mn(),function(n){return n.show?Yn:qn}),Bn=function(n){var e=n.show,t=n.children,r=Object(a.useState)(e),c=Object(i.a)(r,2),u=c[0],s=c[1];Object(a.useEffect)(function(){e&&s(!0)},[e]);return u?o.a.createElement(Gn,{show:e,onAnimationEnd:function(){e||s(!1)}},t):null},Pn=t(65),Tn=t(142);function _n(){var n=Object(b.a)(["\n  position: absolute;\n  right: 2rem;\n  bottom: 2rem;\n"]);return _n=function(){return n},n}var Jn=m.c.div(_n()),Nn=Object(Pn.a)({root:{minWidth:100,border:0,color:"white",padding:"3px 26px 3px 6px","&:focus":{backgroundColor:"transparent",borderRadius:"3px"}}})(Tn.a),Fn=function(n){return{opponent:n.init.opponent,isGameStarted:n.init.isGameStarted}},Ln=Object(a.memo)(function(){var n=p(Fn),e=n.opponent,t=n.isGameStarted,r=l([zn.b],[]),a=Object(i.a)(r,1)[0];return o.a.createElement(Jn,null,o.a.createElement(Bn,{show:!t},o.a.createElement(Un.a,null,o.a.createElement(Cn.a,{htmlFor:"age-simple"},un.j[e].name),o.a.createElement(Nn,{value:e,onChange:function(n){a(n.target.value)},disabled:t,renderValue:function(n){return o.a.createElement(Dn,{img:un.j[n].img})},inputProps:{name:"age",id:"age-simple"}},un.j.map(function(n,e){var t=n.img,r=n.name;return o.a.createElement(Rn.a,{value:e,key:r+e},o.a.createElement(Dn,{img:t}),r)})))))});function Wn(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Wn=function(){return n},n}function Hn(){var n=Object(b.a)(["\n  font-family: Mansalva, cursive;\n  font-size: 1em;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* margin: 1em 3em; */\n  padding: 0.2em .5em;\n  border-radius: 10px;\n  cursor: pointer;\n  border: solid black;\n  border-width: 3px 4px 3px 5px;\n  border-radius: 89% 4% 89% 5%/34% 95% 34% 95%;\n  box-shadow: -1px 2px 3px;\n  transform: rotate(2deg);\n  &:hover {\n    color: blue;\n  }\n"]);return Hn=function(){return n},n}function In(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]);return In=function(){return n},n}var Kn=m.c.div(In()),Qn=m.c.div(Hn()),Zn=m.c.div(Wn()),$n=function(n){return{isShipsOnBoard:n.init.isShipsOnBoard}},ne=o.a.memo(function(){var n=p($n).isShipsOnBoard,e=l([d.o,d.f,d.i,f.c,zn.d],[]),t=Object(i.a)(e,5),r=t[0],a=(t[1],t[2],t[3],t[4]);return o.a.createElement(Kn,null,o.a.createElement(Zn,null,!n&&o.a.createElement(Qn,{onClick:r},"Arrange ships"),n&&o.a.createElement(Qn,{onClick:a},"Start")),o.a.createElement(Ln,null))});function ee(){var n=Object(b.a)(["\n  position: absolute;\n  top: ",";\n  left: ",";\n  border: ",";\n  box-sizing: border-box;\n  border-radius: 5px;\n  height: 35px;\n  width: ",";\n  opacity: 0.8;\n  z-index: 1000;\n"]);return ee=function(){return n},n}var te=Object(m.c)("div")(ee(),function(n){var e=n.top;return"".concat(e,"px")},function(n){var e=n.left;return"".concat(e,"px")},function(n){return n.isSuccess?"1px solid green":"1px solid red"},function(n){var e=n.decks;return"".concat(33*e,"px")}),re=function(n){var e=n.decks,t=n.top,r=n.left,i=n.innerRef,a=n.isSuccess;return o.a.createElement(te,{top:t,left:r,decks:e,ref:i,id:"fake_ship",isSuccess:a})};function ie(){var n=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  color: red;\n  min-height: 30px;\n"]);return ie=function(){return n},n}var ae=m.c.div(ie()),oe=function(n){return{opponent:n.init.opponent,footerText:n.init.footerText}},ce=Object(a.memo)(function(){var n=p(oe),e=n.footerText,t=e.isUser,r=e.messages,i=n.opponent;return r?o.a.createElement(ae,null,o.a.createElement("strong",null,t?"You":un.j[i].name),"\xa0",o.a.createElement("span",null,r)):o.a.createElement(ae,null)}),ue=function(n){return{fakeShip:n.field.fakeShip,isDragging:n.field.isDragging}};e.default=function(){var n=l([d.h,d.m,f.e],[]),e=Object(i.a)(n,3),t=e[0],c=e[1],u=e[2],s=p(ue),b=s.fakeShip,m=s.isDragging,x=Object(a.useRef)(null),h=Object(a.useRef)(null),g=Object(a.useRef)(null);return Object(a.useLayoutEffect)(function(){t(h.current),u(g.current)},[]),Object(a.useEffect)(function(){c(Object(r.a)({},b,{ref:x.current}))},[x.current]),o.a.createElement(j,null,o.a.createElement(w,null),o.a.createElement(ne,null),o.a.createElement(O,null,o.a.createElement(En,{innerRef:h}),o.a.createElement(Sn,{innerRef:g})),o.a.createElement(ce,null),m&&b&&o.a.createElement(re,{top:b.top,left:b.left,decks:b.decks,innerRef:x,isSuccess:b.isSuccess}))}}}]);
//# sourceMappingURL=10.3ccfaa2f.chunk.js.map