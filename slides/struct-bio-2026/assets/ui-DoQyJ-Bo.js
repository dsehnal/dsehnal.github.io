import{St as e,Yt as t,Zt as n,nr as r}from"./viewer-ZhTZkR5F.js";import"./structure-RDMPQfl2.js";import{ft as i,t as a}from"./param-definition-DXotjOrX.js";import{d as o,r as s}from"./Subject-DUaB6XC9.js";import{c,l}from"./from-om-wJJit.js";import{t as u}from"./debounceTime-CWJpoxuy.js";import{$ as d,A as f,C as p,G as m,J as h,K as g,W as _,Y as v,Z as y,_t as b,bt as x,c as S,dt as C,ht as w,it as T,pt as E,q as D,ut as O,yt as ee}from"./src-C-Tq_k0k.js";import{t as k}from"./combineLatest-DQTOUvb0.js";import{C as A,T as j,y as M}from"./manager-CZ1nrgxC.js";function N(e,t,n){var r=o(e)||t||n?{next:e,error:t,complete:n}:e;return r?l(function(e,t){var n;(n=r.subscribe)==null||n.call(r);var i=!0;e.subscribe(c(t,function(e){var n;(n=r.next)==null||n.call(r,e),t.next(e)},function(){var e;i=!1,(e=r.complete)==null||e.call(r),t.complete()},function(e){var n;i=!1,(n=r.error)==null||n.call(r,e),t.error(e)},function(){var e,t;i&&((e=r.unsubscribe)==null||e.call(r)),(t=r.finalize)==null||t.call(r)}))}):s}var P={autoCrop:`msp-viewer-image-export-autoCrop`,crop:`msp-viewer-image-export-crop`,export:`msp-viewer-image-export-export`,handle:`msp-viewer-image-export-handle`,preview:`msp-viewer-image-export-preview`,stage:`msp-viewer-image-export-stage`};y(`viewer/views/export/image-export.module.css`,`@layer msp.components {
.msp-viewer-image-export-export {
  gap: var(--msp-space-3);
  min-width: 0;
  display: grid;
}

.msp-viewer-image-export-stage {
  height: 168px;
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  place-items: center;
  display: grid;
}

.msp-viewer-image-export-preview {
  border-radius: var(--msp-radius-sm);
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  box-shadow: 0 0 0 1px var(--msp-glass-edge);
  position: relative;
  overflow: hidden;
}

.msp-viewer-image-export-crop {
  cursor: move;
  touch-action: none;
  border: 1px solid color-mix(in oklab, var(--msp-color-text), transparent 30%);
  box-shadow: 0 0 0 999px color-mix(in oklab, var(--msp-color-bg), transparent 45%);
  transition: left var(--msp-motion-base) var(--msp-ease),
    top var(--msp-motion-base) var(--msp-ease),
    width var(--msp-motion-base) var(--msp-ease),
    height var(--msp-motion-base) var(--msp-ease);
  border-radius: 1px;
  position: absolute;

  &[data-auto] {
    border-style: dashed;
  }

  &[data-dragging] {
    transition: none;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-accent);
    outline-offset: 1px;
  }
}

.msp-viewer-image-export-handle {
  background: var(--msp-color-text);
  opacity: 0;
  width: 8px;
  height: 8px;
  transition: opacity var(--msp-motion-fast) var(--msp-ease);
  border-radius: 1px;
  margin: -4px;
  position: absolute;

  .msp-viewer-image-export-crop:hover > &, .msp-viewer-image-export-crop:focus-visible > &, .msp-viewer-image-export-crop[data-dragging] > & {
    opacity: .8;
  }

  &[data-edge="n"], &[data-edge="s"] {
    cursor: ns-resize;
    left: 50%;
  }

  &[data-edge="e"], &[data-edge="w"] {
    cursor: ew-resize;
    top: 50%;
  }

  &[data-edge="n"], &[data-edge="ne"], &[data-edge="nw"] {
    top: 0;
  }

  &[data-edge="s"], &[data-edge="se"], &[data-edge="sw"] {
    top: 100%;
  }

  &[data-edge="w"], &[data-edge="nw"], &[data-edge="sw"] {
    left: 0;
  }

  &[data-edge="e"], &[data-edge="ne"], &[data-edge="se"] {
    left: 100%;
  }

  &[data-edge="nw"], &[data-edge="se"] {
    cursor: nwse-resize;
  }

  &[data-edge="ne"], &[data-edge="sw"] {
    cursor: nesw-resize;
  }
}

.msp-viewer-image-export-autoCrop {
  left: var(--msp-space-2);
  bottom: var(--msp-space-2);
  align-items: center;
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  background: var(--msp-glass-bg);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  border-radius: 10px;
  display: inline-flex;
  position: absolute;

  &:hover {
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    color: var(--msp-color-text);
    font-weight: 600;
  }
}
}
`);var F=new A(!0).asReadonly,I=new A([]).asReadonly;function L(e){let{model:t}=e,n=t.settled??F,r=j(t.form.values,e=>e.mode||`image`),i=e.kinds??I;return h(`div`,{class:P.export,children:[D(O,{when:j(i,e=>e.length?e:void 0),children:e=>D(_,{choices:[{id:`image`,label:`Image`,icon:`image`},...e.map(e=>({id:e.id,label:e.title,...e.icon?{icon:e.icon}:{}}))],active:r,onPick:e=>t.form.set(`mode`,e)})}),D(`div`,{class:P.stage,children:h(`div`,{class:P.preview,style:{"aspect-ratio":j(t.aspect,e=>`${e}`),background:j(t.preview,e=>e??`var(--msp-color-control)`)},children:[D(W,{model:t,settled:n}),D(`button`,{type:`button`,class:P.autoCrop,"aria-pressed":j([t.autoCrop.asReadonly,n],(e,t)=>e&&t),title:`Crop to the visible content`,onClick:()=>t.autoCrop.set(!t.autoCrop.value),children:D(`span`,{children:`Auto-crop`})})]})}),D(p,{form:t.form}),D(O,{when:r,children:n=>n===`image`||!e.kind?D(g,{icon:`download`,label:`Download`,info:t.size,busy:t.busy,secondary:{icon:`copy`,label:`Copy`,onClick:()=>t.copy()},onReset:()=>{t.form.reset(),t.form.set(`mode`,n)},onApply:()=>t.download()}):e.kind(n)})]})}var R=.05,z=.01,B=[`n`,`s`,`e`,`w`,`ne`,`nw`,`se`,`sw`],V=e=>`${(e*100).toFixed(2)}%`,H=(e,t,n)=>Math.min(n,Math.max(t,e));function U(e,t,n,r){if(t===`move`)return{x:H(e.x+n,0,1-e.width),y:H(e.y+r,0,1-e.height),width:e.width,height:e.height};let i=e.x,a=e.y,o=e.x+e.width,s=e.y+e.height;return t.includes(`w`)&&(i=H(i+n,0,o-R)),t.includes(`e`)&&(o=H(o+n,i+R,1)),t.includes(`n`)&&(a=H(a+r,0,s-R)),t.includes(`s`)&&(s=H(s+r,a+R,1)),{x:i,y:a,width:o-i,height:s-a}}function W(e){let{model:t}=e,n=0,r=0,i,a=b(0),o=0,s=()=>{i&&t.setCrop(U(i.start,i.edge,(n-i.x0)/i.width,(r-i.y0)/i.height))};w(a,s);let c=D(`div`,{class:P.crop,tabIndex:0,role:`group`,"aria-label":`Crop: drag to move, drag an edge or a corner to resize; arrow keys move it, ⇧ arrow keys resize it`,hidden:j([e.settled,t.autoCrop.asReadonly],(e,t)=>t&&!e),"data-auto":j(t.autoCrop.asReadonly,e=>e?``:void 0),style:{left:j(t.crop,e=>V(e.x)),top:j(t.crop,e=>V(e.y)),width:j(t.crop,e=>V(e.width)),height:j(t.crop,e=>V(e.height))},onKeyDown:e=>{let n={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];n&&(e.preventDefault(),t.setCrop(U(t.crop.value,e.shiftKey?`se`:`move`,n[0]*z,n[1]*z)))},children:B.map(e=>D(`span`,{class:P.handle,"data-edge":e,"aria-hidden":`true`}))});return T(c,{start:e=>{if(e.button!==0)return;let a=c.parentElement?.getBoundingClientRect();if(a?.width&&a.height)return i={edge:e.target.dataset.edge??`move`,width:a.width,height:a.height,start:{...t.crop.value},x0:e.clientX,y0:e.clientY},n=e.clientX,r=e.clientY,c.dataset.dragging=``,e.preventDefault(),i},move:e=>{n=e.clientX,r=e.clientY,a.offer(++o)},end:(e,t,n)=>{n&&s(),i=void 0,delete c.dataset.dragging}}),c}var G=e=>!e.mode||e.mode===`image`,K={mode:a.Text(`image`,{isHidden:!0}),resolution:t(),format:a.MappedStatic(`png`,{png:a.Group({},{isFlat:!0}),jpeg:a.Group({quality:a.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0}),webp:a.Group({quality:a.Numeric(.9,{min:0,max:1,step:.01})},{isFlat:!0})},{options:[[`png`,`PNG`],[`jpeg`,`JPEG`],[`webp`,`WebP`]],hideIf:e=>!G(e)}),transparent:a.Boolean(!1,{hideIf:e=>!G(e)}),axes:a.Boolean(!1,{label:`Axes`})},te={hd:[1280,720],"full-hd":[1920,1080],"ultra-hd":[3840,2160],"8k-ultra-hd":[7680,4320]},q={x:0,y:0,width:1,height:1};function J(e){return{size:e.resolution,format:e.format.name,quality:e.format.name===`png`?.9:e.format.params.quality,transparent:G(e)&&e.transparent,axes:e.axes}}function ne(e,t){let n=e.resolution,r={...t};if(n.name===`viewport`)return{size:{name:`viewport`},axes:e.axes,box:r};let{width:i,height:a}=Y(e,void 0);return{size:{name:`custom`,params:{width:i,height:a}},axes:e.axes,box:r}}function Y(e,t){let n=e.resolution;if(n.name===`viewport`)return t;if(n.name===`custom`)return n.params;let[r,i]=te[n.name];return{width:r,height:i}}var re=250,ie=500,X=16/9;function ae(e){let t=new f(K),n=M(!0),i=M({...q}),a=M({...q}),o=M({...q}),s=M(void 0),c=M(void 0),l=M(X),d=M(``),p=M(!1),m=M(!1),h=!1,g=0,_,v=e.api.as({kind:`script`}),y=()=>{let e=t.values.value,r=Y(e,c.value),s=G(e),u=n.value?a.value:i.value;o.set(u),l.set(r?r.width/r.height:X);let f=r?`${Math.round(r.width*u.width)} × ${Math.round(r.height*u.height)} px`:``;d.set(r&&s?`${f} · ${e.format.name.toUpperCase()}`:f)},b=async()=>{if(h||!e.sources.canvas.value||!v.export)return;let r=++g;_?.abort();let i=_=new AbortController,o=await v.export.preview({...J(t.values.value),crop:n.value?`auto`:`none`},{signal:i.signal});if(h||r!==g||!o.ok||!o.value)return;let{dataUri:l,width:u,height:d,crop:f}=o.value;s.set(`center / 100% 100% no-repeat url("${l}")`),c.set({width:u,height:d}),n.value&&a.set(f),m.set(!0)},x=n.value,S=[],C=()=>{if(h||S.length)return;S=[n.asReadonly.subscribe(e=>{!e&&x&&i.set({...q}),x=e}),k([t.values,n.asReadonly,i.asReadonly,a.asReadonly,c.asReadonly]).subscribe(y),k([t.values,n.asReadonly,e.sources.canvas,e.sources.structures]).pipe(N(()=>m.set(!1)),u(re)).subscribe(()=>void b())];let o=e.api.export?.sceneChanges;o&&S.push(o.pipe(N(()=>m.set(!1)),r(ie)).subscribe(()=>void b()))},w=()=>{g++,_?.abort(),_=void 0;for(let e of S.splice(0))e.unsubscribe()},T=async(r,a)=>{let o=e.api.export?.[r];if(o&&!p.value){p.set(!0);try{let e=n.value?{crop:`auto`}:{crop:`none`,box:{...i.value}},r=await o({...J(t.values.value),...e});r.ok&&a(r.value,r.did)}finally{p.set(!1)}}};return y(),C(),{preview:s.asReadonly,aspect:l.asReadonly,autoCrop:n,settled:m.asReadonly,crop:o.asReadonly,setCrop:e=>{n.set(!1),i.set(e)},size:d.asReadonly,form:t,busy:p.asReadonly,copy:()=>void T(`imageCopy`,()=>e.notify(`Copied the image.`,`success`)),download:()=>void T(`image`,t=>{t&&(e.save(t.blob,t.filename),e.notify(`Saved ${t.filename} (${t.width} × ${t.height}).`,`success`))}),setActive:e=>e?C():w(),dispose(){h=!0,w()}}}var Z=e=>Math.round(e*100)/100,Q=e=>Array.from(e,Z).join(`, `),oe=[[`Position`,e=>Q(e.position)],[`FoV norm. position`,e=>Q($(e))],[`Target`,e=>Q(e.target)],[`Direction`,e=>Q(se(e))],[`Up`,e=>Q(e.up)],[`Distance`,e=>`${e.distance} Å`],[`Radius`,e=>`${Z(e.radius)} Å`],[`Field of view`,e=>`${e.fov}° (${e.mode})`]];function $(t){return e(i.ofArray(t.target),i.ofArray(t.position),t.mode,t.fov*Math.PI/180)}function se(e){return i.normalize(i(),i.sub(i(),i.ofArray(e.target),i.ofArray(e.position)))}function ce(e){let t=e=>`[${Q(e)}]`;return`{\n  "position": ${t($(e))},\n  "target": ${t(e.target)},\n  "up": ${t(e.up)}\n}`}function le(e){let t=M(void 0);return e.api.export&&E(e.api.export.camera,e=>t.set(e)),h(`div`,{style:`display: grid; gap: var(--msp-space-3); min-width: 0`,children:[D(`div`,{style:`display: grid; grid-template-columns: auto 1fr; gap: var(--msp-space-1) var(--msp-space-3); font-size: var(--msp-font-size-sm); min-width: 0`,children:oe.map(([e,n])=>h(C,{children:[D(`span`,{style:`color: var(--msp-color-text-muted)`,children:e}),D(`span`,{style:`font-family: var(--msp-font-mono); white-space: nowrap; overflow: hidden`,ref:e=>E(t.asReadonly,t=>e.textContent=t?n(t):`—`)})]}))}),D(`div`,{style:`display: flex; flex-wrap: wrap; gap: var(--msp-space-2)`,children:D(m,{size:`sm`,icon:D(v,{name:`copy`}),title:`Copy the camera as MolViewSpec JSON`,onClick:()=>{let n=t.value;n&&typeof navigator<`u`&&navigator.clipboard&&navigator.clipboard.writeText(ce(n)).then(()=>e.managers.notifications.post(`Copied the camera as MolViewSpec JSON.`,`success`),()=>e.managers.notifications.post(`Could not copy to the clipboard.`,`error`))},children:`Copy MVS camera`})})]})}function ue(e){return{sections:[{id:`export-image.section.image`,slot:`export`,title:`Image`,heading:e=>j(e.sections(`export.picture`),e=>e.length?`Image & animation`:`Image`),icon:`camera`,order:0,keywords:[`screenshot`,`png`,`picture`,`copy`,`animation`,`video`,`movie`],open:!0,render:d(({ctx:t})=>{let r=ae({api:e.api,sources:e.sources,notify:(t,n)=>e.managers.notifications.post(t,n),save:n});ee(e=>r.setActive(e)),x(()=>r.dispose()),t.focus&&r.form.set(`mode`,t.focus);let i=t.shell.sections(`export.picture`),a={get:()=>ne(r.form.values.value,r.crop.value)};return D(L,{model:r,kinds:j(i,e=>e.map(e=>({id:e.id,title:e.title,icon:e.icon}))),kind:e=>D(O,{when:j(i,t=>t.find(t=>t.id===e)),children:e=>D(S,{renderer:e.render,ctx:{shell:t.shell,subject:a}})})})})},{id:`export-image.section.camera`,slot:`export`,title:`Camera`,icon:`move-3d`,order:.5,keywords:[`camera`,`position`,`target`,`direction`,`mvs`,`molviewspec`],render:d(()=>le(e))}]}}export{ue as exportImageUI};