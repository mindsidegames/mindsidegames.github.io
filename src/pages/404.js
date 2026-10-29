import _util, { MakeSection } from '../util'

export function CreatePage() {
  const h= _util.h, hs= _util.hs, sl= _util.sepline

  const master= MakeSection(["e404-section"], true, false, [
    h("h1", {}, ["404"]),
    h("h2", {}, ["Page Not Found"]),
    h("p", {}, ["Sorry, the&nbsppage&nbspyou're&nbsplooking&nbspfor just&nbspdoesn't&nbspexist."]),
    sl(),
    h("a", {href:"/?p=home"}, ["Return home"])
  ])
  return {
    useHeader: false, 
    useFooter: false,
    element: master.element
  }
}