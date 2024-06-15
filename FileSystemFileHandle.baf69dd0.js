function e(e,t,a,i){Object.defineProperty(e,t,{get:a,set:i,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire3364;(0,t.register)("ggMY5",function(a,i){Object.defineProperty(a.exports,"__esModule",{value:!0,configurable:!0}),e(a.exports,"FileSystemFileHandle",()=>p),e(a.exports,"default",()=>y);var r=t("bAgeV"),n=t("gnYLk");let{INVALID:o,SYNTAX:s,GONE:l}=t("jG9Jm").errors,c=Symbol("adapter");class p extends r.default{[c];constructor(e){super(e),this[c]=e}async createWritable(e={}){return new n.default(await this[c].createWritable(e))}async getFile(){return this[c].getFile()}}if(Object.defineProperty(p.prototype,Symbol.toStringTag,{value:"FileSystemFileHandle",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(p.prototype,{createWritable:{enumerable:!0},getFile:{enumerable:!0}}),globalThis.FileSystemFileHandle&&!globalThis.FileSystemFileHandle.prototype.createWritable){let e;let t=new WeakMap,a=()=>{let e,t;onmessage=async a=>{let i=a.ports[0],r=a.data;switch(r.type){case"open":let n=r.name,o=await navigator.storage.getDirectory();for(let e of r.path)o=await o.getDirectoryHandle(e);e=await o.getFileHandle(n),t=await e.createSyncAccessHandle();break;case"write":t.write(r.data,{at:r.position}),t.flush();break;case"truncate":t.truncate(r.size);break;case"abort":case"close":t.close()}i.postMessage(0)}};globalThis.FileSystemFileHandle.prototype.createWritable=async function(i){if(!e){let t=`(${a.toString()})()`,i=new Blob([t],{type:"text/javascript"});e=URL.createObjectURL(i)}let r=new Worker(e,{type:"module"}),c=0,p=new TextEncoder,y=await this.getFile().then(e=>e.size),d=e=>new Promise((t,a)=>{let i=new MessageChannel;i.port1.onmessage=e=>{e.data instanceof Error?a(e.data):t(e.data),i.port1.close(),i.port2.close(),i.port1.onmessage=null},r.postMessage(e,[i.port2])}),g=await navigator.storage.getDirectory(),w=await t.get(this),u=await g.resolve(w);if(null===u)throw new DOMException(...l);return await d({type:"open",path:u,name:this.name}),i?.keepExistingData===!1&&(await d({type:"truncate",size:0}),y=0),new n.default({start:e=>{},async write(e){if("write"===(e=e?.constructor===Object?{...e}:{type:"write",data:e,position:c}).type){if(!("data"in e))throw await d({type:"close"}),new DOMException(...s("write requires a data argument"));if(e.position??=c,"string"==typeof e.data)e.data=p.encode(e.data);else if(e.data instanceof ArrayBuffer)e.data=new Uint8Array(e.data);else if(!(e.data instanceof Uint8Array)&&ArrayBuffer.isView(e.data))e.data=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else if(!(e.data instanceof Uint8Array)){let t=await new Response(e.data).arrayBuffer();e.data=new Uint8Array(t)}Number.isInteger(e.position)&&e.position>=0&&(c=e.position),c+=e.data.byteLength,y+=e.data.byteLength}else if("seek"===e.type){if(Number.isInteger(e.position)&&e.position>=0){if(y<e.position)throw new DOMException(...o);console.log("seeking",e),c=e.position;return}throw await d({type:"close"}),new DOMException(...s("seek requires a position argument"))}else if("truncate"===e.type){if(Number.isInteger(e.size)&&e.size>=0)y=e.size,c>y&&(c=y);else throw await d({type:"close"}),new DOMException(...s("truncate requires a size argument"))}await d(e)},async close(){await d({type:"close"}),r.terminate()},async abort(e){await d({type:"abort",reason:e}),r.terminate()}})};let i=FileSystemDirectoryHandle.prototype.getFileHandle;FileSystemDirectoryHandle.prototype.getFileHandle=async function(...e){let a=await i.call(this,...e);return t.set(a,this),a}}var y=p});
//# sourceMappingURL=FileSystemFileHandle.baf69dd0.js.map
