/*!
 * Stockfish copyright T. Romstad, M. Costalba, J. Kiiski, G. Linscott
 * and other contributors.
 *
 * Released under the GNU General Public License v3.
 *
 * Compiled to JavaScript and WebAssembly by Niklas Fiekas
 * <niklas.fiekas@backscattering.de> using Emscripten.
 *
 * https://github.com/niklasf/stockfish.wasm
 */
var Stockfish=function(){var e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(e=e||__filename),function(r){function n(){return R.buffer!=j&&z(R.buffer),F}function t(){return R.buffer!=j&&z(R.buffer),P}function a(){return R.buffer!=j&&z(R.buffer),W}function o(){return R.buffer!=j&&z(R.buffer),C}function i(){return R.buffer!=j&&z(R.buffer),Y}var u,s,c;r=r||{},u||(u=void 0!==r?r:{}),u.ready=new Promise(function(e,r){s=e,c=r}),function(){function e(){var n=t.shift();if(!r&&void 0!==n){if("quit"===n)return u.terminate();var o=u.ccall("uci_command","number",["string"],[n]);o&&t.unshift(n),a=o?2*a:1,setTimeout(e,a)}}var r=!1,n=[];u.print=function(e){0===n.length?console.log(e):setTimeout(function(){for(var r=0;r<n.length;r++)n[r](e)})},u.addMessageListener=function(e){n.push(e)},u.removeMessageListener=function(e){0<=(e=n.indexOf(e))&&n.splice(e,1)},u.terminate=function(){r=!0,pe.Ea()};var t=[],a=1;u.postMessage=function(e){t.push(e)},u.postRun=function(){u.postMessage=function(r){t.push(r),1===t.length&&e()},e()}}();var f,l={};for(f in u)u.hasOwnProperty(f)&&(l[f]=u[f]);var d=[],p="./this.program";function m(e,r){throw r}var h,_,g;h="object"==typeof window,_="function"==typeof importScripts,g="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node;var v=u.ENVIRONMENT_IS_PTHREAD||!1;v&&(j=u.buffer);var y,w,b,A,k="";function x(e){return u.locateFile?u.locateFile(e,k):k+e}if(g){var E;k=_?require("path").dirname(k)+"/":__dirname+"/",y=function(e,r){return b||(b=require("fs")),A||(A=require("path")),e=A.normalize(e),b.readFileSync(e,r?null:"utf8")},w=function(e){return(e=y(e,!0)).buffer||(e=new Uint8Array(e)),B(e.buffer),e},1<process.argv.length&&(p=process.argv[1].replace(/\\/g,"/")),d=process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof _r))throw e}),process.on("unhandledRejection",ae),m=function(e){process.exit(e)},u.inspect=function(){return"[Emscripten Module object]"};try{E=require("worker_threads")}catch(e){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),e}global.Worker=E.Worker}else(h||_)&&(_?k=self.location.href:"undefined"!=typeof document&&document.currentScript&&(k=document.currentScript.src),e&&(k=e),k=0!==k.indexOf("blob:")?k.substr(0,k.lastIndexOf("/")+1):"",g?(y=function(e,r){return b||(b=require("fs")),A||(A=require("path")),e=A.normalize(e),b.readFileSync(e,r?null:"utf8")},w=function(e){return(e=y(e,!0)).buffer||(e=new Uint8Array(e)),B(e.buffer),e}):(y=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},_&&(w=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)})));g&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var M,S,D,T=u.print||console.log.bind(console),I=u.printErr||console.warn.bind(console);for(f in l)l.hasOwnProperty(f)&&(u[f]=l[f]);l=null,u.arguments&&(d=u.arguments),u.thisProgram&&(p=u.thisProgram),u.quit&&(m=u.quit),u.wasmBinary&&(S=u.wasmBinary),u.noExitRuntime&&(D=u.noExitRuntime),"object"!=typeof WebAssembly&&ae("no native wasm support detected");var R,O,j,F,P,W,C,Y,q=!1;function B(e,r){e||ae("Assertion failed: "+r)}function H(e,r,n){n=r+n;for(var t="";!(r>=n);){var a=e[r++];if(!a)break;if(128&a){var o=63&e[r++];if(192==(224&a))t+=String.fromCharCode((31&a)<<6|o);else{var i=63&e[r++];65536>(a=224==(240&a)?(15&a)<<12|o<<6|i:(7&a)<<18|o<<12|i<<6|63&e[r++])?t+=String.fromCharCode(a):(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else t+=String.fromCharCode(a)}return t}function L(e){return e?H(t(),e,void 0):""}function N(e,r,n,t){if(0<t){t=n+t-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o)o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a);if(127>=o){if(n>=t)break;r[n++]=o}else{if(2047>=o){if(n+1>=t)break;r[n++]=192|o>>6}else{if(65535>=o){if(n+2>=t)break;r[n++]=224|o>>12}else{if(n+3>=t)break;r[n++]=240|o>>18,r[n++]=128|o>>12&63}r[n++]=128|o>>6&63}r[n++]=128|63&o}}r[n]=0}}function U(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++n)),127>=t?++r:r=2047>=t?r+2:65535>=t?r+3:r+4}return r}function G(e){var r=U(e)+1,t=lr(r);return N(e,n(),t,r),t}function V(e,r){n().set(e,r)}function z(e){j=e,u.HEAP8=F=new Int8Array(e),u.HEAP16=new Int16Array(e),u.HEAP32=W=new Int32Array(e),u.HEAPU8=P=new Uint8Array(e),u.HEAPU16=new Uint16Array(e),u.HEAPU32=C=new Uint32Array(e),u.HEAPF32=new Float32Array(e),u.HEAPF64=Y=new Float64Array(e)}var J=u.INITIAL_MEMORY||67108864;if(v)R=u.wasmMemory,j=u.buffer;else if(u.wasmMemory)R=u.wasmMemory;else if(!((R=new WebAssembly.Memory({initial:J/65536,maximum:32768,shared:!0})).buffer instanceof SharedArrayBuffer))throw I("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),g&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),Error("bad memory");R&&(j=R.buffer),J=j.byteLength,z(j);var X,Q=[],Z=[],K=[],$=[];function ee(){var e=u.preRun.shift();Q.unshift(e)}v||Z.push({Ia:function(){ze()}});var re=0,ne=null,te=null;function ae(e){throw u.onAbort&&u.onAbort(e),v&&console.error("Pthread aborting at "+Error().stack),I(e),q=!0,e=new WebAssembly.RuntimeError("abort("+e+"). Build with -s ASSERTIONS=1 for more info."),c(e),e}function oe(){var e=ie;return String.prototype.startsWith?e.startsWith("data:application/octet-stream;base64,"):0===e.indexOf("data:application/octet-stream;base64,")}u.preloadedImages={},u.preloadedAudios={};var ie="stockfish.wasm";function ue(){var e=ie;try{if(e==ie&&S)return new Uint8Array(S);if(w)return w(e);throw"both async and sync fetching of the wasm failed"}catch(e){ae(e)}}oe()||(ie=x(ie));var se={11752:function(){throw"Canceled!"},12164:function(e,r){setTimeout(function(){nr(e,r)},0)}};function ce(e){for(;0<e.length;){var r=e.shift();if("function"==typeof r)r(u);else{var n=r.Ia;"number"==typeof n?void 0===r.ma?X.get(n)():X.get(n)(r.ma):n(void 0===r.ma?null:r.ma)}}}function fe(e,r){if(0>=e||e>n().length||1&e||0>r)return-28;if(0==r)return 0;2147483647<=r&&(r=1/0);var t=Atomics.load(a(),hr>>2),o=0;if(t==e&&Atomics.compareExchange(a(),hr>>2,t,0)==t&&(o=1,0>=--r))return 1;if(0<=(e=Atomics.notify(a(),e>>2,r)))return e+o;throw"Atomics.notify returned an unexpected value "+e}function le(e){if(v)throw"Internal Error! cleanupThread() can only ever be called from main application thread!";if(!e)throw"Internal Error! Null pthread_ptr in cleanupThread!";a()[e+12>>2]=0,(e=pe.ga[e])&&pe.ta(e.worker)}u._emscripten_futex_wake=fe;var de,pe={fa:[],ia:[],La:function(){for(var e=0;1>e;++e)pe.za()},Ma:function(){for(var e=Je(228),r=0;57>r;++r)o()[e/4+r]=0;a()[e+12>>2]=e,r=e+152,a()[r>>2]=r;var n=Je(512);for(r=0;128>r;++r)o()[n/4+r]=0;Atomics.store(o(),e+100>>2,n),Atomics.store(o(),e+40>>2,e),sr(e,!_,1),er(e)},Na:function(){pe.receiveObjectTransfer=pe.Pa,pe.setThreadStatus=pe.Ra,pe.threadCancel=pe.Ta,pe.threadExit=pe.Ua},ga:{},Fa:[],Ra:function(){},Da:function(){for(;0<pe.Fa.length;)pe.Fa.pop()();v&&Ke()&&$e()},Ua:function(e){var r=Ke();r&&(Atomics.store(o(),r+4>>2,e),Atomics.store(o(),r+0>>2,1),Atomics.store(o(),r+56>>2,1),Atomics.store(o(),r+60>>2,0),pe.Da(),fe(r+0,2147483647),sr(0,0,0),v&&postMessage({cmd:"exit"}))},Ta:function(){pe.Da();var e=Ke();Atomics.store(o(),e+4>>2,-1),Atomics.store(o(),e+0>>2,1),fe(e+0,2147483647),sr(0,0,0),postMessage({cmd:"cancelDone"})},Ea:function(){for(var e in pe.ga){var r=pe.ga[e];r&&r.worker&&pe.ta(r.worker)}for(pe.ga={},e=0;e<pe.fa.length;++e){var n=pe.fa[e];n.terminate()}for(pe.fa=[],e=0;e<pe.ia.length;++e)r=(n=pe.ia[e]).ea,pe.ya(r),n.terminate();pe.ia=[]},ya:function(e){if(e){if(e.ha){var r=a()[e.ha+100>>2];a()[e.ha+100>>2]=0,Xe(r),Xe(e.ha)}e.ha=0,e.xa&&e.ja&&Xe(e.ja),e.ja=0,e.worker&&(e.worker.ea=null)}},ta:function(e){pe.Qa(function(){delete pe.ga[e.ea.ha],pe.fa.push(e),pe.ia.splice(pe.ia.indexOf(e),1),pe.ya(e.ea),e.ea=void 0})},Qa:function(e){a()[mr>>2]=0;try{e()}finally{a()[mr>>2]=1}},Pa:function(){},Ba:function(r,n){r.onmessage=function(e){var t=e.data,i=t.cmd;if(r.ea&&(pe.Ga=r.ea.ha),t.targetThread&&t.targetThread!=Ke()){var u=pe.ga[t.lb];u?u.worker.postMessage(e.data,t.transferList):console.error('Internal error! Worker sent a message "'+i+'" to target pthread '+t.targetThread+", but that thread no longer exists!")}else if("processQueuedMainThreadWork"===i)ar();else if("spawnThread"===i)Ye(e.data);else if("cleanupThread"===i)le(t.thread);else if("killThread"===i){if(e=t.thread,v)throw"Internal Error! killThread() can only ever be called from main application thread!";if(!e)throw"Internal Error! Null pthread_ptr in killThread!";a()[e+12>>2]=0,(e=pe.ga[e]).worker.terminate(),pe.ya(e),pe.ia.splice(pe.ia.indexOf(e.worker),1),e.worker.ea=void 0}else if("cancelThread"===i){if(e=t.thread,v)throw"Internal Error! cancelThread() can only ever be called from main application thread!";if(!e)throw"Internal Error! Null pthread_ptr in cancelThread!";pe.ga[e].worker.postMessage({cmd:"cancel"})}else if("loaded"===i)r.loaded=!0,n&&n(r),r.na&&(r.na(),delete r.na);else if("print"===i)T("Thread "+t.threadId+": "+t.text);else if("printErr"===i)I("Thread "+t.threadId+": "+t.text);else if("alert"===i)alert("Thread "+t.threadId+": "+t.text);else if("exit"===i)r.ea&&Atomics.load(o(),r.ea.ha+64>>2)&&pe.ta(r);else if("exitProcess"===i)try{vr(t.returnCode)}catch(e){if(e instanceof _r)return;throw e}else"cancelDone"===i?pe.ta(r):"objectTransfer"!==i&&("setimmediate"===e.data.target?r.postMessage(e.data):I("worker sent an unknown command "+i));pe.Ga=void 0},r.onerror=function(e){I("pthread sent an error! "+e.filename+":"+e.lineno+": "+e.message)},g&&(r.on("message",function(e){r.onmessage({data:e})}),r.on("error",function(e){r.onerror(e)}),r.on("exit",function(){})),r.postMessage({cmd:"load",urlOrBlob:u.mainScriptUrlOrBlob||e,wasmMemory:R,wasmModule:O})},za:function(){var e=x("stockfish.worker.js");pe.fa.push(new Worker(e))},Ja:function(){return 0==pe.fa.length&&(pe.za(),pe.Ba(pe.fa[0])),0<pe.fa.length?pe.fa.pop():null},$a:function(e){for(e=performance.now()+e;performance.now()<e;);}};u.establishStackSpace=function(e,r){dr(e,r),fr(e)},u.getNoExitRuntime=function(){return D},u.invokeEntryPoint=function(e,r){return X.get(e)(r)},de=g?function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:v?function(){return performance.now()-u.__performance_now_clock_drift}:function(){return performance.now()};var me=[null,[],[]],he={};function _e(e,r,n){return v?be(2,1,e,r,n):0}function ge(e,r,n){return v?be(3,1,e,r,n):0}function ve(e,r,n){if(v)return be(4,1,e,r,n)}function ye(){g||_||(M||(M={}),M["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]||(M["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]=1,I("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")))}function we(e,r,t){if(0>=e||e>n().length||1&e)return-28;if(h){if(Atomics.load(a(),e>>2)!=r)return-6;var o=performance.now();for(t=o+t,Atomics.exchange(a(),hr>>2,e);;){if((o=performance.now())>t)return Atomics.exchange(a(),hr>>2,0),-73;if(0==(o=Atomics.exchange(a(),hr>>2,0)))break;if(ar(),Atomics.load(a(),e>>2)!=r)return-6;Atomics.exchange(a(),hr>>2,e)}return 0}if("timed-out"===(e=Atomics.wait(a(),e>>2,r,t)))return-73;if("not-equal"===e)return-6;if("ok"===e)return 0;throw"Atomics.wait returned an unexpected value "+e}function be(e,r){for(var n=arguments.length-2,t=cr(),a=lr(8*n),o=a>>3,u=0;u<n;u++){var s=arguments[2+u];i()[o+u]=s}return n=or(e,n,a,r),fr(t),n}var Ae=[],ke=[],xe=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function Ee(e){return e=2<e?L(e):e,xe[e]||("undefined"!=typeof document?document.querySelector(e):void 0)}function Me(e,r,n){var o=Ee(e);if(!o)return-4;if(o.ra&&(a()[o.ra>>2]=r,a()[o.ra+4>>2]=n),!o.Ca&&o.bb){if(o.ra){o=a()[o.ra+8>>2],e=e?L(e):"";var i=cr(),u=lr(12),s=0;if(e){s=U(e)+1;var c=Je(s);N(e,t(),c,s),s=c}return a()[u>>2]=s,a()[u+4>>2]=r,a()[u+8>>2]=n,ir(0,o,657457152,0,s,u),fr(i),1}return-4}return o.Ca&&(o=o.Ca),e=!1,o.qa&&o.qa.pa&&(e=0===(e=o.qa.pa.getParameter(2978))[0]&&0===e[1]&&e[2]===o.width&&e[3]===o.height),o.width=r,o.height=n,e&&o.qa.pa.viewport(0,0,r,n),0}function Se(e,r,n){return v?be(5,1,e,r,n):Me(e,r,n)}var De,Te=["default","low-power","high-performance"],Ie={};function Re(){if(!De){var e,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:p||"./this.program"};for(e in Ie)r[e]=Ie[e];var n=[];for(e in r)n.push(e+"="+r[e]);De=n}return De}function Oe(e,r){if(v)return be(6,1,e,r);var t=0;return Re().forEach(function(o,i){var u=r+t;for(i=a()[e+4*i>>2]=u,u=0;u<o.length;++u)n()[i++>>0]=o.charCodeAt(u);n()[i>>0]=0,t+=o.length+1}),0}function je(e,r){if(v)return be(7,1,e,r);var n=Re();a()[e>>2]=n.length;var t=0;return n.forEach(function(e){t+=e.length+1}),a()[r>>2]=t,0}function Fe(e){return v?be(8,1,e):0}function Pe(e,r,n,t){return v?be(9,1,e,r,n,t):(e=he.fb(e),r=he.eb(e,r,n),a()[t>>2]=r,0)}function We(e,r,n,t,a){if(v)return be(10,1,e,r,n,t,a)}function Ce(e,r,n,o){if(v)return be(11,1,e,r,n,o);for(var i=0,u=0;u<n;u++){for(var s=a()[r+8*u>>2],c=a()[r+(8*u+4)>>2],f=0;f<c;f++){var l=t()[s+f],d=me[e];0===l||10===l?((1===e?T:I)(H(d,0)),d.length=0):d.push(l)}i+=c}return a()[o>>2]=i,0}function Ye(e){if(v)throw"Internal Error! spawnThread() can only ever be called from main application thread!";var r=pe.Ja();if(void 0!==r.ea)throw"Internal error!";if(!e.sa)throw"Internal error, no pthread ptr!";pe.ia.push(r);for(var n=Je(512),t=0;128>t;++t)a()[n+4*t>>2]=0;var i=e.ja+e.ka,u=(t=pe.ga[e.sa]={worker:r,ja:e.ja,ka:e.ka,xa:e.xa,ha:e.sa}).ha>>2;Atomics.store(o(),u+16,e.detached),Atomics.store(o(),u+25,n),Atomics.store(o(),u+10,t.ha),Atomics.store(o(),u+20,e.ka),Atomics.store(o(),u+19,i),Atomics.store(o(),u+26,e.ka),Atomics.store(o(),u+28,i),Atomics.store(o(),u+29,e.detached),n=Qe()+40,Atomics.store(o(),u+43,n),r.ea=t;var s={cmd:"run",start_routine:e.Sa,arg:e.ma,threadInfoStruct:e.sa,stackBase:e.ja,stackSize:e.ka};r.na=function(){s.time=performance.now(),r.postMessage(s,e.Za)},r.loaded&&(r.na(),delete r.na)}function qe(e){return 0==e%4&&(0!=e%100||0==e%400)}function Be(e,r){for(var n=0,t=0;t<=r;n+=e[t++]);return n}var He=[31,29,31,30,31,30,31,31,30,31,30,31],Le=[31,28,31,30,31,30,31,31,30,31,30,31];function Ne(e,r){for(e=new Date(e.getTime());0<r;){var n=e.getMonth(),t=(qe(e.getFullYear())?He:Le)[n];if(!(r>t-e.getDate())){e.setDate(e.getDate()+r);break}r-=t-e.getDate()+1,e.setDate(1),11>n?e.setMonth(n+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return e}function Ue(e,r,n,t){function o(e,r,n){for(e="number"==typeof e?e.toString():e||"";e.length<r;)e=n[0]+e;return e}function i(e,r){return o(e,r,"0")}function u(e,r){function n(e){return 0>e?-1:0<e?1:0}var t;return 0===(t=n(e.getFullYear()-r.getFullYear()))&&0===(t=n(e.getMonth()-r.getMonth()))&&(t=n(e.getDate()-r.getDate())),t}function s(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function c(e){e=Ne(new Date(e.da+1900,0,1),e.wa);var r=new Date(e.getFullYear()+1,0,4),n=s(new Date(e.getFullYear(),0,4));return r=s(r),0>=u(n,e)?0>=u(r,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var f=a()[t+40>>2];for(var l in t={Xa:a()[t>>2],Wa:a()[t+4>>2],ua:a()[t+8>>2],oa:a()[t+12>>2],la:a()[t+16>>2],da:a()[t+20>>2],va:a()[t+24>>2],wa:a()[t+28>>2],mb:a()[t+32>>2],Va:a()[t+36>>2],Ya:f?L(f):""},n=L(n),f={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})n=n.replace(new RegExp(l,"g"),f[l]);var d="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),p="January February March April May June July August September October November December".split(" ");for(l in f={"%a":function(e){return d[e.va].substring(0,3)},"%A":function(e){return d[e.va]},"%b":function(e){return p[e.la].substring(0,3)},"%B":function(e){return p[e.la]},"%C":function(e){return i((e.da+1900)/100|0,2)},"%d":function(e){return i(e.oa,2)},"%e":function(e){return o(e.oa,2," ")},"%g":function(e){return c(e).toString().substring(2)},"%G":function(e){return c(e)},"%H":function(e){return i(e.ua,2)},"%I":function(e){return 0==(e=e.ua)?e=12:12<e&&(e-=12),i(e,2)},"%j":function(e){return i(e.oa+Be(qe(e.da+1900)?He:Le,e.la-1),3)},"%m":function(e){return i(e.la+1,2)},"%M":function(e){return i(e.Wa,2)},"%n":function(){return"\n"},"%p":function(e){return 0<=e.ua&&12>e.ua?"AM":"PM"},"%S":function(e){return i(e.Xa,2)},"%t":function(){return"\t"},"%u":function(e){return e.va||7},"%U":function(e){var r=new Date(e.da+1900,0,1),n=0===r.getDay()?r:Ne(r,7-r.getDay());return 0>u(n,e=new Date(e.da+1900,e.la,e.oa))?i(Math.ceil((31-n.getDate()+(Be(qe(e.getFullYear())?He:Le,e.getMonth()-1)-31)+e.getDate())/7),2):0===u(n,r)?"01":"00"},"%V":function(e){var r=new Date(e.da+1901,0,4),n=s(new Date(e.da+1900,0,4));r=s(r);var t=Ne(new Date(e.da+1900,0,1),e.wa);return 0>u(t,n)?"53":0>=u(r,t)?"01":i(Math.ceil((n.getFullYear()<e.da+1900?e.wa+32-n.getDate():e.wa+1-n.getDate())/7),2)},"%w":function(e){return e.va},"%W":function(e){var r=new Date(e.da,0,1),n=1===r.getDay()?r:Ne(r,0===r.getDay()?1:7-r.getDay()+1);return 0>u(n,e=new Date(e.da+1900,e.la,e.oa))?i(Math.ceil((31-n.getDate()+(Be(qe(e.getFullYear())?He:Le,e.getMonth()-1)-31)+e.getDate())/7),2):0===u(n,r)?"01":"00"},"%y":function(e){return(e.da+1900).toString().substring(2)},"%Y":function(e){return e.da+1900},"%z":function(e){var r=0<=(e=e.Va);return e=Math.abs(e)/60,(r?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.Ya},"%%":function(){return"%"}})0<=n.indexOf(l)&&(n=n.replace(new RegExp(l,"g"),f[l](t)));return(l=function(e){var r=Array(U(e)+1);return N(e,r,0,r.length),r}(n)).length>r?0:(V(l,e),l.length-1)}v||pe.La();var Ge=[null,function(e,r){if(v)return be(1,1,e,r)},_e,ge,ve,Se,Oe,je,Fe,Pe,We,Ce];var Ve={c:function(e,r,n,t){ae("Assertion failed: "+L(e)+", at: "+[r?L(r):"unknown filename",n,t?L(t):"unknown function"])},i:_e,q:ge,r:ve,E:function(e,r){if(e==r)postMessage({cmd:"processQueuedMainThreadWork"});else if(v)postMessage({targetThread:e,cmd:"processThreadQueue"});else{if(!(e=(e=pe.ga[e])&&e.worker))return;e.postMessage({cmd:"processThreadQueue"})}return 1},b:function(){ae()},v:function(e,r){if(0===e)e=Date.now();else{if(1!==e&&4!==e)return a()[Ze()>>2]=28,-1;e=de()}return a()[r>>2]=e/1e3|0,a()[r+4>>2]=e%1e3*1e6|0,0},n:function(e,r,n){var o;for(ke.length=0,n>>=2;o=t()[r++];)(o=105>o)&&1&n&&n++,ke.push(o?i()[n++>>1]:a()[n]),++n;return se[e].apply(null,ke)},z:ye,m:function(){},f:we,e:fe,g:de,u:function(e,r,n){t().copyWithin(e,r,r+n)},A:function(e,r,n){Ae.length=r,n>>=3;for(var t=0;t<r;t++)Ae[t]=i()[n+t];return(0>e?se[-e-1]:Ge[e]).apply(null,Ae)},d:function(e){e>>>=0;var r=t().length;if(e<=r||2147483648<e)return!1;for(var n=1;4>=n;n*=2){var a=r*(1+.2/n);a=Math.min(a,e+100663296),0<(a=Math.max(16777216,e,a))%65536&&(a+=65536-a%65536);e:{try{R.grow(Math.min(2147483648,a)-j.byteLength+65535>>>16),z(R.buffer);var o=1;break e}catch(e){}o=void 0}if(o)return!0}return!1},C:function(e,r,n){return Ee(e)?Me(e,r,n):Se(e,r,n)},l:function(){},D:function(e,r){r>>=2;var n=a()[r+6];if(r={alpha:!!a()[r],depth:!!a()[r+1],stencil:!!a()[r+2],antialias:!!a()[r+3],premultipliedAlpha:!!a()[r+4],preserveDrawingBuffer:!!a()[r+5],powerPreference:Te[n],failIfMajorPerformanceCaveat:!!a()[r+7],Oa:a()[r+8],hb:a()[r+9],Aa:a()[r+10],Ha:a()[r+11],jb:a()[r+12],kb:a()[r+13]},!(e=Ee(e))||r.Ha)r=0;else if(e=e.getContext("webgl",r)){n=Je(8),a()[n+4>>2]=Ke();var t={gb:n,attributes:r,version:r.Oa,pa:e};e.canvas&&(e.canvas.qa=t),(void 0===r.Aa||r.Aa)&&function(e){if(e||(e=void 0),!e.Ka){e.Ka=!0;var r=e.pa;!function(e){var r=e.getExtension("ANGLE_instanced_arrays");r&&(e.vertexAttribDivisor=function(e,n){r.vertexAttribDivisorANGLE(e,n)},e.drawArraysInstanced=function(e,n,t,a){r.drawArraysInstancedANGLE(e,n,t,a)},e.drawElementsInstanced=function(e,n,t,a,o){r.drawElementsInstancedANGLE(e,n,t,a,o)})}(r),function(e){var r=e.getExtension("OES_vertex_array_object");r&&(e.createVertexArray=function(){return r.createVertexArrayOES()},e.deleteVertexArray=function(e){r.deleteVertexArrayOES(e)},e.bindVertexArray=function(e){r.bindVertexArrayOES(e)},e.isVertexArray=function(e){return r.isVertexArrayOES(e)})}(r),function(e){var r=e.getExtension("WEBGL_draw_buffers");r&&(e.drawBuffers=function(e,n){r.drawBuffersWEBGL(e,n)})}(r),r.cb=r.getExtension("EXT_disjoint_timer_query"),r.ib=r.getExtension("WEBGL_multi_draw"),(r.getSupportedExtensions()||[]).forEach(function(e){0>e.indexOf("lose_context")&&0>e.indexOf("debug")&&r.getExtension(e)})}}(t),r=n}else r=0;return r},x:Oe,y:je,h:function(e){vr(e)},j:Fe,p:Pe,s:We,o:Ce,t:function(){pe.Ma()},a:R||u.wasmMemory,k:function(e,r,n,t){if("undefined"==typeof SharedArrayBuffer)return I("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;if(!e)return I("pthread_create called with a null thread pointer!"),28;var i=[];if(v&&0===i.length)return tr(687865856,e,r,n,t);var u=0,s=0;if(r&&-1!=r){var c=a()[r>>2];c+=81920,u=a()[r+8>>2],s=0!==a()[r+12>>2]}else c=2097152;(r=0==u)?u=pr(16,c):B(0<(u-=c));for(var f=Je(228),l=0;57>l;++l)o()[(f>>2)+l]=0;return a()[e>>2]=f,a()[f+12>>2]=f,e=f+152,a()[e>>2]=e,n={ja:u,ka:c,xa:r,detached:s,Sa:n,sa:f,ma:t,Za:i},v?(n.ab="spawnThread",postMessage(n,i)):Ye(n),0},B:function(e,r){return function(e,r){if(!e)return I("pthread_join attempted on a null thread pointer!"),71;if(v&&Ke()==e)return I("PThread "+e+" is attempting to join to itself!"),16;if(!v&&rr()==e)return I("Main thread "+e+" is attempting to join to itself!"),16;if(a()[e+12>>2]!==e)return I("pthread_join attempted on thread "+e+", which does not point to a valid thread, or does not exist anymore!"),71;if(Atomics.load(o(),e+64>>2))return I("Attempted to join thread "+e+", which was already detached!"),28;for(ye();;){var n=Atomics.load(o(),e+0>>2);if(1==n)return n=Atomics.load(o(),e+4>>2),r&&(a()[r>>2]=n),Atomics.store(o(),e+64>>2,1),v?postMessage({cmd:"cleanupThread",thread:e}):le(e),0;if(v){var t=Ke();if(t&&!Atomics.load(o(),t+56>>2)&&2==Atomics.load(o(),t+0>>2))throw"Canceled!"}v||ar(),we(e+0,n,v?100:1)}}(e,r)},w:function(e,r,n,t){return Ue(e,r,n,t)}};!function(){function e(e,r){if(u.asm=e.exports,X=u.asm.ca,O=r,!v){var n=pe.fa.length;pe.fa.forEach(function(e){pe.Ba(e,function(){if(!--n&&(re--,u.monitorRunDependencies&&u.monitorRunDependencies(re),0==re&&(null!==ne&&(clearInterval(ne),ne=null),te))){var e=te;te=null,e()}})})}}function r(r){e(r.instance,r.module)}function n(e){return(S||!h&&!_||"function"!=typeof fetch?Promise.resolve().then(function(){return ue()}):fetch(ie,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+ie+"'";return e.arrayBuffer()}).catch(function(){return ue()})).then(function(e){return WebAssembly.instantiate(e,t)}).then(e,function(e){I("failed to asynchronously prepare wasm: "+e),ae(e)})}var t={a:Ve};if(v||(B(!v,"addRunDependency cannot be used in a pthread worker"),re++,u.monitorRunDependencies&&u.monitorRunDependencies(re)),u.instantiateWasm)try{return u.instantiateWasm(t,e)}catch(e){return I("Module.instantiateWasm callback failed with error: "+e),!1}(S||"function"!=typeof WebAssembly.instantiateStreaming||oe()||"function"!=typeof fetch?n(r):fetch(ie,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,t).then(r,function(e){return I("wasm streaming compile failed: "+e),I("falling back to ArrayBuffer instantiation"),n(r)})})).catch(c)}();var ze=u.___wasm_call_ctors=function(){return(ze=u.___wasm_call_ctors=u.asm.F).apply(null,arguments)};u._main=function(){return(u._main=u.asm.G).apply(null,arguments)};var Je=u._malloc=function(){return(Je=u._malloc=u.asm.H).apply(null,arguments)},Xe=u._free=function(){return(Xe=u._free=u.asm.I).apply(null,arguments)};u._uci_command=function(){return(u._uci_command=u.asm.J).apply(null,arguments)};var Qe=u._emscripten_get_global_libc=function(){return(Qe=u._emscripten_get_global_libc=u.asm.K).apply(null,arguments)},Ze=u.___errno_location=function(){return(Ze=u.___errno_location=u.asm.L).apply(null,arguments)};u.___em_js__initPthreadsJS=function(){return(u.___em_js__initPthreadsJS=u.asm.M).apply(null,arguments)};var Ke=u._pthread_self=function(){return(Ke=u._pthread_self=u.asm.N).apply(null,arguments)},$e=u.___pthread_tsd_run_dtors=function(){return($e=u.___pthread_tsd_run_dtors=u.asm.O).apply(null,arguments)};u._emscripten_current_thread_process_queued_calls=function(){return(u._emscripten_current_thread_process_queued_calls=u.asm.P).apply(null,arguments)};var er=u._emscripten_register_main_browser_thread_id=function(){return(er=u._emscripten_register_main_browser_thread_id=u.asm.Q).apply(null,arguments)},rr=u._emscripten_main_browser_thread_id=function(){return(rr=u._emscripten_main_browser_thread_id=u.asm.R).apply(null,arguments)},nr=u.__emscripten_do_dispatch_to_thread=function(){return(nr=u.__emscripten_do_dispatch_to_thread=u.asm.S).apply(null,arguments)},tr=u._emscripten_sync_run_in_main_thread_4=function(){return(tr=u._emscripten_sync_run_in_main_thread_4=u.asm.T).apply(null,arguments)},ar=u._emscripten_main_thread_process_queued_calls=function(){return(ar=u._emscripten_main_thread_process_queued_calls=u.asm.U).apply(null,arguments)},or=u._emscripten_run_in_main_runtime_thread_js=function(){return(or=u._emscripten_run_in_main_runtime_thread_js=u.asm.V).apply(null,arguments)},ir=u.__emscripten_call_on_thread=function(){return(ir=u.__emscripten_call_on_thread=u.asm.W).apply(null,arguments)};u._emscripten_tls_init=function(){return(u._emscripten_tls_init=u.asm.X).apply(null,arguments)};var ur,sr=u.__emscripten_thread_init=function(){return(sr=u.__emscripten_thread_init=u.asm.Y).apply(null,arguments)},cr=u.stackSave=function(){return(cr=u.stackSave=u.asm.Z).apply(null,arguments)},fr=u.stackRestore=function(){return(fr=u.stackRestore=u.asm._).apply(null,arguments)},lr=u.stackAlloc=function(){return(lr=u.stackAlloc=u.asm.$).apply(null,arguments)},dr=u._emscripten_stack_set_limits=function(){return(dr=u._emscripten_stack_set_limits=u.asm.aa).apply(null,arguments)},pr=u._memalign=function(){return(pr=u._memalign=u.asm.ba).apply(null,arguments)},mr=u.__emscripten_allow_main_runtime_queued_calls=25580,hr=u.__emscripten_main_thread_futex=1088592;function _r(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function gr(e){function r(){if(!ur&&(ur=!0,u.calledRun=!0,!q)){if(ce(Z),v||ce(K),s(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),yr){var r=e,n=u._main,t=(r=r||[]).length+1,o=lr(4*(t+1));a()[o>>2]=G(p);for(var i=1;i<t;i++)a()[(o>>2)+i]=G(r[i-1]);a()[(o>>2)+t]=0;try{vr(n(t,o),!0)}catch(e){e instanceof _r||("unwind"==e?D=!0:((r=e)&&"object"==typeof e&&e.stack&&(r=[e,e.stack]),I("exception thrown: "+r),m(1,e)))}}if(!v){if(u.postRun)for("function"==typeof u.postRun&&(u.postRun=[u.postRun]);u.postRun.length;)r=u.postRun.shift(),$.unshift(r);ce($)}}}if(e=e||d,!(0<re))if(v)s(u),postMessage({cmd:"loaded"});else{if(!v){if(u.preRun)for("function"==typeof u.preRun&&(u.preRun=[u.preRun]);u.preRun.length;)ee();ce(Q)}0<re||(u.setStatus?(u.setStatus("Running..."),setTimeout(function(){setTimeout(function(){u.setStatus("")},1),r()},1)):r())}}function vr(e,r){if(!r||!D||0!==e){if(!r&&v)throw postMessage({cmd:"exitProcess",returnCode:e}),new _r(e);D||(pe.Ea(),u.onExit&&u.onExit(e),q=!0),m(e,new _r(e))}}if(u.ccall=function(e,r,n,a){var o,i={string:function(e){var r=0;if(null!=e&&0!==e){var n=1+(e.length<<2),a=r=lr(n);N(e,t(),a,n)}return r},array:function(e){var r=lr(e.length);return V(e,r),r}},s=function(e){var r=u["_"+e];return B(r,"Cannot call unknown function "+e+", make sure it is exported"),r}(e),c=[];if(e=0,a)for(var f=0;f<a.length;f++){var l=i[n[f]];l?(0===e&&(e=cr()),c[f]=l(a[f])):c[f]=a[f]}return n=s.apply(null,c),o=n,n="string"===r?L(o):"boolean"===r?!!o:o,0!==e&&fr(e),n},u.PThread=pe,u.PThread=pe,u.wasmMemory=R,u.ExitStatus=_r,te=function e(){ur||gr(),ur||(te=e)},u.run=gr,u.preInit)for("function"==typeof u.preInit&&(u.preInit=[u.preInit]);0<u.preInit.length;)u.preInit.pop()();var yr=!0;return u.noInitialRun&&(yr=!1),D=!v,v&&pe.Na(),gr(),r.ready}}();"object"==typeof exports&&"object"==typeof module?module.exports=Stockfish:"function"==typeof define&&define.amd?define([],function(){return Stockfish}):"object"==typeof exports&&(exports.Stockfish=Stockfish);