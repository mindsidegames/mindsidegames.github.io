
const context= {
  version: "v0.3",
  desktop: !(navigator.maxTouchPoints > 0 && matchMedia("(pointer: coarse)").matches),
  overlay: {any: false, ref:null},
  page: {any: false, name:"", ref:null},
  social: {
    email:      l("email",      "mindsidegames@gmail.com",    "mailto:mindsidegames@gmail.com"),
    discord:    l("discord",    "mindsidegames",              "https://discord.com/users/1562073466092392448"),
    instagram:  l("instagram",  "@mindsidegames",             "https://www.instagram.com/MindsideGames"),
    steam:      l("steam",      "@mindside",                  "https://store.steampowered.com/franchise/mindside"),
    youtube:    l("youtube",    "@MindsideGamesStudio",       "https://www.youtube.com/@MindsideGamesStudio")
  }
}

export default context

function l(t, n, u) { return {type:t, name:n, url:u} }