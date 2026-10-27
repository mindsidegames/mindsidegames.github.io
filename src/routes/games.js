import { MakeSection } from '../util'

import pic_risewards from '../res/games/eb71ec1f-0.webp'
import pic_hiddenwoods from '../res/games/6a34711d-0.webp'
import pic_reflexes from '../res/games/7b6740df-0.webp'

export const useHeader = true
export const useFooter = true

const module= MakeSection(["text-section", "game-section"], true, false, null)
module.content.innerHTML= `
  <article class="card game-card">
    <div class="card-picture"><img src="${pic_risewards}"/></div>
    <div class="card-content">
      <h1 class="card-name">Risewards</h1>
      <div class="card-description">Solve puzzles and manage to climb out of the rooms in this game where there are no rules and each run is unique.</div>
    </div>
  </article>
  <div class="separator"></div>
  <article class="card game-card">
    <div class="card-picture"><img src="${pic_hiddenwoods}"/></div>
    <div class="card-content">
      <h1 class="card-name">Hidden Woods</h1>
      <div class="card-description">5 min experimental game about how thoughts and decisions change reality.</div>
    </div>
  </article>
  <div class="separator"></div>
  <article class="card game-card">
    <div class="card-picture"><img src="${pic_reflexes}"/></div>
    <div class="card-content">
      <h1 class="card-name">RefleXes</h1>
      <div class="card-description">Android game to 'train' your reflexes while killing some time.</div>
    </div>
  </article>
`

export function Render(root){
  root.appendChild(module.section)
}

export const GetTitle= ()=> "GAMES";