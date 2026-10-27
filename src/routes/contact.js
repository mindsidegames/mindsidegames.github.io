import { MakeSection } from '../util'

import soc_gmail from '../res/social/gmail.svg?url'
import soc_discord from '../res/social/discord.svg?url'
import soc_instagram from '../res/social/instagram.svg?url'
import soc_steam from '../res/social/steam.svg?url'
import soc_youtube from '../res/social/youtube.svg?url'

export const useHeader = true
export const useFooter = true

const module= MakeSection(["text-section"], true, false, null)
module.content.innerHTML= `
  <div class="contact-row">
    <div class="row-header"><h1>Direct Contact</h1></div>
    <div class="row-content">
      <div><a href="mailto:mindsidegames@gmail.com" target="_blank"><img src="${soc_gmail}"/><span>mindsidegames@gmail.com</span></a></div>
      <div><a href="https://discord.com/users/1562073466092392448" target="_blank"><img src="${soc_discord}"/><span>mindsidegames</span></a></div>
    </div>
  </div>
  <div class="separator"></div>
  <div class="contact-row">
    <div class="row-header"><h1>Socials</h1></div>
    <div class="row-content">
      <div><a href="https://www.instagram.com/MindsideGames" target="_blank"><img src="${soc_instagram}"/><span>@mindsidegames</span></a></div>
      <div><a href="https://store.steampowered.com/franchise/mindside" target="_blank"><img src="${soc_steam}"/><span>@mindside</span></a></div>
      <div><a href="https://www.youtube.com/@MindsideGamesStudio" target="_blank"><img src="${soc_youtube}"/><span>@MindsideGamesStudio</span></a></div>
    </div>
  </div>
`

export function Render(root){
  root.appendChild(module.section)
}

export const GetTitle= ()=> "CONTACT";