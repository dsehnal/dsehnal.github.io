import{$ as e,J as t,Q as n,X as r,Y as i,Z as a,et as o,tt as s}from"./viewer-ZhTZkR5F.js";import"./structure-RDMPQfl2.js";import{ft as c,t as l}from"./param-definition-DXotjOrX.js";import{$ as u,A as d,C as f,G as p,J as m,S as h,Y as g,Z as _,bt as v,dt as y,ht as b,lt as x,q as S,ut as C,yt as w}from"./src-C-Tq_k0k.js";import{T,y as E}from"./manager-CZ1nrgxC.js";var D={caption:`msp-viewer-clipping-caption`,cutIcon:`msp-viewer-clipping-cutIcon`,cutLabel:`msp-viewer-clipping-cutLabel`,cutRow:`msp-viewer-clipping-cutRow`,cutText:`msp-viewer-clipping-cutText`,fade:`msp-viewer-clipping-fade`,fold:`msp-viewer-clipping-fold`,foldChevron:`msp-viewer-clipping-foldChevron`,foldTitle:`msp-viewer-clipping-foldTitle`};_(`viewer/features/clipping/clipping.module.css`,`@layer msp.components {
.msp-viewer-clipping-cutRow {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-viewer-clipping-cutIcon {
  margin-right: var(--msp-space-1);
  color: var(--msp-color-text-muted);
  flex: none;
  display: flex;
}

.msp-viewer-clipping-cutText {
  flex: 1;
  min-width: 0;
  display: grid;
}

.msp-viewer-clipping-fade {
  white-space: nowrap;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-clipping-caption {
  font-size: var(--msp-font-size-xs);
  color: var(--msp-color-text-muted);
  margin: 0;
}

.msp-viewer-clipping-fold {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  padding: var(--msp-space-1) 0;
  color: var(--msp-color-text-muted);
  font: inherit;
  font-size: var(--msp-font-size-xs);
  text-align: start;
  cursor: pointer;
  background: none;
  border: none;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-viewer-clipping-foldTitle {
  flex: 1;
  min-width: 0;
}

.msp-viewer-clipping-foldChevron {
  transition: transform var(--msp-motion-fast, .12s) ease;
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-viewer-clipping-cutLabel {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
  border-radius: var(--msp-radius-sm);
  background: none;
  border: none;
  flex: 1;
  padding: 0;
  display: flex;

  &:hover .msp-viewer-clipping-cutText > :first-child {
    text-underline-offset: 2px;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus, currentColor);
    outline-offset: 2px;
  }
}
}
`);var O={plane:`square`,sphere:`circle`,cube:`box`,cylinder:`cylinder`,infiniteCone:`cone`};function k(e){return{sections:[{id:t,slot:`selection`,title:`Clipping`,icon:`scissors`,order:.5,keywords:[`clip`,`cut`,`slice`,`cross section`,`plane`,`inside`],render:u(()=>{let t=e.api.clipping;return t?S(M,{ctx:e,clipping:t}):S(y,{})})}],nodeActions:[{id:`clipping.node-action.clip-this`,title:`Clip this…`,icon:`scissors`,order:10,kinds:[`component`,`representation`,`volume`,`volume-representation`,`particles`,`particles-representation`],when:t=>e.api.clipping.canClipThis(t.id),run:n=>{let r=e.api.clipping;r.clipThis(e.api,n.id).then(n=>{n&&(n.cut&&r.gizmos.handleOnly(n.cut.index),e.api.view.open({tab:`selection`,section:t}))})}}],selectionActions:[{id:`clipping.selection-action.clip`,title:`Clip…`,hint:`Cut through what it is drawn as`,icon:`scissors`,order:10,run:()=>void e.api.view.open({tab:`selection`,section:t})}]}}var A=`display: flex; align-items: center; gap: var(--msp-space-2); min-width: 0`,j=`margin: 0; font-size: var(--msp-font-size-xs); color: var(--msp-color-text-muted)`;function M(e){let{ctx:t,clipping:n}=e,r=T(t.sources.interaction.selection,e=>e!==void 0),i=n.selectionTypes,a=n.filter,o=T([i,a.asReadonly],(e,t)=>e.filter(e=>t.only?t.only.includes(e):!t.excluded.includes(e))),s=e=>a.set({excluded:e}),c=e=>{let t=o.value.includes(e);s(i.value.filter(n=>n===e?t:!o.value.includes(n)))},l=n.gizmos.handled,u=(e,t)=>n.gizmos.handleOnly(t?e:void 0),d=()=>{let e=o.value.length===i.value.length?[]:o.value,a=r.value?{shape:`plane`,types:e,...n.keepNew.value?{keepWhole:!0}:{}}:{shape:`plane`,everything:!0};t.api.run(`clipping.add`,a).then(e=>{let t=e.value;e.ok&&t&&n.gizmos.handleOnly(t.index)})};w(e=>e?n.showGizmos(t.api):n.gizmos.hide()),v(()=>n.gizmos.hide());let f=T([r,o],(e,t)=>!e||t.length>0),h=T(n.cuts,e=>e.map(e=>e.index),N),_=T(h,e=>e.length>0);return m(`div`,{style:`display: grid; gap: var(--msp-space-2); min-width: 0`,children:[m(`div`,{style:A,children:[S(`p`,{style:`${j}; flex: 1`,children:`Cuts`}),S(p,{size:`xs`,variant:`ghost`,icon:S(g,{name:`plus`}),title:T(r,e=>e?`A cut through what the selection is drawn as (pick its shape on it)`:`A cut through everything drawn (narrow it on the cut)`),disabled:T(f,e=>!e),onClick:d,children:`Add`})]}),S(C,{when:T([_,r],(e,t)=>!e&&!t),children:()=>S(`p`,{style:j,children:`Add cuts what the selection is drawn as; with nothing selected, everything drawn.`})}),S(C,{when:T(i,e=>e.length>1),children:()=>m(`div`,{style:`display: flex; flex-wrap: wrap; align-items: center; gap: var(--msp-space-1); min-width: 0`,children:[S(`span`,{style:`${j}; margin-right: var(--msp-space-1)`,children:`Through`}),S(`div`,{style:`display: contents`,role:`group`,"aria-label":`New cuts through these representation types`,children:S(x,{each:i,children:e=>{let t=T(o,t=>t.includes(e));return S(p,{size:`xs`,variant:`ghost`,pressed:t,icon:S(P,{on:t}),title:T(t,t=>t?`Leave the ${e} whole`:`Cut through the ${e} too`),onClick:()=>c(e),children:S(F,{on:t,children:e})})}})}),S(`span`,{style:`flex: 1`}),S(p,{size:`xs`,variant:`ghost`,title:`Cut through every type`,onClick:()=>s([]),children:`All`}),S(p,{size:`xs`,variant:`ghost`,title:`Uncheck every type`,onClick:()=>s(i.value),children:`None`})]})}),S(C,{when:r,children:()=>{let e=n.keepNew.asReadonly;return S(p,{size:`xs`,variant:`ghost`,block:!0,pressed:e,icon:S(P,{on:e}),title:`A cut added keeps the selected atoms whole: it goes around them`,onClick:()=>n.keepNew.set(!e.value),children:S(F,{on:e,children:`Keep the selection whole`})})}}),S(x,{each:h,children:e=>S(R,{ctx:t,clipping:n,cut:T(n.cuts,t=>t.find(t=>t.index===e)),open:T(l,t=>t.includes(e)),setOpen:t=>u(e,t)})})]})}function N(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function P(e){let t=e.partly;return S(`span`,{style:T(e.on,e=>e?`display: flex`:`display: flex; visibility: hidden`),children:t?S(C,{when:t,fallback:()=>S(g,{name:`check`,size:14}),children:()=>S(g,{name:`minus`,size:14})}):S(g,{name:`check`,size:14})})}function F(e){return S(`span`,{class:D.fade,style:T(e.on,e=>`flex: 1; text-align: start; min-width: 0${e?``:`; color: var(--msp-color-text-muted)`}`),children:e.children})}function I(e){let t=E(!1);return m(`div`,{style:`display: grid; gap: 2px; min-width: 0`,children:[m(`button`,{type:`button`,class:D.fold,"aria-expanded":T(t.asReadonly,e=>String(e)),onClick:()=>t.set(!t.value),children:[m(`span`,{class:`${D.foldTitle} ${D.fade}`,children:[e.title,e.meta?m(y,{children:[` `,e.meta]}):null]}),S(g,{name:`chevron-right`,size:14,class:D.foldChevron})]}),S(C,{when:t.asReadonly,children:()=>e.children()})]})}function L(e){return S(`div`,{style:`display: flex; padding: 2px; border-radius: var(--msp-radius-md); background: var(--msp-color-control); min-width: 0`,role:`radiogroup`,"aria-label":`Shape`,children:a.map(t=>S(`span`,{style:`flex: 1 1 0; min-width: 0; display: grid`,children:S(p,{size:`sm`,variant:`ghost`,block:!0,pressed:t===e.current,title:t===e.current?`A ${r[t].toLowerCase()}`:`Make it a ${r[t].toLowerCase()}`,onClick:()=>t!==e.current&&e.pick(t),children:S(g,{name:O[t],label:r[t]})})}))})}function R(e){let{ctx:t,clipping:n,cut:i}=e,a=(e,n)=>{let r=i.value;return r?t.api.run(e,{...r.object.tag?{tag:r.object.tag}:{cut:r.index},...n}):void 0};return S(C,{when:T(i,e=>e?.object.type),children:o=>{let s=o;return m(`div`,{style:`display: grid; gap: var(--msp-space-2); min-width: 0`,children:[m(`div`,{class:D.cutRow,children:[m(`button`,{type:`button`,class:D.cutLabel,"aria-expanded":T(e.open,e=>String(e)),title:T(e.open,e=>e?`Close its editor`:`Its shape, what it cuts, where, how drawn`),onClick:()=>e.setOpen(!e.open.value),children:[S(`span`,{class:D.cutIcon,children:S(g,{name:O[s],size:18})}),m(`span`,{class:D.cutText,children:[S(`span`,{class:D.fade,children:T(i,e=>e?`${r[s]} ${e.index}`:``)}),S(`span`,{class:`${D.caption} ${D.fade}`,children:T(i,e=>e?z(e):``)})]})]}),S(p,{size:`xs`,variant:`ghost`,icon:S(g,{name:`scan`}),title:T(i,e=>e?.drawing?`Drawn in the scene (saved with it): hide it`:`Draw it in the scene (saved with it)`),pressed:T(i,e=>!!e?.drawing),onClick:()=>a(`clipping.show`,{on:!i.value?.drawing})}),S(p,{size:`xs`,variant:`ghost`,icon:S(g,{name:`trash-2`}),title:`Remove the cut`,onClick:()=>a(`clipping.remove`,{})})]}),S(C,{when:e.open,children:()=>m(y,{children:[S(L,{current:s,pick:e=>a(`clipping.update`,{shape:e})}),S(p,{size:`xs`,variant:`ghost`,block:!0,pressed:T(i,e=>!!e?.object.invert),icon:S(g,{name:`flip-vertical-2`}),title:s===`plane`?`Which side it cuts away`:`Its inside cut away, or its outside`,onClick:()=>a(`clipping.update`,{invert:!i.value?.object.invert}),children:S(`span`,{style:`flex: 1; text-align: start`,children:s===`plane`?`Cut away the other side`:`Cut away the outside instead`})}),S(V,{clipping:n,cut:i,run:a}),S(I,{title:`Kept whole`,meta:T(i,e=>e?.kept?`(${e.kept.label})`:`(nothing)`),children:()=>S(W,{ctx:t,cut:i,run:a})}),S(I,{title:`Position and size`,children:()=>S(K,{cut:i,shape:s,run:a})}),S(C,{when:T(i,e=>!!e?.drawing),children:()=>S(I,{title:`In the scene`,children:()=>S(G,{clipping:n,cut:i,run:a})})})]})})]})}})}function z(e){return e.targets.length>3?`${e.targets.length} representations`:e.targets.map(e=>e.label).join(`, `)}var B=8;function V(e){let t=T(e.cut,t=>t?e.clipping.candidates(t):[],H),n=T(e.cut,e=>new Set(e?.targets.map(e=>e.ref))),r=T([t,n],(e,t)=>{let n=new Map;for(let r of e){let e=n.get(r.type)??{refs:[],on:0};e.refs.push(r.ref),t.has(r.ref)&&e.on++,n.set(r.type,e)}return[...n].map(([e,t])=>({type:e,...t}))}),i=E(``),a=E(!1),o=T(t,e=>e.length>B),s=T([t,n,i.asReadonly,a.asReadonly],(e,t,n,r)=>{let i=n.trim().toLowerCase(),a=[...e].filter(e=>!i||e.label.toLowerCase().includes(i)).sort((e,n)=>Number(t.has(n.ref))-Number(t.has(e.ref)));return r||i?a:a.slice(0,B)},H),c=(t,n)=>e.run(`clipping.apply`,{representations:t,on:n}),l=T([t,n],(e,t)=>`(${e.filter(e=>t.has(e.ref)).length}/${e.length})`);return S(I,{title:`Cuts through`,meta:l,children:()=>m(`div`,{style:`display: grid; gap: 2px; min-width: 0`,role:`group`,"aria-label":`The representations it cuts`,children:[S(C,{when:T([r,t],(e,t)=>e.length>1&&t.length>e.length),children:()=>S(`div`,{style:`display: flex; flex-wrap: wrap; gap: var(--msp-space-1); min-width: 0`,"aria-label":`By type`,children:S(x,{each:T(r,e=>e.map(e=>e.type),U),children:e=>{let t=T(r,t=>t.find(t=>t.type===e)),n=T(t,e=>!!e&&e.on>0),i=T(t,e=>!!e&&e.on>0&&e.on<e.refs.length);return S(p,{size:`xs`,variant:`ghost`,pressed:n,icon:S(P,{on:n,partly:i}),title:T(t,t=>t&&t.on===t.refs.length?`Leave every ${e} whole`:`Cut every ${e}`),onClick:()=>{let e=t.value;e&&c(e.refs,e.on<e.refs.length)},children:S(F,{on:n,children:T(t,t=>t?`${e} ${t.on}/${t.refs.length}`:e)})})}})})}),S(C,{when:o,children:()=>S(h,{size:`sm`,search:!0,placeholder:`Find a representation`,"aria-label":`Find a representation`,value:i,onInput:e=>i.set(e)})}),S(x,{each:s,children:e=>{let t=T(n,t=>t.has(e.ref));return S(p,{size:`xs`,variant:`ghost`,block:!0,pressed:t,icon:S(P,{on:t}),title:T(t,t=>t?`Leave ${e.label} whole`:`Cut ${e.label} too`),onClick:()=>c([e.ref],!t.value),children:S(F,{on:t,children:e.label})})}},e=>e.ref),S(C,{when:T([o,i.asReadonly],(e,t)=>e&&!t.trim()),children:()=>S(p,{size:`xs`,variant:`ghost`,onClick:()=>a.set(!a.value),children:T([a.asReadonly,t],(e,t)=>e?`Show fewer`:`Show all ${t.length}`)})})]})})}function H(e,t){return e.length===t.length&&e.every((e,n)=>e.ref===t[n].ref)}function U(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function W(e){let{cut:t}=e,n=T(e.ctx.sources.interaction.selection,e=>e!==void 0);return m(`div`,{style:`display: grid; gap: 2px; min-width: 0`,children:[S(C,{when:T(t,e=>e?.kept?.label),children:n=>m(`div`,{class:D.cutRow,children:[m(`span`,{class:`${D.fade}`,style:`flex: 1; min-width: 0`,children:[n,m(`span`,{class:D.caption,children:[` `,T(t,e=>e?.kept?`· ${e.kept.count} atoms`:``)]})]}),S(p,{size:`xs`,variant:`ghost`,title:`Cut these atoms again`,onClick:()=>e.run(`clipping.release`,{}),children:`Release`})]})}),S(p,{size:`xs`,variant:`ghost`,block:!0,icon:S(g,{name:`plus`}),disabled:T(n,e=>!e),title:T(n,e=>e?`The selected atoms left whole by this cut`:`Select the atoms to keep whole`),onClick:()=>e.run(`clipping.keep`,{}),children:S(`span`,{style:`flex: 1; text-align: start`,children:`Keep the selection whole`})})]})}function G(e){let{clipping:t,cut:n}=e,r=!1,i,a=async()=>{for(r=!0;i;){let t=i;i=void 0,await e.run(`clipping.show`,{on:!0,options:t})}r=!1;let a=n.value;a&&o.load(t.drawingValues(a))},o=new d(t.drawingParams,n.value?t.drawingValues(n.value):void 0,{onChange:e=>{i=e,r||a()}});return b(n,e=>{e&&!r&&o.load(t.drawingValues(e))}),S(f,{form:o})}function K(e){let{cut:t,shape:n}=e,r=X(n),i=!1,a,o=new Set,s=async()=>{for(i=!0;a;){let t=a,r=new Set(o);a=void 0,o.clear(),await e.run(`clipping.update`,$(n,t,r))}i=!1;let r=t.value;r&&c.load(Q(r))},c=new d(r,t.value?Q(t.value):void 0,{onChange:(e,t)=>{a=e,o.add(t),i||s()}});return b(t,e=>{e&&!i&&c.load(Q(e))}),S(f,{form:c})}var q=l.Vec3(c(),{},{description:`Its center (Å); a plane goes through it, a cone starts at it`}),J=e=>l.Vec3(c.create(0,1,0),{},{description:e}),Y=e=>l.Numeric(10,{min:.1,max:2e3,step:.1},{label:e});function X(e){switch(e){case`plane`:return{position:q,normal:J(`It cuts away the side this points to`)};case`sphere`:return{position:q,diameter:Y(`Diameter (Å)`)};case`cube`:return{position:q,up:J(`Its height axis`),size:l.Vec3(c.create(10,10,10))};case`cylinder`:return{position:q,axis:J(`Its axis`),diameter:Y(`Diameter (Å)`),height:Y(`Height (Å)`)};case`infiniteCone`:return{position:q,axis:J(`Which way it opens`),angle:l.Numeric(25,{min:1,max:89,step:1},{label:`Half-angle (°)`})}}}var Z=(e,t)=>c.create(...[0,1,2].map(n=>+e[n].toFixed(t)));function Q(t){let r=t.object,a={...r,position:Z(r.position,2),scale:Z(r.scale,2)},o=Z(s(r.rotation,n),3);switch(a.type){case`plane`:return{position:a.position,normal:o};case`sphere`:return{position:a.position,diameter:a.scale[0]};case`cube`:return{position:a.position,up:o,size:a.scale};case`cylinder`:return{position:a.position,axis:o,diameter:a.scale[0],height:a.scale[1]};case`infiniteCone`:return{position:a.position,axis:Z(s(r.rotation,i),3),angle:+e(r.scale).toFixed(1)}}return{}}function $(e,t,n){let r={};n.has(`position`)&&(r.position=[...t.position]);let i={plane:`normal`,cube:`up`,cylinder:`axis`,infiniteCone:`axis`,sphere:``}[e];switch(i&&n.has(i)&&(r.normal=[...t[i]]),e){case`sphere`:n.has(`diameter`)&&(r.scale=[t.diameter,t.diameter,t.diameter]);break;case`cube`:n.has(`size`)&&(r.scale=[...t.size]);break;case`cylinder`:(n.has(`diameter`)||n.has(`height`))&&(r.scale=[t.diameter,t.height,t.diameter]);break;case`infiniteCone`:n.has(`angle`)&&(r.scale=[...o(t.angle)])}return r}export{k as clippingUI};