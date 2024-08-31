"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3521],{90121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(86070),s=n(25296),o=n(37353);const i={title:"BDSX",sidebar_position:3},c="BDSX",l={id:"bds-core/process/BDSX/bdsx",title:"BDSX",description:"BDSX \u662f\u4e00\u4e2a\u652f\u6301 node.js \u7684 Minecraft \u57fa\u5ca9\u7248\u4e13\u7528\u670d\u52a1\u5668\uff08BDS\uff09\u4fee\u6539\u7248\u672c\u3002\u57fa\u4e8e\u5b98\u65b9 BDS \u5b9e\u73b0\uff0c\u5305\u542b\u4e86\u539f\u7248 Minecraft \u7684\u6240\u6709\u7279\u6027\uff0c\u5e76\u652f\u6301 Hook \u51fd\u6570\u4e0e\u7f51\u7edc\u6570\u636e\u5305\u4ee5\u6dfb\u52a0\u6216\u4fee\u6539\u670d\u52a1\u5668\u7684\u529f\u80fd\u4e0e\u8868\u73b0\u3002",source:"@site/docs-bedrock/bds-core/process/BDSX/bdsx.md",sourceDirName:"bds-core/process/BDSX",slug:"/bds-core/process/BDSX/",permalink:"/NitWikit/Bedrock/bds-core/process/BDSX/",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/BDSX/bdsx.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1725095574e3,sidebarPosition:3,frontMatter:{title:"BDSX",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6\u52a0\u8f7d\u5668\u9009\u62e9",permalink:"/NitWikit/Bedrock/bds-core/process/plugins/plugins-loader-choose"},next:{title:"BDSX \u5b89\u88c5\u6559\u7a0b",permalink:"/NitWikit/Bedrock/bds-core/process/BDSX/bdsx-install"}},a={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"bdsx",children:"BDSX"})}),"\n",(0,r.jsx)(t.p,{children:"BDSX \u662f\u4e00\u4e2a\u652f\u6301 node.js \u7684 Minecraft \u57fa\u5ca9\u7248\u4e13\u7528\u670d\u52a1\u5668\uff08BDS\uff09\u4fee\u6539\u7248\u672c\u3002\u57fa\u4e8e\u5b98\u65b9 BDS \u5b9e\u73b0\uff0c\u5305\u542b\u4e86\u539f\u7248 Minecraft \u7684\u6240\u6709\u7279\u6027\uff0c\u5e76\u652f\u6301 Hook \u51fd\u6570\u4e0e\u7f51\u7edc\u6570\u636e\u5305\u4ee5\u6dfb\u52a0\u6216\u4fee\u6539\u670d\u52a1\u5668\u7684\u529f\u80fd\u4e0e\u8868\u73b0\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0b\u5185\u5bb9\u4e3a BDSX \u7684\u914d\u7f6e\u6559\u7a0b"}),"\n","\n",(0,r.jsx)(o.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},37353:(e,t,n)=>{n.d(t,{A:()=>b});n(30758);var r=n(13526),s=n(74339),o=n(21886),i=n(26401),c=n(49910),l=n(44264),a=n(83167);const d={cardContainer:"cardContainer_sywd",cardTitle:"cardTitle_kNFb",cardDescription:"cardDescription_foIn"};var u=n(86070);function p(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:o}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(g,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},26401:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(30758),s=n(64130);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},25296:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(30758);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);