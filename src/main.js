import _context from './globals'
import _util, { css } from './util'

window.context= _context

import MakeHeader from './modules/header'
import MakeFooter from './modules/footer'

await css.Add('./res/css/style.css')
await new Promise(requestAnimationFrame)

const h= _util.h, ce= _util.ce

const
  historyState= { site:"mindsidegames" },
  landing= "home"

_context.NavigateRoute= _NavigateRoute
_context.NavigateTab= _NavigateTab
_context.ReplaceOverlayContent= _ReplaceOverlayContent
  
document.body.setAttribute(context.desktop ? "desktop" : "mobile", "")

let
  queryParams= new URLSearchParams(location.search),
  firstVisit= true

const pageRoutes= {
  "404":      "404",
  "home":     "home",
  "games":    "games",
  "team":     "team",
  "contact":  "contact"
};

const importRoute= (route) => import(`./pages/${route}.js`)

const
  e_overlay= h("div", {id:"overlay"}, []),
  e_header= h("header", {id:"page-header", hidden:""}, []),
  e_content= h("main", {id:"page-content"}, []),
  e_footer= h("footer", {id:"page-footer", hidden:""}, [])

context.overlay= e_overlay
root.replaceChildren(e_overlay, e_header, e_content, e_footer)

const
  header= MakeHeader(),
  footer= MakeFooter()

function _NavigateRoute(route)
{
  history.pushState(historyState, "", route)
  _NavigatePage(route)
}

window.addEventListener("popstate", ()=>{
  _NavigatePage(location.pathname.substring(1) ?? landing)
})

const _basePage = {
  self: null,
  title: null,
  useHeader: true,
  useFooter: true,
  CreatePage: ()=> null,
  Awake: async ()=>{},
  Start: async ()=>{},
  Dispose: ()=>{}
}

async function _NavigatePage(name){
  if(name in pageRoutes){
    const sh= _util.setHidden

    const 
      module= await importRoute(pageRoutes[name]),
      dstPage= {__proto__:_basePage, ...(module.CreatePage())}

    dstPage.self= dstPage

    sh(e_content, true)
    sh(e_footer, true)

    const srcPageInfo= context.page
    if(srcPageInfo.any) srcPageInfo.ref.Dispose()
      
    await dstPage.Awake()

    _ReplaceOverlayContent(null)
    e_content.replaceChildren(dstPage.element)

    context.page= { any:true, name:name, ref:dstPage }

    await dstPage.Start()
    header.OnPageChanged(dstPage.title)

    sh(e_header, !dstPage.useHeader)
    sh(e_content, false)
    sh(e_footer, !dstPage.useFooter)
  }
  else _NavigatePage("404")
}

function _NavigateTab(route) {
  window.open(location.origin + `/?p=${(route in pageRoutes ? route : "404")}`, "_blank", "noopener, noreferrer")
}

function _ReplaceOverlayContent(el){
  const sh= _util.setHidden

  const srcOverlayInfo= context.overlay
  const any= el?.element != null

  if(overlay.any) srcOverlayInfo.ref.Dispose()

  context.overlay= { any, ref:el }
  if(any) {
    e_overlay.replaceChildren(el.element)
    e_overlay.focus()
  }
  else e_overlay.replaceChildren()
  sh(e_overlay, !any)
}

function ev_GlobalClick(e){
  if(context.overlay.any && e.target == e_overlay) { 
    if(e.button == 0) { _ReplaceOverlayContent(null); ce(e) }
  }
} 

function ev_GlobalKeyDown(e){
  if(context.overlay.any) { 
    if(e.keyCode == 27) { _ReplaceOverlayContent(null); ce(e) } // esc
    else context.overlay.ref.OnKeyDown(e.keyCode)
  }
} 

function AwakePage(){

  e_header.append(header.element)
  e_footer.append(footer.element)

  const route= location.pathname.startsWith("/404") ? "404" : queryParams.get("p") ?? location.pathname.substring(1)
  _NavigateRoute(route != null && route != "" ? route : landing)

  document.addEventListener('click', ev_GlobalClick, true)
  document.addEventListener('keydown', ev_GlobalKeyDown, true)

  document.body.removeAttribute("hidden")
}

AwakePage()

// DEV ONLY
/*
let lastModified = 0;

setInterval(async () => {

    const links = [...document.querySelectorAll('link[rel="stylesheet"]')];
    for(const link of links){
      const 
        res = await fetch(link.href, { cache: "no-cache" }),
        text = await res.text();

      if (link._lastContent !== text) {
        document.body.setAttribute("hidden", "")
        link._lastContent = text;

        const url = new URL(link.href);
        url.searchParams.set("_reload", Date.now());
        link.href = url.href;

        document.body.removeAttribute("hidden")
      }
    }
}, 500);*/