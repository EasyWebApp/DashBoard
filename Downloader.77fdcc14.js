function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire3364,r=t.register;r("ifW7K",function(r,n){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",()=>f);var a=t("1moyS"),i=t("5Oiiy"),o=t("cBZ38"),l=t("lt1PQ"),s=t("afGE5"),d=t("DHxdW"),c=t("vkHkA");let u=e=>{var t,r,n,a;return t=void 0,r=void 0,n=void 0,a=function*(){e.preventDefault();let t=e.currentTarget,{path:r}=(0,o.formToJSON)(t);yield(0,d.downloader).createTask(r).start({chunkSize:524288}),t.reset()},new(n||(n=Promise))(function(e,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function l(e){try{s(a.throw(e))}catch(e){i(e)}}function s(t){var r;t.done?e(t.value):((r=t.value)instanceof n?r:new n(function(e){e(r)})).then(o,l)}s((a=a.apply(t,r||[])).next())})};var f=()=>(0,a.jsxs)(s.PageFrame,{menu:c&&c.__esModule?c.default:c,children:[(0,a.jsx)("h1",{className:"my-4",children:"Downloader"}),(0,a.jsxs)("form",{className:"d-flex align-items-center gap-3 mb-3",onSubmit:u,children:[(0,a.jsx)(i.FloatingLabel,{className:"flex-fill",label:"URL",children:(0,a.jsx)(i.FormControl,{placeholder:"URL",type:"url",name:"path",required:!0})}),(0,a.jsx)(i.Button,{type:"submit",variant:"primary",children:"+"})]}),(0,a.jsx)(l.Downloader,{})]})}),r("lt1PQ",function(r,n){e(r.exports,"Downloader",()=>d);var a=t("1moyS"),i=t("92bHn"),o=t("5Oiiy"),l=t("DHxdW");let s=(0,i.observer)(({task:e})=>(0,a.jsxs)(o.Card,{children:[(0,a.jsxs)(o.CardBody,{children:[(0,a.jsx)(o.CardTitle,{children:e.name}),(0,a.jsx)(o.ProgressBar,{striped:e.percent<100,animated:e.executing,now:e.percent,label:!0})]}),(0,a.jsxs)(o.CardFooter,{className:"d-flex justify-content-between align-items-center",children:[(0,a.jsxs)("small",{children:[e.loadedSize.toShortString()," /"," ",e.totalSize.toShortString()]}),(0,a.jsxs)("div",{className:"d-flex gap-3",children:[e.percent<100&&(e.executing?(0,a.jsx)(o.Button,{size:"sm",variant:"warning",onClick:()=>e.pause(),children:(0,a.jsx)(o.Icon,{name:"pause"})}):(0,a.jsx)(o.Button,{size:"sm",variant:"success",onClick:()=>e.start(),children:(0,a.jsx)(o.Icon,{name:"play"})})),(0,a.jsx)(o.Button,{size:"sm",variant:"danger",disabled:e.executing,onClick:()=>(0,l.downloader).destroyTask(e.name),children:(0,a.jsx)(o.Icon,{name:"trash"})})]})]})]})),d=(0,i.observer)(()=>(0,a.jsx)("ol",{className:"list-unstyled d-flex flex-column gap-3",children:(0,l.downloader).tasks.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(s,{task:e})},e.id))}))}),r("jG9Jm",function(r,n){e(r.exports,"errors",()=>a),e(r.exports,"config",()=>i),e(r.exports,"fromDataTransfer",()=>o),e(r.exports,"getDirHandlesFromInput",()=>l),e(r.exports,"getFileHandlesFromInput",()=>s);let a={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:e=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${e}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},i={writable:globalThis.WritableStream};async function o(e){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");let[r,n,a]=await Promise.all([t("d94Xl"),t("j0RNE"),t("X4jI3")]),i=new r.FolderHandle("",!1);return i._entries=e.map(e=>e.isFile?new n.FileHandle(e,!1):new n.FolderHandle(e,!1)),new a.FileSystemDirectoryHandle(i)}async function l(e){let{FolderHandle:r,FileHandle:n}=await t("d94Xl"),{FileSystemDirectoryHandle:a}=await t("X4jI3"),i=Array.from(e.files),o=new r(i[0].webkitRelativePath.split("/",1)[0],!1);return i.forEach(e=>{let t=e.webkitRelativePath.split("/");t.shift();let a=t.pop();t.reduce((e,t)=>(e._entries[t]||(e._entries[t]=new r(t,!1)),e._entries[t]),o)._entries[a]=new n(e.name,e,!1)}),new a(o)}async function s(e){let{FileHandle:r}=await t("d94Xl"),{FileSystemFileHandle:n}=await t("hcVTv");return Array.from(e.files).map(e=>new n(new r(e.name,e,!1)))}}),r("d94Xl",function(e,r){var n=t("5xBLx");e.exports=n("9AOUm").then(()=>t("40oxC"))}),r("5xBLx",function(e,r){e.exports=function(e){return import(t("2y56P").resolve(e))}}),r("2y56P",function(t,r){e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>a,e=>a=e);var n,a,i=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)i.set(t[r],{baseUrl:e,path:t[r+1]})},a=function(e){var t=i.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),r("j0RNE",function(e,r){var n=t("5xBLx");e.exports=n("acNkV").then(()=>t("k5tLT"))}),r("X4jI3",function(e,r){var n=t("5xBLx");e.exports=n("gLIJH").then(()=>t("2Fv9o"))}),r("hcVTv",function(e,r){var n=t("5xBLx");e.exports=n("6hwdd").then(()=>t("ggMY5"))}),r("f9c8S",function(t,r){e(t.exports,"default",()=>n);var n={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File}});
//# sourceMappingURL=Downloader.77fdcc14.js.map