const fs = require('fs')
const path = require('path')

const dirPath = process.argv[2]
const fileExtension = "." + process.argv[3]

fs.readdir(dirPath, (err, fileNames) => {
    if (err) return console.error(err)
    fileNames.forEach(fileName => {
        if (path.extname(fileName) === fileExtension){
            console.log(fileName)
        }
    }) 
})