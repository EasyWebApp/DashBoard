if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let d={};const b=e=>s(e,o),f={module:{uri:o},exports:d,require:b};r[o]=Promise.all(i.map((e=>f[e]||b(e)))).then((e=>(a(...e),d)))}}define(["./workbox-b584cb72"],(function(e){"use strict";importScripts("https://unpkg.com/workbox-sw@7.1.0/build/workbox-sw.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"DashBoard.236b5d77.js",revision:"b8063437ce1643ba71d2934e82803df1"},{url:"DashBoard.568830f9.js",revision:"6e0f832be13a2a3c44a1775f5f2c2945"},{url:"DashBoard.bedf47a4.css",revision:"50719b2fcde26cd663a90b99c0e9d82f"},{url:"downloader.00217dae.js",revision:"438ed41faee9f6935a2a9a7446d5a792"},{url:"Downloader.77fdcc14.js",revision:"49ca7bb9d1bb656d09733b00b8880ac7"},{url:"Downloader.e7408549.css",revision:"f1a206fb691397c6bbd4b9bb5f41c713"},{url:"FileSystemDirectoryHandle.8e2a4930.js",revision:"388a5f4e2b46d401aa3f02d566e885e3"},{url:"FileSystemFileHandle.baf69dd0.js",revision:"ca61772877ac1b93e2e674b684f32362"},{url:"index.050a84ae.js",revision:"3153088eb66600ed65de0fbfb7f108fa"},{url:"index.html",revision:"aea2b29ce39a6cbbaa58f6ac4e066ca6"},{url:"index.runtime.1c8b25f2.js",revision:"defb6f1b9818fb7fd643f5e3cb77aae2"},{url:"memory.bb334568.js",revision:"7cd3efb88f1201051afae2283f0e7f56"},{url:"sandbox.df76eb6d.js",revision:"1971211aeb9e329fc91812759e041f7e"},{url:"WebCell-0.f9823b00.png",revision:"fd7ead66e06c8b4dabceb68ba6608d4a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
