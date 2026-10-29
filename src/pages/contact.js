import _util, { MakeSection } from '../util'

import soc_gmail from '../res/social/gmail.svg?url'
import soc_discord from '../res/social/discord.svg?url'
import soc_instagram from '../res/social/instagram.svg?url'
import soc_steam from '../res/social/steam.svg?url'
import soc_youtube from '../res/social/youtube.svg?url'

export function CreatePage() {
  const h= _util.h, hs= _util.hs

  function r(title, children){
    return h("div",{class:"contact-row"}, [
        h("div",{class:"row-header"}, [hs(`<h1>${title}</h1>`)]),
        h("div",{class:"row-content"}, children)
      ])
  }

  function s(l, src) {
    return hs(`<div><a href="${l.url}" target="_blank"><img src="${src}"/><span>${l.name}</span></a></div>`)
  }

  const master= MakeSection(["text-section"], true, false, [
      r("Direct Contact", [
        s(context.social.email, soc_gmail),
        s(context.social.discord, soc_discord)
      ]),
      h("div", {class:"line-separator"}, []),
      r("Socials", [
        s(context.social.instagram, soc_instagram),
        s(context.social.steam, soc_steam),
        s(context.social.youtube, soc_youtube)
      ]),
    ])

  return {
    title: "CONTACT",
    element: master.element
  }
}