(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{11:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),n=t(4),r=t.n(n),o=t(2),i=(t(9),t(0)),l=function(){var e=Object(c.useState)(null),s=Object(o.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)(null),r=Object(o.a)(n,2),l=r[0],u=r[1],j=Object(c.useState)(null),b=Object(o.a)(j,2),d=b[0],m=b[1],O=Object(c.useState)(0),p=Object(o.a)(O,2),h=p[0],f=p[1],k=Object(c.useState)(0),x=Object(o.a)(k,2),g=x[0],S=x[1],y=document.querySelector(".playerHand"),N=document.querySelector(".computerHand"),v=Object(c.useState)(""),C=Object(o.a)(v,2),H=C[0],w=C[1],E=Object(c.useState)(""),R=Object(o.a)(E,2),q=R[0],A=R[1],Y=Object(c.useState)("Click on \ud83d\udc4a\ud83c\udffd\u270b\ud83c\udffd\u270c\ud83c\udffd to start..."),I=Object(o.a)(Y,2),L=I[0],M=I[1],T=Object(c.useState)(""),J=Object(o.a)(T,2),P=J[0],U=J[1],W=function(e){M(""),U(""),a(e),z(),m(""),A("./images/rock.png"),w("./images/rock.png"),y.classList.add("scalable"),N.classList.add("scalable"),y.style.animation="shakePlayerHand 2s ease",N.style.animation="shakeComputerHand 2s ease"},z=function(){var e=["rock","paper","scissors"],s=Math.floor(Math.random()*e.length);u(e[s])};return Object(c.useEffect)((function(){var e=setTimeout((function(){var e=document.querySelector(".winner");switch(t+l){case"scissorspaper":case"rockscissors":case"paperrock":m("YOU WIN \ud83d\udcaa\ud83c\udffd !     "),U(Object(i.jsx)("i",{className:"fa fa-refresh"})),f((function(e){return e+1})),e.style.color="hsl(177, 58%, 22%)";break;case"paperscissors":case"scissorsrock":case"rockpaper":m("YOU LOSE \ud83d\ude0f !     "),U(Object(i.jsx)("i",{className:"fa fa-refresh"})),S((function(e){return e+1})),e.style.color="hsl(0, 47%, 32%)";break;case"rockrock":case"paperpaper":case"scissorsscissors":m("IT ' S A DRAW \ud83d\udc4f\ud83c\udffd !      "),U(Object(i.jsx)("i",{className:"fa fa-refresh"})),e.style.color="hsl(210, 18%, 30%)";break;default:m(""),U(""),S(0),f(0)}A("./images/".concat(l,".png")),w("./images/".concat(t,".png"))}),2e3);return function(){return clearTimeout(e)}}),[t,l]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Rock - Paper - Scissors React Game"}),Object(i.jsxs)("div",{className:"game",children:[Object(i.jsxs)("div",{className:"scores",children:[Object(i.jsxs)("h2",{children:["You : ",h]}),Object(i.jsxs)("h2",{children:["Computer : ",g]})]}),Object(i.jsxs)("div",{className:"hands",children:[Object(i.jsx)("img",{className:"playerHand",src:H,alt:"",title:"Your Hand",onAnimationEnd:function(){return y.style.animation=""}}),Object(i.jsx)("img",{className:"computerHand",src:q,alt:"",title:"Computer Hand",onAnimationEnd:function(){return N.style.animation=""}})]}),Object(i.jsx)("h2",{className:"message",children:L}),Object(i.jsxs)("h2",{className:"winner",children:[d,Object(i.jsx)("span",{onClick:function(){return function(){U(""),m(""),M("New Round");var e=document.querySelector(".message");e.style.bottom="30%",e.style.fontSize="1.5rem",A("./images/rock.png"),w("./images/rock.png"),f(0),S(0)}()},title:"Restart",children:P})]}),Object(i.jsxs)("div",{className:"selections",children:[Object(i.jsx)("button",{onClick:function(){return W("rock")},children:"\ud83d\udc4a\ud83c\udffd"}),Object(i.jsx)("button",{onClick:function(){return W("paper")},children:"\u270b\ud83c\udffd"}),Object(i.jsx)("button",{onClick:function(){return W("scissors")},children:"\u270c\ud83c\udffd"})]})]})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))},9:function(e,s,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.bdb57ba4.chunk.js.map