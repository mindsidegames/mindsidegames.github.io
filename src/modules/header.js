import _util, { MakeSection } from '../util'

import CreateNavbar from '../components/navbar'

import mindsideLogo from '../res/img/mindside_logo.svg?url'
import mindsideTypo from '../res/img/mindside_typo_name.svg?url'
      
function CreateModule() {
  const h= _util.h, hs= _util.hs
  const 
    title= h("h1", {class:"title"}),
    navbar= CreateNavbar(),
    master= MakeSection(["header-section"], false, false, [
      h("div", {class:"header-left"}, [
        h("a", {href:"/?p=home", class:"logo", 'aria-label':"return to homepage"}, [
          h("img", {src:mindsideLogo, alt:"MindsideGames Logo"}, [])
        ]),
        title
      ]),
      navbar.element
    ])

  return {
    element: master.element,
    OnPageChanged: (pageName) => {
      if(pageName != "") title.removeAttribute("hidden")
      else title.addAttribute("hidden", "")
      
      title.innerHTML= pageName;
      navbar.OnPageChanged()
    },
    Dispose: ()=> {
      navbar.Dispose()
    }
  }
} 

export default CreateModule