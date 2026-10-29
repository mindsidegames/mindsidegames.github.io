import _util, { MakeSection } from '../util'

import pic_sopze from '../res/team/sopze-0.webp'
import pic_pinkermine from '../res/team/pinkermine-0.webp'
import pic_niebla from '../res/team/niebla-0.webp'

export function CreatePage() {
  const h= _util.h, hs= _util.hs, sl= _util.sepline, st= _util.septext
  
  function l(l) {
    return hs(`<div><a href="${l.url}" target="_blank"><img src="${l.src}" alt="visit game page on ${l.site}"/></a></div>`)
  }

  function c(identifier, name, pic, desc, scopes){
    return h("article",{class:`card team-card team-${identifier}`}, [
        h("div",{class:"card-picture"}, [
          h("img", {src:pic, 'aria-hidden':""}),
        ]),
        h("div",{class:"card-content"}, [
          h("h1", {}, [name]),
          h("p", {}, [desc]),
          h("span", {}, [scopes])
        ])
      ])
  }

  const master= MakeSection(["text-section", "team-section"], true, false, [
    h("h1", {}, ["Just&nbspa&nbspsolodev who&nbsploves&nbspto code and create."]),
    st("Solo Developer"),
    h("div", {class:"cards-container"}, [
      c("sergio", "Sergio 'Sopze' del Pino", pic_sopze, 
        "Born in Madrid, Spain on 1992. He has been tinkering with his own computer since the age of 3; also played DooM at that age, so he's probably a weirdo and a psycho.",
        "Programming, 2D/3D Artist, Sound/Music production, Narrative, Design"
      ),
      st("Recurrent support"),
      c("isabel", "Isabel 'pinkermine' González", pic_pinkermine, 
        "Born in Almería, Spain on 1991. She has an avid passion for a bunch of artistic branches and also has a talent for emotional creativity and design.", 
        "3D Artist, Narrative, Design"
      ),
      sl(),
      c("niebla", "Niebla", pic_niebla, 
        "The mastermind, beware of him. He's surelly a human who mistakenly fell into a dog's body.", 
        "Executive producer, Therapist"
      )
    ])
  ])

  return {
    title: "TEAM",
    element: master.element
  }
}