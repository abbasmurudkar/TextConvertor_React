(this.webpackJsonptext_convertor=this.webpackJsonptext_convertor||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),r=c.n(s),l=(c(11),c(2)),o=(c(12),c(0)),i=function(e){var t={cursor:"pointer"};return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.nav}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsx)("ul",{className:"navbar-nav",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{style:t,className:"form-check-input ",onClick:e.changemode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsxs)("label",{style:t,className:"form-check-label ",htmlFor:"flexSwitchCheckDefault",children:[e.mode," mode"]})]})]})})})},b=c(4),d=c.n(b),h=c(6),j=function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],r=function(){var t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=6;break}return t.next=3,navigator.clipboard.writeText(a);case 3:e.showalert(":Copied Text!","success"),t.next=7;break;case 6:e.showalert(":Copied Unsuccesfull Text!","warning");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsxs)("div",{className:"container my-4",children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("h2",{children:"ENTER THE TEXT "}),Object(o.jsx)("textarea",{className:"form-control",value:a,style:{backgroundColor:"light"===e.mode?"white":"#011e48",color:"light"===e.mode?"black":"white"},onChange:function(e){s(e.target.value)},id:"txt-area",rows:"6"})]}),Object(o.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"danger":"primary"," btn-sm mx-2"),onClick:function(){if(a){s(""),e.showalert(":Text Cleared!","success")}else e.showalert(": No Text to clear!","warning")},children:"CLEAR TEXT"}),Object(o.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"info":"primary"," btn-sm mx-2"),onClick:function(){if(a){var t=a.toUpperCase();s(t),e.showalert(":Converted to Uppercase","success")}else e.showalert(": Unsuccesfull to Uppercase!","warning")},children:"TEXT UPPERCASE"}),Object(o.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"dark":"primary"," btn-sm mx-2"),onClick:r,children:"COPY TEXT"}),Object(o.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"warning":"primary"," btn-sm mx-2"),onClick:function(){if(a){var t=a.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" ");s(t),e.showalert(":Converted to Titlecase","success")}else e.showalert(": Unsuccesfull to TittleCase!","warning")},children:"TITLE CASE"}),Object(o.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"success":"primary"," btn-sm mx-2"),onClick:function(){if(a){var t=a.toLowerCase();s(t),e.showalert(":Converted to lowercase!","success")}else e.showalert(": Unsuccesfull to Lowercase!","warning")},children:"TEXT LOWERCASE"}),Object(o.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"secondary":"primary"," btn-sm mx-2"),onClick:function(){if(a){var t=a.split(/[ ]+/);s(t.join(" ")),e.showalert(":Removed Extra Spaces","success")}else e.showalert(": Plzz enter the text to remove space","warning")},children:"REMOVE EXTRA SPACE"}),Object(o.jsx)("p",{})]}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("h2",{children:"TEXT DATA"}),Object(o.jsxs)("p",{children:["WORDS:- ",a.split(" ").length-1," CHARACTERS:- ",a.length]}),Object(o.jsxs)("p",{children:["MINTUES FOR READING THE CONTENT:-",.008*a.split(" ").length,"min"]}),Object(o.jsx)("h2",{children:"PREVIEW"}),Object(o.jsx)("p",{children:a.length>0?a:"Plz enter the text to preview it here"})]})})]})};var u=function(e){return e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade-in-down"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," ",e.alert.msg]})})};var m=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),b=r[0],d=r[1],h=function(e,t){d({msg:e,type:t}),setTimeout((function(){d(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{nav:"TEXT CONVERTOR",about:"About",mode:c,changemode:function(){"light"===c?(a("dark"),document.body.style.backgroundColor="#011e48",h(":DARK MODE ENABLE","success"),document.title="TEXT-CONVERTOR Dark-mode"):(a("light"),document.body.style.backgroundColor="white",h(":LIGHT MODE ENABLE","success"),document.title="TEXT-CONVERTOR")}}),Object(o.jsx)(u,{alert:b}),Object(o.jsx)(j,{mode:c,showalert:h})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.c32d4860.chunk.js.map