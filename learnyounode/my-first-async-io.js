const fs = require('fs')

// supply encoding gives String directly instead of Buffer
fs.readFile(process.argv[2], 'utf8', (err,lines)=> {
    if (err) return console.error(err)
    console.log(lines.split('\n').length-1)
})