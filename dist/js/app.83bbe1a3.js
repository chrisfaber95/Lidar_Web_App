(function(e){function t(t){for(var a,o,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7d1794c8"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"05a8e7a1"}[e]+".css",r=s.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===r))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===a||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{attrs:{id:"app1"}},[n("Header"),n("v-main",[n("router-view")],1)],1)])},r=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"nav",staticClass:"header",class:e.menu,attrs:{id:"mainnav"}},[e._m(0),n("div",{staticClass:"nav"},[n("div",{attrs:{id:"hidemenu"}},[e.menuopen?n("b-button",{on:{click:e.closemenu}},[e._v("<<<")]):e._e(),e.menuopen?e._e():n("b-button",{on:{click:e.closemenu}},[e._v(">>>")])],1),e.menuopen?n("div",{attrs:{id:"navigation"}},[n("b-navbar-nav",[n("router-link",{attrs:{to:"/",tag:"b-nav-item"}},[e._v("Dashboard")]),n("router-link",{attrs:{to:"/rapportage",tag:"b-nav-item"}},[e._v("Rapportage")])],1)],1):e._e()]),n("div",{attrs:{id:"logout"}},[e.menuopen?n("router-link",{attrs:{to:"/logout",tag:"b-nav-item"}},[e._v("Naam.........Uitloggen")]):e._e()],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("Lidar")])])}],s={name:"Header",props:{},data:function(){return{menuopen:!0,menu:"openmenu"}},methods:{closemenu:function(){switch(this.menuopen){case!0:this.menu="closedmenu",this.menuopen=!1;break;case!1:this.menu="openmenu",this.menuopen=!0;break}}}},c=s,l=(n("7638"),n("e8c8"),n("2877")),f=Object(l["a"])(c,u,i,!1,null,"31237db6",null),d=f.exports,p={name:"App",components:{Header:d},data:function(){return{}}},m=p,h=(n("034f"),n("6544")),g=n.n(h),v=n("7496"),b=n("f6c4"),S=Object(l["a"])(m,o,r,!1,null,null,null),_=S.exports;g()(S,{VApp:v["a"],VMain:b["a"]});var y=n("a18c"),I=n("2f62");a["default"].use(I["a"]);var w=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=(n("4989"),n("5f5b")),O=(n("f9e3"),n("2dd8"),n("1321")),A=n.n(O),j=n("859b"),x=n.n(j),E=(n("c0da"),n("2347")),P=n.n(E),N=n("af52"),C=n.n(N),D=n("f309");a["default"].use(D["a"]);var q=new D["a"]({});a["default"].component("downloadCsv",P.a),a["default"].use(x.a),a["default"].use(C.a),a["default"].use(A.a),a["default"].component("apexchart",A.a),a["default"].config.productionTip=!1,a["default"].use(k["a"]),new a["default"]({router:y["a"],store:w,vuetify:q,render:function(e){return e(_)}}).$mount("#app")},"577f":function(e,t,n){},7638:function(e,t,n){"use strict";n("577f")},"85ec":function(e,t,n){},"9ef4":function(e,t,n){"use strict";var a=n("b38e"),o=n("a18c");t["a"]={user:{authenticated:!1,info:{email:"",userinfo:[]},permissions:1,language_code:"en"},login:function(e,t){var n={email:e,pass:t};localStorage.setItem("access_token","tijdelijke access code"),localStorage.setItem("expires",Date.now()+1e4),localStorage.setItem("info",n.email),this.user.authenticated=!0,o["a"].push("dashboard")},logout:function(){this.user.authenticated=!1,this.user.info.email="",this.user.info.userinfo=[],localStorage.clear(),o["a"].push("login")},register:function(e,t){var n={email:e,pass:t};a["a"].post("user/add",n).then((function(){})).catch((function(e){console.log(e)}))},isAuthenticated:function(){return 1==this.authenticated?!!(localStorage.getItem("expires")>Date.now()&&localStorage.getItem("access_token"))||(this.authenticated=!1,!1):!!(localStorage.getItem("expires")>Date.now()&&localStorage.getItem("access_token"))&&(this.authenticated=!0,!0)},isAdmin:function(){return 1==this.authenticated?!(!(localStorage.getItem("expires")>Date.now()&&localStorage.getItem("access_token"))||2!=localStorage.getItem("permissions")&&5!=localStorage.getItem("permissions"))||(this.authenticated=!1,!1):!(!(localStorage.getItem("expires")>Date.now()&&localStorage.getItem("access_token"))||2!=localStorage.getItem("permissions")&&5!=localStorage.getItem("permissions"))&&(this.authenticated=!0,!0)},updateInfo:function(){var e=this,t=JSON.parse(localStorage.getItem("userinfo")),n=JSON.parse(localStorage.getItem("id_token"));a["a"].put("user/update/"+n,t).then((function(t){localStorage.setItem("userinfo",JSON.stringify(t.data.user)),e.user.info.userinfo=JSON.parse(localStorage.getItem("userinfo"))})).catch((function(e){console.log(e)}))},getInfo:function(){var e=this,t=localStorage.getItem("id_token");a["a"].get("user/"+t).then((function(t){localStorage.setItem("userinfo",JSON.stringify(t.data.user)),e.user.info.userinfo=JSON.parse(localStorage.getItem("userinfo"))})).catch((function(e){console.log(e)}))},showInfo:function(){return this.user.info.userinfo},getPermission:function(){return localStorage.getItem("permissions")},getId:function(){return localStorage.getItem("id_token")}}},a18c:function(e,t,n){"use strict";n("45fc"),n("d3b7");var a=n("2b0e"),o=n("8c4f"),r=n("9ef4");a["default"].use(o["a"]);var u=[{path:"/",name:"Dashboard",component:function(){return n.e("about").then(n.bind(null,"7277"))},meta:{requiresAuth:!1}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("about").then(n.bind(null,"7277"))},meta:{requiresAuth:!1}},{path:"/rapportage",name:"Rapportage",component:function(){return n.e("about").then(n.bind(null,"871b"))},meta:{requiresAuth:!1}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}}],i=new o["a"]({mode:"history",base:"/",routes:u});i.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?r["a"].isAuthenticated()?n():n({path:"/login",query:{redirect:e.fullPath}}):e.matched.some((function(e){return e.meta.requiresAdmin}))?r["a"].isAdmin()?n():n({path:"/dashboard",query:{redirect:e.fullPath}}):n()})),t["a"]=i},b38e:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("bc3a"),o=n.n(a),r=o.a.create({baseURL:"http://217.104.40.222:5000/",headers:{}})},ddcc:function(e,t,n){},e8c8:function(e,t,n){"use strict";n("ddcc")}});
//# sourceMappingURL=app.83bbe1a3.js.map