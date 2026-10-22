import{Zt as e,gn as t,hn as n,mn as r}from"./viewer-ZhTZkR5F.js";import{I as i,t as a}from"./param-definition-DXotjOrX.js";import{$ as o,A as s,At as c,C as l,D as u,G as d,J as f,S as p,Y as m,Z as h,_t as g,bt as _,d as v,dt as y,g as ee,ht as te,it as b,jt as x,k as S,lt as ne,m as C,p as w,q as T,u as E,ut as D,yt as O}from"./src-C-Tq_k0k.js";import{T as k,y as A}from"./manager-CZ1nrgxC.js";import"./core-1QkLp1BW.js";import{t as re}from"./drag-to-reorder-PP622ujq.js";var j={action:`msp-viewer-snapshots-panel-action`,actionLabel:`msp-viewer-snapshots-panel-actionLabel`,actions:`msp-viewer-snapshots-panel-actions`,block:`msp-viewer-snapshots-panel-block`,blockCaption:`msp-viewer-snapshots-panel-blockCaption`,blockContent:`msp-viewer-snapshots-panel-blockContent`,description:`msp-viewer-snapshots-panel-description`,descriptionField:`msp-viewer-snapshots-panel-descriptionField`,empty:`msp-viewer-snapshots-panel-empty`,field:`msp-viewer-snapshots-panel-field`,fields:`msp-viewer-snapshots-panel-fields`,grip:`msp-viewer-snapshots-panel-grip`,index:`msp-viewer-snapshots-panel-index`,inspection:`msp-viewer-snapshots-panel-inspection`,inspector:`msp-viewer-snapshots-panel-inspector`,inspectorContent:`msp-viewer-snapshots-panel-inspectorContent`,inspectorEmpty:`msp-viewer-snapshots-panel-inspectorEmpty`,inspectorHeader:`msp-viewer-snapshots-panel-inspectorHeader`,inspectorKind:`msp-viewer-snapshots-panel-inspectorKind`,inspectorTitle:`msp-viewer-snapshots-panel-inspectorTitle`,item:`msp-viewer-snapshots-panel-item`,key:`msp-viewer-snapshots-panel-key`,label:`msp-viewer-snapshots-panel-label`,list:`msp-viewer-snapshots-panel-list`,listContent:`msp-viewer-snapshots-panel-listContent`,menuItem:`msp-viewer-snapshots-panel-menuItem`,name:`msp-viewer-snapshots-panel-name`,optionsButton:`msp-viewer-snapshots-panel-optionsButton`,panel:`msp-viewer-snapshots-panel-panel`,row:`msp-viewer-snapshots-panel-row`,rowActions:`msp-viewer-snapshots-panel-rowActions`,slot:`msp-viewer-snapshots-panel-slot`,textarea:`msp-viewer-snapshots-panel-textarea`,thumb:`msp-viewer-snapshots-panel-thumb`,trailing:`msp-viewer-snapshots-panel-trailing`};h(`viewer/views/state/snapshots-panel.module.css`,`@layer msp.components {
.msp-viewer-snapshots-panel-panel {
  gap: var(--msp-space-2);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
  container-type: inline-size;
}

.msp-viewer-snapshots-panel-actions {
  gap: var(--msp-space-1);
  flex: none;
  min-width: 0;
  display: flex;
}

@container (width < 280px) {
  .msp-viewer-snapshots-panel-actions > button:has(.msp-viewer-snapshots-panel-actionLabel) {
    width: 24px;
    padding: 0;
  }

  .msp-viewer-snapshots-panel-actionLabel {
    clip-path: inset(50%);
    white-space: nowrap;
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
  }
}

.msp-viewer-snapshots-panel-trailing {
  margin-left: auto;
  display: flex;
}

.msp-viewer-snapshots-panel-optionsButton {
  margin-right: var(--msp-space-2);
}

.msp-viewer-snapshots-panel-block {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  flex: none;
  max-height: 50%;
}

.msp-viewer-snapshots-panel-blockContent {
  padding: var(--msp-space-2) var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-snapshots-panel-blockCaption {
  padding: var(--msp-space-1) 0 var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-viewer-snapshots-panel-list {
  flex: 1 1 0;
  min-height: 80px;
}

.msp-viewer-snapshots-panel-listContent {
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  display: grid;
}

.msp-viewer-snapshots-panel-empty {
  padding: var(--msp-space-3) var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.5;

  & strong {
    color: var(--msp-color-text-muted);
    font-weight: 600;
  }
}

.msp-viewer-snapshots-panel-item {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: max(28px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-space-1) 0 0;
  border-radius: var(--msp-radius-md);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-current] {
    background: var(--msp-color-control);

    & .msp-viewer-snapshots-panel-name {
      color: var(--msp-color-accent);
    }
  }
}

.msp-viewer-snapshots-panel-row {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 100%;
  padding: 0 0 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  cursor: default;
  user-select: none;
  flex: 1;
  display: flex;

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-viewer-snapshots-panel-slot {
  flex: none;
  place-items: center end;
  min-width: 2ch;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }
}

.msp-viewer-snapshots-panel-grip {
  width: 14px;
  height: 22px;
  color: var(--msp-color-text-subtle);
  cursor: grab;
  touch-action: none;
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  &:hover {
    color: var(--msp-color-text);
  }

  .msp-viewer-snapshots-panel-item:hover &, [data-dragging] & {
    opacity: 1;
  }
}

.msp-viewer-snapshots-panel-item:hover .msp-viewer-snapshots-panel-index, [data-dragging] .msp-viewer-snapshots-panel-index {
  visibility: hidden;
}

.msp-viewer-snapshots-panel-item {
  &[data-dragging] {
    opacity: .5;
  }

  &[data-drop="before"] {
    box-shadow: 0 -2px 0 var(--msp-color-text-muted);
  }

  &[data-drop="after"] {
    box-shadow: 0 2px 0 var(--msp-color-text-muted);
  }
}

.msp-viewer-snapshots-panel-index {
  min-width: 2ch;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  text-align: right;
  flex: none;
}

.msp-viewer-snapshots-panel-thumb {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 16px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  flex: none;
}

.msp-viewer-snapshots-panel-name {
  min-width: 3ch;
  max-width: 60%;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 0 auto;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-key {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-viewer-snapshots-panel-description {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-rowActions {
  flex: none;
  gap: 1px;
  display: flex;
}

.msp-viewer-snapshots-panel-action {
  width: max(24px, var(--msp-touch-target, 0px));
  height: max(24px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-snapshots-panel-item:hover &, .msp-viewer-snapshots-panel-item:focus-within &, &[aria-expanded="true"] {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-snapshots-panel-menuItem {
  align-items: center;
  gap: var(--msp-space-3);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 14px 1fr;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-danger] {
    color: var(--msp-color-danger);
  }

  &[data-danger]:not(:first-child) {
    margin-top: var(--msp-space-1);
    border-radius: 0 0 var(--msp-radius-sm) var(--msp-radius-sm);
    box-shadow: 0 -1px 0 var(--msp-glass-edge);
  }

  &[data-danger] {
    &:hover, &:focus-visible {
      background: color-mix(in oklab, var(--msp-color-danger), transparent 88%);
      color: var(--msp-color-danger);
    }
  }
}

.msp-viewer-snapshots-panel-inspector {
  height: clamp(200px, 45%, 440px);
  margin: 0 calc(-1 * var(--msp-space-2));
  border-top: 1px solid var(--msp-glass-edge);
  flex: none;
}

.msp-viewer-snapshots-panel-inspectorContent {
  grid-template-columns: minmax(0, 1fr);
  min-height: 100%;
  display: grid;
}

.msp-viewer-snapshots-panel-inspectorEmpty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  text-align: center;
  place-items: center;
  margin: 0;
  display: grid;
}

.msp-viewer-snapshots-panel-inspection {
  align-content: start;
  gap: var(--msp-space-3);
  padding: var(--msp-space-3) var(--msp-space-4);
  display: grid;
}

.msp-viewer-snapshots-panel-inspectorHeader {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  display: flex;
}

.msp-viewer-snapshots-panel-inspectorTitle {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-inspectorKind {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-viewer-snapshots-panel-fields {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-viewer-snapshots-panel-field {
  grid-template-columns: var(--msp-label-width) minmax(0, 1fr);
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 24px;
  display: grid;
}

.msp-viewer-snapshots-panel-label {
  color: var(--msp-color-text-muted);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-snapshots-panel-descriptionField {
  gap: var(--msp-space-1);
  padding-top: var(--msp-space-1);
  display: grid;
}

.msp-viewer-snapshots-panel-textarea {
  min-height: 72px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font: inherit;
  resize: vertical;
  border: 0;
  line-height: 1.45;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 1px;
  }
}
}
`);function ie(e){let{model:t}=e,n=A(!1),r=x(t.current),i,a=k(t.entries,e=>e.length>0),o=f(`div`,{class:j.panel,children:[f(`div`,{class:j.actions,children:[T(d,{size:`sm`,variant:`ghost`,icon:T(m,{name:`plus`}),onClick:()=>t.add(),children:T(`span`,{class:j.actionLabel,children:`Add`})}),T(`span`,{class:j.trailing,children:e.actions?.()}),T(d,{size:`sm`,variant:`ghost`,class:j.optionsButton,icon:T(m,{name:`settings`}),title:`Snapshot options`,pressed:n.asReadonly,onClick:()=>n.set(!n.value)})]}),T(D,{when:n.asReadonly,reveal:!0,children:()=>f(S,{class:j.block,contentClass:j.blockContent,role:`region`,"aria-label":`Snapshot options`,children:[T(`p`,{class:j.blockCaption,children:`What a new snapshot includes`}),T(l,{form:t.saveOptions})]})}),T(S,{class:j.list,contentClass:j.listContent,role:k(a,e=>e?`list`:void 0),"aria-label":k(a,e=>e?`Snapshots`:void 0),ref:e=>i=e,children:T(ne,{each:t.entries,fallback:()=>f(`p`,{class:j.empty,children:[`No snapshots yet. `,T(`strong`,{children:`Add`}),` saves the current view; saved ones play back in order.`]}),children:(e,n)=>T(M,{model:t,entry:e,index:n,current:r.key(e.id)})},e=>e.id)}),T(S,{class:j.inspector,contentClass:j.inspectorContent,role:`region`,"aria-label":`Snapshot`,children:T(D,{when:k([t.entries,t.current],(e,t)=>e.find(e=>e.id===t)),fallback:()=>T(`p`,{class:j.inspectorEmpty,children:`Apply a snapshot to edit its name, key and description.`}),children:e=>T(P,{model:t,entry:e})})})]});return i&&re(i,`.${j.grip}`,(e,n)=>t.moveTo(e,n)),o}function M(e){let{model:t,entry:n}=e,r=A(!1),i,a=n.description?.split(`
`).map(e=>e.replace(/[#*`>-]/g,``).trim()).find(e=>e);return f(`div`,{class:j.item,role:`listitem`,"data-id":n.id,"data-current":k(e.current,e=>e?``:void 0),children:[f(`div`,{class:j.row,role:`button`,tabIndex:0,"aria-current":k(e.current,e=>e?`true`:void 0),"aria-label":`Apply ${n.name}`,"aria-keyshortcuts":`Alt+ArrowUp Alt+ArrowDown`,onClick:()=>t.apply(n.id),onKeyDown:e=>{if(e.key===`Enter`||e.key===` `)e.preventDefault(),t.apply(n.id);else if(e.altKey&&(e.key===`ArrowUp`||e.key===`ArrowDown`)&&e.target===e.currentTarget){e.preventDefault();let r=e.currentTarget;t.move(n.id,e.key===`ArrowUp`?-1:1),queueMicrotask(()=>{r.isConnected&&document.activeElement!==r&&r.focus()})}},children:[f(`span`,{class:j.slot,children:[T(`span`,{class:j.index,children:k(e.index,e=>`${e+1}`)}),T(`span`,{class:j.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder (Alt+Up or Down on the row)`,onClick:e=>e.stopPropagation(),children:T(m,{name:`grip-vertical`,size:14})})]}),n.image?T(`span`,{class:j.thumb,style:{background:n.image}}):null,T(`span`,{class:j.name,children:n.name}),n.key?f(`span`,{class:j.key,children:[`#`,n.key]}):null,T(`span`,{class:j.description,children:a??``})]}),f(`span`,{class:j.rowActions,children:[T(`button`,{type:`button`,class:j.action,"data-tip":`Retake from the current view`,"aria-label":`Retake from the current view`,onClick:e=>{e.stopPropagation(),t.replace(n.id)},children:T(m,{name:`camera`,size:14})}),T(`button`,{type:`button`,class:j.action,"aria-label":`More`,"aria-haspopup":`menu`,"aria-expanded":r,ref:e=>i=e,onClick:e=>{e.stopPropagation(),r.set(!r.value)},children:T(m,{name:`ellipsis`,size:15})})]}),T(D,{when:r,children:()=>T(u,{anchor:i,"aria-label":`${n.name}: actions`,onClose:e=>{r.set(!1),e&&i?.focus()},children:T(N,{icon:`trash-2`,label:`Remove`,danger:!0,run:()=>{r.set(!1),t.remove(n.id)}})})})]})}function N(e){return f(`button`,{type:`button`,role:`menuitem`,class:j.menuItem,"data-danger":e.danger?``:void 0,onClick:e.run,children:[T(`span`,{}),T(`span`,{children:e.label})]})}function P(e){let{model:t,entry:n}=e,r=t.entryOptions(n.id);return f(`div`,{class:j.inspection,children:[f(`header`,{class:j.inspectorHeader,children:[T(`span`,{class:j.inspectorTitle,children:n.name}),T(`span`,{class:j.inspectorKind,children:n.timestamp??`snapshot`})]}),f(`div`,{class:j.fields,children:[f(`label`,{class:j.field,children:[T(`span`,{class:j.label,children:`Name`}),T(p,{size:`sm`,value:n.name,onSubmit:e=>t.update(n.id,{name:e})})]}),f(`label`,{class:j.field,children:[T(`span`,{class:j.label,children:`Key`}),T(p,{size:`sm`,value:n.key??``,placeholder:`Optional, for #links`,onSubmit:e=>t.update(n.id,{key:e||void 0})})]}),f(`label`,{class:j.descriptionField,children:[T(`span`,{class:j.label,children:`Description`}),T(`textarea`,{class:j.textarea,rows:4,placeholder:`Markdown · [title](#key) links to a snapshot`,value:n.description??``,onChange:e=>t.update(n.id,{description:e.currentTarget.value||void 0})})]})]}),r?T(l,{form:r}):null]})}function F(e){let t=A(!1),n=A(!1),r=A(0),i=A(0),a=A(!1),o=null,s=()=>{},c=(e,t)=>{e.value!==t&&e.set(t)},l=e.audio.subscribe(e=>{if(s(),o=e,c(t,!!e),!e){c(n,!1),c(r,0),c(i,0);return}a.value&&(e.muted=!0);let l=()=>{c(a,e.muted),c(n,!e.paused&&!e.ended),c(r,e.currentTime||0),c(i,Number.isFinite(e.duration)?e.duration:0)},u=[`play`,`pause`,`ended`,`timeupdate`,`durationchange`,`loadedmetadata`,`seeked`,`emptied`,`volumechange`];for(let t of u)e.addEventListener(t,l);s=()=>{for(let t of u)e.removeEventListener(t,l)},l()});return{present:t.asReadonly,playing:n.asReadonly,time:r.asReadonly,duration:i.asReadonly,muted:a.asReadonly,toggleMute(){let e=!a.value;a.set(e),o&&(o.muted=e)},toggle(){o&&(o.paused||o.ended?o.play().catch(()=>{}):o.pause())},stop:()=>e.stopAudio(),seek(e){o&&o.duration>0&&(o.currentTime=Math.max(0,Math.min(1,e))*o.duration)},close:()=>e.closeAudio(),dispose(){l.unsubscribe(),s()}}}function I(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}var L={action:`msp-viewer-audio-bar-action`,bar:`msp-viewer-audio-bar-bar`,fill:`msp-viewer-audio-bar-fill`,knob:`msp-viewer-audio-bar-knob`,knobTrack:`msp-viewer-audio-bar-knobTrack`,play:`msp-viewer-audio-bar-play`,time:`msp-viewer-audio-bar-time`,track:`msp-viewer-audio-bar-track`};h(`viewer/views/state/audio-bar.module.css`,`@layer msp.components {
.msp-viewer-audio-bar-bar {
  align-items: center;
  gap: var(--msp-space-2);
  height: 32px;
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  font-size: var(--msp-font-size-xs);
  display: flex;
}

.msp-viewer-audio-bar-play {
  background: var(--msp-color-accent);
  width: 24px;
  height: 24px;
  color: var(--msp-color-on-accent);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  border-radius: 50%;
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    transform: scale(1.06);
  }
}

.msp-viewer-audio-bar-time {
  min-width: 4ch;
  color: var(--msp-color-text-subtle);
  font-variant-numeric: tabular-nums;
  text-align: center;
  flex: none;
}

.msp-viewer-audio-bar-track {
  cursor: pointer;
  touch-action: none;
  outline: none;
  flex: 1;
  min-width: 0;
  height: 16px;
  position: relative;

  &:before {
    content: "";
    background: var(--msp-color-pressed);
    border-radius: 1.5px;
    height: 3px;
    margin-top: -1.5px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px var(--msp-color-focus-ring);
    border-radius: var(--msp-radius-sm);
  }
}

.msp-viewer-audio-bar-fill {
  background: var(--msp-color-accent);
  transform-origin: 0;
  will-change: transform;
  border-radius: 1.5px;
  width: 100%;
  height: 3px;
  margin-top: -1.5px;
  position: absolute;
  top: 50%;
  left: 0;
}

.msp-viewer-audio-bar-knobTrack {
  pointer-events: none;
  will-change: transform;
  position: absolute;
  inset: 0;
}

.msp-viewer-audio-bar-knob {
  background: var(--msp-color-accent);
  width: 10px;
  height: 10px;
  box-shadow: 0 0 0 2px var(--msp-color-well);
  border-radius: 50%;
  margin-top: -5px;
  position: absolute;
  top: 50%;
  left: -5px;
}

.msp-viewer-audio-bar-action {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}
}
`);function R(e){let{model:t}=e,n=k([t.time,t.duration],(e,t)=>t>0?Math.min(1,e/t):0),r,i=0,a=()=>{r&&t.seek((i-r.left)/(r.width||1))},o=g(0),s=0;te(o,a);let c=f(`div`,{class:L.track,role:`slider`,tabIndex:0,"aria-label":`Position`,"aria-valuemin":`0`,"aria-valuemax":k(t.duration,e=>String(Math.round(e))),"aria-valuenow":k(t.time,e=>String(Math.round(e))),"aria-valuetext":k([t.time,t.duration],(e,t)=>`${I(e)} of ${I(t)}`),onKeyDown:e=>{let n=t.duration.value;if(!(n>0))return;let r=e.shiftKey?10:5;if(e.key===`ArrowRight`)t.seek((t.time.value+r)/n);else if(e.key===`ArrowLeft`)t.seek((t.time.value-r)/n);else if(e.key===` `)t.toggle();else return;e.preventDefault()},children:[T(`span`,{class:L.fill,style:{transform:k(n,e=>`scaleX(${e})`)}}),T(`span`,{class:L.knobTrack,style:{transform:k(n,e=>`translateX(${e*100}%)`)},children:T(`span`,{class:L.knob})})]});return b(c,{start:e=>{if(e.button===0)return r=c.getBoundingClientRect(),i=e.clientX,a(),r},move:e=>{i=e.clientX,o.offer(++s)},end:(e,t,n)=>{t===`up`&&n&&(i=n.clientX,a()),r=void 0}}),f(`div`,{class:L.bar,role:`group`,"aria-label":`Audio`,children:[T(`button`,{type:`button`,class:L.play,title:k(t.playing,e=>e?`Pause`:`Play`),"aria-label":k(t.playing,e=>e?`Pause audio`:`Play audio`),onClick:()=>t.toggle(),children:T(D,{when:t.playing,fallback:()=>T(m,{name:`play`,size:13}),children:()=>T(m,{name:`pause`,size:13})})}),T(`span`,{class:L.time,children:k(t.time,I)}),c,T(`span`,{class:L.time,children:k(t.duration,e=>e>0?I(e):`–:––`)}),T(`button`,{type:`button`,class:L.action,title:`Stop`,"aria-label":`Stop audio`,onClick:()=>t.stop(),children:T(m,{name:`square`,size:11})}),T(`button`,{type:`button`,class:L.action,title:`Close`,"aria-label":`Close audio`,onClick:()=>t.close(),children:T(m,{name:`x`,size:13})})]})}function z(e,t){return{link(n){if(t.command(n))return t=>void e.snapshot?.link({href:n,event:t})},image(e,n){let r=t.command(e);return r?B(r)??document.createTextNode(n):t.resolve(e)}}}function B(e){let a=e[`color-swatch`];if(a)return V({display:`inline-block`,width:`0.75em`,height:`0.75em`,borderRadius:`25%`,backgroundColor:a});let o=e[`color-palette-name`],s=e[`color-palette-colors`];if(!o&&!s)return;let c=s?t(s):i[o.toLowerCase()]?.list;if(c?.length)return V({display:`inline-block`,minWidth:e[`color-palette-width`]??`150px`,height:e[`color-palette-height`]??`0.5em`,borderRadius:`2px`,background:(`color-palette-discrete`in e?n:r)(c)})}function V(e){let t=document.createElement(`span`);return Object.assign(t.style,e),t}var H=a.MappedStatic(`animate`,{animate:a.Group({durationInMs:a.Numeric(250,{min:100,max:5e3,step:50},{label:`Duration (ms)`}),easing:a.Select(`linear`,[[`linear`,`Linear`],[`ease-in-out`,`Ease in-out`],[`ease-out`,`Ease out`]])},{isFlat:!0}),instant:a.Group({},{isFlat:!0})},{label:`Camera`,options:[[`animate`,`Animate`],[`instant`,`Instant`]]}),U={durationInMs:a.Numeric(1500,{min:100,max:15e3,step:100},{label:`Show for (ms)`}),data:a.Boolean(!0,{label:`Data`}),camera:a.Boolean(!0,{label:`Camera`}),cameraTransition:H,canvas3d:a.Boolean(!0,{label:`Canvas settings`}),componentManager:a.Boolean(!0,{label:`Component options`}),structureSelection:a.Boolean(!1,{label:`Selection`}),animation:a.Boolean(!0,{label:`Animation`}),startAnimation:a.Boolean(!1,{label:`Start animation`}),behavior:a.Boolean(!1,{label:`Behaviors`}),interactivity:a.Boolean(!0,{label:`Interactivity`}),image:a.Boolean(!1,{label:`Thumbnail`,description:`Save a small image with each snapshot.`})},W={durationInMs:a.Numeric(1500,{min:100,max:15e3,step:100},{label:`Show for (ms)`})},G=W.durationInMs.defaultValue,K=(e,t)=>e.name||`Snapshot ${t+1}`,q=e=>new Date(e).toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`}),J=(e,t)=>({id:e.id,name:K(e,t),...e.key?{key:e.key}:{},...e.description?{description:e.description}:{},timestamp:q(e.timestamp),...e.image?{image:e.image}:{}}),ae=(e,t)=>e.length===t.length&&e.every((e,n)=>{let r=t[n];return e.id===r.id&&e.name===r.name&&e.key===r.key&&e.description===r.description&&e.timestamp===r.timestamp&&e.image===r.image});function oe(e,t,n){let r=t.state,i=c(r,e=>e.entries.map(J),ae),a=c(r,e=>e.current,Object.is),o=new Map,l=new Map,u=e=>r.value.entries.find(t=>t.id===e),d=new s(U),f=e=>{o.delete(e);let t=l.get(e);t&&clearTimeout(t),l.delete(e)},p,m=!0,h=()=>{!p&&m&&o.size&&(p=r.subscribe(e=>{for(let[t,n]of[...o]){let r=e.entries.find(e=>e.id===t);r?l.has(t)||n.load({durationInMs:r.showFor??G}):f(t)}o.size||g()}))},g=()=>{p?.unsubscribe(),p=void 0};return{entries:i,current:a,saveOptions:d,entryOptions(t){if(!u(t))return;let n=o.get(t);if(!n){for(let e of[...o.keys()])u(e)||f(e);n=new s(W,{durationInMs:u(t)?.showFor??G},{onChange:n=>{let r=l.get(t);r&&clearTimeout(r),l.set(t,setTimeout(()=>{l.delete(t),e.snapshot?.update({entry:t,showFor:n.durationInMs})},150))}}),o.set(t,n),h()}return n},add:t=>void e.snapshot?.add({...t?{name:t}:{},options:{...d.values.value}}),apply:t=>void e.snapshot?.apply({entry:t}),update:(t,n)=>{u(t)&&e.snapshot?.update({entry:t,...n.name===void 0?{}:{name:n.name},...n.description===void 0?{}:{description:n.description},...n.key===void 0?{}:{key:n.key}})},replace:t=>void e.snapshot?.replace({entry:t,options:{...d.values.value}}),move:(t,n)=>{let i=r.value.entries.findIndex(e=>e.id===t),a=i+n;i<0||a<0||a>=r.value.entries.length||e.snapshot?.move({entry:t,position:a+1})},moveTo:(t,n)=>{let i=r.value.entries.length;e.snapshot?.move({entry:t,position:Math.max(0,Math.min(i-1,n))+1})},remove:t=>void e.snapshot?.remove({entry:t}),clear:()=>void e.snapshot?.clear(),download(t){e.describe(`session.save`)&&e.run(`session.save`,{kind:t}).then(e=>{let t=e.ok?e.value:void 0;t&&n(t.blob,t.filename)})},open(t){t[0]&&e.session.open({file:t[0]})},setActive(e){m=e,e?h():g()},dispose(){m=!1,g();for(let e of l.values())clearTimeout(e);l.clear(),o.clear()}}}function Y(e,t,n){let r=t.state,i=e=>e.entries.findIndex(t=>t.id===e.current);return{count:c(r,e=>e.entries.length,Object.is),index:c(r,i,Object.is),title:c(r,e=>{let t=i(e);return t<0?void 0:K(e.entries[t],t)},Object.is),titles:c(r,e=>e.entries.map(K),(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])),description:c(r,e=>e.entries[i(e)]?.description,Object.is),plainText:c(r,e=>!!e.entries[i(e)]?.plainText,Object.is),...n?{markdown:n}:{},isPlaying:c(r,e=>e.playing,Object.is),previous:()=>void e.snapshot?.previous(),next:()=>void e.snapshot?.next(),goTo(t){let n=r.value.entries[t];n&&e.snapshot?.apply({entry:n.id})},togglePlay:()=>void(r.value.playing?e.snapshot?.stop():e.snapshot?.play()),openLink(t){if(t.startsWith(`#`)){let n=r.value.entries.find(e=>e.key===t.slice(1));n&&e.snapshot?.apply({entry:n.id})}else/^https?:\/\//i.test(t)&&globalThis.open?.(t,`_blank`,`noopener,noreferrer`)}}}function se(e,t){let n=t.transitionState,r=!1,i,a=async()=>{if(!r){r=!0;try{for(;i!==void 0;){let t=i;i=void 0,await e.snapshot?.seek({time:t})}}finally{r=!1}}};return{duration:c(n,e=>e.duration,Object.is),step:c(n,e=>e.step,Object.is),time:c(n,e=>e.time,Object.is),isPlaying:c(n,e=>e.playing,Object.is),seek(e){i=e,a()},togglePlay:()=>void e.snapshot?.transition({play:!n.value.playing})}}var X=`snapshots.overlay.playback`,Z=e=>e.entries.length>=2||!!e.entries.find(t=>t.id===e.current)?.description?.trim(),Q=e=>e.startsWith(`load.`)||e===`session.open`||e===`session.remote.open`,$=e=>e.entries.map(e=>e.id).join(` `);function ce(e,t){let n=new Map,r=!!e.running?.value.some(e=>Q(e.operation)),i=r?``:$(t.state.value),a=``,o=e.events.started.subscribe(e=>{Q(e.operation)&&n.set(e.id,$(t.state.value))}),s=e.events.finished.subscribe(r=>{if(!Q(r.operation))return;let o=n.get(r.id)??i;n.delete(r.id);let s=t.state.value,c=$(s);r.result?.ok&&c!==o&&c!==a&&Z(s)&&(a=c,e.view.open({card:X}))}),c=t.state.value;return!r&&i&&Z(c)&&(a=i,e.view.open({card:X})),()=>{o.unsubscribe(),s.unsubscribe()}}function le(t){let n=t.api.snapshot;if(!n)return{};ce(t.api,n);let r=F(n.markdown);return{tabs:[{id:`snapshots.tab.snapshots`,title:`Snapshots`,icon:`snapshots`,order:1.5,render:o(()=>{let r=oe(t.api,n,e),i=Y(t.api,n);return O(e=>r.setActive(e)),_(()=>r.dispose()),T(ie,{model:r,actions:()=>T(D,{when:k(i.count,e=>e>=2),children:()=>T(d,{size:`sm`,variant:`ghost`,icon:T(D,{when:i.isPlaying,fallback:()=>T(m,{name:`play`}),children:()=>T(m,{name:`pause`})}),title:k(i.isPlaying,e=>e?`Stop the slideshow`:`Play the snapshots`),onClick:()=>i.togglePlay()})})})})}],sections:[{id:`snapshots.section.playback`,slot:`playback`,title:`Snapshots`,render:o(()=>{let e=Y(t.api,n),i=se(t.api,n),a=A(!1),o=k(i.duration,e=>e>0),s=()=>f(y,{children:[T(D,{when:o,children:()=>T(d,{variant:`ghost`,size:`sm`,icon:T(m,{name:`film`}),title:k(a.asReadonly,e=>e?`Hide the snapshot's transition`:`The snapshot's transition`),pressed:a.asReadonly,onClick:()=>a.set(!a.value)})}),T(D,{when:r.present,children:()=>T(v,{muted:r.muted,onClick:()=>r.toggleMute()})})]}),c=k([r.present,e.count],(e,t)=>e&&t<=1),l=k([a.asReadonly,e.count],(e,t)=>e||t<=1);return f(y,{children:[T(C,{model:e,actions:s}),T(D,{when:c,children:()=>T(E,{muted:r.muted,onToggleMute:()=>r.toggleMute()})}),T(D,{when:l,children:()=>T(ee,{model:i})})]})})}],overlays:[{id:X,title:`Story`,persistent:!0,fill:!0,render:o(()=>{let e=Y(t.api,n,z(t.api,n.markdown));return f(`div`,{style:`display: flex; flex: 1 1 0; flex-direction: column; gap: var(--msp-space-2); min-height: 0`,children:[T(D,{when:r.present,children:()=>T(R,{model:r})}),T(D,{when:k(e.count,e=>e>=1),fallback:()=>T(`p`,{style:`margin: 0`,children:`There are no snapshots: add some in the Snapshots tab.`}),children:()=>T(w,{model:e,bare:!0})})]})})}],toolbar:[{id:`snapshots.toolbar.playback`,icon:`book-open`,title:`Story`,group:`scene`,overlay:X,visible:k(n.state,Z)},{id:`snapshots.toolbar.audio`,icon:`play`,title:`Play audio`,group:`view`,place:`canvas`,visible:r.present,face:k(r.playing,e=>e?{icon:`pause`,title:`Pause audio`}:{icon:`play`,title:`Play audio`}),run:()=>r.toggle(),menu:[{id:`stop`,label:`Stop`,icon:`square`,run:()=>r.stop()},{id:`close`,label:`Close the audio`,icon:`x`,run:()=>r.close()}]}]}}export{le as snapshotsUI};