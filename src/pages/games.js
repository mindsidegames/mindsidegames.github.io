import _util, { MakeSection } from '../util'

import pic_risewards from '../res/games/eb71ec1f-0.webp'
import pic_hiddenwoods from '../res/games/6a34711d-0.webp'
import pic_reflexes from '../res/games/7b6740df-0.webp'

export function CreatePage() {
  const h= _util.h, hs= _util.hs, sl= _util.sepline

  function l(l) {
    return hs(`<div><a href="${l.url}" target="_blank"><img src="${l.src}" alt="visit game page on ${l.site}"/></a></div>`)
  }

  function c(title, pic, desc, links){
    return h("article",{class:"card game-card"}, [
        h("div",{class:"card-picture"}, [
          h("img", {src:pic, alt:`${title} game presentation picture`}),
        ]),
        h("div",{class:"card-content"}, [
          h("h1", {}, [title]),
          h("p", {}, [desc]),
          h("div", {class:"game-links"}, links.map((gl)=>l(gl)))
        ])
      ])
  }

  const master= MakeSection(["text-section", "games-section"], true, false, [
    h("div", {class:"cards-container"}, [
      c("Risewards", pic_risewards, "Solve puzzles and manage to climb out of the rooms in this game where there are no rules and each run is unique.", [
        { url:"https://store.steampowered.com/app/5005160", src:"", site:"steam" }
      ]),
      sl(),
      c("Hidden Woods", pic_hiddenwoods, "5 min experimental game about how thoughts and decisions change reality.", [
        { url:"https://sopze.itch.io/hidden-woods", src:"", site:"itch.io" }
      ]),
      sl(),
      c("Risewards", pic_reflexes, "Android game to 'train' your reflexes while killing some time.", [
        { url:"https://play.google.com/store/apps/details?id=com.SopSoftware.RefleXes", src:"", site: "google play" }
      ])
    ])
  ])

  return {
    title: "GAMES",
    element: master.element
  }
}