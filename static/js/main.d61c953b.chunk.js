(this.webpackJsonploginapp=this.webpackJsonploginapp||[]).push([[0],{16:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),o=t(20),r=t.n(o),s=(t(27),t(28),t(11)),i=t(7),l=t(13),d=t(1);var j=function(e){var n=e.caption,t=e.type,c=e.id,a=e.name,o=e.onChange,r=e.value;return Object(d.jsx)("section",{children:Object(d.jsx)("input",{className:["my-2","rounded-lg","p-2"," w-full","border-b-2","border-red-900"].join(" "),type:t,id:c,placeholder:n,name:a,onChange:o,value:r})})};var u=function(e){var n=e.children,t=e.rutaDeImagen;return Object(d.jsxs)("form",{className:["h-100","p-5","w-96"].join(" "),children:[Object(d.jsx)("section",{className:["flex","flex-col","items-center"].join(" "),children:Object(d.jsx)("img",{src:t})}),n]})};var b=function(e){var n=e.caption,t=e.onClick;return Object(d.jsx)("button",{className:["my-2","rounded-lg","p-2"," w-full","bg-red-900","text-white"].join(" "),onClick:t,children:n})},p=t(2);var f=function(){var e=Object(c.useState)({username:"",password:""}),n=Object(l.a)(e,2),t=n[0],a=n[1],o=function(e){var n,c=e.currentTarget,o=c.name,r=c.value;a(Object(i.a)(Object(i.a)({},t),{},(n={},Object(s.a)(n,o,r),Object(s.a)(n,o+"Error",console.error),n))),console.log(t)},r=Object(p.f)();return Object(d.jsxs)(u,{rutaDeImagen:"https://raw.githubusercontent.com/aldoorivera/LoginApp/master/src/Img/Letra%20A.png",children:[Object(d.jsx)(j,{caption:"Usuario",type:"text",id:"username",name:"username",value:t.username,onChange:o}),Object(d.jsx)(j,{caption:"Contrase\xf1a",type:"password",id:"password",name:"password",value:t.password,onChange:o}),Object(d.jsx)(b,{caption:"Iniciar",onClick:function(e){e.preventDefault(),e.stopPropagation();var n=t.username,c=t.password;c&&(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/.test(c)?function(e){r.push("/Todo"),alert("!Bievenido ".concat(e,"!"))}(n):alert("Contrase\xf1a Inv\xe1lida"))}})]})},x=t(10);var m=function(e){var n=e.etiqueta,t=e.enlace;return Object(d.jsx)("li",{children:Object(d.jsx)(x.b,{to:t,children:n})})};t(35);var O=function(){var e=[{etiqueta:"Cerrar sesion",enlace:"/"}].map((function(e,n){return Object(d.jsx)(m,{etiqueta:e.etiqueta,enlace:e.enlace},n)}));return Object(d.jsxs)("nav",{children:[Object(d.jsx)("h1",{className:"font-bold",children:"Cosas por realizar."}),Object(d.jsx)("ul",{children:e})]})},v=t(12);t(16);var h=function(e){var n=e.onChange,t=e.value,c=e.addTodo;return Object(d.jsxs)("section",{className:["p-5","m-5","flex","items-center","flex-row","w-full"].join(" "),children:[Object(d.jsx)(v.a,{size:"4rem",color:"#fff",onClick:c}),Object(d.jsx)(j,{caption:"Escribe tu nota.",type:"text",id:"TareaId",name:"TareaName",onChange:n,value:t,onKeyUp:function(e){13==e.keyCode&&c(e)}})]})};function g(e){var n=e.descripcion,t=e.id,c=e.completed,a=e.doneHandler,o=e.deleteHandler,r=c?" striked":" ";return Object(d.jsxs)("li",{className:[" flex"," items-center","my-3 ","p-3"," flex-row","w-full"].join(" "),children:[Object(d.jsx)(v.b,{color:"#fff",size:"2rem",onClick:function(){o(t)}}),Object(d.jsx)(v.c,{color:"#fff",size:"2rem",onClick:function(){a(t)}}),Object(d.jsx)("p",{className:"text-2xl mx-2 text-white"+r,children:n})]})}var w=function(e){var n=e.toDos,t=e.doneHandler,c=e.deleteHandler,a=n.map((function(e){return Object(d.jsx)(g,{descripcion:e.description,id:e.id,completed:e.completed,doneHandler:t,deleteHandler:c},e.doneHandlerid)}));return Object(d.jsx)("section",{className:" w-full",children:Object(d.jsx)("ul",{children:a})})};var C=function(){var e=Object(c.useState)({todos:[],nuevaToDo:""}),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(d.jsxs)("div",{className:"Fondo",children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"flex flex-col items-center py-20 md:px-60 px-5 w-full",children:[Object(d.jsx)(h,{onChange:function(e){var n=e.currentTarget.value;a(Object(i.a)(Object(i.a)({},t),{},{nuevaToDo:n})),console.log(t)},value:t.nuevaToDo,addTodo:function(){var e={description:t.nuevaToDo,completed:!1,id:(new Date).getTime()},n=t.todos;n.push(e),a({todos:n,nuevaToDo:""})}}),Object(d.jsx)(w,{toDos:t.todos,doneHandler:function(e){var n=t.todos.map((function(n){return n.id===e&&(n.completed=!n.completed),n}));a(Object(i.a)(Object(i.a)({},t),{},{todos:n}))},deleteHandler:function(e){var n=t.todos.filter((function(n){return n.id!==e}));a(Object(i.a)(Object(i.a)({},t),{},{todos:n}))}})]})]})};var T=function(){return Object(d.jsx)(x.a,{basename:"/LoginApp",children:Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{exact:!0,path:"/Todo",children:Object(d.jsx)(C,{})}),Object(d.jsx)(p.a,{exact:!0,path:"/",children:Object(d.jsx)("div",{className:["App","flex","justify-center","items-center","p-5"].join(" "),children:Object(d.jsx)(f,{})})})]})})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.d61c953b.chunk.js.map