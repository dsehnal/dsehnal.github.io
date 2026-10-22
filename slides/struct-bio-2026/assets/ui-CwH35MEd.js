import{qn as e}from"./viewer-ZhTZkR5F.js";import{t}from"./param-definition-DXotjOrX.js";import{$ as n,A as r,At as i,C as a,J as o,K as s,Y as c,Z as l,bt as u,k as d,lt as f,q as p,ut as m,yt as h}from"./src-C-Tq_k0k.js";import{t as g}from"./combineLatest-DQTOUvb0.js";import{T as _,y as v}from"./manager-CZ1nrgxC.js";import{a as y}from"./state-CJLAlVKK.js";import{n as b,t as x}from"./superposition-y6vubS9b.js";function S(t){let n=_(t.made,e=>e.length);return p(m,{when:_(n,e=>e>0),children:()=>o(`div`,{class:e.block,children:[o(`div`,{class:e.head,children:[o(`span`,{class:e.caption,children:[`Superposed `,p(`span`,{class:e.count,children:n})]}),p(m,{when:_(n,e=>e>1&&!!t.clear),children:()=>p(`button`,{type:`button`,class:e.clear,onClick:()=>t.clear?.(),children:`Clear all`})})]}),p(d,{class:e.list,contentClass:e.listContent,children:p(f,{each:t.made,children:n=>o(`div`,{class:e.row,title:n.line,children:[p(`span`,{class:e.lead,children:p(c,{name:`superpose`,size:13})}),p(`span`,{class:e.name,children:n.label}),p(`span`,{class:e.detail,children:n.detail}),p(`span`,{class:e.actions,children:p(`button`,{type:`button`,class:e.action,title:`Remove the superposition`,"aria-label":`Remove the superposition of ${n.label}`,onClick:()=>t.remove(n.id),children:p(c,{name:`x`,size:13})})})]})},e=>e.id)})]})})}var C={entries:`msp-viewer-superpose-entries`,entry:`msp-viewer-superpose-entry`,hint:`msp-viewer-superpose-hint`,index:`msp-viewer-superpose-index`,label:`msp-viewer-superpose-label`,problem:`msp-viewer-superpose-problem`,role:`msp-viewer-superpose-role`,superpose:`msp-viewer-superpose-superpose`};l(`viewer/views/structure/superpose.module.css`,`@layer msp.components {
.msp-viewer-superpose-superpose {
  font-size: var(--msp-font-size-sm);
  gap: var(--msp-space-2);
  display: grid;
}

.msp-viewer-superpose-entries {
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  display: grid;
}

.msp-viewer-superpose-hint {
  padding: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.45;
}

.msp-viewer-superpose-entry {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-superpose-index {
  min-width: 1.5ch;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-viewer-superpose-label {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-superpose-role {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-viewer-superpose-problem {
  max-width: 55%;
  color: var(--msp-color-warning);
  font-size: var(--msp-font-size-xs);
  text-overflow: clip;
  white-space: nowrap;
  flex: none;
  overflow: hidden;
}
}
`);function w(e){let{model:t}=e;return o(`div`,{class:C.superpose,children:[p(a,{form:t.form}),p(`div`,{class:C.entries,children:p(f,{each:t.entries,fallback:()=>p(`p`,{class:C.hint,children:t.hint}),children:(e,n)=>o(`button`,{type:`button`,class:C.entry,title:e.problem?`${e.label}: ${e.problem}`:`Focus`,onClick:()=>t.focus(e.id),children:[p(`span`,{class:C.index,children:_(n,e=>`${e+1}`)}),p(`span`,{class:C.label,children:e.label}),e.problem?p(`span`,{class:C.problem,children:e.problem}):null,!e.problem&&n.value===0?p(`span`,{class:C.role,children:`reference`}):null]})},e=>e.id)}),p(s,{icon:`superpose`,label:`Superpose`,disabled:_(t.ready,e=>!e),info:t.blocked?_(t.blocked,e=>e??``):void 0,onReset:()=>t.form.reset(),onApply:()=>t.superpose()}),t.made&&t.remove?p(S,{made:t.made,remove:e=>t.remove?.(e),clear:t.clear}):null]})}var T={method:t.Select(`chains`,[[`chains`,`Chains`],[`tm-align`,`TM-align`],[`db`,`UniProt (SIFTS)`],[`ligands`,`Ligands`],[`atoms`,`Atoms`]],{isEssential:!0,description:`What the structures are superposed by.`}),alignSequences:t.Boolean(!0,{label:`Align sequences`,isEssential:!0,description:`Guide the superposition by a sequence alignment of the chains.`,hideIf:e=>e.method!==`chains`}),traceOnly:t.Boolean(!0,{label:`Trace only`,isEssential:!0,description:`Use only CA (and equivalent) atoms.`,hideIf:e=>e.method!==`chains`&&e.method!==`tm-align`&&e.method!==`db`})},E={chains:`Select one chain (or residues within it) in each of two or more structures.`,"tm-align":`Select one chain in each of two or more structures; best when sequence identity is low.`,ligands:`Select one ligand in each of two or more structures.`,atoms:`Select the same atoms, in the same order, in each structure.`,db:`Superposes every structure by the residues they share in UniProt.`},D=3,O=(e,t)=>`${e} ${t}${e===1?``:`s`}`;function k(e){let t=[e.reference?`onto ${e.reference.label}`:`superposed`,e.method?x[e.method]:``,e.rmsd!==void 0&&Number.isFinite(e.rmsd)?`${e.rmsd.toFixed(2)} Å`:``].filter(Boolean).join(` · `);return{id:e.structure.ref,label:e.structure.label,detail:t,line:b(e)}}var A=(e,t)=>e.id===t.id&&e.label===t.label&&e.detail===t.detail&&e.line===t.line;function j(e,t,n){switch(e){case`chains`:case`tm-align`:return t.polymerAtoms===0?`no polymer in it: select a chain`:t.polymerChains>1?`its polymer is in ${O(t.polymerChains,`chain`)}: select one`:void 0;case`ligands`:return t.ligand?void 0:`not one ligand residue`;case`atoms`:return t.atoms<D?`${O(t.atoms,`atom`)}: ${D} are needed`:n&&t!==n&&t.atoms!==n.atoms?`${O(t.atoms,`atom`)}, the reference has ${n.atoms}`:void 0;default:return}}function M(e){let t=new r(T),n=v(!1),a=v([]),o=v(!1),s=v(``),c=v(void 0),l,u=!1,d=()=>t.values.value.method,f=()=>{let t=e.sources.structures.value,r=d();n.set(t.length>1);let i;if(r===`db`)i=t.map(e=>({id:e.ref,label:`${e.label} · all chains`}));else{let t=e.sources.interaction.picked.value;i=t.map(e=>{let n=j(r,e,t[0]);return{id:e.ref,label:`${e.label} · ${e.line}`,...n?{problem:n}:{}}})}let l=i.find(e=>e.problem);a.set(i),c.set(l?`${l.label.split(` · `)[0]}: ${l.problem}.`:void 0),o.set(i.length>=2&&!l),s.set(i.length===1?`${E[r]} One so far.`:E[r])};f();let p=n=>{n!==!!l&&(n?l=g([t.values,e.sources.structures,e.sources.interaction.picked]).subscribe(f):(l?.unsubscribe(),l=void 0))},m=e.api.superpose,h=m?i(m.made,e=>e.map(k),(e,t)=>y(e,t,A)):void 0,_=t=>{t.ok||e.notify(t.hint?`${t.message} ${t.hint}`:t.message??``,`error`)},b=async()=>{if(!u&&o.value){u=!0;try{let n=t.values.value,r=a.value.map(e=>e.id),i=e.api.superpose;if(!i)return;let o=r.map(e=>({target:`selection`,structure:e})),s=n.method===`chains`?await i.chains({targets:o,alignSequences:n.alignSequences,traceOnly:n.traceOnly}):n.method===`tm-align`?await i.tmAlign({targets:o,traceOnly:n.traceOnly}):n.method===`ligands`?await i.ligands({targets:o}):n.method===`atoms`?await i.atoms({targets:o}):await i.db({traceOnly:n.traceOnly});e.notify(s.ok?s.did:s.hint?`${s.message} ${s.hint}`:s.message,s.ok?`success`:`error`)}finally{u=!1}}};return{available:n.asReadonly,form:t,entries:a.asReadonly,ready:o.asReadonly,hint:s.asReadonly,blocked:c.asReadonly,focus:t=>void e.api.focus.set({target:`selection`,structure:t}),superpose:()=>void b(),...h?{made:h,remove:t=>void e.api.superpose?.remove({structure:t}).then(_),clear:()=>void e.api.superpose?.remove({structure:``}).then(_)}:{},setActive:p,dispose(){p(!1)}}}function N(e){return{sections:[{id:`superposition.section.superpose`,slot:`selection`,title:`Superpose`,icon:`layers`,order:3,keywords:[`superposition`,`align`,`tm-align`,`rmsd`,`uniprot`,`sifts`,`ligands`,`atoms`],render:n(()=>{let t=M({api:e.api,sources:e.sources,notify:(t,n)=>e.managers.notifications.post(t,n)});return h(e=>t.setActive(e)),u(()=>t.dispose()),p(m,{when:t.available,fallback:()=>p(`p`,{style:`margin: 0; padding: var(--msp-space-2); color: var(--msp-color-text-subtle); font-size: var(--msp-font-size-xs)`,children:`Load two or more structures to superpose them.`}),children:()=>p(w,{model:t})})})}]}}export{N as superpositionUI};