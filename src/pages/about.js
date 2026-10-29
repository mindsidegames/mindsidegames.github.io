import _util, { MakeSection } from '../util'

export function CreatePage() {
  const h= _util.h, hs= _util.hs

  const master= MakeSection(["text-section about-section"], true, false, [
      h("h1", {}, ["Hello world"])
    ])

  return {
    title: "ABOUT US",
    element: master.element
  }
}