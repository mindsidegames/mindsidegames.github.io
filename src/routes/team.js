import { MakeSection } from '../util'

export const useHeader = true
export const useFooter = true

const module= MakeSection(["text-section", "team-section"], true, false, null)
module.content.innerHTML= `
  <h1 class="team-header">Just a solodev who loves to code and create.</h1>
  <div class="text-separator"><div></div><h1>Solo Developer</h1><div></div></div>
  
  <article class="card team-sergio">
    <div class="card-picture"><img src="${""}"/></div>
    <div class="card-content">
      <h1 class="card-name">Sergio 'Sopze' del Pino</h1>
      <p class="card-description">Born in Madrid, Spain on 1992. He has been tinkering with his own computer since the age of 3; also played DooM at that age, so he's probably a weirdo and a psycho.</p>
      <span class="card-scopes">Programming, 2D/3D Artist, Sound/Music production, Narrative, Design</span>
    </div>
  </article>
  <div class="text-separator"><div></div><h1>Recurrent support</h1><div></div></div>
  <article class="card team-isabel">
    <div class="card-picture"><img src="${""}"/></div>
    <div class="card-content">
      <h1 class="card-name">Isabel 'Pinkermine' González</h1>
      <p class="card-description">Born in Almería, Spain on 1991. She has an avid passion for a bunch of artistic branches and also has a talent for emotional creativity and design.</p>
      <span class="card-scopes">3D Artist, Narrative, Design</span>
    </div>
  </article>
  <div class="separator"></div>
  <article class="card team-niebla">
    <div class="card-picture"><img src="${""}"/></div>
    <div class="card-content">
      <h1 class="card-name">Niebla</h1>
      <p class="card-description">The mastermind, beware of him. He's surelly a human who mistakenly fell into a dog's body.</p>
      <span class="card-scopes">Psychologist, Therapy</span>
    </div>
  </article>
`

export function Render(root){
  root.appendChild(module.section)
}

export const GetTitle= ()=> "TEAM";