import { MakeSection } from '../util'

import MakeNavbar from '../elements/navbar'

import mindsideLogo from '../res/img/mindside_logo.svg'
import mindsideTypo from '../res/img/mindside_typo_name.svg'
      
function Instantiate() {
  const 
    module= MakeSection(["header-section"], false, false, null),
    navbar= MakeNavbar()
  module.content.innerHTML= `
    <div class="header-fixed">
      <div class="header-logo">
        <div class="logo">${mindsideLogo}</div>
        <div class="typo">${mindsideTypo}</div>
      </div>
    </div>
    <div class="header-title"><h1></h1></div>
  `
  const 
    fixed= module.content.querySelector(".header-fixed"),
    title= module.content.querySelector(".header-title")
  fixed.appendChild(navbar)
  module.OnPageChanged= (pageName) => {
    if(pageName != "") title.removeAttribute("hidden")
    else title.addAttribute("hidden", "")
    
    title.querySelector("h1").innerHTML= pageName;
    navbar.OnPageChanged()
  }
  return module
} 

export default Instantiate