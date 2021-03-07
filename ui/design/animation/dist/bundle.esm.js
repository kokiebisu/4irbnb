import{jsx as n}from"theme-ui";import{keyframes as t}from"@emotion/core";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var e=function(){return(e=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)};var i,r,a,o=t(a||(i=["\n  0% {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 0.3;\n  }\n"],r=["\n  0% {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 0.3;\n  }\n"],Object.defineProperty?Object.defineProperty(i,"raw",{value:r}):i.raw=r,a=i)),s={wrapper:{width:"36px",height:"20px",display:"flex",justifyContent:"space-around",alignItems:"center"},content:{display:"block",width:"8px",height:"8px",borderRadius:"4px"},first:{animation:o+" 1s infinite"},second:{animation:o+" 1s infinite",animationDelay:"0.3s"},third:{animation:o+" 1s infinite",animationDelay:"0.6s"}},c={web:{wrapper:e({},s.wrapper),content:e({},s.content),first:e({},s.first),second:e({},s.second),third:e({},s.third)},theme:{}}.web,p=function(t){var i=t.dark;return n("div",{css:c.wrapper},n("span",{sx:e({},i?{bg:"black"}:{bg:"white"}),css:e(e({},c.content),c.first)}),n("span",{sx:e({},i?{bg:"black"}:{bg:"white"}),css:e(e({},c.content),c.second)}),n("span",{sx:e({},i?{bg:"black"}:{bg:"white"}),css:e(e({},c.content),c.third)}))},d={LOADING:"loading"},f=function(t){var i,r=t.variant,a=void 0===r?d.LOADING:r,o=t.extendsTo,s=function(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(e[i[r]]=n[i[r]])}return e}(t,["variant","extendsTo"]),c=((i={})[d.LOADING]=n(p,e({},s)),i);return n("div",{"data-testid":a+"-animation",className:o},c[a])};export{d as $Animation,f as Animation};
