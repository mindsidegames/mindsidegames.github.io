import _util, { MakeSection, css } from '../util'
import { SetupReactive3D, SetupWaterPanner } from '../components/title'
import CreateNavbar from '../components/navbar'

import mindsideLogo from '../res/img/home_mindside_logo.svg'
import mindsideLogoGlare from '../res/img/home_mindside_logo_glare.svg'
import mindsideTypo from '../res/img/mindside_typo.svg'

import soc_instagram from '../res/social/instagram.svg?url'
import soc_steam from '../res/social/steam.svg?url'
import soc_youtube from '../res/social/youtube.svg?url'

await css.Add('./res/css/title.css')
await new Promise(requestAnimationFrame)

function CreateModule() {
  const h= _util.h, hs= _util.hs

  function s(l, src) {
    return hs(`<div><a href="${l.url}" target="_blank"><img src="${src}"/><span>${l.name}</span></a></div>`)
  }

  const 
    el_logo= h("div", {class:"logo"}, [hs(mindsideLogo)]),
    el_typo= h("div", {class:"typo"}, [hs(mindsideTypo)]),
    el_water= h("div", {class:"bg-water"}, [
      h("div", {class:"bg-water-l"}, []),
      h("div", {class:"title-socials"}, [
        s(context.social.instagram, soc_instagram),
        s(context.social.steam, soc_steam),
        s(context.social.youtube, soc_youtube)
      ]),
      h("div", {class:"bg-water-r"}, [])
    ]),
    navbar= CreateNavbar(),
    master= MakeSection(["title-section"], false, false, [
      h("div", {class:"title-navbar"}, [navbar.element]),
      h("div", {class:"bg-sky nopointer"}, [
        h("div", {class:"title-logo"}, [
          h("div", {class:"logo-container"}, [
            el_logo,
            h("div", {class:"glare"}, [hs(mindsideLogoGlare)])
          ]),
          el_typo,
        ])
      ]),
      el_water
    ])

  let ref
  const 
    c_Logo3D= SetupReactive3D(el_logo, -3.0, 2.0),
    c_Typo3D= SetupReactive3D(el_typo, -.25, .5),
    c_WaterPanner= SetupWaterPanner(el_water, 750, { ref })

  return {
    element: master.element,
    Start: ()=> navbar.OnPageChanged(),
    Dispose: ()=> {
      navbar.Dispose()
      c_Logo3D.Dispose()
      c_Typo3D.Dispose()
      c_WaterPanner.Dispose()
      ref= null
    }
  }
}

export default CreateModule