(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{259:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3jrJn"}},260:function(e,s,a){e.exports={DialogItem:"Dialog_DialogItem__1gNiF",Dialog:"Dialog_Dialog__epEZf",active:"Dialog_active__3ntNE"}},261:function(e,s,a){e.exports={message:"Message_message__LXutO",MessageMyLine:"Message_MessageMyLine__1zkU7",MessageSomeoneLine:"Message_MessageSomeoneLine__2u3zt"}},268:function(e,s,a){"use strict";a.r(s);a(0);var n=a(259),t=a.n(n),i=a(260),c=a.n(i),o=a(7),g=a(1),r=function(e){var s="/dialogs/"+e.id;return Object(g.jsx)("div",{className:c.a.Dialog+" "+c.a.active,children:Object(g.jsx)(o.b,{to:s,children:e.name})})},d=function(e){var s=e.dialogs.map((function(e){return Object(g.jsx)(r,{name:e.name,id:e.id},e.id)}));return Object(g.jsx)("div",{className:c.a.DialogItem,children:s})},u=a(17),l=Object(u.b)((function(e){return{dialogs:e.DialogPage.dialogs}}),(function(e){return{}}))(d),j=a(51),m=a(261),b=a.n(m),x=a(114),M=a(115),O=M.a().shape({newMessageText:M.b().max(50,"Too Long!").required("Required")}),f=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(x.c,{initialValues:{newMessageText:""},validationSchema:O,onSubmit:function(s){e.addNewMessage(s)},children:function(e){var s=e.errors,a=e.touched;return Object(g.jsxs)(x.b,{children:[Object(g.jsx)(x.a,{type:"text",name:"newMessageText"}),a.newMessageText&&s.newMessageText&&Object(g.jsx)("div",{children:s.newMessageText}),Object(g.jsx)("button",{type:"submit",children:"Submit"})]})}})})},_=function(e){return Object(g.jsx)("div",{className:b.a.message,children:e.message})},h=function(e){var s=e.messages.map((function(e){return Object(g.jsx)(_,{message:e.message},e.id)}));return Object(g.jsxs)("div",{className:b.a.message,children:[Object(g.jsx)("div",{className:b.a.MessageSomeoneLine,children:s}),Object(g.jsx)("div",{className:b.a.MessageMyLine,children:Object(g.jsx)(f,{addNewMessage:function(s){e.addMessage(s.newMessageText)}})})]})},p=Object(u.b)((function(e){return{messages:e.DialogPage.messages,newMessageText:e.DialogPage.newMessageText}}),(function(e){return{addMessage:function(s){e(Object(j.a)(s))}}}))(h);s.default=function(e){return Object(g.jsxs)("div",{className:t.a.dialogs,children:[Object(g.jsx)(l,{}),Object(g.jsx)(p,{})]})}}}]);
//# sourceMappingURL=6.dccfdc2d.chunk.js.map