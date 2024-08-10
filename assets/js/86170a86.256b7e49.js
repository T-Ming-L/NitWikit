"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[9238],{74119:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var t=i(74848),n=i(28453);const d={title:"\u5b89\u88c5",slug:"/database/install",sidebar_position:1},c=void 0,a={id:"advance/database/install",title:"\u5b89\u88c5",description:"\u6570\u636e\u5e93\u5b89\u88c5",source:"@site/docs/advance/database/install.md",sourceDirName:"advance/database",slug:"/database/install",permalink:"/NitWikit/database/install",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/database/install.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1723248797e3,sidebarPosition:1,frontMatter:{title:"\u5b89\u88c5",slug:"/database/install",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u76f8\u5173",permalink:"/NitWikit/database"},next:{title:"\u7ba1\u7406",permalink:"/NitWikit/database/manage"}},r={},h=[{value:"\u6570\u636e\u5e93\u5b89\u88c5",id:"\u6570\u636e\u5e93\u5b89\u88c5",level:2},{value:"\u76f4\u63a5\u5b89\u88c5",id:"\u76f4\u63a5\u5b89\u88c5",level:3},{value:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5",id:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5",level:3},{value:"\u5c0f\u76ae\u6570\u636e\u5e93",id:"\u5c0f\u76ae\u6570\u636e\u5e93",level:4},{value:"\u5b9d\u5854\u9762\u677f",id:"\u5b9d\u5854\u9762\u677f",level:4}];function l(s){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,n.R)(),...s.components},{Details:d}=e;return d||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u6570\u636e\u5e93\u5b89\u88c5",children:"\u6570\u636e\u5e93\u5b89\u88c5"}),"\n",(0,t.jsx)(e.h3,{id:"\u76f4\u63a5\u5b89\u88c5",children:"\u76f4\u63a5\u5b89\u88c5"}),"\n",(0,t.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u4e0b\u8f7d\u5b89\u88c5\u5305\u6765\u5b89\u88c5\uff0c\u5982\u679c\u89c9\u5f97\u9ebb\u70e6\uff0c\u8bf7\u770b\u4e0b\u9762\u7684",(0,t.jsx)(e.strong,{children:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5"})]}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"http://mirrors.sohu.com/mysql/MySQL-8.0/",children:"sohu MySQL \u955c\u50cf\u6e90"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://mirrors.aliyun.com/mysql/",children:"\u963f\u91cc MySQL \u955c\u50cf\u6e90"})})]}),"\n",(0,t.jsxs)(e.p,{children:["\u5bf9\u4e8e Windows \u7528\u6237\uff0c\u8bf7\u4e0b\u8f7d ",(0,t.jsx)(e.code,{children:".msi"})," \u6216 ",(0,t.jsx)(e.code,{children:"zip"})," \u7684\u5305\uff0c\u5176\u4e2d ",(0,t.jsx)(e.code,{children:".msi"})," \u662f\u5b89\u88c5\u5305\uff0c",(0,t.jsx)(e.code,{children:".zip"})," \u662f\u7eff\u8272\u7248\uff0c\u63a8\u8350\u4e0b\u8f7d ",(0,t.jsx)(e.code,{children:".msi"})," \u7248\u672c\u6765\u5b89\u88c5"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5bf9\u4e8e MySQL \u5b89\u88c5\uff0c\u8bf7\u770b\u8fd9\u7bc7\u6587\u7ae0: ",(0,t.jsx)(e.a,{href:"https://blog.csdn.net/m0_52559040/article/details/121843945",children:"2024 \u5e74 MySQL 8.0 \u5b89\u88c5 \u914d\u7f6e \u6559\u7a0b \u6700\u7b80\u6613\uff08\u4fdd\u59c6\u7ea7\uff09"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u800c\u6807\u7740 ",(0,t.jsx)(e.code,{children:"ubuntu"})," \u6216 ",(0,t.jsx)(e.code,{children:"debian"})," \u662f linux \u7248\u672c\u7684\u5b89\u88c5\u5305\uff0clinux \u7528\u6237\u8bf7\u4e0b\u8f7d\u8fd9\u4e2a"]}),"\n",(0,t.jsx)(e.h3,{id:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5",children:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5"}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4f1a\u544a\u8bc9\u4f60 ",(0,t.jsx)(e.strong,{children:"\u6211\u8ba4\u4e3a"})," \u6700\u7b80\u5355\u7684\u51e0\u79cd\u5b89\u88c5\u6570\u636e\u5e93\u7684\u65b9\u6cd5"]}),"\n",(0,t.jsx)(e.h4,{id:"\u5c0f\u76ae\u6570\u636e\u5e93",children:"\u5c0f\u76ae\u6570\u636e\u5e93"}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u548c\u5b89\u88c5"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(48958).A+"",width:"816",height:"467"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(16309).A+"",width:"940",height:"635"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(47212).A+"",width:"1524",height:"804"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(61027).A+"",width:"632",height:"395"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(59802).A+"",width:"787",height:"363"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(89969).A+"",width:"560",height:"400"})})]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u5378\u8f7dMySQL5\u548c\u5b89\u88c5MySQL8"}),(0,t.jsx)(e.p,{children:"MySQL5 \u7248\u672c\u592a\u4f4e\u4e86\uff0c\u5f88\u591a\u63d2\u4ef6\u9700\u8981\u66f4\u9ad8\u7248\u672c\u7684\uff0c\u88c5 MySQL8 \u5c31\u591f\u7528\u4e86"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(75752).A+"",width:"800",height:"630"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(58015).A+"",width:"800",height:"630"})})]}),"\n",(0,t.jsx)(e.h4,{id:"\u5b9d\u5854\u9762\u677f",children:"\u5b9d\u5854\u9762\u677f"}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u548c\u5b89\u88c5"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(5486).A+"",width:"840",height:"470"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(51063).A+"",width:"1687",height:"1011"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(2072).A+"",width:"1614",height:"824"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(23201).A+"",width:"877",height:"293"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(8970).A+"",width:"570",height:"410"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(47827).A+"",width:"681",height:"571"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(52532).A+"",width:"611",height:"591"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(85565).A+"",width:"942",height:"978"})}),(0,t.jsx)(e.p,{children:"\u5b9d\u5854\u9762\u677f\u662f\u5fc5\u987b\u8981\u7ed1\u5b9a\u8d26\u53f7\u7684"}),(0,t.jsx)(e.p,{children:"\u6309\u7167\u63d0\u793a\u53bb\u505a"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(57553).A+"",width:"921",height:"641"})}),(0,t.jsx)(e.p,{children:"\u5168 x \u6389\uff0c\u4e00\u4e2a\u90fd\u4e0d\u9700\u8981\u88c5"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(9160).A+"",width:"1462",height:"704"})})]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u5b89\u88c5MySQL"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(71139).A+"",width:"1904",height:"712"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(81306).A+"",width:"528",height:"366"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(49717).A+"",width:"576",height:"352"})})]})]})}function o(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(l,{...s})}):l(s)}},48958:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},5486:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},51063:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},2072:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},23201:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},8970:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},47827:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},52532:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/18-fcf29f01840856988636322a077e49bf.png"},85565:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},16309:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},57553:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/20-84283116b360b86728c489c3345e9175.png"},9160:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},71139:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},81306:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},49717:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},47212:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},61027:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},59802:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},89969:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},75752:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},58015:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},28453:(s,e,i)=>{i.d(e,{R:()=>c,x:()=>a});var t=i(96540);const n={},d=t.createContext(n);function c(s){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function a(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:c(s.components),t.createElement(d.Provider,{value:e},s.children)}}}]);