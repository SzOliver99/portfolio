import{s as N,n as C,q as F,u as G,v as H,w as J,x as K}from"../chunks/scheduler.D0-KXVTE.js";import{S as O,i as T,e as $,t as M,c as b,k as w,l as P,d as _,b as d,A as V,j as U,f as h,B as Q,m as R,w as j,s as y,x as A,a as S,y as k,q as E,o as B,z as q}from"../chunks/index.DILkLGnt.js";import{w as W}from"../chunks/index.BIHKRLAX.js";const z=W("homeButton");function X(r){let e,t,s,i,f;return{c(){e=$("li"),t=$("a"),s=M(r[0]),this.h()},l(n){e=b(n,"LI",{class:!0});var o=w(e);t=b(o,"A",{class:!0,href:!0,rel:!0});var c=w(t);s=P(c,r[0]),c.forEach(_),o.forEach(_),this.h()},h(){d(t,"class","sidenav-link svelte-rvfe65"),d(t,"href",r[1]),d(t,"rel","prefetch"),V(t,"active",r[2]),d(e,"class","sidenav-item svelte-rvfe65")},m(n,o){U(n,e,o),h(e,t),h(t,s),i||(f=Q(t,"click",r[3]),i=!0)},p(n,[o]){o&1&&R(s,n[0]),o&2&&d(t,"href",n[1]),o&4&&V(t,"active",n[2])},i:C,o:C,d(n){n&&_(e),i=!1,f()}}}function Y(r,e,t){let{id:s}=e,{text:i}=e,{href:f}=e,n=!1;const o=z.subscribe(u=>{t(2,n=u===s)});function c(){z.set(s)}return F(()=>{o()}),r.$$set=u=>{"id"in u&&t(4,s=u.id),"text"in u&&t(0,i=u.text),"href"in u&&t(1,f=u.href)},[i,f,n,c,s]}class x extends O{constructor(e){super(),T(this,e,Y,X,N,{id:4,text:0,href:1})}}function Z(r){let e,t,s,i,f,n,o,c,u,v,p;i=new x({props:{id:"homeButton",text:"home",href:"/portfolio"}}),n=new x({props:{id:"aboutButton",text:"about",href:"/portfolio/about"}}),c=new x({props:{id:"projectsButton",text:"projects",href:"/portfolio/projects"}});const I=r[1].default,l=G(I,r,r[0],null);return{c(){e=$("div"),t=$("div"),s=$("ul"),j(i.$$.fragment),f=y(),j(n.$$.fragment),o=y(),j(c.$$.fragment),u=y(),v=$("section"),l&&l.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var m=w(e);t=b(m,"DIV",{class:!0});var D=w(t);s=b(D,"UL",{class:!0});var g=w(s);A(i.$$.fragment,g),f=S(g),A(n.$$.fragment,g),o=S(g),A(c.$$.fragment,g),g.forEach(_),D.forEach(_),u=S(m),v=b(m,"SECTION",{class:!0});var L=w(v);l&&l.l(L),L.forEach(_),m.forEach(_),this.h()},h(){d(s,"class","sidenav-list svelte-1ua9agn"),d(t,"class","sidebar svelte-1ua9agn"),d(v,"class","content svelte-1ua9agn"),d(e,"class","app svelte-1ua9agn")},m(a,m){U(a,e,m),h(e,t),h(t,s),k(i,s,null),h(s,f),k(n,s,null),h(s,o),k(c,s,null),h(e,u),h(e,v),l&&l.m(v,null),p=!0},p(a,[m]){l&&l.p&&(!p||m&1)&&H(l,I,a,a[0],p?K(I,a[0],m,null):J(a[0]),null)},i(a){p||(E(i.$$.fragment,a),E(n.$$.fragment,a),E(c.$$.fragment,a),E(l,a),p=!0)},o(a){B(i.$$.fragment,a),B(n.$$.fragment,a),B(c.$$.fragment,a),B(l,a),p=!1},d(a){a&&_(e),q(i),q(n),q(c),l&&l.d(a)}}}function ee(r,e,t){let{$$slots:s={},$$scope:i}=e;return r.$$set=f=>{"$$scope"in f&&t(0,i=f.$$scope)},[i,s]}class ne extends O{constructor(e){super(),T(this,e,ee,Z,N,{})}}export{ne as component};