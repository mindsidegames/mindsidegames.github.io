import { MakeSection, css } from '../util'
import { ElementReactive3D, WaterPanner } from '../elements/title'
import MakeNavbar from '../elements/navbar'

import mindsideLogo from '../res/img/home_mindside_logo.svg'
import mindsideLogoGlare from '../res/img/home_mindside_logo_glare.svg'
import mindsideTypo from '../res/img/mindside_typo.svg'

import soc_instagram from '../res/social/instagram.svg?url'
import soc_steam from '../res/social/steam.svg?url'
import soc_youtube from '../res/social/youtube.svg?url'

css.Add('./res/css/title.css')

export function Instantiate() {
  const 
    module= MakeSection(["title-section"], false, false, Awake),
    navbar= MakeNavbar()
  module.content.innerHTML= `
    <div id="navbar-node"></div>
    <div class="bg-sky nopointer"/>
      <div class="title-logo">
        <div class="logo-container">
          <div id="title-logo" class="logo">${mindsideLogo}</div>
          <div class="glare">${mindsideLogoGlare}</div>
        </div>
        <div id="title-typo" class="typo">${mindsideTypo}</div>
      </div>
    </div>
    <div id="title-water" class="bg-water">
      <div class="bg-water-l"></div>
      <div class="title-socials">
        <div><a href="https://www.instagram.com/MindsideGames" target="_blank"><img src="${soc_instagram}"/><span>@mindsidegames</span></a></div>
        <div><a href="https://store.steampowered.com/franchise/mindside" target="_blank"><img src="${soc_steam}"/><span>@mindside</span></a></div>
        <div><a href="https://www.youtube.com/@MindsideGamesStudio" target="_blank"><img src="${soc_youtube}"/><span>@MindsideGamesStudio</span></a></div>
      </div>
      <div class="bg-water-r"></div>
    </div>
  `
  module.content.querySelector("#navbar-node").appendChild(navbar)
  return module

  function Awake() {
    ElementReactive3D(document.querySelector('#title-logo'), -3.0, 2.0)
    ElementReactive3D(document.querySelector('#title-typo'), -.25, .5)
    WaterPanner(document.querySelector('#title-water'), 750)
  }
}

export default Instantiate