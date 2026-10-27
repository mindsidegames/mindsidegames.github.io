import { h, css } from './util'
import MakeHeader from './modules/header'
import MakeFooter from './modules/footer'

css.Add('./res/css/style.css')

const
  historyState= { site:"mindside" },
  landing= "home",
  mindsideAPI= {
    desktop: !(navigator.maxTouchPoints > 0 && matchMedia("(pointer: coarse)").matches),
    page: "",
    NavigateRoute: (r) => _NavigateRoute(r),
    NavigateTab: (r) => _NavigateTab(r)
  }

window.mindsideAPI= mindsideAPI
  
document.body.setAttribute(mindsideAPI.desktop ? "desktop" : "mobile", "")

let
  queryParams= new URLSearchParams(location.search),
  firstVisit= true

const pages= {
  "404":      "404",
  "home":     "home",
  "games":    "games",
  "team":     "team",
  "contact":  "contact"
};

const importRoute= (route) => import(`./routes/${route}.js`)

root.append(h("header", {id:"page-header"}, []))
root.append(h("main", {id:"page-content"}, []))
root.append(h("footer", {id:"page-footer"}, []))

const
  e_header= root.querySelector("header"),
  e_content= root.querySelector("main"),
  e_footer= root.querySelector("footer")

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

async function _NavigatePage(page){
  if(page in pages){

    e_content.setAttribute("hidden", "")

    const route= await importRoute(pages[page])

    e_content.innerHTML="";
    route.Render(e_content)

    mindsideAPI.page= page
    header.OnPageChanged(route.GetTitle());

    if(route.useHeader) e_header.removeAttribute("hidden")
    else e_header.setAttribute("hidden", "")

    if(route.useFooter) e_footer.removeAttribute("hidden")
    else e_footer.setAttribute("hidden", "")

    e_content.removeAttribute("hidden")
  }
  else _NavigatePage("404")
}

function _NavigateTab(route) {
  window.open(location.origin + `/?p=${(route in pages ? route : "404")}`, "_blank", "noopener, noreferrer")
}

function AwakePage(){
  e_header.append(header.section)
  e_footer.append(footer.section)

  const route= location.pathname.startsWith("/404") ? "404" : queryParams.get("p") ?? location.pathname.substring(1)
  _NavigateRoute(route != null && route != "" ? route : landing)

  document.body.removeAttribute("hidden")
}

AwakePage()

// DEV ONLY

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
}, 250);