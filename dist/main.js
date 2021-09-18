(()=>{"use strict";var n,r,e,t,o,i,a,s,c,p,u,l,f,d,h={426:(n,r,e)=>{e.d(r,{Z:()=>u});var t=e(645),o=e.n(t),i=e(667),a=e.n(i),s=new URL(e(850),e.b),c=o()((function(n){return n[1]})),p=a()(s);c.push([n.id,"body{\r\n    font-family: 'Roboto', sans-serif;\r\n    background: \r\n    linear-gradient(\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1)\r\n    ),\r\n    url("+p+");\r\n    background-size: cover;\r\n    color: white;\r\n\r\n\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    margin-top: 20px;\r\n    align-items: baseline;\r\n}\r\n\r\n.header-nav{\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n#title{\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    letter-spacing: 0.07em;\r\n}\r\n\r\n#content-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: auto;\r\n    position: relative;\r\n    height: 90px;\r\n    /* width: 712px; */\r\n    text-align: center;\r\n    top: 200px;\r\n    bottom: 0;\r\n}\r\n\r\n#welcome{\r\n    border: solid black 4px;\r\n    width: 280px;\r\n    margin: 0px 0px 0px 0px;\r\n    padding: 25px 0px 20px 25px;\r\n    border-radius: 0px 0px 0px 0px;\r\n    position: relative;\r\n    bottom: 50px;\r\n}\r\n\r\n#headline{\r\n    font-size: 50px;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\n.header-navs{\r\n    font-weight: 800;\r\n    font-size: 20px;\r\n}\r\n\r\n#welcome-text{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n#about-button{\r\n    font-size: 20px;\r\n    padding: 10px 10px 10px 10px;\r\n    background-color: #ffffff;\r\n    color: #000000;\r\n    border: 1px solid #ffffff;\r\n}   ",""]);const u=c},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],p=t.base?c[0]+t.base:c[0],u=i[p]||0,l="".concat(p," ").concat(u);i[p]=u+1;var f=e(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(r[f].references++,r[f].updater(d)):r.push({identifier:l,updater:o(d,t),references:1}),a.push(l)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),p=0;p<i.length;p++){var u=e(i[p]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},850:(n,r,e)=>{n.exports=e.p+"302a7e106625b0238d25.jpg"}},m={};function g(n){var r=m[n];if(void 0!==r)return r.exports;var e=m[n]={id:n,exports:{}};return h[n](e,e.exports,g),e.exports}g.m=h,g.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return g.d(r,{a:r}),r},g.d=(n,r)=>{for(var e in r)g.o(r,e)&&!g.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var r=g.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,n=g(379),r=g.n(n),e=g(795),t=g.n(e),o=g(569),i=g.n(o),a=g(565),s=g.n(a),c=g(216),p=g.n(c),u=g(589),l=g.n(u),f=g(426),(d={}).styleTagTransform=l(),d.setAttributes=s(),d.insert=i().bind(null,"head"),d.domAPI=t(),d.insertStyleElement=p(),r()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals})();