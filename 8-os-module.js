const os = require('os');

// Get info about the current user
const user = os.userInfo()
console.log(user)

// Method that return the system uptime

const up = os.uptime()
console.log(`The system uptime is ${up} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeSpace: os.freemem()
}

console.log(currentOS)