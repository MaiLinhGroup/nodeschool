const http = require('http')

http.get(process.argv[2], (response) => {
    let data = ''
    let numCharReceived = 0
    
    response.setEncoding('utf8')
    response.on('data', (chunk)=> {
        data += chunk
        numCharReceived += chunk.length
    })
    response.on('end', () => {
        console.log(numCharReceived)
        console.log(data)
    })
})