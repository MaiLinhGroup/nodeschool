// load global module into const
const fs = require('fs')
// read in file content as string and split it by newlines to count number of newlines
const numNewLines = fs.readFileSync(process.argv[2],'utf8').split('\n').length-1

console.log(numNewLines)