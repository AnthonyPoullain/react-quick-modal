(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(":root{--animation-duration: .2s;--primary-color: dodgerblue;--accent-color: salmon;--bg-color: #fff;--grey-200: #d2d6dc;--grey-400: #6b7280;--grey-600: #373737}.modal h1,.modal h2,.modal h3,.modal h4,.modal h5,.modal h6,.modal p{margin:0;padding:0}.modal__bg{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.2);animation:fade var(--animation-duration) ease-out forwards}.modal>*{width:100%}.modal__container{padding:25px 45px;width:fit-content;height:fit-content;position:fixed;border-radius:5px;top:50%;left:50%;animation:popup var(--animation-duration) ease-out forwards;background:var(--bg-color);box-shadow:0 0 10px #0003}.modal{font-family:inherit;min-width:300px;min-height:80px;max-height:65vh;padding:3px;overflow:hidden;text-align:center;width:fit-content;display:flex;flex-direction:column;justify-content:space-between;gap:20px}@keyframes popup{0%{opacity:0;transform:translate(-50%,-25%)}to{opacity:1;transform:translate(-50%,-50%)}}@keyframes fade{0%{opacity:0}to{opacity:1}}.modal__header{margin-top:5px;text-align:center}.modal__body{overflow:scroll;font-size:16px;margin-bottom:10px;color:var(--grey-400);text-align:center}.modal__footer{display:flex;justify-content:center;text-align:center;gap:10px}.modal__btn{background-color:var(--primary-color);border:none;color:var(--bg-color);cursor:pointer;width:100%;min-width:140px;max-width:300px;border-radius:5px;padding:13px 33px;font-size:14px;font-weight:700;margin:0 auto}.modal__btn--secondary{background-color:var(--accent-color)}.modal__btn:hover,.modal__footer:focus{background-image:linear-gradient(rgb(255 255 255/20%) 0 0);outline:default}.modal__btn:disabled{background-image:linear-gradient(rgb(255 255 255/50%) 0 0);cursor:auto}.modal__title{font-size:24px;color:var(--grey-400)}.modal__close-btn,.modal__close-btn:hover{position:absolute;border-radius:100px;fill:var(--grey-600);background-color:#fff;top:-10px;right:-10px;cursor:pointer;width:28px;height:28px;border:none;padding:0}.modal__close-btn img{margin:0}#root{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}body{font-family:Roboto,Arial,sans-serif;height:100vh;display:flex;align-items:center;justify-content:center}")),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import"../sb-preview/runtime.mjs";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const p="modulepreload",f=function(o,n){return new URL(o,n).href},O={},r=function(n,s,l){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=f(e,l),e in O)return;O[e]=!0;const _=e.endsWith(".css"),R=_?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${R}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":p,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((c,a)=>{i.addEventListener("load",c),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},{createChannel:S}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:m}=__STORYBOOK_MODULE_PREVIEW_API__,E=S({page:"preview"});m.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=T({url:u});m.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const P={"./src/components/Modal/Modal.stories.tsx":async()=>r(()=>import("./Modal.stories-a2ce56a8.js"),["./Modal.stories-a2ce56a8.js","./index-b2f175c3.js","./_commonjsHelpers-042e6b4d.js","./index-4d501b15.js","./Modal.stories-1a5b824a.css"],import.meta.url)};async function d(o){return P[o]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:L,PreviewWeb:w,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const o=await Promise.all([r(()=>import("./config-f316eac7.js"),["./config-f316eac7.js","./index-d475d2ea.js","./index-b2f175c3.js","./_commonjsHelpers-042e6b4d.js","./_getPrototype-e5ed9479.js","./toString-a2bd6431.js","./index-4d501b15.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-3d3b473f.js"),["./preview-3d3b473f.js","./index-d475d2ea.js","./index-48083eca.js","./toString-a2bd6431.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),r(()=>import("./preview-98f49f16.js"),[],import.meta.url),r(()=>import("./preview-f658c89a.js"),["./preview-f658c89a.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),r(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-a1e285ec.js"),["./preview-a1e285ec.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-05785d3f.js"),["./preview-05785d3f.js","./index-d475d2ea.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),r(()=>import("./preview-356c9ae2.js"),[],import.meta.url)]);return L(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:I});export{r as _};
//# sourceMappingURL=iframe-c5e46b4e.js.map
