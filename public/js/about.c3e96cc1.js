(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1dde":function(t,n,e){var o=e("d039"),a=e("b622"),r=e("2d00"),s=a("species");t.exports=function(t){return r>=51||!o((function(){var n=[],e=n.constructor={};return e[s]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"65f0":function(t,n,e){var o=e("861d"),a=e("e8b5"),r=e("b622"),s=r("species");t.exports=function(t,n){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?o(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},8418:function(t,n,e){"use strict";var o=e("c04e"),a=e("9bf2"),r=e("5c6c");t.exports=function(t,n,e){var s=o(n);s in t?a.f(t,s,r(0,e)):t[s]=e}},a434:function(t,n,e){"use strict";var o=e("23e7"),a=e("23cb"),r=e("a691"),s=e("50c4"),i=e("7b0b"),c=e("65f0"),u=e("8418"),l=e("1dde"),d=e("ae40"),f=l("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!f||!m},{splice:function(t,n){var e,o,l,d,f,m,g=i(this),x=s(g.length),_=a(t,x),w=arguments.length;if(0===w?e=o=0:1===w?(e=0,o=x-_):(e=w-2,o=v(p(r(n),0),x-_)),x+e-o>h)throw TypeError(b);for(l=c(g,o),d=0;d<o;d++)f=_+d,f in g&&u(l,d,g[f]);if(l.length=o,e<o){for(d=_;d<x-o;d++)f=d+o,m=d+e,f in g?g[m]=g[f]:delete g[m];for(d=x;d>x-o+e;d--)delete g[d-1]}else if(e>o)for(d=x-o;d>_;d--)f=d+o-1,m=d+e-1,f in g?g[m]=g[f]:delete g[m];for(d=0;d<e;d++)g[d+_]=arguments[d+2];return g.length=x-o+e,l}})},ae40:function(t,n,e){var o=e("83ab"),a=e("d039"),r=e("5135"),s=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,n){if(r(i,t))return i[t];n||(n={});var e=[][t],u=!!r(n,"ACCESSORS")&&n.ACCESSORS,l=r(n,0)?n[0]:c,d=r(n,1)?n[1]:void 0;return i[t]=!!e&&!a((function(){if(u&&!o)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,l,d)}))}},b727:function(t,n,e){var o=e("0366"),a=e("44ad"),r=e("7b0b"),s=e("50c4"),i=e("65f0"),c=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(m,p,v,h){for(var b,g,x=r(m),_=a(x),w=o(p,v,3),C=s(_.length),y=0,E=h||i,A=n?E(m,C):e?E(m,0):void 0;C>y;y++)if((f||y in _)&&(b=_[y],g=w(b,y,x),t))if(n)A[y]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return y;case 2:c.call(A,b)}else if(l)return!1;return d?-1:u||l?l:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c740:function(t,n,e){"use strict";var o=e("23e7"),a=e("b727").findIndex,r=e("44d2"),s=e("ae40"),i="findIndex",c=!0,u=s(i);i in[]&&Array(1)[i]((function(){c=!1})),o({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(i)},c93e:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v("Notas")]),e("b-alert",{attrs:{show:t.dissmissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(n){t.dissmissCountDown=0},"dismiss-count-down":t.countDownChange}},[t._v(" "+t._s(t.mensaje.text)+" ")]),t.agregar?t._e():e("form",{on:{submit:function(n){return n.preventDefault(),t.editarNota(t.notaEditar)}}},[e("h3",{staticClass:"text-center"},[t._v("Editar nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.nombre,expression:"notaEditar.nombre"}],staticClass:"form-control my-2",attrs:{type:"text"},domProps:{value:t.notaEditar.nombre},on:{input:function(n){n.target.composing||t.$set(t.notaEditar,"nombre",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.descripcion,expression:"notaEditar.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text"},domProps:{value:t.notaEditar.descripcion},on:{input:function(n){n.target.composing||t.$set(t.notaEditar,"descripcion",n.target.value)}}}),e("b-button",{staticClass:"btn-warning my-2 mx-2",attrs:{type:"submit"}},[t._v("Confirmar")]),e("b-button",{staticClass:"my-2",attrs:{type:"submit"},on:{click:function(n){t.agregar=!0}}},[t._v("Cancelar")])],1),t.agregar?e("form",{on:{submit:function(n){return n.preventDefault(),t.agregarNota()}}},[e("h3",{staticClass:"text-center"},[t._v("Agregar nueva nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.nombre,expression:"nota.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingresa el nombre"},domProps:{value:t.nota.nombre},on:{input:function(n){n.target.composing||t.$set(t.nota,"nombre",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.descripcion,expression:"nota.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingresa la descripcion"},domProps:{value:t.nota.descripcion},on:{input:function(n){n.target.composing||t.$set(t.nota,"descripcion",n.target.value)}}}),e("b-button",{staticClass:"btn-sm btn-block btn-success",attrs:{type:"submit"}},[t._v("Agregar")])],1):t._e(),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.notas,(function(n,o){return e("tr",{key:o},[e("td",{attrs:{scope:"row"}},[t._v(t._s(n._id))]),e("td",[t._v(t._s(n.nombre))]),e("td",[t._v(t._s(n.descripcion))]),e("td",[t._v(t._s(n.date))]),e("td",[e("b-button",{staticClass:"btn-warning btn-sm mx-2",on:{click:function(e){return t.activarEdicion(n._id)}}},[t._v("Actualizar")]),e("b-button",{staticClass:"btn-danger btn-sm mx-2",on:{click:function(e){return t.eliminarNota(n._id)}}},[t._v("Eliminar")])],1)])})),0)])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Nombre")]),e("th",{attrs:{scope:"col"}},[t._v("Descripcion")]),e("th",{attrs:{scope:"col"}},[t._v("Fecha")]),e("th",{attrs:{scope:"col"}},[t._v("Acciones")])])}],r=(e("c740"),e("a434"),{data:function(){return{mensaje:{color:"success",text:""},dismissSecs:5,dissmissCountDown:0,notas:[],nota:{},agregar:!0,notaEditar:{}}},created:function(){this.listarNotas()},methods:{agregarNota:function(){var t=this;this.axios.post("nueva-nota",this.nota).then((function(n){t.notas.push(n.data),t.nota.nombre="",t.nota.descripcion="",t.mensaje.text="Nota agregada con éxito",t.mensaje.color="success",t.showAlert()})).catch((function(t){alert(t)}))},eliminarNota:function(t){var n=this;this.axios.delete("nota/".concat(t)).then((function(t){var e=n.notas.findIndex((function(n){return n._id===t.data.id}));n.notas.splice(e,1),n.mensaje.text="Nota eliminada con éxito",n.mensaje.color="success",n.showAlert()})).catch((function(t){n.mensaje.text="Hubo un error al eliminar la nota",n.mensaje.color="danger",n.showAlert(),console.log(t)}))},listarNotas:function(){var t=this;this.axios.post("notas").then((function(n){t.notas=n.data})).catch((function(t){console.log(t)}))},activarEdicion:function(t){var n=this;this.agregar=!1,this.axios.post("/nota/".concat(t)).then((function(t){n.notaEditar=t.data})).catch((function(t){console.log(t.response)}))},editarNota:function(t){var n=this;this.axios.put("/nota/".concat(t._id),t).then((function(t){var e=n.notas.findIndex((function(n){return n._id===t.data._id}));n.notas[e].nombre=t.data.nombre,n.notas[e].descripcion=t.data.descripcion,n.mensaje.text="Nota actualizada",n.mensaje.color="success",n.showAlert()})).catch((function(t){n.mensaje.text="Hubo un error: ".concat(t.response.data.error.errors.nombre.message),n.mensaje.color="danger",n.showAlert(),console.log(t)})),this.agregar=!0},countDownChange:function(t){this.dissmissCountDown=t},showAlert:function(){this.dissmissCountDown=this.dismissSecs}}}),s=r,i=e("2877"),c=Object(i["a"])(s,o,a,!1,null,null,null);n["default"]=c.exports},e8b5:function(t,n,e){var o=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},f820:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],r=e("2877"),s={},i=Object(r["a"])(s,o,a,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=about.c3e96cc1.js.map