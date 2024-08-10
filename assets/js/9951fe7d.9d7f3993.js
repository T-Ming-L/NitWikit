"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3093],{78887:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=e(74848),t=e(28453);const a={title:"Folia",sidebar_position:3},o="Folia",r={id:"advance/folia",title:"Folia",description:"Folia \u662f Paper \u7684\u4e00\u4e2a\u5206\u652f\uff0c\u7531 Minecraft \u4f18\u5316 BOSS Spottedleaf \u5f00\u53d1\u3002",source:"@site/docs-java/advance/folia.md",sourceDirName:"advance",slug:"/advance/folia",permalink:"/NitWikit/Java/advance/folia",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/folia.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1723248797e3,sidebarPosition:3,frontMatter:{title:"Folia",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6ce8\u610f\u4e8b\u9879",permalink:"/NitWikit/Java/advance/cross-server/precautions"},next:{title:"YAML",permalink:"/NitWikit/Java/Sundry/YAML"}},s={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u597d\u5904",id:"\u597d\u5904",level:3},{value:"\u574f\u5904",id:"\u574f\u5904",level:3},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"LightLuminol",id:"lightluminol",level:2}];function d(i){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...i.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"folia",children:"Folia"}),"\n",(0,l.jsx)(n.p,{children:"Folia \u662f Paper \u7684\u4e00\u4e2a\u5206\u652f\uff0c\u7531 Minecraft \u4f18\u5316 BOSS Spottedleaf \u5f00\u53d1\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,l.jsx)(n.h3,{id:"\u597d\u5904",children:"\u597d\u5904"}),"\n",(0,l.jsx)(n.p,{children:"Folia \u4e0e Vanilla \u6700\u5927\u7684\u4e0d\u540c\u5728\u4e8e Tick \u4e0d\u518d\u6709\u4e3b\u7ebf\u7a0b,\u800c\u662f\u5c06\u533a\u5757\u8fdb\u884c\u5206\u7ec4,\u6bcf\u4e2a\u72ec\u7acb\u7684\u533a\u57df\u90fd\u6709\u81ea\u5df1\u7684 Tick Loop"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u65e0\u6cd5\u7406\u89e3\u8fd9\u6bb5\u8bdd,\u4f60\u53ef\u4ee5\u770b\u8fd9\u6837\u5b50\u505a\u7684\u597d\u5904:"}),"\n",(0,l.jsx)(n.p,{children:"\u73b0\u5728\u6709\u4e00\u4e2a\u5730\u56fe,\u6709\u56db\u4e2a\u533a\u5757,\u5206\u522b\u662fA,B,C,D"}),"\n",(0,l.jsx)(n.p,{children:"\u5c0f\u660e\u5728A\u5904\u5efa\u9020\u4e86\u4e00\u4e2a\u5361\u670d\u673a,\u80fd\u628a\u670d\u52a1\u5668TPS\u5e72\u523010\u4e00\u4e0b\u7684\u90a3\u79cd"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u662fPaper(\u6216\u8005Purpur\u53ca\u5176\u5206\u652f),\u90a3\u4e48A,B,C,D\u56db\u5904\u7684TPS\u90fd\u4f1a\u6389\u523010\u4ee5\u4e0b,\u4f46\u5982\u679c\u6211\u4eec\u7528Folia(\u5047\u8bbeABCD\u5206\u5728\u4e0d\u540c\u7684Region),\u90a3\u4e48\u53ea\u6709A\u5904\u7684TPS\u4f1a\u6389\u523010\u4ee5\u4e0b,B,C,D\u7684TPS\u4ecd\u7136\u4e0d\u53d7\u5f71\u54cd"}),"\n",(0,l.jsx)(n.p,{children:"\u5e76\u4e14Folia\u53ef\u4ee5\u66f4\u597d\u7684\u5229\u7528CPU\u591a\u6838"}),"\n",(0,l.jsx)(n.h3,{id:"\u574f\u5904",children:"\u574f\u5904"}),"\n",(0,l.jsx)(n.p,{children:"Folia \u5b8c\u5168\u7834\u574f\u4e86 Bukkit \u63d2\u4ef6\u7684\u517c\u5bb9\u6027,\u6bcf\u4e2a Bukkit \u63d2\u4ef6\u90fd\u5fc5\u987b\u4e3a Folia \u505a\u517c\u5bb9(\u6709\u4e13\u95e8\u7684 Fork \u4e3a Folia \u505a Bukkit \u63d2\u4ef6\u517c\u5bb9,\u540e\u9762\u4f1a\u8bb2),\u6240\u4ee5,Folia \u76ee\u524d\u53ea\u652f\u6301\u5f88\u5c11\u63d2\u4ef6"}),"\n",(0,l.jsx)(n.h2,{id:"\u8981\u6c42",children:"\u8981\u6c42"}),"\n",(0,l.jsx)(n.p,{children:"Folia\u8fd9\u4e48\u597d,\u4f46\u5e76\u4e0d\u662f\u6bcf\u4e2a\u670d\u52a1\u5668\u90fd\u53ef\u4ee5\u4f53\u9a8c\u7684,\u4f60\u9700\u8981\u786e\u4fdd\u4f60\u7684\u670d\u52a1\u5668\u7b26\u5408\u4ee5\u4e0b\u6761\u4ef6,\u8fd9\u6837\u624d\u53ef\u4ee5\u4eceFolia\u4e2d\u53d7\u76ca"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["16\u4e2a",(0,l.jsx)(n.strong,{children:"\u7269\u7406"}),"CPU\u6838\u5fc3"]}),"\n",(0,l.jsx)(n.li,{children:"\u73a9\u5bb6\u8f83\u4e3a\u5206\u6563(\u751f\u5b58\u591a\u4eba\u6e38\u620f\u3001\u65e0\u653f\u5e9c\u3001\u7a7a\u5c9b\u6216\u4e00\u4e9b\u8ff7\u4f60\u6e38\u620f\u670d\u52a1\u5668)"}),"\n",(0,l.jsx)(n.li,{children:"\u4f60\u9700\u8981\u7684\u63d2\u4ef6\u652f\u6301 Folia"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e0d\u7b26\u5408,\u53bb\u7528Leaf\u5427,\u7b26\u5408\u7684\u8bdd\u7ee7\u7eed\u770b\u4e0b\u53bb!"}),"\n",(0,l.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u4e0d\u63a8\u8350\u76f4\u63a5\u4f7f\u7528Folia,\u56e0\u4e3a\u8fd9\u9700\u8981\u81ea\u5df1\u53bb\u6784\u5efa,",(0,l.jsx)(n.a,{href:"https://luminolmc.com/",children:"Luminol"}),"\u662f\u4e00\u4e2a\u975e\u5e38\u68d2\u7684\u9009\u62e9,\u5982\u679c\u4f60\u9700\u89811.20.1/2,\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(n.a,{href:"https://github.com/Era4FunMC/Molia",children:"Molia"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8bf7\u9009\u62e9Luminol,\u6211\u4eec\u540e\u9762\u4f1a\u8bb2LightLuminol,\u4e0b\u8f7d\u5230\u672c\u5730\u540e,\u66ff\u6362\u539f\u6765\u7684\u6838\u5fc3\u5c31\u53ef\u4ee5\u4e86"}),"\n",(0,l.jsx)(n.h2,{id:"lightluminol",children:"LightLuminol"}),"\n",(0,l.jsx)(n.p,{children:"LightingLuminol \u662f Luminol \u7684\u5206\u652f\uff0c\u65e8\u5728\u4fee\u590d\u5bf9 BukkitAPI \u7684\u7834\u574f\uff0c\u6700\u5927\u7a0b\u5ea6\u4fdd\u8bc1 Bukkit \u63d2\u4ef6\u7684\u517c\u5bb9\u6027\u3002\u4f46\u662f\uff0c\u867d\u7136LightLuminol\u5bf9\u4e8eBukkit\u63d2\u517c\u5bb9\u6027\u8f83\u597d,\u4f46\u662f\u4f1a\u6709\u8bb8\u591a\u95ee\u9898\uff0c\u5305\u62ec\u4e0d\u5b9a\u65f6\u7684NullPointerError,Thread\u4e0d\u5b89\u5168,\u5185\u5b58\u6cc4\u9732,\u6570\u636e\u4e22\u5931(\u4e00\u5929\u5d29\u4e2a\u51e0\u5341\u6b21\uff0c\u633a\u6b63\u5e38\u7684)"}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u4ee5\u5728\u5f00\u59cb\u4f7f\u7528LightingLuminol\uff0c\u8bf7\u60f3\u60f3Leaf\u662f\u4e0d\u662f\u66f4\u597d\uff1f"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9700\u89811.20.1/2,\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(n.a,{href:"https://github.com/Era4FunMC/DirtyMolia",children:"DirtyMolia"})]}),"\n",(0,l.jsx)(n.p,{children:"(Molia\u548cLuminol\u5176\u5b9e\u662f\u540c\u4e00\u4e2a\u4f5c\u8005~~)"})]})}function h(i={}){const{wrapper:n}={...(0,t.R)(),...i.components};return n?(0,l.jsx)(n,{...i,children:(0,l.jsx)(d,{...i})}):d(i)}},28453:(i,n,e)=>{e.d(n,{R:()=>o,x:()=>r});var l=e(96540);const t={},a=l.createContext(t);function o(i){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function r(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:o(i.components),l.createElement(a.Provider,{value:n},i.children)}}}]);