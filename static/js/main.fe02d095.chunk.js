(this["webpackJsonppokemon-wiki"]=this["webpackJsonppokemon-wiki"]||[]).push([[0],{11:function(e,t,s){},14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),o=s(5),c=s.n(o),r=(s(11),s(2)),i=s.p+"static/media/pokemon-4657023_960_720.e97a3d90.png",l=s(0);function d(e){var t=e.showModal,s=e.setShowModal,n=e.name,a=e.abilities,o=e.forms,c=e.weight,r=e.height,i=e.image,d=e.types,m=e.moves,b=e.error,j=e.setError;return Object(l.jsx)(l.Fragment,{children:t&&n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:Object(l.jsx)("div",{className:"relative w-auto my-6 mx-auto lg:max-w-xl ",children:Object(l.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(l.jsxs)("div",{className:"capitalize flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",children:[Object(l.jsx)("h3",{className:"  lg:text-3xl font-semibold",children:b?"Not Found \ud83d\ude22":n}),Object(l.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return s(!1)},children:Object(l.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]})," ",Object(l.jsx)("div",{className:"capitalize relative p-6 flex-auto",children:b?"The Pokemon you are looking for is not available\ud83d\ude13":Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{className:"float-right h-48 ",src:i,alt:""}),Object(l.jsxs)("section",{className:" my-4 text-gray-900 text-lg font-bold leading-relaxed",children:[Object(l.jsxs)("p",{className:"mr-5",children:["Weight:"," ",Object(l.jsx)("span",{className:"font-normal text-xl text-gray-700",children:c})]}),Object(l.jsxs)("p",{children:["Height:"," ",Object(l.jsx)("span",{className:"font-normal text-xl text-gray-700",children:r})]}),Object(l.jsx)("h1",{children:"Abilities"}),a.map((function(e,t){return Object(l.jsx)("li",{className:"font-normal text-base text-gray-700",children:e.ability.name},t)})),Object(l.jsx)("h1",{children:"Form(s)"}),o.map((function(e,t){return Object(l.jsx)("li",{className:"font-normal text-base text-gray-700",children:e.name},t)})),Object(l.jsx)("h1",{children:"Type(s)"}),d.map((function(e,t){return Object(l.jsx)("li",{className:"font-normal text-base text-gray-700",children:e.type.name},t)})),Object(l.jsx)("h1",{children:"Moves"}),Object(l.jsxs)("p",{className:"font-normal text-base text-gray-700 ",children:[m.map((function(e,t){return Object(l.jsxs)("span",{children:[e.move.name,", "]},t)})),"."]})]})]})}),Object(l.jsx)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b",children:Object(l.jsx)("button",{className:"bg-emerald-500 text-red-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:function(){j(void 0),s(!1)},children:"Close"})})]})})}),Object(l.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null})}var m=s(4),b=s.n(m),j=s(6),u=function(e){function t(){return t=Object(j.a)(b.a.mark((function e(t){var s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=14;break}return e.prev=1,e.next=4,fetch(t);case 4:return s=e.sent,e.next=7,s.json();case 7:(n=e.sent)?(q(void 0),c(n.abilities),w(n.height),F(null!==n.sprites.other.dream_world.front_default?n.sprites.other.dream_world.front_default:null!==n.sprites.front_default?n.sprites.front_default:n.sprites.other["official-artwork"].front_default),y(n.types),f(n.weight),m(n.forms),A(n.moves),I(n.name)):q("Sorry! could not find the pokemon \ud83d\ude22"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),q("Sorry! could not find the pokemon \ud83d\ude22");case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),t.apply(this,arguments)}var s=Object(n.useState)([]),a=Object(r.a)(s,2),o=a[0],c=a[1],i=Object(n.useState)([]),l=Object(r.a)(i,2),d=l[0],m=l[1],u=Object(n.useState)(0),h=Object(r.a)(u,2),x=h[0],f=h[1],p=Object(n.useState)(0),g=Object(r.a)(p,2),O=g[0],w=g[1],v=Object(n.useState)([]),k=Object(r.a)(v,2),N=k[0],y=k[1],S=Object(n.useState)(""),M=Object(r.a)(S,2),C=M[0],F=M[1],z=Object(n.useState)(""),E=Object(r.a)(z,2),_=E[0],A=E[1],G=Object(n.useState)(!1),H=Object(r.a)(G,2),J=H[0],L=H[1],T=Object(n.useState)(""),W=Object(r.a)(T,2),B=W[0],I=W[1],P=Object(n.useState)(void 0),D=Object(r.a)(P,2),R=D[0],q=D[1];return Object(n.useEffect)((function(){!function(e){t.apply(this,arguments)}(e)}),[e]),[{abilities:o,weight:x,height:O,types:N,image:C,moves:_,show:J,forms:d,name:B,error:R},{setAbilities:c,setWeight:f,setHeight:w,setTypes:y,setImage:F,setMoves:A,setShow:L,setForms:m,setName:I,setError:q}]};function h(e){var t=e.name,s=e.url,n=u(s),a=Object(r.a)(n,2),o=a[0],c=o.abilities,m=o.weight,b=o.height,j=o.types,h=o.image,x=o.moves,f=o.show,p=o.forms,g=a[1],O=g.setShow,w=g.setError;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("button",{onClick:function(){O(!0)},className:"items-center bg-red-100 p-1 m-3 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-110",children:[Object(l.jsxs)("h1",{className:" capitalize lg:p-1 sm:text-xs lg:text-xl truncate font-bold text-red-900  ",children:[Object(l.jsx)("img",{src:i,className:"h-5 inline mr-2",alt:""}),t]}),Object(l.jsx)("img",{className:"h-24 float-left",src:h,alt:""})]}),Object(l.jsx)(d,{showModal:f,setShowModal:O,weight:m,height:b,types:j,forms:p,name:t,image:h,abilities:c,moves:x,setError:w})]})}function x(e){var t=Object(n.useState)("1"),s=Object(r.a)(t,2),a=s[0],o=s[1],c=Object(n.useState)(!1),i=Object(r.a)(c,2),m=i[0],b=i[1],j=u("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")),h=Object(r.a)(j,2),x=h[0],f=x.abilities,p=x.weight,g=x.height,O=x.types,w=x.image,v=x.moves,k=x.forms,N=x.name,y=x.error,S=h[1].setError;return Object(l.jsxs)(l.Fragment,{children:[m?Object(l.jsx)(d,{showModal:m,setShowModal:b,weight:p,height:g,types:O,forms:k,name:N,image:w,abilities:f,moves:v,error:y,setError:S}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("div",{className:"p-8  w-full flex justify-center",children:Object(l.jsxs)("div",{className:"flex  rounded-full shadow transition duration-500 ease-in-out hover:shadow-lg   sm:w-full lg:w-1/2 bg-white",children:[Object(l.jsx)("input",{className:"rounded-l-full w-full py-4 px-6 text-gray-900 leading-tight focus:outline-none focus:ring-red-400 focus:ring-4 transition duration-500 ease-in-out",id:"search",type:"text",placeholder:"Search",name:"search",onChange:function(e){o(e.target.value)}}),Object(l.jsx)("div",{className:"p-4",children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),o(a.toLowerCase()),b(!0)},className:"bg-black text-white rounded-full p-2 hover:bg-red-600 focus:outline-none w-12 h-12 flex items-center justify-center",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"white",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})})]})})]})}s(14);var f=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),s=t[0],a=t[1],o=Object(n.useState)(!0),c=Object(r.a)(o,2),i=c[0],d=c[1],m=Object(n.useState)(0),b=Object(r.a)(m,2),j=b[0],u=b[1],f=Object(n.useState)(15),p=Object(r.a)(f,2),g=p[0],O=p[1];return Object(n.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(g,"&offset=").concat(j)).then((function(e){return e.json()})).then((function(e){a(e.results),d(!1)}))}),[g,j]),Object(l.jsxs)("div",{className:"App  ",children:[Object(l.jsxs)("div",{className:" text-white flex justify-center mb-10",children:[" ",Object(l.jsx)("button",{onClick:function(){O(g+1)}})]}),Object(l.jsxs)("div",{className:"flex flex-col h-100 my-auto items-center",children:[Object(l.jsxs)("div",{className:"grid grid-cols-6  p-2 absolute top-10 z-0",children:[Object(l.jsx)("img",{className:"col-start-1 lg:h-48",src:"/images/turtle.png",alt:""}),Object(l.jsx)("img",{className:"col-end-7 lg:h-48",src:"/images/dragon.png",alt:""})]}),Object(l.jsx)("a",{className:"block self-center z-10 w-1/2 pointer-events-none mt-12 mb-3 ml-3 mr-3 ",href:"https://fontmeme.com/pokemon-font/",children:Object(l.jsx)("img",{src:"https://fontmeme.com/permalink/211021/74c529ba8b8fbb1b745ad02e1602b5f8.png",alt:"pokemon-font",border:"0"})}),Object(l.jsx)("p",{className:" pl-4 pr-4 pt-6 w-3/4 text-center z-10",children:"A Simple Pokemon Search tool made with ReactJs."}),Object(l.jsxs)("div",{className:" grid grid-cols-2 gap-4 mt-5",children:[Object(l.jsxs)("a",{href:"https://github.com/pawankm21/pokemon-wiki",children:[" ",Object(l.jsx)("img",{className:"h-8",alt:"GitHub Org's stars",src:"https://img.shields.io/github/stars/pawankm21/pokemon-wiki?style=social"})]}),Object(l.jsxs)("a",{href:"https://github.com/pawankm21/pokemon-wiki",children:[" ",Object(l.jsx)("img",{className:"h-8",alt:"GitHub forks",src:"https://img.shields.io/github/forks/pawankm21/pokemon-wiki?style=social"})]})]}),Object(l.jsx)(x,{})]}),Object(l.jsx)("div",{className:"grid lg:grid-cols-3 m-12 xl:grid-cols-4 md:grid-cols-2 content-center ",children:i?Object(l.jsx)(l.Fragment,{}):s.map((function(e,t){return Object(l.jsx)(h,{name:e.name,url:e.url},t)}))}),Object(l.jsxs)("div",{className:" text-white flex justify-center mb-10",children:[Object(l.jsx)("button",{onClick:function(){u(Math.max(0,j-g))},className:"shadow-xl  rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-500 mr-5 pl-5 pr-5 p-2",children:"prev"}),Object(l.jsx)("button",{className:"shadow-xl  rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-700  p-2 pointer-events-none w-20",children:Math.floor(j/g)}),Object(l.jsx)("button",{onClick:function(){u(j+g)},className:" shadow-xl rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-500 ml-5 pl-4 pr-5 p-2",children:"next"})]})]})};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fe02d095.chunk.js.map