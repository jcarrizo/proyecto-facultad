(this["webpackJsonpfac-app"]=this["webpackJsonpfac-app"]||[]).push([[0],{181:function(e,c,a){},183:function(e,c,a){},184:function(e,c,a){},187:function(e,c,a){},188:function(e,c,a){},189:function(e,c,a){},190:function(e,c,a){},191:function(e,c,a){},294:function(e,c,a){},295:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a.n(s),l=a(14),i=a.n(l),r=a(27),n=(a(180),a(173)),o=a(18),d=(a(181),a.p+"static/media/bannerodonto.82eddd42.png"),j=a(0),b=function(){var e=localStorage.getItem("nameUser"),c=localStorage.getItem("rolUser");return Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsxs)("div",{className:"container-sidebar",children:[Object(j.jsx)("img",{className:"mt-2",src:d,width:"175"}),Object(j.jsx)("div",{className:"row mt-4",children:Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)("a",{href:"/perfil",children:Object(j.jsx)("button",{variant:"outline-primary",className:"btn pointer",children:Object(j.jsxs)("p",{className:"text-grey",children:[Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"bi bi-person-lines-fill"})}),Object(j.jsx)("span",{className:"ml-3",children:"Mi perfil"})]})})})}),Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)("a",{href:"/pacientes",children:Object(j.jsx)("button",{variant:"outline-primary",className:"btn pointer",children:Object(j.jsxs)("p",{className:"text-grey",children:[Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"bi bi-people-fill"})}),Object(j.jsx)("span",{className:"ml-3",children:"Pacientes"})]})})})}),Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)("a",{href:"/turnos",children:Object(j.jsx)("button",{variant:"outline-primary",className:"btn pointer",children:Object(j.jsxs)("p",{className:"text-grey",children:[Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"bi bi-calendar-event"})}),Object(j.jsx)("span",{className:"ml-3",children:"Turnos"})]})})})}),function(){if("3"===c||"2"===c)return Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)("a",{href:"/profesionales",children:Object(j.jsx)("button",{variant:"outline-primary",className:"btn pointer",children:Object(j.jsxs)("p",{className:"text-grey",children:[Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"bi bi-suit-heart-fill"})}),Object(j.jsx)("span",{className:"ml-3",children:"Profesionales"})]})})})})}()]})}),Object(j.jsxs)("div",{className:"row bottom dropup",children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"btn-group dropup row",children:[Object(j.jsx)("div",{className:"col-auto text-center dropup",children:Object(j.jsx)("i",{className:"bi-person-circle text-blue img-profile"})}),Object(j.jsx)("div",{type:"button",className:"btn dropdown-toggle col-auto mt-2 max-length","data-bs-toggle":"dropdown","aria-expanded":"false",length:"10",children:e}),Object(j.jsx)("ul",{className:"dropdown-menu pointer",children:Object(j.jsx)("li",{className:"dropdown-item",onClick:function(){localStorage.setItem("emailUser",""),localStorage.setItem("nameUser",""),localStorage.setItem("dataD",""),localStorage.setItem("rolUser",""),window.confirm("\xbfconfirma que deasea desloguearse?")&&(window.location.href="login")},children:"Salir"})})]})]})]})})},m=(a(183),function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{className:"col-10",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"text-light-blue text-center",children:"Bienvenidos"})})})]})})}),O=a(7),h=a(15),x=(a(184),a.p+"static/media/login.994e2d6f.jpg"),u=a(36),p=a(165),f=(a(300),p.a.initializeApp({apiKey:"AIzaSyBlAuBcK9gzW0QEF-J6ZDVf2cutRp7p83c",authDomain:"proyecto-facultad-f31a4.firebaseapp.com",databaseURL:"https://proyecto-facultad-f31a4-default-rtdb.firebaseio.com",projectId:"proyecto-facultad-f31a4",storageBucket:"proyecto-facultad-f31a4.appspot.com",messagingSenderId:"1089277790918",appId:"1:1089277790918:web:4375d865b6149d7c3fa5c7",measurementId:"G-K66QBXXYW1"}).firestore()),N=function(){var e=Object(u.a)(),c=e.register,a=e.handleSubmit,t=Object(s.useState)([]),l=Object(h.a)(t,2),i=l[0],n=l[1];f.collection("users").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),n(c)}));return Object(j.jsx)("div",{className:"d-flex align-items-center min-vh-100 py-3 py-md-0",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"card login-card",children:Object(j.jsxs)("div",{className:"row no-gutters",children:[Object(j.jsx)("div",{className:"col-md-5",children:Object(j.jsx)("img",{src:x,alt:"login",className:"login-card-img"})}),Object(j.jsx)("div",{className:"col-md-7",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("div",{className:"brand-wrapper",children:Object(j.jsx)("a",{href:"index.html",children:Object(j.jsx)("img",{src:"Images/logo.svg",alt:"First Job",className:"logo"})})}),Object(j.jsx)("p",{className:"login-card-description",children:"Loguearse"}),Object(j.jsxs)("form",{onSubmit:a((function(e){var c=!1;i.map((function(a){console.log(a),a.email===e.email&&a.password===e.password&&(c=!0,localStorage.setItem("emailUser",a.email),localStorage.setItem("dataD",a.id),localStorage.setItem("nameUser",a.nombre),localStorage.setItem("rolUser",a.rol),window.location="/")})),!1===c&&Object(r.b)("El usuario ingresado no correcto",{type:"error",autoClose:3e3})})),children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"email",name:"email",className:"form-control",placeholder:"Email"},c("email")),{},{required:!0}))}),Object(j.jsx)("div",{className:"form-group mb-4",children:Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"password",name:"password",className:"form-control",placeholder:"Contrase\xf1a"},c("password")),{},{required:!0}))}),Object(j.jsx)("input",{className:"btn btn-block login-btn mb-4",type:"submit",value:"Ingresar"}),Object(j.jsx)("a",{href:"/Signup",children:"No tienes cuenta? Registrate!"})]}),Object(j.jsxs)("nav",{className:"login-card-footer-nav mt-3",children:[Object(j.jsx)("a",{href:"#!",children:"T\xe9rminos y condiciones."}),Object(j.jsx)("a",{href:"#!",children:"Pol\xedtica de pivadidad"})]})]})})]})})})})},v=(a(187),function(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),a=c[0],t=c[1],l=Object(u.a)(),i=l.register,n=l.watch,o=l.handleSubmit,d=n("paciente");Object(s.useEffect)((function(){f.collection("pacientes").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),c.map((function(e){e.nombre===d||e.email===d||e.dni===d||e.obrasocial===d?t(e):t(c)}))}))}),[d]);var m=localStorage.getItem("rolUser"),x=localStorage.getItem("dataD");return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{className:"col-10 ",children:Object(j.jsxs)("div",{className:"container mt-5",children:[Object(j.jsx)("h2",{className:"tituloPerfil",children:"Pacientes"}),Object(j.jsx)("div",{className:"row gutters-sm",children:Object(j.jsx)("div",{className:"col-md-4 mb-3 tabla",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("form",{className:"mb-3 row d-flex align-items-end ",children:[Object(j.jsxs)("div",{className:"col-11",children:[Object(j.jsx)("label",{for:"textPaciente",className:"form-label",children:"Buscar Pacientes"}),Object(j.jsx)("input",Object(O.a)({type:"text",className:"form-control",id:"textPaciente"},i("paciente")))]}),Object(j.jsx)("div",{className:"col-1",children:Object(j.jsx)("button",{type:"button",className:"btn btn-primary",title:"Agregar Paciente","data-bs-toggle":"modal","data-bs-target":"#agregarPaciente",children:Object(j.jsx)("b",{children:"+"})})})]}),Object(j.jsx)("div",{className:"d-flex flex-column align-items-center text-center",children:Object(j.jsxs)("table",{className:"table table-hover pointer",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Pacientes"}),Object(j.jsx)("th",{scope:"col",children:"DNI"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"Telefono"}),Object(j.jsx)("th",{scope:"col",children:"Obra Social"})]})}),Object(j.jsx)("tbody",{children:a.map((function(e){return"Admin"===m||"Secretaria"===m||e.profesionalId===x?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.nombre+" "+e.apellido}),Object(j.jsx)("td",{children:e.dni}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.telefono}),Object(j.jsx)("td",{children:e.obrasocial})]}):void 0}))})]})})]})})})})]})})]}),Object(j.jsx)("div",{className:"modal fade",id:"agregarPaciente",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Agregar Paciente"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("form",{className:"text-grey",onSubmit:o((function(e){var c={nombre:e.nombre,apellido:e.apellido,email:e.email,telefono:e.telefono,direccion:e.direccion,dni:e.dni,obrasocial:e.obrasocial,profesionalId:localStorage.getItem("dataD")};f.collection("pacientes").doc().set(c),Object(r.b)("Se cre\xf3 el paciente correctamente",{type:"success",autoClose:2e3})})),children:[Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese el nombre"},i("nombre")),{},{required:!0})),Object(j.jsx)("label",{children:"Nombre"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese el apellido"},i("apellido")),{},{required:!0})),Object(j.jsx)("label",{children:"Apellido"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"email",className:"form-control",placeholder:"Ingrese el email"},i("email")),{},{required:!0})),Object(j.jsx)("label",{children:"Email"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"tel",className:"form-control",placeholder:"Ingrese el tel\xe9fono"},i("telefono")),{},{required:!0})),Object(j.jsx)("label",{children:"Tel\xe9fono"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"tel",className:"form-control",placeholder:"Ingrese la direcci\xf3n"},i("direccion")),{},{required:!0})),Object(j.jsx)("label",{children:"Direcci\xf3n"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese la Obra Social"},i("obrasocial")),{},{required:!0})),Object(j.jsx)("label",{children:"Obra Social"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"number",className:"form-control",placeholder:"Ingrese el DNI"},i("dni")),{},{required:!0})),Object(j.jsx)("label",{children:"DNI"})]}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"reset",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancelar"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Agregar Paciente"})]})]})})]})})})]})}),g=(a(188),function(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),a=c[0],t=c[1];Object(s.useEffect)((function(){f.collection("users").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),t(c)}))}),[]);var l=Object(u.a)(),i=l.register,n=l.handleSubmit,o=function(e){var c={nombre:e.nombre,apellido:e.apellido,email:e.email,telefono:e.telefono,direccion:e.direccion};f.collection("users").doc(a[0].id).update(c);localStorage.setItem("emailUser",e.email),localStorage.setItem("nameUser",e.nombre),Object(r.b)("Se edit\xf3 el perfil correctamente",{type:"success",autoClose:2e3})};return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{className:"col-10",children:a.map((function(e){var c=localStorage.getItem("dataD");if(e.id===c)return Object(j.jsxs)("div",{className:"container mt-5",children:[Object(j.jsx)("h2",{className:"tituloPerfil",children:"Perfil"}),Object(j.jsxs)("div",{className:"row gutters-sm",children:[Object(j.jsx)("div",{className:"col-md-4 mb-3",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center text-center",children:[Object(j.jsx)("img",{src:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",alt:"Admin",className:"rounded-circle",width:"150"}),Object(j.jsxs)("div",{className:"mt-3 ",children:[Object(j.jsx)("h4",{children:e.nombre+" "+e.apellido}),Object(j.jsx)("p",{className:"text-secondary mb-1",children:e.profesion}),Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("button",{className:"btn btn-primary",children:"Reemplazar Foto"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn btn-outline-danger mt-4",children:"Cambiar Contrase\xf1a"})]})]})]})})})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsx)("div",{className:"card mb-3",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Nombre"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:e.nombre})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Apellido"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:e.apellido})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Email"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:e.email})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Tel\xe9fono"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:e.telefono})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Domicilio"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:e.direccion})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"DNI"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:e.dni})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-sm-12",children:Object(j.jsx)("button",{className:"btn btn-warning",href:"","data-bs-toggle":"modal","data-bs-target":"#editarPerfil",children:"Editar"})})})]})})})]}),Object(j.jsx)("div",{className:"modal fade",id:"editarPerfil",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Editar Perfil"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("form",{className:"text-grey",onSubmit:n(o),children:[Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese el nombre",defaultValue:e.nombre},i("nombre")),{},{required:!0})),Object(j.jsx)("label",{children:"Nombre"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese el apellido",defaultValue:e.apellido},i("apellido")),{},{required:!0})),Object(j.jsx)("label",{children:"Apellido"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"email",className:"form-control",placeholder:"Ingrese el email",defaultValue:e.email},i("email")),{},{required:!0})),Object(j.jsx)("label",{children:"Email"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"tel",className:"form-control",placeholder:"Ingrese el tel\xe9fono",defaultValue:e.telefono},i("telefono")),{},{required:!0})),Object(j.jsx)("label",{children:"Tel\xe9fono"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese el direcci\xf3n",defaultValue:e.direccion},i("direccion")),{},{required:!0})),Object(j.jsx)("label",{children:"Direcci\xf3n"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"number",className:"form-control",placeholder:"Ingrese el direcci\xf3n",defaultValue:e.dni},i("direccion")),{},{required:!0})),Object(j.jsx)("label",{children:"DNI"})]}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"reset",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancelar"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Editar Paciente"})]})]})})]})})})]})}))})]})})}),y=(a(189),function(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),a=c[0],t=c[1],l=Object(s.useState)([]),i=Object(h.a)(l,2),n=i[0],o=i[1],d=Object(u.a)(),m=d.register,x=d.handleSubmit;return Object(s.useEffect)((function(){f.collection("users").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),t(c)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{className:"col-5",children:Object(j.jsxs)("div",{className:"container mt-5",children:[Object(j.jsx)("h2",{className:"tituloPerfil",children:"Profesionales"}),Object(j.jsx)("div",{className:"row gutters-sm",children:Object(j.jsx)("div",{className:"col-md-4 mb-3 tabla",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("form",{className:"mb-3 row d-flex align-items-end "}),Object(j.jsx)("div",{className:"d-flex flex-column align-items-center text-center",children:Object(j.jsxs)("table",{className:"table table-hover pointer",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Nombre"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"Tel\xe9fono"}),Object(j.jsx)("th",{scope:"col",children:"Profesi\xf3n"})]})}),Object(j.jsx)("tbody",{children:a.map((function(e){return Object(j.jsxs)("tr",{onClick:function(){o(e)},children:[Object(j.jsx)("td",{children:e.nombre+" "+e.apellido}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.telefono}),Object(j.jsx)("td",{children:e.profesion})]})}))})]})})]})})})})]})}),Object(j.jsxs)("div",{className:"col-5 mt-5 container",children:[Object(j.jsx)("h2",{className:"tituloPerfil text-center ml-4",children:"Perfil seleccionado"}),Object(j.jsxs)("div",{className:"row gutters-sm",children:[Object(j.jsx)("div",{className:"col-md-4 mb-3",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center text-center",children:[Object(j.jsx)("img",{src:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",alt:"Admin",className:"rounded-circle",width:"150"}),Object(j.jsxs)("div",{className:"mt-3 ",children:[Object(j.jsx)("h4",{children:n.nombre+" "+n.apellido}),Object(j.jsx)("p",{className:"text-secondary mb-1",children:n.profesion})]})]})})})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsx)("div",{className:"card mb-3",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Nombre"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:n.nombre})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Apellido"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:n.apellido})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Email"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:n.email})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Tel\xe9fono"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:n.telefono})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"Domicilio"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:n.direccion})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-3",children:Object(j.jsx)("h6",{className:"mb-0",children:"DNI"})}),Object(j.jsx)("div",{className:"col-sm-9 text-secondary",children:n.dni})]}),Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-12",children:[Object(j.jsx)("button",{className:"btn btn-warning",href:"","data-bs-toggle":"modal","data-bs-target":"#editarPerfil",children:"Editar"}),Object(j.jsx)("button",{className:"btn btn-danger ml-5",href:"",onClick:function(){window.confirm("\xbfEst\xe1 seguro que desea eliminar el profesional?")},children:"Eliminar"})]})})]})})})]}),Object(j.jsx)("div",{className:"modal fade",id:"editarPerfil",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Editar Perfil"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("form",{className:"text-grey",onSubmit:x((function(e){var c={nombre:e.nombre,apellido:e.apellido,email:e.email,telefono:e.telefono,direccion:e.direccion,dni:e.dni};f.collection("users").doc(a[0].id).update(c);Object(r.b)("Se edit\xf3 el perfil correctamente",{type:"success",autoClose:2e3})})),children:[Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese el nombre",defaultValue:n.nombre},m("nombre")),{},{required:!0})),Object(j.jsx)("label",{children:"Nombre"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese el apellido",defaultValue:n.apellido},m("apellido")),{},{required:!0})),Object(j.jsx)("label",{children:"Apellido"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"email",className:"form-control",placeholder:"Ingrese el email",defaultValue:n.email},m("email")),{},{required:!0})),Object(j.jsx)("label",{children:"Email"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"tel",className:"form-control",placeholder:"Ingrese el tel\xe9fono",defaultValue:n.telefono},m("telefono")),{},{required:!0})),Object(j.jsx)("label",{children:"Tel\xe9fono"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"text",className:"form-control",placeholder:"Ingrese el direcci\xf3n",defaultValue:n.direccion},m("direccion")),{},{required:!0})),Object(j.jsx)("label",{children:"Direcci\xf3n"})]}),Object(j.jsxs)("div",{className:"mb-3 form-floating",children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({type:"number",className:"form-control",placeholder:"Ingrese el direcci\xf3n",defaultValue:n.dni},m("dni")),{},{required:!0})),Object(j.jsx)("label",{children:"DNI"})]}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"reset",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancelar"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Editar Paciente"})]})]})})]})})})]})]})})}),w=a(13),S=a.n(w),I=a(34),E=(a(190),a.p+"static/media/login3.6a331ead.jpg"),C=function(){var e=Object(u.a)(),c=e.register,a=e.handleSubmit,t=e.reset,l=Object(s.useState)([]),i=Object(h.a)(l,2),n=i[0],o=i[1],d=function(){var e=Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.collection("users").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),o(c)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"d-flex align-items-center min-vh-100 py-3 py-md-0",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"card login-card",children:Object(j.jsxs)("div",{className:"row no-gutters",children:[Object(j.jsx)("div",{className:"col-md-5",children:Object(j.jsx)("img",{src:E,alt:"login",className:"login-card-img"})}),Object(j.jsx)("div",{className:"col-md-7",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("div",{className:"brand-wrapper",children:Object(j.jsx)("a",{href:"index.html",children:Object(j.jsx)("img",{src:"Images/logo.svg",alt:"First Job",className:"logo"})})}),Object(j.jsx)("p",{className:"login-card-description",children:"Crear cuenta"}),Object(j.jsxs)("form",{onSubmit:a((function(e){if(d(),console.log(n),""!==e.password&&""!==e.passwordConfirm&&e.password===e.passwordConfirm){var c={email:e.email,password:e.password,nombre:e.usuario,state:!0,apellido:"",direccion:"",telefono:"",rol:1,enabled:!0,profesion:""};f.collection("users").doc().set(c),Object(r.b)("Nuevo usuario agregado",{type:"success",autoClose:2e3}),setTimeout((function(){localStorage.setItem("emailUser",c.email),localStorage.setItem("nameUser",c.nombre),window.location="/"}),1e3)}else Object(r.b)("Las contrase\xf1as no son iguales",{type:"error",autoClose:3e3})})),children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",Object(O.a)({type:"text",name:"usuario",className:"form-control",placeholder:"Nombre de usuario",required:!0},c("usuario")))}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",Object(O.a)({type:"email",name:"email",className:"form-control",placeholder:"Email",required:!0},c("email")))}),Object(j.jsx)("div",{className:"form-group mb-4",children:Object(j.jsx)("input",Object(O.a)({type:"password",name:"password",className:"form-control",placeholder:"Contrase\xf1a",required:!0},c("password")))}),Object(j.jsx)("div",{className:"form-group mb-4",children:Object(j.jsx)("input",Object(O.a)({type:"password",name:"passwordConfirm",className:"form-control",placeholder:"Confirmar Contrase\xf1a",required:!0},c("passwordConfirm")))}),Object(j.jsx)("input",{className:"btn btn-block login-btn mb-4",type:"submit",value:"Registrate",onClick:function(){setTimeout((function(){t({usuario:"",email:"",password:"",passwordConfirm:""})}),1e3)}}),Object(j.jsx)("a",{href:"/login",children:"Ya tienes cuenta?"})]}),Object(j.jsxs)("nav",{className:"login-card-footer-nav",children:[Object(j.jsx)("a",{href:"#!",children:"T\xe9rminos y condiciones."}),Object(j.jsx)("a",{href:"#!",children:"Pol\xedtica de pivadidad"})]})]})})]})})})})},P=(a(191),a(142)),D=a(132),q=a.n(D),A=(a(195),a(169)),T=a.n(A),U=(a(196),a(168)),V=a.n(U);a(245);a(246);var k=Object(P.b)(q.a),L=function(){for(var e=Object(s.useState)(new Date),c=Object(h.a)(e,2),a=c[0],t=c[1],l=Object(s.useState)([]),i=Object(h.a)(l,2),n=i[0],o=i[1],d=Object(s.useState)([]),m=Object(h.a)(d,2),x=m[0],p=m[1],N=Object(s.useState)(""),v=Object(h.a)(N,2),g=v[0],y=v[1],w=Object(u.a)(),S=w.handleSubmit,I=(w.formState.errors,[]),E=0;E<x.length;E++)I.push(x[E].nombre+" "+x[E].apellido);var C=I,D=localStorage.getItem("rolUser"),q=localStorage.getItem("dataD"),A=[];return Object(s.useEffect)((function(){f.collection("turnos").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))}));for(var a=0;a<c.length;a++)c[a].start=new Date(c[a].start),c[a].end=new Date(c[a].end);"2"!==D&&"3"!==D||o(c),"1"===D&&(c.map((function(e){e.profesionalId===q&&A.push(e)})),o(A))})),f.collection("pacientes").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),p(c)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"col-10 pt-5 pr-5 pb-5",children:[Object(j.jsx)("form",{onSubmit:S((function(e){if(console.log(g),""!=g){String(a),String(a),localStorage.getItem("dataD");y(""),Object(r.b)("Se agreg\xf3 el turno correctamente",{type:"success",autoClose:3e3})}else Object(r.b)("No se pueden ingresar campos vacios",{type:"default",autoClose:3e3})})),children:Object(j.jsxs)("div",{className:"row ml-4",children:[Object(j.jsxs)("div",{className:"col-3",children:[Object(j.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Paciente"}),Object(j.jsx)(V.a,{trigger:[""],className:"form-control fixed",options:C,onSelect:function(e){y(e)}})]}),Object(j.jsxs)("div",{className:"col-3",children:[Object(j.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Fecha"}),Object(j.jsx)(T.a,{className:"form-control text-center",showTimeSelect:!0,selected:a,onChange:function(e){return t(e)},minDate:new Date,filterTime:function(e){var c=new Date,a=new Date(e);return c.getTime()<a.getTime()}})]}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("label",{children:"\xa0"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Agregar Turno"})]})]})}),Object(j.jsx)(P.a,{localizer:k,events:n,startAccessor:"start",endAccessor:"end",style:{height:700,margin:"35px"},messages:{next:"sig",previous:"ant",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda"}})]})]})})},M=function(){return Object(j.jsx)(n.a,{children:Object(j.jsx)("div",{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/login",children:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/signUp",children:Object(j.jsx)(C,{})}),Object(j.jsx)(o.a,{path:"/perfil",children:Object(j.jsx)(g,{})}),Object(j.jsx)(o.a,{path:"/pacientes",children:Object(j.jsx)(v,{})}),Object(j.jsx)(o.a,{path:"/turnos",children:Object(j.jsx)(L,{})}),Object(j.jsx)(o.a,{path:"/profesionales",children:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:"/",children:Object(j.jsx)(m,{})})]})})})};a(294);var B=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(M,{}),Object(j.jsx)(r.a,{})]})};i.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}},[[295,1,2]]]);
//# sourceMappingURL=main.e86b150c.chunk.js.map