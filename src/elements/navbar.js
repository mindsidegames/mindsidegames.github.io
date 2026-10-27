import { h } from '../util'

import iconMenu from '../res/img/icon_menu.svg?raw'
      
function Instantiate() {
  const element= h("div", {class:"navbar"}, [])
  element.innerHTML= `
    <div class="menu-icon button">${iconMenu}</div>
    <ul class="menu-list"${(mindsideAPI.desktop ? "": " hidden")}>
      <li btn-nav-page="home" class="button">Home</li>
      <li btn-nav-page="games" class="button">Games</li>
      <li btn-nav-page="team" class="button">Team</li>
      <li btn-nav-page="contact" class="button">Contact</li>
    </ul>
  `
  const list= element.querySelectorAll(`.menu-list > li`)
  for(const el of list){
    const p= el.getAttribute("btn-nav-page")
    el.addEventListener('click', (e)=> { 
      if(e.button != 0) return
      mindsideAPI.NavigateRoute(p) 
      e.preventDefault(); e.stopPropagation(); 
    }, true )
    el.addEventListener('auxclick', (e)=> { 
      if(e.button != 1) return
      mindsideAPI.NavigateTab(p)
      e.preventDefault(); e.stopPropagation(); 
    }, true )
    el.addEventListener('mousedown', (e)=> { 
      if(e.button !=1) return
      e.preventDefault(); e.stopPropagation(); 
    }, true )
  }
  element.OnPageChanged= () => {
    for(const el of list) el.classList.toggle("active", el.getAttribute("page") == mindsideAPI.page)
  }
  return element
} 

export default Instantiate