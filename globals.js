// Globals
const names = require('./names')
const greetings = require('./utils')
const guy = require('./alternative-flavour')

greetings(names.dennis)
greetings(names.brian)
greetings("Kim")
console.log(guy.singlePerson.name)
console.log(guy.items[0])
require('./mind-grenade')