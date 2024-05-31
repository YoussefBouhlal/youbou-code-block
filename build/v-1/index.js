(()=>{"use strict";var e,t={845:()=>{const e=window.React,t=window.wp.blocks,o=window.wp.components;var c,a;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c])}return e},n.apply(this,arguments)}const l=window.wp.i18n,r=window.wp.blockEditor,s=window.wp.element,u={html:"HTML",css:"CSS",scss:"SCSS",js:"JavaScript",ts:"TypeScript",php:"PHP",ruby:"Ruby",python:"Python",swift:"Swift",c:"C",csharp:"C#",cpp:"C++",objectivec:"Objective-C",sql:"SQL",json:"JSON",bash:"Bash",git:"Git"},i=[{value:"",label:"- Lang Select -"}];for(const e in u){const t=u[e];i.push({value:e,label:t})}function p(e){const t=e.value.match(/\r\n|\n/g);let o;o=null!==t?t.length+1:1,e.style.height=1.8*o+1.6+2+"em"}const b=JSON.parse('{"UU":"youbou/code-block"}');(0,t.registerBlockType)(b.UU,{icon:(0,e.createElement)(o.Icon,{icon:function(t){return e.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 223 118"},t),c||(c=e.createElement("path",{d:"M69.932 10.338 59.35-.285 0 59.065l59.35 59.349 10.582-10.582-48.727-48.767zM153 10.338 163.582-.285l59.35 59.35-59.35 59.349L153 107.832l48.727-48.767zM122.465 55.793c0 .385.242.563.513.563.242 0 .513-.178.513-.563V48.57l8.083-10.6c.543-.592-.211-1.184-.754-.592l-7.842 10.363-7.871-10.363c-.543-.592-1.267 0-.754.593l8.113 10.599z"})),a||(a=e.createElement("path",{d:"M143.516 56.592c5.248 0 9.772-4.381 9.591-10.096-.12-4.589-3.377-8.645-8.143-9.385a12 12 0 0 0-3.257 0c-4.735.74-7.63 4.796-7.781 9.385-.151 5.715 4.373 10.096 9.59 10.096m-1.658-18.534a9.9 9.9 0 0 1 2.955 0c4.283.652 7.178 4.323 7.299 8.468.151 5.092-3.89 9.149-8.596 9.149-4.674 0-8.716-4.056-8.565-9.149.121-4.145 2.655-7.816 6.907-8.468M173.947 47.947c0 10.007-15.442 10.007-15.442 0V37.644c0-.651-.965-.651-.965-.03v10.333c0 11.31 17.402 11.31 17.402 0V37.614c0-.621-.995-.621-.995.03zM130.553 75.2c0-2.73-1.913-4.196-4.423-4.695 1.913-.586 2.989-1.965 2.989-3.843 0-3.96-4.632-4.81-7.172-4.81h-7.232a.53.53 0 0 0-.538.528v17.6a.53.53 0 0 0 .538.529h8.248c3.675 0 7.59-1.144 7.59-5.31m-8.606-12.469c2.032.03 6.126.763 6.126 3.931 0 2.729-2.66 3.58-5.737 3.58h-7.142v-7.51zm1.972 8.45c3.108 0 5.588 1.143 5.588 4.018 0 3.608-3.406 4.43-6.544 4.43h-7.769V71.18zM143.702 80.86c5.199 0 9.681-4.34 9.502-10.003-.119-4.547-3.346-8.565-8.068-9.299a12 12 0 0 0-3.228 0c-4.691.733-7.56 4.752-7.709 9.3-.15 5.661 4.333 10.003 9.503 10.003m-1.644-18.363a9.8 9.8 0 0 1 2.929 0c4.243.645 7.112 4.283 7.231 8.39.15 5.046-3.855 9.064-8.516 9.064-4.632 0-8.637-4.018-8.487-9.064.119-4.107 2.63-7.745 6.843-8.39M173.853 72.295c0 9.915-15.3 9.915-15.3 0V62.086c0-.645-.956-.645-.956-.03v10.239c0 11.206 17.242 11.206 17.242 0V62.057c0-.616-.986-.616-.986.03zM66.465 80.86h12.069V62.815L93.32 37.628l-.72-.393L78.055 62.03 62.07 37H50l16.465 25.814zM101.663 80.86V37h.509v43.86z"})))}}),edit:function({attributes:t,setAttributes:c,clientId:a}){const n=(0,s.useRef)(),{code:b,langName:v}=t;(0,s.useEffect)((()=>{const{ownerDocument:e}=n.current;e&&p(e.querySelector(`#block-${a} .youboucodeblock__textarea`))}),[a,b]);const m=(0,r.useBlockProps)({ref:n,className:"youboucodeblock","data-lang":v||null});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{...m},(0,e.createElement)("div",{className:"youboucodeblock__container"},(0,e.createElement)("div",{className:"youboucodeblock__linenum"}),(0,e.createElement)("textarea",{className:"youboucodeblock__textarea",placeholder:(0,l.__)("Your Code…","youboucodeblock"),value:b,onChange:e=>{c({code:e.target.value}),p(e.target)}})),(0,e.createElement)("div",{className:"youboucodeblock__controls"},(0,e.createElement)(o.SelectControl,{value:t.langType,options:i,onChange:e=>{c(""===e?{langType:"",langName:""}:{langType:e,langName:u[e]})}}))))},save:function({attributes:t}){const{code:o}=t,c=`line-numbers lang-${t.langType||"plain"}`,a=r.useBlockProps.save({className:"youbou-block"});return(0,e.createElement)("div",{...a},(0,e.createElement)("pre",{className:c},(0,e.createElement)(r.RichText.Content,{tagName:"code",value:(n=o,n?n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):n)})));var n}})}},o={};function c(e){var a=o[e];if(void 0!==a)return a.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,c),n.exports}c.m=t,e=[],c.O=(t,o,a,n)=>{if(!o){var l=1/0;for(i=0;i<e.length;i++){for(var[o,a,n]=e[i],r=!0,s=0;s<o.length;s++)(!1&n||l>=n)&&Object.keys(c.O).every((e=>c.O[e](o[s])))?o.splice(s--,1):(r=!1,n<l&&(l=n));if(r){e.splice(i--,1);var u=a();void 0!==u&&(t=u)}}return t}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[o,a,n]},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={132:0,12:0};c.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[l,r,s]=o,u=0;if(l.some((t=>0!==e[t]))){for(a in r)c.o(r,a)&&(c.m[a]=r[a]);if(s)var i=s(c)}for(t&&t(o);u<l.length;u++)n=l[u],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(i)},o=globalThis.webpackChunkyoubou_code_block=globalThis.webpackChunkyoubou_code_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=c.O(void 0,[12],(()=>c(845)));a=c.O(a)})();