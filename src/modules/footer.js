import _util, { MakeSection } from '../util'

function CreateModule() {
  const h= _util.h, hs= _util.hs
  const master= MakeSection(["footer-section"], true, false, [
    h("h2", {}, ["games&nbspfrom deep&nbspinside"]),
    h("div", {class:"line-separator"}, []),
    h("p", {class:"text contact"}, [
      "Contact&nbsp/ Business&nbspinquiries: ",
      h("a", {href:context.social.email.url}, [context.social.email.name])
    ]),
    h("p", {class:"text-dimm0", 'aria-hidden':""}, [
      "©&nbsp2026 Mindside&nbspGames&nbspStudio, All&nbsprights&nbspreserved ·&nbspPage&nbspcreated&nbspby Sergio&nbsp'Sopze' with&nbspVite+VanillaJS ",
      h("span", {class:"text-dimm1"}, ["(no&nbspcrap&nbspvibecoding)"])
    ]),
    h("span", {class:"page-version", 'aria-hidden':""}, [context.version])
  ])
  return {
    element: master.element
  }
}

export default CreateModule