(this.webpackJsonptext_convertor=this.webpackJsonptext_convertor||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(16),l=c.n(n),o=(c(24),c(7)),r=(c(25),c(9)),i=c(0),d=function(e){var t={cursor:"pointer"};return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.nav}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/about",children:"About"})})]})}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{style:t,className:"form-check-input ",onClick:e.changemode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsxs)("label",{style:t,className:"form-check-label ",htmlFor:"flexSwitchCheckDefault",children:[e.mode," mode"]})]})]})})})};function h(e){var t=e.mode,c=e.nav,s=Object(a.useState)({color:"black",backgroundColor:"white",transition:"0.6s all ease-in-out"}),n=Object(o.a)(s,2),l=n[0],r=n[1],h=Object(a.useState)("Enabl Dark mode"),b=Object(o.a)(h,2),j=b[0],u=b[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{mode:t,nav:c}),Object(i.jsxs)("div",{className:"container my-4",style:l,children:[Object(i.jsx)("h2",{children:"About Us"}),Object(i.jsxs)("div",{className:"accordion accordion-flush",id:"accordionFlushExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"flush-headingOne",children:Object(i.jsx)("button",{style:l,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{style:l,id:"flush-collapseOne",className:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(i.jsx)("code",{children:".accordion-flush"})," class. This is the first item's accordion body."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"flush-headingTwo",children:Object(i.jsx)("button",{style:l,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{style:l,id:"flush-collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"flush-headingTwo","data-bs-parent":"#accordionFlushExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(i.jsx)("code",{children:".accordion-flush"})," class. This is the second item's accordion body. Let's imagine this being filled with some actual content."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"flush-headingThree",children:Object(i.jsx)("button",{style:l,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{style:l,id:"flush-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"flush-headingThree","data-bs-parent":"#accordionFlushExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(i.jsx)("code",{children:".accordion-flush"})," class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."]})})]})]}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("button",{onClick:function(){"black"===l.color?(r({color:"white",backgroundColor:"black",transition:"0.3s all ease-in-out"}),u("Enable Light mode")):(r({color:"black",backgroundColor:"white",transition:"0.3s all ease-in-out"}),u("Enable Dark mode"))},className:"btn btn-primary btn-sm my-3",children:j})})]})]})}var b=c(14),j=c.n(b),u=c(19),m=function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],n=c[1],l=function(){var t=Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!s){t.next=6;break}return t.next=3,navigator.clipboard.writeText(s);case 3:e.showalert(":Copied Text!","success"),t.next=7;break;case 6:e.showalert(":Copied Unsuccesfull Text!","warning");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.jsxs)("div",{style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsxs)("div",{className:"container my-4",children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("h2",{children:"ENTER THE TEXT "}),Object(i.jsx)("textarea",{className:"form-control",value:s,style:{backgroundColor:"light"===e.mode?"white":"#011e48",color:"light"===e.mode?"black":"white"},onChange:function(e){n(e.target.value)},id:"txt-area",rows:"6"})]}),Object(i.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"danger":"primary"," btn-sm mx-2"),onClick:function(){if(s){n(""),e.showalert(":Text Cleared!","success")}else e.showalert(": No Text to clear!","warning")},children:"CLEAR TEXT"}),Object(i.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"info":"primary"," btn-sm mx-2"),onClick:function(){if(s){var t=s.toUpperCase();n(t),e.showalert(":Converted to Uppercase","success")}else e.showalert(": Unsuccesfull to Uppercase!","warning")},children:"TEXT UPPERCASE"}),Object(i.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"dark":"primary"," btn-sm mx-2"),onClick:l,children:"COPY TEXT"}),Object(i.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"warning":"primary"," btn-sm mx-2"),onClick:function(){if(s){var t=s.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" ");n(t),e.showalert(":Converted to Titlecase","success")}else e.showalert(": Unsuccesfull to TittleCase!","warning")},children:"TITLE CASE"}),Object(i.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"success":"primary"," btn-sm mx-2"),onClick:function(){if(s){var t=s.toLowerCase();n(t),e.showalert(":Converted to lowercase!","success")}else e.showalert(": Unsuccesfull to Lowercase!","warning")},children:"TEXT LOWERCASE"}),Object(i.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"secondary":"primary"," btn-sm mx-2"),onClick:function(){if(s){var t=s.split(/[ ]+/);n(t.join(" ")),e.showalert(":Removed Extra Spaces","success")}else e.showalert(": Plzz enter the text to remove space","warning")},children:"REMOVE EXTRA SPACE"}),Object(i.jsx)("p",{})]}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("h2",{children:"TEXT DATA"}),Object(i.jsxs)("p",{children:["WORDS:- ",s.split(" ").length-1," CHARACTERS:- ",s.length]}),Object(i.jsxs)("p",{children:["MINTUES FOR READING THE CONTENT:-",.008*s.split(" ").length,"min"]}),Object(i.jsx)("h2",{children:"PREVIEW"}),Object(i.jsx)("p",{children:s.length>0?s:"Plz enter the text to preview it here"})]})})]})},x=c(2);var O=function(e){return e.alert&&Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade-in-down"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," ",e.alert.msg]})})};var p=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],s=t[1],n=function(){"light"===c?(s("dark"),document.body.style.backgroundColor="#011e48",p(":DARK MODE ENABLE","success"),document.title="TEXT-CONVERTOR Dark-mode"):(s("light"),document.body.style.backgroundColor="white",p(":LIGHT MODE ENABLE","success"),document.title="TEXT-CONVERTOR")},l=Object(a.useState)(null),b=Object(o.a)(l,2),j=b[0],u=b[1],p=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),2e3)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(x.c,{children:Object(i.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{nav:"TEXT CONVERTOR",about:"About",mode:c,changemode:n}),Object(i.jsx)(O,{alert:j}),Object(i.jsx)(m,{mode:c,showalert:p})]})}})}),Object(i.jsx)(x.c,{children:Object(i.jsx)(x.a,{exact:!0,path:"/about",children:Object(i.jsx)(h,{mode:c,nav:"TEXT CONVERTOR"})})})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.c3453601.chunk.js.map