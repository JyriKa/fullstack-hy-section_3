(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(15),o=t.n(c),u=t(6),i=t(3),d=t(0),s=function(e){var n=e.message;if(void 0===n)return Object(d.jsx)("div",{});var t=n.color,r=n.content,a={fontSize:20,backgroundColor:t,padding:"10px"};return Object(d.jsx)("div",{className:"error",style:a,children:r})},b=t(4),l=t.n(b),j="/api/persons",h={addNew:function(e){return l.a.post(j,e).then((function(e){return e.data}))},getAll:function(){return l.a.get(j).then((function(e){return e.data}))},tryDelete:function(e){return l.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.status}))},updateNumber:function(e){return l.a.put("".concat(j,"/").concat(e.id),e).then((function(e){return e.status}))}},f=function(e){var n=e.text,t=e.value,r=e.handler;return Object(d.jsxs)("div",{children:[n," ",Object(d.jsx)("input",{value:t,onChange:r})]})},m=function(e){var n=e.addNumber,t=e.newName,r=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Add new"}),Object(d.jsxs)("form",{onSubmit:n,children:[Object(d.jsx)(f,{text:"name",value:t,handler:r}),Object(d.jsx)(f,{text:"number",value:a,handler:c}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})]})},v=function(e){var n=e.person,t=e.handler,r=n.name,a=n.number,c=n.id;return Object(d.jsxs)("div",{children:[r," ",a,Object(d.jsx)("button",{onClick:t,"data-id":c,style:{fontSize:"10px"},children:"Delete"})]})},O=function(e){var n=e.persons,t=e.filterName,r=e.handler,a=n.filter((function(e){return e.name.split(" ").find((function(e){return 0===e.toLowerCase().indexOf(t.toLowerCase())}))})).map((function(e){return Object(d.jsx)(v,{person:e,handler:r},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)("div",{children:a})]})},x=function(){var e="green",n="red",t=Object(r.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],b=Object(r.useState)(""),l=Object(i.a)(b,2),j=l[0],v=l[1],x=Object(r.useState)(""),p=Object(i.a)(x,2),g=p[0],w=p[1],N=Object(r.useState)(""),S=Object(i.a)(N,2),y=S[0],C=S[1],k=Object(r.useState)(void 0),A=Object(i.a)(k,2),D=A[0],z=A[1];Object(r.useEffect)((function(){h.getAll().then((function(e){return o(e)}))}),[]);var E=function(e){o(c.filter((function(n){return n.id!==e})))},J=function(e,n){z({color:e,content:n}),setTimeout((function(){return z(void 0)}),6e3)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(s,{message:D}),Object(d.jsx)(f,{text:"filter shown with",value:j,handler:function(e){v(e.target.value)}}),Object(d.jsx)(m,{addNumber:function(t){t.preventDefault();var r=c.find((function(e){return e.name===g}));if(void 0!==r)return r.number===y?void J(n,"".concat(g," is already added to phonebook")):void function(t,r){if(window.confirm("Update ".concat(t.name," number?"))){var a=Object(u.a)(Object(u.a)({},t),{},{number:r});h.updateNumber(a).then((function(n){o(c.map((function(e){return e.id!==a.id?e:a}))),J(e,"".concat(t.name," number updated"))})).catch((function(e){console.log(e),E(t.id),J(n,"".concat(t.name," number has been removed by another user"))}))}}(r,y);var a={name:g,number:y};a.name.length<1||a.number.length<1?J(n,"Missing name, number or both"):(w(""),C(""),h.addNew(a).then((function(n){o(c.concat(n)),J(e,"Added ".concat(n.name))})).catch((function(e){J(n,e.response.data.error)})))},newName:g,handleNameChange:function(e){w(e.target.value)},newNumber:y,handleNumberChange:function(e){C(e.target.value)}}),Object(d.jsx)(O,{persons:c,filterName:j,handler:function(t){var r=t.target.getAttribute("data-id"),a=c.find((function(e){return e.id===r}));window.confirm("Delete ".concat(a.name,"?"))&&h.tryDelete(a.id).then((function(n){E(a.id),J(e,"".concat(a.name," removed"))})).catch((function(e){if(404===e.response.status)return E(a.id),void J(n,"".concat(a.name," number has already been removed from server"));J(n,"Something went wrong")}))}})]})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5f761741.chunk.js.map