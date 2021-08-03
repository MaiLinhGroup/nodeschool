const myModuleFn = require('./mymodule')

const args = process.argv.slice(2)

myModuleFn(args[0], args[1], (err, filteredNames) => {
    if (err) return console.error(err)
    filteredNames.forEach(name => {
        console.log(name)
    });
})