export const css = {

  _Get: (href) => document.head.querySelector(`[href="${href}"]`),

  Add: (href) => {
    let el= css._Get(href)
    if(el == null) {
      el= document.head.appendChild(MakeLink("stylesheet", href))
      el.setAttribute("users", 1)
    }
    else el.setAttribute("users", el.getAttribute("users")+1)
  },

  Remove: (href) => {
    const el= css._Get(href)
    if(el == null) return
    const users= el.getAttribute("users")
    if(users > 1) el.setAttribute("users", users-1)
    else el.remove()
  }
}

/** @jsx h */
export function h(tag, props, ...children) {
  const el = document.createElement(tag)
  if(props) for (const [k, v] of Object.entries(props)) el.setAttribute(k, v)
  children.flat().forEach(c => el.append(c instanceof Node ? c : document.createTextNode(c)) )
  return el;
}

function MakeLink(rel, href) { return h("link", {rel:rel, href:href}, []) }

export function MakeSection( classes=[], inner=true, select=false, awakeFunction=null ) {
  const 
    el_inner = inner ? h("div", {"class": `section-inner${select ? " select" : ""}`}, []) : null,
    el_container = h("div", {"class": `section-container${select && !inner ? " select" : ""}`}, el_inner),
    el_section= h("section", {"class": "section " + classes.join(' ') + " noselect"}, el_container)
  return {
      section: el_section, 
      content: inner ? el_inner : el_container,
      Awake: awakeFunction != null ? awakeFunction : ()=>{}
    }
}