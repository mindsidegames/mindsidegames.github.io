
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

const 
  FNV_BASIS_16= 0x966B,
  FNV_PRIME_16= 0x0101,

  FNV_BASIS_32= 0x811C9DC5,
  FNV_PRIME_32= 0x1000193,

  FNV_BASIS_64= 0xCBF29CE484222325n,
  FNV_PRIME_64= 0x100000001B3n
		
function HashFNV(a, input, basis, prime, mask){

  const 
    bytes= new TextEncoder().encode(input),
    bigint= typeof basis === 'bigint' || typeof prime === "bigint" || typeof mask === "bigint"

  let result= basis

  if(bigint){
    if(a) {
      for(const b of bytes){
        result^= BigInt(b)
        result= BigInt.asUintN(64, result * prime)
        result= (result & mask) >>> 0
      }
    }
    else {
      for(const b of bytes){
        result= BigInt.asUintN(64, result * prime)
        result^= BigInt(b)
        result= (result & mask) >>> 0
      }
    }
  }
  else {
    if(a) {
      for(const b of bytes){
        result^= b
        result= Math.imul(result,prime)
        result= (result & mask) >>> 0
      }
    }
    else {
      for(const b of bytes){
        result= Math.imul(result,prime)
        result^= b
        result= (result & mask) >>> 0
      }
    }
  }
  return result;
}

export const fnvHasher= {
  HashFNV116: (input) => HashFNV(false, input, FNV_BASIS_16, FNV_PRIME_16, 0xFFFF),
  HashFNV1a16: (input) => HashFNV(true, input, FNV_BASIS_16, FNV_PRIME_16, 0xFFFF),
  HashFNV132: (input) => HashFNV(false, input, FNV_BASIS_32, FNV_PRIME_32, 0xFFFFFFFF),
  HashFNV1a32: (input) => HashFNV(true, input, FNV_BASIS_32, FNV_PRIME_32, 0xFFFFFFFF),
  HashFNV164: (input) => HashFNV(false, input, FNV_BASIS_64, FNV_PRIME_64, 0xFFFFFFFFFFFFFFFF),
  HashFNV1a64: (input) => HashFNV(true, input, FNV_BASIS_64, FNV_PRIME_64, 0xFFFFFFFFFFFFFFFF)
}