(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(8),o=n.n(c),r=n(3),i=n(5),u=n(4),m=(n(14),n(7));function d(e){var t=e.filter,n=e.changeFilter;return l.a.createElement("div",{className:"filter-bar"},l.a.createElement("div",{className:"bar-item",onClick:function(){return n("all")}},"All"),l.a.createElement("div",{className:"bar-item",onClick:function(){return n("active")}},"Active"),l.a.createElement("div",{className:"bar-item",onClick:function(){return n("done")}},"Done"),l.a.createElement("div",{className:m("current",t)}))}d.defaultProps={filter:"all",changeFilter:null};n(15);var s=n(7);function f(e){var t=e.todoItems,n=e.changeState,a=e.deleteItem,c=e.filter;return l.a.createElement("div",{className:"todo-list"},null===t||void 0===t?void 0:t.map((function(e){return("all"===c||"done"===c&&!0===e.completed||"active"===c&&!1===e.completed)&&l.a.createElement("div",{key:e.id,className:s("item",{active:e.completed})},l.a.createElement("input",{type:"checkbox",onChange:function(){return n(e.id)},checked:e.completed}),l.a.createElement("label",null,e.title),e.completed&&l.a.createElement("i",{className:"far fa-trash",onClick:function(){return a(e.id)}}))})))}f.defaultProps={TodoItem:[],filter:"all",changeState:null,delete:null};n(16);function p(e){var t=e.addTodo;return l.a.createElement("div",{className:"form-input"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(e.target.input.value),e.target.input.value=""},autoComplete:"off"},l.a.createElement("input",{type:"text",required:!0,className:"input",name:"input"}),l.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg focus:outline-none"},"Add")))}n(17);var v=[{id:1,title:"C\xf4ng vi\u1ec7c ch\u01b0a l\xe0m",completed:!1},{id:2,title:"C\xf4ng vi\u1ec7c \u0111\xe3 ho\xe0n th\xe0nh",completed:!0}];var h=function(){var e=Object(a.useState)((function(){var e;return JSON.parse(null!==(e=localStorage.getItem("todoItems"))&&void 0!==e?e:JSON.stringify(v))})),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("all"),m=Object(u.a)(o,2),s=m[0],h=m[1];return Object(a.useEffect)((function(){localStorage.setItem("todoItems",JSON.stringify(n))}),[n]),l.a.createElement("div",{className:"container m-auto"},l.a.createElement("div",{className:"content lg:w-2/5 md:w-5/6 m-auto"},l.a.createElement("header",{className:"app-header"},l.a.createElement("h1",{className:"justify-center flex text-2xl"},"TODO APP")),l.a.createElement("div",{className:"content"},l.a.createElement(d,{filter:s,changeFilter:function(e){h(e)}}),l.a.createElement(p,{addTodo:function(e){var t=Object(r.a)(n);if(n.length>0){var a={title:e,id:n[n.length-1].id+1,completed:!1};t.push(a)}else{var l={title:e,id:1,completed:!1};t.push(l)}console.log(t),c(t)}}),l.a.createElement(f,{todoItems:n,changeState:function(e){var t=n.map((function(t){return t.id===e&&Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed})||t}));c(t)},deleteItem:function(e){var t=n.findIndex((function(t){return t.id===e})),a=Object(r.a)(n);a.splice(t,1),c(a)},filter:s}))))};n(18),n(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.5c3f19a5.chunk.js.map