function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire3364,r=t.register;r("c2cXb",function(r,a){e(r.exports,"FileHandle",()=>h);var n=t("jG9Jm");let{WritableStream:s,TransformStream:i,DOMException:o,Blob:l}=t("f9c8S").default,{GONE:c}=n.errors,d=/constructor/i.test(window.HTMLElement);class h{constructor(e="unkown"){this.name=e,this.kind="file"}async getFile(){throw new o(...c)}async isSameEntry(e){return this===e}async createWritable(e={}){let t=await navigator.serviceWorker?.getRegistration(),r=document.createElement("a"),a=new i,n=a.writable;if(r.download=this.name,d||!t){let e=[];a.readable.pipeTo(new s({write(t){e.push(new l([t]))},close(){let t=new l(e,{type:"application/octet-stream; charset=utf-8"});e=[],r.href=URL.createObjectURL(t),r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),1e4)}}))}else{let{writable:r,readablePort:n}=new m(s),o=encodeURIComponent(this.name).replace(/['()]/g,escape).replace(/\*/g,"%2A"),l={"content-disposition":"attachment; filename*=UTF-8''"+o,"content-type":"application/octet-stream; charset=utf-8",...e.size?{"content-length":e.size}:{}},c=setTimeout(()=>t.active.postMessage(0),1e4);a.readable.pipeThrough(new i({transform(e,t){if(e instanceof Uint8Array)return t.enqueue(e);let r=new Response(e).body.getReader(),a=e=>r.read().then(e=>e.done?0:a(t.enqueue(e.value)));return a()}})).pipeTo(r).finally(()=>{clearInterval(c)}),t.active.postMessage({url:t.scope+o,headers:l,readablePort:n},[n]);let d=document.createElement("iframe");d.hidden=!0,d.src=t.scope+o,document.body.appendChild(d)}return n.getWriter()}}class p{constructor(e){e.onmessage=e=>this._onMessage(e.data),this._port=e,this._resetReady()}start(e){return this._controller=e,this._readyPromise}write(e){return this._port.postMessage({type:0,chunk:e},[e.buffer]),this._resetReady(),this._readyPromise}close(){this._port.postMessage({type:2}),this._port.close()}abort(e){this._port.postMessage({type:1,reason:e}),this._port.close()}_onMessage(e){0===e.type&&this._resolveReady(),1===e.type&&this._onError(e.reason)}_onError(e){this._controller.error(e),this._rejectReady(e),this._port.close()}_resetReady(){this._readyPromise=new Promise((e,t)=>{this._readyResolve=e,this._readyReject=t}),this._readyPending=!0}_resolveReady(){this._readyResolve(),this._readyPending=!1}_rejectReady(e){this._readyPending||this._resetReady(),this._readyPromise.catch(()=>{}),this._readyReject(e),this._readyPending=!1}}class m{constructor(e){let t=new MessageChannel;this.readablePort=t.port1,this.writable=new e(new p(t.port2))}}}),r("jG9Jm",function(r,a){e(r.exports,"errors",()=>n),e(r.exports,"config",()=>s),e(r.exports,"fromDataTransfer",()=>i),e(r.exports,"getDirHandlesFromInput",()=>o),e(r.exports,"getFileHandlesFromInput",()=>l);let n={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:e=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${e}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},s={writable:globalThis.WritableStream};async function i(e){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");let[r,a,n]=await Promise.all([t("d94Xl"),t("j0RNE"),t("X4jI3")]),s=new r.FolderHandle("",!1);return s._entries=e.map(e=>e.isFile?new a.FileHandle(e,!1):new a.FolderHandle(e,!1)),new n.FileSystemDirectoryHandle(s)}async function o(e){let{FolderHandle:r,FileHandle:a}=await t("d94Xl"),{FileSystemDirectoryHandle:n}=await t("X4jI3"),s=Array.from(e.files),i=new r(s[0].webkitRelativePath.split("/",1)[0],!1);return s.forEach(e=>{let t=e.webkitRelativePath.split("/");t.shift();let n=t.pop();t.reduce((e,t)=>(e._entries[t]||(e._entries[t]=new r(t,!1)),e._entries[t]),i)._entries[n]=new a(e.name,e,!1)}),new n(i)}async function l(e){let{FileHandle:r}=await t("d94Xl"),{FileSystemFileHandle:a}=await t("hcVTv");return Array.from(e.files).map(e=>new a(new r(e.name,e,!1)))}}),r("d94Xl",function(e,r){var a=t("5xBLx");e.exports=a("9AOUm").then(()=>t("40oxC"))}),r("j0RNE",function(e,r){var a=t("5xBLx");e.exports=a("acNkV").then(()=>t("k5tLT"))}),r("X4jI3",function(e,r){var a=t("5xBLx");e.exports=a("gLIJH").then(()=>t("2Fv9o"))}),r("hcVTv",function(e,r){var a=t("5xBLx");e.exports=a("6hwdd").then(()=>t("ggMY5"))}),r("f9c8S",function(t,r){e(t.exports,"default",()=>a);var a={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File}});
//# sourceMappingURL=downloader.00217dae.js.map