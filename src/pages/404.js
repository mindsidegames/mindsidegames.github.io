import { MakeSection } from '../util'

export function CreatePage() {
  const master= MakeSection(["e404-section"], true, false, null)
  master.content.innerHTML= `
    <h1>404 Page Not Found</h1>
    <h3>Sorry, the page you're looking for just doesn't exist.</h3>
    <div class="separator"></div>
    <a id="btn-nav-home" class="button" href="/" >Return home</a>
  `
  return {
    useHeader: false, useFooter: false,
    element: master
  }
}