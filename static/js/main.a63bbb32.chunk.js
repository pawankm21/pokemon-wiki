(this["webpackJsonppokemon-wiki"]=this["webpackJsonppokemon-wiki"]||[]).push([[0],{11:function(e,t,s){},14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(5),i=s.n(c),o=(s(11),s(2)),r=s.p+"static/media/pokemon-4657023_960_720.e97a3d90.png",l=s(0);function u(e){var t=e.showModal,s=e.setShowModal,n=e.name,a=e.abilities,c=e.forms,i=e.weight,o=e.height,r=e.image,u=e.types,b=e.moves,m=e.error;return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:Object(l.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-xl ",children:Object(l.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(l.jsxs)("div",{className:"capitalize flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",children:[Object(l.jsx)("h3",{className:"  text-3xl font-semibold",children:m?"Not Found \ud83d\ude22":n}),Object(l.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return s(!1)},children:Object(l.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),m?"The Pokemon you are looking for is not available\ud83d\ude13":Object(l.jsxs)("div",{className:"capitalize relative p-6 flex-auto",children:[Object(l.jsx)("img",{className:"float-right h-48 ",src:r,alt:""}),Object(l.jsxs)("section",{className:" my-4 text-gray-900 text-lg font-bold leading-relaxed",children:[Object(l.jsxs)("p",{className:"mr-5",children:["Weight:"," ",Object(l.jsx)("span",{className:"font-normal text-xl text-gray-700",children:i})]}),Object(l.jsxs)("p",{children:["Height:"," ",Object(l.jsx)("span",{className:"font-normal text-xl text-gray-700",children:o})]}),Object(l.jsx)("h1",{children:"Abilities"}),a.map((function(e,t){return Object(l.jsx)("li",{className:"font-normal text-base text-gray-700",children:e.ability.name},t)})),Object(l.jsx)("h1",{children:"Form(s)"}),c.map((function(e,t){return Object(l.jsx)("li",{className:"font-normal text-base text-gray-700",children:e.name},t)})),Object(l.jsx)("h1",{children:"Type(s)"}),u.map((function(e,t){return Object(l.jsx)("li",{className:"font-normal text-base text-gray-700",children:e.type.name},t)})),Object(l.jsx)("h1",{children:"Moves"}),Object(l.jsxs)("p",{className:"font-normal text-base text-gray-700 ",children:[b.map((function(e,t){return Object(l.jsxs)("span",{children:[e.move.name,", "]},t)})),"."]})]})]}),Object(l.jsx)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b",children:Object(l.jsx)("button",{className:"bg-emerald-500 text-red-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:function(){return s(!1)},children:"Close"})})]})})}),Object(l.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null})}var b=s(4),m=s.n(b),d=s(6),j=function(e){function t(){return t=Object(d.a)(m.a.mark((function e(t){var s,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=14;break}return e.prev=1,e.next=4,fetch(t);case 4:return s=e.sent,e.next=7,s.json();case 7:(n=e.sent)&&(i(n.abilities),v(n.height),F(null!==n.sprites.other.dream_world.front_default?n.sprites.other.dream_world.front_default:null!==n.sprites.front_default?n.sprites.front_default:n.sprites.other["official-artwork"].front_default),k(n.types),x(n.weight),b(n.forms),L(n.moves),I(n.name)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),K("Sorry! could not find the pokemon \ud83d\ude22 ");case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),t.apply(this,arguments)}var s=Object(n.useState)([]),a=Object(o.a)(s,2),c=a[0],i=a[1],r=Object(n.useState)([]),l=Object(o.a)(r,2),u=l[0],b=l[1],j=Object(n.useState)(0),h=Object(o.a)(j,2),f=h[0],x=h[1],p=Object(n.useState)(0),g=Object(o.a)(p,2),O=g[0],v=g[1],w=Object(n.useState)([]),N=Object(o.a)(w,2),y=N[0],k=N[1],S=Object(n.useState)(""),M=Object(o.a)(S,2),C=M[0],F=M[1],_=Object(n.useState)(""),z=Object(o.a)(_,2),E=z[0],L=z[1],q=Object(n.useState)(!1),A=Object(o.a)(q,2),T=A[0],W=A[1],B=Object(n.useState)(""),G=Object(o.a)(B,2),H=G[0],I=G[1],J=Object(n.useState)(void 0),D=Object(o.a)(J,2),P=D[0],K=D[1];return Object(n.useEffect)((function(){!function(e){t.apply(this,arguments)}(e)}),[e]),[{abilities:c,weight:f,height:O,types:y,image:C,moves:E,show:T,forms:u,name:H,error:P},{setAbilities:i,setWeight:x,setHeight:v,setTypes:k,setImage:F,setMoves:L,setShow:W,setForms:b,setName:I}]};function h(e){var t=e.name,s=e.url,n=j(s),a=Object(o.a)(n,2),c=a[0],i=c.abilities,b=c.weight,m=c.height,d=c.types,h=c.image,f=c.moves,x=c.show,p=c.forms,g=a[1].setShow;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("button",{onClick:function(){g(!0)},className:"items-center bg-red-100 p-1  m-3 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-110",children:[Object(l.jsxs)("h1",{className:" capitalize p-1 text-xl truncate font-bold text-red-900 ",children:[Object(l.jsx)("img",{src:r,className:"h-5 inline mr-2",alt:""}),t]}),Object(l.jsx)("img",{className:"h-24 float-left",src:h,alt:""})]}),Object(l.jsx)(u,{showModal:x,setShowModal:g,weight:b,height:m,types:d,forms:p,name:t,image:h,abilities:i,moves:f})]})}function f(e){var t=Object(n.useState)("1"),s=Object(o.a)(t,2),a=s[0],c=s[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),b=r[0],m=r[1],d=j("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")),h=Object(o.a)(d,2)[0],f=h.abilities,x=h.weight,p=h.height,g=h.types,O=h.image,v=h.moves,w=h.forms,N=h.name,y=h.error;return Object(l.jsxs)(l.Fragment,{children:[b&&N?Object(l.jsx)(u,{showModal:b,setShowModal:m,weight:x,height:p,types:g,forms:w,name:N,image:O,abilities:f,moves:v,error:y}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("div",{className:"p-8  w-full flex justify-center",children:Object(l.jsxs)("div",{className:"flex  rounded-full shadow transition duration-500 ease-in-out hover:shadow-lg  w-1/2 bg-white",children:[Object(l.jsx)("input",{className:"rounded-l-full w-full py-4 px-6 text-gray-900 leading-tight focus:outline-none focus:ring-red-400 focus:ring-4 transition duration-500 ease-in-out",id:"search",type:"text",placeholder:"Search",name:"search",onChange:function(e){c(e.target.value)}}),Object(l.jsx)("div",{className:"p-4",children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),c(a.toLowerCase()),m(!0)},className:"bg-black text-white rounded-full p-2 hover:bg-red-600 focus:outline-none w-12 h-12 flex items-center justify-center",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"white",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})})]})})]})}s(14);var x=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(!0),i=Object(o.a)(c,2),r=i[0],u=i[1],b=Object(n.useState)(0),m=Object(o.a)(b,2),d=m[0],j=m[1],x=Object(n.useState)(100),p=Object(o.a)(x,2),g=p[0],O=p[1];return Object(n.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(g,"&offset=").concat(d)).then((function(e){return e.json()})).then((function(e){a(e.results),u(!1)}))}),[g,d]),Object(l.jsxs)("div",{className:"App  ",children:[Object(l.jsxs)("div",{className:" text-white flex justify-center mb-10",children:[" ",Object(l.jsx)("button",{onClick:function(){O(g+1)}})]}),Object(l.jsxs)("div",{className:"flex flex-col h-100 my-auto items-center",children:[Object(l.jsx)("a",{className:"block self-center w-1/2 pointer-events-none mt-12 mb-3 ml-3 mr-3 ",href:"https://fontmeme.com/pokemon-font/",children:Object(l.jsx)("img",{src:"https://fontmeme.com/permalink/211021/74c529ba8b8fbb1b745ad02e1602b5f8.png",alt:"pokemon-font",border:"0"})}),Object(l.jsx)("p",{className:" pl-4 pr-4 pt-6 w-3/4 ",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatibus, nisi, esse qui placeat nobis nihil voluptate veniam a consequuntur saepe recusandae, nostrum et vitae blanditiis facere quibusdam corporis obcaecati?"}),Object(l.jsxs)("div",{className:"grid grid-cols-3 m-3 p-2",children:[Object(l.jsx)("img",{className:"h-24 m-5 ",src:"/images/turtle.png",alt:""}),Object(l.jsx)("img",{className:"h-24 m-5",src:"/images/mouse.png",alt:""}),Object(l.jsx)("img",{className:"h-24 m-5 ",src:"/images/dragon.png",alt:""})]}),Object(l.jsx)(f,{})]}),Object(l.jsx)("div",{className:"grid grid-cols-3 m-12  content-center ",children:r?Object(l.jsx)(l.Fragment,{}):s.map((function(e,t){return Object(l.jsx)(h,{name:e.name,url:e.url},t)}))}),Object(l.jsxs)("div",{className:" text-white flex justify-center mb-10",children:[Object(l.jsx)("button",{onClick:function(){j(Math.max(0,d-g))},className:" rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-500 mr-5 pl-5 pr-5 p-2",children:"prev"}),Object(l.jsx)("button",{className:" rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-700  p-2 pointer-events-none w-20",children:Math.floor(d/g)}),Object(l.jsx)("button",{onClick:function(){j(d+g)},className:" rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-500 ml-5 pl-4 pr-5 p-2",children:"next"})]})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a63bbb32.chunk.js.map