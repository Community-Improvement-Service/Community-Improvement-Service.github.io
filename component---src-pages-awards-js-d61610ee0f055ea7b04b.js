/*! For license information please see component---src-pages-awards-js-d61610ee0f055ea7b04b.js.LICENSE.txt */
(self.webpackChunkcommunity_improvement_service=self.webpackChunkcommunity_improvement_service||[]).push([[350],{9970:function(n,t,e){!function(n,t){function e(){return(e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var r="Left",a="Right",i="Up",o="Down",c={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},l="mousemove",f="mouseup",u="touchend",m="touchmove",d="touchstart";function p(n,t,e,c){return n>t?e>0?a:r:c>0?o:i}function h(n,t){if(0===t)return n;var e=Math.PI/180*t;return[n[0]*Math.cos(e)+n[1]*Math.sin(e),n[1]*Math.cos(e)-n[0]*Math.sin(e)]}function g(n,t){var r=function(t){t&&"touches"in t&&t.touches.length>1||n((function(n,r){r.trackMouse&&(document.addEventListener(l,a),document.addEventListener(f,c));var i="touches"in t?t.touches[0]:t,o=h([i.clientX,i.clientY],r.rotationAngle);return e({},n,s,{initial:[].concat(o),xy:o,start:t.timeStamp||0})}))},a=function(t){n((function(n,r){if("touches"in t&&t.touches.length>1)return n;var a="touches"in t?t.touches[0]:t,i=h([a.clientX,a.clientY],r.rotationAngle),o=i[0],c=i[1],s=o-n.xy[0],l=c-n.xy[1],f=Math.abs(s),u=Math.abs(l),m=(t.timeStamp||0)-n.start,d=Math.sqrt(f*f+u*u)/(m||1),g=[s/(m||1),l/(m||1)];if(f<r.delta&&u<r.delta&&!n.swiping)return n;var v=p(f,u,s,l),y={absX:f,absY:u,deltaX:s,deltaY:l,dir:v,event:t,first:n.first,initial:n.initial,velocity:d,vxvy:g};y.first&&r.onSwipeStart&&r.onSwipeStart(y),r.onSwiping&&r.onSwiping(y);var b=!1;return(r.onSwiping||r.onSwiped||"onSwiped"+v in r)&&(b=!0),b&&r.preventDefaultTouchmoveEvent&&r.trackTouch&&t.cancelable&&t.preventDefault(),e({},n,{first:!1,eventData:y,swiping:!0})}))},i=function(t){n((function(n,r){var a;if(n.swiping&&n.eventData){a=e({},n.eventData,{event:t}),r.onSwiped&&r.onSwiped(a);var i="onSwiped"+a.dir;i in r&&r[i](a)}else r.onTap&&r.onTap({event:t});return e({},n,s,{eventData:a})}))},o=function(){document.removeEventListener(l,a),document.removeEventListener(f,c)},c=function(n){o(),i(n)},g=function(n,t){var e=function(){};if(n&&n.addEventListener){var o=[[d,r],[m,a],[u,i]];o.forEach((function(e){var r=e[0],a=e[1];return n.addEventListener(r,a,{passive:t})})),e=function(){return o.forEach((function(t){var e=t[0],r=t[1];return n.removeEventListener(e,r)}))}}return e},v={ref:function(t){null!==t&&n((function(n,r){if(n.el===t)return n;var a={};return n.el&&n.el!==t&&n.cleanUpTouch&&(n.cleanUpTouch(),a.cleanUpTouch=void 0),r.trackTouch&&t&&(a.cleanUpTouch=g(t,!r.preventDefaultTouchmoveEvent)),e({},n,{el:t},a)}))}};return t.trackMouse&&(v.onMouseDown=r),[v,g]}function v(n,t,r){var a={};return!t.trackTouch&&n.cleanUpTouch?(n.cleanUpTouch(),a.cleanUpTouch=void 0):t.trackTouch&&!n.cleanUpTouch&&n.el&&(a.cleanUpTouch=r(n.el,!t.preventDefaultTouchmoveEvent)),e({},n,a)}function y(n){var r=n.trackMouse,a=t.useRef(e({},s)),i=t.useRef(e({},c));i.current=e({},c,n);var o=t.useMemo((function(){return g((function(n){return a.current=n(a.current,i.current)}),{trackMouse:r})}),[r]),l=o[0],f=o[1];return a.current=v(a.current,i.current,f),l}n.DOWN=o,n.LEFT=r,n.RIGHT=a,n.UP=i,n.useSwipeable=y}(t,e(7294))},4021:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var r=e(7294),a=e(5444),i=e(6802),o=["src"],c=function(n){var t=n.src,e=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,o),c=(0,a.useStaticQuery)("764167751"),s=(0,r.useMemo)((function(){return c.images.edges.find((function(n){var e=n.node;return t===e.relativePath}))}),[c,t]);if(!s)return null;var l=s.node,f=(l=void 0===l?{}:l).childImageSharp,u=l.publicURL;return"svg"!==l.extension&&f?r.createElement(i.G,Object.assign({image:f.gatsbyImageData},e)):r.createElement("img",Object.assign({src:u},e,{alt:u}))}},5561:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return tt}});var r=e(7294),a=e(6862),i=e(3751),o=JSON.parse('{"$":[{"name":"Kenny-Alley-Planting-and-Painting-Day.jpg"},{"name":"Kaiser-Permanente-SF-Half-Marathon.jpg"},{"name":"Healthy-Kids-Day.jpg"},{"name":"Walk-for-Literacy.jpg"},{"name":"RDNC-Food-Pantry.jpg"},{"name":"Freshman-Leadership-Institute-2016.docx.jpg"},{"name":"Easter-Party.jpg"},{"name":"Christmas-Party.jpg"},{"name":"2109-Lunar-new-year-party.jpg"},{"name":"2019-Chinese-New-Year-party.jpg"}],"X":[{"name":"BOS_edited.jpg"},{"name":"Assembly-Member.png"},{"name":"CIS-pic-edit.jpg"}]}'),c=e(4021);function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){f(n,t,e[t])}))}return n}function m(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(){},p={},h={},g={mark:d,measure:d};try{"undefined"!=typeof window&&(p=window),"undefined"!=typeof document&&(h=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(g=performance)}catch(et){}var v=(p.navigator||{}).userAgent,y=void 0===v?"":v,b=p,w=h,k=g,O=(b.document,!!w.documentElement&&!!w.head&&"function"==typeof w.addEventListener&&"function"==typeof w.createElement),x=(~y.indexOf("MSIE")||y.indexOf("Trident/"),"svg-inline--fa"),E="data-fa-i2svg",_=(function(){try{}catch(et){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),S=_.concat([11,12,13,14,15,16,17,18,19,20]),M={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",M.GROUP,M.SWAP_OPACITY,M.PRIMARY,M.SECONDARY].concat(_.map((function(n){return"".concat(n,"x")}))).concat(S.map((function(n){return"w-".concat(n)}))),b.FontAwesomeConfig||{});if(w&&"function"==typeof w.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=m(n,2),e=t[0],r=t[1],a=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=w.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=a&&(j[r]=a)}))}var A=u({},{familyPrefix:"fa",replacementClass:x,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},j);A.autoReplaceSvg||(A.observeMutations=!1);var P=u({},A);b.FontAwesomeConfig=P;var T=b||{};T.___FONT_AWESOME___||(T.___FONT_AWESOME___={}),T.___FONT_AWESOME___.styles||(T.___FONT_AWESOME___.styles={}),T.___FONT_AWESOME___.hooks||(T.___FONT_AWESOME___.hooks={}),T.___FONT_AWESOME___.shims||(T.___FONT_AWESOME___.shims=[]);var N=T.___FONT_AWESOME___,C=[];O&&((w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState)||w.addEventListener("DOMContentLoaded",(function n(){w.removeEventListener("DOMContentLoaded",n),1,C.map((function(n){return n()}))})));var I,z="pending",L="settled",D="fulfilled",R="rejected",U=function(){},W=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,Y="undefined"==typeof setImmediate?setTimeout:setImmediate,F=[];function X(){for(var n=0;n<F.length;n++)F[n][0](F[n][1]);F=[],I=!1}function H(n,t){F.push([n,t]),I||(I=!0,Y(X,0))}function B(n){var t=n.owner,e=t._state,r=t._data,a=n[e],i=n.then;if("function"==typeof a){e=D;try{r=a(r)}catch(et){q(i,et)}}G(i,r)||(e===D&&K(i,r),e===R&&q(i,r))}function G(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===s(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){e||(e=!0,t===r?Z(n,r):K(n,r))}),(function(t){e||(e=!0,q(n,t))})),!0}}catch(et){return e||q(n,et),!0}return!1}function K(n,t){n!==t&&G(n,t)||Z(n,t)}function Z(n,t){n._state===z&&(n._state=L,n._data=t,H(J,n))}function q(n,t){n._state===z&&(n._state=L,n._data=t,H(Q,n))}function V(n){n._then=n._then.forEach(B)}function J(n){n._state=D,V(n)}function Q(n){n._state=R,V(n),!n._handled&&W&&e.g.process.emit("unhandledRejection",n._data,n)}function $(n){e.g.process.emit("rejectionHandled",n)}function nn(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof nn==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){q(t,n)}try{n((function(n){K(t,n)}),e)}catch(et){e(et)}}(n,this)}nn.prototype={constructor:nn,_state:z,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(U),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===R&&W&&H($,this)),this._state===D||this._state===R?H(B,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},nn.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new nn((function(t,e){var r=[],a=0;function i(n){return a++,function(e){r[n]=e,--a||t(r)}}for(var o,c=0;c<n.length;c++)(o=n[c])&&"function"==typeof o.then?o.then(i(c),e):r[c]=o;a||t(r)}))},nn.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new nn((function(t,e){for(var r,a=0;a<n.length;a++)(r=n[a])&&"function"==typeof r.then?r.then(t,e):t(r)}))},nn.resolve=function(n){return n&&"object"===s(n)&&n.constructor===nn?n:new nn((function(t){t(n)}))},nn.reject=function(n){return new nn((function(t,e){e(n)}))};var tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function en(n){if(n&&O){var t=w.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=w.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return w.head.insertBefore(t,r),n}}function rn(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function an(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function on(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function cn(n){return n.size!==tn.size||n.x!==tn.x||n.y!==tn.y||n.rotate!==tn.rotate||n.flipX||n.flipY}function sn(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var ln={x:0,y:0,width:"100%",height:"100%"};function fn(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function un(n){var t=n.icons,e=t.main,r=t.mask,a=n.prefix,i=n.iconName,o=n.transform,c=n.symbol,s=n.title,l=n.maskId,f=n.titleId,m=n.extra,d=n.watchable,p=void 0!==d&&d,h=r.found?r:e,g=h.width,v=h.height,y="fak"===a,b=y?"":"fa-w-".concat(Math.ceil(g/v*16)),w=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):"",b].filter((function(n){return-1===m.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(m.classes).join(" "),k={children:[],attributes:u({},m.attributes,{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})},O=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};p&&(k.attributes[E]=""),s&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(f||rn())},children:[s]});var x=u({},k,{prefix:a,iconName:i,main:e,mask:r,maskId:l,transform:o,symbol:c,styles:u({},O,m.styles)}),_=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,a=n.main,i=n.mask,o=n.maskId,c=n.transform,s=a.width,l=a.icon,f=i.width,m=i.icon,d=sn({transform:c,containerWidth:f,iconWidth:s}),p={tag:"rect",attributes:u({},ln,{fill:"white"})},h=l.children?{children:l.children.map(fn)}:{},g={tag:"g",attributes:u({},d.inner),children:[fn(u({tag:l.tag,attributes:u({},l.attributes,d.path)},h))]},v={tag:"g",attributes:u({},d.outer),children:[g]},y="mask-".concat(o||rn()),b="clip-".concat(o||rn()),w={tag:"mask",attributes:u({},ln,{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(t=m,"g"===t.tag?t.children:[t])},w]};return e.push(k,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(y,")")},ln)}),{children:e,attributes:r}}(x):function(n){var t=n.children,e=n.attributes,r=n.main,a=n.transform,i=on(n.styles);if(i.length>0&&(e.style=i),cn(a)){var o=sn({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:u({},o.outer),children:[{tag:"g",attributes:u({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:u({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(x),S=_.children,M=_.attributes;return x.children=S,x.attributes=M,c?function(n){var t=n.prefix,e=n.iconName,r=n.children,a=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u({},a,{id:!0===i?"".concat(t,"-").concat(P.familyPrefix,"-").concat(e):i}),children:r}]}]}(x):function(n){var t=n.children,e=n.main,r=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(cn(o)&&e.found&&!r.found){var c={x:e.width/e.height/2,y:.5};a.style=on(u({},i,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(x)}var mn=function(){},dn=(P.measurePerformance&&k&&k.mark&&k.measure,function(n,t,e,r){var a,i,o,c=Object.keys(n),s=c.length,l=void 0!==r?function(n,t){return function(e,r,a,i){return n.call(t,e,r,a,i)}}(t,r):t;for(void 0===e?(a=1,o=n[c[0]]):(a=0,o=e);a<s;a++)o=l(o,n[i=c[a]],i,n);return o});function pn(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,a=void 0!==r&&r,i=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!=typeof N.hooks.addPack||a?N.styles[n]=u({},N.styles[n]||{},i):N.hooks.addPack(n,i),"fas"===n&&pn("fa",t)}var hn=N.styles,gn=N.shims,vn=function(){var n=function(n){return dn(hn,(function(t,e,r){return t[r]=dn(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in hn;dn(gn,(function(n,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||t||(a="fas"),n[r]={prefix:a,iconName:i},n}),{})};vn();N.styles;function yn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function bn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,a=n.children,i=void 0===a?[]:a;return"string"==typeof n?an(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(an(n[e]),'" ')}),"").trim()}(r),">").concat(i.map(bn).join(""),"</").concat(t,">")}var wn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return n.flipX=!0,n;if(r&&"v"===a)return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a}return n}),t):t};function kn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}kn.prototype=Object.create(Error.prototype),kn.prototype.constructor=kn;var On={fill:"currentColor"},xn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},En={tag:"path",attributes:u({},On,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},_n=u({},xn,{attributeName:"opacity"});u({},On,{cx:"256",cy:"364",r:"28"}),u({},xn,{attributeName:"r",values:"28;14;28;28;14;28;"}),u({},_n,{values:"1;0;1;1;0;1;"}),u({},On,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),u({},_n,{values:"1;0;0;0;0;1;"}),u({},On,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),u({},_n,{values:"0;0;1;1;0;0;"}),N.styles;function Sn(n){var t=n[0],e=n[1],r=m(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(M.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(M.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(M.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}N.styles;function Mn(){var n="fa",t=x,e=P.familyPrefix,r=P.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==n||r!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(c,".".concat(r))}return a}function jn(){P.autoAddCss&&!Cn&&(en(Mn()),Cn=!0)}function An(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return bn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(O){var t=w.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function Pn(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return yn(Nn.definitions,e,r)||yn(N.styles,e,r)}var Tn,Nn=new(function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,(e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(t){n.definitions[t]=u({},n.definitions[t]||{},a[t]),pn(t,a[t]),vn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],a=r.prefix,i=r.iconName,o=r.icon;n[a]||(n[a]={}),n[a][i]=o})),n}}])&&l(t.prototype,e),r&&l(t,r),n}()),Cn=!1,In={transform:function(n){return wn(n)}},zn=(Tn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?tn:e,a=t.symbol,i=void 0!==a&&a,o=t.mask,c=void 0===o?null:o,s=t.maskId,l=void 0===s?null:s,f=t.title,m=void 0===f?null:f,d=t.titleId,p=void 0===d?null:d,h=t.classes,g=void 0===h?[]:h,v=t.attributes,y=void 0===v?{}:v,b=t.styles,w=void 0===b?{}:b;if(n){var k=n.prefix,O=n.iconName,x=n.icon;return An(u({type:"icon"},n),(function(){return jn(),P.autoA11y&&(m?y["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(p||rn()):(y["aria-hidden"]="true",y.focusable="false")),un({icons:{main:Sn(x),mask:c?Sn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:O,transform:u({},tn,r),symbol:i,title:m,maskId:l,titleId:p,extra:{attributes:y,styles:w,classes:g}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:Pn(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Pn(r||{})),Tn(e,u({},t,{mask:r}))}),Ln=e(5697),Dn=e.n(Ln);function Rn(n){return(Rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function Un(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Wn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Yn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Wn(Object(e),!0).forEach((function(t){Un(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Wn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Fn(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function Xn(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Hn(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function Bn(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),a=Hn(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[a]=i,n}),{})}var Gn=!1;try{Gn=!0}catch(et){}function Kn(n){return In.icon?In.icon(n):null===n?null:"object"===Rn(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function Zn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Un({},n,t):{}}function qn(n){var t=n.forwardedRef,e=Fn(n,["forwardedRef"]),r=e.icon,a=e.mask,i=e.symbol,o=e.className,c=e.title,s=e.titleId,l=Kn(r),f=Zn("classes",[].concat(Xn(function(n){var t,e=n.spin,r=n.pulse,a=n.fixedWidth,i=n.inverse,o=n.border,c=n.listItem,s=n.flip,l=n.size,f=n.rotation,u=n.pull,m=(Un(t={"fa-spin":e,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(l),null!=l),Un(t,"fa-rotate-".concat(f),null!=f&&0!==f),Un(t,"fa-pull-".concat(u),null!=u),Un(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(m).map((function(n){return m[n]?n:null})).filter((function(n){return n}))}(e)),Xn(o.split(" ")))),u=Zn("transform","string"==typeof e.transform?In.transform(e.transform):e.transform),m=Zn("mask",Kn(a)),d=zn(l,Yn({},f,{},u,{},m,{symbol:i,title:c,titleId:s}));if(!d)return function(){var n;!Gn&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",l),null;var p=d.abstract,h={ref:t};return Object.keys(e).forEach((function(n){qn.defaultProps.hasOwnProperty(n)||(h[n]=e[n])})),Vn(p[0],h)}qn.displayName="FontAwesomeIcon",qn.propTypes={border:Dn().bool,className:Dn().string,mask:Dn().oneOfType([Dn().object,Dn().array,Dn().string]),fixedWidth:Dn().bool,inverse:Dn().bool,flip:Dn().oneOf(["horizontal","vertical","both"]),icon:Dn().oneOfType([Dn().object,Dn().array,Dn().string]),listItem:Dn().bool,pull:Dn().oneOf(["right","left"]),pulse:Dn().bool,rotation:Dn().oneOf([0,90,180,270]),size:Dn().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Dn().bool,symbol:Dn().oneOfType([Dn().bool,Dn().string]),title:Dn().string,transform:Dn().oneOfType([Dn().string,Dn().object]),swapOpacity:Dn().bool},qn.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Vn=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=Bn(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[Hn(t)]=r}return n}),{attrs:{}}),o=r.style,c=void 0===o?{}:o,s=Fn(r,["style"]);return i.attrs.style=Yn({},i.attrs.style,{},c),t.apply(void 0,[e.tag,Yn({},i.attrs,{},s)].concat(Xn(a)))}.bind(null,r.createElement),Jn=e(8014),Qn=e(9970),$n=function(n){var t=n.children,e=n.width;return r.createElement("div",{className:"carousel-item",style:{width:e}},t)},nt=function(n){var t=n.children,e=r.useState(0),a=e[0],i=e[1],o=r.useState(!1),c=o[0],s=o[1],l=function(n){n<0?n=r.Children.count(t)-1:n>=r.Children.count(t)&&(n=0),i(n)},f=(0,Qn.useSwipeable)({onSwipedLeft:function(){return l(a+1)},onSwipedRight:function(){return l(a-1)}});return r.createElement("div",Object.assign({},f,{className:"carousel",role:"button",tabIndex:0,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}}),r.createElement("div",{className:"inner",style:{transform:"translateX(-"+100*a+"%)"}},r.Children.map(t,(function(n){return r.cloneElement(n,{width:"100%"})}))),r.createElement("div",{style:{display:c?"block":"none"}},r.createElement("button",{className:"indicators indicators-left",onClick:function(){l(a-1)}},r.createElement(qn,{icon:Jn.A35})),r.createElement("button",{className:"indicators indicators-right",onClick:function(){l(a+1)}},r.createElement(qn,{icon:Jn._tD}))),r.Children.map(t,(function(n,t){return r.createElement("span",{className:"pageIndicators "+(t===a?"highlightIndicator":"")})})))},tt=function(){return r.createElement(a.Z,{page:"awards"},r.createElement(i.Z,{title:"Awards"}),r.createElement("section",{className:"title-div-white"},r.createElement("strong",{className:"title-awards"},"IT IS OUR PLEASURE TO HELP")),r.createElement("section",{className:"section-awards"},r.createElement("div",{className:"widthLimit-awards"},r.createElement("div",{className:"columns"},r.createElement("div",{className:"column is-half has-text-centered"},r.createElement("div",{className:"container"},r.createElement(nt,null,o.$.map((function(n){return r.createElement($n,null,r.createElement(c.Z,{src:n.name,alt:n.name,className:"images"}))}))),r.createElement("div",{className:"titleOfSlider"},"THANK YOU LETTERS"))),r.createElement("div",{className:"column has-text-centered"},r.createElement("div",{className:"container"},r.createElement(nt,null,o.X.map((function(n){return r.createElement($n,null,r.createElement(c.Z,{src:n.name,alt:n.name,className:"images"}))}))),r.createElement("div",{className:"titleOfSlider"},"CERTIFICATES")))))),r.createElement("section",{className:"title-div-white"}))}}}]);
//# sourceMappingURL=component---src-pages-awards-js-d61610ee0f055ea7b04b.js.map