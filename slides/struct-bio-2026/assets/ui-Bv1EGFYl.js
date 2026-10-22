import{Jn as e,Yn as t}from"./viewer-ZhTZkR5F.js";import{t as n}from"./param-definition-DXotjOrX.js";import{$ as r,A as i,G as a,J as o,S as s,Y as c,Z as l,k as u,lt as d,q as f,ut as p,yt as m}from"./src-C-Tq_k0k.js";import{y as h}from"./manager-CZ1nrgxC.js";var g={action:`msp-viewer-remote-states-panel-action`,caption:`msp-viewer-remote-states-panel-caption`,captionRow:`msp-viewer-remote-states-panel-captionRow`,date:`msp-viewer-remote-states-panel-date`,empty:`msp-viewer-remote-states-panel-empty`,item:`msp-viewer-remote-states-panel-item`,list:`msp-viewer-remote-states-panel-list`,listContent:`msp-viewer-remote-states-panel-listContent`,menu:`msp-viewer-remote-states-panel-menu`,menuItem:`msp-viewer-remote-states-panel-menuItem`,name:`msp-viewer-remote-states-panel-name`,open:`msp-viewer-remote-states-panel-open`,panel:`msp-viewer-remote-states-panel-panel`,row:`msp-viewer-remote-states-panel-row`,server:`msp-viewer-remote-states-panel-server`,spin:`msp-viewer-remote-states-panel-spin`,states:`msp-viewer-remote-states-panel-states`,upload:`msp-viewer-remote-states-panel-upload`};l(`viewer/views/state/remote-states-panel.module.css`,`@layer msp.components {
.msp-viewer-remote-states-panel-panel {
  gap: var(--msp-space-4);
  height: 100%;
  min-height: 0;
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-viewer-remote-states-panel-upload {
  flex: none;
}

.msp-viewer-remote-states-panel-caption {
  padding: var(--msp-space-1) 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-viewer-remote-states-panel-states {
  gap: var(--msp-space-1);
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

.msp-viewer-remote-states-panel-captionRow {
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.msp-viewer-remote-states-panel-list {
  flex: 1 1 0;
  min-height: 0;
}

.msp-viewer-remote-states-panel-listContent {
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  display: grid;
}

.msp-viewer-remote-states-panel-empty {
  padding: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-viewer-remote-states-panel-item {
  min-width: 0;
  display: grid;
}

.msp-viewer-remote-states-panel-row {
  border-radius: var(--msp-radius-md);
  align-items: center;
  min-width: 0;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-viewer-remote-states-panel-open {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-muted);
  text-align: left;
  flex: 1;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-viewer-remote-states-panel-name {
  min-width: 3ch;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 0 auto;
  font-weight: 500;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-viewer-remote-states-panel-date {
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

.msp-viewer-remote-states-panel-action {
  width: 22px;
  height: 22px;
  margin-right: var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  opacity: 0;
  flex: none;
  place-items: center;
  display: grid;

  @media (hover: none) {
    opacity: 1;
  }

  .msp-viewer-remote-states-panel-row:hover &, &:focus-visible, &[aria-expanded="true"] {
    opacity: 1;
  }

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-viewer-remote-states-panel-menu {
  margin: var(--msp-space-1) var(--msp-space-1) var(--msp-space-1)
    calc(var(--msp-space-2) + var(--msp-icon-md) + var(--msp-space-3));
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  display: grid;
}

.msp-viewer-remote-states-panel-menuItem {
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

    &:hover, &:focus-visible {
      background: color-mix(in oklab, var(--msp-color-danger), transparent 88%);
      color: var(--msp-color-danger);
    }
  }
}

.msp-viewer-remote-states-panel-server {
  align-items: center;
  gap: var(--msp-space-3);
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  grid-template-columns: auto minmax(0, 1fr);
  display: grid;
}

.msp-viewer-remote-states-panel-spin {
  animation: .9s linear infinite msp-viewer-remote-states-panel-spin;
}

@keyframes msp-viewer-remote-states-panel-spin {
  to {
    transform: rotate(360deg);
  }
}
}
`);function _(t){let{model:r}=t;if(!r.upload)return null;let a=new i({name:n.Text(``,{label:`Name`,placeholder:`Untitled`})}),o={id:`upload`,title:`Upload the current state`,icon:`cloud-upload`,form:a,applyLabel:`Upload`,apply:()=>{r.upload?.(a.values.value.name.trim()||`Untitled`),a.reset()}};return f(`section`,{class:g.upload,"aria-label":`Upload`,children:f(e,{action:o,open:!0})})}function v(e){let{model:t}=e;return o(`div`,{class:g.panel,children:[o(`section`,{class:g.states,"aria-label":`On the server`,children:[o(`div`,{class:g.captionRow,children:[f(`p`,{class:g.caption,children:`On the server`}),f(a,{size:`xs`,variant:`ghost`,title:`Refresh`,icon:f(p,{when:t.loading,fallback:()=>f(c,{name:`refresh-cw`}),children:()=>f(c,{name:`loader-circle`,class:g.spin})}),onClick:()=>t.refresh()})]}),f(u,{class:g.list,contentClass:g.listContent,children:f(d,{each:t.states,fallback:()=>f(`p`,{class:g.empty,children:`No states yet.`}),children:e=>f(y,{model:t,state:e})},e=>e.id)})]}),o(`label`,{class:g.server,children:[f(`span`,{children:`Server`}),f(s,{size:`sm`,"aria-label":`State server URL`,value:t.serverUrl,onSubmit:e=>t.setServerUrl(e)})]})]})}function y(e){let{model:t,state:n}=e,r=h(!1),i=!!(t.download||t.remove);return o(`div`,{class:g.item,children:[o(`div`,{class:g.row,children:[o(`button`,{type:`button`,class:g.open,onClick:()=>t.open(n.id),children:[f(`span`,{class:g.name,children:n.label}),f(`span`,{class:g.date,children:n.date})]}),i?f(`button`,{type:`button`,class:g.action,"aria-label":`More`,"aria-expanded":r,onClick:()=>r.set(!r.value),children:f(c,{name:`ellipsis`,size:15})}):null]}),f(p,{when:r,children:()=>o(`div`,{class:g.menu,role:`menu`,children:[t.download?f(`button`,{type:`button`,role:`menuitem`,class:g.menuItem,onClick:()=>{r.set(!1),t.download?.(n.id)},children:f(`span`,{children:`Download`})}):null,t.remove?f(`button`,{type:`button`,role:`menuitem`,class:g.menuItem,"data-danger":``,onClick:()=>{r.set(!1),t.remove?.(n.id)},children:f(`span`,{children:`Remove`})}):null]})})]})}var b=e=>e?new Date(e).toUTCString().slice(0,22):void 0,x=e=>({id:e.id,label:e.name||b(e.timestamp)||e.id,date:e.name?b(e.timestamp):void 0});function S(e){let t=h(``),n=h([]),r=h(!1),i=[],a=0,o=async e=>{r.set(!0);try{await e()}finally{r.set(!1)}},s=()=>t.value.trim(),c=t=>e.notify(t.ok?t.did:t.hint?`${t.message} ${t.hint}`:t.message,t.ok?`success`:`error`),l=async()=>{let o=++a;r.set(!0);try{let r=await e.api.session.remoteList?.({server:s()});if(o!==a||!r)return;if(!r.ok){i=[],n.set([]),c(r);return}i=r.value?.entries??[],n.set(i.map(x)),!s()&&r.value&&t.set(r.value.server)}finally{o===a&&r.set(!1)}},u=e=>i.find(t=>t.id===e)?.id??e;return{serverUrl:t.asReadonly,setServerUrl(e){t.set(e.trim()),l()},states:n.asReadonly,loading:r.asReadonly,refresh:()=>void l(),open(t){o(async()=>{let n=await e.api.session.remoteOpen({entry:u(t),server:s()});return c(n),n})},upload(t){o(async()=>{let n=await e.api.session.remoteUpload({name:t,server:s()});return c(n),n.ok&&await l(),n})},remove(t){o(async()=>{let n=await e.api.session.remoteRemove({entry:u(t),server:s()});return c(n),n.ok&&await l(),n})}}}function C(e){if(!e.api.session.remoteList)return{};let n=S({api:e.api,notify:(t,n)=>e.managers.notifications.post(t,n)});return{sections:[{id:`remote-states.section.home`,slot:`home.import`,title:`Remote states`,icon:`cloud`,order:10,keywords:[`remote states`,`state server`,`sessions`],render:r(()=>(m(e=>e&&n.refresh()),f(t,{model:n})))},{id:`remote-states.section.export`,slot:`export`,title:`Upload to the state server`,icon:`cloud-upload`,order:2,keywords:[`upload`,`remote states`,`state server`,`share`],render:r(()=>f(_,{model:n}))}],overlays:[{id:`remote-states.overlay.states`,title:`Remote states`,render:r(()=>(m(e=>e&&n.refresh()),f(v,{model:n})))}]}}export{C as remoteStatesUI};