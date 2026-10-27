import { MakeSection } from '../util'

export const useHeader = false
export const useFooter = false

const module= MakeSection(["e404-section"], true, false, null)
module.content.innerHTML= `
  <h1>404 Page Not Found</h1>
  <h3>Sorry, the page you're looking for just doesn't exist.</h3>
  <div class="separator"></div>
  <a id="btn-nav-home" class="button" href="/" >Return home</a>
`

export function Render(root){
  root.appendChild(module.section)
}

export const GetTitle= ()=> null;