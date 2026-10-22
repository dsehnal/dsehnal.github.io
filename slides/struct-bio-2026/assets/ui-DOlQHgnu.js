import{$ as e,C as t,J as n,Y as r,Z as i,dt as a,lt as o,pt as s,q as c,ut as l}from"./src-C-Tq_k0k.js";import{T as u,y as d}from"./manager-CZ1nrgxC.js";import{t as f}from"./drag-to-reorder-PP622ujq.js";var p={action:`msp-viewer-measurements-add-action`,add:`msp-viewer-measurements-add-add`,added:`msp-viewer-measurements-add-added`,addedAction:`msp-viewer-measurements-add-addedAction`,addedIcon:`msp-viewer-measurements-add-addedIcon`,addedItem:`msp-viewer-measurements-add-addedItem`,addedRow:`msp-viewer-measurements-add-addedRow`,addedValue:`msp-viewer-measurements-add-addedValue`,caption:`msp-viewer-measurements-add-caption`,chevron:`msp-viewer-measurements-add-chevron`,grip:`msp-viewer-measurements-add-grip`,hint:`msp-viewer-measurements-add-hint`,index:`msp-viewer-measurements-add-index`,kind:`msp-viewer-measurements-add-kind`,kindHint:`msp-viewer-measurements-add-kindHint`,kindTitle:`msp-viewer-measurements-add-kindTitle`,kinds:`msp-viewer-measurements-add-kinds`,more:`msp-viewer-measurements-add-more`,optionsToggle:`msp-viewer-measurements-add-optionsToggle`,point:`msp-viewer-measurements-add-point`,pointActions:`msp-viewer-measurements-add-pointActions`,pointLabel:`msp-viewer-measurements-add-pointLabel`,points:`msp-viewer-measurements-add-points`,slot:`msp-viewer-measurements-add-slot`,style:`msp-viewer-measurements-add-style`};i(`viewer/views/structure/measurements-add.module.css`,`@layer msp.components {
.msp-viewer-measurements-add-add {
  font-size: var(--msp-font-size-sm);
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-caption {
  margin: var(--msp-space-1) 0 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-weight: 500;
}

.msp-viewer-measurements-add-points {
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-hint, .msp-viewer-measurements-add-more {
  padding: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  line-height: 1.45;
}

.msp-viewer-measurements-add-more {
  padding: var(--msp-space-1) var(--msp-space-2);
}

.msp-viewer-measurements-add-point {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-measurements-add-slot {
  flex: none;
  place-items: center start;
  min-width: 1.5ch;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }
}

.msp-viewer-measurements-add-grip {
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

  .msp-viewer-measurements-add-point:hover &, [data-dragging] & {
    opacity: 1;
  }
}

.msp-viewer-measurements-add-point:hover .msp-viewer-measurements-add-index, .msp-viewer-measurements-add-point[data-dragging] .msp-viewer-measurements-add-index {
  visibility: hidden;
}

.msp-viewer-measurements-add-point[data-dragging] {
  opacity: .5;
}

.msp-viewer-measurements-add-point[data-drop="before"] {
  box-shadow: 0 -2px 0 var(--msp-color-text-muted);
}

.msp-viewer-measurements-add-point[data-drop="after"] {
  box-shadow: 0 2px 0 var(--msp-color-text-muted);
}

.msp-viewer-measurements-add-index {
  min-width: 1.5ch;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-viewer-measurements-add-pointLabel {
  min-width: 0;
  color: var(--msp-color-text);
  text-align: left;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-measurements-add-pointActions {
  flex: none;
  gap: 1px;
  display: flex;
}

.msp-viewer-measurements-add-action {
  border-radius: var(--msp-radius-sm);
  width: 20px;
  height: 20px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-measurements-add-point:hover &, &:focus-visible {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-measurements-add-kinds {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-kind {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  display: flex;

  &:hover:not(:disabled) {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
    cursor: default;

    & .msp-viewer-measurements-add-kindTitle {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-viewer-measurements-add-kindTitle {
  color: var(--msp-color-text);
  flex: none;
  font-weight: 500;
}

.msp-viewer-measurements-add-kindHint {
  min-width: 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  text-align: right;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-measurements-add-optionsToggle {
  align-items: center;
  gap: var(--msp-space-1);
  height: 28px;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;
}

.msp-viewer-measurements-add-chevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-viewer-measurements-add-added {
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-panel);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-addedItem {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-viewer-measurements-add-addedRow {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-hidden] .msp-viewer-measurements-add-pointLabel, &[data-hidden] .msp-viewer-measurements-add-addedIcon {
    color: var(--msp-color-text-subtle);
  }
}

.msp-viewer-measurements-add-addedIcon {
  color: var(--msp-color-text-muted);
  flex: none;
}

.msp-viewer-measurements-add-addedValue {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  flex: none;
}

.msp-viewer-measurements-add-addedAction {
  border-radius: var(--msp-radius-sm);
  width: 20px;
  height: 20px;
  color: var(--msp-color-text-muted);
  opacity: 0;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-measurements-add-addedRow:hover &, [data-hidden] > .msp-viewer-measurements-add-pointActions > &:first-child, &[aria-expanded="true"], &:focus-visible {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-measurements-add-style {
  margin: var(--msp-space-1) 0 var(--msp-space-1) calc(var(--msp-space-2) + var(--msp-icon-md) + var(--msp-space-2));
  padding: var(--msp-space-1) var(--msp-space-2) var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-well);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
}
}
`);var m=4;function h(e){let{model:i}=e,h=u(i.points,e=>e.slice(0,m)),y=u(i.points,e=>Math.max(0,e.length-m)),b=d(!1),x,S=n(`div`,{class:p.add,children:[c(`p`,{class:p.caption,children:`Points · the latest selections`}),n(`div`,{class:p.points,ref:e=>x=e,children:[c(o,{each:h,fallback:()=>c(`p`,{class:p.hint,children:`Select atoms or residues (Select mode, Shift adds): the latest ones become the points to measure.`}),children:(e,t)=>c(g,{model:i,point:e,index:t})},e=>e.id),c(l,{when:u(y,e=>e>0),children:()=>c(`p`,{class:p.more,children:u(y,e=>`+${e} older, not used`)})})]}),c(`p`,{class:p.caption,children:`Measure`}),c(`div`,{class:p.kinds,children:i.kinds.map(e=>c(_,{model:i,kind:e}))}),c(l,{when:u(i.added,e=>e.length>0),children:()=>n(a,{children:[c(`p`,{class:p.caption,children:`Added`}),c(`div`,{class:p.added,children:c(o,{each:i.added,children:e=>c(v,{model:i,node:e})},e=>e.id)})]})}),n(`button`,{type:`button`,class:p.optionsToggle,"aria-expanded":b,onClick:()=>b.set(!b.value),children:[c(r,{name:`chevron-right`,size:14,class:p.chevron}),`Options`]}),c(l,{when:b,children:()=>(i.optionValues&&s(i.optionValues,e=>i.loadOptions?.(e)),c(t,{form:i.options}))})]});return x&&f(x,`.${p.grip}`,(e,t)=>i.movePointTo(e,t)),S}function g(e){let{model:t,point:i}=e;return n(`div`,{class:p.point,"data-id":i.id,onPointerEnter:()=>t.highlightPoint?.(i.id),onPointerLeave:()=>t.highlightPoint?.(void 0),children:[n(`span`,{class:p.slot,children:[c(`span`,{class:p.index,children:u(e.index,e=>`${e+1}`)}),c(`span`,{class:p.grip,"aria-hidden":`true`,"data-tip":`Drag to reorder`,children:c(r,{name:`grip-vertical`,size:13})})]}),c(`button`,{type:`button`,class:p.pointLabel,title:i.label,"aria-label":`Focus ${i.label}`,onClick:()=>t.focusPoint(i.id),children:i.short??i.label}),n(`span`,{class:p.pointActions,children:[c(`button`,{type:`button`,class:p.action,"aria-label":`Move up`,title:`Move up`,onClick:()=>t.movePoint(i.id,-1),children:c(r,{name:`arrow-up`,size:13})}),c(`button`,{type:`button`,class:p.action,"aria-label":`Move down`,title:`Move down`,onClick:()=>t.movePoint(i.id,1),children:c(r,{name:`arrow-down`,size:13})}),c(`button`,{type:`button`,class:p.action,"aria-label":`Remove`,title:`Remove`,onClick:()=>t.removePoint(i.id),children:c(r,{name:`x`,size:13})})]})]})}function _(e){let{model:t,kind:r}=e,i=u(t.points,e=>r.points===0?e.length>0:e.length>=r.points),a=r.points===0?u(i,e=>e?`of the selection`:`needs a selection`):u(i,e=>e?r.points===1?`point 1`:`points 1–${r.points}`:`needs ${r.points} points`);return n(`button`,{type:`button`,class:p.kind,disabled:u(i,e=>!e),onClick:()=>t.add(r.id),children:[c(`span`,{class:p.kindTitle,children:r.title}),c(`span`,{class:p.kindHint,children:a})]})}function v(e){let{model:i,node:a}=e,o=d(!1),s=i.styleOf(a);return n(`div`,{class:p.addedItem,children:[n(`div`,{class:p.addedRow,"data-hidden":u(a.isHidden,e=>e?``:void 0),children:[c(`span`,{class:p.pointLabel,children:a.label}),c(`span`,{class:p.addedValue,children:a.description}),n(`span`,{class:p.pointActions,children:[c(`button`,{type:`button`,class:p.addedAction,title:u(a.isHidden,e=>e?`Show`:`Hide`),onClick:()=>a.toggleVisibility(),children:c(l,{when:a.isHidden,fallback:()=>c(r,{name:`eye`,size:14}),children:()=>c(r,{name:`eye-off`,size:14})})}),s?c(`button`,{type:`button`,class:p.addedAction,title:`Style`,"aria-label":`Style`,"aria-expanded":o,onClick:()=>o.set(!o.value),children:c(r,{name:`sliders-horizontal`,size:14})}):null,c(`button`,{type:`button`,class:p.addedAction,title:`Remove`,"aria-label":`Remove`,onClick:()=>a.remove(),children:c(r,{name:`x`,size:13})})]})]}),s?c(l,{when:o,reveal:!0,children:()=>c(`div`,{class:p.style,children:c(t,{form:s})})}):null]})}function y(t){return{sections:[{id:`measurements.section.measure`,slot:`selection`,title:`Measure and Label`,icon:`ruler`,keywords:[`distance`,`angle`,`dihedral`,`label`,`orientation`,`plane`],order:2,render:e(()=>{let e=t.api.measure;return e?c(h,{model:e.model(t.api)}):c(a,{})})}]}}export{y as measurementsUI};