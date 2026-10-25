import './style.css'

import { ElementReactive3D, WaterPanner } from './elements/home-components'

import homeBackground from './res/img/bg_sky.png'
import mindsideLogo from './res/img/home_mindside_logo.svg?raw'
import mindsideLogoGlare from './res/img/home_mindside_logo_glare.svg?raw'
import mindsideTypo from './res/img/mindside_typo.svg?raw'

import soc_instagram from './res/social/instagram.svg'
import soc_steam from './res/social/steam.svg'
import soc_youtube from './res/social/youtube.svg'

document.querySelector('#root').innerHTML= `
<section class="section">
  <div class="section-container home-container">
    <div class="bg-sky noselect nopointer"/>
      <div class="home-title">
        <div class="logo-container">
          <div id="home-logo" class="logo">${mindsideLogo}</div>
          <div class="glare">${mindsideLogoGlare}</div>
        </div>
        <div id="home-typo" class="typo">${mindsideTypo}</div>
      </div>
    </div>
    <div id="home-water" class="bg-water"/>
      <div class="bg-water-l"></div>
      <div class="home-socials">
        <div><a href="https://www.instagram.com/MindsideGames" target="_blank"><img src="${soc_instagram}"/><span>@MindsideGames</span></a></div>
        <div><a href="https://store.steampowered.com/franchise/mindside" target="_blank"><img src="${soc_steam}"/><span>@MindsideGames</span></a></div>
        <div><a href="https://www.youtube.com/@MindsideGamesStudio" target="_blank"><img src="${soc_youtube}"/><span>@MindsideGamesStudio</span></a></div>
      </div>
      <div class="bg-water-r"></div>
    </div>
  </div>
</section>
<section class="section">
  <div class="section-container noselect">
    <div class="section-inner">
      <h2>Games from deep inside.</h2>
      <div class="separator"></div>
      <p>Contact / Business inquiries: <a href="mailto:mindsidegames@gmail.com" target="_blank">mindsidegames@gmail.com</a></p>
      <p>(C) Mindside Games Studio 2026, All right reserved, Made by Sergio 'Sopze' with Vite+VanillaJS</p>
    </div>
  </div>
</section>
`

ElementReactive3D(document.querySelector('#home-logo'), -3.0, 2.0)
ElementReactive3D(document.querySelector('#home-typo'), -.25, .5)
WaterPanner(document.querySelector('#home-water'), 750)