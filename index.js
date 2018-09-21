const static = require('node-static')

const file = new static.Server('./public', { cache: 3600 })

require('http')
  .createServer((request, response) => {
    request
      .addListener('end', () => {
        file.serve(request, response)
      })
      .resume()
  })
  .listen(8080)

console.log('Server is running on http://localhost:8080')
