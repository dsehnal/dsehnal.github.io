import{n as e}from"./index-CiDnr_Xn.js";import{ar as t,cr as n,ir as r,lr as i,rr as a,sr as o,t as s,ur as c}from"./viewer-ZhTZkR5F.js";function l(e){let t=/^ReferenceError: (\w+) is not defined/.exec(e);if(t)return`"${t[1]}" is not a name that is known here. Check the spelling. (${e})`;let n=/\.(\w+) is not a function/.exec(e);return n?`"${n[1]}" is not a step that exists at this point of the description. Check its spelling and the order of the steps. (${e})`:e}function u(e){let t=new URLSearchParams(e).get(`snippet`);return(t?c(t):void 0)??c(`basics-smallest`)}var d=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);async function f(f){f.innerHTML=`
    <div class="playground">
      <header class="playground-header">
        <div class="playground-title">
          <h1>Mol* playground</h1>
          <a href="${e(`slides`)}">Slides</a>
        </div>
        <nav class="cards" aria-label="Examples">
          ${o.map(e=>`<button type="button" class="card" data-example="${d(e.id)}" title="${d(e.tagline)}"><strong>${d(e.title)}</strong><span>${d(e.tagline)}</span></button>`).join(``)}
        </nav>
      </header>
      <main class="playground-body">
        <aside class="guide" aria-label="Suggested edits"></aside>
        <section class="editor-pane">
          <nav class="snippets" aria-label="Snippets"></nav>
          <div class="editor-toolbar">
            <button type="button" class="run">Run</button>
            <span class="hint">Ctrl/Cmd+Enter</span>
            <button type="button" class="reset-all" title="Back to the original code of this snippet">Reset code</button>
          </div>
          <div id="editor"></div>
          <div class="problems" role="status" aria-live="polite" hidden></div>
        </section>
        <div id="viewer"></div>
      </main>
    </div>`;let p=e=>f.querySelector(e),m=p(`.guide`),h=p(`.snippets`),g=p(`.problems`),_=[...f.querySelectorAll(`.card`)],v=u(location.search),y,b,x=0,S=Promise.resolve(),C=await s(p(`#viewer`)),w=await a(p(`#editor`),{value:v.code,kind:v.kind,onChange:e=>{y&&y.code!==e&&(y=void 0,O())},onRun:()=>void A()});function T(e,t=`Something went wrong.`){g.hidden=!e?.length,e?.length&&(g.innerHTML=`<strong>${d(t)}</strong><ul>${e.map(e=>`<li>${d(e)}</li>`).join(``)}</ul><p>The scene on the right is the last one that worked. Change the code and run it again.</p>`)}function E(){let e=i(v.id);for(let t of _)t.setAttribute(`aria-current`,String(t.dataset.example===e?.id))}function D(){let e=i(v.id);h.innerHTML=`<span class="snippets-label">Snippets</span>`+e.snippets.map((e,t)=>`<button type="button" data-snippet="${d(e.id)}" aria-current="${e.id===v.id}" title="${d(e.summary)}"><span class="n">${t+1}</span>${d(e.title)}${e.kind===`svs`?` <em>sequence</em>`:``}</button>`).join(``)}function O(){let e=n(v.id);m.innerHTML=`
      <h2>${d(v.title)}</h2>
      <p class="summary">${d(v.summary)}</p>
      ${e.length?`<h3>Try a change</h3>
      <ol class="edits">${e.map((e,t)=>`<li data-edit="${t}"${e===y?` class="applied"`:``}>
          <strong>${d(e.title)}</strong>
          <p>${d(e.hint)}</p>
          <div class="buttons"><button type="button" class="show">Show me</button><button type="button" class="undo"${e===y?``:` disabled`}>Reset</button></div>
        </li>`).join(``)}</ol>`:`<p class="none">Edit the code and press Run.</p>`}`}function k(){let e=new URL(location.href);e.searchParams.set(`mode`,`playground`),e.searchParams.set(`snippet`,v.id),history.replaceState(null,``,e)}function A(){return S=j(),S}async function j(){let e=++x,n=w.getValue(),a=(t,n)=>{e===x&&(C.setStatus(void 0),T(t,n))};C.setStatus(`Running…`);let o=v.kind===`svs`?await t(n):await r(n);if(e===x){if(o.ok){w.setProblems([]);try{if(C.setStatus(`Loading…`),`svs`in o){let t=i(v.id).snippets.find(e=>e.kind===`mvs`);if(t&&b!==t.id){let n=await r(t.code);if(!n.ok)throw Error(n.error.message);if(await C.loadMvs(n.mvs),b=t.id,e!==x)return}await C.loadSvs(o.svs)}else await C.loadMvs(o.mvs),b=v.id}catch(e){a([e instanceof Error?e.message:String(e)],`The viewer could not show the scene.`);return}e===x&&(C.setStatus(void 0),T(void 0))}else{let{line:e,message:t}=o.error;w.setProblems([o.error]),a([e?`Line ${e}: ${l(t)}`:l(t)],`The code could not be run.`)}}}async function M(e,t=!0){v=e,y=void 0,w.setKind(e.kind),w.setValue(e.code),w.setProblems([]),T(void 0),k(),E(),D(),O(),t&&await A()}for(let e of _)e.onclick=()=>{M(o.find(t=>t.id===e.dataset.example).snippets[0])};h.onclick=e=>{let t=e.target.closest(`[data-snippet]`)?.dataset.snippet,n=t?c(t):void 0;n&&M(n)},m.onclick=e=>{let t=e.target,r=t.closest(`[data-edit]`),i=r?n(v.id)[Number(r.dataset.edit)]:void 0;i&&(t.closest(`.show`)?(y=i,w.setValue(i.code),O(),A()):t.closest(`.undo`)&&(y=void 0,w.setValue(v.code),O(),A()))},p(`.run`).onclick=()=>void A(),p(`.reset-all`).onclick=()=>{y=void 0,w.setValue(v.code),O(),A()},E(),D(),O(),k(),await A()}export{f as startPlayground};