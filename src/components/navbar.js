import _util from '../util'

import iconMenu from '../res/img/icon_menu.svg?raw'

const h= _util.h, hs= _util.hs, ce= _util.ce

function _MakeButtons(){
  function _MakeNavButton(jsdata, label) { return h("button", {jsdata:jsdata}, [label]) }
  return [
    _MakeNavButton("home", "Home"),
    _MakeNavButton("games", "Games"),
    _MakeNavButton("team", "Team"),
    //_MakeNavButton("about", "About"),
    _MakeNavButton("contact", "Contact"),
  ]
}

function CreateComponent() {
  function _MakeNavButton(jsdata, label) { return h("button", {jsdata:jsdata}, [label]) }
  
  const buttons= _MakeButtons()
  const nav= h("nav", {}, buttons)
  const menu= h("button", {class:"menu-icon"}, [hs(iconMenu)])
  
  const master= context.desktop ?
     h("div", {class:"navbar navbar-normal"}, [menu, nav]) :
     h("div", {class:"navbar navbar-normal"}, [menu])

  function ev_TogglerClick(e){ if(e.button == 0) { context.ReplaceOverlayContent(_CreateFloating()); ce(e) } }
  function ev_TogglerKeyDown(e){ if(e.keyCode == 13) { context.ReplaceOverlayContent(_CreateFloating()); ce(e) } } // enter
  
  menu.addEventListener('click', ev_TogglerClick, true)
  menu.addEventListener('keydown', ev_TogglerKeyDown, true)
  _AddNavbarListeners(buttons)
  _RefreshActivePage(buttons)

  return {
    element: master,
    OnPageChanged: ()=> _RefreshActivePage(buttons),
    Dispose: ()=>{
      menu.removeEventListener('click', ev_TogglerClick)
      menu.removeEventListener('keydown', ev_TogglerKeyDown)
      _RemoveNavbarListeners(buttons)
    }
  }
} 
      
function _CreateFloating() {
  function _MakeNavButton(jsdata, label) { return h("button", {jsdata:jsdata}, [label]) }
  
  const buttons= _MakeButtons()
  const nav= h("nav", {}, buttons)
  const menu= h("button", {class:"menu-icon"}, [hs(iconMenu)])
  
  const master= h("div", {class:"navbar navbar-floating"}, [menu, nav])

  function ev_TogglerClick(e){ if(e.button == 0) { context.ReplaceOverlayContent(null); ce(e) } }
  function ev_TogglerKeyDown(e){ if(e.keyCode == 13) { context.ReplaceOverlayContent(null); ce(e) } } // enter
  
  menu.addEventListener('click', ev_TogglerClick, true)
  menu.addEventListener('keydown', ev_TogglerKeyDown, true)

  _AddNavbarListeners(buttons)
  _RefreshActivePage(buttons)

  return {
    element: master,
    OnKeyDown: (k)=> {
      let i= k > 57 ? k-97 : k-49
      if(i >= 0 && i < buttons.length) buttons[i].click()
    },
    Dispose: ()=>{
      _RemoveNavbarListeners(buttons)
    }
  }
}

function _AddNavbarListeners(buttons){
  for(const el of buttons){
    const p= el.getAttribute("jsdata")
    el.addEventListener('click', ev_ButtonClick, true)
    el.addEventListener('keydown', ev_ButtonKeyDown, true)
    el.addEventListener('auxclick', ev_ButtonAuxClick, true)
    el.addEventListener('mousedown', ev_ButtonMouseDown, true)
  }
}

function _RemoveNavbarListeners(buttons){
  for(const el of buttons){
    el.removeEventListener('click', ev_ButtonClick)
    el.removeEventListener('keydown', ev_ButtonKeyDown)
    el.removeEventListener('auxclick', ev_ButtonAuxClick)
    el.removeEventListener('mousedown', ev_ButtonMouseDown)
  }
}

function _RefreshActivePage(buttons){
  for(const el of buttons) el.classList.toggle("active", el.getAttribute("jsdata") == context.page.name)
}

function _getPage(e) { return e.target.getAttribute("jsdata") }
function ev_ButtonClick(e){ if(e.button == 0) { context.NavigateRoute(_getPage(e)); ce(e) } }
function ev_ButtonKeyDown(e){ if(e.keyCode == 13) { context.NavigateRoute(_getPage(e)); ce(e) } }
function ev_ButtonAuxClick(e){ if(e.button == 1) { context.NavigateTab(_getPage(e)); ce(e) } }
function ev_ButtonMouseDown(e){ if(e.button == 1) { ce(e) } }

export default CreateComponent