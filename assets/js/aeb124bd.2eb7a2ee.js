"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[4098],{46272:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=r(86070),t=r(11100);const o={title:"\u5185\u7f51\u7a7f\u900f",sidebar_position:5},l="\u5185\u7f51\u7a7f\u900f",s={id:"process/deploy/intranet-penetration",title:"\u5185\u7f51\u7a7f\u900f",description:"\u9002\u7528\u4e8e\uff1f",source:"@site/docs/process/deploy/intranet-penetration.md",sourceDirName:"process/deploy",slug:"/process/deploy/intranet-penetration",permalink:"/NitWikit/process/deploy/intranet-penetration",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/process/deploy/intranet-penetration.md",tags:[],version:"current",lastUpdatedBy:"postyizhan",lastUpdatedAt:17276972e5,sidebarPosition:5,frontMatter:{title:"\u5185\u7f51\u7a7f\u900f",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u7533\u8bf7\u516c\u7f51IP",permalink:"/NitWikit/process/deploy/apply-for-public-ip-address"},next:{title:"\u642d\u5efa\u9762\u677f",permalink:"/NitWikit/process/dashboard"}},p={},d=[{value:"\u53ef\u80fd\u7684\u95ee\u9898?",id:"\u53ef\u80fd\u7684\u95ee\u9898",level:2},{value:"\u767b\u5f55\u63d2\u4ef6",id:"\u767b\u5f55\u63d2\u4ef6",level:3},{value:"\u73a9\u5bb6\u6ce8\u518c",id:"\u73a9\u5bb6\u6ce8\u518c",level:4},{value:"\u81ea\u52a8\u767b\u5f55",id:"\u81ea\u52a8\u767b\u5f55",level:4},{value:"\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730",id:"\u663e\u793a\u73a9\u5bb6-ip-\u5f52\u5c5e\u5730",level:3},{value:"ban-ip ban\u6389\u6240\u6709\u4eba",id:"ban-ip-ban\u6389\u6240\u6709\u4eba",level:3},{value:"\u53cd\u5047\u4eba\u63d2\u4ef6",id:"\u53cd\u5047\u4eba\u63d2\u4ef6",level:3},{value:"\u89e3\u51b3\u4ee5\u4e0a\u65e0\u6cd5\u663e\u793aIP\u5730\u5740\u7684\u529e\u6cd5\uff1aproxy protocol",id:"\u89e3\u51b3\u4ee5\u4e0a\u65e0\u6cd5\u663e\u793aip\u5730\u5740\u7684\u529e\u6cd5proxy-protocol",level:3}];function c(e){const n={a:"a",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u5185\u7f51\u7a7f\u900f",children:"\u5185\u7f51\u7a7f\u900f"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u9002\u7528\u4e8e\uff1f"})}),"\n",(0,i.jsx)(n.p,{children:"\u6ca1\u6709\u516c\u7f51\u7684\u5bb6\u91cc\u4e91"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6765\u51e0\u4e2a\uff1f"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5185\u7f51\u7a7f\u900f\u4e00\u6293\u4e00\u5927\u628a\uff0c\u6bd4\u5982",(0,i.jsx)(n.a,{href:"https://www.natfrp.com/",children:"\u6a31\u82b1\u5185\u7f51\u7a7f\u900f"}),"\u548c",(0,i.jsx)(n.a,{href:"https://www.openfrp.net/",children:"OpenFrp"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.del,{children:"\u56e0\u4e3arz\u7528\u6237\u6bd4\u8f83\u591a\uff0c\u4f60\u751a\u81f3\u80fd\u7528\u67d0\u4eba\u7528\u4e0d\u7528\u6a31\u82b1\u6765\u5b9a\u6027\u5224\u65ad\u8fd9\u4eba\u6709\u6ca1\u6709\u6280\u672f"})}),"\n",(0,i.jsxs)(n.p,{children:["Linux\u81ea\u5efafrp\u53c2\u89c1",(0,i.jsx)(n.a,{href:"/advance/Linux/frp",children:"\u6b64\u9875\u9762"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u53ef\u80fd\u7684\u95ee\u9898",children:"\u53ef\u80fd\u7684\u95ee\u9898?"}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u7f51\u7a7f\u900f\u540e\u76f8\u5f53\u4e8e\u73a9\u5bb6\u7684\u8fde\u63a5\u4f20\u9012\u5230\u4e86\u4f60\u673a\u5668\u4e0a\u7684\u8f6f\u4ef6\u4e0a\uff0c\u7528\u8fd9\u4e2a\u8f6f\u4ef6\u8bbf\u95ee\u672c\u5730\u7684\u670d\u52a1\u7aef(\u7c7b\u4f3c\u4ee3\u7406)\uff0c\u670d\u52a1\u7aef\u5c31\u4f1a\u8bef\u8ba4\u4e3a\u662f\u672c\u5730\u8fde\u63a5\u8bbf\u95ee\u4e86\u670d\u52a1\u5668\uff0c\u5c31\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"\u767b\u5f55\u63d2\u4ef6",children:"\u767b\u5f55\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.h4,{id:"\u73a9\u5bb6\u6ce8\u518c",children:"\u73a9\u5bb6\u6ce8\u518c"}),"\n",(0,i.jsx)(n.p,{children:"\u652f\u6301 IP \u9650\u5236\u6ce8\u518c\u8d26\u53f7\u7684\u767b\u5f55\u63d2\u4ef6(\u5982 Authme \u3001CMI )\u4f1a\u51fa\u95ee\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5185\u7f51\u7a7f\u900f\u7684\u8bdd\uff0c\u4ed6\u4eec\u7684 IP \u5730\u5740\u90fd\u662f\u56de\u73af\u5730\u5740\uff0c\u6240\u4ee5\u4ed6\u4eec\u4e0d\u80fd\u6ce8\u518c\u8d26\u53f7\u4e86"}),"\n",(0,i.jsx)(n.h4,{id:"\u81ea\u52a8\u767b\u5f55",children:"\u81ea\u52a8\u767b\u5f55"}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u529f\u80fd\u4f9d\u9760 IP \u8fdb\u884c\u8bc6\u522b\uff0c\u5982\u679c\u5185\u7f51\u7a7f\u900f\u7684\u8bdd\uff0c\u666e\u901a\u73a9\u5bb6\u548c OP \u73a9\u5bb6\u7684 IP \u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,i.jsx)(n.p,{children:"\u5c31\u51fa\u73b0\u4e86\u73a9\u5bb6\u767b\u5f55 OP \u8d26\u53f7\u7b49 \u201c\u7ed5\u8fc7\u767b\u5f55\u6f0f\u6d1e\u201d"}),"\n",(0,i.jsx)(n.h3,{id:"\u663e\u793a\u73a9\u5bb6-ip-\u5f52\u5c5e\u5730",children:"\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e9b\u53ef\u4ee5\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730\u7684\u63d2\u4ef6\u4f1a\u5931\u6548"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a\u4ed6\u4eec\u7684 IP \u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,i.jsx)(n.h3,{id:"ban-ip-ban\u6389\u6240\u6709\u4eba",children:"ban-ip ban\u6389\u6240\u6709\u4eba"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a\u4f60\u4eec\u7684\u5730\u5740\u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5\u4f60 ban-ip \u4f1a ban \u6389\u6240\u6709\u4eba\uff0c\u5305\u62ec\u4f60\u81ea\u5df1......"}),"\n",(0,i.jsx)(n.h3,{id:"\u53cd\u5047\u4eba\u63d2\u4ef6",children:"\u53cd\u5047\u4eba\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4f1a\u5bfc\u81f4\u53cd\u5047\u4eba\u63d2\u4ef6\u51e0\u4e4e\u4e0d\u80fd\u4f7f\u7528\uff0c\u56e0\u4e3a\u65e0\u8bba\u662f\u5c01\u7981 IP \u8fd8\u662f IP \u767d\u540d\u5355\u90fd\u4f1a\u56e0\u4e3a\u6240\u6709\u73a9\u5bb6 IP \u76f8\u540c\u800c\u5931\u6548\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u4ee5\u4e0a\u65e0\u6cd5\u663e\u793aip\u5730\u5740\u7684\u529e\u6cd5proxy-protocol",children:"\u89e3\u51b3\u4ee5\u4e0a\u65e0\u6cd5\u663e\u793aIP\u5730\u5740\u7684\u529e\u6cd5\uff1aproxy protocol"}),"\n",(0,i.jsxs)(n.p,{children:["\u6b63\u662f\u56e0\u4e3afrp\u5728\u8f6c\u53d1\u73a9\u5bb6\u8bf7\u6c42\u65f6\u91cd\u5199\u4e86\u8bf7\u6c42\u5934\u90e8\uff0c\u5bfc\u81f4\u4e86\u4ee5\u4e0a\u60c5\u51b5\u7684\u53d1\u751f\u3002 frp \u867d\u7136\u4e0d\u80fd\u4e0d\u91cd\u5199\u8fd9\u4e2a\u8bf7\u6c42\u5934\u90e8\uff0c\u4f46\u662f\u4ed6\u53ef\u4ee5\u901a\u8fc7\u4e00\u79cd\u65b9\u5f0f\u8fd8\u539f\u8bf7\u6c42\u5934\u90e8\uff0c\u8ba9\u670d\u52a1\u5668\u6b63\u5e38\u663e\u793a\u51fa\u8fde\u63a5 IP \u3002Proxy Protocol \u662f\u7531 HAProxy \u5f00\u53d1\u8005 Willy \u63d0\u51fa\u7684\u4e00\u79cd\u53cd\u5411\u4ee3\u7406\u534f\u8bae\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt",children:"HAProxy \u6587\u6863"})," \u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002frp \u5185\u7f6e\u7684 proxy protocol \u8981\u6c42\u88ab\u5176\u7a7f\u900f\u7684\u670d\u52a1\u5668\u4e5f\u652f\u6301 proxy protocol \uff0c\u5426\u5219\u4f1a\u9020\u6210\u5bf9\u5e94\u7684\u670d\u52a1\u65e0\u6cd5\u4f7f\u7528\uff0c\u6240\u4ee5\u5e76\u4e0d\u662f\u968f\u4fbf\u62ff\u4e00\u4e2a\u670d\u52a1\u5c31\u80fd\u7528 proxy protocol \u3002 frp \u542f\u7528 proxy protocol \u7684\u65b9\u5f0f\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/advance/Linux/frp",children:"Linux\u81ea\u5efafrp"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8emc\u670d\u52a1\u5668\u6765\u8bf4\uff0c\u652f\u6301 proxy protocol \u7684\u8f6f\u4ef6\u6709\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"bungeecord \u7cfb"}),"\n",(0,i.jsx)(n.li,{children:"paper \u5206\u652f(1.18.2)(\u4ec5\u652f\u6301v2)"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../../Java/process/mobile-player/Geyser/introduction/FAQ#frp%E6%90%AD%E5%BB%BA%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E6%83%B3%E6%98%BE%E7%A4%BA%E7%9C%9F%E5%AE%9Eip%E6%80%8E%E4%B9%88%E5%8A%9E",children:"Geyser"})}),"\n",(0,i.jsxs)(n.li,{children:["Spigot\u7aef\u63d2\u4ef6 ",(0,i.jsx)(n.a,{href:"https://github.com/andylizi/haproxy-detector",children:"HAProxyDetector"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7b49\u3002BDS \u670d\u52a1\u5668\u76ee\u524d\u4e0d\u652f\u6301\u6b64\u534f\u8bae\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11100:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var i=r(30758);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);