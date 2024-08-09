"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[4425],{41795:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=i(74848),a=i(28453);const s={title:"\u6570\u636e\u5e93\u76f8\u5173",slug:"/database",sidebar_position:2},r="\u6570\u636e\u5e93\u76f8\u5173",d={id:"advance/database/database",title:"\u6570\u636e\u5e93\u76f8\u5173",description:"\u6570\u636e\u5e93\u597d\u5904\u90fd\u6709\u5565? \u8c01\u8bf4\u5bf9\u4e86\u5c31\u7ed9\u4ed6!",source:"@site/docs/advance/database/database.md",sourceDirName:"advance/database",slug:"/database",permalink:"/NitWikit/database",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/database/database.md",tags:[],version:"current",lastUpdatedBy:"SB-Reborn",lastUpdatedAt:1723221997e3,sidebarPosition:2,frontMatter:{title:"\u6570\u636e\u5e93\u76f8\u5173",slug:"/database",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u52a8\u5907\u4efd\u5b58\u6863",permalink:"/NitWikit/advance/Linux/backup"},next:{title:"\u5b89\u88c5",permalink:"/NitWikit/database/install"}},l={},o=[{value:"Redis",id:"redis",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u6570\u636e\u5e93\u76f8\u5173",children:"\u6570\u636e\u5e93\u76f8\u5173"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"\u6570\u636e\u5e93\u597d\u5904\u90fd\u6709\u5565? \u8c01\u8bf4\u5bf9\u4e86\u5c31\u7ed9\u4ed6!"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5e93\u7684\u5907\u4efd\u7ef4\u62a4\u7b49\u6240\u5360\u7528\u7684\u65f6\u95f4\u8fdc\u6bd4\u5c06\u6574\u4e2a\u670d\u52a1\u5668\u505c\u6b62\u540e\u6253\u5305\u538b\u7f29\u5907\u4efd\u5feb\u5f97\u591a;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u540c\u6837\u7684\u6570\u636e\u91cf\uff0c MySQL \u6bd4 yml/txt/sqlite \u7b49\u5360\u7528\u4e5f\u5c0f\u5f97\u591a.\u7279\u522b\u662f\u5bf9\u4e8e\u6570\u636e\u91cf\u5927\u7684\u63d2\u4ef6(30Gb \u7684 dynmap \u6587\u4ef6\u4f7f\u7528 MySQL \u540e\u6574\u4e2a\u6570\u636e\u5e93\u5c06\u538b\u7f29\u5230 15Gb);"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8bfb\u53d6\u901f\u5ea6\u5feb\uff0c \u67d0\u4e9b\u63d2\u4ef6\u4f7f\u7528 yml \u50a8\u5b58\u6570\u636e\u65f6\u542f\u52a8\u4e00\u4e2a\u63d2\u4ef6\u751a\u81f3\u9700\u8981 10s+\uff0c \u6362\u7528 mysql \u540e\u670d\u52a1\u5668\u542f\u52a8\u901f\u5ea6\u5feb;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Redis/MySQL \u7b49\u6570\u636e\u5e93\u914d\u5408\u53ef\u8f7b\u677e\u5b8c\u6210\u73a9\u5bb6\u6570\u636e\u540c\u6b65\u7b49;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728\u6570\u636e\u91cf\u8f83\u5927\u65f6\u5019\u76f8\u8f83 sqlite \u6709\u66f4\u597d\u7684\u6027\u80fd\uff0c \u67e5\u8be2\u65f6\u9700\u8981\u7684\u65f6\u95f4\u77ed\uff0c \u7279\u522b\u662f\u67d0\u4e9b\u7ecf\u6d4e\u63d2\u4ef6\u4ed8\u6b3e\u65f6\u907f\u514d\u987f\u5361."}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h1,{id:"mysql--mariadb",children:"MySQL / MariaDB"}),"\n",(0,t.jsx)(n.p,{children:"MariaDB \u662f\u8457\u540d\u7684 MySQL \u5206\u53c9\uff0c\u53ea\u662f\u670d\u52a1\u5668\u8150\u7af9\u7684\u8bdd\uff0c\u4f60\u53ea\u9700\u8981\u77e5\u9053\u8fd9\u4e24\u4e2a\u4e1c\u897f\u5dee\u4e0d\u591a\u5c31\u597d\u4e86"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"\u5f53 MariaDB Server \u7684\u524d\u8eab MySQL \u4e8e 2009 \u5e74\u88ab Oracle \u6536\u8d2d\u65f6\uff0cMySQL \u521b\u59cb\u4eba Michael \u201cMonty\u201d Widenius \u51fa\u4e8e\u5bf9 Oracle \u7ba1\u7406\u6743\u7684\u62c5\u5fe7\u800c\u5206\u53c9\u4e86\u8be5\u9879\u76ee\uff0c\u5e76\u5c06\u65b0\u9879\u76ee\u547d\u540d\u4e3a MariaDB\u3002"}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6765\u81ea ",(0,t.jsx)(n.a,{href:"https://mariadb.org/zh/",children:"https://mariadb.org/zh/"})]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"redis",children:"Redis"}),"\n",(0,t.jsx)(n.p,{children:"TODO"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);