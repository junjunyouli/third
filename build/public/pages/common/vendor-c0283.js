!function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t=window.webpackJsonp;window.webpackJsonp=function(r,u,c){for(var i,a,f,l=0,s=[];l<r.length;l++)a=r[l],o[a]&&s.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);for(t&&t(r,u,c);s.length;)s.shift()();if(c)for(l=0;l<c.length;l++)f=n(n.s=c[l]);return f};var r={},o={2:0};n.e=function(e){function t(){i.onerror=i.onload=null,clearTimeout(a);var n=o[e];0!==n&&(n&&n[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var u=new Promise(function(n,t){r=o[e]=[n,t]});r[2]=u;var c=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.timeout=12e4,n.nc&&i.setAttribute("nonce",n.nc),i.src=n.p+"public/pages/"+e+"-c0283.js";var a=setTimeout(t,12e4);return i.onerror=i.onload=t,c.appendChild(i),u},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n.oe=function(e){throw console.error(e),e}}([function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(2),c=(function(e){e&&e.__esModule}(u),function(){function e(){r(this,e)}return o(e,[{key:"addThumb",value:function(){axios.get("/index/update").then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}]),e}());n.default=c},,function(e,n){}]);