(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return y}));t("Xlt+"),t("JBxO"),t("FdtR"),t("L1EO"),t("RtS0"),t("WB5j"),t("fp7Y"),t("ZEAQ"),t("3dw1");var c,l,o,r,a,u=document.querySelector(".calc"),i=document.querySelector(".result"),s={GRN:1};y().then((function(n){n.slice(0,3).forEach((function(n){var e=n.ccy,t=n.sale;s[e]=t}))})),u.addEventListener("input",(function(n){"INPUT"===n.target.nodeName&&(l=Number(n.target.value));"first-select"===n.target.id&&(a=n.target.value,o=s[a]);"second-select"===n.target.id&&(c=n.target.value,r=s[c]);!function(n,e,t){if(!(n*e/t))return;i.innerHTML=(n*e/t).toFixed(2)}(l,o,r)}));t("D/wG");var p={UAH:1},f=document.querySelector(".input-wrapper");y().then((function(n){n.slice(0,3).forEach((function(n){var e=n.ccy,t=n.sale;p[e]=t,console.log(e,t)}))})),f.addEventListener("input",(function(n){console.dir(n.target.name),console.dir(n.currentTarget);var e=Number(n.target.value);console.log(e)}));var d=t("apWx"),m=t.n(d),h=document.querySelector(".currency");function y(){return fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((function(n){return n.json()}))}y().then((function(n){var e=m()(n.splice(0,3));h.insertAdjacentHTML("beforeend",e)}))},apWx:function(n,e,t){var c=t("mp5j");n.exports=(c.default||c).template({1:function(n,e,t,c,l){var o,r=null!=e?e:n.nullContext||{},a=n.hooks.helperMissing,u=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<span class='currency-value'>"+u("function"==typeof(o=null!=(o=i(t,"ccy")||(null!=e?i(e,"ccy"):e))?o:a)?o.call(r,{name:"ccy",hash:{},data:l,loc:{start:{line:3,column:29},end:{line:3,column:36}}}):o)+": "+u("function"==typeof(o=null!=(o=i(t,"buy")||(null!=e?i(e,"buy"):e))?o:a)?o.call(r,{name:"buy",hash:{},data:l,loc:{start:{line:3,column:38},end:{line:3,column:45}}}):o)+"/"+u("function"==typeof(o=null!=(o=i(t,"sale")||(null!=e?i(e,"sale"):e))?o:a)?o.call(r,{name:"sale",hash:{},data:l,loc:{start:{line:3,column:46},end:{line:3,column:54}}}):o)+" </span>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,c,l){var o;return null!=(o=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:2,column:0},end:{line:4,column:9}}}))?o:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.4c9c62c1a904e38755dd.js.map