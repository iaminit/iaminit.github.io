import{_ as g}from"./q-DoNi8vyY.js";import{i as m,E as k,l as w,q as h,z as i,g as q,d as S,c as T}from"./q-BrAWZM5D.js";import{Q as t}from"./q-Doqp5niB.js";const E=`
        @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
        
        .editor-container {
            background: #fff;
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        .ql-toolbar.ql-snow {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            border-color: #e5e7eb !important;
            background: #f9fafb;
            padding: 0.75rem !important;
        }
        
        .ql-container.ql-snow {
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            border-color: #e5e7eb !important;
            min-height: 20rem;
            font-size: 1rem;
        }

        .dark .ql-toolbar.ql-snow {
            background: #1f2937;
            border-color: #374151 !important;
        }
        
        .dark .ql-container.ql-snow {
            background: #111827;
            border-color: #374151 !important;
            color: #f3f4f6;
        }

        .dark .ql-stroke { stroke: #9ca3af !important; }
        .dark .ql-fill { fill: #9ca3af !important; }
        .dark .ql-picker { color: #9ca3af !important; }
    `,j=Object.freeze(Object.defineProperty({__proto__:null,s_yqyoKhi5VRs:E},Symbol.toStringTag,{value:"Module"})),R=l=>{const a=m(!1);k(h(()=>g(()=>Promise.resolve().then(()=>j),void 0),"s_yqyoKhi5VRs"));const s=m(),d=m(),f=m(!1),o=m(l.value||"");return k(h(()=>g(()=>Promise.resolve().then(()=>O),void 0),"s_69V0k69GWn0")),w(h(()=>g(()=>Promise.resolve().then(()=>V),void 0),"s_Tdvq0oLfiok",[s,o,f,a,l,d])),i("div",null,{class:"space-y-4"},[i("div",null,{class:"flex items-center justify-between px-1"},[i("label",null,{class:"text-[10px] font-black text-gray-400 uppercase tracking-widest"},"Contenuto dell'articolo",3,null),a.value&&i("span",null,{class:"text-[10px] font-black text-red-600 animate-pulse uppercase tracking-widest"},"Caricamento immagine...",3,"oR_0")],1,null),i("div",null,{class:"editor-container"},i("div",{ref:s},null,null,3,null),1,null),i("textarea",{ref:d},{name:q(r=>r.name,[l]),id:q(r=>r.id,[l]),class:"hidden"},null,3,null)],1,"oR_1")},I=Object.freeze(Object.defineProperty({__proto__:null,s_kw1ZyuXbcyw:R},Symbol.toStringTag,{value:"Module"})),z=`
        @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
        
        .editor-container {
            background: #fff;
            border-radius: 2rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border: 1px solid #f3f4f6;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        
        .ql-toolbar.ql-snow {
            border-top-left-radius: 2rem;
            border-top-right-radius: 2rem;
            border-color: transparent !important;
            background: #ffffff;
            padding: 1rem !important;
            border-bottom: 1px solid #f3f4f6 !important;
        }
        
        .ql-container.ql-snow {
            border-bottom-left-radius: 2rem;
            border-bottom-right-radius: 2rem;
            border-color: transparent !important;
            min-height: 25rem;
            font-size: 1.125rem;
            line-height: 1.75;
        }

        /* Direct integration of frontend 'prose' styles into the editor */
        .ql-editor {
            padding: 2rem !important;
            font-family: inherit;
        }

        .ql-editor h1, .ql-editor h2, .ql-editor h3 {
            font-weight: 900 !important;
            letter-spacing: -0.025em !important;
            margin-top: 1.5em !important;
            margin-bottom: 0.5em !important;
            color: #111827;
        }

        .ql-editor p {
            margin-bottom: 1.25em !important;
            color: #4b5563;
            font-weight: 500;
        }

        .ql-editor img {
            border-radius: 1.5rem !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            margin: 2rem 0 !important;
        }

        .dark .editor-container {
            background: #111827;
            border-color: #1f2937;
        }

        .dark .ql-toolbar.ql-snow {
            background: #111827;
            border-bottom-color: #1f2937 !important;
        }
        
        .dark .ql-container.ql-snow {
            background: #111827;
            color: #f3f4f6;
        }

        .dark .ql-editor h1, .dark .ql-editor h2, .dark .ql-editor h3 {
            color: #ffffff;
        }

        .dark .ql-editor p {
            color: #9ca3af;
        }

        .dark .ql-stroke { stroke: #6b7280 !important; }
        .dark .ql-fill { fill: #6b7280 !important; }
        .dark .ql-picker { color: #6b7280 !important; }
    `,O=Object.freeze(Object.defineProperty({__proto__:null,s_69V0k69GWn0:z},Symbol.toStringTag,{value:"Module"})),P=({cleanup:l})=>{const[a,s,d,f,o,r]=S();if(!a.value||d.value)return;try{const e=t.import("attributors/style/direction"),p=t.import("attributors/style/align"),u=t.import("attributors/style/color"),b=t.import("attributors/style/background"),n=t.import("attributors/style/size");t.register(e,!0),t.register(p,!0),t.register(u,!0),t.register(b,!0),t.register(n,!0)}catch(e){console.warn("[RichText] Error registering styles:",e)}const y=()=>{const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=async()=>{var b;const p=(b=e.files)==null?void 0:b[0];if(!p)return;const u=new FormData;u.append("file",p),u.append("folder",o.mediaFolder??""),f.value=!0;try{const n=await fetch("/api/upload",{method:"POST",body:u});if(n.ok){const v=await n.json(),_=c.getSelection();c.insertEmbed((_==null?void 0:_.index)||0,"image",v.url)}else alert("Errore durante l'upload dell'immagine")}catch(n){console.error("Upload error:",n),alert("Errore di connessione durante l'upload")}finally{f.value=!1}}},c=new t(a.value,{theme:"snow",placeholder:o.placeholder||"Inizia a scrivere...",modules:{toolbar:{container:[[{header:[1,2,3,!1]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{align:[]}],[{list:"ordered"},{list:"bullet"}],["link","image"],["blockquote","code-block"],["clean"]],handlers:{image:()=>y()}}}});o.value&&(c.root.innerHTML=o.value,r.value&&(r.value.value=o.value));const x=()=>{const e=c.root.innerHTML;s.value=e==="<p><br></p>"?"":e,r.value&&(r.value.value=s.value)};c.on("text-change",x),d.value=!0,l(()=>{})},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:T,s_Tdvq0oLfiok:P},Symbol.toStringTag,{value:"Module"}));export{T as _hW,I as r,z as s_69V0k69GWn0,P as s_Tdvq0oLfiok,R as s_kw1ZyuXbcyw,E as s_yqyoKhi5VRs};
