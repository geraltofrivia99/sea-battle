(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(69),l=n(33),c=a.a.memo(function(e){var t=e.onHandleClick,n=e.data,i=e.current,c=Object(r.useRef)(null),o=n.src,s=n.button,u=n.headline,d=n.index,f="slide",h=Object(r.useCallback)(function(e){var t=c.current,n=t.getBoundingClientRect();t.style.setProperty("--x",e.clientX-(n.left+Math.floor(n.width/2))),t.style.setProperty("--y",e.clientY-(n.top+Math.floor(n.height/2)))},[]),m=Object(r.useCallback)(function(){c.current.style.setProperty("--x",0),c.current.style.setProperty("--y",0)},[]);return i===d?f+=" slide--current":i-1===d?f+=" slide--previous":i+1===d&&(f+=" slide--next"),a.a.createElement("li",{ref:c,className:f,onClick:function(){t(d)},onMouseMove:h,onMouseLeave:m},a.a.createElement("div",{className:"slide__image-wrapper"},a.a.createElement("img",{className:"slide__image",alt:u,src:o,onLoad:function(e){e.target.style.opacity=1}})),a.a.createElement("article",{className:"slide__content"},a.a.createElement("h2",{className:"slide__headline"},u),a.a.createElement(l.b,{to:function(){switch(n.index){case 0:return"/sea-battle";case 1:return"/gol";default:return"/"}}(),className:"slide__action btn"},s)))}),o=(n(99),a.a.memo(function(e){var t=e.slides,n=e.heading,l=Object(r.useState)(0),o=Object(i.a)(l,2),s=o[0],u=o[1],d=function(e){s!==e&&u(e)},f="slider-heading__".concat(n.replace(/\s+/g,"-").toLowerCase()),h={transform:"translateX(-".concat(s*(100/t.length),"%)")};return a.a.createElement("div",{className:"slider","aria-labelledby":f},a.a.createElement("ul",{className:"slider__wrapper",style:h},a.a.createElement("h3",{id:f,className:"visuallyhidden"},n),t.map(function(e){return a.a.createElement(c,{key:e.index,data:e,current:s,onHandleClick:d})})))})),s=n(26),u=n(67),d=n(68);function f(){var e=Object(u.a)(["\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  & img {\n    width: 40px;\n    height: 40px;\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]);return h=function(){return e},e}function m(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return m=function(){return e},e}function g(){var e=Object(u.a)(["\n  --title-font-size: 64px;\n  --title-line-height: 1.25;\n  position: relative;\n  flex: 2;\n  width: 100%;\n  color: white;\n  font-size: 50px;\n  z-index: 10;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  font-size: var(--title-font-size);\n  font-weight: 900;\n  -webkit-text-stroke: 1px white;\n  -webkit-text-fill-color: transparent;\n  text-indent: 1rem;\n  white-space: nowrap;\n  line-height: var(--title-line-height);\n"]);return g=function(){return e},e}function b(){var e=Object(u.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background: rgb(2,0,36);\n  background: linear-gradient(180deg,rgba(44, 65, 85,0) 0%,rgba(44, 65, 85,0.7) 33%,rgba(44, 65, 85,1) 100%);\n  z-index: 10;\n"]);return b=function(){return e},e}function p(){var e=Object(u.a)(["\n  height: 100vh;\n  overflow: hidden;\n  background-color: #303f9f;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]);return p=function(){return e},e}var y=d.c.div(p()),v=d.c.div(b()),x=d.c.div(g()),w=d.c.div(m()),E=d.c.img(h()),j=d.c.a(f()),k=[{index:0,headline:"Sea Battle",button:"Play",src:s.e},{index:1,headline:"Conway GOL",button:"Play",src:s.a}];t.default=function(){return a.a.createElement(y,null,a.a.createElement(w,null,a.a.createElement(E,{src:s.f})),a.a.createElement(x,null,a.a.createElement(j,{href:"https://github.com/geraltofrivia99/sea-battle"},a.a.createElement("img",{src:s.b,alt:"github"})),"Mini Games Library"),a.a.createElement(v,null,a.a.createElement(o,{heading:"Example Slider",slides:k})))}},69:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})},99:function(e,t,n){}}]);
//# sourceMappingURL=5.da925e8a.chunk.js.map