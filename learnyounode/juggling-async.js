const http = require('http')
const args = process.argv.slice(2)
let contents = []
let count = 0 

function collectContent(url, index) {
    http.get(url, (response) => {
        let content = ''

        response.setEncoding('utf8')
        response.on('data', (chunk) => {
            content += chunk
        })
        response.on('end', () => {
            contents[index] = content
            count++

            if(count == 3) printContents()
        })
    })
}

function printContents() {
    contents.forEach(content => console.log(content))
}

for(let i = 0; i<3; i++) {
    collectContent(args[i], i)
}