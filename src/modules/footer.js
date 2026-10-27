import { MakeSection } from '../util'

function Instantiate() {
  const module= MakeSection(["footer-section"])
  module.content.innerHTML= `
    <h2>games&nbspfrom deep&nbspinside</h2>
    <div class="separator"></div>
    <p class="text contact">Contact&nbsp/ Business&nbspinquiries: <a href="mailto:mindsidegames@gmail.com" target="_blank">mindsidegames@gmail.com</a></p>
    <p class="text">©&nbsp2026 Mindside&nbspGames&nbspStudio, All&nbsprights&nbspreserved ·&nbspPage&nbspcreated&nbspby Sergio&nbsp'Sopze' with&nbspVite+VanillaJS <span class="note">(no&nbspcrap&nbspvibecoding)</span></p>
  `
  return module
}

export default Instantiate