const fs = require('fs')
const path = require('path')

module.exports = function filteredLs(dirPath, fExtension, cb) {
    fs.readdir(dirPath, (err, fileNames) => {
        if (err) return cb(err)
        filtered = fileNames.filter( fileName => path.extname(fileName) === "." + fExtension)
        cb(null, filtered)
    })
}