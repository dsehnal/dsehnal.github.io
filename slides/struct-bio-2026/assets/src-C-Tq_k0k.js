import{C as e,G as t,I as n,t as r}from"./param-definition-DXotjOrX.js";import{_ as i}from"./zip-ChN9huH6.js";import{d as a,n as o}from"./Subject-DUaB6XC9.js";import{o as s,t as c}from"./from-om-wJJit.js";import{t as l}from"./distinctUntilChanged-DGuJk0pU.js";import{C as u,D as d,E as f,O as p,S as m,T as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as S,h as C,i as w,l as T,m as ee,n as E,o as te,p as ne,r as D,s as re,u as ie,v as ae,w as oe,x as se,y as O}from"./manager-CZ1nrgxC.js";import{t as ce}from"./names-CLXEwpl9.js";function le(){var e=[...arguments],t=s(e);return c(e,t)}function ue(e){return!!e&&(e instanceof o||a(e.lift)&&a(e.subscribe))}function de(){let e=[],t=!1;return{registerDispose(n){if(t)return n(),()=>{};let r={active:!0,dispose:n};return e.push(r),()=>{if(!r.active)return;r.active=!1;let t=e.indexOf(r);t>=0&&e.splice(t,1),n()}},dispose(){if(t)return;t=!0;let n=!1,r;try{for(let t of[...e].reverse())if(t.active){t.active=!1;try{t.dispose()}catch(e){n||(n=!0,r=e)}}}finally{e.length=0}if(n)throw r}}}var fe=class{#e;#t=new Map;#n=0;#r;#i=!1;#a;constructor(e){this.#e=e}isCurrent(e){if(this.#i)return Object.is(this.#r,e);let t=this.#e;return`value`in t&&Object.is(t.value,e)}key(e){return new me(this,e)}is(e){return this.key(e)}#o=e=>{if(this.#i&&Object.is(e,this.#r))return;let t=this.#r,n=this.#i;this.#r=e,this.#i=!0,n&&this.#s(t),this.#s(e)};#s(e){this.#t.get(e)?.forEach(pe)}attach(e){let t=this.#t.get(e.k);if(t||this.#t.set(e.k,t=new Set),t.add(e),this.#n++>0)return;let n=this.#e;typeof n.listen==`function`&&`value`in n?(this.#r=n.value,this.#i=!0,this.#a=n.listen(this.#o)):this.#a=n.subscribe(this.#o)}detach(e){let t=this.#t.get(e.k);if(!t?.delete(e)||(t.size===0&&this.#t.delete(e.k),--this.#n>0))return;let n=this.#a;this.#a=void 0,this.#i=!1,this.#r=void 0,typeof n==`function`?n():n?.unsubscribe()}},pe=e=>e.changed(),me=class extends v{#e=!1;#t=!1;constructor(e,t){super(),this.selector=e,this.k=t}get value(){return this.selector.isCurrent(this.k)}changed(){let e=this.value;e!==this.#e&&(this.#e=e,this.#t||this.tell(e))}onFirst(){this.#t=!0;try{this.selector.attach(this)}finally{this.#t=!1}this.#e=this.value}onLast(){this.selector.detach(this)}};function he(e){return new fe(e)}function ge(e,t,n=p){return h(e,t,n)}var _e=[`left`,`right`,`top`,`bottom`],ve=[`desktop`,`compact`,`embedded`],ye={left:300,right:340,top:88,bottom:220},be={left:180,right:180,top:40,bottom:40};function xe(){let e={};for(let t of _e)e[t]={tabs:[],size:ye[t],floating:t===`right`||t===`top`,pinned:t===`right`};return{docks:e,mode:`auto`,compactRail:!1,buttons:{},hiddenTabs:[]}}var Se=class{#e;#t;constructor(e){this.#e=e?we(xe(),e):xe(),this.#t=O(this.#e)}get layout(){return this.#t.asReadonly}get initial(){return this.#e}reset(){this.#t.set(this.#e)}setTabHidden(e,t){let n=this.#t.value;if(n.hiddenTabs.includes(e)===t)return;let r=t?[...n.hiddenTabs,e]:n.hiddenTabs.filter(t=>t!==e);this.#t.set({...n,hiddenTabs:r})}showAllTabs(){this.#t.value.hiddenTabs.length&&this.#t.set({...this.#t.value,hiddenTabs:[]})}setDock(e,t){let n=this.#t.value,r=n.docks[e];if(!Ce(r,t))return;let i={...r,...t};i.size!==r.size&&(i.size=Math.max(be[e],Math.round(i.size))),this.#t.set({...n,docks:{...n.docks,[e]:i}})}setMode(e){this.#t.value.mode!==e&&this.#t.set({...this.#t.value,mode:e})}setCompactRail(e){this.#t.value.compactRail!==e&&this.#t.set({...this.#t.value,compactRail:e})}setButtons(e){let t=this.#t.value;Ce(t.buttons,e)&&this.#t.set({...t,buttons:{...t.buttons,...e}})}save(){return{version:1,layout:this.#t.value}}restore(e){if(!Te(e))return!1;let t={};for(let n of _e){let r=e.layout.docks?.[n];r&&(t[n]={...r,...r.size===void 0?{}:{size:Math.max(be[n],Math.round(r.size))}})}return this.#t.set(we(this.#t.value,{...e.layout,docks:t})),!0}};function Ce(e,t){for(let n of Object.keys(t))if(!Object.is(e[n],t[n]))return!0;return!1}function we(e,t){let n={...e.docks};for(let e of _e){let r=t.docks?.[e];r&&(n[e]={...n[e],...r})}return{docks:n,mode:t.mode??e.mode,compactRail:t.compactRail??e.compactRail,buttons:{...e.buttons,...t.buttons},hiddenTabs:t.hiddenTabs?[...new Set(t.hiddenTabs)]:e.hiddenTabs}}function Te(e){if(!e||typeof e!=`object`)return!1;let t=e;if(t.version!==1||!t.layout||typeof t.layout!=`object`)return!1;let n=t.layout.docks;if(!n||typeof n!=`object`)return!1;let{mode:r,compactRail:i,buttons:a,hiddenTabs:o}=t.layout;return r!==void 0&&!(r===`auto`||ve.includes(r))||i!==void 0&&typeof i!=`boolean`||a!==void 0&&(!a||typeof a!=`object`)||o!==void 0&&!(Array.isArray(o)&&o.every(e=>typeof e==`string`))?!1:_e.every(e=>{let t=n[e];if(!t)return!0;let r=e=>e===void 0||typeof e==`boolean`;return Array.isArray(t.tabs)&&t.tabs.every(e=>typeof e==`string`)&&(t.size===void 0||typeof t.size==`number`&&Number.isFinite(t.size))&&r(t.floating)&&r(t.pinned)})}function Ee(){let e={};for(let t of _e)e[t]={active:void 0,collapsed:!1};return{docks:e,card:void 0,page:void 0,focus:void 0,railOpen:!1,expanded:!1,fullscreen:!1}}var De=`right`,Oe=class{#e=O(Ee());#t;#n;#r;#i;#a;#o;constructor(e){if(e){let t=this.#e.value,n={...t.docks};for(let t of _e)e.docks?.[t]&&(n[t]={...n[t],...e.docks[t]});this.#e.set({...t,docks:n,railOpen:e.railOpen??t.railOpen})}this.#t=Ae(this.#e.asReadonly,e=>ke(e,De)),this.#n=Ae(this.#e.asReadonly,e=>e.card?.id),this.#r=Ae(this.#e.asReadonly,e=>e.card?.section??e.focus?.section),this.#i=Ae(this.#e.asReadonly,e=>e.page?.id),this.#a=Ae(this.#e.asReadonly,e=>e.expanded),this.#o=Ae(this.#e.asReadonly,e=>e.fullscreen)}get state(){return this.#e.asReadonly}get tab(){return this.#t}get card(){return this.#n}get section(){return this.#r}get page(){return this.#i}get expanded(){return this.#a}get fullscreen(){return this.#o}openTab(e){return ke(this.#e.value,e)}setDock(e,t){let n=this.#e.value,r=n.docks[e],i=(!(`active`in t)||t.active===r.active)&&(t.collapsed===void 0||t.collapsed===r.collapsed),a=n.expanded&&t.collapsed!==!1;i&&a===n.expanded||this.#e.set({...n,expanded:a,docks:{...n.docks,[e]:{...r,...t}}})}setExpanded(e){this.#e.value.expanded!==e&&this.#e.set({...this.#e.value,expanded:e})}setFullscreen(e){this.#e.value.fullscreen!==e&&this.#e.set({...this.#e.value,fullscreen:e})}setCard(e){let t=this.#e.value;(t.card?.id!==e?.id||t.card?.section!==e?.section||e?.section)&&this.#e.set({...t,card:e})}setPage(e){let t=this.#e.value;(t.page?.id!==e?.id||t.page?.focus!==e?.focus)&&this.#e.set({...t,page:e})}setFocus(e){let t=this.#e.value;t.focus!==e&&this.#e.set({...t,focus:e})}setRailOpen(e){this.#e.value.railOpen!==e&&this.#e.set({...this.#e.value,railOpen:e})}save(){let{docks:e,card:t,page:n}=this.#e.value;return{version:1,navigation:{docks:e,card:t,page:n}}}restore(e){if(!je(e))return!1;let t=this.#e.value,n={...t.docks};for(let t of _e){let r=e.navigation.docks[t];r&&(n[t]={active:r.active,collapsed:!!r.collapsed})}return this.#e.set({...t,docks:n,card:e.navigation.card,page:e.navigation.page}),!0}};function ke(e,t){let n=e.docks[t];return n.collapsed?void 0:n.active}function Ae(e,t){return ge(e,t,Object.is)}function je(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.version===1&&!!t.navigation&&typeof t.navigation.docks==`object`&&!!t.navigation.docks}var Me=class e{#e=de();#t;#n;#r=!1;#i=!1;#a=!1;#o=!1;#s=!1;constructor(){if(this.mount!==e.prototype.mount||this.unmount!==e.prototype.unmount||this.retire!==e.prototype.retire)throw Error(`ReactiveModel lifecycle methods cannot be overridden; use the protected lifecycle hooks`);Object.defineProperties(this,{mount:{configurable:!1,enumerable:!1,value:()=>this.#c(),writable:!1},unmount:{configurable:!1,enumerable:!1,value:()=>this.#l(),writable:!1},retire:{configurable:!1,enumerable:!1,value:()=>this.#u(),writable:!1}})}mount(){this.#c()}#c(){if(this.#a)return;if(this.#i){this.#s||(this.#s=!0,console.warn(`${this.constructor.name}: mounted again while mounted. A model has one owner: the first unmount will tear it down under the other.`));return}let e=de();this.#i=!0,this.#t=e,this.#r=!0;try{this.onMount()}catch(t){this.#i=!1,this.#t===e&&(this.#t=void 0);try{e.dispose()}catch{}throw this.#n?.abort(),this.#n=void 0,t}finally{this.#r=!1}this.#o&&(this.#o=!1,this.#l())}unmount(){this.#l()}#l(){if(!this.#i)return;if(this.#r){this.#o=!0;return}this.#i=!1;let e=this.#t;this.#t=void 0;let t=this.#n;this.#n=void 0;let n=!1,r;try{this.onUnmount()}catch(e){n=!0,r=e}try{e?.dispose()}catch(e){n||(n=!0,r=e)}if(t?.abort(),n)throw r}retire(){this.#u()}#u(){if(this.#a)return;this.#a=!0;let e=!1,t;try{this.#l()}catch(n){e=!0,t=n}try{this.onRetire()}catch(n){e||(e=!0,t=n)}try{this.#e.dispose()}catch(n){e||(e=!0,t=n)}if(e)throw t}get mountSignal(){return this.#i?(this.#n??=new AbortController).signal:AbortSignal.abort()}registerDispose(e){if(!this.#r||this.#t===void 0)throw Error(`Cannot register dispose outside onMount`);return this.#t.registerDispose(e)}registerPermanentDispose(e){if(this.#a)throw Error(`Cannot register permanent dispose after retirement`);return this.#e.registerDispose(e)}subscribe(e,t){this.#d(e=>this.registerDispose(e),e,t)}subscribePermanently(e,t){if(this.#a)throw Error(`Cannot subscribe permanently after retirement`);this.#d(e=>this.registerPermanentDispose(e),e,t)}#d(e,t,n){let r,i=!1,a=e(()=>{i=!0,r?.unsubscribe()});try{r=t.subscribe(n)}catch(e){throw a(),e}i&&r.unsubscribe()}onMount(){}onUnmount(){}onRetire(){}},Ne=class{#e;#t;#n;constructor(e,t){this.id=e,this.#e=O(t),this.#t=O([]),this.#n=O(void 0)}get state(){return this.#e.asReadonly}get tabs(){return this.#t.asReadonly}get active(){return this.#n.asReadonly}sync(e,t,n){this.#e.set(e);let r=e.tabs.filter(e=>!n.includes(e)).map(e=>t.get(e)).filter(e=>!!e);this.#t.set(r),this.#n.set(e.collapsed?void 0:r.find(t=>t.id===e.active))}},Pe=[`tabs`,`size`,`floating`,`pinned`],Fe=class extends Me{#e=new Map;#t=new Map;#n=new Map;#r;#i;#a=O(void 0);#o;#s=O(!0);#c=O(0);#l=O(`desktop`);#u=O(void 0,{compare:Object.is});#d;#f=O(void 0,{compare:Object.is});#p=O(!1);#m=O(!1);#h=O([]);#g=O([]);#_=O([]);#v=O([]);#y=new Map;#b;#x;#S=O(!1);constructor(e={}){super(),this.#b=e.compactWidth??720,this.#x=e.toolbar??`auto`,this.#r=e.viewState??new Se(Ie(e)),this.#i=e.navigation??new Oe(Le(e)),this.#o={};for(let e of _e)this.#o[e]=new Ne(e,this.#E(e));this.subscribePermanently(this.#r.layout,()=>this.#O()),this.subscribePermanently(this.#i.state,()=>this.#O())}get viewState(){return this.#r}get navigation(){return this.#i}get compactRail(){return this.#p.asReadonly}get railOpen(){return this.#m.asReadonly}get railShown(){return this.#s.asReadonly}get toolbarCollapsed(){return this.#S.asReadonly}setCompactRail(e){this.#r.setCompactRail(e),this.setRailOpen(!1)}setRailOpen(e){this.#p.value&&!e&&(this.closeOverlay(),this.#i.setDock(`right`,{collapsed:!0})),this.#i.setRailOpen(e)}toggleRail(){this.#p.value&&this.setRailOpen(!this.#i.state.value.railOpen)}get expanded(){return this.#i.expanded}setExpanded(e){e&&this.closeOverlay(),this.#i.setExpanded(e)}dock(e){return this.#o[e]}get mode(){return this.#l.asReadonly}#C=new Map;sectionOpen(e,t){return this.#C.get(`${e}\n${t}`)}setSectionOpen(e,t,n){this.#C.set(`${e}\n${t}`,n)}get tabFocus(){return this.#f.asReadonly}get overlay(){return this.#u.asReadonly}get page(){return this.#a.asReadonly}get toolbar(){return this.#_.asReadonly}sections(e){let t=this.#y.get(e);if(!t){let n=O([]),r=t=>n.set(t.filter(t=>t.slot===e).sort((e,t)=>(e.order??0)-(t.order??0)));r(this.#v.value),this.subscribePermanently(this.#v.asReadonly,r),t=n.asReadonly,this.#y.set(e,t)}return t}registerSections(e){return this.#v.set([...this.#v.value,...e]),()=>this.#v.set(this.#v.value.filter(t=>!e.includes(t)))}registerToolbar(e){return this.#g.set((e=>[...e].sort((e,t)=>(e.order??0)-(t.order??0)))([...this.#g.value,...e])),this.#A(),()=>{this.#g.set(this.#g.value.filter(t=>!e.includes(t))),this.#A()}}setButtons(e){this.#r.setButtons(e)}registerTabs(e){let t=[...e].sort((e,t)=>(e.order??0)-(t.order??0));for(let e of t)this.#e.set(e.id,e),this.#w(e);return this.#O(),()=>{for(let e of t){if(this.#e.get(e.id)!==e)continue;this.#e.delete(e.id);let t=this.#T(e.id);if(!t)continue;let n=this.#E(t),r=n.tabs.filter(t=>t!==e.id);this.#D(t,{tabs:r,active:n.active===e.id?r[0]:n.active})}this.#O()}}#w(e){let t=this.#T(e.id)??e.dock??`right`,n=this.#E(t),r=n.tabs;if(!r.includes(e.id)){let t=e.order??0,n=r.findIndex(e=>(this.#e.get(e)?.order??0)>t);r=n<0?[...r,e.id]:[...r.slice(0,n),e.id,...r.slice(n)]}let i=this.#r.layout.value.hiddenTabs.includes(e.id);this.#D(t,{tabs:r,active:n.active??(i?void 0:e.id)})}get hiddenTabs(){return this.#h.asReadonly}hideTab(e){let t=this.#T(e);oe(()=>{if(this.#r.setTabHidden(e,!0),!t)return;let n=this.#E(t);if(n.active!==e)return;let r=this.#r.layout.value.hiddenTabs,i=n.tabs.find(t=>t!==e&&!r.includes(t)&&this.#e.has(t));this.#D(t,{active:i,collapsed:!0})})}showTab(e){this.#r.setTabHidden(e,!1)}showAllTabs(){this.#r.showAllTabs()}resetLayout(){oe(()=>{this.#r.reset();let e=[...this.#e.values()].sort((e,t)=>(e.order??0)-(t.order??0));for(let t of e)this.#w(t);for(let e of _e){let t=this.#E(e);t.active!==void 0&&!t.tabs.includes(t.active)&&this.#i.setDock(e,{active:t.tabs.find(e=>this.#e.has(e))})}})}registerOverlays(e){for(let t of e)this.#t.set(t.id,t);return this.#O(),()=>{for(let t of e)this.#t.get(t.id)===t&&(this.#t.delete(t.id),this.#i.state.value.card?.id===t.id&&this.closeOverlay());this.#O()}}registerPages(e){for(let t of e)this.#n.set(t.id,t);return this.#O(),()=>{for(let t of e)this.#n.get(t.id)===t&&(this.#n.delete(t.id),this.#i.state.value.page?.id===t.id&&this.closePage());this.#O()}}openPage(e,t){this.#n.has(e)&&(this.closeOverlay(),this.#i.setPage({id:e,...t?{focus:t}:{}}))}closePage(){this.#i.setPage(void 0)}show(e,t){let n=this.#T(e);n&&(this.showTab(e),t?this.#i.setFocus({tab:e,section:t}):this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0),this.#D(n,{active:e,collapsed:!1}))}select(e){let t=this.#T(e);if(!t)return;this.#i.state.value.focus?.tab===e&&this.#i.setFocus(void 0);let n=this.#E(t);n.active===e&&!n.collapsed?this.#D(t,{collapsed:!0}):this.#D(t,{active:e,collapsed:!1})}toggle(e){this.#D(e,{collapsed:!this.#E(e).collapsed})}move(e,t,n){let r=this.#T(e);if(!r||!this.#e.has(e))return;let i=this.#E(r),a=i.tabs.filter(t=>t!==e);this.#D(r,{tabs:a,active:i.active===e?a[0]:i.active});let o=[...this.#E(t).tabs.filter(t=>t!==e)];o.splice(n??o.length,0,e),this.#D(t,{tabs:o,active:e,collapsed:!1})}setSize(e,t){this.#r.setDock(e,{size:t})}setFloating(e,t){this.#r.setDock(e,{floating:t})}setPinned(e,t){this.#r.setDock(e,{pinned:t})}setMode(e){this.#r.setMode(e),e===`embedded`&&this.setRailOpen(!1)}setWidth(e){this.#c.set(e),this.#j()&&this.#O()}openOverlay(e,t,n){if(!this.#t.has(e))return;this.#d=t?{id:e,element:t}:this.#d?.id===e?this.#d:void 0;let r=this.#u.value;this.#i.setCard({id:e,...n?{section:n}:{}}),this.#u.value===r&&this.#k(!0)}toggleOverlay(e,t){this.#i.state.value.card?.id===e?this.closeOverlay():this.openOverlay(e,t)}closeOverlay(){this.#d=void 0,this.#i.setCard(void 0)}#T(e){let t=this.#r.layout.value.docks;for(let n of _e)if(t[n].tabs.includes(e))return n}#E(e){let t=this.#r.layout.value.docks[e],n=this.#i.state.value.docks[e],r={...t,active:n.active,collapsed:n.collapsed};return this.#l.value===`embedded`?{...r,floating:e===`right`||r.floating,pinned:!1}:this.#r.layout.value.compactRail&&r.floating&&r.pinned||this.#l.value===`compact`&&r.pinned?{...r,pinned:!1}:r}#D(e,t){let n={};for(let e of Pe)e in t&&(n[e]=t[e]);Object.keys(n).length&&this.#r.setDock(e,n);let r={};`active`in t&&(r.active=t.active),`collapsed`in t&&(r.collapsed=t.collapsed),Object.keys(r).length&&this.#i.setDock(e,r)}#O(){if(!this.#o)return;this.#j();let e=this.#r.layout.value;for(let t of _e)this.#o[t].sync(this.#E(t),this.#e,e.hiddenTabs);let t=e.hiddenTabs.map(e=>this.#e.get(e)).filter(e=>!!e),n=this.#h.value;(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&this.#h.set(t);let r=this.#i.state.value,i=e.compactRail||this.#l.value===`embedded`;this.#p.set(i),this.#m.set(r.railOpen),this.#s.set(!i||r.railOpen),this.#f.set(r.focus);let a=r.page?this.#n.get(r.page.id):void 0,o=this.#a.value;a?(o?.page!==a||o.focus!==r.page?.focus)&&this.#a.set({page:a,...r.page?.focus?{focus:r.page.focus}:{}}):this.#a.set(void 0),this.#k(!1),this.#A()}#k(e){let t=this.#i.state.value.card,n=t?this.#t.get(t.id):void 0;if(!n||!t){this.#u.set(void 0);return}let r=this.#u.value,i=this.#d?.id===t.id?this.#d.element:void 0;(e||r?.overlay!==n||r.anchor!==i||r.focus!==t.section)&&this.#u.set({overlay:n,...i?{anchor:i}:{},...t.section?{focus:t.section}:{}})}#A(){let e=this.#r.layout.value.buttons;this.#_.set(this.#g.value.filter(t=>e[t.id]!==!1))}#j(){let e=this.#r.layout.value.mode,t=this.#c.value,n=t>0&&t<this.#b,r=e===`auto`?n?`compact`:`desktop`:e===`embedded`&&n?`compact`:e,i=this.#x;return this.#S.set(i===`auto`?r===`compact`:i===`collapsed`),this.#l.value!==r&&(this.#l.set(r),!0)}};function Ie(e){let t={};for(let n of _e){let r=e.docks?.[n];if(!r)continue;let i={};for(let e of Pe)e in r&&(i[e]=r[e]);t[n]=i}return{docks:t,...e.mode?{mode:e.mode}:{},compactRail:!!e.compactRail,buttons:e.buttons??{}}}function Le(e){let t={};for(let n of _e){let r=e.docks?.[n];r&&(t[n]={...`active`in r?{active:r.active}:{},...r.collapsed===void 0?{}:{collapsed:r.collapsed}})}return{docks:t}}function Re(e,t){if(typeof e.animate!=`function`||!e.isConnected||globalThis.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches)return;let n=getComputedStyle(e),r=n.getPropertyValue(`--msp-ease-reveal`).trim()||`ease`;if(t===`fade`){let t=Be(n.getPropertyValue(`--msp-motion-fade`))||360;return e.animate([{opacity:1},{opacity:0}],{duration:t,easing:r,fill:`forwards`})}let i=Be(n.getPropertyValue(`--msp-motion-base`))||220,a=t===`side`?[{opacity:1,translate:`0 0`},{opacity:0,translate:`12px 0`}]:[{height:`${e.getBoundingClientRect().height}px`,opacity:1,overflow:`clip`},{height:`0px`,paddingBlock:`0px`,marginBlock:`0px`,opacity:0,overflow:`clip`}];return e.animate(a,{duration:i,easing:r,fill:`forwards`})}function ze(e,t){let n=e?.startViewTransition;!e?.isConnected||typeof n!=`function`||globalThis.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?t():n.call(e,t)}function Be(e){let t=e.trim(),n=Number.parseFloat(t);return t.endsWith(`ms`)?n:t.endsWith(`s`)?n*1e3:n}function Ve(e,t){let n=e.listen;if(typeof n==`function`)return n.call(e,t);if(!ue(e))throw Error(`listen: not a state or a stream`);let r=!0,i=e.subscribe(()=>{r||t()});return r=!1,()=>i.unsubscribe()}var He=!1,Ue=class{},We=class extends Ue{#e;#t=!1;#n=!1;constructor(e,t){super(),this.stream=e,this.fn=t}start(){if(this.#t||this.#n)return;this.#t=!0;let e=He,t=Ge.starting;He=!0,this.site&&(Ge.starting=this.site);try{this.#r()}finally{He=e,Ge.starting=t}}#r(){let e=this.stream;if(typeof e.listen==`function`){this.#e=e.listen(this.fn);let t=e.value;if(this.fn(t),!this.#t)return;let n=e.value;Object.is(n,t)||this.fn(n);return}let t=this.stream.subscribe(this.fn);this.#t?this.#e=t:t.unsubscribe()}stop(){this.#t=!1;let e=this.#e;this.#e=void 0,typeof e==`function`?e():e?.unsubscribe()}unsubscribe(){this.#n=!0,this.stop()}},Ge={},Ke=[],qe=0,Je=[],Ye=[],Xe=0,Ze=[],Qe=!1;y.flush=()=>ct(),ne.after=()=>{if(ct(),!Qe){Qe=!0;try{let e=Ye,t=Xe;Ye=Ze,Xe=0,Ze=e,nt(e,t)}finally{Qe=!1}ct()}};var $e=new Int32Array(64),et=[];function tt(e,t){let n=!0,r=0;for(let i=0;i<t;i++){let t=e[i].depth;t>r&&(r=t),i>0&&t<e[i-1].depth&&(n=!1)}if(n)return;$e.length<=r+1&&($e=new Int32Array(2*(r+1)));let i=$e;i.fill(0,0,r+2);for(let n=0;n<t;n++)i[e[n].depth+1]++;for(let e=1;e<=r+1;e++)i[e]+=i[e-1];let a=et;for(let n=0;n<t;n++){let t=e[n];a[i[t.depth]++]=t}for(let n=0;n<t;n++)e[n]=a[n],a[n]=void 0}function nt(e,t){tt(e,t);for(let n=0;n<t;n++){let t=e[n];e[n]=void 0,t.queued&&(t.queued=!1,t.run())}}var rt=!1,it=!1,at=100;function ot(e){e.queued||(e.queued=!0,e.frame?(Ye[Xe++]=e,g()):(Ke[qe++]=e,!rt&&(rt=!0,queueMicrotask(st))))}function st(){rt=!1,ct()}function ct(){if(!it){it=!0;try{for(let e=0;qe>0||b(`task`);e++){if(e===at){console.error(`watch: renders kept marking watches (a render sets what it watches?); dropped`,qe);for(let e=0;e<qe;e++)Ke[e].queued=!1,Ke[e]=void 0;qe=0,ie();break}if(x(`task`),qe===0)continue;let t=Ke,n=qe;Ke=Je,qe=0,Je=t,nt(t,n)}}finally{it=!1}}}var lt=class extends Ue{#e;#t;#n;#r;#i;constructor(e,t,n){super(),this.depth=e,this.#r=!1,this.#i=!1,this.queued=!1,this.frame=!1,this.#a=()=>{this.#r&&(this.because?.add(m.source),ot(this))},this.#e=t,this.#t=n,this.frame=yt(t)}#a;retarget(e){if(this.#i)return;let t=this.#r;this.stop(),this.#e=xt(e),this.frame=yt(this.#e),t&&this.start()}start(){if(this.#r||this.#i)return;this.#r=!0;let e=this.#e,t=Array(e.length),n=Ge.starting;this.site&&(Ge.starting=this.site);try{for(let n=0;n<e.length;n++)t[n]=Ve(e[n],this.#a)}finally{Ge.starting=n}this.#n=t,this.run()}run(){if(!this.#r)return;se.render++;let e=ft;ft=void 0;try{this.#t()}catch(e){console.error(e)}finally{ft=e}}stop(){this.#r=!1,this.queued=!1;let e=this.#n;if(this.#n=void 0,e)for(let t=0;t<e.length;t++)e[t]()}unsubscribe(){this.#i=!0,this.stop()}},ut=class e{#e;#t;#n;#r=!1;#i=!1;#a=!0;#o=!0;#s;constructor(e){this.#e=e,this.depth=e?e.depth+1:0,this.#o=!e||e.#o}get active(){return this.#o}setActive(e){this.#a!==e&&(this.#a=e,this.#c())}#c(){if(this.#r)return;let e=this.#a&&(!this.#e||this.#e.#o);if(e===this.#o)return;this.#o=e,e&&this.#l(!0),this.#u(e),e||this.#l(!1);let t=this.#t;if(t)for(let e of t)e.#c()}#l(e){let t=this.#n;if(t)for(let n=0;n<t.length;n++){let r=t[n];r instanceof Ue&&(e?r.start():r.stop())}}#u(e){let t=this.#s;if(t)for(let n=0;n<t.length;n++)try{t[n](e)}catch(e){console.error(e)}}onActive(e){if(!this.#r){(this.#s??=[]).push(e);try{e(this.#o)}catch(e){console.error(e)}}}follow(e){let t=gt(e);t?this.own(t.subscribe(e=>this.setActive(!!e))):this.setActive(!!e)}bind(e,t,n=!1){let r=Ge.on,i=n?void 0:Ge.run,a=i?Error().stack??``:``,o=i?e=>i(`write`,a,[He?void 0:m.source],()=>t(e)):t,s=new We(e,r?e=>{r(`write`,this),o(e)}:o);i&&(s.site=a),this.own(s),this.#o&&s.start()}watch(e,t){let n=xt(e),r=Ge.on,i=Ge.run,a=i?Error().stack??``:``,o,s=i?()=>{let e=o.because.size?[...o.because]:[void 0];o.because.clear(),i(`render`,a,e,t)}:t;return o=new lt(this.depth,n,r?()=>{r(`render`,this),s()}:s),i&&(o.because=new Set,o.site=a),this.own(o),this.#o&&o.start(),o}get disposed(){return this.#r}child(){let t=new e(this);return this.#r?t.dispose():(this.#t??=new Set).add(t),t}onCleanup(e){this.#r?dt(e):(this.#n??=[]).push(e)}own(e){this.#r?e.unsubscribe():(this.#n??=[]).push(e)}dispose(){if(this.#r)return;this.#r=!0,this.#i=!0,this.#s=void 0;let e=this.#t;if(e){let t=[...e];for(let e=t.length-1;e>=0;e--)t[e].dispose();this.#t=void 0}let t=this.#n;if(this.#n=void 0,t)for(let e=t.length-1;e>=0;e--){let n=t[e];typeof n==`function`?dt(n):n.unsubscribe()}let n=this.#e;n&&!n.#i&&n.#t?.delete(this)}};function dt(e){try{e()}catch(e){console.error(e)}}var ft;function pt(){return ft}function k(e=`A binding`){if(!ft)throw Error(`${e} was created outside a render scope; render with \`render\` or in an element.`);return ft}function mt(e,t){let n=ft;ft=e;try{return t()}finally{ft=n}}function A(e){k(`onCleanup`).onCleanup(e)}function ht(e){let t=new ut;return mt(t,()=>e(()=>t.dispose()))}function gt(e){if(ue(e))return e;if(e&&typeof e==`object`&&`asReadonly`in e&&ue(e.asReadonly))return e.asReadonly}function _t(e){k(`onActive`).onActive(e)}function j(e,t){let n=gt(e);n?k().bind(n,t):t(e)}function M(e,t){return k(`watch`).watch(e,t)}function vt(e,t){let n=gt(e);n?k(`effect`).bind(n,t,!0):t(e)}function yt(e){for(let t=0;t<e.length;t++)if(e[t].frameLane===!0)return!0;return!1}function bt(e,t){let n=new ee(e,t);return pt()?.onCleanup(()=>n.dispose()),n}function xt(e){let t=[];for(let n of e){let e=gt(n)??(typeof n.listen==`function`?n:void 0);e&&t.push(e)}return t}var St=`http://www.w3.org/2000/svg`,Ct=new Set(`svg.animate.animateMotion.animateTransform.circle.clipPath.defs.desc.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.metadata.mpath.path.pattern.polygon.polyline.radialGradient.rect.set.stop.switch.symbol.text.textPath.tspan.use.view`.split(`.`)),wt=new Set([`list`,`form`,`download`,`role`,`width`,`height`]),Tt=Symbol(`Passthrough`);function Et(e,t){if(typeof e==`function`){let n=e(t??{});return n&&typeof n==`object`&&Tt in n?n:Ot(n)}let n=Ct.has(e),r=n?document.createElementNS(St,e):document.createElement(e);if(t){let i=e===`select`&&`value`in t;Ut(r,t,n,e.includes(`-`),i);let a=t.children;typeof a==`string`||typeof a==`number`?r.textContent=String(a):a!==void 0&&kt(r,a,null),i&&Ut(r,{value:t.value},n,!1),typeof t.ref==`function`&&t.ref(r)}return r}function Dt(e){let t=document.createDocumentFragment();return kt(t,e.children,null),t}function Ot(e){if(e instanceof Node)return e;let t=document.createDocumentFragment();return kt(t,e,null),t}function kt(e,t,n){if(t!=null&&typeof t!=`boolean`){if(t instanceof Node)e.insertBefore(t,n);else if(Array.isArray(t))for(let r of t)kt(e,r,n);else if(typeof t==`function`)kt(e,t(),n);else if(typeof t==`object`){let r=gt(t);r?jt(e,r,n):console.warn(`Cannot render`,t)}else e.insertBefore(document.createTextNode(String(t)),n)}}function At(e){let t=typeof e;return e===null||t===`undefined`||t===`string`||t===`number`||t===`bigint`||t===`boolean`}function jt(e,t,n,r=!1){let i=k(`A reactive child`),a=document.createTextNode(``);e.insertBefore(a,n);let o,s,c,l;j(t,e=>{if(r&&typeof e==`function`&&e===l)return;if(l=e,At(e)){let t=e==null||typeof e==`boolean`?``:String(e);if(a){a.data!==t&&(a.data=t);return}u(),a=document.createTextNode(t),s.parentNode.insertBefore(a,s);return}if(!o){o=document.createComment(``),s=document.createComment(``);let e=a;e.parentNode.insertBefore(o,e),e.parentNode.insertBefore(s,e.nextSibling)}a&&=(a.remove(),void 0),u();let t=i.child();c=t;let n=document.createDocumentFragment();mt(t,()=>kt(n,e,null)),s.parentNode.insertBefore(n,s)});function u(){c?.dispose(),c=void 0,o&&s&&Mt(o,s)}}function Mt(e,t){let n=e.parentNode;if(!n)return;let r=e.nextSibling;for(;r&&r!==t;){let e=r.nextSibling;n.removeChild(r),r=e}}var Nt=new Set([`click`,`dblclick`,`contextmenu`,`input`,`change`,`beforeinput`,`keydown`,`keyup`,`pointerdown`,`pointerup`,`pointermove`,`pointerover`,`pointerout`,`pointercancel`,`mousedown`,`mouseup`,`mousemove`,`mouseover`,`mouseout`,`focusin`,`focusout`]),Pt=Symbol(`handlers`),Ft=Symbol(`walked`),It=new WeakSet,Lt=new Map;function Rt(e){if(!It.has(e)){It.add(e);for(let t of Nt)e.addEventListener(t,Bt),e.addEventListener(t,zt,!0)}}function zt(e){if(e.bubbles||e[Ft])return;e[Ft]=e.currentTarget;let t=e.target,n=t[Pt]?.[e.type];if(n){Object.defineProperty(e,"currentTarget",{configurable:!0,value:t});try{n.call(t,e)}finally{delete e.currentTarget,ct()}}}function Bt(e){if(!e.bubbles)return;let t=e.currentTarget,n=e.composedPath(),r=n.indexOf(t);if(r<0)return;let i=e[Ft],a=i?n.indexOf(i):-1,o=!1;try{for(let t=i?a<0?r+1:a+1:0;t<=r;t++){let r=n[t],i=r[Pt]?.[e.type];if(i&&(Object.defineProperty(e,"currentTarget",{configurable:!0,value:r}),o=!0,i.call(r,e),e.cancelBubble))break}}finally{e[Ft]=t,o&&(delete e.currentTarget,ct())}}function Vt(e,t,n){Nt.has(t)?((e[Pt]??={})[t]=n,typeof document<`u`&&Rt(document)):e.addEventListener(t,n)}var Ht=e=>e===null||typeof e!=`object`&&typeof e!=`function`;function Ut(e,t,n,r,i=!1){let a;for(let o in t){let s=t[o];if(!(o===`children`||o===`ref`||s===void 0||i&&o===`value`)){if(o===`class`&&typeof s==`string`&&t.classList===void 0)s&&e.setAttribute(`class`,s);else if(o.startsWith(`on:`))e.addEventListener(o.slice(3),s);else if(o.length>2&&o.startsWith(`on`)&&o.charCodeAt(2)<91&&typeof s==`function`){let t=Lt.get(o);t===void 0&&Lt.set(o,t=o.slice(2).toLowerCase()),Vt(e,t,s)}else if(o===`class`||o===`className`)a??=new Gt(e),j(s,e=>a.setBase(e));else if(o===`classList`){a??=new Gt(e);for(let e of Object.keys(s))j(s[e],t=>a.setFlag(e,!!t))}else if(o===`style`)Kt(e,s);else if(o.startsWith(`attr:`)){let t=o.slice(5);j(s,n=>Wt(e,t,n))}else if(o.startsWith(`prop:`)){let t=o.slice(5);j(s,n=>{e[t]=n})}else if(n||o.includes(`-`))Ht(s)?Wt(e,o,s):j(s,t=>Wt(e,o,t));else if(r)j(s,t=>{e[o]=t});else if(o in e&&!wt.has(o)){if(Ht(s)){e[o]=s===null?``:s,(s===null||s===!1)&&e.removeAttribute(o);continue}j(s,t=>{e[o]=t??``,(t==null||t===!1)&&e.removeAttribute(o)})}else Ht(s)?Wt(e,o,s):j(s,t=>Wt(e,o,t))}}}function Wt(e,t,n){typeof n==`boolean`&&t.startsWith(`aria-`)?e.setAttribute(t,String(n)):n==null||n===!1?e.removeAttribute(t):e.setAttribute(t,n===!0?``:String(n))}var Gt=class{#e=``;#t=new Map;constructor(e){this.el=e}setBase(e){this.#e=e??``,this.#n()}setFlag(e,t){this.#t.set(e,t),this.#n()}#n(){let e=this.#e;for(let[t,n]of this.#t)n&&(e=e?`${e} ${t}`:t);e?this.el.setAttribute(`class`,e):this.el.removeAttribute(`class`)}};function Kt(e,t){if(typeof t==`string`||gt(t)){j(t,t=>{t?e.setAttribute(`style`,t):e.removeAttribute(`style`)});return}let n=t;for(let t of Object.keys(n)){let r=t.startsWith(`--`)||t.includes(`-`)?t:Jt(t),i=!r.startsWith(`--`)&&!qt.has(r);j(n[t],t=>{t==null||t===``?e.style.removeProperty(r):e.style.setProperty(r,typeof t==`number`&&i&&t!==0?`${t}px`:String(t))})}}var qt=new Set([`opacity`,`z-index`,`flex`,`flex-grow`,`flex-shrink`,`order`,`line-height`,`font-weight`,`zoom`,`aspect-ratio`,`scale`,`fill-opacity`,`stroke-opacity`,`stroke-width`,`grid-row`,`grid-column`,`tab-size`,`orphans`,`widows`,`columns`,`column-count`]);function Jt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Yt(e,t,n){Rt(t);let r=n?n.child():new ut,i=document.createComment(``),a=document.createComment(``),o=document.createDocumentFragment();return o.append(i),mt(r,()=>kt(o,e(),null)),o.append(a),t.appendChild(o),()=>{r.dispose(),Mt(i,a),i.remove(),a.remove()}}function Xt(e){return gt(e)??le(e)}function Zt(e){let t=document.createDocumentFragment();return jt(t,e,null,!0),t}function N(e){let t=!0,n=!1,r=[],i,a,s=(t,n)=>()=>{let i=e.children(t);if(r=en(i),n)for(let t of r)t.setAttribute(`data-reveal`,e.reveal===!0?``:String(e.reveal));return i};return Zt(new o(o=>{let c,u=!0,d=Xt(e.when).pipe(l()).subscribe(l=>{if(c)for(let e of c)e.cancel();c=void 0;let d=n,f=!t&&!d&&!!l,m=!t&&d&&!l;t=!1,n=!!l;let h=u;if(u=!1,l){if(!(d&&a&&(Object.is(l,i)||h&&p(l,i)))&&(i=l,a=s(l,!!e.reveal&&f),d&&e.swap)){let t=a;ze(e.swap(),()=>{a===t&&o.next(t)});return}o.next(a);return}i=a=void 0;let g=e.reveal===!0?`grow`:e.reveal,_=m&&g?r.map(e=>Re(e,g)):[];if(_.length===0||_.some(e=>!e)){o.next(e.fallback??null);return}let v=_;c=v;for(let e of r)Qt(e,!0);Promise.all(v.map(e=>e.finished)).then(()=>{c!==v||o.closed||(c=void 0,o.next(e.fallback??null))},()=>{})});return()=>{if(d.unsubscribe(),c)for(let e of c)e.cancel()}}))}function Qt(e,t){e.toggleAttribute(`inert`,t)}function $t(e,t){let n=k(`activity`),r=n.child();r.follow(e);let i=mt(r,t),a=en(i),o=gt(e);if(o)a.length>0&&n.own(o.subscribe(e=>{for(let t of a)Qt(t,!e)}));else if(!e)for(let e of a)Qt(e,!0);return i}function en(e){return e instanceof Element?[e]:e instanceof DocumentFragment?[...e.children]:Array.isArray(e)?e.flatMap(e=>en(e)):[]}var tn=12,nn=64,rn=0,an=0,on=new Set,sn=!1,cn=`auto`;function ln(){return cn===`auto`?typeof document<`u`&&!/jsdom/i.test(globalThis.navigator?.userAgent??``):cn}function un(){return!ln()||(rn===0&&(rn=performance.now()+tn,an=0,queueMicrotask(()=>{rn=0})),++an<=nn||performance.now()<rn)}function dn(e){on.add(e),!sn&&(sn=!0,i.setImmediate(fn))}function fn(){sn=!1,rn=0;let e=[...on];on.clear();for(let t of e)pn()?dn(t):t()}function pn(){return rn!==0&&an>nn&&performance.now()>=rn}function P(e){let t=k(`For`),n=e.by??e.key??(e=>e),r=document.createComment(`for`),i=document.createComment(`/for`),a=document.createDocumentFragment();a.append(r,i);let o=new Map,s,c=!1,l=e.children.length>1,u=(n,r,i)=>{let a=t.child(),o=l?O(i):void 0,s=document.createDocumentFragment();mt(a,()=>kt(s,e.children(r,o?.asReadonly),null));let c,u;return s.childNodes.length===1&&s.firstChild.nodeType===Node.ELEMENT_NODE?c=u=s.firstChild:(c=document.createComment(``),u=document.createComment(``),s.insertBefore(c,s.firstChild),s.appendChild(u)),{key:n,item:r,scope:a,index:o,first:c,last:u,pos:-1,at:i}},d=e=>{let t=[e.first],n=e.first;for(;n!==e.last&&(n=n.nextSibling);)t.push(n);return t},f=e=>{e.scope.dispose();for(let t of d(e))t.parentNode?.removeChild(t)},p=[],m,h=!1,g=!1;A(()=>{g=!0});let _=()=>{h||(h=!0,dn(()=>{h=!1,!g&&t.active&&(m?.items===p?S(m):b(p))}))},v=[],y=e=>{let t=e.length;if(t===0||t!==v.length)return!1;for(let n=0;n<t;n++)if(v[n].item!==e[n])return!1;return!0},b=a=>{if(p=a,m=void 0,y(a))return;let l=i.parentNode;if(a.length===0&&o.size>0){for(let e of o.values())e.scope.dispose();o=new Map;let e=document.createRange();e.setStartAfter(r),e.setEndBefore(i),e.deleteContents()}let h=new Map,g=[],b,S;for(let e=0;e<a.length;e++){let t=a[e],r=n(t);if(h.has(r)){c||(c=!0,console.warn(`For: duplicate key; later items with the same key are not rendered.`,r));continue}let i=o.get(r);if(i&&i.item!==t&&(f(i),i=void 0),!i){if(!un()){(b??=[]).push(e),(S??=[]).push(r);continue}i=u(r,t,e)}i.index?.set(e),i.at=e,h.set(r,i),g.push(i)}for(let[e,t]of o)h.has(e)||f(t);o=h;let C=mn(g),w=i;for(let e=g.length-1;e>=0;e--){let t=g[e];if(!C[e]||t.last.parentNode!==l)for(let e of d(t))l.insertBefore(e,w);w=t.first}for(let e=0;e<g.length;e++)g[e].pos=g[e].at;if(v=b?[]:g,g.length===0&&e.fallback&&!s){s=t.child();let n=document.createDocumentFragment();mt(s,()=>kt(n,e.fallback(),null)),l.insertBefore(n,i)}else g.length>0&&s&&(s.dispose(),s=void 0,Mt(r,g[0].first));b&&(m=x(a,g,b,S),_())},x=(e,t,n,r)=>{let a=Array(n.length);for(let e=n.length-1,r=t.length-1,o=i;e>=0;e--){for(;r>=0&&t[r].at>n[e];)o=t[r--].first;a[e]=o}let o=Array(e.length);for(let e of t)o[e.at]=e;return{items:e,at:n,keys:r,before:a,slots:o,next:0}},S=e=>{let t=i.parentNode,n;for(;e.next<e.at.length;e.next++){let r=e.at[e.next],i=e.keys[e.next];if(o.has(i)){c||(c=!0,console.warn(`For: duplicate key; later items with the same key are not rendered.`,i));continue}if(!un())break;let a=u(i,e.items[r],r);a.pos=r,o.set(i,a),e.slots[r]=a;let s=e.before[e.next];for(let e of d(a))t.insertBefore(e,s);n??=a}if(n&&s&&(s.dispose(),s=void 0,Mt(r,n.first)),e.next<e.at.length){_();return}m=void 0;let a=[];for(let t of e.slots)t&&a.push(t);v=a};return j(e.each,b),a}function mn(e){let t=e.length,n=Array(t).fill(!1),r=!0;for(let n=0,i=-1;n<t;n++){let t=e[n].pos;if(!(t<0)){if(t<i){r=!1;break}i=t}}if(r){for(let r=0;r<t;r++)n[r]=e[r].pos>=0;return n}let i=[],a=new Int32Array(t).fill(-1);for(let n=0;n<t;n++){let t=e[n].pos;if(t<0)continue;let r=0,o=i.length;for(;r<o;){let n=r+o>>1;e[i[n]].pos<t?r=n+1:o=n}r>0&&(a[n]=i[r-1]),i[r]=n}for(let e=i.length?i[i.length-1]:-1;e>=0;e=a[e])n[e]=!0;return n}function F(e,t,n,r){let i=k(`on`),a=!1,o=!1,s=n,c=n=>{o||n===a||(a=n,n?e.addEventListener(t,s,r):e.removeEventListener(t,s,r))};i.onActive(c);let l=()=>{c(!1),o=!0};return i.onCleanup(l),l}function hn(e,t){if(typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return e&&n.observe(e),k(`observeResize`).onCleanup(()=>n.disconnect()),n}function gn(e,t,n){if(typeof IntersectionObserver>`u`)return;let r=new IntersectionObserver(t,n);return r.observe(e),k(`observeIntersection`).onCleanup(()=>r.disconnect()),r}function _n(e){let t=k(`frame`),n=!1,r=0,i=!1,a=!1,o=s=>{n||t.disposed||(t.active?(n=!0,e(s)):(i=!0,a||(a=!0,t.onActive(e=>{e&&i&&!n&&(i=!1,r=ae(o))}))))};r=ae(o);let s=()=>{n||(n=!0,C(r))};return t.onCleanup(s),s}function vn(e,t){let n=setTimeout(e,t),r=()=>clearTimeout(n);return k(`timeout`).onCleanup(r),r}function yn(e){let t=k(`restartable`),n,r=0,i=!1,a=()=>{clearTimeout(n),n=setTimeout(()=>{n=void 0,i=!1,e()},r)},o=()=>{clearTimeout(n),n=void 0,i=!1};return t.onActive(e=>{e?i&&a():(clearTimeout(n),n=void 0)}),t.onCleanup(o),{start(e){r=e,i=!0,t.active&&a()},cancel:o}}function bn(e){let t=T(e),n=k(`workQueue`);return n.onActive(e=>t.setActive(e)),n.onCleanup(()=>t.dispose()),t}function xn(e,t){let n=k(`drag`),r,i=-1,a=(n,a)=>{if(r===void 0)return;let o=r;if(r=void 0,i>=0&&`releasePointerCapture`in e)try{e.hasPointerCapture?.(i)&&e.releasePointerCapture(i)}catch{}i=-1,t.end?.(o,n,a)};return F(e,`pointerdown`,n=>{if(r!==void 0){if(n.pointerId!==i&&e.hasPointerCapture?.(i))return;a(`cancel`,n)}let o=t.start(n);if(o!==void 0){r=o,i=n.pointerId;try{e.setPointerCapture?.(n.pointerId)}catch{}}}),F(e,`pointermove`,e=>{if(r!==void 0&&e.pointerId===i){if(e.buttons===0&&e.pointerType!==`touch`)return a(`cancel`,e);t.move?.(e,r)}}),F(e,`pointerup`,e=>{e.pointerId===i&&a(`up`,e)}),F(e,`pointercancel`,e=>{e.pointerId===i&&a(`cancel`,e)}),F(e,`lostpointercapture`,e=>{e.pointerId===i&&a(`cancel`,e)}),n.onActive(e=>{e||a(`cancel`)}),n.onCleanup(()=>a(`cancel`)),{get active(){return r!==void 0},cancel:()=>a(`cancel`)}}function Sn(e){let t=k(`frames`),n=0,r=!1,i=!1,a=a=>{n=0,!i&&(t.active?e(a):r=!0)},o=()=>{i||n||(t.active?n=ae(a):r=!0)},s=()=>{r=!1,n&&=(C(n),0)};return t.onActive(e=>{e?r&&(r=!1,o()):n&&(C(n),n=0,r=!0)}),t.onCleanup(()=>{s(),i=!0}),{request:o,cancel:s}}var Cn=`a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`,wn=`[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]`;function Tn(e=document){let t=e.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;if(t&&t!==e.body&&t!==e.documentElement&&!(t.shadowRoot&&!t.shadowRoot.activeElement&&t.tabIndex<0))return t}function En(e){return[...e.querySelectorAll(Cn)].filter(e=>!e.closest(`[hidden], [inert]`))}function Dn(e,t){if(e.key!==`Tab`||e.defaultPrevented)return;let n=En(t);if(!n.length)return;let r=Tn(t.ownerDocument),i=!!r&&t.contains(r);e.shiftKey&&(!i||r===n[0])?(e.preventDefault(),n[n.length-1].focus()):!e.shiftKey&&(!i||r===n[n.length-1])&&(e.preventDefault(),n[0].focus())}function On(e){let t=Tn();return n=>{let r=Tn();if(r&&!(n&&n.contains(r)))return;let i=t?.isConnected?t:e?.();i?.isConnected&&i.focus({preventScroll:!0})}}function kn(e){if(!e)return!1;try{return e.matches(`:focus-visible`)}catch{return Tn(e.ownerDocument)===e}}function An(e){return[...e.querySelectorAll(wn)].filter(e=>!e.hasAttribute(`disabled`)&&e.getAttribute(`aria-disabled`)!==`true`&&!e.closest(`[hidden]`))}function jn(e,t=!1){let n=An(e),r=(t?n.find(e=>e.getAttribute(`aria-checked`)===`true`):void 0)??n[0];return r?.focus(),!!r}function Mn(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=An(t);if(!n.length)return;let r=n.indexOf(Tn(t.ownerDocument)),i=n.length,a;switch(e.key){case`ArrowDown`:a=n[r<0?0:(r+1)%i];break;case`ArrowUp`:a=n[r<0?i-1:(r-1+i)%i];break;case`Home`:a=n[0];break;case`End`:a=n[i-1];break;default:return}e.preventDefault(),a.focus()}function Nn(e){let t=()=>[...e.querySelectorAll(`[role="tab"]`)].filter(e=>!e.closest(`[hidden]`)),n=()=>{let n=t(),r=Tn(e.ownerDocument),i=n.find(e=>e===r)??n.find(e=>e.getAttribute(`aria-selected`)===`true`)??n[0];for(let e of n){let t=e===i?0:-1;e.tabIndex!==t&&(e.tabIndex=t)}},r=F(e,`keydown`,e=>{if(e.defaultPrevented)return;let n=t(),r=n.indexOf(e.target);if(r<0)return;let i;switch(e.key){case`ArrowDown`:case`ArrowRight`:i=n[(r+1)%n.length];break;case`ArrowUp`:case`ArrowLeft`:i=n[(r-1+n.length)%n.length];break;case`Home`:i=n[0];break;case`End`:i=n[n.length-1];break;default:return}e.preventDefault(),i.focus()}),i=F(e,`focusin`,n),a=new MutationObserver(n);return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`aria-selected`]}),n(),()=>{r(),i(),a.disconnect()}}var Pn=0;function Fn(e=`msp`){return`${e}-${++Pn}`}function In(e){return{mount:(t,n,r)=>Yt(()=>e({ctx:n}),t,r)}}var Ln=`@layer msp.reset, msp.theme, msp.components, msp.overrides;`,Rn=new Map,zn=new Set,Bn=new Map,Vn=new Map,Hn=!1;function Un(){Hn||(Hn=!0,queueMicrotask(()=>{Hn=!1;for(let e of zn)e()}))}function I(e,t){Rn.get(e)!==t&&(Rn.set(e,t),zn.size&&Un())}function Wn(){return[Ln,...Rn.values()].join(`
`)}function Gn(e=document){let t=Vn.get(e);if(t){t.users++;return}let n=qn(e)?e:e.ownerDocument,r=n.defaultView,i;if(r&&`adoptedStyleSheets`in e&&typeof r.CSSStyleSheet?.prototype.replaceSync==`function`){let t=Bn.get(n);if(!t){let e=new r.CSSStyleSheet,i=()=>e.replaceSync(Wn());i(),t={sheet:e,update:i,users:0},Bn.set(n,t),zn.add(i)}let a=t;a.users++,e.adoptedStyleSheets=[...e.adoptedStyleSheets,a.sheet],i=()=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>e!==a.sheet),!(--a.users>0)&&(Bn.delete(n),zn.delete(a.update))}}else{let t=n.createElement(`style`);t.setAttribute(`data-msp-styles`,``),qn(e)?e.head.appendChild(t):e.prepend(t);let r=()=>{t.textContent=Wn()};r(),zn.add(r),i=()=>{t.remove(),zn.delete(r)}}Vn.set(e,{users:1,remove:i})}function Kn(e){let t=Vn.get(e);!t||--t.users>0||(t.remove(),Vn.delete(e))}function qn(e){return e.nodeType===9}var Jn={icon:`msp-icon-icon`};I(`components/icon/icon.module.css`,`@layer msp.components {
.msp-icon-icon {
  flex-shrink: 0;
}
}
`);var Yn={"align-left":`<path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/>`,"app-window":`<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/>`,"arrow-down":`<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>`,"arrow-up":`<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>`,"axis-3d":`<path d="M13.5 10.5 15 9"/><path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="M4.293 19.707 6 18"/><path d="m9 15 1.5-1.5"/>`,ban:`<circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>`,"book-open":`<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>`,bot:`<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>`,box:`<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>`,camera:`<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>`,"chart-gantt":`<path d="M10 6h8"/><path d="M12 16h6"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 11h7"/>`,check:`<path d="M20 6 9 17l-5-5"/>`,"chevron-down":`<path d="m6 9 6 6 6-6"/>`,"chevron-left":`<path d="m15 18-6-6 6-6"/>`,"chevron-right":`<path d="m9 18 6-6-6-6"/>`,"chevron-up":`<path d="m18 15-6-6-6 6"/>`,"chevrons-left":`<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>`,"chevrons-right":`<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>`,circle:`<circle cx="12" cy="12" r="10"/>`,"circle-alert":`<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>`,"circle-check":`<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>`,"circle-help":`<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>`,clapperboard:`<path d="m12.296 3.464 3.02 3.956"/><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m6.18 5.276 3.1 3.899"/>`,clipboard:`<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>`,cloud:`<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>`,"cloud-upload":`<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>`,command:`<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>`,cone:`<path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"/><ellipse cx="12" cy="19" rx="9" ry="3"/>`,copy:`<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`,crop:`<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>`,crosshair:`<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>`,cylinder:`<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/>`,download:`<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>`,ellipsis:`<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>`,"ellipsis-vertical":`<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>`,eye:`<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>`,"eye-off":`<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>`,file:`<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/>`,"file-code":`<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/>`,film:`<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>`,"flip-vertical-2":`<path d="M12 14v2"/><path d="M12 20v2"/><path d="M12 2v2"/><path d="M12 8v2"/><path d="M20.288 16.703A1 1 0 0022 16V8a1 1 0 00-1.712-.703l-3.99 3.991a1 1 0 00-.001 1.424z"/><path d="M3.712 16.703A1 1 0 012 16V8a1 1 0 011.712-.703l3.99 3.991a1 1 0 01.001 1.424z"/>`,focus:`<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>`,"folder-open":`<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>`,fullscreen:`<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/>`,gauge:`<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>`,glasses:`<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>`,"grip-vertical":`<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>`,hexagon:`<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>`,history:`<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>`,hourglass:`<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>`,house:`<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`,image:`<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>`,images:`<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>`,info:`<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>`,keyboard:`<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>`,layers:`<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>`,lightbulb:`<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>`,link:`<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,list:`<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>`,"list-restart":`<path d="M21 5H3"/><path d="M7 12H3"/><path d="M7 19H3"/><path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/>`,"list-tree":`<path d="M8 5h13"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="M3 10a2 2 0 0 0 2 2h3"/><path d="M3 5v12a2 2 0 0 0 2 2h3"/>`,"loader-circle":`<path d="M21 12a9 9 0 1 1-6.219-8.56"/>`,locate:`<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/>`,"locate-off":`<path d="M12 19v3"/><path d="M12 2v3"/><path d="M18.89 13.24a7 7 0 0 0-8.13-8.13"/><path d="M19 12h3"/><path d="M2 12h3"/><path d="m2 2 20 20"/><path d="M7.05 7.05a7 7 0 0 0 9.9 9.9"/>`,maximize:`<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>`,"maximize-2":`<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>`,minimize:`<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>`,minus:`<path d="M5 12h14"/>`,"monitor-cog":`<path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>`,moon:`<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>`,"mouse-pointer-2":`<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>`,"mouse-pointer-click":`<path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>`,"move-3d":`<path d="M5 3v16h16"/><path d="m5 19 6-6"/><path d="m2 6 3-3 3 3"/><path d="m18 16 3 3-3 3"/>`,orbit:`<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>`,paintbrush:`<path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>`,palette:`<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>`,"panel-bottom":`<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/>`,"panel-left":`<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>`,"panel-right":`<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/>`,"panel-top":`<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>`,pause:`<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>`,pencil:`<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>`,pin:`<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>`,play:`<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>`,plus:`<path d="M5 12h14"/><path d="M12 5v14"/>`,"redo-2":`<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/>`,"refresh-cw":`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>`,"rotate-3d":`<path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796"/><path d="M21.79796 11 A 10 5 0 1 0 19 15.57071"/>`,"rotate-ccw":`<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`,ruler:`<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>`,save:`<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>`,scan:`<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>`,scissors:`<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>`,"scroll-text":`<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>`,search:`<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>`,settings:`<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>`,shapes:`<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>`,"share-2":`<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>`,shield:`<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>`,"skip-back":`<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/>`,"skip-forward":`<path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/>`,"sliders-horizontal":`<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>`,sparkles:`<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>`,square:`<rect width="18" height="18" x="3" y="3" rx="2"/>`,"squares-exclude":`<path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"/><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"/>`,"squares-intersect":`<path d="M10 22a2 2 0 0 1-2-2"/><path d="M14 2a2 2 0 0 1 2 2"/><path d="M16 22h-2"/><path d="M2 10V8"/><path d="M2 4a2 2 0 0 1 2-2"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/><path d="M4 16a2 2 0 0 1-2-2"/><path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"/><path d="M8 2h2"/>`,"squares-subtract":`<path d="M10 22a2 2 0 0 1-2-2"/><path d="M16 22h-2"/><path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/>`,"squares-unite":`<path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"/>`,"step-back":`<path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M21 20V4"/>`,"step-forward":`<path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/><path d="M3 4v16"/>`,sun:`<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`,"sun-moon":`<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>`,"swatch-book":`<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M 7 17h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>`,tag:`<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>`,"text-cursor-input":`<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"/><path d="M9 6v12"/>`,"toggle-right":`<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>`,"trash-2":`<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`,"triangle-alert":`<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>`,"undo-2":`<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>`,upload:`<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>`,user:`<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,"volume-2":`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>`,"volume-x":`<path d="M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"/><path d="m16.5 14.5 5-5"/><path d="m16.5 9.5 5 5"/>`,wrench:`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>`,x:`<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`,"zoom-in":`<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>`,"zoom-out":`<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/>`},Xn={"ball-and-stick":`<circle cx="5" cy="18" r="2.5"/><circle cx="12" cy="6" r="3"/><circle cx="19" cy="17" r="2.5"/><path d="m6.3 15.8 4.2-7.2"/><path d="m13.6 8.5 4 6.4"/>`,cartoon:`<path d="M3 15c3-10 6-10 9 0s6 10 9 0"/><path d="M3 9c3 10 6 10 9 0s6-10 9 0"/>`,ligand:`<path d="M10 7l5.2 3v6L10 19l-5.2-3v-6z"/><path d="m15.2 10 3.5-2"/><circle cx="20" cy="7" r="1.5"/>`,snapshots:`<rect x="7" y="3" width="14" height="14" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h12"/><path d="M13 6.4l2.6 1.5v3L13 12.4l-2.6-1.5v-3z"/><path d="m15.6 10.9 1.6 1"/><circle cx="18.1" cy="12.5" r="1.1"/>`,"measure-distance":`<path d="M3 6v12M21 6v12M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3"/>`,"measure-angle":`<path d="M4 20h17M4 20 17 6M12 20a8 8 0 0 0-2.54-5.85"/>`,sequence:`<rect x="2" y="9" width="5" height="8" rx="1"/><rect x="9.5" y="9" width="5" height="8" rx="1"/><rect x="17" y="9" width="5" height="8" rx="1"/><path d="M4.5 4v2M12 4v2M19.5 4v2"/>`,kinemage:`<circle cx="6.5" cy="15.5" r="4"/><circle cx="17.5" cy="8.5" r="4"/><path d="M10 9h.01M12.5 11.5h.01M15 14h.01M9 12h.01M14.5 17h.01M11.5 15h.01"/>`,structure:`<circle cx="12" cy="8" r="5"/><circle cx="7.5" cy="15.5" r="5"/><circle cx="16.5" cy="15.5" r="5"/>`,spacefill:`<circle cx="9" cy="10" r="6"/><circle cx="16" cy="15" r="5"/>`,surface:`<path d="M12 3c3 0 4 2 7 3s3 4 2 7-1 5-4 6-5 3-8 2-6-3-6-6 0-5 2-7 4-5 7-5z"/><path d="M9 11.5c1.5-2 4-2 6 0"/>`,superpose:`<path d="M9.5 3.5l5.63 3.25v6.5L9.5 16.5l-5.63-3.25v-6.5z"/><path d="M14.5 7.5l5.63 3.25v6.5L14.5 20.5l-5.63-3.25v-6.5z"/>`,trajectory:`<rect x="3" y="10" width="12" height="11" rx="2"/><path d="M6 7h10a2 2 0 0 1 2 2v9"/><path d="M9 4h10a2 2 0 0 1 2 2v9"/>`,volume:`<path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z"/><path d="M8.5 12.5c0-2.5 2-4 3.5-4s3.5 1.5 3.5 4-1.5 3-3.5 3-3.5-.5-3.5-3z"/>`,prism:`<path stroke-linejoin="miter" d="M12 3 21.5 19.5h-19z"/><path stroke-width="2.6" stroke-linejoin="miter" d="M12 11.2 14.6 15.7H9.4z"/>`,molstar:`<path stroke-linejoin="miter" d="M9.7 1.4h4.6v5.05l3.57-3.57 3.25 3.25-3.57 3.57h5.05v4.6h-5.05l3.57 3.57-3.25 3.25-3.57-3.57v5.05H9.7v-5.05l-3.57 3.57-3.25-3.25 3.57-3.57H1.4V9.7h5.05L2.88 6.13l3.25-3.25 3.57 3.57z"/>`,"pick-atom":`<circle cx="12" cy="12" r="4"/>`,"pick-residue":`<path d="M12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5z"/>`,"pick-chain":`<circle cx="5" cy="15" r="2.5"/><circle cx="12" cy="9" r="2.5"/><circle cx="19" cy="15" r="2.5"/><path d="m7 13.3 3-2.6M14 10.7l3 2.6"/>`,"pick-entity":`<circle cx="6" cy="8" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="12" cy="16" r="2"/><circle cx="18" cy="16" r="2"/>`,"pick-model":`<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/>`},Zn=`http://www.w3.org/2000/svg`,Qn=18,$n={...Yn,...Xn},er=new Map;function tr(e){let t=er.get(e);if(t)return t;let n=$n[e];if(n===void 0)throw Error(`Unknown icon "${e}"`);return t=document.createElementNS(Zn,`svg`),t.setAttribute(`viewBox`,`0 0 24 24`),t.setAttribute(`fill`,`none`),t.setAttribute(`stroke`,`currentColor`),t.setAttribute(`stroke-width`,`2`),t.setAttribute(`stroke-linecap`,`round`),t.setAttribute(`stroke-linejoin`,`round`),t.setAttribute(`focusable`,`false`),t.innerHTML=n,er.set(e,t),t}function L(e){let t=tr(e.name).cloneNode(!0),n=String(e.size??Qn);return t.setAttribute(`width`,n),t.setAttribute(`height`,n),t.setAttribute(`class`,e.class?`${Jn.icon} ${e.class}`:Jn.icon),e.label===void 0?t.setAttribute(`aria-hidden`,`true`):(t.setAttribute(`role`,`img`),t.setAttribute(`aria-label`,e.label)),t}var nr={apply:`msp-action-footer-apply`,footer:`msp-action-footer-footer`,info:`msp-action-footer-info`,reset:`msp-action-footer-reset`,secondary:`msp-action-footer-secondary`,spin:`msp-action-footer-spin`};I(`components/action-footer/action-footer.module.css`,`@layer msp.components {
.msp-action-footer-footer {
  height: 30px;
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-3)) calc(-1 * var(--msp-space-3));
  display: flex;
}

.msp-action-footer-reset {
  width: 32px;
  color: var(--msp-color-text-subtle);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    color: var(--msp-color-text);
  }

  &:focus-visible {
    color: var(--msp-color-text);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-action-footer-apply {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-4);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  margin-left: auto;
  font-weight: 600;
  display: flex;

  &:hover:not(:disabled) {
    color: var(--msp-color-accent-strong);

    & > span {
      text-underline-offset: 3px;
      text-decoration: underline 1.5px;
    }
  }

  &:focus-visible {
    color: var(--msp-color-accent-strong);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-action-footer-info {
  min-width: 0;
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  align-self: center;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-action-footer-reset + .msp-action-footer-info {
  padding-left: 0;
}

.msp-action-footer-secondary {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2) 0 var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover:not(:disabled) {
    color: var(--msp-color-text);

    & > span {
      text-underline-offset: 3px;
      text-decoration: underline 1.5px;
    }
  }

  &:focus-visible {
    color: var(--msp-color-text);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-action-footer-footer:not(:has(.msp-action-footer-info)) .msp-action-footer-secondary {
  margin-left: auto;
}

.msp-action-footer-secondary ~ .msp-action-footer-apply {
  margin-left: 0;
}

.msp-action-footer-spin {
  animation: .9s linear infinite msp-action-footer-spin;
}

@keyframes msp-action-footer-spin {
  to {
    transform: rotate(360deg);
  }
}
}
`);function R(e,t,n){return Et(e,t)}var z=R;function rr(e){let t=ar(e.busy),n=h([t,ar(e.disabled)],(e,t)=>e||t),r=k(`ActionFooter`),i=t=>{if(t.key!==`Enter`||t.defaultPrevented||t.isComposing||t.altKey||t.ctrlKey||t.metaKey)return;let r=t.target;ir(r)&&!n.value&&(t.preventDefault(),r.dispatchEvent(new Event(`change`,{bubbles:!0})),queueMicrotask(()=>{n.value||e.onApply()}))},a=e=>queueMicrotask(()=>{let t=e.parentElement;t&&!r.disposed&&mt(r,()=>F(t,`keydown`,i))});return z(`div`,{class:nr.footer,ref:e=>a(e),children:[e.onReset?R(`button`,{type:`button`,class:nr.reset,"data-tip":`Set defaults`,"aria-label":`Set defaults`,onClick:()=>e.onReset?.(),children:R(L,{name:`list-restart`,size:15})}):null,e.info===void 0?null:R(`span`,{class:nr.info,children:e.info}),e.secondary?R(`button`,{type:`button`,class:nr.secondary,disabled:t,onClick:()=>e.secondary?.onClick(),children:R(`span`,{children:e.secondary.label})}):null,z(`button`,{type:`button`,class:nr.apply,disabled:n,onClick:()=>e.onApply(),children:[R(N,{when:t,children:()=>R(L,{name:`loader-circle`,size:15,class:nr.spin})}),R(`span`,{children:e.label})]})]})}function ir(e){return!(e instanceof HTMLInputElement)||e.getAttribute(`role`)===`combobox`||e.getAttribute(`aria-expanded`)===`true`?!1:[`text`,`number`,`search`,`url`,`email`,`tel`,``].includes(e.type)}function ar(e){if(f(e))return e;let t=O(!1);return vt(e??!1,e=>t.set(e)),t.asReadonly}var or={block:`msp-button-block`,button:`msp-button-button`,danger:`msp-button-danger`,ghost:`msp-button-ghost`,icon:`msp-button-icon`,iconOnly:`msp-button-iconOnly`,primary:`msp-button-primary`,small:`msp-button-small`,tiny:`msp-button-tiny`};I(`components/button/button.module.css`,`@layer msp.components {
.msp-button-button {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-2);
  height: var(--msp-control-height);
  padding: 0 var(--msp-space-4);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-md);
  white-space: nowrap;
  display: inline-flex;

  &:hover:not(:disabled) {
    background: var(--msp-color-hover);
  }

  &:active:not(:disabled), &[aria-pressed="true"] {
    background: var(--msp-color-pressed);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-button-primary {
  background: color-mix(in oklab, var(--msp-color-accent), transparent 84%);
  color: var(--msp-color-accent-strong);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 76%);
  }

  &:active:not(:disabled), &[aria-pressed="true"] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 70%);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
  }

  &:disabled {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 92%);
    color: var(--msp-color-text-subtle);
  }
}

.msp-button-block {
  width: 100%;
}

.msp-button-ghost {
  background: none;
}

.msp-button-danger:hover:not(:disabled) {
  background: var(--msp-color-danger);
  color: #fff;
}

.msp-button-small {
  height: max(24px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-inset);
  font-size: var(--msp-font-size-sm);
}

.msp-button-tiny {
  gap: var(--msp-space-1);
  height: max(24px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-space-2);
  font-size: var(--msp-font-size-xs);

  & .msp-button-icon {
    width: 14px;
    height: 14px;
  }
}

.msp-button-iconOnly {
  width: var(--msp-control-height);
  padding: 0;

  &.msp-button-small, &.msp-button-tiny {
    width: max(24px, var(--msp-touch-target, 0px));
  }
}

.msp-button-icon {
  width: 18px;
  height: 18px;
  display: inline-flex;

  & > svg {
    width: 100%;
    height: 100%;
  }
}
}
`);function sr(e){let t=e.variant??`default`,n=e.icon!==void 0&&e.children===void 0;return z(`button`,{type:`button`,class:[or.button,t==="default"?``:or[t],e.size===`sm`?or.small:e.size===`xs`?or.tiny:``,n?or.iconOnly:``,e.block?or.block:``,e.class??``].filter(Boolean).join(` `),"data-tip":e.title,"aria-label":n?e.title:void 0,disabled:e.disabled,"aria-pressed":e.pressed,onClick:e.onClick,children:[e.icon===void 0?null:R(`span`,{class:or.icon,children:e.icon}),e.children]})}var cr={choice:`msp-choices-choice`,group:`msp-choices-group`,label:`msp-choices-label`,row:`msp-choices-row`,text:`msp-choices-text`};I(`components/choices/choices.module.css`,`@layer msp.components {
.msp-choices-group {
  gap: var(--msp-space-1);
  grid-template-columns: minmax(0, 1fr);
  min-width: 0;
  display: grid;
}

.msp-choices-label {
  padding: 0 var(--msp-space-1);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-choices-row {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(auto-fit, minmax(min(64px, 100%), 1fr));
  display: grid;
}

.msp-choices-choice {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-pressed="true"] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 82%);
    color: var(--msp-color-accent);
  }

  & > svg {
    flex: none;
  }
}

.msp-choices-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`);function lr(e){let{active:t}=e;return z(`div`,{class:cr.group,children:[e.label?R(`span`,{class:cr.label,children:e.label}):null,R(`div`,{class:cr.row,role:`group`,"aria-label":e.label,children:e.choices.map(n=>z(`button`,{type:`button`,class:cr.choice,title:n.title,"aria-pressed":t&&h(t,e=>e===n.id),onClick:()=>e.onPick(n.id),children:[n.icon?R(L,{name:n.icon,size:15}):null,R(`span`,{class:cr.text,"data-tip-overflow":``,children:n.label})]}))})]})}function ur(e){return(typeof e.composedPath==`function`?e.composedPath():[])[0]??e.target}function dr(e,t){if(!t)return!1;let n=typeof e.composedPath==`function`?e.composedPath():[];return n.length?n.includes(t):t.contains(e.target)}function fr(e){let t=e.getRootNode().activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function pr(e){let t=e.getRootNode();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t.host:e.closest?.(`.msp-root`)??e.parentElement?.closest(`.msp-root`)??void 0}function mr(e,t){let n=pr(e);if(!n||dr(t,n))return!0;let r=n.ownerDocument,i=r.activeElement;return i&&i!==r.body&&i!==r.documentElement?!1:n.matches(`:hover`)}function hr(e){return typeof HTMLElement>`u`||!(e instanceof HTMLElement)?!1:e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`checkbox`,`radio`,`range`,`button`,`color`].includes(e.type)}var gr={custom:`msp-color-color-picker-custom`,field:`msp-color-color-picker-field`,greys:`msp-color-color-picker-greys`,marker:`msp-color-color-picker-marker`,palette:`msp-color-color-picker-palette`,picker:`msp-color-color-picker-picker`,preview:`msp-color-color-picker-preview`,swatch:`msp-color-color-picker-swatch`,text:`msp-color-color-picker-text`};I(`components/color/color-picker.module.css`,`@layer msp.components {
.msp-color-color-picker-picker {
  gap: var(--msp-space-3);
  margin-block: var(--msp-space-1) var(--msp-space-2);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-color-color-picker-field, .msp-color-color-picker-greys {
  border-radius: var(--msp-radius-sm);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  cursor: crosshair;
  touch-action: none;
  position: relative;
}

.msp-color-color-picker-field {
  background: linear-gradient(#ffffffe6, #fff0 50%, #0000 50%, #000000e6), linear-gradient(to right, red, #ff0, #0f0, #0ff, #00f, #f0f, red);
  height: 96px;
}

.msp-color-color-picker-greys {
  background: linear-gradient(to right, #000, #fff);
  height: 12px;
}

.msp-color-color-picker-marker {
  pointer-events: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  translate: -50% -50%;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 2.5px #00000080;
}

.msp-color-color-picker-palette {
  gap: var(--msp-space-2);
  grid-template-columns: repeat(8, minmax(0, 1fr));
  display: grid;
}

.msp-color-color-picker-swatch {
  border-radius: var(--msp-radius-sm);
  min-width: 0;
  height: 16px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  &:hover {
    transform: scale(1.08);
  }

  &[aria-selected="true"] {
    box-shadow: 0 0 0 1.5px var(--msp-color-bg),
      0 0 0 3px var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-color-color-picker-custom {
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-color-color-picker-preview {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-color-color-picker-text {
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  border: 0;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}
}
`);var _r=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247];function vr(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=(Math.max(t,n,r)+Math.min(t,n,r))/510,a=Math.round(7*(1-i)),o=7-a,s=[];for(let t=a;t>0;t--)s.push(Tr(e,.9*t/a));s.push(e);for(let t=1;t<=o;t++)s.push(Tr(e,-.85*t/o));return s}function yr(e){return`#${(e>>>0&16777215).toString(16).padStart(6,`0`)}`}function br(e){return`${e>>16&255}, ${e>>8&255}, ${e&255}`}var xr=(e,t,n)=>e<<16|t<<8|n,Sr=e=>Math.max(0,Math.min(255,Math.round(e)));function Cr(e){let t=e.trim().toLowerCase();if(!t)return;let n=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1];return Number.parseInt(e,16)}let r=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(t);if(r){let e=r[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(e.length===3||e.length===4){let t=e.slice(0,3);if(t.every(e=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(e))){if(r[1]?.startsWith(`hsl`))return wr(t);let e=t.some(e=>e.endsWith(`%`)),n=t.map(e=>Number.parseFloat(e)),i=!e&&n.every(e=>e<=1)&&t.some(e=>e.includes(`.`)),a=t=>e?t*255/100:i?t*255:t;return!e&&!i&&n.some(e=>e>255)?void 0:xr(Sr(a(n[0])),Sr(a(n[1])),Sr(a(n[2])))}}}let i=t.replace(/[\s_-]/g,``);return Object.hasOwn(ce,i)?ce[i]:void 0}function wr(e){let t=(Number.parseFloat(e[0])%360+360)%360/60,n=Math.min(1,Number.parseFloat(e[1])/100),r=Math.min(1,Number.parseFloat(e[2])/100),i=(1-Math.abs(2*r-1))*n,a=i*(1-Math.abs(t%2-1)),o=r-i/2,[s,c,l]=t<1?[i,a,0]:t<2?[a,i,0]:t<3?[0,i,a]:t<4?[0,a,i]:t<5?[a,0,i]:[i,0,a];return xr(Sr((s+o)*255),Sr((c+o)*255),Sr((l+o)*255))}function Tr(e,t){let n=t>0?255:0,r=Math.abs(t),i=t=>{let i=e>>t&255;return Math.round(i+(n-i)*r)<<t};return i(16)|i(8)|i(0)}var Er=.9;function Dr(e){let t=e*6%6,n=Sr((t-Math.floor(t))*255),r=255-n;switch(Math.floor(t)){case 0:return xr(255,n,0);case 1:return xr(r,255,0);case 2:return xr(0,255,n);case 3:return xr(0,r,255);case 4:return xr(n,0,255);default:return xr(255,0,r)}}function Or(e,t){let n=Dr(Math.max(0,Math.min(1,e))),r=Math.max(0,Math.min(1,t));return r<.5?Tr(n,Er*(1-r/.5)):Tr(n,-.9*((r-.5)/.5))}function kr(e){let t=e>>16&255,n=e>>8&255,r=e&255,i=Math.max(t,n,r),a=Math.min(t,n,r);if(i-a<16)return{greys:!0,x:(t+n+r)/765,y:.5};let o=i-a,s=i===t?((n-r)/o+6)%6:i===n?(r-t)/o+2:(t-n)/o+4,c=(i+a)/510,l=c>=.5?.5*(1-(2*c-1)/Er):.5+.5*(1-2*c)/Er;return{greys:!1,x:s/6,y:Math.max(0,Math.min(1,l))}}function Ar(e){let t=jr(e.value),n=h(t,kr),r=0,i,a=O(0),o=!1,s=h(a.asReadonly,vr);j(t,e=>{r=e,o||a.set(e),i&&fr(i)!==i&&(i.value=br(e))});let c=t=>n=>{let r=r=>{let i=n.getBoundingClientRect();e.onChange(t((r.clientX-i.left)/i.width,(r.clientY-i.top)/i.height))};xn(n,{start(e){if(e.button===0)return r(e),!0},move:r})},l=e=>{let t=e<.03?0:e>.97?255:Sr(e*255);return xr(t,t,t)};return z(`div`,{class:gr.picker,children:[R(`div`,{class:gr.field,"aria-hidden":`true`,ref:c(Or),children:R(`span`,{class:gr.marker,hidden:h(n,e=>e.greys),style:{left:h(n,e=>`${e.x*100}%`),top:h(n,e=>`${e.y*100}%`)}})}),R(`div`,{class:gr.greys,"aria-hidden":`true`,ref:c(e=>l(e)),children:R(`span`,{class:gr.marker,hidden:h(n,e=>!e.greys),style:{left:h(n,e=>`${e.x*100}%`),top:`50%`}})}),R(`div`,{class:gr.palette,role:`listbox`,"aria-label":`Palette`,children:_r.map(n=>R(`button`,{type:`button`,role:`option`,class:gr.swatch,style:{background:yr(n)},"aria-label":br(n),"aria-selected":h(t,e=>e===n),onClick:()=>e.onChange(n)}))}),R(`div`,{class:gr.palette,role:`listbox`,"aria-label":`Weights`,children:[0,1,2,3,4,5,6,7].map(n=>{let r=h(s,e=>e[n]);return R(`button`,{type:`button`,role:`option`,class:gr.swatch,style:{background:h(r,yr)},"aria-label":h(r,br),"aria-selected":h([r,t],(e,t)=>e===t),onClick:()=>{o=!0,e.onChange(vr(a.value)[n]),o=!1}})})}),z(`div`,{class:gr.custom,children:[R(`span`,{class:gr.preview,style:{background:h(t,yr)}}),R(`input`,{ref:e=>{i=e,e.value=br(r)},type:`text`,class:gr.text,"aria-label":`Color`,placeholder:`r, g, b · #hex · rgb() · name`,"data-tip":`r, g, b; hex, rgb(), hsl() or a name`,spellcheck:!1,onInput:t=>{let n=Cr(t.currentTarget.value);n!==void 0&&e.onChange(n)},onKeyDown:e=>{e.key===`Enter`&&(e.currentTarget.value=br(r))},onBlur:e=>{e.currentTarget.value=br(r)}})]})]})}function jr(e){if(f(e))return e;let t=O(0);return vt(e,e=>t.set(e)),t.asReadonly}var Mr={keys:`msp-context-menu-keys`,menu:`msp-context-menu-menu`,row:`msp-context-menu-row`};I(`components/context-menu/context-menu.module.css`,`@layer msp.components {
.msp-context-menu-menu {
  z-index: var(--msp-z-overlay);
  min-width: 180px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
}

.msp-context-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 15px 1fr auto;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-context-menu-keys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
}
}
`);function Nr(e,t,n,r){let i=!1,a=()=>{},o=On(),s=()=>{i||(i=!0,a(),o(u),u.remove(),r?.())},c=e=>{dr(e,u)||s()},l=t=>{t.key===`Escape`&&(dr(t,u)||mr(e,t))&&(t.preventDefault(),t.stopPropagation(),s())},u;ht(e=>{a=e,u=R(`div`,{class:Mr.menu,role:`menu`,onKeyDown:Mn,onContextMenu:e=>e.preventDefault(),children:n.map(e=>z(`button`,{type:`button`,role:`menuitem`,class:Mr.row,disabled:!!e.disabled,title:e.disabled,onClick:()=>{s(),e.run()},children:[e.icon?R(L,{name:e.icon,size:15}):R(`span`,{}),R(`span`,{children:e.label}),e.shortcut?R(`kbd`,{class:Mr.keys,children:e.shortcut}):R(`span`,{})]}))}),F(document,`pointerdown`,c,{capture:!0}),F(document,`keydown`,l,{capture:!0}),F(window,`resize`,s),F(window,`scroll`,s,{capture:!0})}),e.append(u);let d=u.offsetWidth,f=u.offsetHeight,p=t.x+d>window.innerWidth-4?Math.max(4,t.x-d):t.x,m=t.y+f>window.innerHeight-4?Math.max(4,t.y-f):t.y;return u.style.transform=`translate(${Math.round(p)}px, ${Math.round(m)}px)`,u.querySelector(`button:not(:disabled)`)?.focus({preventScroll:!0}),s}var Pr={bar:`msp-legend-bar`,caption:`msp-legend-caption`,dot:`msp-legend-dot`,ends:`msp-legend-ends`,item:`msp-legend-item`,label:`msp-legend-label`,legend:`msp-legend-legend`,line:`msp-legend-line`,mark:`msp-legend-mark`,none:`msp-legend-none`,ramp:`msp-legend-ramp`,swatch:`msp-legend-swatch`,title:`msp-legend-title`};I(`components/legend/legend.module.css`,`@layer msp.components {
.msp-legend-legend {
  gap: var(--msp-space-2);
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  line-height: 1.3;
  display: flex;
}

.msp-legend-title {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-legend-item {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  display: flex;
}

.msp-legend-label {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-legend-mark {
  background: var(--legend-color, transparent);
  flex: none;
}

.msp-legend-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
}

.msp-legend-dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}

.msp-legend-line {
  border-radius: 2px;
  width: 14px;
  height: 3px;
}

.msp-legend-none {
  background: color-mix(in oklab, var(--msp-color-text), transparent 85%);
}

.msp-legend-ramp {
  gap: var(--msp-space-1);
  flex-direction: column;
  display: flex;
}

.msp-legend-caption {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-legend-bar {
  border-radius: var(--msp-radius-sm);
  height: 8px;
  display: block;
}

.msp-legend-ends {
  justify-content: space-between;
  gap: var(--msp-space-3);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}
}
`);function Fr(e){return`linear-gradient(to right, ${(e.stops.length>0?e.stops:[{t:0,color:`transparent`}]).map(e=>`${e.color} ${(Math.min(1,Math.max(0,e.t))*100).toFixed(1)}%`).join(`, `)})`}function Ir(e){let t=e.items??[],n=e.ramps??[];return z(`div`,{class:e.class?`${Pr.legend} ${e.class}`:Pr.legend,role:`group`,"aria-label":`Legend`,children:[R(N,{when:e.title,children:e=>R(`span`,{class:Pr.title,children:e})}),R(P,{each:t,children:e=>z(`div`,{class:Pr.item,children:[R(`span`,{class:`${Pr.mark} ${Pr[e.glyph??`swatch`]}`,classList:{[Pr.none]:e.color===null},style:{"--legend-color":e.color??void 0},"aria-hidden":`true`}),R(`span`,{class:Pr.label,children:e.label})]})}),R(P,{each:n,children:e=>z(`div`,{class:Pr.ramp,children:[e.caption?R(`span`,{class:Pr.caption,children:e.caption}):null,R(`span`,{class:Pr.bar,style:{background:Fr(e)},role:`img`,"aria-label":`${e.lo} to ${e.hi}`}),z(`span`,{class:Pr.ends,children:[R(`span`,{children:e.lo}),R(`span`,{children:e.hi})]})]})})]})}var Lr={core:`msp-icon-wordmark-core`,flash:`msp-icon-wordmark-flash`,"flash-hover":`msp-icon-wordmark-flash-hover`,"flash-often":`msp-icon-wordmark-flash-often`,"flash-rare":`msp-icon-wordmark-flash-rare`,"flash-reveal":`msp-icon-wordmark-flash-reveal`,live:`msp-icon-wordmark-live`,outline:`msp-icon-wordmark-outline`,wordmark:`msp-icon-wordmark-wordmark`};I(`components/icon/wordmark.module.css`,`@layer msp.components {
.msp-icon-wordmark-wordmark {
  width: calc(var(--msp-wordmark-width, 72) * 1px * var(--msp-wordmark-scale, 1));
  height: calc(22px * var(--msp-wordmark-scale, 1));
  flex: none;
  display: block;
  position: relative;

  & svg {
    stroke-width: calc(1.5 / sqrt(var(--msp-wordmark-scale, 1)));
    position: absolute;
    inset: 0;
    overflow: visible;
  }
}

.msp-icon-wordmark-core {
  stroke-width: calc(2.4 / sqrt(var(--msp-wordmark-scale, 1)));
}

.msp-icon-wordmark-outline {
  color: inherit;
}

.msp-icon-wordmark-flash {
  animation: 14s ease-in-out .3s infinite both msp-icon-wordmark-flash-rare;
  mask-image: linear-gradient(100deg, #0000 0 38%, #000 47% 53%, #0000 62% 100%);
  mask-position: 100% 0;
  mask-size: 300% 100%;
  mask-repeat: no-repeat;

  [data-flash="often"] > & {
    animation: 7s ease-in-out .3s infinite both msp-icon-wordmark-flash-often;
  }

  [data-flash="reveal"] > & {
    animation: 1.4s ease-out both msp-icon-wordmark-flash-reveal;
    mask-image: linear-gradient(100deg, #000 0 42%, #0000 58% 100%);
  }

  .msp-icon-wordmark-wordmark:not([data-flash="reveal"], [data-live]):hover & {
    animation: 2.8s ease-in-out both msp-icon-wordmark-flash-hover;
  }
}

@keyframes msp-icon-wordmark-flash-rare {
  0% {
    mask-position: 100% 0;
  }

  20%, 100% {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-often {
  0% {
    mask-position: 100% 0;
  }

  40%, 100% {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-reveal {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-hover {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}

.msp-icon-wordmark-wordmark[data-live] {
  pointer-events: auto;
}

.msp-icon-wordmark-live {
  opacity: 0;
  --msp-wordmark-strip: calc(14px * var(--msp-wordmark-scale, 1));
  mask-image: linear-gradient(90deg,
    transparent calc(var(--msp-wordmark-x, 50%) - var(--msp-wordmark-strip)),
    #000 calc(var(--msp-wordmark-x, 50%) - var(--msp-wordmark-strip) / 3),
    #000 calc(var(--msp-wordmark-x, 50%) + var(--msp-wordmark-strip) / 3),
    transparent calc(var(--msp-wordmark-x, 50%) + var(--msp-wordmark-strip)));
  transition: opacity .6s var(--msp-ease);

  .msp-icon-wordmark-wordmark:hover > & {
    opacity: 1;
    transition-duration: .2s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-icon-wordmark-flash {
    animation: none;
  }
}
}
`);var Rr=`M0.5 1.5 3.5 1.5 8.5 10.5 13.5 1.5 16.5 1.5 16.5 19.5 13.5 19.5 13.5 7.68 8.5 16.68 3.5 7.68 3.5 19.5 0.5 19.5Z`,zr=`M46.5 3.5 49.5 3.5 49.5 6.38 51.54 4.34 53.66 6.46 51.62 8.5 54.5 8.5 54.5 11.5 51.62 11.5 53.66 13.54 51.54 15.66 49.5 13.62 49.5 16.5 46.5 16.5 46.5 13.62 44.46 15.66 42.34 13.54 44.38 11.5 36.5 11.5 36.5 19.5 33.5 19.5 33.5 0.5 36.5 0.5 36.5 8.5 44.38 8.5 42.34 6.46 44.46 4.34 46.5 6.38Z`,Br=`M57.5 3.5 68.76 10 57.5 16.5Z`,Vr=`M60 7.83 63.76 10 60 12.17Z`,Hr=72,Ur=57,B={paths:[Rr,`M24.5 6.5H25.5A5 5 0 0 1 30.5 11.5V14.5A5 5 0 0 1 25.5 19.5H24.5A5 5 0 0 1 19.5 14.5V11.5A5 5 0 0 1 24.5 6.5Z`,`M25 9.5A2.5 2.5 0 0 1 27.5 12V14A2.5 2.5 0 0 1 25 16.5A2.5 2.5 0 0 1 22.5 14V12A2.5 2.5 0 0 1 25 9.5Z`,zr],width:Ur,height:22,star:{x:48,y:10},stroke:e=>1.5/Math.sqrt(e)},Wr=0;function Gr(e){return z(Dt,{children:[R(`path`,{d:Rr}),R(`rect`,{x:`19.5`,y:`6.5`,width:`11`,height:`13`,rx:`5`}),R(`rect`,{x:`22.5`,y:`9.5`,width:`5`,height:`7`,rx:`2.5`}),R(`path`,{d:zr}),e.prism?R(`path`,{d:Br,"data-part":`prism`}):null,e.prism?R(`path`,{d:Vr,class:Lr.core}):null]})}function Kr(e){let t=`msp-wordmark-${++Wr}`,n=Math.max(1,Math.round(e.scale??1)),r=e.prism??!0,i=r?Hr:Ur,a=e=>z(`svg`,{class:e.class,viewBox:`-1 -1 ${i} 22`,width:i*n,height:22*n,fill:`none`,stroke:e.stroke,"stroke-linejoin":`miter`,"aria-hidden":e.hidden?`true`:void 0,children:[e.hidden?R(`defs`,{children:z(`linearGradient`,{id:t,gradientUnits:`userSpaceOnUse`,x1:`0`,y1:`0`,x2:String(i-2),y2:`0`,children:[R(`stop`,{offset:`0`,style:{"stop-color":`var(--msp-color-brand-1)`}}),R(`stop`,{offset:`0.35`,style:{"stop-color":`var(--msp-color-brand-2)`}}),R(`stop`,{offset:`0.6`,style:{"stop-color":`var(--msp-color-brand-3)`}}),R(`stop`,{offset:`1`,style:{"stop-color":`var(--msp-color-brand-4)`}})]})}):null,R(Gr,{prism:r}),e.hidden?null:R(`rect`,{"data-part":`star`,x:47.5,y:9.5,width:`1`,height:`1`,stroke:`none`,visibility:`hidden`})]}),o=e.live?qr(t,n,i,r):void 0,s=z(`span`,{class:`${Lr.wordmark} ${e.class??``}`,style:{"--msp-wordmark-scale":n,"--msp-wordmark-width":i},"data-flash":e.flash??`rare`,"data-live":e.live?``:void 0,role:`img`,"aria-label":`Mol* Prism`,children:[a({class:Lr.outline,stroke:`currentColor`}),a({class:Lr.flash,stroke:`url(#${t})`,hidden:!0}),o?.svg]});return o&&F(s,`pointermove`,e=>{let t=s.getBoundingClientRect(),r=e.clientX-t.left,i=r/n-1;o.gradient.setAttribute(`x1`,String(i-14)),o.gradient.setAttribute(`x2`,String(i+14)),s.style.setProperty(`--msp-wordmark-x`,`${r}px`)}),s}function qr(e,t,n,r){let i=z(`linearGradient`,{id:`${e}-live`,gradientUnits:`userSpaceOnUse`,x1:`13`,y1:`0`,x2:`41`,y2:`0`,children:[R(`stop`,{offset:`0`,style:{"stop-color":`var(--msp-color-brand-1)`}}),R(`stop`,{offset:`0.3`,style:{"stop-color":`var(--msp-color-brand-3)`}}),R(`stop`,{offset:`0.5`,style:{"stop-color":`var(--msp-color-brand-2)`}}),R(`stop`,{offset:`0.7`,style:{"stop-color":`var(--msp-color-brand-3)`}}),R(`stop`,{offset:`1`,style:{"stop-color":`var(--msp-color-brand-4)`}})]});return{svg:z(`svg`,{class:Lr.live,viewBox:`-1 -1 ${n} 22`,width:n*t,height:22*t,fill:`none`,stroke:`url(#${e}-live)`,"stroke-linejoin":`miter`,"aria-hidden":`true`,children:[R(`defs`,{children:i}),R(Gr,{prism:r})]}),gradient:i}}var Jr={canvas:`msp-shell-glass-wordmark-canvas`,wordmark:`msp-shell-glass-wordmark-wordmark`};I(`views/shell/glass-wordmark.module.css`,`@layer msp.components {
.msp-shell-glass-wordmark-wordmark {
  flex: none;
  display: block;
  position: relative;
}

.msp-shell-glass-wordmark-canvas {
  pointer-events: none;
  position: absolute;
}
}
`);var Yr=11,Xr=4,V=88,Zr={duration:2.4,stagger:.7},Qr={duration:.45,stagger:.12},$r=.8,ei=14,ti=1.4,ni=.1,ri=140,ii=11,ai=11,oi=3;function si(e){let t=e>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ci(e){let t=e-1;return 1+2.4*t*t*t+1.4*t*t}var li=class{#e;#t;#n;#r;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p;#m;#h;#g;#_;#v;#y;#b;#x;#S;#C;#w;#T;#E;#D;#O;#k;#A;#j;#M;#N;#P;#F;#I;constructor(e=11,t=1){this.#n=[],this.#r=new Float32Array(V),this.#i=new Float32Array(V),this.#a=new Float32Array(V),this.#o=new Float32Array(V),this.#s=new Float32Array(V),this.#c=new Float32Array(V),this.#l=new Float32Array(V),this.#u=new Float32Array(V),this.#d=new Float32Array(V),this.#f=new Float32Array(V),this.#p=new Float32Array(V),this.#m=new Float32Array(V),this.#h=new Float32Array(V),this.#g=new Float32Array(V),this.#_=new Float32Array(V),this.#v=new Float32Array(V),this.#y=new Float32Array(V),this.#b=new Float32Array(V),this.#x=Zr,this.#S=`whole`,this.#C=0,this.#w=0,this.#T=!1,this.#E=!1,this.#D=0,this.#O=0,this.#k=!0,this.#A=!1,this.onWhole=()=>{},this.onSnap=()=>{},this.count=V,this.#N=0,this.#F=0,this.#I=0,this.corners=new Float32Array(528),this.#e=si(e),this.#j=t,this.#t=B.paths.map(e=>new Path2D(e));let n=B.width,r=B.height,i=[],a=[];for(let e=0;e<=Xr;e++)for(let t=0;t<=Yr;t++){let o=e>0&&e<Xr&&t>0&&t<Yr;i.push(-1+t/Yr*n+(o?(this.#e()-.5)*.7*(n/Yr):0)),a.push(-1+e/Xr*r+(o?(this.#e()-.5)*.7*(r/Xr):0))}let o=(e,t)=>t*12+e,s=0,c=(e,t,n)=>{let r=(i[e]+i[t]+i[n])/3,o=(a[e]+a[t]+a[n])/3,c=new Path2D;c.moveTo(i[e]-r,a[e]-o),c.lineTo(i[t]-r,a[t]-o),c.lineTo(i[n]-r,a[n]-o),c.closePath(),this.#n.push(c),this.corners.set([i[e]-r,a[e]-o,i[t]-r,a[t]-o,i[n]-r,a[n]-o],s*6),this.#r[s]=r,this.#i[s]=o,s++};for(let e=0;e<Xr;e++)for(let t=0;t<Yr;t++){let[n,r,i,a]=[o(t,e),o(t+1,e),o(t,e+1),o(t+1,e+1)];this.#e()<.5?(c(n,r,a),c(n,a,i)):(c(n,r,i),c(r,a,i))}}place(e,t){t[0]=this.#r[e]+this.#a[e]+this.#h[e],t[1]=this.#i[e]+this.#o[e]+this.#g[e],t[2]=this.#s[e]+this.#_[e],t[3]=this.#r[e],t[4]=this.#i[e]}get assembled(){let e=0;for(let t=0;t<V;t++){let n=this.#a[t],r=this.#o[t];e+=Math.sqrt(n*n+r*r)+Math.abs(this.#s[t])*6}return Math.exp(-e/V/oi)}get pull(){if(this.#S!==`assembling`||this.#x!==Qr)return 0;let e=Qr.duration+Qr.stagger,t=Math.min(1,(this.#w-this.#C)/e);return(1-t)*(1-t)}get resting(){return this.#k}get animating(){return this.#S!==`whole`||this.#A}get phase(){return this.#S}get whole(){return this.#S===`whole`}scatter(e=Zr){for(let t=0;t<V;t++){let n=this.#e()*Math.PI*2,r=(18+this.#e()*36)*this.#j;this.#d[t]=Math.cos(n)*r,this.#f[t]=Math.sin(n)*r*.7,this.#p[t]=(this.#e()*2-1)*1.6,this.#m[t]=this.#e()*e.stagger}this.#x=e,this.#T=!0,this.#L(`assembling`)}setPointer(e,t){this.#E=!0,this.#D=e,this.#O=t}clearPointer(){this.#E=!1}shatter(e,t){let n=this.#S===`broken`;for(let r=0;r<V;r++){let i=this.#r[r]+this.#a[r]-e,a=this.#i[r]+this.#o[r]-t,o=Math.hypot(i,a)||1,s=(26+this.#e()*34)/(1+o*.04)*this.#j,c=+!!n;this.#c[r]=this.#c[r]*c+i/o*s+(this.#e()-.5)*6,this.#l[r]=this.#l[r]*c+a/o*s+(this.#e()-.5)*6,this.#u[r]=this.#u[r]*c+(this.#e()*2-1)*6}this.#L(`broken`)}hits(e,t){if(this.#S===`whole`)return e>=-2&&e<=B.width+1&&t>=-2&&t<=B.height+1;for(let n=0;n<V;n++){let r=this.#r[n]+this.#a[n]-e,i=this.#i[n]+this.#o[n]-t;if(r*r+i*i<36)return!0}return!1}#L(e){let t=this.#S===`whole`;this.#S=e,this.#C=this.#w,this.#k=!1,t&&e!==`whole`&&this.onWhole(!1)}#R(){for(let e=0;e<V;e++)this.#d[e]=this.#a[e],this.#f[e]=this.#o[e],this.#p[e]=this.#s[e],this.#m[e]=this.#e()*Qr.stagger;this.#x=Qr,this.#T=!1,this.#L(`assembling`)}step(e){this.#w+=e;let t=this.#w-this.#C;if(this.#z(e),this.#S===`broken`){let n=Math.exp(-3*e);for(let t=0;t<V;t++)this.#a[t]+=this.#c[t]*e,this.#o[t]+=this.#l[t]*e,this.#s[t]+=this.#u[t]*e,this.#c[t]*=n,this.#l[t]*=n,this.#u[t]*=n;t>=$r&&this.#R()}else if(this.#S===`assembling`){let e=!0;for(let n=0;n<V;n++){let r=Math.min(1,Math.max(0,(t-this.#m[n])/this.#x.duration));r<1&&(e=!1);let i=1-r,a=this.#x===Qr?1-ci(r):i*i*i*i*i;this.#a[n]=this.#d[n]*a,this.#o[n]=this.#f[n]*a,this.#s[n]=this.#p[n]*a}e&&(this.#a.fill(0),this.#o.fill(0),this.#s.fill(0),this.#S=`whole`,this.onWhole(!0),this.onSnap())}}#z(e){let t=Math.min(e,1/30),n=!1,r=!1;for(let e=0;e<V;e++){let i=0,a=0,o=0;if(this.#E){let t=this.#r[e]+this.#a[e]-this.#D,n=this.#i[e]+this.#o[e]-this.#O,r=Math.sqrt(t*t+n*n);if(r<ei){let e=1-r/ei,s=e*e,c=1/(r||1);i=t*c*ti*s,a=n*c*ti*s,o=(t>=0?1:-1)*ni*s}}(Math.abs(i-this.#h[e])+Math.abs(a-this.#g[e])>.01||Math.abs(o-this.#_[e])>.001||Math.abs(this.#v[e])+Math.abs(this.#y[e])>.02)&&(r=!0),this.#v[e]+=(ri*(i-this.#h[e])-ii*this.#v[e])*t,this.#y[e]+=(ri*(a-this.#g[e])-ii*this.#y[e])*t,this.#b[e]+=(ri*(o-this.#_[e])-ii*this.#b[e])*t,this.#h[e]+=this.#v[e]*t,this.#g[e]+=this.#y[e]*t,this.#_[e]+=this.#b[e]*t,(Math.abs(this.#h[e])+Math.abs(this.#g[e])>.01||Math.abs(this.#_[e])>.001||Math.abs(this.#v[e])+Math.abs(this.#y[e])>.02)&&(n=!0)}this.#k=this.#S===`whole`&&!n,this.#A=r}draw(e,t,n,r,i,a,o,s=1){let c=this.#w-this.#C;if(this.#k){e.save(),e.translate(t,n),e.scale(r,r),e.globalAlpha=o,e.strokeStyle=i,e.lineWidth=B.stroke(r),e.lineJoin=`miter`;for(let t=0;t<this.#t.length;t++)e.stroke(this.#t[t]);e.restore(),e.globalAlpha=1;return}let l=this.#B(r,s,i),u=r*s;e.save(),e.lineWidth=.35,e.strokeStyle=a;for(let a=0;a<V;a++){let d=this.#a[a]+this.#h[a],f=this.#o[a]+this.#g[a],p=this.#s[a]+this.#_[a],m=this.#S===`assembling`&&this.#T?Math.min(1,Math.max(0,(c-this.#m[a])/(this.#x.duration*.35))):1;if(m<=0)continue;let h=Math.cos(p)*u,g=Math.sin(p)*u;e.setTransform(h,g,-g,h,(t+(this.#r[a]+d)*r)*s,(n+(this.#i[a]+f)*r)*s);let _=Math.abs(this.#a[a])+Math.abs(this.#o[a])+Math.abs(this.#s[a])*6,v=Math.abs(this.#h[a])+Math.abs(this.#g[a])+Math.abs(this.#_[a])*6,y=Math.min(1,_/8+v/3)*.22*o*m;if(y>.01&&(e.globalAlpha=y,e.stroke(this.#n[a])),e.globalAlpha=o*m,l){let t=this.#F,n=this.#I;e.drawImage(l,a%ai*t,(a/ai|0)*n,t,n,-t/(2*u),-n/(2*u),t/u,n/u)}else{e.save(),e.clip(this.#n[a]),e.translate(-this.#r[a],-this.#i[a]),e.strokeStyle=i,e.lineWidth=B.stroke(r),e.lineJoin=`miter`;for(let t=0;t<this.#t.length;t++)e.stroke(this.#t[t]);e.restore()}}e.restore(),e.globalAlpha=1}#B(e,t,n){let r=e*t;if(this.#M&&this.#N===r&&this.#P===n)return this.#M;if(typeof document>`u`)return;let i=this.#M??document.createElement(`canvas`),a=i.getContext(`2d`);if(!a)return;let o=0;for(let e=0;e<this.corners.length;e++)o=Math.max(o,Math.abs(this.corners[e]));let s=B.stroke(e)/2+.5,c=Math.ceil(2*(o+s)*r);this.#F=c,this.#I=c,i.width=c*ai,i.height=c*Math.ceil(V/ai),a.clearRect(0,0,i.width,i.height),a.strokeStyle=n,a.lineWidth=B.stroke(e),a.lineJoin=`miter`;for(let e=0;e<V;e++){a.setTransform(r,0,0,r,e%ai*c+c/2,(e/ai|0)*c+c/2),a.save(),a.clip(this.#n[e]),a.translate(-this.#r[e],-this.#i[e]);for(let e=0;e<this.#t.length;e++)a.stroke(this.#t[e]);a.restore()}return a.setTransform(1,0,0,1,0,0),this.#M=i,this.#N=r,this.#P=n,i}},ui=.35,di={duration:.9,stagger:.3},fi=22;function pi(){return typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches}function mi(e){let t=Math.max(1,Math.round(e.scale??1)),n=B.width*t,r=B.height*t,i=fi*t,a=R(`canvas`,{class:Jr.canvas,"aria-hidden":`true`,style:{left:`${-i}px`,top:`${-i}px`,width:`${n+2*i}px`,height:`${r+2*i}px`}}),o=R(`span`,{class:e.class?`${Jr.wordmark} ${e.class}`:Jr.wordmark,style:{width:`${n}px`,height:`${r}px`},role:`img`,"aria-label":`Mol*`,children:a}),s=a.getContext(`2d`),c=pi()||typeof Path2D!=`function`||!s?void 0:new li(23,ui),l=i+t,u=1,d=`currentColor`,f=`currentColor`,p=()=>{if(!s)return;u=Math.min(2,globalThis.devicePixelRatio||1),a.width=Math.round((n+2*i)*u),a.height=Math.round((r+2*i)*u);let e=e=>(a.style.color=`var(${e})`,getComputedStyle(a).color),t=s.createLinearGradient(0,0,B.width-2,0);t.addColorStop(0,e(`--msp-color-brand-1`)),t.addColorStop(.35,e(`--msp-color-brand-2`)),t.addColorStop(.6,e(`--msp-color-brand-3`)),t.addColorStop(1,e(`--msp-color-brand-4`)),d=t,f=e(`--msp-color-text-subtle`),a.style.color=``},m,h=()=>{if(s){if(s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,a.width,a.height),s.setTransform(u,0,0,u,0,0),c)c.draw(s,l,l,t,d,f,1,u);else{s.translate(l,l),s.scale(t,t),s.strokeStyle=d,s.lineWidth=B.stroke(t),s.lineJoin=`miter`,m??=B.paths.map(e=>new Path2D(e));for(let e=0;e<m.length;e++)s.stroke(m[e])}}},g=0,_=!0,v=!1,y=Sn(t=>{if(!_)return;if(v){if(v=!1,p(),c&&(e.assemble?.()??!0)){c.scatter(di),b();return}h(),c&&!c.resting&&b();return}if(!c)return;let n=g?Math.min(.05,(t-g)/1e3):1/60;g=t,c.step(n),h(),c.resting?g=0:b()}),b=()=>y.request(),x=()=>{c&&_&&b()},S,C=e=>(S??=o.getBoundingClientRect(),{u:(e.clientX-S.left)/t-1,v:(e.clientY-S.top)/t-1});return c&&(F(o,`pointerenter`,()=>{S=o.getBoundingClientRect()}),F(o,`pointermove`,e=>{let t=C(e);c.setPointer(t.u,t.v),x()}),F(o,`pointerleave`,()=>{c.clearPointer(),S=void 0,x()}),F(o,`pointerdown`,e=>{let t=C(e);c.shatter(t.u,t.v),x()})),_t(e=>{_=e,e?(v=!0,b()):(y.cancel(),g=0)}),A(()=>{_=!1}),o}var hi=new Map([[`amp`,`&`],[`lt`,`<`],[`gt`,`>`],[`quot`,`"`],[`apos`,`'`],[`nbsp`,`\xA0`],[`ensp`,` `],[`emsp`,` `],[`thinsp`,` `],[`shy`,`­`],[`zwj`,`‍`],[`zwnj`,`‌`],[`ndash`,`–`],[`mdash`,`—`],[`hellip`,`…`],[`lsquo`,`‘`],[`rsquo`,`’`],[`ldquo`,`“`],[`rdquo`,`”`],[`laquo`,`«`],[`raquo`,`»`],[`bull`,`•`],[`middot`,`·`],[`para`,`¶`],[`sect`,`§`],[`dagger`,`†`],[`Dagger`,`‡`],[`prime`,`′`],[`Prime`,`″`],[`iexcl`,`¡`],[`iquest`,`¿`],[`copy`,`©`],[`reg`,`®`],[`trade`,`™`],[`deg`,`°`],[`plusmn`,`±`],[`times`,`×`],[`divide`,`÷`],[`minus`,`−`],[`le`,`≤`],[`ge`,`≥`],[`ne`,`≠`],[`asymp`,`≈`],[`infin`,`∞`],[`micro`,`µ`],[`permil`,`‰`],[`sup1`,`¹`],[`sup2`,`²`],[`sup3`,`³`],[`frac12`,`½`],[`frac14`,`¼`],[`frac34`,`¾`],[`euro`,`€`],[`pound`,`£`],[`yen`,`¥`],[`cent`,`¢`],[`check`,`✓`],[`star`,`☆`],[`larr`,`←`],[`uarr`,`↑`],[`rarr`,`→`],[`darr`,`↓`],[`harr`,`↔`],[`lArr`,`⇐`],[`rArr`,`⇒`],[`hArr`,`⇔`],[`Aring`,`Å`],[`aring`,`å`],[`angst`,`Å`],[`auml`,`ä`],[`ouml`,`ö`],[`uuml`,`ü`],[`Auml`,`Ä`],[`Ouml`,`Ö`],[`Uuml`,`Ü`],[`szlig`,`ß`],[`eacute`,`é`],[`egrave`,`è`],[`aacute`,`á`],[`iacute`,`í`],[`oacute`,`ó`],[`uacute`,`ú`],[`ntilde`,`ñ`],[`ccedil`,`ç`],[`alpha`,`α`],[`beta`,`β`],[`gamma`,`γ`],[`delta`,`δ`],[`epsilon`,`ε`],[`zeta`,`ζ`],[`eta`,`η`],[`theta`,`θ`],[`kappa`,`κ`],[`lambda`,`λ`],[`mu`,`μ`],[`nu`,`ν`],[`xi`,`ξ`],[`pi`,`π`],[`rho`,`ρ`],[`sigma`,`σ`],[`tau`,`τ`],[`phi`,`φ`],[`chi`,`χ`],[`psi`,`ψ`],[`omega`,`ω`],[`Gamma`,`Γ`],[`Delta`,`Δ`],[`Theta`,`Θ`],[`Lambda`,`Λ`],[`Pi`,`Π`],[`Sigma`,`Σ`],[`Phi`,`Φ`],[`Psi`,`Ψ`],[`Omega`,`Ω`]]),gi=/&(?:#(\d{1,7})|#[xX]([0-9a-fA-F]{1,6})|([a-zA-Z][a-zA-Z0-9]{1,31}));/g;function _i(e,t,n,r){if(r!==void 0)return hi.get(r)??e;let i=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return i>0&&i<=1114111&&(i<55296||i>57343)?String.fromCodePoint(i):`�`}function vi(e){return e.includes(`&`)?e.replace(gi,_i):e}var yi={markdown:`msp-markdown-markdown`,media:`msp-markdown-media`,table:`msp-markdown-table`};I(`components/markdown/markdown.module.css`,`@layer msp.components {
.msp-markdown-markdown {
  gap: var(--msp-space-3);
  line-height: 1.5;
  display: grid;

  & h3, & h4, & h5, & h6 {
    font-size: var(--msp-font-size-md);
    font-weight: 600;
  }

  & ul, & ol {
    gap: var(--msp-space-1);
    padding-left: var(--msp-space-5);
    display: grid;
  }

  & ul {
    list-style: outside;
  }

  & ol {
    list-style: decimal;
  }

  & code {
    padding: 0 var(--msp-space-1);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    font-size: .92em;
  }

  & pre {
    padding: var(--msp-space-2);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    overflow-x: auto;

    & code {
      background: none;
      padding: 0;
    }
  }

  & hr {
    border: 0;
    border-top: 1px solid var(--msp-color-border);
  }

  & img {
    border-radius: var(--msp-radius-sm);
    max-width: 100%;
  }

  & a {
    color: var(--msp-color-accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.msp-markdown-media {
  display: grid;

  & audio {
    width: 100%;
    height: 32px;
  }
}

.msp-markdown-table {
  overflow-x: auto;

  & table {
    border-collapse: collapse;
    font-variant-numeric: tabular-nums;
  }

  & th, & td {
    padding: var(--msp-space-1) var(--msp-space-2);
    border-bottom: 1px solid var(--msp-color-border);
    text-align: left;
  }

  & th {
    font-weight: 600;
  }
}
}
`);function bi(e){let t=document.createElement(`div`);t.className=yi.markdown;let n={onLink:e.onLink,host:e.host},r=e.host?.media;if(r){let e=document.createElement(`div`);e.className=yi.media,t.appendChild(e);let n=t=>{e.replaceChildren(...t?[t]:[]),e.hidden=!t};pt()?j(r,n):n(r.value)}let i=e.source.split(`
`),a,o;for(let e=0;e<i.length;e++){let r=i[e].trimEnd(),s=/^(#{1,4})\s+(.*)$/.exec(r),c=/^\s*[-*]\s+(.*)$/.exec(r),l=/^\s*\d+\.\s+(.*)$/.exec(r);if(!r.trim())a=o=void 0;else if(/^\s*```/.test(r)){a=o=void 0;let n=[];for(e++;e<i.length&&!/^\s*```/.test(i[e]);e++)n.push(i[e]);let r=document.createElement(`pre`);r.appendChild(Ai(`code`,n.join(`
`))),t.appendChild(r)}else if(Si(i,e))a=o=void 0,e=wi(t,i,e,n)-1;else if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(r))a=o=void 0,t.appendChild(document.createElement(`hr`));else if(s){a=o=void 0;let e=document.createElement(`h${Math.min(6,s[1].length+2)}`);Ei(e,s[2],n),t.appendChild(e)}else if(c||l){o=void 0;let e=c?`UL`:`OL`;(!a||a.tagName!==e)&&(a=document.createElement(c?`ul`:`ol`),t.appendChild(a));let r=document.createElement(`li`);Ei(r,(c??l)[1],n),a.appendChild(r)}else a=void 0,o?o.appendChild(document.createTextNode(` `)):(o=document.createElement(`p`),t.appendChild(o)),Ei(o,r.trim(),n)}return t}var xi=/^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/;function Si(e,t){return e[t].includes(`|`)&&t+1<e.length&&xi.test(e[t+1])&&e[t+1].includes(`-`)}function Ci(e){let t=e.trim();return t.startsWith(`|`)&&(t=t.slice(1)),t.endsWith(`|`)&&!t.endsWith(`\\|`)&&(t=t.slice(0,-1)),t.split(/(?<!\\)\|/).map(e=>e.trim().replace(/\\\|/g,`|`))}function wi(e,t,n,r){let i=Ci(t[n+1]).map(e=>e.startsWith(`:`)&&e.endsWith(`:`)?`center`:e.endsWith(`:`)?`right`:``),a=document.createElement(`table`),o=(e,t,n)=>{let a=document.createElement(`tr`),o=Ci(t);for(let e=0;e<i.length;e++){let t=document.createElement(n);i[e]&&(t.style.textAlign=i[e]),Ei(t,o[e]??``,r),a.appendChild(t)}e.appendChild(a)},s=document.createElement(`thead`);o(s,t[n],`th`),a.appendChild(s);let c=document.createElement(`tbody`),l=n+2;for(;l<t.length&&t[l].trim()&&t[l].includes(`|`);l++)o(c,t[l],`td`);c.childNodes.length&&a.appendChild(c);let u=document.createElement(`div`);return u.className=yi.table,u.appendChild(a),e.appendChild(u),l}var Ti=/\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]+)\]\(([^)\s]+)\)/g;function Ei(e,t,n){let r=0,i=new RegExp(Ti.source,`g`);for(let a=i.exec(t);a;a=i.exec(t))a.index>r&&e.appendChild(document.createTextNode(vi(t.slice(r,a.index)))),a[1]===void 0?a[2]===void 0?a[3]===void 0?a[5]===void 0?e.appendChild(Di(a[7],a[6],n)):e.appendChild(Oi(a[5],vi(a[4]),n)):e.appendChild(Ai(`code`,a[3])):e.appendChild(ki(`em`,a[2],n)):e.appendChild(ki(`strong`,a[1],n)),r=a.index+a[0].length;r<t.length&&e.appendChild(document.createTextNode(vi(t.slice(r))))}function Di(e,t,n){let r=document.createElement(`a`);Ei(r,t,n);let i=n.host?.link?.(e);if(i){r.href=`#`,r.addEventListener(`click`,e=>{e.preventDefault(),i(`click`)});let e=!1;return r.addEventListener(`pointerenter`,()=>{e=!0,i(`enter`)}),r.addEventListener(`pointerleave`,()=>{e=!1,i(`leave`)}),pt()&&A(()=>e&&i(`leave`)),r}let a=/^https?:/i.test(e);return r.href=e.startsWith(`#`)||a?e:`#`,a?(r.target=`_blank`,r.rel=`noopener noreferrer`):r.addEventListener(`click`,t=>{t.preventDefault(),n.onLink?.(e)}),r}function Oi(e,t,n){let r=n.host?.image?.(e,t);if(r instanceof Node)return r;let i=document.createElement(`img`);return i.alt=t,typeof r==`string`?i.src=r:r?(i.hidden=!0,r.then(e=>{e&&(i.src=e,i.hidden=!1)},()=>{})):i.src=e,i}function ki(e,t,n){let r=document.createElement(e);return Ei(r,t,n),r}function Ai(e,t){let n=document.createElement(e);return n.textContent=t,n}function H(e,t){e.data!==t&&(e.data=t)}function U(e,t,n){if(n==null||n===!1){e.hasAttribute(t)&&e.removeAttribute(t);return}let r=n===!0?``:String(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)}function ji(e,t,n){e.classList.toggle(t,n)}function Mi(e,t,n){let r=e.style;n?r.getPropertyValue(t)!==n&&r.setProperty(t,n):r.getPropertyValue(t)&&r.removeProperty(t)}function Ni(e,t){let n=t?``:`none`;e.style.display!==n&&(e.style.display=n)}var Pi=class{#e;#t;#n=new Map;#r=new Map;constructor(e,t=r.getDefaultValues(e),n={}){this.params=e,this.options=n,this.#t=r.getDefaultValues(e),this.#e=O({...this.#t,...t},{compare:Object.is})}get values(){return this.#e.asReadonly}field(e){let t=this.#n.get(e);return t||(t=h(this.#e.asReadonly,t=>t[e]),this.#n.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?h(this.#e.asReadonly,e=>!t.hideIf(e)):h(this.#e.asReadonly,()=>!0)}set(e,t){let n=this.#e.value;if(Object.is(n[e],t))return;let r={...n,[e]:t};this.#e.set(r),this.options.onChange?.(r,e)}load(e){this.#e.set({...this.#t,...e})}reset(){let e=this.#e.value,t={...this.#t};this.#e.set(t);for(let n of Object.keys(this.params))r.isParamEqual(this.params[n],e[n],t[n])||this.options.onChange?.(t,n)}layout(){let e=[],t=[];for(let n of Object.keys(this.params)){let r=this.params[n];r.isHidden||(r.isEssential?e.push(n):t.push(n))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let n=this.#r.get(e);return n||(n=O(t),this.#r.set(e,n)),n}};function Fi(e){let t=t=>{let n={names:[]},r=new Map;for(let i of Object.keys(e)){let a=e[i];if(a.isHidden||a.type===`value`||!!a.isEssential!==t)continue;if(!a.category){n.names.push(i);continue}let o=r.get(a.category);o||(o={category:a.category,names:[]},r.set(a.category,o)),o.names.push(i)}let i=[...r.values()].sort((e,t)=>e.category<t.category?-1:1);return n.names.length?[n,...i]:i};return{essentials:t(!0),advanced:t(!1)}}var Ii={content:`msp-scroll-area-content`,root:`msp-scroll-area-root`,scrollbar:`msp-scroll-area-scrollbar`,thumb:`msp-scroll-area-thumb`,viewport:`msp-scroll-area-viewport`};I(`components/scroll-area/scroll-area.module.css`,`@layer msp.components {
.msp-scroll-area-root {
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
  position: relative;
  overflow: hidden;
}

.msp-scroll-area-root[data-edge] {
  margin-inline-end: calc(-1 * var(--msp-scroll-edge, var(--msp-space-2)));
}

.msp-scroll-area-viewport {
  overscroll-behavior: contain;
  scrollbar-width: none;
  flex: auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .msp-scroll-area-root[data-chain] > & {
    overscroll-behavior: auto;
  }

  .msp-scroll-area-root[data-axis="y"] > & {
    overflow-x: hidden;
  }

  .msp-scroll-area-root[data-axis="x"] > & {
    overflow-y: hidden;
  }

  .msp-scroll-area-root:not([data-axis="x"], [data-no-fade]) > & {
    mask-image: linear-gradient(to bottom,
      transparent,
      #000 var(--msp-fade-top),
      #000 calc(100% - var(--msp-fade-bottom)),
      transparent);
    animation-name: msp-fade-scroll-top, msp-fade-scroll-bottom;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-timeline: scroll(self);
    animation-range: 0 24px, calc(100% - 24px) 100%;
  }
}

.msp-scroll-area-content {
  min-width: 0;

  .msp-scroll-area-root[data-edge] > .msp-scroll-area-viewport > & {
    padding-inline-end: var(--msp-scroll-edge, var(--msp-space-2));
  }

  .msp-scroll-area-root[data-axis="x"] > .msp-scroll-area-viewport > &, .msp-scroll-area-root[data-axis="both"] > .msp-scroll-area-viewport > & {
    width: max-content;
    min-width: 100%;
  }
}

.msp-scroll-area-scrollbar {
  z-index: 1;
  opacity: 0;
  transition: opacity var(--msp-motion-base) var(--msp-ease);
  touch-action: none;
  user-select: none;
  display: flex;
  position: absolute;

  &[data-orientation="vertical"] {
    justify-content: center;
    width: 10px;
    top: 2px;
    bottom: 2px;
    right: 1px;
  }

  &[data-orientation="horizontal"] {
    flex-direction: column;
    justify-content: center;
    height: 10px;
    bottom: 1px;
    left: 2px;
    right: 2px;
  }

  .msp-scroll-area-root:hover > &, .msp-scroll-area-root:focus-within > &, .msp-scroll-area-root[data-scrolling] > &, &[data-dragging] {
    opacity: 1;
  }

  .msp-scroll-area-root[data-edge] > &[data-orientation="vertical"] {
    width: 8px;
    right: 0;
  }

  .msp-scroll-area-root:not([data-overflow-y]) > &[data-orientation="vertical"], .msp-scroll-area-root:not([data-overflow-x]) > &[data-orientation="horizontal"] {
    display: none;
  }
}

.msp-scroll-area-thumb {
  background: color-mix(in oklab, var(--msp-color-text), transparent 72%);
  transition: scale var(--msp-motion-fast) var(--msp-ease);
  border-radius: 3px;
  flex: none;

  [data-orientation="vertical"] > & {
    transform-origin: 100%;
    width: 4px;
  }

  [data-orientation="horizontal"] > & {
    transform-origin: bottom;
    height: 4px;
  }

  .msp-scroll-area-scrollbar:hover > &, [data-dragging] > & {
    background: color-mix(in oklab, var(--msp-color-text), transparent 52%);
  }

  [data-orientation="vertical"]:hover > &, [data-orientation="vertical"][data-dragging] > & {
    scale: 1.5 1;
  }

  [data-orientation="horizontal"]:hover > &, [data-orientation="horizontal"][data-dragging] > & {
    scale: 1 1.5;
  }
}
}
`);var Li=16,Ri=500;function zi(e){let{class:t,contentClass:n,axis:r=`y`,viewportRef:i,edge:a,chain:o,fade:s=!0,children:c,...l}=e,u,d,f,p={},m=()=>{d&&(p.y&&h(p.y,d.clientHeight,d.scrollHeight,d.scrollTop),p.x&&h(p.x,d.clientWidth,d.scrollWidth,d.scrollLeft))},h=(e,t,n,r)=>{let i=n-t>1;if(i!==e.overflows&&(e.overflows=i,u.toggleAttribute(e.axis===`y`?`data-overflow-y`:`data-overflow-x`,i)),!i)return;let a=e.axis===`y`?e.track.clientHeight:e.track.clientWidth,o=Math.max(Li,Math.round(a*t/n));o!==e.size&&(e.size=o,e.axis===`y`?e.thumb.style.height=`${o}px`:e.thumb.style.width=`${o}px`),e.travel=a-o,e.range=n-t;let s=Math.round(e.travel*Math.min(Math.max(r,0),e.range)/e.range);s!==e.offset&&(e.offset=s,e.thumb.style.transform=e.axis===`y`?`translateY(${s}px)`:`translateX(${s}px)`)},g,_=()=>{g=void 0,u.removeAttribute(`data-scrolling`)},v=()=>{m(),g===void 0?u.setAttribute(`data-scrolling`,``):clearTimeout(g),g=setTimeout(_,Ri)},y=(e,t)=>{e.axis===`y`?d.scrollTop=t:d.scrollLeft=t},b=e=>e.axis===`y`?d.scrollTop:d.scrollLeft,x=(e,t)=>e.axis===`y`?t.clientY:t.clientX,S=e=>xn(e.track,{start:t=>{if(t.button===0&&e.overflows){if(t.preventDefault(),t.target!==e.thumb&&e.travel>0){let n=e.track.getBoundingClientRect(),r=x(e,t)-(e.axis===`y`?n.top:n.left)-e.size/2;y(e,Math.min(Math.max(r,0),e.travel)/e.travel*e.range)}return e.track.setAttribute(`data-dragging`,``),{start:x(e,t),scroll:b(e)}}},move:(t,n)=>{e.travel>0&&y(e,n.scroll+(x(e,t)-n.start)/e.travel*e.range)},end:()=>e.track.removeAttribute(`data-dragging`)}),C=e=>{let t=R(`div`,{class:Ii.thumb}),n=R(`div`,{class:Ii.scrollbar,"data-orientation":e===`y`?`vertical`:`horizontal`,"aria-hidden":`true`,onMouseDown:e=>e.preventDefault(),children:t}),r={axis:e,track:n,thumb:t,overflows:!1,size:-1,offset:-1,travel:0,range:0};return S(r),p[e]=r,n};return u=z(`div`,{class:`${Ii.root} ${t??``}`,"data-axis":r,"data-edge":a?``:void 0,"data-chain":o?``:void 0,"data-no-fade":s?void 0:``,children:[R(`div`,{class:Ii.viewport,ref:e=>{d=e,i?.(e)},onScroll:v,children:R(`div`,{...l,class:`${Ii.content} ${n??``}`,ref:e=>{f=e,l.ref?.(e)},children:c})}),r===`x`?null:C(`y`),r===`y`?null:C(`x`)]}),hn(d,m)?.observe(f),A(()=>{g!==void 0&&clearTimeout(g)}),queueMicrotask(m),u}var Bi={button:`msp-select-button`,check:`msp-select-check`,chevron:`msp-select-chevron`,floating:`msp-select-floating`,group:`msp-select-group`,groupBody:`msp-select-groupBody`,groupChevron:`msp-select-groupChevron`,groupHead:`msp-select-groupHead`,label:`msp-select-label`,list:`msp-select-list`,"list-in":`msp-select-list-in`,listContent:`msp-select-listContent`,menuPopover:`msp-select-menuPopover`,option:`msp-select-option`,select:`msp-select-select`};I(`components/select/select.module.css`,`@layer msp.components {
.msp-select-select {
  gap: var(--msp-space-1);
  min-width: 0;
  display: grid;
}

.msp-select-button {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: var(--msp-control-height);
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &[data-size="sm"] {
    height: 24px;
  }

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-select-label {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-select-chevron {
  color: var(--msp-color-text-muted);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-select-list {
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  max-height: 240px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  animation: msp-select-list-in var(--msp-motion-fast) var(--msp-ease);
}

.msp-select-listContent {
  padding: var(--msp-space-1);
  display: grid;
}

@keyframes msp-select-list-in {
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
}

.msp-select-option {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }

  &[aria-selected="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-select-group {
  display: grid;
}

.msp-select-groupHead {
  align-items: center;
  gap: var(--msp-space-1);
  min-height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  text-align: left;
  font-weight: 600;
  display: flex;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }
}

.msp-select-groupChevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-select-groupBody {
  padding-left: var(--msp-space-3);
  display: grid;

  &[hidden] {
    display: none;
  }
}

.msp-select-check {
  visibility: hidden;
  flex: none;

  [aria-selected="true"] > & {
    visibility: visible;
  }
}

.msp-select-floating {
  color: inherit;
  background: none;
  border: 0;
  width: max-content;
  max-width: calc(100vw - 16px);
  margin: 0;
  padding: 0;
  position: fixed;
  inset: auto;
  overflow: visible;

  & .msp-select-option {
    white-space: nowrap;
    min-height: 24px;
  }

  & > .msp-select-list {
    background: var(--msp-color-raised);
    box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
      var(--msp-shadow-overlay);
  }
}

.msp-select-menuPopover {
  min-width: 180px;
  max-height: calc(100vh - 16px);
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-raised);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-overlay);
  font-size: var(--msp-font-size-sm);
  animation: msp-select-list-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  overflow-y: auto;
}
}
`);function Vi(e){let t=O(!1),n=Wi(e.value),r;return z(`span`,{class:`${Bi.select} ${e.class??``}`,ref:e=>{r=e},children:[R(Hi,{label:h(n,t=>e.options.find(e=>e[0]===t)?.[1]??``),open:t,size:e.size,title:e.title,"aria-label":e[`aria-label`]}),R(N,{when:t,children:()=>{let i=R(Ui,{options:e.options,value:n,onPick:n=>{t.set(!1),e.onChange?.(n)},onClose:()=>t.set(!1),floating:e.over,"aria-label":e[`aria-label`]??e.title});return e.over?R(Ki,{anchor:r,children:i}):i}})]})}function Hi(e){return z(`button`,{type:`button`,class:Bi.button,"data-size":e.size??`md`,"aria-haspopup":`listbox`,"aria-expanded":e.open,"aria-label":e[`aria-label`],title:e.title,onClick:()=>e.open.set(!e.open.value),children:[R(`span`,{class:Bi.label,children:e.label}),R(L,{name:`chevron-down`,size:14,class:Bi.chevron})]})}function Ui(e){let t;j(e.value,e=>{t=e});let n=new Map,r=()=>[...l.querySelectorAll(`[role="option"], [data-group-head]`)].filter(e=>!e.closest(`[hidden]`)),i=e=>{let t=r();t[Math.max(0,Math.min(t.length-1,e))]?.focus()},a=([t,r])=>{let i=z(`button`,{type:`button`,role:`option`,class:Bi.option,"aria-selected":h(e.value,e=>e===t),onClick:()=>e.onPick(t),children:[R(`span`,{children:r}),R(L,{name:`check`,size:14,class:Bi.check})]});return n.set(t,i),i},o=new Map,s=[];for(let t of e.options)t[2]?o.has(t[2])?o.get(t[2]).push(t):o.set(t[2],[t]):s.push(t);let c=(e,n)=>{let r=O(n.some(e=>e[0]===t));return z(`div`,{class:Bi.group,role:`group`,"aria-label":e,children:[z(`button`,{type:`button`,class:Bi.groupHead,"data-group-head":``,"aria-expanded":r,onClick:()=>r.set(!r.value),children:[R(L,{name:`chevron-right`,size:13,class:Bi.groupChevron}),R(`span`,{children:e})]}),R(`div`,{class:Bi.groupBody,hidden:h(r.asReadonly,e=>!e),children:n.map(a)})]})},l=z(zi,{class:Bi.list,contentClass:Bi.listContent,chain:!e.floating,role:`listbox`,"aria-label":e[`aria-label`],onKeyDown:t=>{let n=r(),a=n.indexOf(fr(l));if(t.key===`ArrowDown`)i(a+1);else if(t.key===`ArrowUp`)i(a-1);else if(t.key===`Home`)i(0);else if(t.key===`End`)i(n.length-1);else if(t.key===`Escape`)e.onClose();else return;t.preventDefault(),t.stopPropagation()},children:[s.map(a),[...o].map(([e,t])=>c(e,t))]});return queueMicrotask(()=>{let e=t===void 0?void 0:n.get(t);e&&!e.closest(`[hidden]`)?e.focus():i(0)}),F(document,`pointerdown`,t=>{let n=ur(t);dr(t,l)||n.closest?.(`[aria-haspopup="listbox"][aria-expanded="true"]`)||e.onClose()},{capture:!0}),l}function Wi(e){if(f(e))return e;let t=gt(e),n=O(t?void 0:e);return t&&vt(t,e=>n.set(e)),n.asReadonly}function Gi(e){let t;return F(document,`keydown`,t=>{t.key!==`Escape`||t.defaultPrevented||(t.preventDefault(),e.onClose(!0))},{capture:!0}),F(document,`pointerdown`,n=>{dr(n,t)||dr(n,e.anchor)||e.onClose()},{capture:!0}),R(Ki,{anchor:e.anchor,align:`end`,children:R(`div`,{class:Bi.menuPopover,role:`menu`,"aria-label":e[`aria-label`],ref:e=>{t=e,_n(()=>e.querySelector(`button:not(:disabled)`)?.focus())},children:e.children})})}function Ki(e){let t=R(`div`,{class:Bi.floating,"attr:popover":`manual`,children:e.children}),n=-1,r=()=>{let r=e.anchor.getBoundingClientRect();r.width!==n&&(n=r.width,t.style.minWidth=`${r.width}px`);let i=t.offsetHeight,a=t.offsetWidth,o=window.innerHeight-r.bottom,s=o>=i+8||o>=r.top?r.bottom+2:r.top-i-2,c=e.align===`end`?r.right-a:r.left;t.style.left=`${Math.max(8,Math.min(c,window.innerWidth-8-a))}px`,t.style.top=`${Math.max(4,Math.min(s,window.innerHeight-8-i))}px`};return queueMicrotask(()=>{t.isConnected&&(t.showPopover?.(),r(),(t.querySelector(`[aria-selected="true"]`)??t.querySelector(`[role=option]`))?.focus())}),F(window,`scroll`,e=>{dr(e,t)||r()},{capture:!0}),F(window,`resize`,r),hn(t,()=>{t.isConnected&&r()}),t}var W={afterSelect:`msp-params-params-form-afterSelect`,channels:`msp-params-params-form-channels`,chevron:`msp-params-params-form-chevron`,collapsible:`msp-params-params-form-collapsible`,collapsibleBar:`msp-params-params-form-collapsibleBar`,collapsibleHeader:`msp-params-params-form-collapsibleHeader`,collapsibleMeta:`msp-params-params-form-collapsibleMeta`,color:`msp-params-params-form-color`,control:`msp-params-params-form-control`,count:`msp-params-params-form-count`,fields:`msp-params-params-form-fields`,file:`msp-params-params-form-file`,fileClear:`msp-params-params-form-fileClear`,fileNames:`msp-params-params-form-fileNames`,filePick:`msp-params-params-form-filePick`,form:`msp-params-params-form-form`,input:`msp-params-params-form-input`,item:`msp-params-params-form-item`,itemActions:`msp-params-params-form-itemActions`,itemAdd:`msp-params-params-form-itemAdd`,itemForm:`msp-params-params-form-itemForm`,itemLabel:`msp-params-params-form-itemLabel`,itemRow:`msp-params-params-form-itemRow`,items:`msp-params-params-form-items`,knob:`msp-params-params-form-knob`,label:`msp-params-params-form-label`,mapped:`msp-params-params-form-mapped`,nested:`msp-params-params-form-nested`,number:`msp-params-params-form-number`,presets:`msp-params-params-form-presets`,presetsList:`msp-params-params-form-presetsList`,range:`msp-params-params-form-range`,row:`msp-params-params-form-row`,select:`msp-params-params-form-select`,settings:`msp-params-params-form-settings`,slider:`msp-params-params-form-slider`,subSettings:`msp-params-params-form-subSettings`,swatch:`msp-params-params-form-swatch`,switch:`msp-params-params-form-switch`,textarea:`msp-params-params-form-textarea`,unsupported:`msp-params-params-form-unsupported`};I(`components/params/params-form.module.css`,`@layer msp.components {
.msp-params-params-form-form {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-row {
  grid-template-columns: var(--msp-label-width) minmax(0, 1fr);
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 24px;
  display: grid;

  &[hidden] {
    display: none;
  }
}

.msp-params-params-form-label {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;
  overflow: hidden;
}

.msp-params-params-form-control {
  align-items: center;
  min-width: 0;
  display: flex;
}

.msp-params-params-form-input, .msp-params-params-form-number, .msp-params-params-form-textarea {
  width: 100%;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  border: 0;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-params-params-form-textarea {
  height: auto;
  min-height: 56px;
  padding: var(--msp-space-2) var(--msp-space-3);
  resize: vertical;
  font-family: inherit;
  line-height: 1.45;
}

.msp-params-params-form-row:has(.msp-params-params-form-textarea) {
  align-items: start;

  & .msp-params-params-form-label {
    padding-top: var(--msp-space-2);
  }
}

.msp-params-params-form-select {
  width: 100%;
}

.msp-params-params-form-slider {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 52px;
  width: 100%;
  display: grid;
}

.msp-params-params-form-range {
  --msp-range-fill: color-mix(in oklab, var(--msp-color-text-muted), transparent 45%);
  width: calc(100% - var(--msp-space-3));
  height: 16px;
  margin: 0 0 0 var(--msp-space-3);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-range-fill) var(--msp-progress, 0%),
      var(--msp-color-pressed) var(--msp-progress, 0%));
    border-radius: 1.5px;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    transition: transform var(--msp-motion-fast) var(--msp-ease);
    border-radius: 50%;
    margin-top: -3.5px;
  }

  &:hover::-webkit-slider-thumb, &:active::-webkit-slider-thumb {
    transform: scale(1.25);
  }

  &::-moz-range-track {
    background: var(--msp-color-pressed);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-progress {
    background: var(--msp-range-fill);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-params-params-form-number {
  padding: 0 var(--msp-space-2);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.msp-params-params-form-switch {
  width: 24px;
  height: 14px;
  margin-left: var(--msp-space-3);
  background: var(--msp-color-pressed);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  border-radius: 7px;
  flex: none;
  position: relative;

  &[aria-checked="true"] {
    background: var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-params-params-form-knob {
  background: var(--msp-color-bg);
  width: 10px;
  height: 10px;
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  box-shadow: 0 1px 1px #0000001f;

  [aria-checked="true"] > & {
    transform: translateX(10px);
  }
}

.msp-params-params-form-color {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }
}

.msp-params-params-form-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-params-params-form-channels {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-unsupported {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-params-params-form-mapped, .msp-params-params-form-fields, .msp-params-params-form-nested {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: var(--msp-space-3);
}

.msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(2 * var(--msp-space-3));
}

.msp-params-params-form-nested .msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(3 * var(--msp-space-3));
}

.msp-params-params-form-collapsible {
  display: grid;
}

.msp-params-params-form-collapsibleBar {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-params-form-collapsibleHeader {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  height: 24px;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: auto;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-params-params-form-collapsibleMeta {
  min-width: 0;
  margin-left: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-presets {
  align-items: center;
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-params-form-presetsList {
  margin: var(--msp-space-1) 0;
  display: block;

  & > * {
    animation: none;
  }
}

.msp-params-params-form-settings {
  border-radius: var(--msp-radius-md);
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  place-items: center;
  margin-left: auto;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-afterSelect {
  margin-left: var(--msp-space-1);
  flex: none;
}

.msp-params-params-form-subSettings {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);

  & .msp-params-params-form-label {
    padding-left: var(--msp-space-3);
  }
}

.msp-params-params-form-file {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  width: 100%;
  min-width: 0;
  height: 24px;
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-dragging] {
    background: var(--msp-color-hover);
    outline: 1.5px dashed var(--msp-color-border-strong);
    outline-offset: -1.5px;
  }
}

.msp-params-params-form-filePick {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 100%;
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: 1;
  display: flex;

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
    border-radius: var(--msp-radius-md);
  }
}

.msp-params-params-form-fileNames {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-empty] {
    color: var(--msp-color-text-muted);
  }
}

.msp-params-params-form-fileClear {
  width: 20px;
  height: 20px;
  margin-right: var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-count {
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  flex: 1;
}

.msp-params-params-form-items {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-params-params-form-item {
  display: grid;
}

.msp-params-params-form-itemRow {
  cursor: pointer;
  align-items: center;
  gap: var(--msp-space-1);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  & .msp-params-params-form-settings {
    opacity: 0;
    width: 22px;
    height: 22px;
  }

  &:hover .msp-params-params-form-settings, & .msp-params-params-form-settings:focus-visible, [data-open] > & .msp-params-params-form-settings {
    opacity: 1;
  }
}

.msp-params-params-form-itemLabel {
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-itemForm {
  padding: var(--msp-space-1) 0 var(--msp-space-2);

  & .msp-params-params-form-label {
    padding-left: calc(2 * var(--msp-space-3));
  }
}

.msp-params-params-form-itemActions {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-params-params-form-itemAdd {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}
}
`);var G={check:`msp-params-extra-controls-check`,chevron:`msp-params-extra-controls-chevron`,curve:`msp-params-extra-controls-curve`,field:`msp-params-extra-controls-field`,fieldContent:`msp-params-extra-controls-fieldContent`,graph:`msp-params-extra-controls-graph`,graphArea:`msp-params-extra-controls-graphArea`,graphAt:`msp-params-extra-controls-graphAt`,graphEditor:`msp-params-extra-controls-graphEditor`,graphFoot:`msp-params-extra-controls-graphFoot`,graphHint:`msp-params-extra-controls-graphHint`,grid:`msp-params-extra-controls-grid`,interval:`msp-params-extra-controls-interval`,intervalRange:`msp-params-extra-controls-intervalRange`,intervalTrack:`msp-params-extra-controls-intervalTrack`,intervalValue:`msp-params-extra-controls-intervalValue`,matrix:`msp-params-extra-controls-matrix`,option:`msp-params-extra-controls-option`,options:`msp-params-extra-controls-options`,optionsContent:`msp-params-extra-controls-optionsContent`,point:`msp-params-extra-controls-point`,spark:`msp-params-extra-controls-spark`,strip:`msp-params-extra-controls-strip`,stripName:`msp-params-extra-controls-stripName`,under:`msp-params-extra-controls-under`,vec:`msp-params-extra-controls-vec`};I(`components/params/extra-controls.module.css`,`@layer msp.components {
.msp-params-extra-controls-field {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-extra-controls-fieldContent {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  display: flex;
  overflow: hidden;
}

.msp-params-extra-controls-chevron {
  color: var(--msp-color-text-muted);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-params-extra-controls-under {
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
}

.msp-params-extra-controls-options {
  max-height: 240px;
}

.msp-params-extra-controls-optionsContent {
  display: grid;
}

.msp-params-extra-controls-option {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  & > span:first-child:not(.msp-params-extra-controls-strip) {
    flex: 1;
  }

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }

  &[aria-selected="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-params-extra-controls-check {
  visibility: hidden;
  flex: none;
  margin-left: auto;

  [aria-selected="true"] > & {
    visibility: visible;
  }
}

.msp-params-extra-controls-vec {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-matrix {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid;
}

.msp-params-extra-controls-interval {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 72px;
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-intervalTrack {
  height: 16px;
  margin-left: var(--msp-space-3);
  position: relative;

  &:before {
    content: "";
    background: linear-gradient(90deg,
      var(--msp-color-pressed) var(--msp-from),
      color-mix(in oklab, var(--msp-color-text-muted), transparent 45%) var(--msp-from) var(--msp-to),
      var(--msp-color-pressed) var(--msp-to));
    border-radius: 1.5px;
    height: 3px;
    margin-top: -1.5px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
}

.msp-params-extra-controls-intervalRange {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: none;
  background: none;
  width: 100%;
  margin: 0;
  position: absolute;
  inset: 0;

  &::-webkit-slider-runnable-track {
    background: none;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    pointer-events: auto;
    cursor: pointer;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -3.5px;
  }

  &::-moz-range-track {
    background: none;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    pointer-events: auto;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: none;
  }
}

.msp-params-extra-controls-intervalValue {
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: right;
  line-height: 24px;
}

.msp-params-extra-controls-strip {
  width: 56px;
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-extra-controls-stripName {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-extra-controls-spark {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2px;
  vector-effect: non-scaling-stroke;
  flex: none;
  width: 56px;
  height: 14px;
}

.msp-params-extra-controls-graphEditor {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  display: grid;
}

.msp-params-extra-controls-graph {
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-panel);
  cursor: crosshair;
  touch-action: none;
  width: 100%;
  height: 96px;
  display: block;
}

.msp-params-extra-controls-grid {
  stroke: var(--msp-glass-edge);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-curve {
  fill: none;
  stroke: var(--msp-color-text-muted);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-point {
  fill: var(--msp-color-panel);
  stroke: var(--msp-color-text);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
  cursor: grab;

  &:hover {
    fill: var(--msp-color-accent);
  }
}

.msp-params-extra-controls-graphArea {
  position: relative;
}

.msp-params-extra-controls-graphAt {
  top: var(--msp-space-1);
  right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  position: absolute;
}

.msp-params-extra-controls-graphFoot {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;

  & > .msp-params-extra-controls-graphHint {
    flex: auto;
    min-width: 0;
  }
}

.msp-params-extra-controls-graphHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  margin: 0;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`);function qi(e){let{open:t}=e,n=z(`button`,{type:`button`,class:W.presets,ref:e=>Ji.set(t,e),"aria-label":`${e.label} presets`,"aria-haspopup":`listbox`,onClick:e=>{e.stopPropagation(),t.set(!t.value)},children:[R(L,{name:`swatch-book`,size:12}),`Presets`]});return M([t],()=>U(n,`aria-expanded`,String(t.value))),n}var Ji=new WeakMap;function Yi(e){let{open:t}=e;return R(N,{when:t,children:()=>{let n=e.presets(),r=e.anchor?.()??Ji.get(t),i=R(Ui,{"aria-label":r?.getAttribute(`aria-label`)??`Presets`,options:n.map(([,e],t)=>[String(t),e]),value:h(e.current,e=>e===void 0?void 0:String(e)),onPick:r=>{t.set(!1);let i=n[Number(r)];i&&e.onPick(i[0])},onClose:()=>t.set(!1),floating:!0});return r?R(Ki,{anchor:r,children:i}):R(`div`,{class:W.presetsList,children:i})}})}var Xi=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Zi(e,t,n=!1){let r=e.findIndex(([e])=>n&&e&&typeof e==`object`&&t&&typeof t==`object`?Object.entries(e).every(([e,n])=>Xi(t[e],n)):Xi(e,t));return r<0?void 0:r}function Qi(e){let t=O(!1);return z(Dt,{children:[z(`div`,{class:W.row,children:[R(`span`,{class:W.label,children:e.head}),R(`div`,{class:W.control,children:e.field(t)})]}),R(N,{when:t,reveal:!0,children:()=>R(`div`,{class:G.under,children:e.body(()=>t.set(!1))})})]})}function $i(e){let t=z(`button`,{type:`button`,class:G.field,"aria-label":e.label,onClick:()=>e.open.set(!e.open.value),children:[R(`span`,{class:G.fieldContent,children:e.children}),R(L,{name:`chevron-down`,size:14,class:G.chevron})]});return M([e.open],()=>U(t,`aria-expanded`,String(e.open.value))),t}function ea(e){let{param:t,binding:n}=e,r=document.createTextNode(``);return M([n.value],()=>{let e=n.get(),i=t.options.filter(([t])=>e?.includes(t)).map(([,e])=>e);H(r,i.length?i.join(`, `):t.emptyValue??`None`)}),R(Qi,{head:e.head,field:t=>R($i,{open:t,label:e.label,children:r}),body:()=>{let r=[],i=R(zi,{class:G.options,contentClass:G.optionsContent,role:`listbox`,"aria-multiselectable":`true`,"aria-label":e.label,children:t.options.map(([e,t])=>z(`button`,{type:`button`,role:`option`,class:G.option,ref:e=>r.push(e),onClick:()=>{let t=n.get()??[];n.set(t.includes(e)?t.filter(t=>t!==e):[...t,e])},children:[R(`span`,{children:t}),R(L,{name:`check`,size:14,class:G.check})]}))});return M([n.value],()=>{let e=n.get();for(let n=0;n<r.length;n++)U(r[n],`aria-selected`,String(!!e?.includes(t.options[n][0])))}),i}})}function ta(e){let{binding:t}=e,n=[],r=R(`div`,{class:G.vec,children:[`x`,`y`,`z`].map((r,i)=>R(`input`,{class:W.number,"aria-label":e.label?`${e.label} ${r}`:r,"data-tip":r,ref:e=>n.push(e),onChange:e=>{let n=e.currentTarget,r=Number(n.value),a=[...t.get()??[0,0,0]];Number.isFinite(r)&&(a[i]=r,t.set(a)),n.value=ra(a[i])}}))});return M([t.value],()=>{let e=t.get();for(let t=0;t<n.length;t++)na(n[t],ra(e?.[t]))}),r}function na(e,t){e.value!==t&&(e.value=t)}function ra(e){return e===void 0||!Number.isFinite(e)?``:String(Math.round(e*1e4)/1e4)}function ia(e){let{binding:t}=e,n=e=>{for(let t=0;t<16;t++)if(e[t]!==+(t%5==0))return!1;return!0},r=document.createTextNode(``);return M([t.value],()=>{let e=t.get();H(r,e&&n(e)?`Identity`:`4 × 4 matrix`)}),R(Qi,{head:e.head,field:t=>R($i,{open:t,label:e.label,children:r}),body:()=>{let n=[],r=R(`div`,{class:G.matrix,children:Array.from({length:16},(r,i)=>{let a=i%4*4+Math.floor(i/4);return R(`input`,{class:W.number,"aria-label":`${e.label}, row ${Math.floor(i/4)+1}, column ${i%4+1}`,ref:e=>n.push(e),onChange:e=>{let n=e.currentTarget,r=Number(n.value),i=Array.from(t.get());Number.isFinite(r)&&(i[a]=r,t.set(i)),n.value=ra(i[a])}})})});return M([t.value],()=>{let e=t.get();for(let t=0;t<16;t++)na(n[t],ra(e?.[t%4*4+Math.floor(t/4)]))}),r}})}function aa(e){let{param:t,binding:n}=e,r=t.min??0,i=t.max??1,a=t.step??(i-r)/100,o=e=>`${100*(e-r)/(i-r||1)}%`,s=a<1?Math.min(4,Math.ceil(-Math.log10(a))):0,c=[],l,u=document.createTextNode(``),d=t=>R(`input`,{class:G.intervalRange,type:`range`,min:String(r),max:String(i),step:String(a),"aria-label":`${e.label?`${e.label} `:``}${t===0?`from`:`to`}`,ref:e=>c[t]=e,onInput:e=>{let a=Number(e.currentTarget.value),o=[...n.get()??[r,i]];o[t]=t===0?Math.min(a,o[1]):Math.max(a,o[0]),n.set(o),e.currentTarget.value=String(o[t])}}),f=z(`div`,{class:G.interval,children:[z(`div`,{class:G.intervalTrack,ref:e=>l=e,children:[d(0),d(1)]}),R(`span`,{class:G.intervalValue,children:u})]});return M([n.value],()=>{let e=n.get(),t=e?.[0]??r,a=e?.[1]??i;na(c[0],String(e?.[0]??r)),na(c[1],String(e?.[1]??i)),Mi(l,`--msp-from`,o(t)),Mi(l,`--msp-to`,o(a)),H(u,`${t.toFixed(s)}–${a.toFixed(s)}`)}),f}function oa(e){let t=e?.colors??[];if(!t.length)return`none`;let n=t.map((e,n)=>Array.isArray(e)?{color:yr(e[0]),at:e[1]}:{color:yr(e),at:t.length===1?0:n/(t.length-1)});if(e?.kind===`set`){let e=n.length;return`linear-gradient(90deg, ${n.map((t,n)=>`${t.color} ${100*n/e}% ${100*(n+1)/e}%`).join(`, `)})`}return`linear-gradient(90deg, ${n.map(e=>`${e.color} ${100*e.at}%`).join(`, `)})`}var sa=Object.entries(n);function ca(e){let{param:t,binding:n}=e,r=t.presetKind??`all`,i=sa.filter(([,e])=>r===`all`?!0:r===`set`?e.type===`qualitative`:e.type!==`qualitative`),a=e=>i.find(([,t])=>JSON.stringify(t.list)===JSON.stringify(e?.colors))?.[1].label??`Custom`,o,s=document.createTextNode(``),c=h(n.value,a),l=R(Qi,{head:e.head,field:t=>z($i,{open:t,label:e.label,children:[R(`span`,{class:G.strip,ref:e=>o=e}),R(`span`,{class:G.stripName,children:s})]}),body:t=>{let r=[],a=R(zi,{class:G.options,contentClass:G.optionsContent,role:`listbox`,"aria-label":e.label,children:i.map(([,e])=>{let i={kind:e.type===`qualitative`?`set`:`interpolate`,colors:e.list};return z(`button`,{type:`button`,role:`option`,class:G.option,ref:e=>r.push(e),onClick:()=>{n.set({kind:i.kind,colors:[...i.colors]}),t()},children:[R(`span`,{class:G.strip,style:{background:oa(i)}}),R(`span`,{class:G.stripName,children:e.label}),R(L,{name:`check`,size:14,class:G.check})]})})});return M([c],()=>{for(let e=0;e<r.length;e++)U(r[e],`aria-selected`,String(c.value===i[e][1].label))}),a}});return M([n.value],()=>{Mi(o,`background`,oa(n.get())),H(s,a(n.get()))}),l}function la(t){let{binding:n}=t,r=R(`input`,{class:W.input,"aria-labelledby":t.labelId,placeholder:`https://…`,onChange:t=>n.set(e.Url(t.currentTarget.value))});return M([n.value],()=>na(r,n.get()?.url??``)),r}function ua(e){let{binding:t}=e,n=(e,t,n)=>(e??[]).map(([e,r],i)=>`${i?`L`:`M`}${(e*t).toFixed(1)} ${((1-r)*n).toFixed(1)}`).join(` `),r,i=document.createTextNode(``),a=R(Qi,{head:e.head,field:t=>z($i,{open:t,label:e.label,children:[R(`svg`,{class:G.spark,viewBox:`0 0 56 14`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:R(`path`,{ref:e=>r=e})}),R(`span`,{class:G.stripName,children:i})]}),body:()=>R(da,{param:e.param,binding:t,pathOf:n})});return M([t.value],()=>{let e=t.get();U(r,`d`,n(e,56,14)),H(i,`${e?.length??0} points`)}),a}function da(e){let{binding:t}=e,n=bt(``),r=document.createTextNode(``),i=t.value,a=e.param.getPresets,o=O(!1),s,c=z(`svg`,{class:G.graph,viewBox:`0 0 240 96`,preserveAspectRatio:`none`,children:[[.25,.5,.75].map(e=>R(`line`,{class:G.grid,x1:String(e*240),x2:String(e*240),y1:`0`,y2:`96`})),[.25,.5,.75].map(e=>R(`line`,{class:G.grid,y1:String(e*96),y2:String(e*96),x1:`0`,x2:`240`})),R(`path`,{class:G.curve,ref:e=>s=e}),R(P,{each:h(i,e=>(e??[]).map((e,t)=>t)),children:e=>{let t=h(i,t=>t?.[e]),n=R(`circle`,{class:G.point,r:`4`,"data-index":String(e)});return M([t],()=>{U(n,`cx`,String((t.value?.[0]??0)*240)),U(n,`cy`,String((1-(t.value?.[1]??0))*96))}),n}})]});M([t.value],()=>U(s,`d`,e.pathOf(t.get(),240,96))),M([n],()=>H(r,n.value));let l=e=>{let t=c.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.min(1,Math.max(0,1-(e.clientY-t.top)/t.height));return[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3]};return xn(c,{start(e){let n=e.target;if(n.tagName===`circle`)return Number(n.dataset.index);let r=[...t.get()??[]],i=l(e),a=r.findIndex(([e])=>e>i[0]);r.splice(a<0?r.length:a,0,i),t.set(r)},move(e,n){let r=l(e),i=[...t.get()??[]],a=n>0?i[n-1][0]:0,o=n<i.length-1?i[n+1][0]:1;i[n]=[Math.min(o,Math.max(a,r[0])),r[1]],t.set(i)}}),F(c,`pointermove`,e=>{let t=l(e);n.offer(`${t[0].toFixed(2)}, ${t[1].toFixed(2)}`)}),F(c,`dblclick`,e=>{let n=e.target;if(n.tagName!==`circle`)return;let r=Number(n.dataset.index),i=[...t.get()??[]];i.length<=2||(i.splice(r,1),t.set(i))}),F(c,`pointerleave`,()=>n.offer(``)),z(`div`,{class:G.graphEditor,children:[z(`div`,{class:G.graphArea,children:[c,R(`span`,{class:G.graphAt,children:r})]}),z(`div`,{class:G.graphFoot,children:[R(`p`,{class:G.graphHint,children:`Drag a point · click to add · double-click to remove`}),a?R(qi,{open:o,label:`Curve`}):null]}),a?R(Yi,{open:o,presets:a,current:h(t.value,e=>Zi(a(),e)),onPick:e=>t.set(e)}):null]})}var fa={bar:`msp-params-help-bar`,description:`msp-params-help-description`,ends:`msp-params-help-ends`,entry:`msp-params-help-entry`,help:`msp-params-help-help`,name:`msp-params-help-name`,scale:`msp-params-help-scale`,swatch:`msp-params-help-swatch`,table:`msp-params-help-table`,text:`msp-params-help-text`,toggle:`msp-params-help-toggle`};I(`components/params/help.module.css`,`@layer msp.components {
.msp-params-help-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-help] {
    text-decoration: underline dotted color-mix(in oklab, currentColor, transparent 45%);
    text-underline-offset: 3px;
    cursor: help;
    text-decoration-thickness: 1px;
  }
}

.msp-params-help-toggle {
  width: 16px;
  height: 16px;
  color: var(--msp-color-text-subtle);
  opacity: 0;
  border-radius: 50%;
  flex: none;
  place-items: center;
  display: grid;
  position: relative;

  &:after {
    content: "";
    width: max(24px, var(--msp-touch-target, 0px));
    height: max(24px, var(--msp-touch-target, 0px));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :hover > * > &, :hover > &, &[aria-expanded="true"], &:focus-visible {
    opacity: 1;
  }

  &:hover, &[aria-expanded="true"] {
    color: var(--msp-color-text);
  }
}

.msp-params-help-help {
  gap: var(--msp-space-2);
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  display: grid;
}

.msp-params-help-description {
  color: var(--msp-color-text-muted);
  margin: 0;
  line-height: 1.45;

  & code {
    padding: 0 var(--msp-space-1);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    border-radius: 2px;
    font-size: .95em;
  }
}

.msp-params-help-table {
  gap: var(--msp-space-1) var(--msp-space-3);
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}

.msp-params-help-entry {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-help-swatch {
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-help-name {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-help-scale {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-help-bar {
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
}

.msp-params-help-ends {
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  justify-content: space-between;
  display: flex;
}
}
`);function pa(e,t){let n=e=>e&&(e.description||e.legend)?e:void 0;if(e.help){let r=e.help;return h(t,e=>{try{return n(r(e))}catch{return}},(e,t)=>e?.description===t?.description&&e?.legend===t?.legend)}let r=n({description:e.description,legend:e.legend});return r?O(r).asReadonly:void 0}function ma(e,t,n){if(!t)return{head:R(`span`,{class:fa.text,id:n,"data-tip-overflow":``,children:e}),block:null};let r=O(!1),i=h(t,e=>!!e),a,o=z(Dt,{children:[R(`span`,{class:fa.text,id:n,"data-tip-overflow":``,ref:e=>a=e,onClick:e=>{e.currentTarget.hasAttribute(`data-help`)&&(e.stopPropagation(),r.set(!r.value))},children:e}),R(N,{when:i,children:()=>{let t=R(`button`,{type:`button`,class:fa.toggle,"aria-label":`About ${e}`,title:`About ${e}`,onClick:e=>{e.stopPropagation(),r.set(!r.value)},children:R(L,{name:`circle-help`,size:12})});return M([r],()=>U(t,`aria-expanded`,String(r.value))),t}})]});return M([i],()=>U(a,`data-help`,i.value)),{head:o,block:R(ha,{help:t,open:r})}}function ha(e){return R(N,{when:e.open,reveal:!0,children:()=>R(N,{when:e.help,children:e=>z(`div`,{class:fa.help,children:[e.description?R(`p`,{class:fa.description,children:ga(e.description)}):null,e.legend?R(_a,{legend:e.legend}):null]})})})}function ga(e){return e.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?R(`code`,{children:e.slice(1,-1)}):e)}function _a(e){let{legend:t}=e;return t.kind===`table-legend`?R(`ul`,{class:fa.table,children:t.table.map(([e,t])=>z(`li`,{class:fa.entry,children:[R(`span`,{class:fa.swatch,style:{background:yr(t)}}),R(`span`,{class:fa.name,children:e})]}))}):z(`div`,{class:fa.scale,children:[R(`span`,{class:fa.bar,style:{background:oa({kind:`interpolate`,colors:t.colors})}}),z(`span`,{class:fa.ends,children:[R(`span`,{children:t.minLabel}),R(`span`,{children:t.maxLabel})]})]})}function va(e){let{form:t}=e;return R(`div`,{class:W.form,children:R(ba,{params:t.params,field:e=>({value:t.field(e),get:()=>t.values.value[e],set:n=>t.set(e,n)}),visible:e=>t.params[e].hideIf?t.visible(e):void 0,filter:xa(e.filter),place:{form:t,path:``}})})}function ya(e){return Object.keys(e).some(t=>!e[t].isHidden&&e[t].type!==`value`)}function ba(e){let{params:t,filter:n,place:r}=e,{essentials:i,advanced:a}=Fi(t),o=Sa(n),s=new Map,c=t=>(s.has(t)||s.set(t,e.visible(t)),s.get(t)),l=(e,r)=>{if(!n&&r.some(e=>!c(e)))return e;let i=[];for(let e of r){let t=c(e);t&&i.push(t)}return n&&i.push(n),M(i,()=>{let i=n?.value??``;U(e,`hidden`,!r.some(e=>c(e)?.value!==!1&&Ta(e,t[e],i)))}),e},u=i=>R(Ea,{name:i,param:t[i],binding:e.field(i),visible:c(i),filter:n,place:{form:r.form,path:`${r.path}/${i}`}}),d=(e,t)=>e.flatMap(e=>e.category?[l(R(`div`,{children:R(Xa,{title:e.category,state:r.form.fold(`${r.path}#${t}${e.category}`),force:o,children:()=>e.names.map(u)})}),e.names)]:e.names.map(u));return!i.length||!a.length?R(Dt,{children:d(i.length?i:a,``)}):z(Dt,{children:[d(i,``),l(R(`div`,{children:R(Xa,{title:`Advanced`,state:r.form.fold(`${r.path}#advanced`),force:o,children:()=>d(a,`advanced/`)})}),a.flatMap(e=>e.names))]})}function xa(e){return e&&h(e,e=>e.trim().toLowerCase())}function Sa(e){return e&&h(e,e=>e.length>0)}function Ca(e,n){return n.label||t(e)}function wa(e,t){let n=t.trim().toLowerCase();return Object.keys(e).some(t=>!e[t].isHidden&&Ta(t,e[t],n))}function Ta(e,t,n){return!n||Ca(e,t).toLowerCase().includes(n)||t.description?.toLowerCase().includes(n)?!0:t.type===`group`?Object.keys(t.params).some(e=>Ta(e,t.params[e],n)):t.type===`mapped`&&t.select.options.some(([e])=>{let r=t.map(e);return r.type===`group`?Object.keys(r.params).some(e=>Ta(e,r.params[e],n)):Ta(e,r,n)})}function Ea(e){let{name:t,param:n,binding:r,filter:i,place:a}=e,o=Ca(t,n),s=e.visible,c=[];s&&c.push(s),i&&c.push(i);let l=(...e)=>{let r=R(`div`,{children:e});return c.length&&M(c,()=>U(r,`hidden`,!((s?.value??!0)&&Ta(t,n,i?.value??``)))),r},u=i&&h(i,e=>o.toLowerCase().includes(e)?``:e);if(n.type===`group`)return l(R(La,{label:o,param:n,binding:r,filter:u,force:Sa(i),place:a}));let d=Fn(`msp-field`),{head:f,block:p}=ma(o,pa(n,r.value),d),m=e=>l(e,p);if(n.type===`mapped`)return m(za(n)?R(Ba,{label:o,labelId:d,head:f,description:n.description,param:n,binding:r,place:a}):R(Va,{label:o,head:f,param:n,binding:r,filter:u,force:Sa(i),place:a}));if(n.type===`select`)return m(R(Ia,{label:o,head:f,description:n.description,options:n.options,binding:r}));if(n.type===`color`)return m(R(Da,{label:o,labelId:d,head:f,description:n.description,binding:r}));if(n.type===`multi-select`)return m(R(ea,{head:f,label:o,param:n,binding:r}));if(n.type===`mat4`)return m(R(ia,{head:f,label:o,param:n,binding:r}));if(n.type===`line-graph`)return m(R(ua,{head:f,label:o,param:n,binding:r}));if(n.type===`color-list`)return m(R(ca,{head:f,label:o,param:n,binding:r}));if(n.type===`object-list`)return m(R(Ka,{head:f,label:o,param:n,binding:r}));if(n.type===`conditioned`)return m(R(Ua,{head:f,label:o,param:n,binding:r,place:a}));if(n.type===`script`)return m(R(Ga,{head:f,label:o,binding:r}));if(n.type===`converted`){let s={value:h(r.value,e=>n.fromValue(e)),get:()=>n.fromValue(r.get()),set:e=>r.set(n.toValue(e))};return R(Ea,{name:t,param:{...n.converted,label:n.converted.label??o},binding:s,visible:e.visible,filter:i,place:a})}return n.type===`value`?null:m(z(`div`,{class:W.row,children:[R(`span`,{class:W.label,children:f}),R(`div`,{class:W.control,children:ka(n,r,d,o)})]}))}function Da(e){let{binding:t,labelId:n}=e,r=O(!1),i,a,o=document.createTextNode(``),s=z(Dt,{children:[z(`div`,{class:W.row,children:[R(`span`,{class:W.label,children:e.head??R(`span`,{id:n,children:e.label})}),R(`div`,{class:W.control,children:z(`button`,{type:`button`,class:W.color,"aria-labelledby":`${n} ${n}-value`,ref:e=>a=e,onClick:()=>r.set(!r.value),children:[R(`span`,{class:W.swatch,ref:e=>i=e}),R(`span`,{class:W.channels,id:`${n}-value`,"data-tip-overflow":``,children:o})]})})]}),R(N,{when:r,reveal:!0,children:()=>R(Ar,{value:t.value,onChange:e=>t.set(e)})})]});return M([t.value,r],()=>{let e=t.get();Mi(i,`background`,yr(e)),H(o,br(e)),U(a,`aria-expanded`,String(r.value))}),s}function Oa(t){let{param:n,binding:r,labelId:i}=t,a=n.type===`file-list`,o=O(!1),s=t=>{t.length&&r.set(a?t.map(t=>e.File(t)):e.File(t[0]))},c=R(`input`,{type:`file`,hidden:!0,multiple:a,accept:n.accept,onChange:e=>{s([...e.currentTarget.files??[]]),e.currentTarget.value=``}}),l=h(r.value,e=>(e?Array.isArray(e)?e:[e]:[]).map(e=>e.name)),u,d,f=document.createTextNode(``),p=z(`div`,{class:W.file,ref:e=>u=e,children:[R(`button`,{type:`button`,class:W.filePick,"aria-labelledby":i?`${i} ${i}-value`:void 0,onClick:()=>c.click(),onDragOver:e=>{e.preventDefault(),o.set(!0)},onDragLeave:()=>o.set(!1),onDrop:e=>{e.preventDefault(),e.stopPropagation(),o.set(!1),s([...e.dataTransfer?.files??[]])},children:R(`span`,{class:W.fileNames,id:i?`${i}-value`:void 0,ref:e=>d=e,children:f})}),R(N,{when:h(l,e=>e.length>0),children:()=>R(`button`,{type:`button`,class:W.fileClear,"aria-label":`Clear`,title:`Clear`,onClick:()=>r.set(null),children:R(L,{name:`x`,size:13})})}),c]});return M([l,o],()=>{let e=l.value;U(u,`data-dragging`,o.value),U(d,`data-empty`,e.length===0),H(f,e.length===0?a?`Select files…`:`Select a file…`:e.length===1?e[0]:`${e.length} files · ${e.join(`, `)}`)}),p}function ka(e,t,n,r){switch(e.type){case`boolean`:return R(Ma,{binding:t,labelId:n});case`number`:return R(Na,{param:e,binding:t,labelId:n});case`text`:return R(Aa,{binding:t,labelId:n,placeholder:e.placeholder,multiline:e.multiline});case`file`:case`file-list`:return R(Oa,{param:e,binding:t,labelId:n});case`vec3`:return R(ta,{param:e,binding:t,label:r});case`interval`:return R(aa,{param:e,binding:t,label:r});case`url`:return R(la,{binding:t,labelId:n});default:return R(`span`,{class:W.unsupported,children:e.type})}}function Aa(e){let{binding:t}=e,n=e.multiline?R(`textarea`,{class:W.textarea,rows:3,"aria-labelledby":e.labelId,placeholder:e.placeholder,onChange:e=>t.set(e.currentTarget.value)}):R(`input`,{class:W.input,"aria-labelledby":e.labelId,placeholder:e.placeholder,onChange:e=>t.set(e.currentTarget.value)});return M([t.value],()=>ja(n,t.get())),n}function ja(e,t){let n=t==null?``:String(t);e.value!==n&&(e.value=n)}function Ma(e){let{binding:t}=e,n=R(`button`,{type:`button`,role:`switch`,class:W.switch,"aria-labelledby":e.labelId,onClick:()=>t.set(!t.get()),children:R(`span`,{class:W.knob})});return M([t.value],()=>U(n,`aria-checked`,String(!!t.get()))),n}function Na(e){let{param:t,binding:n,labelId:r}=e;if(t.min===void 0||t.max===void 0){let e=R(`input`,{class:W.input,type:`text`,inputMode:`decimal`,"aria-labelledby":r,onChange:e=>{let r=Fa(e.currentTarget.value);Number.isFinite(r)&&n.set(r),e.currentTarget.value=Pa(Number.isFinite(r)?r:n.get(),t.step)}});return M([n.value],()=>ja(e,Pa(n.get(),t.step))),e}let i=t.min,a=t.max,o=bt(NaN,(e,t)=>Object.is(e,t));vt(o,e=>{Number.isNaN(e)||n.set(e)});let s,c,l=z(`div`,{class:W.slider,children:[R(`input`,{class:W.range,type:`range`,"aria-labelledby":r,min:String(i),max:String(a),step:String(t.step??(a-i)/100),ref:e=>s=e,onInput:e=>o.offer(Number(e.currentTarget.value))}),R(`input`,{class:W.number,"aria-labelledby":r,ref:e=>c=e,onChange:e=>{let r=Fa(e.currentTarget.value),o=Number.isFinite(r)?Math.min(a,Math.max(i,r)):n.get();Number.isFinite(r)&&n.set(o),e.currentTarget.value=Pa(o,t.step)}})]});return M([n.value],()=>{let e=n.get();ja(s,e),Mi(s,`--msp-progress`,`${100*(e-i)/(a-i||1)}%`),ja(c,Pa(e,t.step))}),l}function Pa(e,t){if(!Number.isFinite(e))return``;if(t===void 0)return String(Number(e.toFixed(4)));let n=t<1?Math.min(4,Math.ceil(-Math.log10(t))):0;return e.toFixed(n)}function Fa(e){let t=e.trim().replace(`,`,`.`);return t===``?NaN:Number(t)}function Ia(e){let{options:t,binding:n}=e,r=O(!1),i=h(n.value,e=>String(t.findIndex(t=>t[0]===e))),a=t.map(([,e,t],n)=>[String(n),e,t]),o,s=document.createTextNode(``),c=z(Dt,{children:[z(`div`,{class:W.row,children:[R(`span`,{class:W.label,children:e.head??e.label}),z(`div`,{class:W.control,ref:e=>o=e,children:[R(Hi,{size:`sm`,open:r,"aria-label":e.label,label:s}),e.after]})]}),R(N,{when:r,children:()=>{let s=R(Ui,{options:a,value:i,onPick:e=>{r.set(!1),n.set(t[Number(e)][0])},onClose:()=>r.set(!1),floating:!0,"aria-label":e.label});return o?R(Ki,{anchor:o,children:s}):s}})]});return M([i],()=>H(s,a[Number(i.value)]?.[1]??``)),c}function La(e){let{param:t,binding:n,filter:r,place:i}=e;if(!ya(t.params))return null;let a=t.presets,o=e=>R(Ha,{params:e,binding:n,filter:r,place:i}),s=i.form.fold(`${i.path}#open`,!!t.isExpanded),c=e=>n.set({...n.get()??{},...e}),l=a?h(n.value,e=>Zi(a,e,!0)):void 0;if(t.isFlat)return z(Dt,{children:[a&&l?R(Ra,{label:e.label,presets:a,current:l,onPick:c}):null,o(t.params)]});let u=typeof t.pivot==`string`&&t.params[t.pivot]?t.pivot:void 0;if(u&&(!a||!l)){let{[u]:n,...r}=t.params;return z(Dt,{children:[o({[u]:n}),ya(r)?R(Xa,{title:e.label,state:s,force:e.force,children:()=>o(r)}):null]})}if(!a||!l)return R(Xa,{title:e.label,state:s,force:e.force,children:()=>o(t.params)});let d=O(!1),f=O(!1);return R(Xa,{title:e.label,state:s,force:e.force,openWhen:f.asReadonly,meta:h(l,e=>e===void 0?``:a[e][1]),action:R(qi,{open:d,label:e.label}),below:()=>R(Yi,{open:d,presets:()=>a,current:l,onPick:e=>{c(e),f.set(!0)}}),children:()=>o(t.params)})}function Ra(e){let t=O(!1),n,r=document.createTextNode(``),i=z(Dt,{children:[z(`div`,{class:W.row,children:[R(`span`,{class:W.label,children:`Presets`}),R(`div`,{class:W.control,ref:e=>n=e,children:R(Hi,{size:`sm`,open:t,"aria-label":`${e.label} presets`,label:r})})]}),R(Yi,{open:t,presets:()=>e.presets,current:e.current,onPick:e.onPick,anchor:()=>n})]});return M([e.current],()=>{let t=e.current.value;H(r,t===void 0?`Custom`:e.presets[t][1])}),i}function za(e){let t=e.select.options.map(e=>e[0]).sort();return t.length===2&&t[0]===`off`&&t[1]===`on`}function Ba(e){let{param:t,binding:n,place:r}=e,i=h(n.value,e=>e?.name===`on`),a=r.form.fold(`${r.path}#params`),o=e=>n.set({name:e,params:Ya(t.map(e))}),s={value:i,get:()=>n.get()?.name===`on`,set:e=>{o(e?`on`:`off`),e||a.set(!1)}},c=t.map(`on`),l=c.type===`group`&&ya(c.params),u={value:h(n.value,e=>e?.params),get:()=>n.get()?.params,set:e=>n.set({name:`on`,params:e})};return z(Dt,{children:[z(`div`,{class:W.row,children:[R(`span`,{class:W.label,children:e.head??R(`span`,{id:e.labelId,children:e.label})}),z(`div`,{class:W.control,children:[R(Ma,{binding:s,labelId:e.labelId}),l?R(N,{when:i,children:()=>R(Ja,{open:a.asReadonly,label:`${e.label} settings`,onClick:()=>a.set(!a.value)})}):null]})]}),l?R(N,{when:h([i,a.asReadonly],(e,t)=>e&&t),children:()=>R(`div`,{class:W.subSettings,children:R(Ha,{params:c.params,binding:u,place:{form:r.form,path:`${r.path}:on`}})})}):null]})}function Va(e){let{param:t,binding:n,place:r}=e,i=h(n.value,e=>e?.name),a={value:i,get:()=>n.get()?.name,set:e=>{let r=t.map(e);n.set({name:e,params:Ya(r)})}},o=h(i,e=>{if(e===void 0)return!1;let n=t.map(e);return n.type===`group`&&!n.isFlat&&ya(n.params)}),s=r.form.fold(`${r.path}#params`),c=e.force?h([s.asReadonly,e.force],(e,t)=>e||t):s.asReadonly,l=R(N,{when:o,children:()=>R(Ja,{open:c,label:`${e.label} settings`,extraClass:W.afterSelect,onClick:()=>s.set(!s.value)})});return z(`div`,{class:W.mapped,children:[R(Ia,{label:e.label,head:e.head,options:t.select.options,binding:a,after:l}),R(N,{when:i,children:i=>{let a=t.map(i),o={value:h(n.value,e=>e?.params),get:()=>n.get()?.params,set:e=>n.set({name:i,params:e})},s={form:r.form,path:`${r.path}:${i}`};return a.type===`group`?a.isFlat?R(Ha,{params:a.params,binding:o,filter:e.filter,place:s}):ya(a.params)?R(N,{when:c,reveal:!0,children:()=>R(Ha,{params:a.params,binding:o,filter:e.filter,place:s,nested:!0})}):null:R(Ea,{name:i,param:a,binding:o,filter:e.filter,place:s})}})]})}function Ha(e){let{params:t,binding:n}=e;return R(`div`,{class:e.nested?W.nested:W.fields,children:R(ba,{params:t,field:e=>({value:h(n.value,t=>t?.[e]),get:()=>n.get()?.[e],set:t=>n.set({...n.get(),[e]:t})}),visible:e=>{let r=t[e].hideIf;if(r)return h(n.value,e=>!r(e??{}))},filter:e.filter,place:e.place})})}function Ua(e){let{param:t,binding:n,place:r}=e,i=h(n.value,e=>String(t.conditionForValue(e))),a={value:i,get:()=>String(t.conditionForValue(n.get())),set:e=>n.set(t.conditionedValue(n.get(),e))};return z(`div`,{class:W.mapped,children:[R(Ia,{label:e.label,head:e.head,options:t.select.options,binding:a}),R(N,{when:i,children:e=>R(`div`,{class:W.nested,children:R(Ea,{name:e,param:t.conditionParams[e],binding:n,place:{form:r.form,path:`${r.path}:${e}`}})})})]})}var Wa=[[`mol-script`,`MolScript`],[`pymol`,`PyMOL`],[`vmd`,`VMD`],[`jmol`,`Jmol`]];function Ga(e){let{binding:t}=e,n=e=>({value:h(t.value,t=>t?.[e]??``),get:()=>t.get()?.[e],set:n=>t.set({...t.get(),[e]:n})}),r=n(`expression`),i=Fn(`msp-field`),a,o=z(`div`,{class:W.mapped,children:[R(Ia,{label:e.label,head:e.head,options:Wa,binding:n(`language`)}),R(`div`,{class:W.nested,children:z(`div`,{class:W.row,children:[R(`span`,{class:W.label,id:i,children:`Expression`}),R(`div`,{class:W.control,children:R(`textarea`,{class:W.textarea,"aria-labelledby":i,rows:3,spellcheck:!1,ref:e=>a=e,onChange:e=>r.set(e.currentTarget.value)})})]})})]});return M([r.value],()=>ja(a,r.get())),o}function Ka(e){let{param:t,binding:n}=e,r=t.presets,i=O(!1),a=h(n.value,e=>e??[]),o=(e,t)=>{let r=[...n.get()??[]];r[e]=t,n.set(r)},s=document.createTextNode(``),c=z(Dt,{children:[z(`div`,{class:W.row,children:[R(`span`,{class:W.label,children:e.head}),R(`div`,{class:W.control,children:R(`span`,{class:W.count,children:s})})]}),z(`div`,{class:W.items,children:[R(P,{each:h(a,e=>e.map((e,t)=>t)),children:e=>R(qa,{param:t,binding:n,index:e,replace:o})}),z(`div`,{class:W.itemActions,children:[z(`button`,{type:`button`,class:W.itemAdd,"aria-label":`Add to ${e.label}`,onClick:()=>n.set([...n.get()??[],t.ctor()]),children:[R(L,{name:`plus`,size:13}),`Add`]}),r?R(qi,{open:i,label:e.label}):null]}),r?R(Yi,{open:i,presets:()=>r,current:h(n.value,e=>Zi(r,e)),onPick:e=>n.set(e)}):null]})]});return M([a],()=>{let e=a.value.length;H(s,e===1?`1 item`:`${e} items`)}),c}function qa(e){let{param:t,binding:n,index:r}=e,i=O(!1),a,o,s=document.createTextNode(``),c=z(`div`,{class:W.item,ref:e=>a=e,children:[z(`div`,{class:W.itemRow,onClick:()=>i.set(!i.value),children:[R(`span`,{class:W.itemLabel,children:s}),R(`button`,{type:`button`,class:W.settings,title:`Edit`,"aria-label":`Edit`,ref:e=>o=e,onClick:e=>{e.stopPropagation(),i.set(!i.value)},children:R(L,{name:`sliders-horizontal`,size:14})}),R(`button`,{type:`button`,class:W.settings,title:`Remove`,"aria-label":`Remove`,onClick:e=>{e.stopPropagation(),n.set((n.get()??[]).filter((e,t)=>t!==r))},children:R(L,{name:`x`,size:13})})]}),R(N,{when:i,reveal:!0,children:()=>{let i=new Pi(t.element,n.get()?.[r],{onChange:t=>e.replace(r,t)});return R(`div`,{class:W.itemForm,children:R(va,{form:i})})}})]}),l=h(n.value,e=>e?.[r]===void 0?``:t.getLabel(e[r]));return M([l,i],()=>{H(s,l.value),U(a,`data-open`,i.value),U(o,`aria-expanded`,String(i.value))}),c}function Ja(e){let t=R(`button`,{type:`button`,class:e.extraClass?`${W.settings} ${e.extraClass}`:W.settings,title:e.label,"aria-label":e.label,onClick:e.onClick,children:R(L,{name:`sliders-horizontal`,size:14})});return M([e.open],()=>U(t,`aria-expanded`,String(e.open.value))),t}function Ya(e){if(e.type===`group`){let t={};for(let n of Object.keys(e.params))t[n]=e.params[n].defaultValue;return t}return e.defaultValue}function Xa(e){let t=e.state??O(!!e.open),n=e.openWhen;if(n){let e=n.value;vt(n,n=>{n&&!e&&t.set(!0),e=n})}let r=e.force?h([t.asReadonly,e.force],(e,t)=>e||t):t.asReadonly,i=e.meta,a,o=document.createTextNode(``),s=z(`div`,{class:W.collapsible,children:[z(`div`,{class:W.collapsibleBar,children:[z(`button`,{type:`button`,class:W.collapsibleHeader,ref:e=>a=e,onClick:()=>t.set(!t.value),children:[e.title,R(L,{name:`chevron-right`,size:12,class:W.chevron}),i?R(`span`,{class:W.collapsibleMeta,children:o}):null]}),e.action]}),e.below?.(),R(N,{when:r,reveal:!0,children:()=>R(`div`,{class:W.nested,children:e.children()})})]});return M(i?[r,i]:[r],()=>{U(a,`aria-expanded`,String(r.value)),i&&H(o,i.value)}),s}var Za={input:`msp-text-input-input`};I(`components/text-input/text-input.module.css`,`@layer msp.components {
.msp-text-input-input {
  min-width: 0;
  height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-sm);
  border: 0;
  margin: 0;

  &[data-size="sm"] {
    height: 24px;
  }

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}
}
`);function Qa(e){return R(`input`,{type:e.type??`text`,class:`${Za.input} ${e.class??``}`,"data-size":e.size??`md`,value:e.value,placeholder:e.placeholder,"aria-label":e[`aria-label`],onInput:t=>e.onInput?.(t.currentTarget.value),onKeyDown:t=>{let n=t.currentTarget;t.key===`Enter`?e.onSubmit?.(n.value):t.key===`Escape`&&e.search&&n.value&&(n.value=``,e.onInput?.(``),t.preventDefault(),t.stopPropagation())}})}var $a={content:`msp-virtual-list-content`,enter:`msp-virtual-list-enter`,glide:`msp-virtual-list-glide`,list:`msp-virtual-list-list`,row:`msp-virtual-list-row`,window:`msp-virtual-list-window`};I(`components/virtual-list/virtual-list.module.css`,`@layer msp.components {
.msp-virtual-list-list {
  flex: 1 1 0;
}

.msp-virtual-list-content {
  contain: strict;
  background-image: linear-gradient(to bottom,
    transparent 38%,
    color-mix(in srgb, var(--msp-color-text) 7%, transparent) 38%,
    color-mix(in srgb, var(--msp-color-text) 7%, transparent) 62%,
    transparent 62%);
  background-size: calc(100% - 2 * var(--msp-space-6)) var(--msp-virtual-row, 26px);
  background-repeat: repeat-y;
  background-position: var(--msp-space-6) 0;
  width: 100%;
  position: relative;
}

.msp-virtual-list-content[data-revealing] {
  background-image: none;
}

.msp-virtual-list-window {
  will-change: transform;
  background-color: var(--msp-surface, var(--msp-color-panel));
  position: absolute;
  inset: 0 0 auto;
}

.msp-virtual-list-row {
  contain: layout style;
  background-color: var(--msp-surface, var(--msp-color-panel));
  position: absolute;
  inset: 0 0 auto;
}

.msp-virtual-list-glide {
  z-index: 1;
  transition: transform var(--msp-motion-base) var(--msp-ease-reveal);
}

.msp-virtual-list-enter {
  animation: msp-reveal-fade var(--msp-motion-base) var(--msp-ease-reveal);
}

.msp-virtual-list-list[data-edge] .msp-virtual-list-window, .msp-virtual-list-list[data-edge] .msp-virtual-list-row {
  right: var(--msp-scroll-edge, var(--msp-space-2));
}
}
`);function eo(e,t,n,r){let i=Math.ceil(2*e/t);return Math.max(r,Math.min(i,3*Math.max(1,n)))}function to(e,t,n){let r=t.length-e.length;if(r<=0||e.length===0)return;let i=0;for(;i<e.length&&n(e[i])===n(t[i]);)i++;for(let a=i;a<e.length;a++)if(n(e[a])!==n(t[a+r]))return;return{at:i,count:r}}function no(e){let t=e.overscan??8,n=bt(0),r=O(0),i=O(e.rowHeight),a,o=()=>{if(!a)return;let e=a.scrollTop,t=a.clientHeight;n.offer(e),t!==r.value&&r.set(t)},s=e=>e||800,c=O({first:0,last:0}),l=[],u=0,d=-1/0,f=()=>{d=performance.now()},p,m=e=>{let a=l.length,o=i.value,f=n.value,p=Math.min(a,Math.floor(f/o)),m=Math.min(a,Math.ceil((f+s(r.value))/o)),h=m-p,g=f>=u,_=performance.now()-d<200?Math.abs(f-u):0;u=f;let{first:v,last:y}=c.value,b=eo(_,o,h,Math.max(t,Math.ceil(h/2))),x=v<=Math.max(0,p-(g?t:b))&&y>=Math.min(a,m+(g?b:t))&&y<=a,S,C;if(e)S=p-h,C=m+h;else if(x)return;else if(m<=v||p>=y){let e=eo(_,o,h,2);S=p-(g?2:e),C=m+(g?e:2)}else{let e=eo(_,o,h,Math.max(t,h));S=p-(g?t:e),C=m+(g?e:t)}S=Math.max(0,S),C=Math.min(a,C),(S!==v||C!==y)&&c.set({first:S,last:C})},g=()=>{b(),m(!1),p!==void 0&&clearTimeout(p),p=setTimeout(()=>{p=void 0,m(!0)},120)},_=new Set,v=[],y;function b(){if(y!==void 0){clearTimeout(y),y=void 0,_.clear();for(let e of v)e.removeAttribute(`data-reveal`);v.length=0}}let x=t=>e.itemKey(t),C=[],w=t=>{if(!e.reveal||t===C)return;let n=to(C,t,x);if(C=t,n){b();for(let e=n.at;e<n.at+n.count;e++)_.add(x(t[e]));y=setTimeout(b,240)}};A(()=>{p!==void 0&&clearTimeout(p),b()}),j(h([e.items,r.asReadonly,i.asReadonly],(e,t,n)=>({list:e,h:t,rh:n})),({list:e})=>{l=e,m(!0)}),j(n,g);let T=h([e.items,c.asReadonly,i.asReadonly],(e,t,n)=>(w(e),{items:e,first:Math.min(t.first,e.length),last:Math.min(t.last,e.length),rh:n}),(e,t)=>e.items===t.items&&e.first===t.first&&e.last===t.last&&e.rh===t.rh),ee=h(T,e=>e.items.slice(e.first,e.last));return e.ref?.({scrollToIndex(e){let t=i.value,o=s(r.value),c=e*t,l=n.value;c<l?l=c:c+t>l+o&&(l=c+t-o),l!==n.value&&(u=l,a&&(a.scrollTop=l),n.offer(l)),S(),ct()}}),R(zi,{class:`${$a.list} ${e.class??``}`,contentClass:$a.content,edge:e.edge,fade:!1,viewportRef:e=>{a=e,F(e,`scroll`,o,{passive:!0}),F(e,`wheel`,f,{passive:!0}),F(e,`touchmove`,f,{passive:!0}),hn(e,o),queueMicrotask(o)},role:e.role,"aria-label":e[`aria-label`],ref:t=>e.contentRef?.(t),style:{height:h([e.items,i.asReadonly],(e,t)=>`${e.length*t}px`),"--msp-virtual-row":h(i.asReadonly,e=>`${e}px`)},children:R(`div`,{class:$a.window,style:{transform:h(T,e=>`translateY(${e.first*e.rh}px)`)},ref:e=>{hn(e,t=>{let n=t[t.length-1].contentRect.height,r=e.childElementCount;if(r<=0||n<=0||y!==void 0)return;let a=n/r;Math.abs(a-i.value)>.5&&i.set(a)})},children:R(P,{each:ee,by:e.itemKey,children:t=>{let n=e.children(t);return _.size&&n instanceof Element&&_.has(x(t))&&(n.setAttribute(`data-reveal`,``),v.push(n)),n}})})})}function ro(e,t,n){let r=[],i=(e,a)=>{for(let o=0;o<e.length;o++){let s=e[o];r.push({node:s,depth:a,posinset:o+1,setsize:e.length});let c=t(s);c?.length&&n(s)&&i(c,a+1)}};return i(e,0),r}function io(e,t){let n=new Map;return r=>{let i=new Map,a=r.map(r=>{let a=e(r),o=n.get(a),s=o!==void 0&&t(o,r)?o:r;return i.set(a,s),s});return n=i,a}}var ao={settles:0,moved:0,lastMs:0};function oo(e){let t=k(`RecycledList`),n=e.overscan??8,r=bt(0),i=O(0),a=O(e.rowHeight),o,s=()=>{if(!o)return;let e=o.scrollTop,t=o.clientHeight;r.offer(e),t!==i.value&&i.set(t)},c=e=>e||800,l=O({first:0,last:0}),u=[],d=0,f=-1/0,p=()=>{f=performance.now()},m,g=e=>{let t=u.length,o=a.value,s=r.value,p=Math.min(t,Math.floor(s/o)),m=Math.min(t,Math.ceil((s+c(i.value))/o)),h=m-p,g=s>=d,_=performance.now()-f<200?Math.abs(s-d):0;d=s;let{first:v,last:y}=l.value,b=eo(_,o,h,Math.max(n,Math.ceil(h/2))),x=v<=Math.max(0,p-(g?n:b))&&y>=Math.min(t,m+(g?b:n))&&y<=t,S,C;if(e)S=p-h,C=m+h;else if(x)return;else if(m<=v||p>=y){let e=eo(_,o,h,2);S=p-(g?2:e),C=m+(g?e:2)}else{let e=eo(_,o,h,Math.max(n,h));S=p-(g?n:e),C=m+(g?e:n)}S=Math.max(0,S),C=Math.min(t,C),(S!==v||C!==y)&&l.set({first:S,last:C})},_=()=>{b(),g(!1),m!==void 0&&clearTimeout(m),m=setTimeout(()=>{m=void 0,g(!0),me()},120)},v=[],y;function b(){if(y!==void 0){clearTimeout(y),y=void 0;for(let e of v)e.classList.remove($a.glide,$a.enter);v.length=0,C?.removeAttribute(`data-revealing`)}}let x=!1;A(()=>{m!==void 0&&clearTimeout(m),b()}),j(h([e.items,i.asReadonly,a.asReadonly],(e,t,n)=>({list:e,h:t,rh:n})),({list:e})=>{u=e,g(!0)}),j(r,_);let C,w=new Map,T=[],ee=t=>!!e.slot&&(!e.recycle||e.recycle(t)),E,te=hn(void 0,e=>{let t=e[e.length-1].contentRect.height;t>0&&Math.abs(t-a.value)>.5&&a.set(t)}),ne=e=>{!E&&te&&(E=e,te.observe(e))},D=()=>{let e=document.createElement(`div`);return e.className=$a.row,e},re=()=>{let n=mt(t.child(),()=>e.slot()),r=D();return r.append(n.el),C.append(r),ne(r),{el:r,view:n,shown:!0}},ie=(n,r)=>{let i=t.child(),a=D();return mt(i,()=>kt(a,e.children?.(r),null)),C.append(a),ne(a),{key:n,item:r,el:a,y:NaN,scope:i}},ae=e=>{e.scope.dispose(),e.el.remove(),E===e.el&&(te?.unobserve(e.el),E=void 0)},oe=(e,t,n)=>{let r=t*n;e.y!==r&&(x&&(e.el.classList.add(Number.isNaN(e.y)?$a.enter:$a.glide),v.push(e.el)),e.y=r,e.el.style.transform=`translateY(${r}px)`)},se=(t,n,r)=>{let i=u[n],a=e.itemKey(i);if(t.has(a))return!0;let o;if(ee(i)){let e=T.pop();if(e)e.shown||(e.shown=!0,e.el.hidden=!1);else{if(!un())return!1;e=re()}e.view.show(i),o={key:a,item:i,el:e.el,y:NaN,slot:e}}else{if(!un())return!1;o=ie(a,i)}return t.set(a,o),oe(o,n,r),!0},ce=!1,le=!1,ue=(n,a,o)=>{if(!C)return;let s=new Map;for(let t=n;t<a;t++){let n=u[t],r=e.itemKey(n);if(s.has(r)){le||(le=!0,console.warn(`VirtualList: duplicate key; later items with the same key are not rendered.`,r));continue}let i=w.get(r);if(i){if(i.item!==n){if(i.slot&&ee(n))i.item=n,i.slot.view.show(n);else continue}s.set(r,i),oe(i,t,o)}}let l=T.length;for(let[e,t]of w)s.get(e)!==t&&(t.slot?T.push(t.slot):ae(t));w=s;let d=r.value,f=Math.max(n,Math.min(a,Math.floor(d/o))),p=Math.max(f,Math.min(a,Math.ceil((d+c(i.value))/o))),m=!1;for(let e=f;e<p&&!m;e++)se(s,e,o)||(m=!0);for(let e=n;e<f&&!m;e++)se(s,e,o)||(m=!0);for(let e=p;e<a&&!m;e++)se(s,e,o)||(m=!0);for(let e=T.length-1;e>=l;e--){let t=T[e];t.shown&&(t.shown=!1,t.view.show(void 0),t.el.hidden=!0)}m&&!ce&&(ce=!0,dn(()=>{ce=!1,!t.disposed&&t.active&&ue(de.first,de.last,de.rh)}))},de={first:0,last:0,rh:e.rowHeight},fe=[],pe=h([e.items,l.asReadonly,a.asReadonly],(e,t,n)=>({list:e,first:Math.min(t.first,e.length),last:Math.min(t.last,e.length),rh:n}),(e,t)=>e.list===t.list&&e.first===t.first&&e.last===t.last&&e.rh===t.rh);A(()=>{for(let e of w.values())e.slot||e.scope.dispose();w.clear()});let me=()=>{if(!C)return;let e=performance.now(),t=[...w.values()].sort((e,t)=>e.y-t.y),n=new Set;for(let e of t)n.add(e.el);let r=C.getRootNode().activeElement,i,a=C.firstChild,o=0;for(let e of t){for(;a&&!n.has(a);)a=a.nextSibling;e.el===a?a=a.nextSibling:(r&&!i&&e.el.contains(r)&&(i=r),C.insertBefore(e.el,a),o++)}i?.focus({preventScroll:!0}),ao.settles++,ao.moved+=o,ao.lastMs=performance.now()-e};return e.ref?.({scrollToIndex(e){let t=a.value,n=c(i.value),s=e*t,l=r.value;s<l?l=s:s+t>l+n&&(l=s+t-n),l!==r.value&&(d=l,o&&(o.scrollTop=l),r.offer(l)),S(),ct()}}),R(zi,{class:`${$a.list} ${e.class??``}`,contentClass:$a.content,edge:e.edge,fade:!1,viewportRef:e=>{o=e,F(e,`scroll`,s,{passive:!0}),F(e,`wheel`,p,{passive:!0}),F(e,`touchmove`,p,{passive:!0}),hn(e,s),queueMicrotask(s)},role:e.role,"aria-label":e[`aria-label`],ref:t=>{C=t,e.contentRef?.(t),j(pe,t=>{let n=e.reveal&&t.list!==fe?to(fe,t.list,e.itemKey):void 0;fe=t.list,u=t.list,de=t,n&&(b(),x=!0,C?.setAttribute(`data-revealing`,``),y=setTimeout(b,240)),ue(t.first,t.last,t.rh),x=!1})},style:{height:h([e.items,a.asReadonly],(e,t)=>`${e.length*t}px`),"--msp-virtual-row":h(a.asReadonly,e=>`${e}px`)}})}var so={body:`msp-canvas-hover-label-body`,code:`msp-canvas-hover-label-code`,corner:`msp-canvas-hover-label-corner`,item:`msp-canvas-hover-label-item`,label:`msp-canvas-hover-label-label`,link:`msp-canvas-hover-label-link`,out:`msp-canvas-hover-label-out`,primary:`msp-canvas-hover-label-primary`,secondary:`msp-canvas-hover-label-secondary`};I(`views/canvas/hover-label.module.css`,`@layer msp.components {
.msp-canvas-hover-label-label {
  z-index: var(--msp-z-tooltip);
  max-width: 280px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-lg);
  font-size: var(--msp-font-size-sm);
  pointer-events: none;
  will-change: transform;
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  transition: none;
  position: absolute;
  top: 0;
  left: 0;
}

.msp-canvas-hover-label-body {
  --cap: var(--msp-hover-label-height, 16rem);
  max-height: var(--cap);
  overflow-wrap: anywhere;
  mask-image: linear-gradient(to bottom, #000 calc(var(--cap) - 2.5em), transparent var(--cap));
  gap: 1px;
  display: grid;
  overflow: hidden;
}

.msp-canvas-hover-label-out {
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--msp-motion-fast) ease-out,
    visibility 0s var(--msp-motion-fast);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}

.msp-canvas-hover-label-corner {
  top: auto;
  left: auto;
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge, var(--msp-space-3)));
  bottom: calc(var(--msp-canvas-edge, var(--msp-space-3)) + var(--msp-corner-room, 0px));
  will-change: auto;
}

.msp-canvas-hover-label-primary {
  font-weight: 600;
}

.msp-canvas-hover-label-secondary {
  color: var(--msp-color-text-muted);
}

.msp-canvas-hover-label-item {
  text-indent: -1em;
  padding-inline-start: 1em;
}

.msp-canvas-hover-label-link {
  color: var(--msp-color-accent);
  text-decoration: underline;
}

.msp-canvas-hover-label-code {
  font-family: var(--msp-font-mono, ui-monospace, monospace);
  font-size: .95em;
}
}
`);var co=14;function lo(e,t){let n=document.createElement(`span`);if(typeof e==`string`)return n.className=t===0?so.primary:so.secondary,n.textContent=e,n;n.className=e.role===`title`?so.primary:e.role===`item`?`${so.secondary} ${so.item}`:so.secondary;for(let t of e.runs)n.append(uo(t));return n}function uo(e){let t=document.createTextNode(e.text),n=(e,n)=>{let r=document.createElement(e);n&&(r.className=n),r.append(t),t=r};return e.code&&n(`code`,so.code),e.sub&&n(`sub`),e.sup&&n(`sup`),e.small&&n(`small`),e.italic&&n(`em`),e.bold&&n(`strong`),e.link&&n(`span`,so.link),t}function fo(e){let t=(e.placement??`corner`)===`corner`,n=R(`div`,{class:so.body}),r=R(`div`,{class:`${so.label} ${so.out}${t?` ${so.corner}`:``}`,role:`tooltip`,"aria-hidden":`true`,children:n}),i=O([]),a=Sn(()=>i.set([]));j(e.model.lines,e=>{e.length?(a.cancel(),i.set(e)):i.value.length&&a.request()});let o=0,s=0,c=!1,l=!1,u=!1,d=!1,f=e=>{d!==e&&(d=e,r.classList.toggle(so.out,!e),e?r.removeAttribute(`aria-hidden`):r.setAttribute(`aria-hidden`,`true`))},p=()=>c&&!l&&u,m=()=>{p()?(g.cancel(),t?f(!0):_.request()):l||!u?(g.cancel(),f(!1)):d&&g.request()},h=()=>{if(!p())return;let e=r.offsetParent;if(e){let t=e.getBoundingClientRect(),n=o-t.left,i=s-t.top,a=r.offsetWidth,c=r.offsetHeight,l=n+co+a>e.clientWidth?n-co-a:n+co,u=i+co+c>e.clientHeight?i-co-c:i+co;r.style.transform=`translate(${Math.max(0,l)}px, ${Math.max(0,u)}px)`}f(!0)},g=Sn(()=>{p()||f(!1)}),_=Sn(h);j(i.asReadonly,e=>{e.length&&n.replaceChildren(...e.map(lo)),u=e.length>0,m()});let v=k(`HoverLabel`);return queueMicrotask(()=>{if(v.disposed)return;let t=e.area();if(!t)return;let n=e.over;mt(v,()=>{F(t,`pointermove`,e=>{o=e.clientX,s=e.clientY,c=!n||n(e.target),l=e.buttons!==0,m()}),F(t,`pointerleave`,()=>{c=!1,m()})})}),r}var K={bar:`msp-canvas-playback-bar`,bare:`msp-canvas-playback-bare`,card:`msp-canvas-playback-card`,counter:`msp-canvas-playback-counter`,deck:`msp-canvas-playback-deck`,description:`msp-canvas-playback-description`,descriptionContent:`msp-canvas-playback-descriptionContent`,dot:`msp-canvas-playback-dot`,dots:`msp-canvas-playback-dots`,lead:`msp-canvas-playback-lead`,list:`msp-canvas-playback-list`,listIndex:`msp-canvas-playback-listIndex`,listRow:`msp-canvas-playback-listRow`,listRows:`msp-canvas-playback-listRows`,listRowsContent:`msp-canvas-playback-listRowsContent`,plain:`msp-canvas-playback-plain`,position:`msp-canvas-playback-position`,rowTitle:`msp-canvas-playback-rowTitle`,scrubber:`msp-canvas-playback-scrubber`,snapshots:`msp-canvas-playback-snapshots`,time:`msp-canvas-playback-time`,title:`msp-canvas-playback-title`,trajectoryLabel:`msp-canvas-playback-trajectoryLabel`};I(`views/canvas/playback.module.css`,`@layer msp.components {
.msp-canvas-playback-card {
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
}

.msp-canvas-playback-deck {
  width: fit-content;
  max-width: 100%;
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  grid-template-columns: minmax(0, 1fr);
  justify-self: start;
  display: grid;
  overflow: clip;

  &:not(:has([data-row])) {
    display: none;
  }

  & [data-row] {
    box-shadow: 0 -1px 0 var(--msp-color-border);
  }

  & .msp-canvas-playback-bar {
    height: 32px;
    padding: 0 var(--msp-space-1);
    gap: 0;
  }

  & :is(.msp-canvas-playback-rowTitle, .msp-canvas-playback-trajectoryLabel) {
    max-width: 168px;
    padding: 0 var(--msp-space-2);
    flex: 0 auto;
    font-weight: 500;
  }

  & :is(.msp-canvas-playback-rowTitle, .msp-canvas-playback-position) {
    margin-right: auto;
  }

  & :is(.msp-canvas-playback-counter, .msp-canvas-playback-position, .msp-canvas-playback-time) {
    font-size: var(--msp-font-size-xs);
  }

  & .msp-canvas-playback-counter {
    min-width: 36px;
  }

  & .msp-canvas-playback-time {
    min-width: 56px;
    padding-right: var(--msp-space-1);
  }

  & .msp-canvas-playback-scrubber {
    flex: 1 0 96px;
  }
}

.msp-canvas-playback-bare {
  min-width: 0;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;

  & > .msp-canvas-playback-snapshots {
    flex: 1 1 0;
  }

  & .msp-canvas-playback-description {
    flex: 1 1 0;
    max-height: none;
  }
}

.msp-canvas-playback-snapshots {
  flex-direction: column;
  min-height: 0;
  display: flex;
}

.msp-canvas-playback-bar {
  align-items: center;
  gap: var(--msp-space-1);
  height: 34px;
  padding: 0 var(--msp-space-2);
  display: flex;

  & button {
    color: var(--msp-color-text-muted);

    &:hover:not(:disabled) {
      color: var(--msp-color-text);
    }

    &[aria-pressed="true"] {
      color: var(--msp-color-accent);
    }
  }

  & svg {
    width: 16px;
    height: 16px;
  }
}

.msp-canvas-playback-lead {
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;
}

.msp-canvas-playback-counter {
  min-width: 44px;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: center;
  color: var(--msp-color-text-muted);
}

.msp-canvas-playback-title {
  min-width: 0;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-description {
  max-height: 40cqh;
}

.msp-canvas-playback-descriptionContent {
  min-width: 0;
  padding: 0 var(--msp-space-4) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
  overflow-wrap: anywhere;
}

.msp-canvas-playback-plain {
  white-space: pre-wrap;
  margin: 0;
  line-height: 1.5;
}

.msp-canvas-playback-scrubber {
  min-width: 40px;
  height: 16px;
  margin: 0 var(--msp-space-2);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;
  flex: 1;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-color-text-muted) var(--msp-progress, 0%),
      var(--msp-color-border-strong) var(--msp-progress, 0%));
    border-radius: 1px;
    height: 2px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text);
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -4px;
  }

  &::-moz-range-track {
    background: var(--msp-color-border-strong);
    border-radius: 1px;
    height: 2px;
  }

  &::-moz-range-progress {
    background: var(--msp-color-text-muted);
    border-radius: 1px;
    height: 2px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-canvas-playback-rowTitle {
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

.msp-canvas-playback-time {
  min-width: 64px;
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  text-align: right;
  flex: none;
}

.msp-canvas-playback-trajectoryLabel {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-dots {
  margin-right: var(--msp-space-2);
  align-items: center;
  display: flex;
}

.msp-canvas-playback-dot {
  place-items: center;
  width: 14px;
  height: 24px;
  display: grid;

  &:before {
    content: "";
    background: var(--msp-color-border-strong);
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }

  &:hover:before {
    background: var(--msp-color-text-muted);
  }

  &[aria-selected="true"]:before {
    background: var(--msp-color-text);
  }
}

.msp-canvas-playback-position {
  white-space: nowrap;
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  flex: none;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-canvas-playback-list {
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2) var(--msp-space-2);
  display: grid;
}

.msp-canvas-playback-listRows {
  max-height: 220px;
}

.msp-canvas-playback-listRowsContent {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-canvas-playback-listRow {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: 24px 1fr;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    color: var(--msp-color-text);
    font-weight: 600;
  }
}

.msp-canvas-playback-listIndex {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
}
`);var po=7;function mo(e){return R(N,{when:h(e.model.count,e=>e>0),children:()=>R(`section`,{class:e.bare?K.bare:K.card,"aria-label":`Snapshots`,children:R(So,{model:e.model})})})}function ho(e){return R(`section`,{class:K.deck,"aria-label":`Playback`,children:e.children})}function go(e){return R(N,{when:h(e.model.count,e=>e>1),children:()=>R(Oo,{model:e.model,compact:e.compact})})}function _o(e){let{model:t}=e;return R(N,{when:h(t.count,e=>e>1),children:()=>{let n=O(!1);return z(`div`,{"data-row":!0,children:[z(`div`,{class:K.bar,role:`group`,"aria-label":`Snapshots`,children:[R(`span`,{class:K.lead,children:R(L,{name:`snapshots`,size:16})}),R(`button`,{type:`button`,class:K.position,"aria-expanded":n,"aria-label":h(t.title,e=>e?`Snapshots: ${e}`:`Snapshots`),"data-tip":h(t.title,e=>e??`No snapshot applied`),onClick:()=>n.set(!n.value),children:h([t.index,t.count],(e,t)=>`${e<0?`–`:e+1} / ${t}`)}),R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>t.previous()}),R(ko,{playing:t.isPlaying,title:`Play snapshots`,onClick:()=>t.togglePlay()}),R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>t.next()}),e.actions?.()]}),R(N,{when:n,children:()=>R(Eo,{model:t,onClose:()=>n.set(!1)})})]})}})}function vo(e){return R(sr,{variant:`ghost`,size:`sm`,icon:R(N,{when:e.muted,fallback:()=>R(L,{name:`volume-2`}),children:()=>R(L,{name:`volume-x`})}),title:h(e.muted,e=>e?`Unmute`:`Mute`),pressed:e.muted,onClick:()=>e.onClick()})}function yo(e){return z(`div`,{class:K.bar,role:`group`,"aria-label":`Audio`,"data-row":!0,children:[R(`span`,{class:K.lead,children:R(L,{name:`volume-2`,size:16})}),R(`span`,{class:K.rowTitle,children:`Audio`}),R(vo,{muted:e.muted,onClick:e.onToggleMute})]})}var bo=e=>(e/1e3).toFixed(1);function xo(e){let{model:t}=e;return R(N,{when:h(t.duration,e=>e>0),children:()=>{let e=h([t.time,t.duration],(e,t)=>`${t>0?100*Math.min(e,t)/t:0}%`);return z(`div`,{class:K.bar,role:`group`,"aria-label":`Transition`,"data-row":!0,children:[R(`span`,{class:K.lead,children:R(L,{name:`film`,size:16})}),R(`input`,{class:K.scrubber,type:`range`,min:`0`,max:h(t.duration,String),step:h(t.step,e=>String(Math.max(1,Math.round(e)))),value:h(t.time,e=>String(Math.round(e))),style:{"--msp-progress":e},"aria-label":`Transition time`,onInput:e=>t.seek(Number(e.currentTarget.value))}),R(`span`,{class:K.time,children:h([t.time,t.duration],(e,t)=>`${bo(e)} / ${bo(t)} s`)}),R(sr,{variant:`ghost`,size:`sm`,icon:R(N,{when:t.isPlaying,fallback:()=>R(L,{name:`play`}),children:()=>R(L,{name:`square`})}),title:h(t.isPlaying,e=>e?`Stop the transition`:`Play the transition`),onClick:()=>t.togglePlay()})]})}})}function So(e){let{model:t}=e,n=O(!1),r=h(t.count,e=>e>po),i=O(void 0),a,o=yn(()=>i.set(a));return vt(h([t.description,t.title],(e,t)=>e&&Co(e,t??``)),e=>{a=e,o.start(0)}),z(`div`,{class:K.snapshots,children:[z(`div`,{class:K.bar,children:[R(`span`,{class:K.title,children:t.title}),R(N,{when:h(t.count,e=>e>1),children:()=>z(Dt,{children:[R(N,{when:r,fallback:()=>R(To,{model:t}),children:()=>R(`button`,{type:`button`,class:K.position,"aria-expanded":n,"aria-label":`Snapshots`,onClick:()=>n.set(!n.value),children:h([t.index,t.count],(e,t)=>`${e+1} / ${t}`)})}),R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`chevron-left`}),title:`Previous snapshot`,onClick:()=>t.previous()}),R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`chevron-right`}),title:`Next snapshot`,onClick:()=>t.next()}),R(ko,{playing:t.isPlaying,title:`Play snapshots`,onClick:()=>t.togglePlay()})]})})]}),R(N,{when:n,children:()=>R(Eo,{model:t,onClose:()=>n.set(!1)})}),R(N,{when:i.asReadonly,children:e=>R(zi,{class:K.description,contentClass:K.descriptionContent,children:R(N,{when:t.plainText??!1,fallback:()=>R(bi,{source:e,onLink:e=>t.openLink(e),host:t.markdown}),children:()=>R(`p`,{class:K.plain,children:e})})})})]})}function Co(e,t){let n=/^\s*#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n|$)/.exec(e);if(!n)return e;let r=wo(n[1]),i=wo(t);return!r||!(i===r||i.startsWith(`${r} `)||i.includes(` ${r} `)||i.endsWith(` ${r}`))?e:e.slice(n[0].length).replace(/^\s+/,``)}function wo(e){return e.replace(/[[(]\s*\d+\s*\/\s*\d+\s*[\])]/g,` `).replace(/[*_`~]/g,``).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,` `).trim()}function To(e){let{model:t}=e;return R(`span`,{class:K.dots,role:`tablist`,"aria-label":`Snapshots`,children:R(P,{each:t.titles,children:(e,n)=>R(`button`,{type:`button`,role:`tab`,class:K.dot,"data-tip":e,"aria-label":e,"aria-selected":h([t.index,n],(e,t)=>e===t),onClick:()=>t.goTo(n.value)})})})}function Eo(e){let{model:t}=e,n=O(``),r=h([t.titles,n.asReadonly],(e,t)=>{let n=t.trim().toLowerCase();return e.map((e,t)=>({title:e,index:t})).filter(e=>!n||e.title.toLowerCase().includes(n))}),i=he(t.index);return z(`div`,{class:K.list,children:[R(N,{when:h(t.count,e=>e>12),children:()=>R(Qa,{search:!0,size:`sm`,"aria-label":`Filter snapshots`,placeholder:`Filter`,value:n,onInput:e=>n.set(e)})}),R(zi,{class:K.listRows,contentClass:K.listRowsContent,role:`listbox`,"aria-label":`Snapshots`,children:R(P,{each:r,children:n=>z(`button`,{type:`button`,role:`option`,class:K.listRow,"aria-selected":i.key(n.index),onClick:()=>{t.goTo(n.index),e.onClose()},children:[R(`span`,{class:K.listIndex,children:String(n.index+1)}),R(`span`,{children:n.title})]})},e=>e.index)})]})}var Do=new u(`models`).asReadonly;function Oo(e){let{model:t}=e,n=t.unit??Do,r=h(n,e=>e===`models`?`Models`:`Frames`),i=h(n,e=>e===`models`?`model`:`frame`),a=h(r,e=>`${e.slice(0,-1)} shown`);if(e.compact)return z(`div`,{class:K.bar,role:`group`,"aria-label":r,"data-row":!0,children:[R(`span`,{class:K.lead,children:R(L,{name:`trajectory`,size:16})}),R(`span`,{class:K.trajectoryLabel,children:t.label}),R(`span`,{class:K.counter,children:h([t.index,t.count],(e,t)=>`${e+1} / ${t}`)}),R(ko,{playing:t.isPlaying,title:h(n,e=>`Play ${e}`),onClick:()=>t.togglePlay()})]});let o=e=>{let n=t.count.value;n>1&&t.seek(((t.index.value+e)%n+n)%n)},s=h([t.index,t.count],(e,t)=>`${t>1?100*e/(t-1):0}%`);return z(`div`,{class:K.bar,role:`group`,"aria-label":r,"data-row":!0,children:[R(`span`,{class:K.lead,children:R(L,{name:`trajectory`,size:16})}),R(`span`,{class:K.trajectoryLabel,children:t.label}),R(`span`,{class:K.counter,children:h([t.index,t.count],(e,t)=>`${e+1} / ${t}`)}),R(`input`,{class:K.scrubber,type:`range`,min:`0`,max:h(t.count,e=>String(e-1)),value:h(t.index,String),style:{"--msp-progress":s},"aria-label":a,"aria-valuetext":h([r,t.index,t.count],(e,t,n)=>`${e.slice(0,-1)} ${t+1} of ${n}`),onInput:e=>t.seek(Number(e.currentTarget.value))}),R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`chevron-left`}),title:h(i,e=>`Previous ${e}`),onClick:()=>o(-1)}),R(ko,{playing:t.isPlaying,title:h(n,e=>`Play ${e}`),onClick:()=>t.togglePlay()}),R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`chevron-right`}),title:h(i,e=>`Next ${e}`),onClick:()=>o(1)})]})}function ko(e){let t=typeof e.title==`string`?new u(e.title).asReadonly:e.title;return R(sr,{variant:`ghost`,size:`sm`,icon:R(N,{when:e.playing,fallback:()=>R(L,{name:`play`}),children:()=>R(L,{name:`pause`})}),title:h([e.playing,t],(e,t)=>e?`Pause`:t),pressed:e.playing,onClick:()=>e.onClick()})}var q={ask:`msp-command-menu-ask`,askIcon:`msp-command-menu-askIcon`,askKeys:`msp-command-menu-askKeys`,askLabel:`msp-command-menu-askLabel`,askText:`msp-command-menu-askText`,before:`msp-command-menu-before`,caption:`msp-command-menu-caption`,command:`msp-command-menu-command`,crumb:`msp-command-menu-crumb`,empty:`msp-command-menu-empty`,error:`msp-command-menu-error`,footer:`msp-command-menu-footer`,form:`msp-command-menu-form`,head:`msp-command-menu-head`,headIcon:`msp-command-menu-headIcon`,hint:`msp-command-menu-hint`,input:`msp-command-menu-input`,keys:`msp-command-menu-keys`,list:`msp-command-menu-list`,listContent:`msp-command-menu-listContent`,menu:`msp-command-menu-menu`,"menu-fade":`msp-command-menu-menu-fade`,"menu-in":`msp-command-menu-menu-in`,message:`msp-command-menu-message`,more:`msp-command-menu-more`,proposed:`msp-command-menu-proposed`,rest:`msp-command-menu-rest`,row:`msp-command-menu-row`,rowChevron:`msp-command-menu-rowChevron`,rowIcon:`msp-command-menu-rowIcon`,rowMeta:`msp-command-menu-rowMeta`,rowTitle:`msp-command-menu-rowTitle`,run:`msp-command-menu-run`,scrim:`msp-command-menu-scrim`,sentence:`msp-command-menu-sentence`,shared:`msp-command-menu-shared`,sharedOption:`msp-command-menu-sharedOption`,sharedTitle:`msp-command-menu-sharedTitle`,spacer:`msp-command-menu-spacer`,srOnly:`msp-command-menu-srOnly`,tail:`msp-command-menu-tail`,token:`msp-command-menu-token`,value:`msp-command-menu-value`,view:`msp-command-menu-view`};I(`views/command-menu/command-menu.module.css`,`@layer msp.components {
.msp-command-menu-scrim {
  z-index: var(--msp-z-dialog);
  padding: 12vh var(--msp-space-4) var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 75%);
  animation: msp-command-menu-menu-fade var(--msp-motion-fast) var(--msp-ease);
  justify-content: center;
  align-items: flex-start;
  display: flex;
  position: absolute;
  inset: 0;
}

@keyframes msp-command-menu-menu-fade {
  from {
    opacity: 0;
  }
}

.msp-command-menu-menu {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  width: min(560px, 100%);
  max-height: min(480px, 76vh);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  font-size: var(--msp-font-size-sm);
  animation: msp-command-menu-menu-in var(--msp-motion-base) var(--msp-ease);
  flex-direction: column;
  display: flex;
  overflow: hidden;
}

@keyframes msp-command-menu-menu-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
}

.msp-command-menu-head {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex: none;
  display: flex;
}

.msp-command-menu-headIcon {
  color: var(--msp-color-text-subtle);
  flex: none;
}

.msp-command-menu-input {
  min-width: 0;
  height: 100%;
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-md);
  background: none;
  border: 0;
  outline: none;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-command {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 85%);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-command-menu-message, .msp-command-menu-error {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  margin: 0;
}

.msp-command-menu-error {
  color: var(--msp-color-danger);
}

.msp-command-menu-hint {
  color: var(--msp-color-text-muted);
}

.msp-command-menu-list {
  flex: 1;
  min-height: 0;

  &:has(.msp-command-menu-listContent:empty) {
    display: none;
  }
}

.msp-command-menu-listContent {
  padding: var(--msp-space-2);
}

.msp-command-menu-form {
  flex: auto;
  min-height: 0;
  overflow-y: auto;
}

.msp-command-menu-empty {
  padding: var(--msp-space-5) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  text-align: center;
  margin: 0;
}

.msp-command-menu-rest {
  pointer-events: none;
}

.msp-command-menu-caption {
  padding: var(--msp-space-3) var(--msp-space-3) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-command-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  cursor: default;
  grid-template-columns: 16px minmax(0, 1fr) auto auto;
  grid-auto-flow: column;
  display: grid;

  &[aria-selected="true"] {
    background: var(--msp-color-hover);
  }

  &[aria-selected="true"] .msp-command-menu-rowMeta {
    color: var(--msp-color-text-muted);
  }

  &[aria-disabled="true"] {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-rowIcon {
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;
}

.msp-command-menu-rowTitle {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  & mark {
    color: var(--msp-color-accent-strong);
    background: none;
    font-weight: 600;
  }
}

.msp-command-menu-tail {
  margin-left: var(--msp-space-2);
  color: var(--msp-color-text-muted);
}

.msp-command-menu-rowMeta {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-sentence {
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-3) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex-wrap: wrap;
  flex: none;
  display: flex;
}

.msp-command-menu-token {
  align-items: center;
  gap: var(--msp-space-2);
  display: inline-flex;
}

.msp-command-menu-before {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
}

.msp-command-menu-value {
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-empty] {
    color: var(--msp-color-text-subtle);
  }

  &[data-missing] {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-danger), transparent 50%);
  }

  &[data-active] {
    box-shadow: inset 0 0 0 1.5px var(--msp-color-accent);
  }
}

.msp-command-menu-spacer {
  flex: 1;
}

.msp-command-menu-view {
  align-items: center;
  gap: var(--msp-space-1);
  height: 28px;
  padding: 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-run {
  align-items: center;
  gap: var(--msp-space-2);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-accent);
  color: var(--msp-color-on-accent);
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;

  & kbd {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-on-accent), transparent 50%);
    color: inherit;
    background: none;
  }
}

.msp-command-menu-more {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-command-menu-footer {
  gap: var(--msp-space-2) var(--msp-space-4);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-top: 1px solid var(--msp-glass-edge);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex-wrap: wrap;
  flex: none;
  display: flex;

  & > span {
    align-items: center;
    gap: var(--msp-space-1);
    display: inline-flex;
  }
}

.msp-command-menu-footer kbd, .msp-command-menu-keys, .msp-command-menu-run kbd {
  min-width: 18px;
  height: 18px;
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-bg);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    inset 0 -1px 0 var(--msp-glass-edge);
  color: var(--msp-color-text-muted);
  font: inherit;
  font-family: var(--msp-font-mono);
  place-items: center;
  font-size: 10px;
  line-height: 1;
  display: inline-grid;
}

.msp-command-menu-crumb {
  align-items: center;
  gap: var(--msp-space-1);
  height: 24px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-rowChevron {
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-ask {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 32px;
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: none;
  grid-template-columns: 16px auto minmax(0, 1fr) auto;
  display: grid;

  &:hover, &[data-default] {
    background: var(--msp-color-hover);
  }

  &[data-setup] {
    color: var(--msp-color-text-muted);
    grid-template-columns: 16px minmax(0, 1fr);

    & .msp-command-menu-askIcon {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-command-menu-askIcon {
  color: var(--msp-color-accent);
  justify-self: center;
}

.msp-command-menu-askLabel {
  color: var(--msp-color-text);
  font-weight: 500;
}

.msp-command-menu-askText {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-muted);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-askKeys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-command-menu-proposed {
  align-items: center;
  gap: var(--msp-space-2);
  margin: var(--msp-space-2) var(--msp-space-2) 0;
  padding: var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 90%);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}

.msp-command-menu-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}

.msp-command-menu-shared {
  align-items: center;
  gap: var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;
}

.msp-command-menu-sharedTitle {
  margin-right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-sharedOption {
  height: 22px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-accent);
  }
}
}
`);function Ao(e,t,n,r){let i=e.assistant,a=n.trim();return i.ready()?{id:`assistant-ask`,label:`Ask AI assistant`,detail:`“${a}”`,icon:`sparkles`,run:()=>{let e=i.propose(a);if(e)return r(a),t.open(e.command,e.tail).kind===`form`;i.ask(a)}}:{id:`assistant-setup`,label:`Set up the assistant to ask`,detail:`“${a}”`,icon:`sparkles`,run:()=>i.setup()}}var jo=e=>e.kind===`caption`?`caption:${e.label}`:e.kind===`group`?`group:${e.group.id}:${e.index}`:e.kind===`item`?`item:${e.item.label}:${e.index}`:`match:${e.match.command.id}:${e.match.preset?.id??``}:${e.index}:${e.tail??``}`,Mo=(e,t)=>{if(e.kind!==t.kind)return!1;if(e.kind===`caption`)return e.label===t.label;if(e.kind===`group`)return e.group===t.group&&e.index===t.index;if(e.kind===`item`)return e.item===t.item&&e.index===t.index;let n=t;return e.match.command===n.match.command&&e.match.preset===n.match.preset&&e.match.blocked===n.match.blocked&&e.index===n.index&&e.tail===n.tail},No=24,Po=28;function Fo(e){let{manager:t}=e;A(t.want());let n=O(void 0);vt(t.active,e=>{e||n.set(void 0)}),vt(t.outcomes,t=>{t.kind===`done`&&e.onClose()}),A(()=>t.close());let r=On(),i;return A(()=>r(i)),R(`div`,{class:q.scrim,"data-keeps-card":``,onPointerDown:t=>{t.target===t.currentTarget&&e.onClose()},children:R(`div`,{class:q.menu,role:`dialog`,"aria-modal":`true`,"aria-label":`Commands`,ref:e=>{i=e},onKeyDown:t=>{Dn(t,t.currentTarget),!(t.key!==`Escape`||t.defaultPrevented)&&(t.preventDefault(),t.stopPropagation(),e.onClose())},children:R(N,{when:t.active,fallback:()=>R(Io,{...e,onPropose:e=>n.set(e)}),children:r=>R(qo,{manager:t,invocation:r,proposed:n.asReadonly,onClose:e.onClose,...e.direct?{direct:!0}:{},...e.forms?.[r.command.id]?{form:e.forms[r.command.id]}:{}})})})})}function Io(e){let{manager:t}=e,n=O(e.initial??``),r=bt(n.value),i=()=>{r.latest!==r.value&&S()},a=O(e.group),o=O(0),s=O(void 0),c=Fn(`msp-command-list`),l=e=>`${c}-${e}`,u=[...e.prefixes??[],Bo(e,e=>ae(e))],d=e=>u.find(t=>e.startsWith(t.char)),f=io(e=>`${a.value??``}|${jo(e)}`,Mo),p,m=h([r,a.asReadonly,t.commands,t.groups],(e,t,n,r)=>{if(p&&p.t===e&&p.g===t&&p.c===n&&p.gs===r)return p.rows;let i=f(g(e,t));return p?(p.t=e,p.g=t,p.c=n,p.gs=r,p.rows=i):p={t:e,g:t,c:n,gs:r,rows:i},i});function g(e,n){let r=[],i=0,a=e=>{e.kind!==`caption`&&(e.index=i++),r.push(e)},o=d(e);if(o){for(let t of o.items(e.slice(o.char.length).trimStart()))a({kind:`item`,item:t,index:0});return r}if(!e.trim()){let{groups:e,commands:i}=t.children(n);if(n===void 0){let n=t.query(``);if(n.recent.length){a({kind:`caption`,label:`Recent`});for(let e of n.recent)a({kind:`match`,match:e,index:0})}e.length&&a({kind:`caption`,label:`Browse`})}for(let t of e)a({kind:`group`,group:t,index:0});if(n!==void 0){let e=new Set(i.map(e=>e.command.category)),t;for(let n of i)e.size>1&&n.command.category!==t&&(t=n.command.category,a({kind:`caption`,label:t})),a({kind:`match`,match:n,index:0});return r}let o=new Set(t.query(``).recent.map(e=>e.command)),s=new Map;for(let e of i){if(o.has(e.command))continue;let t=s.get(e.command.category);t?t.push(e):s.set(e.command.category,[e])}for(let[e,t]of s){a({kind:`caption`,label:e});for(let e of t)a({kind:`match`,match:e,index:0})}return r}let s=t.query(e),c=e=>n===void 0||t.inGroup(e.command,n);s.direct&&c(s.direct)&&a({kind:`match`,match:s.direct,tail:s.direct.tail,index:0});let l=t.groups.value.filter(r=>(n===void 0||t.groupPath(r.id).some(e=>e.id===n))&&r.id!==n&&(E(r.title,e)??-1)>=0);for(let e of l)a({kind:`group`,group:e,index:0});for(let e of s.matches)e.command!==s.direct?.command&&c(e)&&a({kind:`match`,match:e,index:0});return r}let _=[],v=()=>_.filter(e=>e.kind!==`caption`),y=()=>{e.assistant&&(e.assistant.ready()?n.value.trim()&&!d(n.value)&&!Ao(e,t,n.value,e.onPropose).run()&&!t.active.value&&e.onClose():(e.assistant.setup(),e.onClose()))},b=h([r,m],(e,t)=>!!e.trim()&&!d(e)&&!t.some(e=>e.kind!==`caption`));vt(m,e=>{_=e,o.value>=v().length&&o.set(0)});let x=O({n:No}),C=h([m,x.asReadonly],(e,t)=>e.length<=(t.of===e?t.n:No)?e:e.slice(0,t.of===e?t.n:No),(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])),w=h([m,C],(e,t)=>(e.length-t.length)*Po),T=e=>{let t=x.value,n=t.of===_?t.n:No;e>n&&n<_.length&&x.set({of:_,n:Math.max(e,n+No)})};vt(o.asReadonly,e=>{let t=_.findIndex(t=>t.kind!==`caption`&&t.index===e);t>=0&&T(t+1)});let ee=he(o.asReadonly);vt(h([o.asReadonly,m],(e,t)=>{let n=t.find(t=>t.kind===`match`&&t.index===e);return n?.kind===`match`&&!n.match.preset&&!n.tail&&!n.match.blocked?n.match.command.id:void 0}),e=>t.browse(e)),A(()=>t.browse(void 0));let te=h([a.asReadonly,t.groups],e=>[...t.groupPath(e)].reverse().find(e=>e.shared)),ne=h([o.asReadonly,m],(e,t)=>t.some(e=>e.kind!==`caption`)?l(e):void 0),D=O(``),ie=yn(()=>{if(!r.value.trim())return D.set(``);let t=0;for(let e of m.value)e.kind!==`caption`&&t++;if(t)return D.set(t===1?`1 result`:`${t} results`);D.set(e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`)});vt(m,()=>ie.start(400));let ae=e=>{n.set(e),r.offer(e),i(),ue.value=e,o.set(0),s.set(void 0)},oe=e=>{a.set(e),ae(``)},se=n=>{if(i(),n.kind===`group`)return oe(n.group.id);if(n.kind===`item`){!n.item.run()&&!t.active.value&&e.onClose();return}if(n.match.blocked)return s.set(n.match.blocked);let r=t.open(n.match.command.id,n.tail,n.match.preset?.id);r.kind===`blocked`?s.set(r.reason):r.kind===`ran`&&e.onClose()},ce=()=>{let e=t.groupPath(a.value);return e.length?(oe(e[e.length-2]?.id),!0):!1},le=h([n.asReadonly,a.asReadonly],(e,n)=>{let r=d(e);return r?r.placeholder??r.title:n===void 0?`Search commands, or type ? for help`:`Search in ${t.groupPath(n).pop()?.title}`}),ue=R(`input`,{class:q.input,type:`text`,role:`combobox`,"aria-expanded":`true`,"aria-controls":c,"aria-autocomplete":`list`,"aria-label":`Command`,spellcheck:!1,onInput:e=>{n.set(e.currentTarget.value),r.offer(e.currentTarget.value),o.set(0),s.set(void 0)},onKeyDown:t=>{i();let n=v().length,r=!t.currentTarget.value;if(t.key===`ArrowDown`||t.key===`ArrowUp`)t.preventDefault(),n&&o.set((o.value+(t.key===`ArrowDown`?1:n-1))%n);else if(t.key===`Enter`){t.preventDefault();let e=v()[o.value];t.metaKey||t.ctrlKey?y():e?se(e):y()}else if(t.key===`ArrowRight`&&r){let e=v()[o.value];e?.kind===`group`&&(t.preventDefault(),oe(e.group.id))}else(t.key===`Backspace`||t.key===`ArrowLeft`)&&r?ce()&&t.preventDefault():t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),e.onClose())}});queueMicrotask(()=>ue.focus()),M([ne,le,n.asReadonly],()=>{U(ue,`aria-activedescendant`,ne.value),U(ue,`placeholder`,le.value),Vo(ue,n.value)});let de=document.createTextNode(``);return M([D.asReadonly],()=>H(de,D.value)),z(Dt,{children:[z(`div`,{class:q.head,children:[R(L,{name:`search`,size:15,class:q.headIcon}),R(P,{each:h(a.asReadonly,e=>t.groupPath(e)),children:e=>z(`button`,{type:`button`,class:q.crumb,onClick:()=>oe(e.id),children:[e.title,R(L,{name:`chevron-right`,size:12})]})}),ue]}),R(N,{when:te,children:e=>R(Ro,{manager:t,group:e})}),R(N,{when:s,children:e=>R(`p`,{class:q.message,role:`alert`,children:e})}),R(`span`,{class:q.srOnly,role:`status`,"aria-live":`polite`,children:de}),z(zi,{class:q.list,contentClass:q.listContent,id:c,role:`listbox`,"aria-label":`Commands`,viewportRef:e=>{F(e,`scroll`,()=>T(Math.ceil((e.scrollTop+2*e.clientHeight)/Po)),{passive:!0})},children:[R(P,{each:C,fallback:()=>R(`p`,{class:q.empty,children:e.assistant?`No command matches: ask AI assistant.`:`Nothing matches.`}),children:e=>{if(e.kind===`caption`)return R(`div`,{class:q.caption,role:`presentation`,children:e.label});let n=e.index,i={id:l(n),index:n,highlight:o.asReadonly,selected:ee.key(n),onPick:()=>se(e),onHover:()=>o.set(n)};return e.kind===`group`?R(Uo,{...i,manager:t,group:e.group}):e.kind===`item`?R(Wo,{...i,item:e.item}):R(Go,{...i,manager:t,row:e,path:zo(t,e.match.command.group,a.value),inGroup:a.value!==void 0,query:r})}}),R(N,{when:h(w,e=>e>0),children:()=>{let e=R(`div`,{class:q.rest,role:`presentation`});return M([w],()=>Mi(e,`height`,`${w.value}px`)),e}})]}),e.assistant?R(Lo,{ready:e.assistant.ready(),text:h(n.asReadonly,e=>d(e)?``:e.trim()),unmatched:b,onAsk:()=>{e.assistant?.ready()?n.value.trim()?y():ue.focus():(e.assistant?.setup(),e.onClose())}}):null,R(Xo,{hints:[[`↑↓`,`move`],[`↵`,`run`],...e.assistant?.ready()?[[re()?`⌘↵`:`Ctrl+↵`,`ask`]]:[],[`→`,`open group`],[`?`,`help`],[`esc`,`close`]]})]})}function Lo(e){if(!e.ready)return z(`button`,{type:`button`,class:q.ask,"data-setup":``,onClick:()=>e.onAsk(),children:[R(L,{name:`sparkles`,size:15,class:q.askIcon}),R(`span`,{class:q.askText,children:`Set up an AI assistant`})]});let t=document.createTextNode(``),n=document.createTextNode(``),r=z(`button`,{type:`button`,class:q.ask,onClick:()=>e.onAsk(),children:[R(L,{name:`sparkles`,size:15,class:q.askIcon}),R(`span`,{class:q.askLabel,children:`Ask AI assistant`}),R(`span`,{class:q.askText,children:t}),R(`kbd`,{class:q.askKeys,children:n})]});return M([e.text,e.unmatched],()=>{let i=e.text.value,a=e.unmatched.value;U(r,`data-default`,a),H(t,i?`“${i}”`:`describe what you want, in your words`),H(n,a?`↵`:re()?`⌘↵`:`Ctrl+↵`)}),r}function Ro(e){let{manager:t,group:n}=e,r=n.shared,i=h(t.shared,()=>t.sharedValue(n.id)),a=[],o=z(`div`,{class:q.shared,role:`group`,"aria-label":`${n.title}: ${r.title}`,children:[R(`span`,{class:q.sharedTitle,children:r.title}),r.options.map(([e,r])=>R(`button`,{type:`button`,class:q.sharedOption,ref:e=>a.push(e),onClick:()=>t.setShared(n.id,e),children:r}))]});return M([i],()=>{for(let e=0;e<a.length;e++)U(a[e],`aria-pressed`,i.value===r.options[e][0]?`true`:`false`)}),o}function zo(e,t,n){let r=e.groupPath(t),i=n===void 0?-1:r.findIndex(e=>e.id===n);return r.slice(i+1).map(e=>e.title)}function Bo(e,t){return{char:`?`,title:`Help`,placeholder:`Prefixes and shortcuts`,items:n=>{let r=n.toLowerCase(),i=(e.prefixes??[]).map(e=>({id:`prefix:${e.char}`,label:`${e.char}  ${e.title}`,detail:e.placeholder,icon:`command`,run:()=>(t(e.char),!0)})),a=e.manager.commands.value.flatMap(t=>{let n=e.manager.shortcut(t);return n?[{c:t,chord:n}]:[]}).map(({c:t,chord:n})=>({id:`keys:${t.id}`,label:t.title,detail:te(n),icon:t.icon??`keyboard`,run:()=>{e.manager.open(t.id)}}));return[...e.manager.get(`help.show`)?[{id:`help:card`,label:`Keyboard and mouse`,detail:`The Help card`,icon:`circle-help`,run:()=>{e.manager.open(`help.show`)}}]:[],...i,...a].filter(e=>!r||e.label.toLowerCase().includes(r))}}}function Vo(e,t){e.value!==t&&(e.value=t)}function Ho(e,t,n){return U(e,`aria-selected`,String(t)),t&&!n&&queueMicrotask(()=>e.scrollIntoView?.({block:`nearest`})),t}function Uo(e){let t=e.manager.groupPath(e.group.parent).map(e=>e.title),n=z(`div`,{id:e.id,class:q.row,role:`option`,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[R(`span`,{class:q.rowIcon,children:R(L,{name:e.group.icon??`list-tree`,size:15})}),R(`span`,{class:q.rowTitle,children:e.group.title}),R(`span`,{class:q.rowMeta,children:t.join(` › `)}),R(L,{name:`chevron-right`,size:14,class:q.rowChevron})]}),r=!1;return M([e.selected],()=>{r=Ho(n,e.highlight.value===e.index,r)}),n}function Wo(e){let{item:t}=e,n=z(`div`,{id:e.id,class:q.row,role:`option`,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[R(`span`,{class:q.rowIcon,children:t.icon?R(L,{name:t.icon,size:15}):null}),R(`span`,{class:q.rowTitle,children:t.label}),R(`span`,{class:q.rowMeta,children:t.detail})]}),r=!1;return M([e.selected],()=>{r=Ho(n,e.highlight.value===e.index,r)}),n}function Go(e){let{manager:t,query:n}=e,{match:r,tail:i}=e.row,a=r.command,o=r.preset?`${a.title.replace(/…$/,``)} ${r.preset.title}`:a.title,s=t.shortcut(a),c=r.blocked??(e.path.length?e.path.join(` › `):e.inGroup?``:a.category),l=document.createElement(`span`),u=document.createTextNode(c),d=z(`div`,{id:e.id,class:q.row,role:`option`,"aria-disabled":r.blocked?`true`:void 0,onClick:()=>e.onPick(),onPointerMove:()=>e.onHover(),children:[R(`span`,{class:q.rowIcon,children:a.icon?R(L,{name:a.icon,size:15}):null}),z(`span`,{class:q.rowTitle,children:[l,i?R(`span`,{class:q.tail,children:i}):null]}),R(`span`,{class:q.rowMeta,children:u}),s?R(`kbd`,{class:q.keys,children:te(s)}):null]}),f=!1,p=[e.selected];a.count&&!r.preset&&p.push(t.browsing),M(p,()=>{if(f=Ho(d,e.highlight.value===e.index,f),a.count&&!r.preset){let e=t.browsing.value;H(u,(e?.id===a.id?e.count:void 0)??c)}});let m,h=e=>{if(e===m)return;m=e;let t=Ko(o,e);typeof t==`string`?l.textContent=t:l.replaceChildren(Ot(t))};return i?h(``):M([n],()=>h(n.value)),d}function Ko(e,t){let n=new Set(D(e,t));if(!n.size)return e;let r=[],i=``,a=!1,o=()=>{i&&=(r.push(a?R(`mark`,{children:i}):i),``)};for(let t=0;t<e.length;t++){let r=n.has(t);r!==a&&(o(),a=r),i+=e[t]}return o(),R(Dt,{children:r})}function qo(e){let{manager:t,invocation:n}=e,r,i=t=>t.field!==void 0&&!!e.form?.fields?.includes(t.field),a=n.state,o=n.command,s=Fn(`msp-command-options`),c=h(a,e=>e.pick),l=e=>`${s}-${e}`,u,d=()=>u?En(u).filter(e=>e.tabIndex>=0):[],f=e=>{if(!u)return!1;let t=a.value;if(t.canAssist||t.text.trim()&&t.completions.length||t.pick>=0)return!1;let n=t.fields.findIndex(e=>e.id===t.field);if(e?n>0:n<t.fields.length-1)return!1;let r=d(),i=e?r[r.length-1]:r[0];return i?(i.focus(),!0):!1},p=e=>{if(e.key!==`Tab`||e.defaultPrevented||!u||e.altKey||e.metaKey||e.ctrlKey)return;let t=d();if(Tn(u.ownerDocument)!==(e.shiftKey?t[0]:t[t.length-1]))return;e.preventDefault();let r=a.value.fields,i=e.shiftKey?r[r.length-1]:r[0];i&&n.focus(i.id),m.focus()},m=R(`input`,{class:q.input,type:`text`,role:`combobox`,"aria-controls":s,"aria-autocomplete":`list`,spellcheck:!1,onInput:e=>n.type(e.currentTarget.value),onKeyDown:e=>{r?.(e)?e.preventDefault():e.key===`Enter`&&e.altKey&&o.view?(e.preventDefault(),v()):e.key===`Enter`?(e.preventDefault(),n.enter()):e.key===`Tab`?(e.preventDefault(),f(e.shiftKey)||n.tab(e.shiftKey?-1:1)):e.key===`ArrowDown`||e.key===`ArrowUp`?(e.preventDefault(),n.move(e.key===`ArrowDown`?1:-1)):e.key===`Backspace`&&!e.currentTarget.value?(e.preventDefault(),n.back()||_()):e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),_())}});queueMicrotask(()=>m.focus());let g=document.createTextNode(``);M([a],()=>{let e=a.value;H(g,e.action);let t=e.fields.find(t=>t.id===e.field),n=!i(e)&&e.completions.length>0;U(m,`aria-expanded`,String(n)),U(m,`aria-activedescendant`,n&&e.pick>=0&&e.pick<e.completions.length?l(e.pick):void 0),U(m,`aria-label`,t?.label??o.title),U(m,`placeholder`,t?t.label:`Enter to run`),Vo(m,e.text)});let _=()=>{t.close(),e.direct&&e.onClose()},v=()=>{let n=o.view;n&&(t.close(),e.onClose(),n.open(t.context.value))};return z(Dt,{children:[R(N,{when:e.proposed,children:e=>z(`p`,{class:q.proposed,children:[R(L,{name:`sparkles`,size:13,class:q.askIcon}),`Proposed by the assistant from “`,e,`”: check it, then Enter to run`]})}),z(`div`,{class:q.head,children:[z(`span`,{class:q.command,children:[o.icon?R(L,{name:o.icon,size:15}):null,o.title.replace(/…$/,``)]}),m]}),z(`div`,{class:q.sentence,"aria-label":`Arguments`,children:[R(P,{each:h(a,e=>e.fields),children:e=>R(Yo,{field:e,state:a,onFocus:()=>{n.focus(e.id),m.focus()}})},e=>e.id),R(`span`,{class:q.spacer}),o.view?z(`button`,{type:`button`,class:q.view,title:`Open ${o.view.title} (⌥↵)`,onClick:v,children:[o.view.title,R(L,{name:`chevron-right`,size:13})]}):null,z(`button`,{type:`button`,class:q.run,onClick:()=>void n.enter(),children:[g,R(`kbd`,{children:`↵`})]})]}),R(N,{when:h(a,e=>e.error),children:e=>z(`p`,{class:q.error,role:`alert`,children:[e.message,e.hint?z(`span`,{class:q.hint,children:[` `,e.hint]}):null]})}),R(zi,{class:q.list,contentClass:q.listContent,id:s,role:`listbox`,"aria-label":`Options`,children:R(P,{each:h(a,e=>i(e)?Jo:e.completions),children:(e,t)=>{let r=z(`div`,{class:q.row,role:`option`,onClick:()=>n.accept(t.value),onPointerMove:()=>n.point(t.value),children:[R(`span`,{class:q.rowIcon}),R(`span`,{class:q.rowTitle,children:e.label}),R(`span`,{class:q.rowMeta,children:e.detail??(e.value===e.label?``:e.value)})]});return M([c,t],()=>{U(r,`id`,l(t.value)),U(r,`aria-selected`,String(c.value===t.value))}),r}})}),e.form?R(`div`,{class:q.form,ref:e=>{u=e},onKeyDown:p,children:e.form.render({manager:t,invocation:n,run:()=>void n.enter(),keys:e=>{r=e}})}):null,R(N,{when:h(a,t=>!e.form&&t.formOnly.length>0),children:()=>{let e=document.createTextNode(``);return M([a],()=>{let t=a.value.formOnly.length;H(e,`+ ${t} more option${t>1?`s`:``} at their defaults`)}),R(`p`,{class:q.more,children:e})}}),R(Xo,{hints:[[`tab`,`next field`],[`↵`,`run`],...o.view?[[`⌥↵`,`open in the UI`]]:[],[`⌫`,`back`],e.direct?[`esc`,`close`]:[`esc`,`commands`]]})]})}var Jo=[];function Yo(e){let{field:t}=e,n=h(e.state,e=>{let n=e.values[t.id];if(n!==void 0&&n!==``)return t.options?.find(e=>e.value===String(n))?.label??String(n)}),r=h(e.state,e=>e.field===t.id),i=h(e.state,e=>e.missing.includes(t.id)),a=document.createTextNode(``),o=R(`button`,{type:`button`,class:q.value,onClick:()=>e.onFocus(),children:a});return M([n,r,i],()=>{let e=n.value;U(o,`data-active`,r.value),U(o,`data-missing`,i.value),U(o,`data-empty`,e===void 0),H(a,e??t.label)}),z(`span`,{class:q.token,children:[t.before?R(`span`,{class:q.before,children:t.before}):null,o]})}function Xo(e){return R(`div`,{class:q.footer,children:e.hints.map(([e,t])=>z(`span`,{children:[R(`kbd`,{children:e}),` `,t]}))})}var J={announce:`msp-shell-canvas-announce`,bar:`msp-shell-canvas-bar`,bottom:`msp-shell-canvas-bottom`,bottomGrid:`msp-shell-canvas-bottomGrid`,busy:`msp-shell-canvas-busy`,"busy-in":`msp-shell-canvas-busy-in`,"busy-slide":`msp-shell-canvas-busy-slide`,"busy-spin":`msp-shell-canvas-busy-spin`,busyActions:`msp-shell-canvas-busyActions`,busyBar:`msp-shell-canvas-busyBar`,busyCard:`msp-shell-canvas-busyCard`,busyHead:`msp-shell-canvas-busyHead`,busyLabel:`msp-shell-canvas-busyLabel`,busyPercent:`msp-shell-canvas-busyPercent`,busySpin:`msp-shell-canvas-busySpin`,busyTrack:`msp-shell-canvas-busyTrack`,caption:`msp-shell-canvas-caption`,card:`msp-shell-canvas-card`,"card-in":`msp-shell-canvas-card-in`,cardBody:`msp-shell-canvas-cardBody`,cardBodyContent:`msp-shell-canvas-cardBodyContent`,cardBodyFill:`msp-shell-canvas-cardBodyFill`,cardDocked:`msp-shell-canvas-cardDocked`,cardHeader:`msp-shell-canvas-cardHeader`,cardSlot:`msp-shell-canvas-cardSlot`,cardTitle:`msp-shell-canvas-cardTitle`,chip:`msp-shell-canvas-chip`,context:`msp-shell-canvas-context`,corner:`msp-shell-canvas-corner`,countdown:`msp-shell-canvas-countdown`,face:`msp-shell-canvas-face`,folded:`msp-shell-canvas-folded`,frame:`msp-shell-canvas-frame`,lead:`msp-shell-canvas-lead`,menuMark:`msp-shell-canvas-menuMark`,message:`msp-shell-canvas-message`,pill:`msp-shell-canvas-pill`,"pill-in":`msp-shell-canvas-pill-in`,pillButton:`msp-shell-canvas-pillButton`,pillMain:`msp-shell-canvas-pillMain`,progress:`msp-shell-canvas-progress`,railMenu:`msp-shell-canvas-railMenu`,railMenuAnchor:`msp-shell-canvas-railMenuAnchor`,railMenuButton:`msp-shell-canvas-railMenuButton`,railMenuDivider:`msp-shell-canvas-railMenuDivider`,railMenuList:`msp-shell-canvas-railMenuList`,railToggle:`msp-shell-canvas-railToggle`,sections:`msp-shell-canvas-sections`,spin:`msp-shell-canvas-spin`,stack:`msp-shell-canvas-stack`,stackTools:`msp-shell-canvas-stackTools`,status:`msp-shell-canvas-status`,text:`msp-shell-canvas-text`,tool:`msp-shell-canvas-tool`,"tool-menu-in":`msp-shell-canvas-tool-menu-in`,toolMenu:`msp-shell-canvas-toolMenu`,toolMenuCard:`msp-shell-canvas-toolMenuCard`,toolMenuCheck:`msp-shell-canvas-toolMenuCheck`,toolMenuChevron:`msp-shell-canvas-toolMenuChevron`,toolMenuDivider:`msp-shell-canvas-toolMenuDivider`,toolMenuHeading:`msp-shell-canvas-toolMenuHeading`,toolMenuHint:`msp-shell-canvas-toolMenuHint`,toolMenuLabel:`msp-shell-canvas-toolMenuLabel`,toolMenuRow:`msp-shell-canvas-toolMenuRow`,toolMenuScroll:`msp-shell-canvas-toolMenuScroll`,toolMenuScrollContent:`msp-shell-canvas-toolMenuScrollContent`,toolSubmenu:`msp-shell-canvas-toolSubmenu`,toolbar:`msp-shell-canvas-toolbar`,toolbarSlot:`msp-shell-canvas-toolbarSlot`};I(`views/shell/canvas.module.css`,`@layer msp.components {
.msp-shell-canvas-frame {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  width: 44px;
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
  overflow: hidden;

  & > * + *, & .msp-shell-canvas-stackTools > * + *, & .msp-shell-canvas-sections > * + * {
    border-top: 1px solid var(--msp-glass-edge);
  }

  & .msp-shell-canvas-sections:empty, & .msp-shell-canvas-toolbar:not(:has(button)) {
    display: none;
  }
}

.msp-shell-canvas-sections, .msp-shell-canvas-toolbar {
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-tool {
  width: 100%;
  height: max(var(--msp-rail-button, 40px), var(--msp-touch-target, 0px));
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-control);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
    color: var(--msp-color-accent);
  }
}

.msp-shell-canvas-card {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-panel-right, 64px);
  bottom: calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));
  z-index: var(--msp-z-overlay);
  width: min(var(--msp-right-panel-width, 340px), calc(100% - 96px));
  border-radius: var(--msp-radius-lg);
  contain: content;
  animation: msp-shell-canvas-card-in var(--msp-motion-base) var(--msp-ease);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: hidden;

  [data-right-panel="open"] & {
    animation: none;
  }

  [data-pinned] & {
    top: 0;
    right: calc(var(--msp-canvas-rail-inset, 52px) - var(--msp-canvas-edge));
    background: var(--msp-pinned-bg);
    --msp-surface: var(--msp-pinned-bg);
    -webkit-backdrop-filter: none;
    box-shadow: var(--msp-pinned-edge);
    border-radius: 0;
    bottom: 0;
  }
}

@keyframes msp-shell-canvas-card-in {
  from {
    opacity: 0;
    transform: translateX(8px);
  }
}

.msp-shell-canvas-cardHeader {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-4);
  font-weight: 600;
  display: flex;
}

.msp-shell-canvas-cardTitle {
  font-size: inherit;
  font-weight: inherit;
  flex: 1;
}

.msp-shell-canvas-cardBody {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-canvas-cardBodyFill {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

.msp-shell-canvas-cardBodyContent {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}

.msp-shell-canvas-stack:not(:has(button)) {
  display: none;
}

.msp-shell-canvas-stack {
  --msp-stack-row: max(34px, min(var(--msp-touch-target, 0px), 38px));
  transition: opacity var(--msp-motion-fade) var(--msp-ease-reveal);
  position: relative;

  @starting-style {
    opacity: 0;
  }

  &[data-quiet] {
    opacity: 0;
    pointer-events: none;
  }
}

.msp-shell-canvas-railToggle {
  right: calc((44px - var(--msp-stack-row)) / 2);
  bottom: var(--msp-canvas-edge);
  z-index: var(--msp-z-overlay);
  pointer-events: auto;
  position: absolute;
}

.msp-shell-canvas-corner {
  justify-self: end;
  align-items: flex-end;
  gap: var(--msp-space-3);
  flex-flow: row-reverse wrap-reverse;
  grid-area: corner;
  max-width: 100%;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-frame {
  width: auto;
  height: var(--msp-stack-row);
  flex-direction: row;
  max-width: 100%;

  & > * + *, & .msp-shell-canvas-stackTools > * + * {
    border-top: 0;
    border-left: 1px solid var(--msp-glass-edge);
  }
}

.msp-shell-canvas-stackTools, .msp-shell-canvas-stack .msp-shell-canvas-sections, .msp-shell-canvas-stack .msp-shell-canvas-toolbar {
  flex-direction: row;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-sections > * + * {
  border-top: 0;
  border-left: 1px solid var(--msp-glass-edge);
}

.msp-shell-canvas-stack .msp-shell-canvas-tool {
  width: var(--msp-stack-row);
  height: var(--msp-stack-row);

  [data-mode="compact"] & svg {
    width: 18px;
    height: 18px;
  }

  flex: none;
}

.msp-shell-canvas-stack :is(.msp-shell-canvas-tool, button) > svg:first-child {
  width: 18px;
  height: 18px;
}

.msp-shell-canvas-tool[data-captioned] {
  justify-content: center;
  gap: var(--msp-space-1);
  height: var(--msp-rail-button-captioned, 46px);
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-tool > svg, .msp-shell-canvas-tool > .msp-shell-canvas-face > svg {
  width: var(--msp-rail-icon, 20px);
  height: var(--msp-rail-icon, 20px);
}

.msp-shell-canvas-tool[data-captioned] > svg, .msp-shell-canvas-tool[data-captioned] > .msp-shell-canvas-face > svg {
  width: var(--msp-rail-icon-captioned, 16px);
  height: var(--msp-rail-icon-captioned, 16px);
}

.msp-shell-canvas-caption {
  color: var(--msp-color-text-subtle);
  font-variant-numeric: tabular-nums;
  font-size: 10px;
  line-height: 1;
}

.msp-shell-canvas-tool {
  position: relative;
}

.msp-shell-canvas-face {
  display: contents;
}

.msp-shell-canvas-menuMark {
  opacity: .45;
  border-top: 4px solid #0000;
  border-right: 4px solid;
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.msp-shell-canvas-toolMenu {
  z-index: var(--msp-z-overlay);
  padding-bottom: var(--msp-space-3);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  bottom: 100%;
}

@keyframes msp-shell-canvas-tool-menu-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

.msp-shell-canvas-toolMenuCard {
  min-width: 200px;
  max-height: calc(var(--msp-menu-room) - var(--msp-space-3));
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-toolMenuScroll {
  flex: auto;
  min-height: 0;
}

.msp-shell-canvas-toolMenuScrollContent {
  display: grid;
}

.msp-shell-canvas-toolMenuRow {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 32px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: 16px 1fr auto;
  display: grid;

  &:hover:not(:disabled), &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-choice][aria-checked="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;

    & .msp-shell-canvas-toolMenuLabel {
      color: inherit;
    }
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-shell-canvas-toolMenuDivider {
  height: 1px;
  margin: var(--msp-space-2) var(--msp-space-3);
  background: var(--msp-glass-edge);
}

.msp-shell-canvas-toolMenuLabel {
  color: var(--msp-color-text);
  display: grid;
}

.msp-shell-canvas-toolMenuCheck {
  color: var(--msp-color-accent);
}

.msp-shell-canvas-toolMenuHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-canvas-toolMenuChevron {
  color: var(--msp-color-text-subtle);
}

.msp-shell-canvas-toolSubmenu {
  margin-right: var(--msp-space-2);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  right: 100%;
}

.msp-shell-canvas-toolMenuHeading {
  padding: var(--msp-space-2) var(--msp-space-3) 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-canvas-toolbarSlot {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  position: absolute;
}

.msp-shell-canvas-lead {
  top: var(--msp-canvas-top-inset, var(--msp-canvas-edge));
  left: var(--msp-canvas-edge);
  gap: var(--msp-space-3);
  width: min(320px, 100% - 96px);
  display: grid;
  position: absolute;
}

:where([data-mode="compact"]) .msp-shell-canvas-lead {
  width: min(320px, calc(100% - 36px - 3 * var(--msp-canvas-edge)));
}

.msp-shell-canvas-bottom {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-corner-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  pointer-events: none;
  position: absolute;
  container: bottom-bar / inline-size;
}

:where([data-mode="compact"]) .msp-shell-canvas-bottom {
  right: var(--msp-canvas-edge);
}

.msp-shell-canvas-bottomGrid {
  align-items: end;
  gap: var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas: "status corner";
  display: grid;

  & > * {
    pointer-events: auto;
  }
}

@container bottom-bar (width < 560px) {
  .msp-shell-canvas-bottomGrid {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "corner";
    position: relative;
  }

  .msp-shell-canvas-bottomGrid > .msp-shell-canvas-status {
    left: 0;
    right: 0;
    bottom: calc(100% + var(--msp-space-2));
    position: absolute;
  }
}

.msp-shell-canvas-context {
  justify-content: flex-end;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  display: flex;
}

.msp-shell-canvas-chip {
  height: 30px;
  padding: 0 var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  font-size: var(--msp-font-size-md);
}

.msp-shell-canvas-status {
  pointer-events: none;
  flex-direction: column;
  grid-area: status;
  align-self: end;
  align-items: flex-start;
  display: flex;

  & > * {
    pointer-events: auto;
  }
}

.msp-shell-canvas-pill {
  align-items: center;
  gap: var(--msp-space-2);
  max-width: 100%;
  height: max(34px, var(--msp-touch-target, 0px));
  padding: 0 0 0 var(--msp-space-3);
  border-radius: var(--msp-radius-lg);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  display: inline-flex;
  overflow: hidden;
}

.msp-shell-canvas-message {
  animation: msp-shell-canvas-pill-in var(--msp-motion-base) var(--msp-ease);

  &[data-kind="error"] {
    color: var(--msp-color-danger);
  }

  &[data-kind="warning"] {
    color: var(--msp-color-warning);
  }

  &[data-kind="success"] {
    color: var(--msp-color-success);
  }
}

@keyframes msp-shell-canvas-pill-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}

.msp-shell-canvas-text {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-canvas-progress {
  background: var(--msp-color-border);
  border-radius: 2px;
  width: 48px;
  height: 4px;
  overflow: hidden;

  & > div {
    background: var(--msp-color-accent);
    height: 100%;
  }
}

.msp-shell-canvas-spin {
  animation: 1s linear infinite msp-shell-canvas-spin;
}

@keyframes msp-shell-canvas-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-shell-canvas-pillMain {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 100%;
  color: inherit;
  text-align: left;
  display: inline-flex;

  &:hover .msp-shell-canvas-text {
    text-underline-offset: 3px;
    text-decoration: underline;
  }
}

.msp-shell-canvas-pillButton {
  width: max(34px, var(--msp-touch-target, 0px));
  height: 100%;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;
  position: relative;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-countdown {
  pointer-events: none;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);

  & circle {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5px;
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
    opacity: .6;
    animation: msp-shell-canvas-countdown var(--msp-countdown, 8s) linear forwards;
  }

  .msp-shell-canvas-pill:hover &, .msp-shell-canvas-pill:focus-within & {
    & circle {
      animation-play-state: paused;
    }
  }
}

@keyframes msp-shell-canvas-countdown {
  to {
    stroke-dashoffset: 100px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-canvas-countdown {
    display: none;
  }
}

.msp-shell-canvas-status .msp-shell-canvas-announce {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}

.msp-shell-canvas-status .msp-shell-canvas-pill {
  height: auto;
  min-height: 24px;
  padding-left: var(--msp-space-3);
  box-shadow: none;
  -webkit-backdrop-filter: none;
  text-shadow: 0 0 2px var(--msp-color-bg),
    0 0 6px var(--msp-color-bg);
  background: none;
}

.msp-shell-canvas-status .msp-shell-canvas-pillButton {
  width: 24px;
  height: 24px;
  margin-left: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
}

.msp-shell-canvas-pill:not(:has(.msp-shell-canvas-pillButton)) {
  padding-right: var(--msp-space-3);
}

.msp-shell-canvas-railMenu {
  display: contents;
}

.msp-shell-canvas-railMenuAnchor {
  display: grid;
  position: relative;
}

.msp-shell-canvas-railMenuButton {
  width: 44px;
  height: max(40px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-railMenuList {
  right: 0;
  bottom: calc(100% + var(--msp-space-2));
  z-index: var(--msp-z-overlay);
  min-width: 220px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  box-shadow: var(--msp-glass-shadow),
    0 8px 24px #0000001f;
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
}

:where([data-mode="compact"]) .msp-shell-canvas-card {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  width: auto;
}

.msp-shell-canvas-cardSlot {
  display: contents;
}

.msp-shell-canvas-cardDocked {
  contain: content;
  flex-direction: column;
  height: min(45cqh, 420px);
  min-height: 0;
  display: flex;
  overflow: hidden;
}

.msp-shell-canvas-busy {
  z-index: var(--msp-z-dialog);
  padding: var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 30%);
  -webkit-backdrop-filter: blur(2px);
  animation: msp-shell-canvas-busy-in var(--msp-motion-base) var(--msp-ease);
  place-items: center;
  display: grid;
  position: absolute;
  inset: 0;
}

@keyframes msp-shell-canvas-busy-in {
  from {
    opacity: 0;
  }
}

.msp-shell-canvas-busyCard {
  gap: var(--msp-space-3);
  width: min(360px, 100%);
  padding: var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  display: grid;
}

.msp-shell-canvas-busyHead {
  align-items: center;
  gap: var(--msp-space-3);
  display: flex;
}

.msp-shell-canvas-busySpin {
  color: var(--msp-color-accent);
  flex: none;
  animation: .9s linear infinite msp-shell-canvas-busy-spin;
}

@keyframes msp-shell-canvas-busy-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-shell-canvas-busyLabel {
  flex: 1;
  font-weight: 600;
}

.msp-shell-canvas-busyPercent {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
}

.msp-shell-canvas-busyTrack {
  background: var(--msp-color-control);
  border-radius: 2px;
  height: 4px;
  overflow: hidden;
}

.msp-shell-canvas-busyBar {
  background: var(--msp-color-accent);
  transform-origin: 0;
  width: 100%;
  height: 100%;
  transition: scale var(--msp-motion-fast) linear;
  border-radius: 2px;
  display: block;

  &[data-indeterminate] {
    animation: msp-shell-canvas-busy-slide 1.2s var(--msp-ease) infinite;
  }
}

@keyframes msp-shell-canvas-busy-slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(340%);
  }
}

.msp-shell-canvas-busyActions {
  justify-content: flex-end;
  display: flex;
}

.msp-shell-canvas-railMenuDivider {
  height: 1px;
  margin: var(--msp-space-1) var(--msp-space-2);
  background: var(--msp-glass-edge);
}

.msp-shell-canvas-bar, .msp-shell-canvas-folded {
  min-width: 0;
}
}
`);var Y={band:`msp-shell-dock-band`,barTab:`msp-shell-dock-barTab`,body:`msp-shell-dock-body`,bodyContent:`msp-shell-dock-bodyContent`,bottom:`msp-shell-dock-bottom`,collapsedBar:`msp-shell-dock-collapsedBar`,compact:`msp-shell-dock-compact`,content:`msp-shell-dock-content`,dock:`msp-shell-dock-dock`,floating:`msp-shell-dock-floating`,floatingBottom:`msp-shell-dock-floatingBottom`,floatingLeft:`msp-shell-dock-floatingLeft`,floatingRight:`msp-shell-dock-floatingRight`,floatingTop:`msp-shell-dock-floatingTop`,frameless:`msp-shell-dock-frameless`,header:`msp-shell-dock-header`,left:`msp-shell-dock-left`,pin:`msp-shell-dock-pin`,rail:`msp-shell-dock-rail`,"rail-menu-in":`msp-shell-dock-rail-menu-in`,railFoot:`msp-shell-dock-railFoot`,railMenu:`msp-shell-dock-railMenu`,railMenuRows:`msp-shell-dock-railMenuRows`,railMenuScroll:`msp-shell-dock-railMenuScroll`,right:`msp-shell-dock-right`,splitter:`msp-shell-dock-splitter`,strip:`msp-shell-dock-strip`,tab:`msp-shell-dock-tab`,title:`msp-shell-dock-title`,top:`msp-shell-dock-top`};I(`views/shell/dock.module.css`,`@layer msp.components {
.msp-shell-dock-dock {
  background: var(--msp-color-panel);
  min-width: 0;
  min-height: 0;
  display: flex;
}

.msp-shell-dock-right {
  flex-direction: row;
  grid-area: right;
}

.msp-shell-dock-left {
  flex-direction: row-reverse;
  grid-area: left;
}

.msp-shell-dock-top, .msp-shell-dock-bottom {
  flex-direction: row-reverse;

  & .msp-shell-dock-content {
    width: auto;
    height: var(--msp-dock-size);
    flex: 1;
  }

  & .msp-shell-dock-header, & .msp-shell-dock-splitter {
    display: none;
  }

  & .msp-shell-dock-tab {
    width: 28px;
    height: 28px;
  }
}

.msp-shell-dock-top {
  grid-area: top;
}

.msp-shell-dock-bottom {
  grid-area: bottom;
}

.msp-shell-dock-content {
  contain: layout style;
  width: var(--msp-dock-size);
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
  position: relative;
}

.msp-shell-dock-header {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-4);
  font-weight: 600;
  display: flex;
}

.msp-shell-dock-title {
  min-width: 0;
  font-size: inherit;
  font-weight: inherit;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-dock-body {
  contain: layout paint;
  flex: 1;
  min-height: 0;
}

.msp-shell-dock-bodyContent {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}

.msp-shell-dock-strip {
  gap: var(--msp-space-1);
  padding: var(--msp-space-2);
  background: var(--msp-color-bg);
  flex-direction: column;
  display: flex;
}

.msp-shell-dock-tab {
  width: max(36px, var(--msp-touch-target, 0px));
  height: max(36px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
    color: var(--msp-color-accent);
  }
}

.msp-shell-dock-splitter {
  z-index: 1;
  cursor: col-resize;
  touch-action: none;
  width: 6px;
  position: absolute;
  top: 0;
  bottom: 0;

  &[data-active] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 60%);
  }
}

.msp-shell-dock-right .msp-shell-dock-splitter {
  left: -3px;
}

.msp-shell-dock-left .msp-shell-dock-splitter {
  right: -3px;
}

.msp-shell-dock-collapsedBar {
  align-items: center;
  gap: var(--msp-space-3);
  height: 24px;
  padding: 0 var(--msp-inset);
  flex: 1;
  display: flex;
}

.msp-shell-dock-barTab {
  align-items: center;
  gap: var(--msp-space-1);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  display: inline-flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-shell-dock-compact {
  flex-direction: column;

  & .msp-shell-dock-content {
    width: auto;
    height: min(45cqh, 420px);
  }

  & .msp-shell-dock-strip {
    flex-direction: row;
    justify-content: space-around;
  }

  & .msp-shell-dock-splitter, &[data-covered] > .msp-shell-dock-content {
    display: none;
  }
}

.msp-shell-dock-floating {
  top: var(--msp-canvas-edge);
  bottom: var(--msp-canvas-edge);
  align-items: flex-start;
  gap: var(--msp-space-3);
  pointer-events: none;
  display: flex;
  position: absolute;

  & > * {
    pointer-events: auto;
  }

  & .msp-shell-dock-content {
    border-radius: var(--msp-radius-lg);
    background: var(--msp-glass-panel-bg);
    --msp-surface: var(--msp-glass-panel-bg);
    box-shadow: var(--msp-glass-shadow);
    -webkit-backdrop-filter: var(--msp-glass-filter);
    align-self: stretch;
    overflow: hidden;
  }

  & .msp-shell-dock-frameless {
    box-shadow: none;
    -webkit-backdrop-filter: none;
    background: none;
    border-radius: 0;
    overflow: visible;
  }

  & .msp-shell-dock-strip {
    background: none;
    gap: 0;
    padding: 0;
  }

  & .msp-shell-dock-tab {
    width: 100%;
    height: max(var(--msp-rail-button, 40px), var(--msp-touch-target, 0px));
    border-radius: 0;
  }

  & .msp-shell-dock-tab > svg {
    width: var(--msp-rail-icon, 20px);
    height: var(--msp-rail-icon, 20px);
  }

  & .msp-shell-dock-tab[aria-selected="true"] {
    background: var(--msp-color-control);
    box-shadow: none;
  }

  & .msp-shell-dock-header {
    height: max(var(--msp-rail-head, 40px), var(--msp-touch-target, 0px));
  }
}

.msp-shell-dock-floatingRight {
  gap: var(--msp-canvas-edge);
  transition: transform var(--msp-motion-base) var(--msp-ease),
    opacity var(--msp-motion-base) var(--msp-ease);
  flex-direction: row-reverse;
  top: 0;
  bottom: 0;
  right: 0;

  &[data-rail-hidden] {
    opacity: 0;
    transform: translateX(100%);
  }

  & .msp-shell-dock-rail {
    background: var(--msp-glass-panel-bg);
    box-shadow: none;
    border-radius: 0;
    position: relative;

    &:before {
      content: "";
      z-index: 1;
      background: var(--msp-glass-edge);
      pointer-events: none;
      width: 1px;
      position: absolute;
      inset: 0 auto 0 0;
    }
  }

  &[data-rail-overlay] {
    bottom: calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));

    & .msp-shell-dock-rail {
      border-bottom-left-radius: var(--msp-radius-lg);
    }

    & .msp-shell-dock-content {
      margin-bottom: var(--msp-canvas-edge);
    }
  }

  & .msp-shell-dock-content {
    margin: var(--msp-canvas-edge) 0 calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));
  }

  [data-overlay="open"] > & .msp-shell-dock-content {
    visibility: hidden;
  }
}

[data-pinned] {
  --msp-pinned-bg: var(--msp-color-panel);
  --msp-pinned-edge: -1px 0 0 var(--msp-glass-edge);
}

[data-pinned] > .msp-shell-dock-floatingRight {
  gap: 0;

  & .msp-shell-dock-content {
    background: var(--msp-pinned-bg);
    --msp-surface: var(--msp-pinned-bg);
    -webkit-backdrop-filter: none;
    box-shadow: var(--msp-pinned-edge);
    border-radius: 0;
    margin: 0;
  }
}

.msp-shell-dock-floatingLeft {
  left: var(--msp-canvas-edge);
  flex-direction: row;
}

.msp-shell-dock-floatingTop, .msp-shell-dock-floatingBottom {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  flex-direction: column;
  align-items: stretch;

  & .msp-shell-dock-content {
    width: auto;
    height: var(--msp-dock-size);
    flex: none;
  }

  & .msp-shell-dock-header, & .msp-shell-dock-splitter {
    display: none;
  }

  & .msp-shell-dock-collapsedBar {
    border-radius: var(--msp-radius-lg);
    background: var(--msp-glass-bg);
    height: 28px;
    box-shadow: var(--msp-glass-shadow);
    -webkit-backdrop-filter: var(--msp-glass-filter);
    flex: none;
    align-self: flex-start;
  }
}

.msp-shell-dock-floatingTop {
  bottom: auto;
}

.msp-shell-dock-floating:is(.msp-shell-dock-floatingRight, .msp-shell-dock-floatingLeft, .msp-shell-dock-floatingTop, .msp-shell-dock-floatingBottom) {
  pointer-events: none;
}

.msp-shell-dock-floatingTop.msp-shell-dock-band, .msp-shell-dock-floatingBottom.msp-shell-dock-band {
  left: 0;
  right: calc(var(--msp-canvas-end, 0px) - var(--msp-canvas-pinned, 0px));
  background: linear-gradient(to bottom,
    var(--msp-color-bg) calc(100% - var(--msp-band-fade, 0px) - var(--msp-band-dissolve, 0px)),
    color-mix(in srgb, var(--msp-color-bg) 60%, transparent) calc(100% - var(--msp-band-fade, 0px) * .6),
    transparent);
  pointer-events: none;

  & .msp-shell-dock-content {
    pointer-events: none;
  }
}

.msp-shell-dock-floatingTop.msp-shell-dock-band {
  top: 0;
}

.msp-shell-dock-floatingBottom.msp-shell-dock-band {
  background: linear-gradient(to top,
    var(--msp-color-bg) calc(100% - var(--msp-band-fade, 0px) - var(--msp-band-dissolve, 0px)),
    color-mix(in srgb, var(--msp-color-bg) 60%, transparent) calc(100% - var(--msp-band-fade, 0px) * .6),
    transparent);
  bottom: 0;
}

.msp-shell-dock-floatingBottom {
  flex-direction: column-reverse;
  top: auto;
}

.msp-shell-dock-rail {
  flex: none;
  align-self: stretch;
  container-type: size;
}

@container (height <= 619px) {
  .msp-shell-dock-rail > * {
    --msp-rail-button: 34px;
    --msp-rail-button-captioned: 40px;
    --msp-rail-icon: 18px;
    --msp-rail-icon-captioned: 15px;
  }
}

@container (height <= 529px) {
  .msp-shell-dock-rail > * {
    --msp-rail-button: 30px;
    --msp-rail-button-captioned: 36px;
    --msp-rail-icon: 16px;
    --msp-rail-icon-captioned: 14px;
  }
}

.msp-shell-dock-railMenu {
  right: calc(44px + var(--msp-space-2));
  z-index: var(--msp-z-overlay);
  max-height: 100%;
  animation: msp-shell-dock-rail-menu-in var(--msp-motion-fast) var(--msp-ease);
  display: flex;
  position: absolute;

  & > * {
    grid-template-rows: minmax(0, 1fr);
    min-height: 0;
  }
}

.msp-shell-dock-railMenuScroll {
  min-height: 0;
}

.msp-shell-dock-railMenuRows {
  display: grid;
}

@keyframes msp-shell-dock-rail-menu-in {
  from {
    opacity: 0;
    transform: translateX(4px);
  }
}

.msp-shell-dock-railFoot {
  flex-direction: column;
  margin-top: auto;
  display: flex;

  & > :last-child {
    background: color-mix(in oklab, var(--msp-color-control), transparent 30%);
  }

  & > * + * {
    border-top: 1px solid var(--msp-glass-edge);
  }
}

.msp-shell-dock-pin > span {
  justify-content: center;
  align-items: center;

  & > svg {
    width: 14px;
    height: 14px;
  }
}
}
`);var Zo=[{name:`normal`,min:620,button:40,captioned:46},{name:`compact`,min:530,button:34,captioned:40},{name:`small`,min:0,button:30,captioned:36}];function Qo(e){return Zo.find(t=>e>=t.min)??Zo[Zo.length-1]}var $o=new Set;function es(e,t){let n=Qo(t);if(t<=0)return{step:n,hidden:$o};let r=(e,t)=>{let r=new Set(e.map(e=>e.section)),i=0;for(let t of e)i+=t.captioned?n.captioned:n.button;return t&&(i+=n.button,r.add(`more`)),i+Math.max(0,r.size-1)};if(r(e,!1)<=t)return{step:n,hidden:$o};let i=e.map((e,t)=>({e,i:t})).sort((e,t)=>t.e.priority-e.e.priority||t.i-e.i).map(e=>e.e),a=new Set,o=e;for(let e of i)if(a.add(e.id),o=o.filter(t=>t!==e),r(o,!0)<=t)break;return{step:n,hidden:a}}function ts(e){let t=[];for(let n of e){let e=n.group,r=t.find(t=>t.group===e);r?r.items.push(n):t.push({group:e,items:[n]})}return t.sort((e,t)=>e.group===void 0?-1:+(t.group===void 0))}function ns(e,t){let n=(e,t)=>({id:`tab:${e.id}`,section:t,priority:e.priority,captioned:!1,kind:`tab`,tab:e}),r=(e,t)=>({id:`tool:${e.id}`,section:t,priority:e.priority,captioned:!!e.caption,kind:`tool`,item:e}),i=[];for(let t of e.filter(e=>e.place===`head`))i.push(n(t,`head`));for(let t of e.filter(e=>!e.place||e.place===`strip`))i.push(n(t,`strip`));let a=ts(t);for(let e of a)if(e.group!==void 0)for(let t of e.items)i.push(r(t,`group:${e.group}`));for(let t of e.filter(e=>e.place===`foot`))i.push(n(t,`foot`));for(let e of a)if(e.group===void 0)for(let t of e.items)i.push(r(t,`lead`));return i.map((e,t)=>e.priority===void 0?{...e,priority:t}:e)}function rs(e){let t=O([]),n=new Map,r=[],i=()=>t.set(r.filter(e=>!e.visible||n.get(e.visible)?.on===!0)),a=()=>{for(let e of n.values())e.stop();n.clear()};return vt(e,e=>{r=e;let t=new Set;for(let r of e){let e=r.visible;if(!e||(t.add(e),n.has(e)))continue;let a={on:void 0,stop:()=>{}};n.set(e,a);let o=!0,s=e.subscribe(e=>{a.on=e,o||i()});o=!1,a.stop=()=>s.unsubscribe()}for(let[e,r]of n)t.has(e)||(r.stop(),n.delete(e));i()}),_t(e=>{e||a()}),A(a),t.asReadonly}var is=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),as=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),os=class{constructor(e,t){this.height=O(0),this.menu=O(void 0);let n=rs(h(e.toolbar,e=>e.filter(e=>e.place!==`canvas`)));this.entries=h([t.tabs,n],(e,t)=>ns(e,t));let r=h([this.entries,this.height.asReadonly],(e,t)=>({entries:e,fit:es(e,t)}));this.hidden=h(r,e=>e.fit.hidden,is),this.overflow=h(r,e=>e.entries.filter(t=>e.fit.hidden.has(t.id)),as)}toggleMenu(e,t){let n=this.menu.value;if(n&&n.anchor===e)return this.menu.set(void 0);let r=this.#e?.parentElement,i=r?r.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:i,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=hn(e,e=>{let t=Math.round(e[e.length-1].contentRect.height);t!==this.height.value&&this.height.set(t)});return()=>t?.disconnect()}};function ss(e){let t=R(`div`,{class:e.class,style:`display: contents`});return A(e.renderer.mount(t,e.ctx,k(`ViewHost`))),t}var cs=new WeakMap;function ls(e,t){let n=cs.get(t);if(n)return n;let r=h(t.state,e=>e,(e,t)=>e.size===t.size&&e.pinned===t.pinned&&e.floating===t.floating),i=h(r,e=>e.size),a=t.id===`right`?h([t.state,e.overlay],(e,t)=>t||e.collapsed?void 0:e.active):h(t.state,e=>e.collapsed?void 0:e.active);return n={size:i,sizePx:h(i,e=>`${e}px`),pinned:h(r,e=>e.pinned),floating:h(r,e=>e.floating),selected:he(a)},cs.set(t,n),n}function us(e){let{shell:t,dock:n}=e,r=n.id===`top`||n.id===`bottom`,i=h(n.tabs,e=>e.length>0),a=h(t.mode,e=>e===`compact`&&n.id===`right`),o=h([t.overlay,a],(e,t)=>t?e:void 0),s=h([n.tabs,a],(e,t)=>t&&e.some(e=>e.compactBar)?e.filter(e=>e.compactBar):e),c=!r||h([n.tabs,n.active],(e,t)=>e.length>1&&!!t),l=Fn(`msp-panel`),u;return R(N,{when:i,children:()=>{let i=ls(t,n).sizePx,d=z(`div`,{class:`${Y.dock} ${Y[n.id]}`,ref:e=>{u=e},children:[R(N,{when:n.active,reveal:!0,swap:()=>u,fallback:r?()=>R(gs,{shell:t,dock:n}):void 0,children:e=>R(xs,{shell:t,dock:n,tab:e,id:l,...n.id===`right`?{coveredBy:o}:{}})}),R(N,{when:a,children:()=>R(Gs,{shell:t})}),R(N,{when:c,children:()=>{let i,o=z(`div`,{class:Y.strip,children:[R(`div`,{role:`tablist`,"aria-label":`Panels`,style:`display: contents`,ref:e=>{i=e,A(Nn(e))},children:R(P,{each:s,children:e=>R(ys,{shell:t,dock:n,tab:e,panel:l})})}),e.stripEnd]});return M([a],()=>U(i,`aria-orientation`,a.value||r?`horizontal`:`vertical`)),o}})]});return M([i,a,o],()=>{ji(d,Y.compact,a.value),U(d,`data-covered`,!!o.value),Mi(d,`--msp-dock-size`,i.value)}),d}})}function ds(e){let{shell:t,dock:n}=e,r=ls(t,n).sizePx,i=new os(t,n),a=h([n.tabs,i.hidden],(e,t)=>t.size?e.filter(e=>!t.has(`tab:${e.id}`)):e),o=h(a,e=>e.filter(e=>e.place===`head`),p),s=h(a,e=>e.filter(e=>!e.place||e.place===`strip`),p),c=h(a,e=>e.filter(e=>e.place===`foot`),p),l=Fn(`msp-panel`);if(n.id===`top`||n.id===`bottom`){let e=h(n.active,e=>e?.frame===`none`),i=R(`div`,{class:`${Y.floating} ${n.id===`top`?Y.floatingTop:Y.floatingBottom}`,children:R(N,{when:n.active,reveal:`fade`,children:e=>R(xs,{shell:t,dock:n,tab:e,id:l})})});return M([e,r],()=>{ji(i,Y.band,e.value),Mi(i,`--msp-dock-size`,r.value)}),i}let u=h(i.height.asReadonly,e=>`${(e>0?Qo(e):Zo[0]).button}px`),d=z(`div`,{class:`${Y.floating} ${n.id===`left`?Y.floatingLeft:Y.floatingRight}`,children:[z(`div`,{class:`${Y.rail} ${J.frame}`,ref:e=>{A(i.observe(e))},children:[e.railLead,R(N,{when:h(o,e=>e.length>0),children:()=>R(`div`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Home`,ref:e=>A(Nn(e)),children:R(P,{each:o,children:e=>R(ys,{shell:t,dock:n,tab:e,panel:l})})})}),R(N,{when:h(s,e=>e.length>0),children:()=>R(`div`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`Panels`,ref:e=>A(Nn(e)),children:R(P,{each:s,children:e=>R(ys,{shell:t,dock:n,tab:e,panel:l})})})}),e.railItems?.(i),R(ps,{shell:t,dock:n,rail:i,root:()=>d}),z(`div`,{class:Y.railFoot,children:[R(N,{when:h(c,e=>e.length>0),children:()=>R(`div`,{class:Y.strip,role:`tablist`,"aria-orientation":`vertical`,"aria-label":`More panels`,ref:e=>A(Nn(e)),children:R(P,{each:c,children:e=>R(ys,{shell:t,dock:n,tab:e,panel:l})})})}),e.railFoot?.(i)]})]}),R(N,{when:n.active,reveal:`side`,swap:()=>d,children:e=>R(xs,{shell:t,dock:n,tab:e,id:l,pinnable:!0,coveredBy:t.overlay})}),R(ms,{shell:t,dock:n,rail:i})]});return M([r,u],()=>{Mi(d,`--msp-dock-size`,r.value),Mi(d,`--msp-rail-head`,u.value)}),d}function fs(e,t,n){t.id===`right`&&e.overlay.value?(e.closeOverlay(),e.show(n.id)):e.select(n.id)}function ps(e){let{rail:t}=e,n=t.menu,r=h(n.asReadonly,e=>!!e);return R(N,{when:h(t.overflow,e=>e.length>0),children:()=>{A(()=>n.set(void 0));let e=R(`button`,{type:`button`,class:Y.tab,"data-tip":`More`,"data-tip-side":`left`,"aria-label":`More`,"aria-haspopup":`menu`,onClick:e=>t.toggleMenu(e.currentTarget),onKeyDown:e=>{e.key!==`ArrowDown`&&e.key!==`ArrowUp`||n.value||(e.preventDefault(),e.currentTarget.click())},children:R(L,{name:`ellipsis`,size:20})});return M([r],()=>U(e,`aria-expanded`,String(r.value))),R(`nav`,{class:Y.strip,"aria-label":`More buttons`,children:e})}})}function ms(e){let{shell:t,dock:n,rail:r}=e,i=r.menu,a=h([i.asReadonly,r.overflow],(e,t)=>e&&(e.item?e.item.menu?.length:t.length>0)?e:void 0),o=(e,r)=>{if(i.set(void 0),e.tab)return fs(t,n,e.tab);let a=e.item;a.overlay?t.toggleOverlay(a.overlay,r):a.run?.(r)};return F(document,`keydown`,e=>{if(e.key!==`Escape`||!i.value||!mr(i.value.anchor,e))return;let t=i.value.anchor;i.set(void 0),t.focus(),e.preventDefault()}),F(document,`pointerdown`,e=>{let t=i.value;if(!t)return;let n=ur(e);dr(e,t.anchor)||n.closest?.(`.${Y.railMenu}`)||i.set(void 0)}),R(N,{when:a,children:e=>{let t=On(()=>e.anchor),n;A(()=>t(n));let a=e.item?ws(e.item):void 0,s=R(`div`,{class:J.toolMenuCard,role:`menu`,"aria-label":e.item?Ts(e.item):`More`,onKeyDown:Mn,ref:e=>{n=e,queueMicrotask(()=>jn(e))},children:R(zi,{class:Y.railMenuScroll,contentClass:Y.railMenuRows,children:e.item?R(Ms,{items:e.item.menu,onRun:()=>i.set(void 0)}):R(P,{each:r.overflow,children:t=>R(hs,{entry:t,onRun:()=>o(t,e.anchor)})},e=>e.id)})});return a&&M([a],()=>U(s,`aria-label`,a.value.title)),R(`div`,{class:Y.railMenu,style:{bottom:`${e.bottom}px`},children:s})}})}function hs(e){let{entry:t}=e,n=t.item?ws(t.item):void 0,r=document.createTextNode(t.tab?t.tab.title:n?n.value.title:Ts(t.item));return n&&M([n],()=>H(r,n.value.title)),z(`button`,{type:`button`,role:`menuitem`,class:J.toolMenuRow,onClick:()=>e.onRun(),children:[t.tab?R(L,{name:t.tab.icon,size:16}):R(Es,{item:t.item,size:16,...n?{face:n}:{}}),R(`span`,{class:J.toolMenuLabel,children:r}),R(`span`,{})]})}function gs(e){let{shell:t,dock:n}=e;return R(`div`,{class:Y.collapsedBar,children:R(P,{each:n.tabs,children:e=>z(`button`,{type:`button`,class:Y.barTab,onClick:()=>t.show(e.id),title:`Show ${e.title}`,children:[R(L,{name:n.id===`top`?`chevron-down`:`chevron-up`,size:14}),e.title]})})})}function _s(e,t){return[{id:`hide`,label:`Hide ${t.title}`,icon:`eye-off`,run:()=>e.hideTab(t.id)},...e.hiddenTabs.value.map(t=>({id:`show:${t.id}`,label:`Show ${t.title}`,icon:`eye`,run:()=>e.showTab(t.id)})),{id:`reset`,label:`Reset layout`,icon:`rotate-ccw`,run:()=>e.resetLayout()}]}function vs(e,t,n,r){let i=n.closest(`.msp-root`)??document.body,a=n.getBoundingClientRect();Nr(i,r??{x:a.left,y:a.bottom},_s(e,t))}function ys(e){let{shell:t,dock:n,tab:r}=e,i=ls(t,n).selected.key(r.id),a=R(`button`,{type:`button`,role:`tab`,class:Y.tab,"data-tip":r.title,"data-tip-side":`left`,"aria-label":r.title,"aria-controls":e.panel,"data-tab":r.id,onClick:()=>fs(t,n,r),onContextMenu:e=>{e.preventDefault(),vs(t,r,e.currentTarget,{x:e.clientX,y:e.clientY})},onKeyDown:e=>{(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)&&(e.preventDefault(),vs(t,r,e.currentTarget))},children:R(L,{name:r.icon,size:20})});return M([i],()=>U(a,`aria-selected`,String(i.value))),a}function bs(e){let{shell:t}=e,n=t.dock(e.dock);return R(N,{when:h([t.mode,t.compactRail],(e,t)=>!t&&e!==`embedded`&&e!==`compact`),children:()=>R(sr,{variant:`ghost`,size:`sm`,class:Y.pin,icon:R(L,{name:`pin`}),title:`Pin beside the canvas`,pressed:ls(t,n).pinned,onClick:()=>t.setPinned(e.dock,!n.state.value.pinned)})})}function xs(e){let{shell:t,dock:n,tab:r}=e,i=!e.coveredBy||h(e.coveredBy,e=>!e),a,o=!1,s=e=>{let t=e.relatedTarget;if(t){o=!!a?.contains(t);return}let n=ur(e);queueMicrotask(()=>{let e=Tn();e&&a?.contains(e)||n.isConnected&&!n.closest(`[inert]`)&&(o=!1)})};return A(()=>{if(!o)return;let e=Tn();if(e&&!a?.contains(e))return;let t=a?.closest(`.msp-root`)??a?.getRootNode();(t?[...t.querySelectorAll(`[role="tab"]`)]:[]).find(e=>e.dataset.tab===r.id)?.focus({preventScroll:!0})}),$t(i,()=>z(`section`,{class:r.frame===`none`?`${Y.content} ${Y.frameless}`:Y.content,role:`tabpanel`,id:e.id,"aria-label":r.title,"data-msp-scope":`panel:${r.id}`,ref:e=>{a=e},onFocusIn:()=>{o=!0},onFocusOut:s,children:[R(Ss,{shell:t,dock:n}),z(`header`,{class:Y.header,children:[R(`h2`,{class:Y.title,children:typeof r.heading==`function`?r.heading():r.heading??r.title}),e.pinnable?R(bs,{shell:t,dock:n.id}):null,R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`x`}),title:`Close panel`,onClick:()=>t.toggle(n.id)})]}),R(zi,{class:Y.body,contentClass:Y.bodyContent,children:R(N,{when:h(t.tabFocus,e=>({section:e?.tab===r.id?e.section:void 0}),(e,t)=>e.section===t.section&&!t.section),children:e=>R(ss,{renderer:r.render,ctx:{shell:t,dock:n.id,...e.section?{focus:e.section}:{}}})})})]}))}function Ss(e){let{shell:t,dock:n}=e,r=n.id===`left`?1:-1,i=bt(-1);vt(i,e=>{e>=0&&t.setSize(n.id,e)});let a,o=ls(t,n).size,s=R(`div`,{class:Y.splitter,role:`separator`,"aria-orientation":`vertical`,tabIndex:0,"aria-label":`Panel width`,onKeyDown:e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault();let i=(e.shiftKey?64:16)*(e.key===`ArrowRight`?1:-1);t.setSize(n.id,n.state.value.size+r*i)},onPointerEnter:e=>e.currentTarget.setAttribute(`data-active`,``),onPointerLeave:e=>{a?.active||e.currentTarget.removeAttribute(`data-active`)},ref:e=>{a=xn(e,{start:t=>(e.setAttribute(`data-active`,``),{x:t.clientX,size:n.state.value.size}),move:(e,t)=>i.offer(t.size+r*(e.clientX-t.x)),end:(t,n,r)=>{if(n===`up`&&r){let t=e.getBoundingClientRect();if(r.clientX>=t.left&&r.clientX<=t.right&&r.clientY>=t.top&&r.clientY<=t.bottom)return}e.removeAttribute(`data-active`)}})},onDblClick:()=>t.setSize(n.id,n.id===`left`?300:340)});return M([o],()=>U(s,`aria-valuenow`,Math.round(o.value))),s}function Cs(e,t){let n=gt(e);if(!n)return O(e).asReadonly;if(f(n))return n;let r=d(n,t);return A(()=>r.dispose()),r}function ws(e){return e.face?Cs(e.face,{icon:e.icon,title:e.title}):void 0}function Ts(e){return e.caption?`${e.title} (${e.caption})`:e.title}function Es(e){let{item:t}=e,n=e.face??ws(t);if(!n)return R(L,{name:t.icon,size:e.size});let r,i=R(`span`,{class:e.class});return M([n],()=>{let t=n.value.icon;t!==r&&(r=t,i.replaceChildren(L({name:t,size:e.size})))}),i}function Ds(e){let{shell:t}=e,n=e.part??`all`,r=n===`canvas`,i=e.hidden?h([t.toolbar,e.hidden],(e,t)=>t.size?e.filter(e=>!t.has(`tool:${e.id}`)):e):t.toolbar,a=h(i,e=>{let t=ts(e.filter(e=>e.place===`canvas`===r));return n===`all`||r?t:t.filter(e=>n===`lead`?e.group===void 0:e.group!==void 0)});return R(`div`,{class:J.sections,children:R(P,{each:a,children:n=>R(`div`,{class:J.toolbar,role:`toolbar`,"aria-orientation":e.menus?`horizontal`:`vertical`,"aria-label":n.group??`commands`,children:n.items.map(n=>n.visible?R(N,{when:n.visible,children:()=>R(ks,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu})}):R(ks,{shell:t,item:n,menus:e.menus,railMenu:e.railMenu}))})},e=>e.group??``)})}function Os(e,t){let n=Cs(t.pressed??!1,!1),r=t.overlay;return r?h([e.overlay,n],(e,t)=>e?.overlay.id===r||t):n}function ks(e){let{shell:t,item:n,menus:r}=e,i=!r&&n.menu?.length?e.railMenu:void 0,a=r&&n.menu?.length?r:void 0,o=n.pressed||n.overlay?Os(t,n):void 0,s=ws(n),c=s?void 0:Ts(n),l=a?.shown.key(n),u=z(`button`,{type:`button`,class:J.tool,"data-captioned":n.caption?``:void 0,"data-tip":a?void 0:c,"data-tip-side":n.place===`canvas`?`top`:`left`,"aria-label":c,"aria-haspopup":a||i?`menu`:void 0,"data-overlay-trigger":n.overlay?``:void 0,"data-keeps-card":n.keepsCard?``:void 0,onClick:e=>{if(a&&!n.overlay&&!n.run)return a.show(n,e.currentTarget,e.detail===0);if(a&&As())return a.open.value?.item===n?a.hide():a.show(n,e.currentTarget,e.detail===0);if(i)return i(n,e.currentTarget);a?.hide(),n.overlay?t.toggleOverlay(n.overlay,e.currentTarget):n.run?.(e.currentTarget)},onKeyDown:a?e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),a.show(n,e.currentTarget,!0))}:void 0,onPointerEnter:a?e=>e.pointerType===`mouse`&&a.show(n,e.currentTarget):void 0,onPointerLeave:a?()=>a.hideSoon():void 0,onBlur:a?()=>a.hideSoon():void 0,children:[R(Es,{item:n,size:n.caption?16:20,class:J.face,...s?{face:s}:{}}),n.caption?R(`span`,{class:J.caption,children:n.caption}):null,a?R(`span`,{class:J.menuMark,"aria-hidden":`true`}):null]}),d=[];return s&&d.push(s),o&&d.push(o),l&&d.push(l),d.length&&M(d,()=>{s&&(U(u,`aria-label`,s.value.title),a||U(u,`data-tip`,s.value.title)),o&&U(u,`aria-pressed`,String(o.value)),l&&U(u,`aria-expanded`,String(l.value))}),u}var As=()=>typeof matchMedia==`function`&&matchMedia(`(hover: none)`).matches;function js(e,t){let n=e.menu??[];return!e.run||!As()?n:[{id:`${e.id}:self`,label:e.title,icon:e.icon,group:``,run:()=>e.run?.(t)},...n]}function Ms(e){let{onSubmenu:t}=e;return R(Dt,{children:e.items.map((n,r,i)=>z(Dt,{children:[r>0&&n.group!==i[r-1].group?R(`div`,{class:J.toolMenuDivider,role:`separator`}):null,n.items&&!t?z(Dt,{children:[R(`div`,{class:J.toolMenuHeading,role:`presentation`,children:n.label}),R(N,{when:n.items,children:t=>R(Ms,{items:t,onRun:e.onRun})})]}):n.items&&t?z(`button`,{type:`button`,role:`menuitem`,"aria-haspopup":`menu`,class:J.toolMenuRow,disabled:!!n.disabled,onPointerEnter:e=>t(n,e.currentTarget),onClick:e=>t(n,e.currentTarget,!0),onKeyDown:e=>{e.key===`ArrowRight`&&(e.preventDefault(),t(n,e.currentTarget,!0))},children:[n.icon?R(L,{name:n.icon,size:16}):R(`span`,{}),z(`span`,{class:J.toolMenuLabel,children:[n.label,n.disabled||n.hint?R(`span`,{class:J.toolMenuHint,children:n.disabled??n.hint}):null]}),R(L,{name:`chevron-right`,size:14,class:J.toolMenuChevron})]}):z(`button`,{type:`button`,role:n.pressed?n.choice?`menuitemradio`:`menuitemcheckbox`:`menuitem`,"aria-checked":n.pressed,class:J.toolMenuRow,disabled:!!n.disabled,onPointerEnter:t?()=>t(void 0):void 0,onClick:()=>{e.onRun(),n.run()},children:[n.icon?R(L,{name:n.icon,size:16}):R(`span`,{}),z(`span`,{class:J.toolMenuLabel,children:[n.label,n.disabled||n.hint?R(`span`,{class:J.toolMenuHint,children:n.disabled??n.hint}):null]}),n.pressed?R(N,{when:n.pressed,children:()=>R(L,{name:`check`,size:14,class:J.toolMenuCheck})}):null]})]}))})}function Ns(e,t,n){let r=t.pressed||t.overlay?Os(e,t):void 0,i=()=>{t.overlay?e.toggleOverlay(t.overlay,n()):t.run?.(n())},a={id:t.id,label:t.title,icon:t.icon,group:t.group??``},o=t.menu??[];if(!o.length)return{...a,...r?{pressed:r}:{},run:i};let s=(t.run||t.overlay)&&!o.some(e=>e.label===t.title)?[{id:`${t.id}:self`,label:t.title,icon:t.icon,group:``,...r?{pressed:r}:{},run:i}]:[];return{...a,run:()=>{},items:O([...s,...o]).asReadonly}}function Ps(e,t,n){let r=k(`collapsedRows`),i=new Map,a=t=>{let a=i.get(t);if(!a){let o=r.child();i.set(t,a={row:mt(o,()=>Ns(e,t,n)),scope:o})}return a.row},o=rs(h(e.toolbar,e=>ts(e.filter(e=>e.place===`canvas`)).flatMap(e=>e.items)));return h([Cs(t??[],[]),o],(e,t)=>{let n=[...e.map(e=>({...e,group:e.group??`lead`})),...t.map(a)];if(i.size>t.length){let e=new Set(t);for(let[t,n]of i)e.has(t)||(n.scope.dispose(),i.delete(t))}return n})}var Fs={id:`toolbar`,place:`canvas`,icon:`wrench`,title:`Toolbar`};function Is(e){let{shell:t}=e,n=new zs,r,i,a={rows:Ps(t,e.leadMenu,()=>i??r)},o=t.toolbarCollapsed,s=$t(h(o,e=>!e),()=>z(`div`,{class:J.bar,children:[R(`div`,{class:J.frame,children:z(zi,{axis:`x`,contentClass:J.stackTools,children:[e.lead,R(Ds,{shell:t,part:`canvas`,menus:n})]})}),e.aside]})),c=h(a.rows,e=>e.length>0),l=e.quiet===void 0?void 0:Cs(e.quiet,!1),u=z(`div`,{class:J.stack,children:[s,R(N,{when:o,children:()=>R(N,{when:c,children:()=>R(`div`,{class:`${J.frame} ${J.folded}`,children:R(Ls,{menus:n,popup:a,ref:e=>{i=e}})})})}),R(Bs,{menus:n})]});return r=u,M(l?[o,l]:[o],()=>{U(s,`hidden`,o.value),l&&U(u,`data-quiet`,l.value)}),vt(o,()=>n.hide()),n.stack=u,A(()=>n.dispose()),u}function Ls(e){let{menus:t,popup:n}=e,r=t.shown.key(Fs),i=z(`button`,{type:`button`,class:J.tool,"data-stack-collapsed":``,"aria-label":`Toolbar`,"aria-haspopup":`menu`,ref:e.ref,onClick:e=>{if(As()&&t.open.value?.item===Fs)return t.hide();t.show(Fs,e.currentTarget,e.detail===0,n)},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),t.show(Fs,e.currentTarget,!0,n))},onPointerEnter:e=>e.pointerType===`mouse`&&t.show(Fs,e.currentTarget,!1,n),onPointerLeave:()=>t.hideSoon(),onBlur:()=>t.hideSoon(),children:[R(L,{name:`wrench`,size:18}),R(`span`,{class:J.menuMark,"aria-hidden":`true`})]});return M([r],()=>U(i,`aria-expanded`,String(r.value))),i}var Rs=8,zs=class{constructor(){this.open=O(void 0),this.shown=he(h(this.open.asReadonly,e=>e?.item))}#e;show(e,t,n=!1,r){this.keep();let i=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,a=this.roomAbove(this.stack),o=this.open.value;(o?.item!==e||o.right!==i||o.room!==a)&&this.open.set({item:e,right:i,room:a,button:t,...r?{popup:r}:{}}),n&&queueMicrotask(()=>this.menu&&jn(this.menu))}roomAbove(e,t){if(!e)return 0;let n=e.closest(`[data-msp-viewport]`),r=(t??e.getBoundingClientRect().top)-(n?.getBoundingClientRect().top??0)-Rs;return r>0?Math.round(r):0}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}};function Bs(e){let{menus:t}=e;return F(document,`keydown`,e=>{e.key===`Escape`&&!e.defaultPrevented&&t.open.value&&(!t.stack||mr(t.stack,e))&&(t.hide(),e.preventDefault())}),F(document,`pointerdown`,e=>{let n=t.open.value;if(!n)return;let r=e.composedPath();t.menu&&r.includes(t.menu)||r.includes(n.button)||t.hide()},{capture:!0}),R(N,{when:t.open,children:e=>{let n=!1,r;A(()=>{if(t.menu===r&&(t.menu=void 0),!n)return;let i=Tn();(!i||r?.contains(i))&&e.button.focus({preventScroll:!0})});let i=O(void 0),a,o=(e,n,o=!1)=>{if(!e||!n||!r){i.value&&i.set(void 0);return}let s=n.getBoundingClientRect().bottom,c=Math.round(r.getBoundingClientRect().bottom-s),l=t.roomAbove(t.stack,s);(i.value?.item!==e||i.value.bottom!==c||i.value.room!==l)&&i.set({item:e,row:n,bottom:c,room:l}),o&&queueMicrotask(()=>a&&jn(a))},s=e=>{if(e.key===`ArrowLeft`||e.key===`Escape`){e.preventDefault();let t=i.value?.row;i.set(void 0),t?.focus({preventScroll:!0})}else Mn(e)};return z(`div`,{class:J.toolMenu,style:{right:`${e.right}px`,...e.room?{"--msp-menu-room":`${e.room}px`}:{}},role:`menu`,"aria-label":e.item.title,ref:e=>{r=e,t.menu=e},onPointerEnter:()=>t.keep(),onPointerLeave:()=>t.hideSoon(),onFocusIn:()=>{n=!0,t.keep()},onFocusOut:()=>t.hideSoon(),children:[R(`div`,{class:J.toolMenuCard,onKeyDown:Mn,children:e.popup?R(Dt,{children:R(N,{when:e.popup.rows,children:e=>R(zi,{class:J.toolMenuScroll,contentClass:J.toolMenuScrollContent,children:R(Ms,{items:e,onRun:()=>t.hide(),onSubmenu:o})})})}):R(zi,{class:J.toolMenuScroll,contentClass:J.toolMenuScrollContent,children:R(Ms,{items:js(e.item,e.button),onRun:()=>t.hide(),onSubmenu:o})})}),R(N,{when:i,children:e=>R(`div`,{class:J.toolSubmenu,style:{bottom:`${e.bottom}px`,...e.room?{"--msp-menu-room":`${e.room}px`}:{}},role:`menu`,"aria-label":e.item.label,ref:e=>{a=e},onKeyDown:s,children:R(`div`,{class:J.toolMenuCard,children:R(zi,{class:J.toolMenuScroll,contentClass:J.toolMenuScrollContent,children:R(N,{when:e.item.items,children:e=>R(Ms,{items:e,onRun:()=>t.hide()})})})})})})]})}})}function Vs(e){let{shell:t}=e,n=O(!1),r=t.dock(`right`),i=h(t.toolbar,e=>e.filter(e=>e.place!==`canvas`&&!e.group)),a=h(t.toolbar,e=>e.filter(e=>e.place!==`canvas`&&e.group)),o=h(r.tabs,e=>e.some(e=>e.compactBar)?e.filter(e=>!e.compactBar):[]),s,c=(e,r)=>{n.set(!1),e.overlay?t.toggleOverlay(e.overlay,r):e.run?.(r)},l,u=z(`div`,{class:J.railMenu,children:[R(P,{each:i,children:e=>{let t=ws(e),n=t?void 0:Ts(e),r=R(`button`,{type:`button`,class:J.railMenuButton,"aria-label":n,"data-tip":n,onClick:t=>c(e,t.currentTarget),children:R(Es,{item:e,size:20,class:J.face,...t?{face:t}:{}})});return t&&M([t],()=>{U(r,`aria-label`,t.value.title),U(r,`data-tip`,t.value.title)}),r}},e=>e.id),z(`div`,{class:J.railMenuAnchor,children:[R(`button`,{type:`button`,class:J.railMenuButton,"aria-label":`More`,"aria-haspopup":`menu`,"data-tip":`More`,ref:e=>l=e,onClick:e=>{n.set(!n.value),n.value&&e.detail===0&&queueMicrotask(()=>s&&jn(s))},onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n.set(!0),queueMicrotask(()=>s&&jn(s)))},children:R(L,{name:`ellipsis`,size:20})}),R(N,{when:n,children:()=>{let e=On();return A(()=>e(s)),z(`div`,{class:J.railMenuList,role:`menu`,"aria-label":`More`,ref:e=>{s=e},onKeyDown:e=>{Mn(e),e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),n.set(!1))},children:[R(P,{each:o,children:e=>z(`button`,{type:`button`,role:`menuitem`,class:J.toolMenuRow,onClick:()=>{n.set(!1),t.show(e.id)},children:[R(L,{name:e.icon,size:16}),R(`span`,{class:J.toolMenuLabel,children:e.title}),R(`span`,{})]})},e=>e.id),R(N,{when:h([o,a],(e,t)=>e.length>0&&t.length>0),children:()=>R(`div`,{class:J.railMenuDivider})}),R(P,{each:a,children:e=>{let t=ws(e),n=e.visible?Cs(e.visible,!0):void 0,r=document.createTextNode(t?t.value.title:Ts(e)),i=z(`button`,{type:`button`,role:`menuitem`,class:J.toolMenuRow,onClick:t=>c(e,t.currentTarget),children:[R(Es,{item:e,size:16,class:J.face,...t?{face:t}:{}}),R(`span`,{class:J.toolMenuLabel,children:r}),R(`span`,{})]}),a=[];return t&&a.push(t),n&&a.push(n),a.length&&M(a,()=>{t&&H(r,t.value.title),n&&U(i,`hidden`,!n.value)}),i}},e=>e.id)]})}})]})]});return M([n.asReadonly],()=>U(l,`aria-expanded`,String(n.value))),F(document,`pointerdown`,e=>{n.value&&!dr(e,u)&&n.set(!1)}),u}function Hs(e){return R(N,{when:h(e.status.tasks,e=>e.find(e=>e.overlay),(e,t)=>e?.id===t?.id),children:t=>{let n=h(e.status.tasks,e=>e.find(e=>e.id===t.id)??t),r=h(n,e=>e.progress===void 0?void 0:Math.round(e.progress*100)),i=document.createTextNode(``),a=document.createTextNode(``),o,s,c=R(`div`,{class:J.busy,role:`alertdialog`,"aria-modal":`true`,"aria-label":t.label,children:z(`div`,{class:J.busyCard,children:[z(`div`,{class:J.busyHead,children:[R(L,{name:`loader-circle`,size:18,class:J.busySpin}),R(`span`,{class:J.busyLabel,children:i}),R(`span`,{class:J.busyPercent,children:a})]}),R(`div`,{class:J.busyTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,ref:e=>o=e,children:R(`span`,{class:J.busyBar,ref:e=>s=e})}),t.abort?R(`div`,{class:J.busyActions,children:R(sr,{size:`sm`,onClick:()=>t.abort?.(),children:`Cancel`})}):null]})});return M([n,r],()=>{let e=r.value;H(i,n.value.label),H(a,e===void 0?``:`${e}%`),U(o,`aria-valuenow`,e),U(s,`data-indeterminate`,e===void 0),Mi(s,`scale`,`${(e??30)/100} 1`)}),c}})}var Us=new WeakMap;function Ws(e){let t=Us.get(e);return t||Us.set(e,t=O(void 0,{compare:Object.is})),t}function Gs(e){let t=Ws(e.shell),n=R(`div`,{class:J.cardSlot});return t.set(n),A(()=>{t.value===n&&t.set(void 0)}),n}function Ks(e){let{shell:t}=e;return R(N,{when:h(t.overlay,e=>!!e),children:()=>R(qs,{shell:t})})}function qs(e){let{shell:t}=e,n=t.overlay.value.anchor,r=On(()=>n),i=Fn(`msp-card-title`),a=h(t.dock(`right`).state,e=>e.pinned),o=document.createTextNode(``),s,c=Ws(t),l=()=>!!c.value,u=z(`section`,{class:J.card,role:`dialog`,"aria-labelledby":i,onKeyDown:e=>{p()||Dn(e,e.currentTarget)},children:[z(`header`,{class:J.cardHeader,children:[R(`h2`,{class:J.cardTitle,id:i,children:o}),R(bs,{shell:t,dock:`right`}),R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`x`}),title:`Close`,onClick:()=>t.closeOverlay()})]}),R(N,{when:t.overlay,children:e=>{n=e.anchor,kn(e.anchor)&&(s?.(),s=_n(()=>{s=void 0;let e=u.querySelector(`.${J.cardBody}, .${J.cardBodyFill}`),t=En(u);(t.find(t=>e?.contains(t))??t[t.length-1])?.focus()}));let r={shell:t,...e.focus?{focus:e.focus}:{}};return e.overlay.fill?R(`div`,{class:J.cardBodyFill,children:R(ss,{renderer:e.overlay.render,ctx:r})}):R(zi,{class:J.cardBody,contentClass:J.cardBodyContent,children:R(ss,{renderer:e.overlay.render,ctx:r})})}})]}),d=R(`div`,{style:`display: contents`,children:u});M([c.asReadonly],()=>{let e=c.value??d;if(u.parentElement===e)return;let t=Tn(),n=t&&u.contains(t)?t:void 0;e.append(u),ji(u,J.card,!c.value),ji(u,J.cardDocked,!!c.value),n?.focus({preventScroll:!0})}),A(()=>u.remove()),M([a,c.asReadonly,t.overlay],()=>{U(u,`aria-modal`,String(!c.value&&!a.value)),H(o,t.overlay.value?.overlay.title??``)});let f=()=>t.dock(`right`).state.value.pinned,p=()=>l()||f(),m=document;return F(m,`keydown`,e=>{e.key!==`Escape`||e.defaultPrevented||f()||!mr(u,e)||(t.closeOverlay(),e.preventDefault())}),F(m,`pointerdown`,e=>{let n=t.overlay.value;if(!n)return;let r=ur(e);f()||n.overlay.persistent||dr(e,u)||dr(e,n.anchor)||r.closest?.(`[data-overlay-trigger], [role=tab]`)||r.closest?.(`[data-keeps-card], [data-msp-canvas]`)||t.closeOverlay()},{capture:!0}),A(()=>r(u)),d}var Js={info:`info`,success:`circle-check`,warning:`triangle-alert`,error:`circle-alert`};function Ys(e){let{status:t}=e,n=n=>{t.setLogFilter(n===`error`?`problems`:`all`),e.onOpenLog?.()},r=document.createTextNode(``);return M([t.spoken],()=>H(r,t.spoken.value)),z(`div`,{class:J.status,children:[R(`div`,{class:J.announce,role:`status`,"aria-live":`polite`,children:r}),R(N,{when:t.current,children:e=>e.kind===`error`?z(`span`,{class:`${J.pill} ${J.message}`,"data-kind":e.kind,children:[z(`button`,{type:`button`,class:J.pillMain,title:`Show the problems in the log`,onClick:()=>n(e.kind),children:[R(L,{name:Js[e.kind],size:14}),R(`span`,{class:J.text,children:e.text})]}),R(`button`,{type:`button`,class:J.pillButton,"aria-label":`Dismiss`,"data-tip":`Dismiss`,onClick:()=>t.dismiss(e.id),children:R(L,{name:`x`,size:14})})]}):z(`button`,{type:`button`,class:`${J.pill} ${J.message}`,"data-kind":e.kind,title:`Show the log`,onClick:()=>n(e.kind),children:[R(L,{name:Js[e.kind],size:14}),R(`span`,{class:J.text,children:e.text})]})}),R(P,{each:h(t.tasks,e=>e.filter(e=>!e.overlay)),children:e=>R(Zs,{task:e})}),e.after]})}function Xs(e){return z(`div`,{class:J.context,children:[e.lead,R(P,{each:e.status.chips,children:e=>z(`span`,{class:`${J.pill} ${J.chip}`,children:[R(`button`,{type:`button`,class:J.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?R(`button`,{type:`button`,class:J.pillButton,title:`Clear`,onClick:()=>e.dismiss?.(),children:R(L,{name:`x`,size:14})}):null]})})]})}function Zs(e){let{task:t}=e;return z(`span`,{class:J.pill,children:[R(L,{name:`loader-circle`,size:14,class:J.spin}),R(`span`,{class:J.text,children:t.label}),t.progress===void 0?null:R(`span`,{class:J.progress,children:R(`div`,{style:{width:`${Math.round(t.progress*100)}%`}})}),t.abort?R(`button`,{type:`button`,class:J.pillButton,title:`Cancel`,onClick:()=>t.abort?.(),children:R(L,{name:`x`,size:14})}):null]})}function Qs(e){let{shell:t}=e,n=h(t.dock(`right`).tabs,e=>e.find(e=>e.place===`head`)?.icon??`prism`),r,i,a=R(`div`,{class:`${J.stack} ${J.railToggle}`,children:R(`div`,{class:J.frame,children:R(`button`,{type:`button`,class:J.tool,"data-tip-side":`top`,ref:e=>r=e,onClick:()=>t.toggleRail(),children:R(`span`,{class:J.face,ref:e=>i=e})})})}),o;return M([n,t.railOpen],()=>{let e=t.railOpen.value,a=e?`Hide the panel rail`:`Show the panel rail`;U(r,`data-tip`,a),U(r,`aria-label`,a),U(r,`aria-pressed`,String(e)),n.value!==o&&(o=n.value,i.replaceChildren(L({name:o,size:18})))}),a}var X={action:`msp-shell-help-panel-action`,conflict:`msp-shell-help-panel-conflict`,conflicts:`msp-shell-help-panel-conflicts`,content:`msp-shell-help-panel-content`,edit:`msp-shell-help-panel-edit`,editBar:`msp-shell-help-panel-editBar`,group:`msp-shell-help-panel-group`,heading:`msp-shell-help-panel-heading`,headingRow:`msp-shell-help-panel-headingRow`,help:`msp-shell-help-panel-help`,input:`msp-shell-help-panel-input`,key:`msp-shell-help-panel-key`,keys:`msp-shell-help-panel-keys`,list:`msp-shell-help-panel-list`,or:`msp-shell-help-panel-or`,recorder:`msp-shell-help-panel-recorder`,row:`msp-shell-help-panel-row`,srOnly:`msp-shell-help-panel-srOnly`};I(`views/shell/help-panel.module.css`,`@layer msp.components {
.msp-shell-help-panel-help {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-help-panel-content {
  gap: var(--msp-space-4);
  padding: 0 var(--msp-panel-inset) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-help-panel-group {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-shell-help-panel-heading {
  padding: 0 var(--msp-inset) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-shell-help-panel-list {
  margin: 0;
  display: grid;
}

.msp-shell-help-panel-row {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-shell-help-panel-action {
  flex: 1;
  min-width: 0;
}

.msp-shell-help-panel-input {
  justify-content: flex-end;
  align-items: center;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}

.msp-shell-help-panel-keys {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-shell-help-panel-key {
  min-width: 18px;
  padding: 1px var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-xs);
  text-align: center;
  white-space: nowrap;
}

.msp-shell-help-panel-or {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-help-panel-conflicts {
  gap: var(--msp-space-3);
  margin: 0 var(--msp-space-1);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-warning), transparent 85%);
  color: var(--msp-color-text);
  display: flex;
}

.msp-shell-help-panel-conflict {
  margin: 0;
}

.msp-shell-help-panel-headingRow {
  padding-right: var(--msp-space-1);
  justify-content: space-between;
  align-items: center;
  display: flex;

  & .msp-shell-help-panel-heading {
    padding-bottom: 0;
  }
}

.msp-shell-help-panel-edit {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-shell-help-panel-recorder {
  padding: 1px var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  outline: 1px solid var(--msp-color-accent);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
}

.msp-shell-help-panel-editBar {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-1) var(--msp-inset) 0;
  display: flex;
}

.msp-shell-help-panel-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
}
`);var $s=()=>[{action:`Command menu`,input:_({key:`k`,mod:!0}),or:_({key:`p`,mod:!0,shift:!0})},{action:`Help (this card)`,input:[`?`]},{action:`Close a menu, a card or the command menu`,input:[`Esc`]}];function ec(e){let t=e.commands,n=t.keymap,r=O(!1),i=O(void 0),a=he(i.asReadonly),o=O(``),s=h([t.commands,n.layers,i.asReadonly],(e,r,i)=>e.filter(e=>t.shortcut(e)||n.isRemapped(e.id)||e.id===i)),c=h([t.commands,n.layers],e=>{let t=n.conflicts(e);return t.length?t:void 0}),l=(e,r)=>{n.remap(e.id,r),i.set(void 0);let a=n.sharing(e.id,r,t.commands.value);o.set(`${e.title}: ${te(r)}${a.length?`, also used by ${a.map(e=>e.title).join(` and `)}`:``}.`)},u=document.createTextNode(``);return M([o.asReadonly],()=>H(u,o.value)),z(zi,{edge:!0,class:X.help,contentClass:X.content,"aria-label":`Help`,children:[e.intro?.(),R(N,{when:c,children:e=>z(`section`,{class:X.conflicts,"aria-label":`Shortcut conflicts`,children:[R(L,{name:`triangle-alert`,size:14}),R(`div`,{children:e.map(e=>z(`p`,{class:X.conflict,children:[R(rc,{input:_(e.chord)}),` is used by `,e.commands.map(e=>e.title).join(` and `),e.scope===`global`?``:` (in ${e.scope})`,`: only the first that can run takes it.`]}))})]})}),R(P,{each:e.bindings,children:e=>R(nc,{title:e.title,bindings:e.bindings})}),R(nc,{title:`Everywhere`,bindings:$s()}),z(`section`,{class:X.group,"aria-label":`Commands`,children:[z(`div`,{class:X.headingRow,children:[R(`h3`,{class:X.heading,children:`Commands`}),R(sr,{size:`xs`,variant:`ghost`,pressed:r.asReadonly,onClick:()=>{r.set(!r.value),i.set(void 0)},children:`Change keys`})]}),R(`dl`,{class:X.list,children:R(P,{each:s,children:e=>R(tc,{manager:t,command:e,editing:r.asReadonly,recording:a.key(e.id),onRecord:()=>i.set(e.id),onRecorded:t=>t?l(e,t):i.set(void 0),onChanged:e=>o.set(e)})},e=>e.id)}),R(N,{when:h(r.asReadonly,e=>e?!0:void 0),children:()=>z(`div`,{class:X.editBar,children:[R(Vi,{size:`sm`,"aria-label":`Give a key to a command`,options:[[``,`Give a key to…`],...t.commands.value.filter(e=>!t.shortcut(e)).map(e=>[e.id,e.title]).sort((e,t)=>e[1].localeCompare(t[1]))],value:``,onChange:e=>e&&i.set(e)}),R(sr,{size:`xs`,variant:`ghost`,onClick:()=>(n.resetAll(),o.set(`Every key is back to its default.`)),children:`Reset all`})]})}),R(`span`,{class:X.srOnly,role:`status`,"aria-live":`polite`,children:u})]})]})}function tc(e){let{manager:t,command:n}=e,r=t.keymap,i=h(r.layers,()=>({chord:t.shortcut(n),remapped:r.isRemapped(n.id)})),a=re();return z(`div`,{class:X.row,children:[R(`dt`,{class:X.action,children:n.title}),z(`dd`,{class:X.input,children:[R(N,{when:h(e.recording,e=>e?!0:void 0),fallback:()=>R(N,{when:h(i,e=>e.chord),fallback:()=>R(`span`,{class:X.or,children:`no key`}),children:e=>R(rc,{input:_(e,a)})}),children:()=>R(`span`,{class:X.recorder,tabIndex:0,role:`button`,"aria-label":`Press the new keys for ${n.title}; Escape cancels`,ref:e=>setTimeout(()=>e.isConnected&&e.focus()),onBlur:()=>e.onRecorded(void 0),onKeyDown:t=>{if(t.preventDefault(),t.stopPropagation(),t.key===`Escape`)return e.onRecorded(void 0);let n=w(t,a);n&&e.onRecorded(n)},children:`Press keys…`})}),R(N,{when:h(e.editing,e=>e?!0:void 0),children:()=>z(`span`,{class:X.edit,children:[R(sr,{size:`xs`,variant:`ghost`,title:`Change the key of ${n.title}`,onClick:()=>e.onRecord(),children:`Change`}),R(N,{when:h(i,e=>e.chord?!0:void 0),children:()=>R(sr,{size:`xs`,variant:`ghost`,title:`Remove the key of ${n.title}`,onClick:()=>{r.remap(n.id,null),e.onChanged(`${n.title}: no key.`)},children:`Clear`})}),R(N,{when:h(i,e=>e.remapped?!0:void 0),children:()=>R(sr,{size:`xs`,variant:`ghost`,title:`Back to the default key of ${n.title}`,onClick:()=>{r.reset(n.id);let t=r.defaultShortcut(n);e.onChanged(`${n.title}: ${t?te(t,a):`no key`} again.`)},children:`Reset`})})]})})]})]})}function nc(e){return z(`section`,{class:X.group,"aria-label":e.title,children:[R(`h3`,{class:X.heading,children:e.title}),R(`dl`,{class:X.list,children:e.bindings.map(e=>z(`div`,{class:X.row,children:[R(`dt`,{class:X.action,children:e.action}),z(`dd`,{class:X.input,children:[R(rc,{input:e.input}),e.or?z(Dt,{children:[R(`span`,{class:X.or,children:`or`}),R(rc,{input:e.or})]}):null]})]}))})]})}function rc(e){return R(`span`,{class:X.keys,children:e.input.map(e=>R(`kbd`,{class:X.key,children:e}))})}var ic={detail:`msp-shell-log-view-detail`,empty:`msp-shell-log-view-empty`,entries:`msp-shell-log-view-entries`,entry:`msp-shell-log-view-entry`,filters:`msp-shell-log-view-filters`,kind:`msp-shell-log-view-kind`,kinds:`msp-shell-log-view-kinds`,log:`msp-shell-log-view-log`,search:`msp-shell-log-view-search`,text:`msp-shell-log-view-text`,time:`msp-shell-log-view-time`};I(`views/shell/log-view.module.css`,`@layer msp.components {
.msp-shell-log-view-log {
  gap: var(--msp-space-2);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-log-view-filters {
  z-index: 1;
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-2) var(--msp-space-3);
  background: var(--msp-color-panel);
  display: flex;
  position: sticky;
  top: 0;
}

.msp-shell-log-view-kinds {
  gap: var(--msp-space-1);
  flex: none;
  display: flex;
}

.msp-shell-log-view-search {
  flex: auto;
  min-width: 0;
}

.msp-shell-log-view-entries {
  display: grid;
}

.msp-shell-log-view-empty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-muted);
}

.msp-shell-log-view-entry {
  align-items: baseline;
  gap: var(--msp-space-3);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-kind="error"] .msp-shell-log-view-kind {
    color: var(--msp-color-danger);
  }

  &[data-kind="warning"] .msp-shell-log-view-kind {
    color: var(--msp-color-warning);
  }

  &[data-kind="success"] .msp-shell-log-view-kind {
    color: var(--msp-color-success);
  }
}

.msp-shell-log-view-kind {
  color: var(--msp-color-text-subtle);
  align-self: center;
}

.msp-shell-log-view-text {
  overflow-wrap: anywhere;
}

.msp-shell-log-view-detail {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.msp-shell-log-view-time {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}
}
`);var ac=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}),oc={Transforms:`layers`,Plugin:`wrench`},sc=(e,t,n)=>t===`messages`&&e.source!==void 0||t===`problems`&&e.kind!==`warning`&&e.kind!==`error`||t.startsWith(`source:`)&&e.source!==t.slice(7)?!1:!n||e.text.toLowerCase().includes(n)||!!e.detail?.toLowerCase().includes(n);function cc(e){let t=e.status.logFilter,n=O(``),r=h(e.status.logged,e=>{let t=new Set;for(let n of e)n.source!==void 0&&t.add(n.source);return[...t].sort()},(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n])),i=h(r,e=>[{id:`all`,label:`All`,icon:`list`},{id:`messages`,label:`Messages`,icon:`info`},...e.map(e=>({id:`source:${e}`,label:e,icon:oc[e]??`tag`})),{id:`problems`,label:`Problems`,icon:`triangle-alert`}]),a=h([e.status.logged,t,n.asReadonly],(e,t,n)=>{let r=n.trim().toLowerCase();return t===`all`&&!r?e:e.filter(e=>sc(e,t,r))});return z(`div`,{class:ic.log,children:[z(`div`,{class:ic.filters,children:[R(`div`,{class:ic.kinds,role:`group`,"aria-label":`Show`,children:R(P,{each:i,children:n=>R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:n.icon,size:15}),title:n.label,pressed:h(t,e=>e===n.id),onClick:()=>e.status.setLogFilter(n.id)})},e=>e.id)}),R(Qa,{search:!0,size:`sm`,class:ic.search,placeholder:`Filter`,"aria-label":`Filter the log`,value:n.asReadonly,onInput:e=>n.set(e)})]}),R(`div`,{class:ic.entries,role:`log`,"aria-live":`off`,"aria-label":`Log`,children:R(P,{each:a,fallback:()=>R(`p`,{class:ic.empty,children:h(e.status.logged,e=>e.length?`Nothing matches.`:`No messages yet.`)}),children:e=>z(`div`,{class:ic.entry,"data-kind":e.kind,"data-source":e.source,children:[R(L,{name:Js[e.kind],size:14,class:ic.kind}),R(`span`,{class:ic.text,children:e.text}),e.detail?R(`span`,{class:ic.detail,children:e.detail}):R(`span`,{}),R(`time`,{class:ic.time,dateTime:e.time.toISOString(),children:ac.format(e.time)})]})},e=>e.id)})]})}var lc={body:`msp-shell-section-list-body`,chevron:`msp-shell-section-list-chevron`,header:`msp-shell-section-list-header`,list:`msp-shell-section-list-list`,section:`msp-shell-section-list-section`,title:`msp-shell-section-list-title`};I(`views/shell/section-list.module.css`,`@layer msp.components {
.msp-shell-section-list-list {
  font-size: var(--msp-font-size-sm);
  gap: var(--msp-space-1);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  display: grid;
}

.msp-shell-section-list-section {
  border-radius: var(--msp-radius-md);

  &:has([aria-expanded="true"]) {
    background: var(--msp-color-well);
  }
}

.msp-shell-section-list-header {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  height: var(--msp-row-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  text-align: left;
  font-weight: 600;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-expanded="true"] {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.msp-shell-section-list-title {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-section-list-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-shell-section-list-body {
  padding: var(--msp-space-2) var(--msp-space-3) var(--msp-space-3);
}

.msp-shell-section-list-list[data-bare] {
  padding: 0;

  & .msp-shell-section-list-header {
    height: 32px;
  }
}

.msp-shell-section-list-list[data-flat] {
  padding: 0;

  & .msp-shell-section-list-section {
    background: none;
  }

  & .msp-shell-section-list-header {
    height: 26px;
    font-size: var(--msp-font-size-sm);
    padding: 0;

    &:hover {
      color: var(--msp-color-accent);
      background: none;
    }
  }

  & .msp-shell-section-list-body {
    padding: 0 0 var(--msp-space-2);
  }
}
}
`);function uc(e){let{shell:t,subject:n}=e,r={shell:t,subject:n},i=t.sections(e.slot),a=h(i,e=>e.filter(e=>!e.when||e.when(r))),o=e.focus,s=e=>!!o&&(o===e||o.startsWith(`${e}/`)),c=e=>o?.startsWith(`${e}/`)?o.slice(e.length+1):void 0;return R(`div`,{class:lc.list,"data-flat":e.flat?``:void 0,"data-bare":e.bare?``:void 0,children:R(P,{each:a,children:n=>R(dc,{ctx:c(n.id)?{...r,focus:c(n.id)}:r,slot:e.slot,section:n,open:o?s(n.id):t.sectionOpen(e.slot,n.id)??(!e.collapsed||!!n.open),focused:s(n.id)})},e=>e.id)})}function dc(e){let{ctx:t,section:n}=e,r=O(e.open),i=O(e.open),a=O(!1),o,s,c,l=z(`section`,{class:lc.section,"data-section":n.id,children:[z(`button`,{type:`button`,class:lc.header,ref:e=>s=e,onClick:()=>{a.set(!0),c?.cancel(),c=void 0,i.set(!i.value);let s=!i.value&&r.value&&o?Re(o,`grow`):void 0;s?(c=s,t.shell.setSectionOpen(e.slot,n.id,!1),s.finished.then(()=>{c===s&&(c=void 0,r.set(!1),s.cancel())},()=>{})):(r.set(i.value),t.shell.setSectionOpen(e.slot,n.id,r.value))},children:[R(`span`,{class:lc.title,children:n.heading??n.title}),R(L,{name:`chevron-down`,size:14,class:lc.chevron})]}),R(`div`,{class:lc.body,ref:e=>{o=e},children:$t(r.asReadonly,()=>R(ss,{renderer:n.render,ctx:t}))})]});return M([i,r,a],()=>{U(s,`aria-expanded`,String(i.value)),U(o,`hidden`,!r.value),U(o,`data-reveal`,a.value)}),e.focused&&(t.shell.setSectionOpen(e.slot,n.id,!0),queueMicrotask(()=>l.scrollIntoView({block:`nearest`}))),l}var fc={body:`msp-settings-settings-tab-body`,chevron:`msp-settings-settings-tab-chevron`,group:`msp-settings-settings-tab-group`,groups:`msp-settings-settings-tab-groups`,groupsContent:`msp-settings-settings-tab-groupsContent`,header:`msp-settings-settings-tab-header`,none:`msp-settings-settings-tab-none`,search:`msp-settings-settings-tab-search`,searchIcon:`msp-settings-settings-tab-searchIcon`,searchInput:`msp-settings-settings-tab-searchInput`,tab:`msp-settings-settings-tab-tab`,title:`msp-settings-settings-tab-title`,toggle:`msp-settings-settings-tab-toggle`};I(`views/settings/settings-tab.module.css`,`@layer msp.components {
.msp-settings-settings-tab-tab {
  height: 100%;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-settings-settings-tab-search {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  flex: none;
  display: flex;
  position: relative;
}

.msp-settings-settings-tab-searchIcon {
  left: calc(var(--msp-space-2) + var(--msp-space-3));
  color: var(--msp-color-text-subtle);
  pointer-events: none;
  position: absolute;
}

.msp-settings-settings-tab-searchInput {
  min-width: 0;
  padding-left: calc(var(--msp-space-3) + var(--msp-icon-sm) + var(--msp-space-2));
  flex: 1;
}

.msp-settings-settings-tab-groups {
  flex: 1 1 0;
  min-height: 0;
}

.msp-settings-settings-tab-groupsContent {
  align-content: start;
  gap: var(--msp-space-1);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-settings-settings-tab-group {
  border-radius: var(--msp-radius-md);

  &:has(.msp-settings-settings-tab-toggle[aria-expanded="true"]) {
    background: var(--msp-color-well);
  }
}

.msp-settings-settings-tab-header {
  border-radius: var(--msp-radius-md);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:has(.msp-settings-settings-tab-toggle[aria-expanded="true"]) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.msp-settings-settings-tab-toggle {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 32px;
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-muted);
  text-align: left;
  flex: 1;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-settings-settings-tab-title {
  color: var(--msp-color-text);
  flex: 1;
  font-weight: 600;
}

.msp-settings-settings-tab-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-settings-settings-tab-body {
  --msp-label-width: 46%;
  padding: var(--msp-space-1) var(--msp-space-3) var(--msp-space-3);

  &[data-wide-labels] {
    --msp-label-width: calc(100% - 64px);
  }
}

.msp-settings-settings-tab-none {
  padding: var(--msp-space-4) var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  text-align: center;
  margin: 0;
}
}
`);function pc(e){let{model:t}=e,n=O(``),r=n.asReadonly,i=h(r,e=>e.trim().length>0&&!t.groups.some(t=>wa(t.form.params,e)));return z(`div`,{class:fc.tab,children:[z(`div`,{class:fc.search,children:[R(L,{name:`search`,size:14,class:fc.searchIcon}),R(Qa,{search:!0,size:`sm`,class:fc.searchInput,"aria-label":`Search settings`,placeholder:`Search settings`,value:r,onInput:e=>n.set(e)})]}),z(zi,{class:fc.groups,contentClass:fc.groupsContent,children:[t.groups.map((e,t)=>R(mc,{group:e,query:r,open:t===0})),R(N,{when:i,children:()=>z(`p`,{class:fc.none,children:[`No setting matches “`,r,`”.`]})}),e.more?.()]})]})}function mc(e){let{group:t,query:n}=e,r=O(e.open),i=h(n,e=>e.trim().length>0),a=h([r.asReadonly,i],(e,t)=>e||t),o=h(n,e=>!wa(t.form.params,e));return z(`section`,{class:fc.group,hidden:o,"aria-label":t.title,children:[R(`div`,{class:fc.header,children:z(`button`,{type:`button`,class:fc.toggle,"aria-expanded":a,onClick:()=>r.set(!r.value),children:[R(`span`,{class:fc.title,children:t.title}),R(L,{name:`chevron-down`,size:14,class:fc.chevron})]})}),R(N,{when:a,reveal:!0,children:()=>R(`div`,{class:fc.body,"data-wide-labels":t.wideLabels?``:void 0,children:R(va,{form:t.form,filter:n})})})]})}var hc={canvas:`msp-shell-canvas`,canvasLayer:`msp-shell-canvasLayer`,layer:`msp-shell-layer`,shell:`msp-shell-shell`,viewport:`msp-shell-viewport`};I(`views/shell/shell.module.css`,`@layer msp.components {
.msp-shell-shell {
  background: var(--msp-color-bg);
  grid-template: "left top right"
                 "left viewport right" minmax(0, 1fr)
                 "left bottom right"
                 / auto minmax(0, 1fr) auto;
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  overflow: hidden;
  container-type: size;

  &[data-mode="compact"] {
    --msp-row-height: 44px;
    --msp-control-height: 40px;
    --msp-touch-target: 44px;
    grid-template: "top"
                   "viewport" minmax(0, 1fr)
                   "bottom"
                   "right"
                   / minmax(0, 1fr);
  }
}

.msp-shell-viewport {
  grid-area: viewport;
  min-width: 0;
  min-height: 0;
  position: relative;
  overflow: hidden;
  container: canvas / inline-size;
}

.msp-shell-canvas {
  inset: 0 var(--msp-canvas-end, var(--msp-canvas-pinned, 0px)) 0 0;
  transition: opacity var(--msp-motion-reveal) var(--msp-ease);
  position: absolute;

  &[data-quiet] {
    opacity: 0;
  }
}

.msp-shell-layer {
  pointer-events: none;
  color: var(--msp-color-text);
  position: absolute;
  inset: 0;
}

:where(.msp-shell-layer) > * {
  pointer-events: auto;
}

.msp-shell-canvasLayer {
  right: var(--msp-canvas-pinned, 0px);
}
}
`);var gc={muted:`msp-tooltip-muted`,tooltip:`msp-tooltip-tooltip`,"tooltip-in":`msp-tooltip-tooltip-in`};I(`components/tooltip/tooltip.module.css`,`@layer msp.components {
.msp-tooltip-tooltip {
  z-index: var(--msp-z-tooltip);
  max-width: 240px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-text);
  color: var(--msp-color-bg);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
  animation: msp-tooltip-tooltip-in var(--msp-motion-fast) var(--msp-ease);
  line-height: 1.3;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  &[hidden] {
    display: none;
  }
}

.msp-tooltip-tooltip[data-kind="row"] {
  max-width: 320px;
  padding: var(--msp-space-2) var(--msp-inset);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-raised);
  color: var(--msp-color-text);
  box-shadow: 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-float);
  font-size: var(--msp-font-size-sm);
  white-space: normal;
  overflow-wrap: anywhere;
  line-height: 1.4;
}

.msp-tooltip-muted {
  color: var(--msp-color-text-muted);
}

@keyframes msp-tooltip-tooltip-in {
  from {
    opacity: 0;
  }
}
}
`);var _c=350;function vc(e){let t=document.createElement(`div`);t.className=gc.tooltip,t.setAttribute(`role`,`tooltip`),t.hidden=!0,e.append(t);let n,r=!1,i,a=hn(void 0,()=>!yc(n)&&s()),o=e=>{let n=e.dataset.tipRow!==void 0;n?xc(t,e):t.textContent=e.dataset.tip??e.textContent??``,t.dataset.kind=n?`row`:``,t.hidden=!1;let r=n?`beside`:e.dataset.tipSide??`bottom`,i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o,c,l;if(r===`beside`){let t=e.closest(`[data-tip-edge], [role="tabpanel"]`)?.getBoundingClientRect()??i;l=t,o=t.left-8-a.width,o<4&&(o=t.right+8),c=i.top+(i.height-a.height)/2}else r===`left`?(o=i.left-8-a.width,c=i.top+(i.height-a.height)/2):r===`top`?(o=i.left+(i.width-a.width)/2,c=i.top-8-a.height):(o=i.left+(i.width-a.width)/2,c=i.bottom+8);if(o=Math.max(4,Math.min(o,window.innerWidth-a.width-4)),c=Math.max(4,Math.min(c,window.innerHeight-a.height-4)),l&&o<l.right&&o+a.width>l.left&&l!==i)return s();t.style.transform=`translate(${Math.round(o)}px, ${Math.round(c)}px)`,t.dataset.side=r},s=()=>{i!==void 0&&clearTimeout(i),i=void 0,a?.disconnect(),n=void 0,t.hidden=!0},c=(e,c,l)=>{if(i!==void 0&&clearTimeout(i),r=l,e.dataset.tip===void 0&&!bc(e)){n=void 0,t.hidden=!0;return}n=e;let u=()=>{if(n!==e||!yc(e))return s();o(e),!t.hidden&&(a?.disconnect(),a?.observe(e))};c?u():i=setTimeout(u,_c)},l=e=>{let t=e.target,n=t?.closest?.(`[data-tip], [data-tip-overflow], [data-tip-row]`)??void 0;if(!n?.closest(`[inert]`)&&(n?.dataset.tipRow===void 0||t?.closest(`[data-tip-part]`)))return n},u=[F(e,`pointerover`,e=>{n&&!n.isConnected&&s();let r=l(e);r&&r!==n&&c(r,!t.hidden,!0)}),F(e,`pointermove`,e=>{n&&(!n.isConnected||r&&!n.contains(e.target))&&s()},{passive:!0}),F(e,`pointerout`,e=>{let t=l(e);t&&!t.contains(e.relatedTarget)&&s()}),F(e,`focusin`,e=>{let t=l(e);t?.matches(`:focus-visible`)&&c(t,!0,!1)}),F(e,`focusout`,s),F(e,`pointerdown`,s),F(window,`keydown`,s),F(window,`scroll`,s,{capture:!0})];return()=>{s(),t.remove(),a?.disconnect();for(let e of u)e()}}function yc(e){return!!e&&e.isConnected&&(e.checkVisibility?.()??!0)&&!e.closest(`[inert]`)}function bc(e){if(e.dataset.tipRow===void 0)return e.scrollWidth-e.clientWidth>1;for(let t of e.querySelectorAll(`[data-tip-part]`))if(t.scrollWidth-t.clientWidth>1)return!0;return!1}function xc(e,t){e.textContent=``;let n=!0;for(let r of t.querySelectorAll(`[data-tip-part]`)){let t=r.textContent?.trim();if(!t)continue;let i=document.createElement(`span`);i.textContent=t,n||(i.className=gc.muted),n||e.append(` `),e.append(i),n=!1}}var Sc={empty:`msp-shell-empty-canvas-empty`,"fade-in":`msp-shell-empty-canvas-fade-in`,"fade-out":`msp-shell-empty-canvas-fade-out`,mark:`msp-shell-empty-canvas-mark`,splash:`msp-shell-empty-canvas-splash`};I(`views/shell/empty-canvas.module.css`,`@layer msp.components {
.msp-shell-empty-canvas-empty {
  inset: 0 var(--msp-canvas-right-inset, 0) 0 0;
  pointer-events: none;
  animation: msp-shell-empty-canvas-fade-in .9s var(--msp-ease) both;
  position: absolute;

  &[data-phase="out"] {
    animation: msp-shell-empty-canvas-fade-out .25s var(--msp-ease) forwards;
  }
}

.msp-shell-empty-canvas-splash {
  inset: 0 calc(-1 * var(--msp-canvas-right-inset, 0px)) 0 0;
  animation: msp-shell-empty-canvas-fade-in 1.2s var(--msp-ease) both;
  position: absolute;
}

.msp-shell-empty-canvas-mark {
  color: var(--msp-color-text-subtle);
  position: absolute;
  top: round(down, 50% - 33px, 1px);
  left: round(down, 50% - 85.5px, 1px);
}

@keyframes msp-shell-empty-canvas-fade-in {
  from {
    opacity: 0;
  }
}

@keyframes msp-shell-empty-canvas-fade-out {
  to {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-empty-canvas-empty {
    animation: none;
  }
}
}
`);var Cc={splash:`msp-shell-prism-splash-splash`};I(`views/shell/prism-splash.module.css`,`@layer msp.components {
.msp-shell-prism-splash-splash {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}
}
`);var wc=12,Tc=4800,Ec=10,Dc=class{constructor(){this.su=0,this.sv=0,this.drag=.6,this.confinement=0,this.#e=0,this.#t=0,this.#n=0,this.#r=0,this.#i=wc,this.#a=new Float32Array,this.#o=new Float32Array,this.#s=new Float32Array,this.#c=new Float32Array,this.#l=new Float32Array,this.#u=new Float32Array,this.#d=0,this.#f=0,this.#p=0}#e;#t;#n;#r;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p;get on(){return this.#n>=2&&this.#r>=2}layout(e,t,n,r){this.#e=e,this.#t=t;let i=wc;n/i*(r/i)>Tc&&(i=Math.sqrt(n*r/Tc));let a=Math.max(0,Math.ceil(n/i)),o=Math.max(0,Math.ceil(r/i));if(a===this.#n&&o===this.#r&&i===this.#i)return;this.#n=a,this.#r=o,this.#i=i;let s=a*o;this.#a.length<s&&(this.#a=new Float32Array(s),this.#o=new Float32Array(s),this.#s=new Float32Array(s),this.#c=new Float32Array(s),this.#l=new Float32Array(s),this.#u=new Float32Array(s)),this.clear()}clear(){this.#a.fill(0),this.#o.fill(0),this.#l.fill(0)}sample(e,t){this.on?(this.#_((e-this.#e)/this.#i-.5,(t-this.#t)/this.#i-.5),this.su=this.#v(this.#a),this.sv=this.#v(this.#o)):(this.su=0,this.sv=0)}drive(e,t,n,r,i,a){if(!this.on)return;let o=this.#n,s=this.#i,c=i*i,l=Math.max(0,Math.floor((e-i-this.#e)/s)),u=Math.min(o-1,Math.ceil((e+i-this.#e)/s)),d=Math.max(0,Math.floor((t-i-this.#t)/s)),f=Math.min(this.#r-1,Math.ceil((t+i-this.#t)/s));for(let p=d;p<=f;p++){let d=this.#t+(p+.5)*s-t;for(let t=l;t<=u;t++){let l=this.#e+(t+.5)*s-e,u=l*l+d*d;if(u>=c)continue;let f=1-Math.sqrt(u)/i,m=a*f*f,h=p*o+t;this.#a[h]+=(n-this.#a[h])*m,this.#o[h]+=(r-this.#o[h])*m}}}swirl(e,t,n,r){if(!this.on)return;let i=this.#n,a=this.#i,o=r*r,s=Math.max(0,Math.floor((e-r-this.#e)/a)),c=Math.min(i-1,Math.ceil((e+r-this.#e)/a)),l=Math.max(0,Math.floor((t-r-this.#t)/a)),u=Math.min(this.#r-1,Math.ceil((t+r-this.#t)/a));for(let d=l;d<=u;d++){let l=this.#t+(d+.5)*a-t;for(let t=s;t<=c;t++){let s=this.#e+(t+.5)*a-e,c=s*s+l*l;if(c>=o||c<1e-6)continue;let u=Math.sqrt(c),f=u/r,p=n*6.75*f*(1-f)*(1-f)/u,m=d*i+t;this.#a[m]-=l*p,this.#o[m]+=s*p}}}step(e){this.on&&(this.#m(e),this.confinement>0&&this.#h(e),this.#g())}#m(e){let t=this.#n,n=this.#r,r=t*n,i=this.#a,a=this.#o,o=this.#s,s=this.#c;o.set(i.subarray(0,r)),s.set(a.subarray(0,r));let c=e/this.#i,l=Math.exp(-this.drag*e);for(let e=0,r=0;e<n;e++)for(let n=0;n<t;n++,r++){this.#_(n-.5*c*o[r],e-.5*c*s[r]);let t=this.#v(o),u=this.#v(s);this.#_(n-c*t,e-c*u),i[r]=this.#v(o)*l,a[r]=this.#v(s)*l}}#h(e){let t=this.#n,n=this.#r,r=this.#a,i=this.#o,a=this.#u,o=this.#s,s=2*this.#i;for(let e=0,c=0;e<n;e++)for(let l=0;l<t;l++,c++){let u=l<t-1?c+1:c,d=l>0?c-1:c,f=e<n-1?c+t:c,p=e>0?c-t:c;a[c]=(i[u]-i[d]-(r[f]-r[p]))/s,o[c]=Math.abs(a[c])}let c=this.confinement*this.#i*e;for(let e=1;e<n-1;e++)for(let n=1,s=e*t+1;n<t-1;n++,s++){let e=o[s+1]-o[s-1],n=o[s+t]-o[s-t],l=Math.sqrt(e*e+n*n)+1e-5;r[s]+=n/l*c*a[s],i[s]-=e/l*c*a[s]}}#g(){let e=this.#n,t=this.#r,n=this.#a,r=this.#o,i=this.#l,a=this.#u,o=this.#i,s=2*o;for(let i=0,c=0;i<t;i++)for(let l=0;l<e;l++,c++){let u=l<e-1?n[c+1]:n[c],d=l>0?n[c-1]:n[c],f=i<t-1?r[c+e]:r[c],p=i>0?r[c-e]:r[c];a[c]=(u-d+f-p)/s*o*o}for(let n=0;n<Ec;n++)for(let n=0,r=0;n<t;n++)for(let o=0;o<e;o++,r++){let s=o<e-1?i[r+1]:0,c=o>0?i[r-1]:0,l=n<t-1?i[r+e]:0,u=n>0?i[r-e]:0;i[r]=(s+c+l+u-a[r])*.25}for(let a=0,o=0;a<t;a++)for(let c=0;c<e;c++,o++){let l=c<e-1?i[o+1]:0,u=c>0?i[o-1]:0,d=a<t-1?i[o+e]:0,f=a>0?i[o-e]:0;n[o]-=(l-u)/s,r[o]-=(d-f)/s}}#_(e,t){let n=this.#n,r=this.#r;e<0?e=0:e>n-1&&(e=n-1),t<0?t=0:t>r-1&&(t=r-1);let i=e|0,a=t|0;i>n-2&&(i=n-2),a>r-2&&(a=r-2),this.#f=e-i,this.#p=t-a,this.#d=a*n+i}#v(e){let t=this.#d,n=this.#n,r=this.#f,i=this.#p;return(e[t]*(1-r)+e[t+1]*r)*(1-i)+(e[t+n]*(1-r)+e[t+n+1]*r)*i}},Oc=4,kc=.8,Ac=class{#e;#t=0;#n=0;#r=new Float32Array(5);constructor(){if(typeof document>`u`||typeof Path2D!=`function`)return;let e=(B.width+2)*Oc,t=(B.height+2)*Oc,n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)return;r.filter=`blur(${kc*Oc}px)`,r.setTransform(Oc,0,0,Oc,Oc,Oc),r.fillStyle=`#000`,r.strokeStyle=`#000`,r.lineWidth=B.stroke(3),r.lineJoin=`miter`;for(let e of B.paths){let t=new Path2D(e);r.fill(t),r.stroke(t)}let i=r.getImageData(0,0,e,t).data,a=new Float32Array(e*t);for(let e=0;e<a.length;e++)a[e]=i[e*4+3]/255;this.#e=a,this.#t=e,this.#n=t}get ready(){return!!this.#e}rasterize(e,t,n,r,i,a,o,s,c,l){l.fill(0,0,s*c);let u=this.#e;if(!u)return;let d=this.#r,f=e.corners,p=this.#t,m=this.#n;for(let h=0;h<e.count;h++){e.place(h,d);let g=d[0],_=d[1],v=Math.cos(d[2]),y=Math.sin(d[2]),b=d[3],x=d[4],S=f[h*6],C=f[h*6+1],w=f[h*6+2],T=f[h*6+3],ee=f[h*6+4],E=f[h*6+5],te=1/0,ne=-1/0,D=1/0,re=-1/0;for(let e=0;e<3;e++){let s=f[h*6+2*e],c=f[h*6+2*e+1],l=(t+(g+s*v-c*y)*r-i)/o,u=(n+(_+s*y+c*v)*r-a)/o;l<te&&(te=l),l>ne&&(ne=l),u<D&&(D=u),u>re&&(re=u)}let ie=Math.max(0,Math.floor(te)),ae=Math.min(s-1,Math.ceil(ne)),oe=Math.max(0,Math.floor(D)),se=Math.min(c-1,Math.ceil(re));for(let e=oe;e<=se;e++)for(let c=ie;c<=ae;c++){let d=0;for(let s=0;s<2;s++)for(let l=0;l<2;l++){let f=(i+(c+.25+.5*l)*o-t)/r-g,h=(a+(e+.25+.5*s)*o-n)/r-_,te=f*v+h*y,ne=-f*y+h*v,D=(w-S)*(ne-C)-(T-C)*(te-S),re=(ee-w)*(ne-T)-(E-T)*(te-w),ie=(S-ee)*(ne-E)-(C-E)*(te-ee);if(!(D>=0&&re>=0&&ie>=0||D<=0&&re<=0&&ie<=0))continue;let ae=Math.round((b+te+1)*Oc),oe=Math.round((x+ne+1)*Oc);ae>=0&&oe>=0&&ae<p&&oe<m&&(d+=u[oe*p+ae])}let f=e*s+c;d/4>l[f]&&(l[f]=d/4)}}}},jc=100,Mc=()=>performance.now(),Nc=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#r=-1/0,this.#i=NaN,this.#a=0,this.#o=1,this.#s=!1,this.steps=0,this.#e=e.activeMs??1500,this.#t=e.restAfterMs??12e3,this.#n=e.fadeMs??400}get level(){return this.#o}get asleep(){return this.#s}input(){this.#r=Mc(),this.#s=!1}advance(e){let t=Mc(),n=Number.isNaN(this.#i)?0:Math.min(jc,Math.max(0,t-this.#i));return this.#i=t,this.#a+=n,!e&&t-this.#r>=this.#e&&this.#a>=this.#t?(this.#o=Math.max(0,this.#o-n/this.#n),this.#o===0&&(this.#s=!0)):this.#o=Math.min(1,this.#o+n/this.#n),this.#o}stepped(){this.steps++}reset(){this.#i=NaN,this.#s||(this.#r=Mc())}},Pc={rate:24,speed:26,beam:260,width:10,spread:7,reach:320,alpha:.55,size:1.4,variety:.7,bob:.35,twinkle:.45,colors:!0,pulse:.55,intro:2.4,curl:.6,breathe:.3,interactive:!0,radius:90,push:520,wake:.5,swirl:.5,follow:.5,burst:36,seed:3},Fc=1536,Ic=12,Lc=5,Rc=30,zc=22,Bc=140,Vc=1.6,Hc=260,Uc=[0,1,2,3,5,6,7].map(e=>e*Math.PI/4),Wc=new Float32Array(Uc.length),Gc=220,Kc=260,qc=360,Jc=900,Yc=60,Xc=.5,Zc=5,Qc=700,$c=3,el=150,tl=30,nl=36,rl=110,il=160,al=4,ol=200,sl=1.6,cl=.8,ll=[`--msp-color-text-subtle`,`--msp-color-brand-1`,`--msp-color-brand-2`,`--msp-color-brand-3`,`--msp-color-brand-4`].map(e=>`var(${e})`);function ul(e){let t=e>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var dl=class{#e;#t;#n;#r;#i;#a=new Float32Array(Fc);#o=new Float32Array(Fc);#s=new Float32Array(Fc);#c=new Float32Array(Fc);#l=new Float32Array(Fc);#u=new Float32Array(Fc);#d=new Float32Array(Fc);#f=new Float32Array(Fc);#p=new Float32Array(Fc);#m=new Float32Array(Fc);#h=new Uint8Array(Fc);#g=0;#_=new Uint16Array(Fc);#v=new Uint16Array(Fc);#y=new Uint16Array(60);#b=new Uint16Array(60);#x=[`#888`,`#7a4f2f`,`#e0ae2c`,`#6f9a80`,`#3f86ad`];#S=0;#C=0;#w=1;#T=0;#E=0;#D=0;#O=0;#k=0;#A=0;#j;#M=!1;#N=!0;#P=-1/0;#F;#I=0;#L=0;#R=0;#z=0;#B=!1;#V=0;#H=0;#U=0;#W=0;#G;#K=0;#q=0;#J=1;#Y;#X=0;#Z;#Q=new Float32Array;#$=0;#ee=0;#te=0;#ne=0;#re=!0;#ie;#ae=new Float32Array(6);constructor(e,t={},n={}){if(this.#t=e,this.#n=e.getContext(`2d`),this.#e={...Pc,...t},this.#i=ul(this.#e.seed),this.#F=!!n.still,this.#j=new Nc(n.pace),!this.#F){this.#ie=new Dc;for(let e=0;e<this.#ae.length;e++)this.#ae[e]=this.#i()*Math.PI*2}}setOptions(e){this.#le();let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#i=ul(this.#e.seed),this.#g=0),this.#oe(),this.#F&&this.#fe()}setOrigin(e,t){this.#T=e,this.#E=t,this.#oe(),this.#F&&this.#fe()}#oe(){let e=this.#ie;if(!e)return;let t=this.#e,n=Math.max(0,this.#T-Math.max(t.beam,t.reach)-Yc),r=Math.min(this.#S,this.#T+t.reach+Yc),i=Math.max(0,this.#E-t.reach-Yc),a=Math.min(this.#C,this.#E+t.reach+Yc);e.layout(n,i,Math.max(0,r-n),Math.max(0,a-i))}resize(){this.#le();let e=this.#t.clientWidth,t=this.#t.clientHeight,n=Math.min(2,globalThis.devicePixelRatio||1);(e!==this.#S||t!==this.#C||n!==this.#w)&&(this.#S=e,this.#C=t,this.#w=n,this.#t.width=Math.round(e*n),this.#t.height=Math.round(t*n),this.readColors(),this.#oe(),this.#F&&this.#fe())}readColors(){if(typeof getComputedStyle!=`function`)return;let e=this.#t,t=e.style.color,n=!this.#Y;for(let t=0;t<Lc;t++){e.style.color=ll[t],this.#r??=getComputedStyle(e);let r=this.#r.color;r&&r!==this.#x[t]&&(this.#x[t]=r,n=!0)}if(e.style.color=t,this.#n&&n){let e=this.#n.createLinearGradient(0,0,B.width-2,0);e.addColorStop(0,this.#x[1]),e.addColorStop(.35,this.#x[2]),e.addColorStop(.6,this.#x[3]),e.addColorStop(1,this.#x[4]),this.#Y=e}}setWord(e,t,n){if(this.#K=e,this.#q=t,this.#J=n,this.#se(),this.#G)return!0;if(this.#F||typeof Path2D!=`function`)return!1;let r=new li(this.#e.seed+8);return r.onSnap=()=>{this.#X+=this.#e.burst*.6},this.#G=r,this.#Z=new Ac,r.scatter(),!0}#se(){let e=Math.ceil((B.width*this.#J+400)/al),t=Math.ceil((B.height*this.#J+400)/al);this.#Q.length<e*t&&(this.#Q=new Float32Array(e*t)),this.#$=this.#K-ol,this.#ee=this.#q-ol,this.#te=e,this.#ne=t,this.#re=!0}#ce(e,t){let n=(e-this.#$)/al,r=(t-this.#ee)/al;return n<0||r<0||n>=this.#te||r>=this.#ne?1:1-Math.min(1,this.#Q[(r|0)*this.#te+(n|0)]*sl)}shatterAt(e,t){let n=this.#G;if(!n||!this.#e.interactive||this.#F)return!1;let r=(e-this.#K)/this.#J,i=(t-this.#q)/this.#J;if(!n.hits(r,i))return!1;this.#le(),n.shatter(r,i);for(let n=0;n<this.#g;n++){let r=this.#a[n]-e,i=this.#o[n]-t,a=r*r+i*i;if(a>=48400)continue;let o=Math.sqrt(a)+.001,s=1-o/Gc;this.#s[n]+=r/o*Kc*s,this.#c[n]+=i/o*Kc*s}let a=this.#ie;if(a){let n=this.#i()*Math.PI*2,r=Math.cos(n)*nl,i=Math.sin(n)*nl;a.swirl(e+r,t+i,il,rl),a.swirl(e-r,t-i,-160,rl)}return this.#X+=this.#e.burst,!0}pointerMove(e,t,n){if(!(!this.#e.interactive||this.#F)){if(this.#le(),this.#B&&this.#V){let r=Math.max(.008,(n-this.#V)/1e3);this.#R+=((e-this.#I)/r-this.#R)*.35,this.#z+=((t-this.#L)/r-this.#z)*.35,this.#H=Math.min(1,this.#H+Math.hypot(e-this.#I,t-this.#L)/Hc)}this.#I=e,this.#L=t,this.#V=n,this.#B=!0,this.#G?.setPointer((e-this.#K)/this.#J,(t-this.#q)/this.#J)}}pointerLeave(){this.#B=!1,this.#G?.clearPointer(),this.#R=0,this.#z=0}pointerDown(e,t,n){!this.#e.interactive||this.#F||(this.pointerMove(e,t,n),this.#X+=this.#e.burst)}start(){this.#M=!0,this.#j.input(),this.#F?this.#fe():this.#ue()}stop(){this.#M=!1,this.#A&&C(this.#A),this.#A=0}setVisible(e){this.#N=e,e&&this.#ue()}dispose(){this.stop()}get steps(){return this.#j.steps}get asleep(){return this.#j.asleep}#le(){this.#j.input(),this.#ue()}#ue(){this.#F||!this.#M||!this.#N||this.#A||this.#j.asleep||(this.#k=0,this.#j.reset(),this.#A=ae(this.#de))}#de=e=>{if(this.#A=0,!this.#M||!this.#N)return;let t=this.#j.advance(!!this.#G?.animating);if(this.#j.asleep){this.#be(0);return}this.#j.stepped();let n=this.#k?Math.min(.1,(e-this.#k)/1e3):1/60;this.#k=e,e-this.#P>1500&&(this.#P=e,this.readColors()),e-this.#V>80&&(this.#R*=.85,this.#z*=.85),this.#ve(n),this.#be(t),this.#A=ae(this.#de)};#fe(){if(this.#S){this.#g=0,this.#O=0,this.#i=ul(this.#e.seed);for(let e=0;e<Rc;e+=1/30)this.#ve(1/30);this.#be(1)}}#pe(){if(this.#g>=Fc)return;let e=this.#e,t=this.#g++;this.#a[t]=this.#T-e.beam,this.#o[t]=this.#E+(this.#i()*2-1)*e.width;let n=this.#E-this.#o[t],r=Math.hypot(e.beam,n)||1,i=e.speed*(.8+this.#i()*.4);this.#s[t]=i*e.beam/r,this.#c[t]=i*n/r,this.#l[t]=i,this.#h[t]=0,this.#f[t]=this.#i()*Math.PI*2,this.#p[t]=.55+this.#i()*.35,this.#m[t]=.6+this.#i()*.9}#me(e){if(this.#g>=Fc)return;let t=this.#e,n=this.#g++,r=1+Math.floor(this.#i()*4),i=this.#ge(r,e*1.6),a=t.speed*(2.2+this.#i()*1.6);this.#a[n]=this.#T,this.#u[n]=this.#T,this.#o[n]=this.#E,this.#d[n]=this.#E,this.#s[n]=a*Math.cos(i),this.#c[n]=a*Math.sin(i),this.#l[n]=t.speed*(.8+this.#i()*.4),this.#h[n]=r,this.#f[n]=this.#i()*Math.PI*2,this.#p[n]=this.#he(),this.#m[n]=.6+this.#i()*.9}#he(){let e=this.#i();return 1+this.#e.variety*2*e*e*e}#ge(e,t){let n=0;for(let e=0;e<Uc.length;e++){let t=Math.max(0,Math.cos(Uc[e]-this.#U));Wc[e]=1+this.#W*6*t*t*t,n+=Wc[e]}let r=this.#i()*n,i=Uc[Uc.length-1];for(let e=0;e<Uc.length;e++)if(r-=Wc[e],r<=0){i=Uc[e];break}return i+t*((e-1)/1.5-1)+(this.#i()*2-1)*t*.22}#_e(e){let t=--this.#g;this.#a[e]=this.#a[t],this.#o[e]=this.#o[t],this.#s[e]=this.#s[t],this.#c[e]=this.#c[t],this.#l[e]=this.#l[t],this.#u[e]=this.#u[t],this.#d[e]=this.#d[t],this.#h[e]=this.#h[t],this.#f[e]=this.#f[t],this.#p[e]=this.#p[t],this.#m[e]=this.#m[t]}#ve(e){let t=this.#e;this.#O+=e;let n=this.#O;this.#H=Math.max(0,this.#H-e/Vc),this.#G?.step(e);let r=this.#G;r&&this.#Z?.ready&&this.#te&&(this.#re||!r.resting)&&(this.#Z.rasterize(r,this.#K,this.#q,this.#J,this.#$,this.#ee,al,this.#te,this.#ne,this.#Q),this.#re=!1);let i=!this.#G||this.#G.whole,a=t.intro>0?Math.min(1,Math.max(0,(n/t.intro-.5)*2)):1,o=1+7*(1-a*a*(3-2*a)),s=t.spread*Math.PI/180*(1+t.breathe*Math.sin(n*.37)),c=this.#B&&t.interactive?t.follow:0;c&&(this.#U=Math.atan2(this.#L-this.#E,this.#I-this.#T)),this.#W+=(c-this.#W)*Math.min(1,e*1.5);let l=.5+.35*Math.sin(n*.83)+.15*Math.sin(n*2.1+1.3);for(this.#D+=e*t.rate*(1-t.pulse+t.pulse*2*l)*(1+2*this.#H)*o;this.#D>=1;)--this.#D,this.#pe();for(;this.#X>=1;)--this.#X,this.#me(s);let u=this.#B&&t.interactive,d=this.#ie;if(d){if(t.curl>0)for(let r=0;r<$c;r++){let i=this.#T+t.reach*.55*Math.sin(n*(.05+.03*r)+this.#ae[2*r]),a=this.#E+t.reach*.45*Math.cos(n*(.04+.025*r)+this.#ae[2*r+1]);d.swirl(i,a,(r%2?-1:1)*t.curl*tl*e,el)}if(u&&t.wake>0&&(this.#R||this.#z)){let n=t.wake*Math.min(1,Qc/(Math.sqrt(this.#R*this.#R+this.#z*this.#z)||1));d.drive(this.#I,this.#L,this.#R*n,this.#z*n,t.radius*.7,Math.min(1,e*12))}d.drag=Xc,d.confinement=t.swirl*Zc,d.step(e)}let f=this.#G?this.#G.pull:0,p=this.#K+(B.width/2-1)*this.#J,m=this.#q+(B.height/2-1)*this.#J,h=qc*qc,g=t.radius,_=g*g,v=Math.min(1,e/cl);for(let n=0;n<this.#g;n++){let r=this.#s[n],a=this.#c[n],c=this.#a[n],l=this.#o[n];if(u){let n=c-this.#I,i=l-this.#L,o=n*n+i*i;if(o<_){let s=Math.sqrt(o)+.001,c=1-s/g,l=c*c;r+=n/s*t.push*l*e,a+=i/s*t.push*l*e}}let y=Math.sqrt(r*r+a*a)||1,b=1+(this.#l[n]/y-1)*v;if(r*=b,a*=b,f>0){let t=p-c,n=m-l,i=t*t+n*n;if(i<h){let o=Math.sqrt(i)+.001,s=Jc*f*(1-o/qc)*e;r+=t/o*s,a+=n/o*s}}let x=this.#h[n]===0?o:1,S=r*x,C=a*x,w=c+S*e,T=l+C*e;if(d?.on){let t=e/2;d.sample(c,l);let n=d.su,r=d.sv;d.sample(c+(S+n)*t,l+(C+r)*t);let i=d.su,a=d.sv;d.sample(c+(S+i)*t,l+(C+a)*t);let o=d.su,s=d.sv;d.sample(c+(S+o)*e,l+(C+s)*e),w+=(n+2*i+2*o+d.su)*e/6,T+=(r+2*a+2*s+d.sv)*e/6}if(this.#s[n]=r,this.#c[n]=a,this.#a[n]=w,this.#o[n]=T,this.#h[n]===0){if(i&&c<this.#T&&w>=this.#T&&Math.abs(T-this.#E)<=zc){let e=1+Math.floor(this.#i()*4);this.#h[n]=e;let t=this.#ge(e,s),i=Math.hypot(r,a)*Math.min(3,o);this.#s[n]=i*Math.cos(t),this.#c[n]=i*Math.sin(t),this.#u[n]=w,this.#d[n]=T,this.#p[n]=this.#he()}else(w>this.#T+Bc||w<this.#T-t.beam*1.5||Math.abs(T-this.#E)>t.reach)&&(this.#_e(n),n--)}else{let e=w-this.#u[n],r=T-this.#d[n];e*e+r*r>t.reach*t.reach&&(this.#_e(n),n--)}}}#ye(e){let t=this.#e,n;if(this.#h[e]===0){let r=this.#a[e],i=1-(this.#T-r)/t.beam;n=t.alpha/3*Math.min(1,Math.max(0,i*3)),r>this.#T&&(n*=Math.max(0,1-(r-this.#T)/Bc))}else{let r=Math.hypot(this.#a[e]-this.#u[e],this.#o[e]-this.#d[e])/t.reach;n=t.alpha*Math.min(1,r*12)*(1-r)**1.6}return n*=this.#ce(this.#a[e],this.#o[e]),n*=1-t.twinkle+t.twinkle*(.5+.5*Math.sin(this.#O*(1.4+2.6*this.#m[e])+this.#f[e])),Math.max(0,Math.min(11,Math.round(n/Math.max(t.alpha,1e-6)*11)))}#be(e){let t=this.#n;if(!t)return;let n=this.#e,r=this.#w;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,this.#t.width,this.#t.height),t.setTransform(r,0,0,r,0,0);let i=this.#y;i.fill(0);for(let t=0;e>0&&t<this.#g;t++){let e=(n.colors?this.#h[t]:0)*Ic+this.#ye(t);this.#v[t]=e,i[e]++}let a=0;for(let e=0;e<i.length;e++)this.#b[e]=a,a+=i[e];i.fill(0);for(let t=0;e>0&&t<this.#g;t++){let e=this.#v[t];this.#_[this.#b[e]+i[e]++]=t}let o=this.#O;for(let r=0;r<Lc;r++){t.fillStyle=this.#x[r];for(let a=1;a<Ic;a++){let s=r*Ic+a,c=i[s];if(!c)continue;t.globalAlpha=n.alpha*a*e/11,t.beginPath();let l=this.#b[s];for(let e=0;e<c;e++){let r=this.#_[l+e],i=this.#a[r],a=this.#o[r],s=n.size*this.#p[r];this.#h[r]!==0&&(s*=1+n.bob*Math.sin(o*(1.5+2*this.#m[r])+this.#f[r])),!(s<.2)&&(t.moveTo(i+s,a),t.arc(i,a,s,0,Math.PI*2))}t.fill()}}t.globalAlpha=1,this.#G?.draw(t,this.#K,this.#q,this.#J,this.#Y??this.#x[1],this.#x[0],1,this.#w)}},fl={rate:3.4,k:1.1,spectrum:.4,speed:64,prism:1.2,glow:.35,ripples:.45,spawn:160,decay:1.6,alpha:.6,size:1.3,colors:!0,interactive:!0,radius:36,barrier:2,kick:1.4,seed:3},Z=128,pl=7,Q=5,$=16384,ml=.15,hl=4,gl=14,_l=.18,vl=1.6,yl=34,bl=.45,xl=1.5,Sl=12,Cl=20,wl=7,Tl=8,El=.07,Dl=14,Ol=.8,kl=10,Al=.5,jl=.25,Ml=1.5,Nl=.45,Pl=20,Fl=.45,Il=5,Ll=3,Rl=1.2,zl=320,Bl=1.6,Vl=1500,Hl=5,Ul=.3,Wl=.25,Gl=.22,Kl=10,ql=5,Jl=3,Yl=.5,Xl=[`--msp-color-text-subtle`,`--msp-color-brand-1`,`--msp-color-brand-2`,`--msp-color-brand-3`,`--msp-color-brand-4`].map(e=>`var(${e})`);function Zl(e){let t=e>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ql=new Uint16Array(Z);for(let e=0;e<Z;e++){let t=0;for(let n=0;n<pl;n++)t|=(e>>n&1)<<6-n;Ql[e]=t}var $l=new Float64Array(Z/2),eu=new Float64Array(Z/2);for(let e=0;e<Z/2;e++)$l[e]=Math.cos(-2*Math.PI*e/Z),eu[e]=Math.sin(-2*Math.PI*e/Z);function tu(e,t){for(let n=0;n<$;n+=Z)for(let r=Z;r>=2;r>>=1){let i=r>>1,a=Z/r;for(let o=0;o<Z;o+=r)for(let r=0;r<i;r++){let s=$l[r*a],c=eu[r*a],l=n+o+r,u=l+i,d=e[l],f=t[l],p=d-e[u],m=f-t[u];e[l]=d+e[u],t[l]=f+t[u],e[u]=p*s-m*c,t[u]=p*c+m*s}}for(let n=Z;n>=2;n>>=1){let r=n>>1,i=Z/n;for(let a=0;a<Z;a+=n)for(let n=0;n<r;n++){let o=$l[n*i],s=eu[n*i],c=(a+n)*Z,l=c+r*Z;for(let n=0;n<Z;n++){let r=c+n,i=l+n,a=e[r],u=t[r],d=a-e[i],f=u-t[i];e[r]=a+e[i],t[r]=u+t[i],e[i]=d*o-f*s,t[i]=d*s+f*o}}}}function nu(e,t){for(let n=2;n<=Z;n<<=1){let r=n>>1,i=Z/n;for(let a=0;a<Z;a+=n)for(let n=0;n<r;n++){let o=$l[n*i],s=-eu[n*i],c=(a+n)*Z,l=c+r*Z;for(let n=0;n<Z;n++){let r=c+n,i=l+n,a=e[i]*o-t[i]*s,u=e[i]*s+t[i]*o;e[i]=e[r]-a,t[i]=t[r]-u,e[r]+=a,t[r]+=u}}}for(let n=0;n<$;n+=Z)for(let r=2;r<=Z;r<<=1){let i=r>>1,a=Z/r;for(let o=0;o<Z;o+=r)for(let r=0;r<i;r++){let s=$l[r*a],c=-eu[r*a],l=n+o+r,u=l+i,d=e[u]*s-t[u]*c,f=e[u]*c+t[u]*s;e[u]=e[l]-d,t[u]=t[l]-f,e[l]+=d,t[l]+=f}}}function ru(e,t){let n=Math.abs(t),r=Math.abs(e),i=n>r?n:r;if(i===0)return 0;let a=(n<r?n:r)/i,o=a*a,s=((-.0464964749*o+.15931422)*o-.327622764)*o*a+a;return r>n&&(s=1.5707963267948966-s),t<0&&(s=3.141592653589793-s),e<0?-s:s}var iu=new Float64Array($),au=new Float64Array($),ou=new Float32Array($),su=new Float32Array($),cu=new Float32Array($);for(let e=0;e<Z;e++){let t=Ql[e],n=2*Math.PI*(t<Z/2?t:t-Z)/Z,r=Math.max(0,gl-Math.min(e,127-e))/gl;for(let t=0;t<Z;t++){let i=Ql[t],a=2*Math.PI*(i<Z/2?i:i-Z)/Z,o=-(a*a+n*n)*ml/2;iu[e*Z+t]=Math.cos(o)/$,au[e*Z+t]=Math.sin(o)/$;let s=Math.max(0,gl-Math.min(t,127-t))/gl,c=Math.max(s,r);ou[e*Z+t]=1-_l*c*c,su[e*Z+t]=Math.sqrt(ou[e*Z+t]);let l=Math.hypot(t+.5-Z/2,e+.5-Z/2)/(Z/2-gl),u=Math.min(1,Math.max(0,(1-l)/Fl));cu[e*Z+t]=u*u*(3-2*u)}}var lu=(()=>{let e=[];for(let t=1;t<127;t++)for(let n=1;n<127;n++)cu[t*Z+n]>0&&e.push(t*Z+n);return Int32Array.from(e)})(),uu=class{#e;#t;#n;#r;#i;#a;#o=new Float64Array($);#s=new Float64Array($);#c=new Float32Array($);#l=new Float64Array($);#u=new Float64Array($);#d=new Float64Array($);#f=new Float64Array($);#p=new Float32Array(Z);#m=new Float32Array(Z);#h=new Float32Array(Z);#g=new Float32Array(Z);#_=new Float32Array($);#v=new Float32Array($);#y=new Float32Array($);#b=new Float32Array(lu.length);#x=Yl;#S=0;#C=!1;#w=!0;#T=0;#E=0;#D=0;#O=new Float32Array(Sl);#k=new Float32Array(Sl);#A=new Float32Array(Sl);#j=new Float32Array(Sl);#M=new Float32Array(Sl);#N=new Float32Array(Sl);#P=new Float32Array(Sl);#F=new Uint8Array(Sl);#I=0;#L=new Float32Array(Vl);#R=new Float32Array(Vl);#z=new Float32Array(Vl);#B=0;#V=0;#H=new Float32Array(Vl);#U=new Uint8Array(Vl);#W=0;#G=new Uint16Array(Vl);#K=new Uint16Array(Vl);#q=new Uint16Array(50);#J=new Uint16Array(50);#Y;#X;#Z=null;#Q=[`#888`,`#7a4f2f`,`#e0ae2c`,`#6f9a80`,`#3f86ad`];#$=new Uint8Array(15);#ee=new Float32Array($);#te=new Float32Array($);#ne=new Float32Array($);#re=!1;#ie=1/60;#ae=!1;#oe;#se=0;#ce=0;#le=1;#ue=0;#de=0;#fe=0;#pe=0;#me=0;#he=0;#ge=0;#_e;#ve=!1;#ye=!0;#be=-1/0;#xe=0;#Se=0;#Ce=!1;#we;#Te=0;#Ee=0;#De=1;#Oe=!0;#ke;#Ae=new Float32Array($);#je=0;#Me=0;constructor(e,t={},n={}){if(this.#t=e,this.#n=e.getContext(`2d`),this.#e={...fl,...t},this.#i=Zl(this.#e.seed),this.#a=!!n.still,this.#_e=new Nc(n.pace),typeof document<`u`&&this.#n){let e=document.createElement(`canvas`);e.width=Z,e.height=Z;let t=e.getContext(`2d`);t&&(this.#X=e,this.#Z=t,this.#Y=t.createImageData(Z,Z))}}setOptions(e){this.#Ne();let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#i=Zl(this.#e.seed),this.#o.fill(0),this.#s.fill(0),this.#W=0,this.#I=0,this.#B=0,this.#V=0,this.#S=0,this.#x=Yl,this.#C=!1),this.#w=!0,this.#a&&this.#Ie()}setOrigin(e,t){this.#ue=e,this.#de=t,this.#fe=e-.47*Z*Q,this.#pe=t-.5*Z*Q,this.#w=!0,this.#a&&this.#Ie()}resize(){this.#Ne();let e=this.#t.clientWidth,t=this.#t.clientHeight,n=Math.min(2,globalThis.devicePixelRatio||1);(e!==this.#se||t!==this.#ce||n!==this.#le)&&(this.#se=e,this.#ce=t,this.#le=n,this.#t.width=Math.round(e*n),this.#t.height=Math.round(t*n),this.readColors(),this.#a&&this.#Ie())}readColors(){if(typeof getComputedStyle!=`function`)return;let e=this.#t,t=e.style.color,n=!this.#oe;for(let t=0;t<ql;t++){e.style.color=Xl[t],this.#r??=getComputedStyle(e);let r=this.#r.color;if(!r||r===this.#Q[t])continue;this.#Q[t]=r,n=!0;let i=/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/.exec(r);i&&(this.#$[t*3]=+i[1],this.#$[t*3+1]=+i[2],this.#$[t*3+2]=+i[3])}if(e.style.color=t,this.#ae=.299*this.#$[0]+.587*this.#$[1]+.114*this.#$[2]>128,this.#n&&n){let e=this.#n.createLinearGradient(0,0,B.width-2,0);e.addColorStop(0,this.#Q[1]),e.addColorStop(.35,this.#Q[2]),e.addColorStop(.6,this.#Q[3]),e.addColorStop(1,this.#Q[4]),this.#oe=e}}setWord(e,t,n){if(this.#Te=e,this.#Ee=t,this.#De=n,this.#we)return!0;if(this.#a||typeof Path2D!=`function`)return!1;let r=new li(this.#e.seed+8);return r.onSnap=()=>{this.#Me+=3},this.#we=r,this.#ke=new Ac,r.scatter(),!0}shatterAt(e,t){let n=this.#we;if(!n||!this.#e.interactive||this.#a)return!1;let r=(e-this.#Te)/this.#De,i=(t-this.#Ee)/this.#De;return n.hits(r,i)?(this.#Ne(),n.shatter(r,i),this.#Ve(e,t,this.#e.kick*1.6,90),this.#w=!0,!0):!1}pointerMove(e,t,n){!this.#e.interactive||this.#a||(this.#Ne(),this.#xe=e,this.#Se=t,this.#Ce=!0,this.#w=!0,this.#we?.setPointer((e-this.#Te)/this.#De,(t-this.#Ee)/this.#De))}pointerLeave(){this.#Ce=!1,this.#w=!0,this.#we?.clearPointer()}pointerDown(e,t,n){!this.#e.interactive||this.#a||(this.pointerMove(e,t,n),this.#Ve(e,t,this.#e.kick,70))}start(){this.#ve=!0,this.#_e.input(),this.#a?this.#Ie():this.#Pe()}stop(){this.#ve=!1,this.#ge&&C(this.#ge),this.#ge=0}setVisible(e){this.#ye=e,e&&this.#Pe()}dispose(){this.stop()}get steps(){return this.#_e.steps}get asleep(){return this.#_e.asleep}#Ne(){this.#_e.input(),this.#Pe()}#Pe(){this.#a||!this.#ve||!this.#ye||this.#ge||this.#_e.asleep||(this.#he=0,this.#_e.reset(),this.#ge=ae(this.#Fe))}#Fe=e=>{if(this.#ge=0,!this.#ve||!this.#ye)return;let t=this.#_e.advance(!!this.#we?.animating);if(this.#_e.asleep){this.#Qe(0);return}this.#_e.stepped();let n=this.#he?Math.min(.1,(e-this.#he)/1e3):1/60;this.#he=e,e-this.#be>1500&&(this.#be=e,this.readColors()),this.#ie=n,this.#Ye(n),this.#Qe(t),this.#ge=ae(this.#Fe)};#Ie(){if(this.#se){this.#o.fill(0),this.#s.fill(0),this.#W=0,this.#I=0,this.#B=0,this.#V=0,this.#S=0,this.#x=Yl,this.#C=!1,this.#me=0,this.#i=Zl(this.#e.seed);for(let e=0;e<6;e+=1/20)this.#Ye(1/20);this.#Qe(1)}}#Le(){let e=this.#e;return e.speed/(Math.max(.2,e.k)*Q)}#Re(){let e=this.#e,t=this.#o,n=this.#s;for(let r=0;r<kl;r++){let i=(this.#de-this.#pe)/Q,a=Pl+(r+.3+.4*this.#i())/kl*94,o=i+(this.#i()*2-1)*Dl*1.4,s=(this.#i()*2-1)*jl,c=e.k*(1+e.spectrum*(this.#i()*2-1)),l=c*Math.cos(s),u=c*Math.sin(s),d=this.#i()*Math.PI*2;for(let e=0;e<Z;e++){let r=e-o;for(let i=0;i<Z;i++){let o=i-a,s=Al*Math.exp(-(o*o+r*r)/200);if(s<1e-4)continue;let c=l*o+u*r+d,f=e*Z+i;t[f]+=s*Math.cos(c),n[f]+=s*Math.sin(c)}}}}#ze(e,t,n,r,i,a){let o=this.#I;o>=Sl||(this.#O[o]=e,this.#k[o]=t,this.#A[o]=Math.cos(n),this.#j[o]=Math.sin(n),this.#M[o]=r,this.#N[o]=i,this.#P[o]=this.#D,this.#F[o]=+!!a,this.#I=o+1)}#Be(){let e=this.#o,t=this.#s;for(let n=0;n<this.#I;n++){let r=(this.#D-this.#P[n])/Cl;if(r>=1){let e=--this.#I;this.#O[n]=this.#O[e],this.#k[n]=this.#k[e],this.#A[n]=this.#A[e],this.#j[n]=this.#j[e],this.#M[n]=this.#M[e],this.#N[n]=this.#N[e],this.#P[n]=this.#P[e],this.#F[n]=this.#F[e],n--;continue}let i=Math.sin(Math.PI*r),a=this.#N[n]*El*i*i*ml*(this.#F[n]?this.#S:1),o=this.#M[n],s=this.#A[n],c=this.#j[n],l=this.#O[n],u=this.#k[n],d=Math.abs(c)<.001,f=d?wl:15/2,p=d?Tl:f,m=o*s,h=o*c,g=Math.max(1,Math.floor(l-3*f)),_=Math.min(126,Math.ceil(l+3*f)),v=Math.max(1,Math.floor(u-3*p)),y=Math.min(126,Math.ceil(u+3*p)),b=this.#p,x=this.#m;for(let e=g;e<=_;e++){let t=e-l,n=Math.exp(-(t*t)/(2*f*f));b[e]=n*Math.cos(m*t),x[e]=n*Math.sin(m*t)}let S=this.#D-this.#P[n],C=-o*o*S/2,w=this.#h,T=this.#g;for(let e=v;e<=y;e++){let t=e-u,n=a*Math.exp(-(t*t)/(2*p*p));w[e]=n*Math.cos(h*t+C),T[e]=n*Math.sin(h*t+C)}for(let n=v;n<=y;n++){let r=w[n],i=T[n];if(Math.abs(r)+Math.abs(i)<1e-7)continue;let a=n*Z;for(let n=g;n<=_;n++)e[a+n]+=r*b[n]-i*x[n],t[a+n]+=r*x[n]+i*b[n]}}}#Ve(e,t,n,r){let i=(e-this.#fe)/Q,a=(t-this.#pe)/Q,o=r/Q,s=Math.max(0,Math.floor(i-o)),c=Math.min(127,Math.ceil(i+o)),l=Math.max(0,Math.floor(a-o)),u=Math.min(127,Math.ceil(a+o));for(let e=l;e<=u;e++)for(let t=s;t<=c;t++){let r=t-i,s=e-a,c=Math.sqrt(r*r+s*s);if(c>=o)continue;let l=1-c/o,u=n*c*l*l,d=e*Z+t,f=Math.cos(u),p=Math.sin(u),m=this.#o[d],h=this.#s[d];this.#o[d]=m*f-h*p,this.#s[d]=m*p+h*f}}#He(e){let t=this.#e,n=this.#c;n.fill(0);let r=t.k*t.k/2,i=(this.#ue-this.#fe)/Q,a=(this.#de-this.#pe)/Q;if(this.#we&&this.#ke?.ready){this.#ke.rasterize(this.#we,this.#Te,this.#Ee,this.#De,this.#fe,this.#pe,Q,Z,Z,this.#Ae);let e=t.prism*r;for(let t=0;t<$;t++)n[t]-=e*this.#Ae[t]}else{this.#Ae.fill(0);let e=yl/Q,o=t.prism*r;for(let t=Math.max(0,Math.floor(a-10));t<=Math.min(127,a+10);t++)for(let r=Math.max(0,Math.floor(i-10));r<=Math.min(127,i+10);r++){let s=r-i,c=t-a,l=Math.sqrt(s*s+c*c),u=Math.cos(4*Math.atan2(c,s)),d=e*(.55+bl*u*u),f=Math.min(1,Math.max(0,(d-l)/xl+.5));f>0&&(n[t*Z+r]-=o*f*f*(3-2*f))}}if(this.#Ce&&t.interactive&&t.barrier>0){let e=(this.#xe-this.#fe)/Q,i=(this.#Se-this.#pe)/Q,a=Math.max(1,t.radius/Q/1.5),o=2*a*a,s=3*a,c=t.barrier*r;for(let t=Math.max(0,Math.floor(i-s));t<=Math.min(127,i+s);t++)for(let r=Math.max(0,Math.floor(e-s));r<=Math.min(127,e+s);r++){let a=r-e,s=t-i;n[t*Z+r]+=c*Math.exp(-(a*a+s*s)/o)}}if(e>0){let t=(this.#Te+(B.width/2-1)*this.#De-this.#fe)/Q,i=(this.#Ee+(B.height/2-1)*this.#De-this.#pe)/Q,a=zl/Q,o=Bl*r*e;for(let e=0;e<Z;e++)for(let r=0;r<Z;r++){let s=r-t,c=e-i,l=Math.sqrt(s*s+c*c);l<a&&(n[e*Z+r]-=o*(1-l/a))}}let o=this.#l,s=this.#u,c=this.#d,l=this.#f;for(let e=0;e<$;e++){if(n[e]===0){o[e]=su[e],s[e]=0,c[e]=ou[e],l[e]=0;continue}let t=-n[e]*ml/2,r=su[e],i=Math.cos(t),a=Math.sin(t);o[e]=i*r,s[e]=a*r,c[e]=(i*i-a*a)*ou[e],l[e]=2*i*a*ou[e]}}#Ue(e,t){let n=this.#o,r=this.#s;for(let i=0;i<$;i++){let a=n[i],o=r[i];n[i]=a*e[i]-o*t[i],r[i]=a*t[i]+o*e[i]}}#We(e){let t=this.#o,n=this.#s;this.#Be(),this.#D+=ml,this.#Ue(this.#l,this.#u);for(let r=0;r<e;r++){tu(t,n);for(let e=0;e<$;e++){let r=t[e],i=n[e];t[e]=r*iu[e]-i*au[e],n[e]=r*au[e]+i*iu[e]}nu(t,n),r===e-1?this.#Ue(this.#l,this.#u):(this.#Ue(this.#d,this.#f),this.#Be(),this.#D+=ml)}}#Ge(e){let t=this.#o,n=this.#s,r=this.#y,i=this.#_,a=this.#v,o=2.5*Math.max(.2,this.#e.k),s=o*o,c=0,l=0,u=this.#b,d=this.#Ae;for(let e=0;e<lu.length;e++){let f=lu[e],p=t[f],m=n[f],h=p*p+m*m;r[f]=h;let g=d[f]*vl,_=g>=1?0:h*(1-g);if(_>c&&(c=_),l+=_,u[e]=l,h<1e-9){i[f]=0,a[f]=0;continue}let v=t[f+1],y=n[f+1],b=t[f-1],x=n[f-1],S=(ru(y*p-v*m,v*p+y*m)+ru(m*b-p*x,p*b+m*x))/2,C=t[f+Z],w=n[f+Z],T=t[f-Z],ee=n[f-Z],E=(ru(w*p-C*m,C*p+w*m)+ru(m*T-p*ee,p*T+m*ee))/2,te=S*S+E*E;if(te>s){let e=o/Math.sqrt(te);S*=e,E*=e}i[f]=S,a[f]=E}this.#x=Math.max(Yl,this.#x+(c-this.#x)*Math.min(1,e*Rl))}#Ke(e,t,n){let r=(t-this.#fe)/Q,i=(n-this.#pe)/Q;r<0?r=0:r>126.999&&(r=126.999),i<0?i=0:i>126.999&&(i=126.999);let a=r|0,o=i|0,s=r-a,c=i-o,l=o*Z+a;return(e[l]*(1-s)+e[l+1]*s)*(1-c)+(e[l+Z]*(1-s)+e[l+Z+1]*s)*c}#qe(e,t){let n=this.#e,r=Math.sqrt(e*e+t*t);if(r<.001||Math.abs(ru(t,e))<Gl)return 0;let i=(r-n.k*(1-n.spectrum))/Math.max(.001,2*n.k*n.spectrum);return 1+Math.min(3,Math.max(0,Math.floor(i*4)))}#Je(e){let t=this.#b,n=t[t.length-1];if(n<.001)return!1;let r=this.#i()*n,i=0,a=t.length-1;for(;i<a;){let e=i+a>>1;t[e]<r?i=e+1:a=e}let o=lu[i],s=o%Z,c=o/Z|0;return this.#L[e]=this.#fe+(s+this.#i())*Q,this.#R[e]=this.#pe+(c+this.#i())*Q,this.#z[e]=0,this.#H[e]=this.#i()*Math.PI*2,this.#U[e]=this.#qe(this.#_[o],this.#v[o]),!0}#Ye(e){let t=this.#e;this.#me+=e,this.#we?.step(e);let n=this.#we,r=n?n.pull:0;this.#S+=((n?n.assembled:1)-this.#S)*Math.min(1,e*Jl);let i=!n||n.whole;(i!==this.#Oe||r>0||this.#je>0||n&&!n.resting)&&(this.#w=!0),this.#Oe=i,this.#je=r,this.#w&&=(this.#He(r),!1);let a=(this.#ue-this.#fe)/Q,o=(this.#de-this.#pe)/Q;for(this.#C||(this.#C=!0,this.#Re()),this.#E+=e*t.rate;this.#E>=1;){--this.#E;let e=o+(this.#i()*2-1)*Dl,n=t.k*(1+t.spectrum*(this.#i()*2-1));this.#ze(Pl,e,0,n,Ol,!0)}for(;this.#Me>=1;){--this.#Me;let e=Math.floor(this.#i()*8)*Math.PI/4,n=t.k*(1+t.spectrum*(this.#i()*2-1));this.#ze(a+Math.cos(e)*4,o+Math.sin(e)*4,e,n,Nl,!1)}this.#T+=e*this.#Le();let s=0;for(;this.#T>=ml&&s<hl;)this.#T-=ml,s++;s===hl&&(this.#T=0),s&&this.#We(s),this.#Ge(e);let c=this.#Le()*Q,l=Hl*Math.max(.1,t.decay),u=this.#fe,d=this.#pe,f=this.#fe+640,p=this.#pe+640;for(let t=0;t<this.#W;t++){let n=this.#L[t],r=this.#R[t],i=this.#Ke(this.#_,n,r)*c,a=this.#Ke(this.#v,n,r)*c,o=n+i*e/2,s=r+a*e/2,m=this.#Ke(this.#_,o,s),h=this.#Ke(this.#v,o,s),g=n+m*c*e,_=r+h*c*e;this.#L[t]=g,this.#R[t]=_,this.#z[t]+=e,this.#U[t]===0&&(this.#U[t]=this.#qe(m,h)),(this.#z[t]>l||g<u||_<d||g>=f||_>=p||cu[((_-d)/Q|0)*Z+((g-u)/Q|0)|0]===0)&&(this.#Xe(t),t--)}let m=this.#b[this.#b.length-1];for(this.#S>.9&&(this.#V=this.#V?this.#V+(m-this.#V)*Math.min(1,e*Wl):m),this.#B+=e*t.spawn*(this.#V>1e-6?m/this.#V:this.#S);this.#B>=1;)--this.#B,!(this.#W>=Vl||!this.#Je(this.#W))&&this.#W++}#Xe(e){let t=--this.#W;this.#L[e]=this.#L[t],this.#R[e]=this.#R[t],this.#z[e]=this.#z[t],this.#H[e]=this.#H[t],this.#U[e]=this.#U[t]}#Ze(){let e=this.#Y;if(!e||!this.#Z)return;let t=this.#e,n=e.data,r=this.#y,i=1/this.#x,a=Math.min(1,t.glow)*(this.#ae?Ll:1)*255*Math.min(1,this.#me/Ml),o=this.#$,s=this.#ee,c=this.#te,l=this.#ne;if(!this.#re){let e=t.colors?6:0,n=t.colors?9:0;s.fill((o[e]+o[n])/2),c.fill((o[e+1]+o[n+1])/2),l.fill((o[e+2]+o[n+2])/2),this.#re=!0}let u=Math.min(1,this.#ie*Il),d=t.k*(1-t.spectrum),f=Math.max(.001,2*t.k*t.spectrum);for(let e=0;e<lu.length;e++){let p=lu[e],m=r[p]*i,h=p*4;if(m<1e-4){n[h+3]=0;continue}let g=o[0],_=o[1],v=o[2],y=1;if(t.colors){let e=this.#_[p],t=this.#v[p],n=Math.min(2.999,Math.max(0,(Math.sqrt(e*e+t*t)-d)/f*4-.5)),r=n|0,i=n-r,a=(1+r)*3,s=(2+r)*3;g=o[a]*(1-i)+o[s]*i,_=o[a+1]*(1-i)+o[s+1]*i,v=o[a+2]*(1-i)+o[s+2]*i,y=Math.min(1,m*12)}let b=u*y;s[p]+=(g-s[p])*b,c[p]+=(_-c[p])*b,l[p]+=(v-l[p])*b,n[h]=s[p],n[h+1]=c[p],n[h+2]=l[p];let x=1-t.ripples*.5*(1-this.#o[p]/Math.sqrt(r[p])),S=1-Math.min(1,this.#Ae[p]*vl);n[h+3]=Math.min(255,a*Math.min(1,Math.sqrt(m))*x*cu[p]*S)}this.#Z.putImageData(e,0,0)}#Qe(e){let t=this.#n;if(!t)return;let n=this.#e,r=this.#le;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,this.#t.width,this.#t.height),t.setTransform(r,0,0,r,0,0),e>0&&n.glow>0&&this.#X&&(this.#Ze(),t.imageSmoothingEnabled=!0,t.globalAlpha=e,this.#ae&&(t.globalCompositeOperation=`lighter`),t.drawImage(this.#X,this.#fe,this.#pe,640,640),t.globalCompositeOperation=`source-over`,t.globalAlpha=1);let i=this.#q;i.fill(0);let a=-Math.LN2/Math.max(.1,n.decay);for(let t=0;e>0&&t<this.#W;t++){let e=this.#z[t],r=this.#L[t],o=this.#R[t],s=1-Math.min(1,this.#Ke(this.#Ae,r,o)*vl),c=Math.min(1,e/Ul)*Math.exp(e*a)*this.#Ke(cu,r,o)*s,l=Math.max(0,Math.min(9,Math.round(c*9))),u=(n.colors?this.#U[t]:0)*Kl+l;this.#K[t]=u,i[u]++}let o=0;for(let e=0;e<i.length;e++)this.#J[e]=o,o+=i[e];i.fill(0);for(let t=0;e>0&&t<this.#W;t++){let e=this.#K[t];this.#G[this.#J[e]+i[e]++]=t}let s=this.#me;for(let r=0;r<ql;r++){t.fillStyle=this.#Q[r];for(let a=1;a<Kl;a++){let o=r*Kl+a,c=i[o];if(!c)continue;t.globalAlpha=(r===0?.5:1)*n.alpha*a*e/9,t.beginPath();let l=this.#J[o];for(let e=0;e<c;e++){let i=this.#G[l+e],a=n.size*(r===0?.7:1)*(1+.25*Math.sin(s*2.2+this.#H[i])),o=this.#L[i],c=this.#R[i];t.moveTo(o+a,c),t.arc(o,c,a,0,Math.PI*2)}t.fill()}}t.globalAlpha=1,this.#we?.draw(t,this.#Te,this.#Ee,this.#De,this.#oe??this.#Q[1],this.#Q[0],1,this.#le)}};function du(){return typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches}function fu(e){let t=R(`canvas`,{class:e.class?`${Cc.splash} ${e.class}`:Cc.splash,"aria-hidden":`true`}),n={still:du()},r=e.field===`quantum`?new uu(t,{},n):new dl(t,{},n);e.options&&j(e.options,e=>r.setOptions(e));let i=0,a=0,o=()=>{let e=t.getBoundingClientRect();i=e.left,a=e.top},s=()=>{r.resize();let n=t.getBoundingClientRect();i=n.left,a=n.top;let o=(e.mark?.()?.querySelector(`[data-part="star"]`))?.getBoundingClientRect();o?.width?r.setOrigin(o.left+o.width/2-n.left,o.top+o.height/2-n.top):r.setOrigin(n.width/2,n.height/2);let s=c(),l=s?.getBoundingClientRect();if(s&&l?.width){let e=l.width/B.width;r.setWord(l.left-n.left+e,l.top-n.top+e,e)&&(s.style.visibility=`hidden`)}},c=()=>{let t=e.mark?.();if(t)return t.matches(`[role=img]`)?t:t.querySelector(`[role=img]`)},l=k(`PrismSplash`),u=!1;hn(t,()=>{s(),u||(u=!0,l.disposed||mt(l,m),r.start())});let d=!0,f=!0,p=()=>r.setVisible(d&&f&&document.visibilityState===`visible`);gn(t,([e])=>{d=e?.isIntersecting??!0,p()}),F(document,`visibilitychange`,p),F(window,`scroll`,o,{capture:!0,passive:!0}),_t(e=>{f=e,p()});function m(){let t=e.pointer?.();if(!t)return;let n={passive:!0};F(t,`pointermove`,e=>r.pointerMove(e.clientX-i,e.clientY-a,e.timeStamp),n),F(t,`pointerdown`,e=>{let t=e.clientX-i,n=e.clientY-a;r.shatterAt(t,n)||r.pointerDown(t,n,e.timeStamp)},n);let o=e=>{(e.type!==`pointerup`||e.pointerType!==`mouse`)&&r.pointerLeave()};F(t,`pointerleave`,o,n),F(t,`pointerup`,o,n),F(t,`pointercancel`,o,n)}return A(()=>{let e=c();e&&(e.style.visibility=``),r.dispose()}),t}var pu=700,mu=2/3,hu=250;function gu(e){let t=O(`gone`),n=n=>{let r=t.value,i=n===`out`&&r!==`in`?`gone`:n;i!==r&&(t.set(i),i===`in`?e.onCanvasShown?.(!1):i===`out`&&e.onCanvasShown?.(!0))},r=`gone`,i=yn(()=>n(r)),a=(e,t)=>{r=t,i.start(e)},o,s=!1,c=()=>{i.cancel(),o!==void 0&&(o?s||a(pu,`in`):(n(`out`),a(hu,`gone`)))};vt(e.empty,e=>{e!==o&&(o=e,c())}),e.busy!==void 0&&vt(e.busy,e=>{s=e,c()}),e.onCanvasShown&&j(e.empty,t=>!t&&e.onCanvasShown?.(!0));let l=e.splash??!0,u=()=>{if(typeof l==`object`)return`light`;let t=e.field??`random`;return t===`random`?Math.random()<mu?`quantum`:`light`:t};return R(N,{when:h(t.asReadonly,e=>e!==`gone`),children:()=>{let e=R(Kr,{scale:3,flash:`reveal`,live:!l,prism:!l,class:Sc.mark});return z(`div`,{class:Sc.empty,"data-phase":t.asReadonly,children:[l?R(`div`,{class:Sc.splash,children:R(fu,{field:u(),mark:()=>e,pointer:()=>e.closest(`[data-msp-viewport]`)??e.parentElement,options:l===!0?{}:l})}):null,e]})}})}var _u={"drop-in":`msp-shell-file-drop-drop-in`,hint:`msp-shell-file-drop-hint`,overlay:`msp-shell-file-drop-overlay`,target:`msp-shell-file-drop-target`,title:`msp-shell-file-drop-title`};I(`views/shell/file-drop.module.css`,`@layer msp.components {
.msp-shell-file-drop-overlay {
  z-index: var(--msp-z-overlay);
  padding: var(--msp-canvas-edge);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 25%);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  animation: msp-shell-file-drop-drop-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
  inset: 0;

  &[hidden] {
    display: none;
  }
}

@keyframes msp-shell-file-drop-drop-in {
  from {
    opacity: 0;
  }
}

.msp-shell-file-drop-target {
  place-content: center;
  justify-items: center;
  gap: var(--msp-space-2);
  border: 1.5px dashed var(--msp-color-border-strong);
  border-radius: var(--msp-radius-lg);
  color: var(--msp-color-text-muted);
  pointer-events: none;
  display: grid;
}

.msp-shell-file-drop-title {
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-md);
  font-weight: 600;
}

.msp-shell-file-drop-hint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}
}
`);function vu(e){let t=O(!1);F(e.target,`dragenter`,e=>{yu(e)&&t.set(!0)});let n=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`)},r=R(`div`,{class:_u.overlay,onDragEnter:n,onDragOver:n,onDragLeave:()=>t.set(!1),onDrop:r=>{n(r),t.set(!1);let i=[...r.dataTransfer?.files??[]];i.length&&e.onDrop(i)},children:z(`div`,{class:_u.target,children:[R(L,{name:`folder-open`,size:24}),R(`span`,{class:_u.title,children:`Drop to open`}),e.formats?.length?R(`span`,{class:_u.hint,children:e.formats.join(`, `)}):null]})});return M([t],()=>U(r,`hidden`,!t.value)),r}function yu(e){let t=e.dataTransfer?.types;if(!t)return!1;for(let e=0;e<t.length;e++)if(t[e]===`Files`)return!0;return!1}var bu={body:`msp-shell-page-body`,header:`msp-shell-page-header`,headerContent:`msp-shell-page-headerContent`,page:`msp-shell-page-page`,"page-in":`msp-shell-page-page-in`,title:`msp-shell-page-title`};I(`views/shell/page.module.css`,`@layer msp.components {
.msp-shell-page-page {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  left: var(--msp-canvas-edge);
  z-index: var(--msp-z-dialog);
  border-radius: var(--msp-radius-lg);
  --msp-color-bg: var(--msp-color-panel);
  background: var(--msp-color-bg);
  min-width: 0;
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  animation: msp-shell-page-page-in var(--msp-motion-base) var(--msp-ease-reveal);
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: hidden;
}

.msp-shell-page-header {
  align-items: center;
  gap: var(--msp-space-4);
  min-width: 0;
  height: 44px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-5);
  display: flex;
}

.msp-shell-page-title {
  align-items: center;
  gap: var(--msp-space-3);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-shell-page-headerContent {
  align-items: center;
  gap: var(--msp-space-4);
  flex: auto;
  min-width: 0;
  display: flex;
}

.msp-shell-page-body {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

:where([data-mode="compact"]) .msp-shell-page-page {
  right: var(--msp-canvas-edge);
}

@keyframes msp-shell-page-page-in {
  from {
    opacity: 0;
    transform: scale(.99);
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-page-page {
    animation: none;
  }
}
}
`);function xu(e){let{shell:t}=e;return R(N,{when:h(t.page,e=>e?.page),children:e=>R(Su,{shell:t,page:e})})}function Su(e){let{shell:t}=e,n={page:e.page,focus:t.page.value?.focus},r={shell:t,...n.focus?{focus:n.focus}:{}},i=z(`section`,{class:bu.page,role:`region`,"aria-label":n.page.title,tabIndex:-1,"data-msp-page":``,children:[z(`header`,{class:bu.header,children:[z(`span`,{class:bu.title,children:[n.page.icon?R(L,{name:n.page.icon}):null,n.page.title]}),R(`div`,{class:bu.headerContent,children:n.page.header?R(ss,{renderer:n.page.header,ctx:r}):null}),R(sr,{variant:`ghost`,size:`sm`,icon:R(L,{name:`x`}),title:`Close (Esc)`,onClick:()=>t.closePage()})]}),R(`div`,{class:bu.body,children:R(ss,{renderer:n.page.render,ctx:r})})]}),a=fr(document);return F(document,`keydown`,e=>{if(e.key!==`Escape`||e.defaultPrevented||!mr(i,e))return;let n=fr(i);(!n||n===document.body||i.contains(n))&&(t.closePage(),e.preventDefault())}),queueMicrotask(()=>{i.contains(fr(i))||i.focus({preventScroll:!0})}),A(()=>{a?.isConnected&&a.focus({preventScroll:!0})}),i}var Cu=44,wu=8,Tu=42;function Eu(e){let{shell:t,status:n}=e,r=t.dock(`right`),i=h(t.mode,e=>e===`compact`),a=t.dock(`top`),o=t.expanded,s=h(o,e=>!e),c=ls(t,r),l=h([c.floating,t.mode],(e,t)=>e&&t!==`compact`),u=ls(t,a).floating,d=h([ls(t,a).size,a.active,u,o],(e,t,n,r)=>`${n&&t&&!r?t.frame===`none`?e-28+wu:wu+e+wu:wu}px`),f=h([l,t.railShown,o],(e,t,n)=>e&&!t||n?0:Cu),p=h([l,t.compactRail,o],(e,t,n)=>e&&t&&!n),m=h([f,p],(e,t)=>t?0:e),g=p,_=h([c.pinned,l,o],(e,t,n)=>t&&e&&!n),v=h([c.size,r.active,t.overlay,_,f],(e,t,n,r,i)=>r?i+(t||n?e:0):0),y=h([v,l,m],(e,t,n)=>e>0?e:t?n:0),b=h([c.size,r.active,t.overlay,l,_,f,o,i],(e,t,n,r,i,a,o,s)=>`${i||o?wu:(s?0:a)+wu+(r&&(t||n)?e+wu:0)}px`),x=h([_,i,m,p,o],(e,t,n,r,i)=>`${e||t||i?wu:(r?Cu:n)+wu}px`),S=h([r.active,l,o],(e,t,n)=>t&&e&&!n?`open`:void 0),C=c.sizePx,w=h(f,e=>`${e+wu}px`),T=R(`div`,{class:hc.canvas,"data-msp-canvas":``,"data-msp-scope":`canvas`,"data-quiet":e.empty?``:void 0,children:e.canvas}),ee=e=>T.toggleAttribute(`data-quiet`,!e),E,te,ne,D=z(`div`,{class:hc.shell,children:[R(N,{when:h([u,o],(e,t)=>!e&&!t),children:()=>R(us,{shell:t,dock:a})}),R(N,{when:s,children:()=>R(us,{shell:t,dock:t.dock(`left`)})}),z(`main`,{class:hc.viewport,"data-msp-viewport":``,style:{"--msp-canvas-edge":`${wu}px`,"--msp-corner-room":`${Tu}px`,"--msp-band-fade":`28px`,"--msp-band-dissolve":`36px`},ref:e=>E=e,children:[T,z(`div`,{class:`${hc.layer} ${hc.canvasLayer}`,"data-msp-theme":e.ink?void 0:`light`,ref:e=>te=e,children:[R(N,{when:h([u,o],(e,t)=>e&&!t),children:()=>R(ds,{shell:t,dock:a})}),e.empty?R(gu,{empty:e.empty,splash:e.splash??!0,field:e.splashField??`random`,onCanvasShown:ee,...e.busy?{busy:e.busy}:{}}):null,R(`div`,{class:J.lead,children:e.playback}),e.overlays,R(N,{when:g,children:()=>R(Qs,{shell:t})}),R(`div`,{class:J.bottom,"data-keeps-card":``,children:z(`div`,{class:J.bottomGrid,children:[R(Ys,{status:n,onOpenLog:e.onOpenLog,after:e.agent}),z(`div`,{class:J.corner,children:[R(Is,{shell:t,lead:e.canvasLead,aside:e.canvasAside,...e.canvasLeadMenu?{leadMenu:e.canvasLeadMenu}:{},quiet:e.empty}),R(Xs,{status:n,lead:e.context?.()})]})]})})]}),z(`div`,{class:hc.layer,ref:e=>ne=e,children:[R(Ks,{shell:t}),R(xu,{shell:t}),R(N,{when:s,children:()=>R(N,{when:l,fallback:()=>R(N,{when:h(i,e=>!e),children:()=>R(`div`,{class:`${J.toolbarSlot} ${J.frame}`,children:R(Ds,{shell:t})})}),children:()=>{let e=$t(t.railShown,()=>R(ds,{shell:t,dock:r,railItems:e=>R(Ds,{shell:t,part:`rest`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)}),railFoot:e=>R(Ds,{shell:t,part:`lead`,hidden:e.hidden,railMenu:(t,n)=>e.toggleMenu(n,t)})}));return M([t.railShown,t.compactRail],()=>{U(e,`data-rail-hidden`,!t.railShown.value),U(e,`data-rail-overlay`,t.compactRail.value)}),e}})})]})]}),R(N,{when:h([l,o],(e,t)=>!e&&!t),children:()=>R(us,{shell:t,dock:r,stripEnd:R(N,{when:i,children:()=>R(Vs,{shell:t})})})}),R(N,{when:s,children:()=>R(us,{shell:t,dock:t.dock(`bottom`)})}),e.commandMenu,R(Hs,{status:n})]});M([t.mode,o],()=>{U(D,`data-mode`,t.mode.value),U(D,`data-expanded`,o.value)});let re=[b,x,d,y,w,C,v];if(e.ink&&re.push(e.ink),M(re,()=>{Mi(E,`--msp-canvas-right-inset`,b.value),Mi(E,`--msp-canvas-corner-inset`,x.value),Mi(E,`--msp-canvas-top-inset`,d.value),Mi(E,`--msp-canvas-end`,`${y.value}px`),Mi(E,`--msp-canvas-rail-inset`,w.value),Mi(E,`--msp-canvas-panel-right`,w.value),Mi(E,`--msp-right-panel-width`,C.value),Mi(E,`--msp-canvas-pinned`,`${v.value}px`),Mi(E,`background`,e.ink?.value.color)}),e.ink){let t=e.ink;M([t],()=>{U(te,`data-msp-theme`,t.value.theme),Mi(te,`--msp-color-bg`,t.value.color)})}M([S,_,t.overlay],()=>{U(ne,`data-right-panel`,S.value),U(ne,`data-pinned`,_.value),U(ne,`data-overlay`,t.overlay.value?`open`:null)}),e.onDropFiles&&D.appendChild(R(vu,{target:D,onDrop:e.onDropFiles,formats:e.dropFormats})),F(document,`keydown`,e=>{e.key!==`Escape`||e.defaultPrevented||t.overlay.value||hr(ur(e))||mr(D,e)&&(o.value?(t.setExpanded(!1),e.preventDefault()):r.state.value.pinned||!r.state.value.collapsed&&r.active.value!==void 0&&(t.toggle(`right`),e.preventDefault()))});let ie=e=>{(e.type!==`wheel`||e.ctrlKey)&&e.preventDefault()};return F(D,`wheel`,ie,{passive:!1}),F(D,`gesturestart`,ie),F(D,`gesturechange`,ie),A(vc(D)),hn(D,e=>t.setWidth(e[0].contentRect.width)),D}export{In as $,Pi as A,ge as At,_r as B,va as C,M as Ct,Gi as D,Oe as Dt,Ki as E,Me as Et,H as F,sr as G,yr as H,vi as I,z as J,rr as K,mi as L,ji as M,le as Mt,Ni as N,Vi as O,_e as Ot,Mi as P,Kn as Q,Ir as R,Qa as S,mt as St,Yi as T,Fe as Tt,mr as U,Ar as V,lr as W,Gn as X,L as Y,I as Z,fo as _,bt as _t,cc as a,_n as at,ro as b,A as bt,ss as c,bn as ct,vo as d,Dt as dt,Tn as et,ho as f,Yt as ft,xo as g,ct as gt,go as h,vt as ht,uc as i,xn as it,U as j,he as jt,zi as k,Se as kt,Fo as l,P as lt,_o as m,ht as mt,uu as n,Mn as nt,ec as o,F as ot,mo as p,j as pt,R as q,pc as r,Fn as rt,Ms as s,vn as st,Eu as t,jn as tt,yo as u,N as ut,oo as v,pt as vt,qi as w,Ve as wt,io as x,k as xt,no as y,_t as yt,Nr as z};