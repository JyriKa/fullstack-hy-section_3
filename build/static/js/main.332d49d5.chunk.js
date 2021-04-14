(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(15),o=t.n(a),i=t(6),u=t(3),d=t(0),s=function(e){var n=e.message;if(void 0===n)return Object(d.jsx)("div",{});var t=n.color,r=n.content,c={fontSize:20,backgroundColor:t,padding:"10px"};return Object(d.jsx)("div",{className:"error",style:c,children:r})},l=t(4),b=t.n(l),j="/api/persons",f={addNew:function(e){return b.a.post(j,e).then((function(e){return e.data}))},getAll:function(){return b.a.get(j).then((function(e){return e.data}))},tryDelete:function(e){return b.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.status}))},updateNumber:function(e){return b.a.put("".concat(j,"/").concat(e.id),e).then((function(e){return e.status}))}},h=function(e){var n=e.text,t=e.value,r=e.handler;return Object(d.jsxs)("div",{children:[n," ",Object(d.jsx)("input",{value:t,onChange:r})]})},m=function(e){var n=e.addNumber,t=e.newName,r=e.handleNameChange,c=e.newNumber,a=e.handleNumberChange;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Add new"}),Object(d.jsxs)("form",{onSubmit:n,children:[Object(d.jsx)(h,{text:"name",value:t,handler:r}),Object(d.jsx)(h,{text:"number",value:c,handler:a}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})]})},v=function(e){var n=e.person,t=e.handler,r=n.name,c=n.number,a=n.id;return Object(d.jsxs)("div",{children:[r," ",c,Object(d.jsx)("button",{onClick:t,"data-id":a,style:{fontSize:"10px"},children:"Delete"})]})},O=function(e){var n=e.persons,t=e.filterName,r=e.handler,c=n.filter((function(e){return e.name.split(" ").find((function(e){return 0===e.toLowerCase().indexOf(t.toLowerCase())}))})).map((function(e){return Object(d.jsx)(v,{person:e,handler:r},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)("div",{children:c})]})},x=function(){var e="green",n="red",t=Object(r.useState)([]),c=Object(u.a)(t,2),a=c[0],o=c[1],l=Object(r.useState)(""),b=Object(u.a)(l,2),j=b[0],v=b[1],x=Object(r.useState)(""),p=Object(u.a)(x,2),g=p[0],w=p[1],N=Object(r.useState)(""),y=Object(u.a)(N,2),S=y[0],C=y[1],k=Object(r.useState)(void 0),A=Object(u.a)(k,2),D=A[0],z=A[1];Object(r.useEffect)((function(){f.getAll().then((function(e){return o(e)}))}),[]);var E=function(e){o(a.filter((function(n){return n.id!==e})))},I=function(e,n){var t={color:e,content:n};console.log("notifying",t),z(t),setTimeout((function(){return z(void 0)}),4e3)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(s,{message:D}),Object(d.jsx)(h,{text:"filter shown with",value:j,handler:function(e){v(e.target.value)}}),Object(d.jsx)(m,{addNumber:function(t){t.preventDefault();var r=a.find((function(e){return e.name===g}));if(void 0!==r)return r.number===S?void I(n,"".concat(g," is already added to phonebook")):void function(t,r){if(window.confirm("Update ".concat(t.name," number?"))){var c=Object(i.a)(Object(i.a)({},t),{},{number:r});f.updateNumber(c).then((function(n){o(a.map((function(e){return e.id!==c.id?e:c}))),I(e,"".concat(t.name," number updated"))})).catch((function(e){console.log(e),E(t.id),I(n,"".concat(t.name," number has been removed by another user"))}))}}(r,S);var c={name:g,number:S};c.name.length<1||c.number.length<1?I(n,"Missing name, number or both"):(w(""),C(""),f.addNew(c).then((function(n){o(a.concat(n)),I(e,"Added ".concat(n.name))})).catch((function(e){console.log(e),I(n,e)})))},newName:g,handleNameChange:function(e){w(e.target.value)},newNumber:S,handleNumberChange:function(e){C(e.target.value)}}),Object(d.jsx)(O,{persons:a,filterName:j,handler:function(t){var r=parseInt(t.target.getAttribute("data-id")),c=a.find((function(e){return e.id===r}));window.confirm("Delete ".concat(c.name,"?"))&&f.tryDelete(c.id).then((function(n){E(c.id),I(e,"".concat(c.name," removed"))})).catch((function(e){if(404===e.response.status)return E(c.id),void I(n,"".concat(c.name," number has already been removed from server"));I(n,"Something went wrong")}))}})]})};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.332d49d5.chunk.js.map