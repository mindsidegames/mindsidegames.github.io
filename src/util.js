
const util= {
  h: (tag, props, children)=> {
    const el = document.createElement(tag)
    if(props) for (const [k, v] of Object.entries(props)) el.setAttribute(k, v)
    if(children) children.flat().forEach(c => {
      if(c instanceof Node) el.append(c)
      else if(c instanceof String && c.startsWith("<")) el.append(hs(c))
      else el.innerHTML= c
    })
    return el;
  },
  hs: (html)=> {
    const p= new DOMParser()
    return p.parseFromString(html, "text/html").body.firstChild
  },
  sepline: ()=> { return hs(`<div class="line-separator"></div>`) },
  septext: (label)=> { return hs(`<div class="text-separator"><div></div><h1>${label}</h1><div></div></div>`) },
  ce: (e)=> { e.preventDefault(); e.stopPropagation() },
  setHidden: (e, s)=> { if(s) e.setAttribute("hidden",""); else e.removeAttribute("hidden") }
}

export default util;

const h= util.h, hs= util.hs

export const css= {

  _Get: (href) => document.head.querySelector(`[href="${href}"]`),

  Add: (href) => {
    return new Promise((done,err)=>{
      let el= css._Get(href)
      if(el == null) {
        el= document.head.appendChild(_MakeLink("stylesheet", href))
        el.setAttribute("users", 1)
        el.onload= ()=> done(el)
        el.onerror= err
      }
      else {
        el.setAttribute("users", el.getAttribute("users")+1)
        done(el)
      }
    })
  },

  Remove: (href) => {
    const el= css._Get(href)
    if(el == null) return
    const users= el.getAttribute("users")
    if(users > 1) el.setAttribute("users", users-1)
    else el.remove()
  }
}

function _MakeLink(rel, href) { return h("link", {rel:rel, href:href}, []) }

export function MakeSection(classes, inner, select, children)  {
  const 
    el_inner = inner ? h("div", {"class": `section-inner`}, inner ? children : []) : null,
    el_container = h("div", {"class": `section-container`}, inner ? [el_inner] : children),
    el_section= h("section", {"class": "section " + classes.join(' ') + (select ? "" : " noselect")}, [el_container])
  return {
      element: el_section, 
      body: inner ? el_inner : el_container,
    }
}