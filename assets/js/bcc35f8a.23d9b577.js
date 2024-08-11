"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5736],{96986:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=i(74848),s=i(28453);const t={title:"\u8fde\u63a5\u670d\u52a1\u5668",sidebar_position:6},l="\u8fde\u63a5\u670d\u52a1\u5668",c={id:"start/connect-to-server",title:"\u8fde\u63a5\u670d\u52a1\u5668",description:"\u7aef\u53e3",source:"@site/docs-java/start/connect-to-server.md",sourceDirName:"start",slug:"/start/connect-to-server",permalink:"/NitWikit/Java/start/connect-to-server",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/start/connect-to-server.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1723377757e3,sidebarPosition:6,frontMatter:{title:"\u8fde\u63a5\u670d\u52a1\u5668",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u670d\u52a1\u7aef",permalink:"/NitWikit/Java/start/config-server"},next:{title:"\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883",permalink:"/NitWikit/Java/start/deploy"}},d={},o=[{value:"\u7aef\u53e3",id:"\u7aef\u53e3",level:2},{value:"\u672c\u5730\u8fde\u63a5",id:"\u672c\u5730\u8fde\u63a5",level:2},{value:"\u8fdc\u7a0b\u8fde\u63a5",id:"\u8fdc\u7a0b\u8fde\u63a5",level:2},{value:"\u6211\u6709\u516c\u7f51",id:"\u6211\u6709\u516c\u7f51",level:3},{value:"\u6211\u6ca1\u516c\u7f51",id:"\u6211\u6ca1\u516c\u7f51",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u8fde\u63a5\u670d\u52a1\u5668",children:"\u8fde\u63a5\u670d\u52a1\u5668"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7aef\u53e3",children:"\u7aef\u53e3"}),"\n",(0,r.jsxs)(n.p,{children:["\u6253\u5f00\u4f60\u670d\u52a1\u5668\u6839\u76ee\u5f55\u7684 ",(0,r.jsx)(n.code,{children:"server.properties"})]}),"\n",(0,r.jsx)(n.p,{children:"\u627e\u5230"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"server-port=25565\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"25565"})," \u5373 Minecraft \u670d\u52a1\u5668\u7684\u9ed8\u8ba4\u7aef\u53e3\uff0c\u5982\u679c\u4e0d\u66f4\u6539\u9ed8\u8ba4\u7aef\u53e3\u901a\u5e38\u53ef\u7701\u7565\u4e0d\u5199"]}),"\n",(0,r.jsx)(n.h2,{id:"\u672c\u5730\u8fde\u63a5",children:"\u672c\u5730\u8fde\u63a5"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u6b64\u65b9\u6cd5\u4ec5\u9002\u7528\u4e8e\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u5728\u540c\u4e00\u673a\u5668\u4e0a\u7684\u60c5\u51b5"})}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u673a IP \uff0c\u901a\u5e38\u6709\u8fd9\u6837\u51e0\u79cd\u5f62\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"localhost"}),"\n",(0,r.jsx)(n.li,{children:"127.0.0.1"}),"\n",(0,r.jsx)(n.li,{children:"0.0.0.0"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u6ca1\u6709\u4fee\u6539\u4f60\u7684\u670d\u52a1\u5668\u7aef\u53e3\uff0c\u90a3\u4e48\u5728\u4f60\u7684 Minecraft \u5ba2\u6237\u7aef\u4e2d:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u70b9\u51fb\u591a\u4eba\u6e38\u620f"}),"\n",(0,r.jsx)(n.li,{children:"\u70b9\u51fb\u6dfb\u52a0\u670d\u52a1\u5668"}),"\n",(0,r.jsx)(n.li,{children:"\u8f93\u5165\u4e0a\u9762\u63d0\u5230\u7684\u672c\u5730 IP \u4e2d\u7684\u4efb\u610f\u4e00\u4e2a"}),"\n",(0,r.jsx)(n.li,{children:"\u70b9\u51fb\u5b8c\u6210"}),"\n",(0,r.jsx)(n.li,{children:"\u8fdb\u5165\u670d\u52a1\u5668"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4fee\u6539\u4e86\u4f60\u7684\u670d\u52a1\u5668\u7aef\u53e3\uff0c\u5728\u56de\u73af\u5730\u5740\u540e\u9762\u52a0\u4e2a\u5192\u53f7\u52a0\u4e0a\u4f60\u6539\u7684\u7aef\u53e3\u5373\u53ef"}),"\n",(0,r.jsx)(n.p,{children:"\u5982:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"localhost:25566"}),"\n",(0,r.jsx)(n.li,{children:"127.0.0.1:25566"}),"\n",(0,r.jsx)(n.li,{children:"0.0.0.0:25566"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u8981\u4f7f\u7528\u82f1\u6587\u7684 ",(0,r.jsx)(n.code,{children:":"})," ",(0,r.jsx)(n.strong,{children:"\u4e0d\u80fd\u4f7f\u7528\u4e2d\u6587"}),"\u7684 ",(0,r.jsx)(n.code,{children:"\uff1a"})," \uff01"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u8fdc\u7a0b\u8fde\u63a5",children:"\u8fdc\u7a0b\u8fde\u63a5"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5f00\u59cb\u8ba9\u4f60\u7684\u73a9\u5bb6\u8fdc\u7a0b\u8fde\u63a5\u81f3\u670d\u52a1\u5668\u7684\u65f6\u5019\uff0c\u8bf7\u5148\u786e\u8ba4\u6709\u6ca1\u6709\u516c\u7f51"}),"\n",(0,r.jsx)(n.h3,{id:"\u6211\u6709\u516c\u7f51",children:"\u6211\u6709\u516c\u7f51"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u6211\u73b0\u5728\u7684\u516c\u7f51 IP \u662f ",(0,r.jsx)(n.code,{children:"114.51.14.191"}),"\uff0c\u90a3\u4e48\u6211\u7684\u8fde\u63a5\u5e94\u8be5\u662f\u8f93\u5165 ",(0,r.jsx)(n.code,{children:"114.51.14.191:25565"}),"\uff0c"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\u5192\u53f7\u540e\u9762\u7684",(0,r.jsx)(n.strong,{children:"\u7aef\u53e3\u53f7"}),"\u5e94\u8be5\u548c\u4f60\u8bbe\u7f6e\u7684 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"server-port"})})," \u4e00\u6a21\u4e00\u6837\uff0c\u4e0d\u7136\u73a9\u5bb6\u65e0\u6cd5\u8fde\u63a5"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6bd4\u5982\u6211\u73b0\u5728\u628a ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"server-port"})})," \u6539\u6210\u4e86 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"9180"})}),"\uff0c\u5e94\u8be5\u8fd9\u4e48\u8fdb\u5165\u670d\u52a1\u5668 ",(0,r.jsx)(n.code,{children:"114.51.14.191:9180"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4e3a ",(0,r.jsx)(n.code,{children:"114.51.14.191"})," \u7ed1\u5b9a\u4e86\u57df\u540d ",(0,r.jsx)(n.code,{children:"yizhan.wiki"})," \uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u8fd9\u4e48\u8fdb ",(0,r.jsx)(n.code,{children:"yizhan.wiki:9180"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u5f88\u4e0d\u5e78\uff0c\u4f60\u7684\u73a9\u5bb6\u6ca1\u6709\u6b63\u5e38\u8fde\u63a5\u4e0a\u6765\uff0c\u8bf7\u5148\u6309\u4ee5\u4e0b\u6b65\u9aa4\u68c0\u67e5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bf7\u5c1d\u8bd5\u672c\u5730\u8fde\u63a5\uff0c\u5982\u679c\u4e0d\u884c\uff0c\u90a3\u4e48\u5c31\u662f\u670d\u52a1\u5668\u6709\u95ee\u9898"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u672c\u5730\u8fde\u63a5\u6b63\u5e38\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u5728\u9632\u706b\u5899\u4e2d\u653e\u884c\u7aef\u53e3"}),"\n",(0,r.jsx)(n.li,{children:"\u68c0\u67e5\u4f60\u5728\u8def\u7531\u5668\u4e2d\u662f\u5426\u628a\u8fd9\u4e2a\u7aef\u53e3\u516c\u5f00\u5230\u516c\u7f51"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6211\u6ca1\u516c\u7f51",children:"\u6211\u6ca1\u516c\u7f51"}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u770b ",(0,r.jsx)(n.a,{href:"https://yizhan.wiki/NitWikit/process/deploy/intranet-penetration",children:"\u5185\u7f51\u7a7f\u900f"})," \u90e8\u5206\uff0c\u6309\u7167\u4e0a\u9762\u7684\u6559\u7a0b\u628a\u4f60\u7684\u7aef\u53e3\u6620\u5c04\u51fa\u53bb"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var r=i(96540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);