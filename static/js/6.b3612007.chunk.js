(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{259:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3jrJn"}},260:function(e,s,a){e.exports={dialogItem:"Dialog_dialogItem__17HD1",dialog:"Dialog_dialog__3QFW0",active:"Dialog_active__3ntNE",Dialog:"Dialog_Dialog__epEZf"}},261:function(e,s,a){e.exports={message:"Message_message__LXutO",MessageMyLine:"Message_MessageMyLine__1zkU7",MessageSomeoneLine:"Message_MessageSomeoneLine__2u3zt"}},268:function(e,s,a){"use strict";a.r(s);a(0);var n=a(259),t=a.n(n),i=a(260),c=a.n(i),o=a(9),g=a(1),r=function(e){var s="/dialogs/"+e.id;return Object(g.jsx)("div",{className:c.a.dialog,children:Object(g.jsx)(o.b,{to:s,activeClassName:c.a.active,children:e.name})})},d=function(e){var s=e.dialogs.map((function(e){return Object(g.jsx)(r,{name:e.name,id:e.id},e.id)}));return Object(g.jsx)("div",{className:c.a.dialogItem,children:s})},l=a(17),u=Object(l.b)((function(e){return{dialogs:e.DialogPage.dialogs}}),(function(e){return{}}))(d),j=a(51),m=a(261),b=a.n(m),x=a(102),M=a(103),_=M.a().shape({newMessageText:M.b().max(50,"Too Long!").required("Required")}),O=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(x.c,{initialValues:{newMessageText:""},validationSchema:_,onSubmit:function(s){e.addNewMessage(s)},children:function(e){var s=e.errors,a=e.touched;return Object(g.jsxs)(x.b,{children:[Object(g.jsx)(x.a,{type:"text",name:"newMessageText"}),a.newMessageText&&s.newMessageText&&Object(g.jsx)("div",{children:s.newMessageText}),Object(g.jsx)("button",{type:"submit",children:"Submit"})]})}})})},f=function(e){return Object(g.jsx)("div",{className:b.a.message,children:e.message})},h=function(e){var s=e.messages.map((function(e){return Object(g.jsx)(f,{message:e.message},e.id)}));return Object(g.jsxs)("div",{className:b.a.message,children:[Object(g.jsx)("div",{className:b.a.MessageSomeoneLine,children:s}),Object(g.jsx)("div",{className:b.a.MessageMyLine,children:Object(g.jsx)(O,{addNewMessage:function(s){e.addMessage(s.newMessageText)}})})]})},v=Object(l.b)((function(e){return{messages:e.DialogPage.messages,newMessageText:e.DialogPage.newMessageText}}),(function(e){return{addMessage:function(s){e(Object(j.a)(s))}}}))(h);s.default=function(e){return Object(g.jsxs)("div",{className:t.a.dialogs,children:[Object(g.jsx)(u,{}),Object(g.jsx)(v,{})]})}}}]);
//# sourceMappingURL=6.b3612007.chunk.js.map