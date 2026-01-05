const i=e=>{var o;if(console.error("[PocketBase Error Parser]",e),(o=e.response)!=null&&o.data){const r=e.response.data,s=[];for(const[t,a]of Object.entries(r)){const n=a;s.push(`${t.toUpperCase()}: ${n.message}`)}if(s.length>0)return`Dati non validi:
• `+s.join(`
• `)}return e.message==="Failed to fetch"?"Errore di rete: Impossibile connettersi al server PocketBase.":e.message||"Errore sconosciuto durante il salvataggio."};export{i as p};
