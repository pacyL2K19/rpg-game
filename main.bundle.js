!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1457)}({1457:function(e,t,s){"use strict";s.r(t);s(547);var i={parent:"phaser-container",type:Phaser.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:1200},debug:!1,x:0,y:0,width:8e4,height:600,thickness:32}}};class n extends Phaser.Scene{constructor(){super("Boot")}create(){this.scene.start("Preload")}}class a extends Phaser.Scene{constructor(){super("Preload")}preload(){this.load.image("playGame","./assets/ui/play-game.png"),this.load.image("settings","./assets/ui/settings.png"),this.load.image("scores","./assets/ui/score.png"),this.load.image("back","./assets/ui/back.png"),this.load.image("checkedBox","./assets/ui/checked.png"),this.load.image("box","./assets/ui/unchecked.png"),this.load.image("emptyTag","./assets/ui/empty-tag.png"),this.load.image("sky","./assets/sky.png"),this.load.image("replay","./assets/game/replay.png"),this.load.image("submit","./assets/game/submit.png"),this.load.image("endGame","./assets/game/endgame.png"),this.load.image("stars","./assets/game/star.png"),this.load.image("ground","./assets/game/ground.png"),this.load.image("menu","./assets/game/menu.png"),this.load.image("star","./assets/game/star2.png"),this.load.image("bigStar","./assets/game/star3.png"),this.load.spritesheet("face","assets/game/metalface78x92.png",{frameWidth:78,frameHeight:92}),this.load.spritesheet("heroRun","./assets/game/hero2.png",{frameWidth:24,frameHeight:25}),this.load.spritesheet("heroStand","./assets/game/hero1.png",{frameWidth:22,frameHeight:25}),this.load.audio("bgMusic","./assets/ui/bgMusic.mp3"),this.add.image(400,300,"logo");const e=this.add.graphics(),t=this.add.graphics();t.fillStyle(2236962,.8),t.fillRect(240,270,320,50);const s=this.make.text({x:400,y:250,text:"Loading...",style:{font:"20px monospace",fill:"#ffffff"}});s.setOrigin(.5,.5);const i=this.make.text({x:400,y:295,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}});i.setOrigin(.5,.5);const n=this.make.text({x:400,y:350,text:"",style:{font:"18px monospace",fill:"#ffffff"}});n.setOrigin(.5,.5),this.load.on("progress",t=>{i.setText(parseInt(100*t)+"%"),e.clear(),e.fillStyle(16777215,1),e.fillRect(250,280,300*t,30)}),this.load.on("fileprogress",e=>{n.setText("Loading asset: "+e.key)}),this.load.on("complete",()=>{e.destroy(),t.destroy(),s.destroy(),i.destroy(),n.destroy(),this.ready()}),this.timedEvent=this.time.delayedCall(1e3,this.ready,[],this)}init(){this.readyCount=0}ready(){this.readyCount+=1,2===this.readyCount&&this.scene.start("Title")}}class o extends Phaser.Scene{constructor(){super("Title")}create(){this.add.image(400,300,"sky"),this.add.image(732,566,"logo").setScale(.3),this.soundModel=this.sys.game.globals.soundModel,!0===this.soundModel.musicOn&&!1===this.soundModel.bgMusicPlaying&&(this.bgMusic=this.sound.add("bgMusic",{volume:.5,loop:!0}),this.bgMusic.play(),this.soundModel.bgMusicPlaying=!0,this.sys.game.globals.bgMusic=this.bgMusic),this.gameBtn=this.add.image(400,90,"playGame").setInteractive(),this.gameBtn.on("pointerdown",()=>{this.scene.start("User")}),this.settingsBtn=this.add.image(400,200,"settings").setInteractive(),this.settingsBtn.on("pointerdown",()=>{this.scene.start("Options")}),this.gameBtn=this.add.image(400,320,"scores").setInteractive(),this.gameBtn.on("pointerdown",()=>{this.scene.start("Scores")}),this.input.on("pointerover",(e,t)=>{t[0].setScale(1.1)}),this.input.on("pointerout",(e,t)=>{t[0].setScale(1)})}}class r extends Phaser.Scene{constructor(){super("Options")}create(){this.soundModel=this.sys.game.globals.soundModel,this.add.image(400,300,"sky"),this.add.image(732,566,"logo").setScale(.3),this.gameBtn=this.add.image(110,50,"back").setInteractive(),this.gameBtn.on("pointerdown",()=>{this.scene.start("Title")}),this.input.on("pointerover",(e,t)=>{t[0].setScale(1.1)}),this.input.on("pointerout",(e,t)=>{t[0].setScale(1)}),this.text=this.add.text(300,100,"Options",{fontSize:40}),this.musicButton=this.add.image(250,200,"checkedBox"),this.musicText=this.add.text(300,185,"Music Enabled",{fontSize:24}),this.soundButton=this.add.image(250,300,"checkedBox"),this.soundText=this.add.text(300,285,"Sound Enabled",{fontSize:24}),this.musicButton.setInteractive(),this.soundButton.setInteractive(),this.musicButton.on("pointerdown",()=>{this.soundModel.musicOn=!this.soundModel.musicOn,this.updateAudio()}),this.soundButton.on("pointerdown",()=>{this.soundModel.soundOn=!this.soundModel.soundOn,this.updateAudio()}),this.updateAudio()}updateAudio(){!1===this.soundModel.musicOn?(this.musicButton.setTexture("box"),this.sys.game.globals.bgMusic.stop(),this.soundModel.bgMusicPlaying=!1):(this.musicButton.setTexture("checkedBox"),!1===this.soundModel.bgMusicPlaying&&(this.sys.game.globals.bgMusic.play(),this.soundModel.bgMusicPlaying=!0)),!1===this.soundModel.soundOn?this.soundButton.setTexture("box"):this.soundButton.setTexture("checkedBox")}}let c,h,d,l,u,m;function p(e,t){t.disableBody(!0,!0),u+=10,m.setText("Score: "+u)}function g(){this.scene.pause(),this.sys.game.globals.userModel.score=u,this.scene.launch("EndGame")}class f extends Phaser.Scene{constructor(){super("Game")}create(){u=0,this.cameras.main.setBounds(0,0,8e4,600).setName("main"),h=this.physics.add.staticGroup();const e=this.cameras.main._bounds.width;for(let t=0;t<e;t+=2048)h.create(t,600,"ground").refreshBody();this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("heroRun",{start:0,end:2}),frameRate:10,repeat:-1}),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("heroRun",{start:3,end:5}),frameRate:10,repeat:-1}),this.anims.create({key:"standing",frames:this.anims.generateFrameNumbers("heroStand",{start:0,end:3}),frameRate:2,repeat:-1}),c=this.physics.add.sprite(100,300,"hero").setScale(2),c.setBounce(.3),c.setCollideWorldBounds(!0),c.body.setSize(25,20),this.Starfield(),this.Aliens(),this.Stars(),m=this.add.text(16,16,"score: 0",{fontSize:"32px",fill:"#fff"}),this.physics.add.collider(c,h),this.add.image(732,566,"logo").setScale(.3).setScrollFactor(0)}update(){const e=this.input.keyboard.createCursorKeys();e.right.isDown?(c.setVelocityX(400),c.anims.play("right",!0)):e.left.isDown?(c.setVelocityX(-400),c.anims.play("left",!0)):(c.setVelocityX(0),c.anims.play("standing",!0)),e.up.isDown&&c.body.touching.down&&(c.setVelocityY(-600),c.anims.play("right",!0)),this.cameras.main.scrollX=c.x-400,m.setScrollFactor(0,0)}Starfield(){const e=this.add.group({key:"star",frameQuantity:2e3});e.createMultiple({key:"bigStar",frameQuantity:200});const t=new Phaser.Geom.Rectangle(0,0,8e4,400);Phaser.Actions.RandomRectangle(e.getChildren(),t),e.children.iterate(e=>{let t=Math.max(.3,Math.random());"bigStar"===e.texture.key&&(t=.2),e.setScrollFactor(t)},this)}Stars(){const e=new Phaser.Geom.Rectangle(0,300,8e4,150);l=this.physics.add.group({key:"stars",repeat:400,setXY:{x:12,y:50,stepX:70},allowGravity:!1}),Phaser.Actions.RandomRectangle(l.getChildren(),e),this.physics.add.collider(l,h),this.physics.add.overlap(c,l,p,null,this)}Aliens(){const e=new Phaser.Geom.Rectangle(800,300,8e4,150),t={key:"metaleyes",frames:this.anims.generateFrameNumbers("face",{start:0,end:4}),frameRate:20,repeat:-1};this.anims.create(t);for(let t=0;t<32;t+=1){const t=Phaser.Math.Between(100,3e4),s=Phaser.Math.Between(100,300);d=this.physics.add.sprite(t,s,"face").play("metaleyes"),this.physics.add.collider(d,h),d.setBounce(1),d.setCollideWorldBounds(!0),d.setVelocity(Phaser.Math.Between(20,60),Phaser.Math.Between(20,60)),this.physics.add.overlap(c,d,g,null,this),Phaser.Actions.RandomRectangle(d,e)}}}var y=async(e,t=null,s=null)=>{let i,n,a;if("POST"===e){const e={user:t,score:s};n="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dl-game/scores/",i={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}}else n="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dl-game/scores/",i={mode:"cors"};try{a=await fetch(n,i)}catch(e){a=e}return(await a.json()).result};class b extends Phaser.Scene{constructor(){super("Scores")}create(){this.sys.canvas.style.cursor="progress";let e=50,t=1;y("GET","Daniel",114).then(s=>{s.sort((e,t)=>t.score-e.score),Object.keys(s).forEach((i,n)=>{e>600*t&&(this.bg=this.add.image(400,300+e-50,"sky"),t+=1,t%2==0&&(this.bg.rotation=3.14159)),this.img=this.add.image(400,e,"emptyTag"),this.lbl=this.make.text({text:n+1+" - ",style:{fill:"#422115"}}),this.lbl.x=this.img.x-this.img.width/2+15,this.lbl.y=e,this.display=this.make.text({text:`${s[i].user} : ${s[i].score}`,style:{fill:"#422115"}}),this.display.x=this.lbl.x+this.lbl.width,this.display.y=e,e+=100,n===s.length-1&&(this.logo=this.add.image(732,566,"logo").setScale(.3).setScrollFactor(0),this.sys.canvas.style.cursor="default")})}).catch(()=>{this.scene.stop()}),this.add.image(400,300,"sky"),this.gameBtn=this.add.image(110,50,"back").setInteractive(),this.gameBtn.on("pointerdown",()=>{this.scene.start("Title")}),this.input.on("pointerover",(e,t)=>{t[0].setScale(1.1)}),this.input.on("pointerout",(e,t)=>{t[0].setScale(1)}),this.input.on("wheel",(t,s,i,n)=>{this.cameras.main.scrollY+=10.5*n,this.cameras.main.scrollY<=0?this.cameras.main.scrollY=0:this.cameras.main.scrollY>=e-600&&(this.cameras.main.scrollY=e-600)})}}class x extends Phaser.Scene{constructor(){super("User")}create(){this.add.image(400,300,"sky"),this.add.image(732,566,"logo").setScale(.3),this.gameBtn=this.add.image(110,50,"back").setInteractive(),this.gameBtn.on("pointerdown",()=>{this.scene.start("Title")}),this.gameBtn=this.add.image(400,400,"submit").setInteractive(),this.gameBtn.on("pointerdown",()=>{this.start()}),this.input.on("pointerover",(e,t)=>{t[0].setScale(1.1)}),this.input.on("pointerout",(e,t)=>{t[0].setScale(1)}),this.lbl=this.make.text({text:"Enter your name bellow",style:{font:"36px monospace",fill:"#422115"}}),this.lbl.x=400-this.lbl.width/2,this.lbl.y=150,this.nameInput=this.make.text({text:"Yes, Click Here",style:{font:"40px monospace",fill:"#051a58"},selected:!1}),this.nameInput.setFontStyle("bold"),this.nameInput.x=400-this.nameInput.width/2,this.nameInput.y=240,this.nameInput.setInteractive(),this.input.on("pointerdown",(e,t)=>{0!==t.length?(t[0].selected=!0,this.nameInput.text=""):(this.nameInput.selected=!1,""===this.nameInput.text&&(this.nameInput.text="Yes, Click Here",this.nameInput.x=400-this.nameInput.width/2,this.nameInput.y=240))}),this.input.keyboard.on("keydown",e=>{!0===this.nameInput.selected&&(e.keyCode>=65&&e.keyCode<=90?this.nameInput.text+=e.key:32===e.keyCode?this.nameInput.text+=" ":8===e.keyCode?this.nameInput.text=this.nameInput.text.slice(0,-1):13===e.keyCode&&this.start(),this.nameInput.x=400-this.nameInput.width/2,this.nameInput.y=240)})}start(){const{text:e}=this.nameInput;""===e||"Yes, Click Here"===e||e.length>9?alert("Invalid Name: Name should have at More than 1 character and less than 9"):(this.sys.game.globals.userModel.user=this.nameInput.text,this.scene.start("Game"))}}class v extends Phaser.Scene{constructor(){super("EndGame")}create(){this.userModel=this.sys.game.globals.userModel,this.add.image(400,200,"endGame").setScrollFactor(0),this.replay=this.add.image(275,400,"replay").setScrollFactor(0).setInteractive(),this.replay.on("pointerdown",()=>{this.scene.start("Game")}),this.menu=this.add.image(400,500,"menu").setScrollFactor(0).setInteractive(),this.menu.on("pointerdown",()=>{this.scene.sendToBack("Game"),this.scene.start("Title")}),this.submit=this.add.image(525,400,"submit").setScrollFactor(0).setInteractive(),this.submit.on("pointerdown",()=>{y("POST",this.userModel.user,this.userModel.score).then(()=>{this.scene.sendToBack("Game"),this.scene.start("Scores")}).catch(()=>{this.scene.stop()})}),this.input.on("pointerover",(e,t)=>{t[0].setScale(1.1)}),this.input.on("pointerout",(e,t)=>{t[0].setScale(1)})}}class S{constructor(){this._soundOn=!0,this._musicOn=!0,this._bgMusicPlaying=!1}set musicOn(e){this._musicOn=e}get musicOn(){return this._musicOn}set soundOn(e){this._soundOn=e}get soundOn(){return this._soundOn}set bgMusicPlaying(e){this._bgMusicPlaying=e}get bgMusicPlaying(){return this._bgMusicPlaying}}class M{constructor(){this._user="",this._score=0}set user(e){this._user=e}get user(){return this._user}set score(e){this._score=e}get score(){return this._score}}class w extends Phaser.Game{constructor(){super(i);const e=new S,t=new M;this.globals={soundModel:e,bgMusic:null,userModel:t},this.scene.add("Boot",n),this.scene.add("Preload",a),this.scene.add("Title",o),this.scene.add("Options",r),this.scene.add("Scores",b),this.scene.add("User",x),this.scene.add("Game",f),this.scene.add("EndGame",v),this.scene.start("Boot")}}window.game=new w},547:function(e,t,s){var i=s(548),n=s(549);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1};i(n,a);e.exports=n.locals||{}},548:function(e,t,s){"use strict";var i,n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}e[t]=s}return e[t]}}(),o=[];function r(e){for(var t=-1,s=0;s<o.length;s++)if(o[s].identifier===e){t=s;break}return t}function c(e,t){for(var s={},i=[],n=0;n<e.length;n++){var a=e[n],c=t.base?a[0]+t.base:a[0],h=s[c]||0,d="".concat(c," ").concat(h);s[c]=h+1;var l=r(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(o[l].references++,o[l].updater(u)):o.push({identifier:d,updater:f(u,t),references:1}),i.push(d)}return i}function h(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var n=s.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,s,i){var n=s?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,n);else{var a=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function m(e,t,s){var i=s.css,n=s.media,a=s.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,g=0;function f(e,t){var s,i,n;if(t.singleton){var a=g++;s=p||(p=h(t)),i=u.bind(null,s,a,!1),n=u.bind(null,s,a,!0)}else s=h(t),i=m.bind(null,s,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(s)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var s=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<s.length;i++){var n=r(s[i]);o[n].references--}for(var a=c(e,t),h=0;h<s.length;h++){var d=r(s[h]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}s=a}}}},549:function(e,t,s){(t=s(550)(!1)).push([e.i,"*{box-sizing:border-box}body{display:flex;height:100vh;justify-content:center;margin:0;padding:0;width:100vw}body>canvas{width:100vw}",""]),e.exports=t},550:function(e,t,s){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=function(e,t){var s=e[1]||"",i=e[3];if(!i)return s;if(t&&"function"==typeof btoa){var n=(o=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[s].concat(a).concat([n]).join("\n")}var o,r,c;return[s].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(e,s,i){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(n[o]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);i&&n[c[0]]||(s&&(c[2]?c[2]="".concat(s," and ").concat(c[2]):c[2]=s),t.push(c))}},t}}});