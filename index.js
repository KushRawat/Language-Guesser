const franc = require("franc")
const langs = require("langs")

const input = process.argv[2]
const langCode = (franc(input))

const language = langs.where("2",langCode)
console.log(language.name)