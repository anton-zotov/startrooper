!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){t.exports=n.p+"492d1caae820dfb21da9e2a4a1d3e62a.png"},function(t,e,n){t.exports=n.p+"6423a2227deb59499efe6ee1d5615b7e.png"},function(t,e,n){t.exports=n.p+"bca84165263a9a2c30b2fe5ec0567441.png"},function(t,e,n){t.exports=n.p+"7475b2c68b4b74ce5572bcc1af402486.png"},function(t,e,n){t.exports=n.p+"b609481bbf68a8c2ec04c319f9075c8e.png"},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};n(8)(i,a);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(7)(!1)).push([t.i,"html, body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=(s=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(h," */")),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[n].concat(o).concat([a]).join("\n")}var s,r,h;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var r=t[s];null!=r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="(".concat(r[2],") and (").concat(n,")")),e.push(r))}},e}},function(t,e,n){"use strict";var i,a={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function r(t,e){for(var n=[],i={},a=0;a<t.length;a++){var o=t[a],s=e.base?o[0]+e.base:o[0],r={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(r):n.push(i[s]={id:s,parts:[r]})}return n}function h(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=a[i.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(v(i.parts[s],e))}else{for(var r=[];s<i.parts.length;s++)r.push(v(i.parts[s],e));a[i.id]={id:i.id,refs:1,parts:r}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=n.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var a=s(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=l(e,a);else{var o=document.createTextNode(a),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function f(t,e,n){var i=n.css,a=n.media,o=n.sourceMap;if(a&&t.setAttribute("media",a),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,m=0;function v(t,e){var n,i,a;if(e.singleton){var o=m++;n=p||(p=c(e)),i=d.bind(null,n,o,!1),a=d.bind(null,n,o,!0)}else n=c(e),i=f.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=r(t,e);return h(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o],c=a[s.id];c&&(c.refs--,i.push(c))}t&&h(r(t,e),e);for(var u=0;u<i.length;u++){var l=i[u];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete a[l.id]}}}}},function(t,e,n){"use strict";function i(t=0,e=0,n=0,i=.5,a=.5,o=1.5){let s=document.createElement("canvas"),r=s.getContext("2d");return s.width=t*o,s.height=e*o,r.translate(s.width*i,s.height*a),r.rotate(n),{canvas:s,ctx:r}}function a({ctx:t},e,n,i){t.drawImage(e,Math.floor(n),Math.floor(i))}function o({ctx:t},e,n,i,o,s=.5,r=.5){t.setTransform(1,0,0,1,n,i),t.rotate(o),a({ctx:t},e,-e.width*s,-e.height*r),t.setTransform(1,0,0,1,0,0)}function s(t,e,{x:n,y:i,color:a="white",fontSize:o=20}){Array.isArray(t)||(t=[t]),e.textAlign="center",e.fillStyle=a,e.font=`${o}px Open Sans`;for(let a of t)e.fillText(a,n,i),i+=o}function r(t,{x:e,y:n,r:i,color:a}){t.strokeStyle=a,t.beginPath(),t.arc(e,n,i,0,2*Math.PI),t.stroke()}n.r(e);const h=(t,e)=>Math.acos(-t/Math.sqrt(t**2+e**2)),c=(t,e,n)=>t>n?n:t<e?e:t;function u(t,e){let n=new Set,i={x:100,y:100};return t.onkeydown=t=>f(t.key,n),t.onkeyup=t=>p(t.key,n),t.onmousemove=t=>{i.x+=t.movementX,i.y+=t.movementY,i.x=c(i.x,0,e.width),i.y=c(i.y,0,e.height)},e.onmousedown=t=>f(d(t),n),e.onmouseup=t=>p(d(t),n),e.oncontextmenu=()=>!1,()=>({keysPressed:n,mouseMovement:i})}const l=Object.freeze({left:"lmb",right:"rmb",middle:"mmb"});function d(t){switch(t.button){case 0:return l.left;case 1:return l.middle;case 2:return l.right}}function f(t,e){e.add(t.toLowerCase())}function p(t,e){e.delete(t.toLowerCase())}function m(t,e){let n=0,i=0,a=!1,o=!1,s=this.x+(this.weaponX||0),r=this.y+(this.weaponY||0),c=h(s-e.x,r-e.y);return e.y<this.y&&(c=-c),t.has("w")&&(i=-1),t.has("s")&&(i=1),t.has("d")&&(n=1),t.has("a")&&(n=-1),t.has("lmb")&&(a=!0),t.has("rmb")&&(o=!0),{upward:i,forward:n,angle:c,fire:a,secondary:o}}const v=Symbol("dead"),g={agent:1,bullet:2},y=3e-4;function w(t){this.hp=0,b(this,t)}function x(t){this.hp=Math.max(0,this.hp-t.damage),this.hp<=0&&b(this,t)}function b(t,e){e.owner&&!e.owner[v]&&(e.owner.score=(e.owner.score||0)+(t.worthPoints||100)),t.onDie?t.onDie():t[v]=!0}function M(t,e,n){let i=500*e*Math.cos(this.angle),a=500*e*Math.sin(this.angle);this.x+=i,this.y+=a,this.liveTimeLeft-=e,this.liveTimeLeft<=0&&(this[v]=!0),function(t,{gameObjects:e}){for(let n of e)n!==t&&n.interactsWithAmmo&&(t.team&&t.team===n.team||P(t,n)&&(t.onHit(n),n.onHit(t)))}(this,n)}function S(t){a(t,this.canvasBundle.canvas,this.x-15,this.y-15)}function P(t,e){let n=Math.min(t.width,t.height),i=Math.min(e.width,e.height);return(t.x-e.x)**2+(t.y-e.y)**2<=(n+i)**2}function T({cooldown:t}){t*=1e3;const e=Symbol("centered fire cooldown");return function(n,a){(!this[e]||this[e]+t<n)&&(a.push(function(t){let e={update:M,draw:S,onHit:w,x:t.x+(t.weaponX||0),y:t.y+(t.weaponY||0),angle:t.angle,width:20,height:6,canvasBundle:i(20,20,t.angle),liveTimeLeft:3,team:t.team,owner:t,damage:25,type:g.bullet};return e.canvasBundle.ctx.fillStyle="#00F0F0",e.canvasBundle.ctx.fillRect(-e.width/2,-e.height/2,e.width,e.height),e}(this)),this[e]=n)}}var B=n(0),L=n.n(B),H=n(1),j=n.n(H),k=n(2),O=n.n(k),C=n(3),A=n.n(C),R=n(4),I=n.n(R);const W={playerShip:L.a,shield:O.a,artilleryBody:A.a,artilleryGun:I.a,enemy1:j.a};const E=1,D=25;function N(t){this.host.shieldActive&&!this.isDepleted&&a(t,W.shield,this.x+70-W.shield.width/2,this.y-W.shield.height/2)}function q(t,e){this.recoveryPause&&(this.recoveryPause=Math.max(0,this.recoveryPause-e)),!this.host.shieldActive||this.isDepleted?this.isRecovering?this.recoveryPause||(this.hp=Math.min(this.maxHp,this.hp+D*e),this.hp===this.maxHp&&(this.isDepleted=!1)):(this.isRecovering=!0,this.recoveryPause=E):this.recoveryPause=E,this.x=this.host.x+70,this.y=this.host.y,this.interactsWithAmmo=this.host.shieldActive}function $(){this.isDepleted=!0,this.isRecovering=!0,this.recoveryPause=E}function F(){let t={update:_,draw:z,getControls:m,fire:T({cooldown:.2}),onHit:x,x:100,y:100,vx:0,vy:0,angle:0,width:W.playerShip.width,height:W.playerShip.height,weaponX:25,canvasBundle:i(100,100),interactsWithAmmo:!0,team:1,maxHp:100,hp:100,shieldActive:!1,score:0},e=(n=t,{update:q,draw:N,onHit:x,onDie:$,x:100,y:100,width:W.shield.width,height:W.shield.height,canvasBundle:i(100,100),host:n,team:n.team,hp:100,maxHp:100,interactsWithAmmo:!0});var n;return t.shield=e,[t,e]}function _(t,e,n){let i=this.getControls(n.keysPressed,n.mouseMovement),a=400;i.forward&&i.upward&&(a*=Math.SQRT1_2);let o=i.forward*e*a;this.x+=o,this.x=c(this.x,this.width/2,n.canvasBundle.canvas.width-this.width/2);let s=i.upward*e*a;this.y+=s,this.y=c(this.y,this.height/2,n.canvasBundle.canvas.height-this.height/2),this.angle=i.angle,i.fire&&this.fire(t,n.gameObjects),this.shieldActive=i.secondary}function z(t){a(t,W.playerShip,this.x-W.playerShip.width/2,this.y-W.playerShip.height/2)}function U({ctx:t},e){void 0!==e&&s(`FPS: ${e}`,t,{x:50,y:20})}function X(t,{dt:e,player:n,wave:i}){U(t,e),function({ctx:t,canvas:e},n){s(`Health: ${Math.round(n.hp/n.maxHp*100)}%`,t,{x:70,y:e.height-30})}(t,n),function({ctx:t,canvas:e},n){s(`Shield: ${Math.round(n.shield.hp/n.shield.maxHp*100)}%`,t,{x:e.width-100,y:e.height-30})}(t,n),function({ctx:t,canvas:e},n){s(`Score: ${n.score||0}`,t,{x:e.width/2,y:e.height-55})}(t,n),function({ctx:t,canvas:e},n){s(`Wave: ${n}`,t,{x:e.width/2,y:e.height-30})}(t,i)}const Y=t=>t[Math.floor(t.length*Math.random())];let G=!1,J=[],Q=[];function K(t,e,n,a){return{x:t,speed:a,canvasBundle:i(e,n,0,0,0,1)}}function V({canvas:t,ctx:e}){let n=Y(J),i=Math.random()*t.width,o=Math.random()*t.height;a({ctx:e},n.canvas,i,o)}function Z({ctx:t},e){let n=.7*Math.random();t.beginPath();for(let n=0;n<5;n++)t.lineTo(0,e),t.translate(0,e),t.rotate(2*Math.PI/10),t.lineTo(0,-e),t.translate(0,-e),t.rotate(-6*Math.PI/10);t.lineTo(0,e),t.closePath(),t.fillStyle="rgb(255, 255, 200)",t.fillStyle=`rgba(255, 255, 200, ${n})`,t.fill()}function tt(t){G||function({canvas:t,ctx:e}){for(let t=0;t<20;t++){let e=i(10,10);Z(e,1+t%3),J.push(e)}for(let e=1;e<=5;e++)Q.push(K(0,t.width,t.height,e)),Q.push(K(t.width,t.width,t.height,e));let n=Math.floor(t.width*t.height*y);for(let t=0;t<n;t++)for(let t of Q)V(t.canvasBundle);G=!0}(t),function({canvas:t,ctx:e},n="#000"){e.fillStyle=n,e.fillRect(-t.width/2,-t.height/2,2*t.width,2*t.height)}(t);for(let e of Q)t.ctx.drawImage(e.canvasBundle.canvas,e.x,0),e.x-=e.speed,e.x+e.canvasBundle.canvas.width<0&&(e.x+=2*e.canvasBundle.canvas.width)}function et(t){let{width:e,height:n}=t.canvasBundle.canvas;return{update:nt,draw:it,fire:T({cooldown:1}),onHit:x,x:e+100,y:100,angle:Math.PI,width:50,height:50,canvasBundle:i(50,50),stepTime:3,stepTimeLeft:3,step:0,interactsWithAmmo:!0,team:2,hp:5,canvasWidth:e,canvasHeight:n,timeLived:0,type:g.agent}}function nt(t,e,n){let i=-250*e;this.x+=i,this.y=.4*this.canvasHeight*(1.2+Math.sin(2*this.timeLived)),this.stepTimeLeft-=e,this.timeLived+=e,this.stepTimeLeft<=0&&(this.stepTimeLeft=this.stepTime,this.step=(this.step+1)%2),this.x<-100&&(this[v]=!0),this.fire(t,n.gameObjects)}function it(t){a(t,W.enemy1,this.x-W.enemy1.width/2,this.y-W.enemy1.height/2)}let at,ot=0;function st(t){let e=ot++%2?"bottom":"top",{width:n,height:a}=t.canvasBundle.canvas;return{update:rt,draw:ht,fire:T({cooldown:1}),onHit:x,x:n+100,y:"bottom"===e?20:a-20,position:e,angle:Math.PI,width:23,height:39,canvasBundle:i(50,50),stepTime:3,stepTimeLeft:3,step:0,interactsWithAmmo:!0,team:2,hp:5,canvasWidth:n,canvasHeight:a,created:t.currentTime,type:g.agent}}function rt(t,e,n){let i=-150*e;this.x+=i,this.x<-100&&(this[v]=!0),this.angle=function(t,{player:e}){let n=t.x-e.x,i=t.y-e.y,a=h(n,i);i>0&&(a=-a);return a}(this,n),this.weaponX=10*Math.cos(this.angle),this.weaponY=10*Math.sin(this.angle),this.fire(t,n.gameObjects)}function ht(t){o(t,W.artilleryBody,this.x,this.y,"top"===this.position?Math.PI/2:-Math.PI/2),o(t,W.artilleryGun,this.x,this.y,this.angle,.15,.5)}function ct(t,e){let n=0,i=!1,a=[],o=0;return{nextWave:function(){a.length||(i=!0,a=function(t){let e=Math.min(10,Math.floor(t/2)),n=Math.min(10,1+t/2),i=[3];for(;e>0||n>0;)e-- >0&&i.push(st),n-- >0&&i.push(et),i.push(1);return i}(++n))},getWaveNumber:()=>n,update:e=>{if(o)o=Math.max(0,o-e);else if(a.length){let e=a.shift();"number"==typeof e?o=e:t.gameObjects.push(e(t,{id:0}))}}}}function ut(t){let e=t.getContext("2d"),n=[];at={canvasBundle:{canvas:t,ctx:e},gameObjects:n,getInputs:u(window,t),scoreTimer:0},[at.player,at.shield]=F(),n.push(at.player,at.shield),at.spawner=ct(at)}function lt(t,e=t){if(!at.isRunning)return;at.currentTime=t;let n=0;e&&(n=(t-e)/1e3),function(t,e){let{keysPressed:n,mouseMovement:i}=at.getInputs();at.keysPressed=n,at.mouseMovement=i;let a=0;for(let n of at.gameObjects)n.update(t,e,at),n.type===g.agent&&2===n.team&&a++;at.spawner.update(e),at.gameObjects=at.gameObjects.filter(t=>!t[v]),a||at.spawner.nextWave();(function(t){at.dtHistory||(at.dtHistory=[]);at.dtHistory.push(t),at.dtHistory.length>10&&at.dtHistory.shift();let e=at.dtHistory.reduce((t,e)=>t+e,0)/at.dtHistory.length;at.fps=e?Math.round(1/e):0})(e),function(t){if(at.player[v])return;at.scoreTimer+=t,at.scoreTimer>=1&&(at.scoreTimer-=1,at.player.score+=10)}(e)}(t,n),dt(),requestAnimationFrame(e=>lt(e,t))}function dt(){tt(at.canvasBundle);for(let t of at.gameObjects)t.draw(at.canvasBundle);X(at.canvasBundle,{player:at.player,shield:at.shield,wave:at.spawner.getWaveNumber()}),U(at.canvasBundle,at.fps),function({ctx:t,canvas:e},n){if(!n)return;let{x:i,y:a}=n;r(t,{x:i,y:a,r:14,color:"white"}),r(t,{x:i,y:a,r:1,color:"white"})}(at.canvasBundle,at.mouseMovement),at.player[v]?function({ctx:t,canvas:e},n){s(["Game over",`You score: ${n}`],t,{x:e.width/2,y:.5*e.height-70,fontSize:40}),s("Click to play again",t,{x:e.width/2,y:.5*e.height+10})}(at.canvasBundle,at.player.score):at.isRunning||function({ctx:t,canvas:e}){s(["Click on the screen to resume the game","Use W, A, S, D to move,","left mouse button to shoot","right mouse button to activate shield"],t,{x:e.width/2,y:e.height/2-40})}(at.canvasBundle)}function ft(){at.isRunning=!1,dt()}function pt(){at.isRunning||(at.isRunning=!0,requestAnimationFrame(lt))}function mt(){at.player[v]&&(ut(at.canvasBundle.canvas),at.isRunning=!0)}n(5);let vt=document.getElementById("scene");vt.width=window.innerWidth-5,vt.height=window.innerHeight-5,async function(t){t.getContext("2d"),await function(){let t=[];for(let e in W){let n=new Image;n.src=W[e],t.push(new Promise(t=>n.onload=t)),W[e]=n}return Promise.all(t)}(),ut(t),dt(),function(t,e,n){function i(){document.pointerLockElement===t||document.mozPointerLockElement===t?e():n()}document.addEventListener("pointerlockchange",i,!1),document.addEventListener("mozpointerlockchange",i,!1)}(t,pt,ft),t.addEventListener("click",()=>(function(t){t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock,t.requestPointerLock()})(t)),t.addEventListener("mousedown",mt)}(vt)}]);