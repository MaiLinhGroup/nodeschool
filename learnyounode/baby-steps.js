// input: numbers as cli args
var sum = 0
for (let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i])
}
// output: print sum of input to console
console.log(sum)

// artisanal nonsense for later use
// console.log(process.argv.slice(2).map(Number).reduce((a, b) => a + b))