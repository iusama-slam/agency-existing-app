require('http')
  .createServer((req, res) => res.end('Lead app ' + (process.env.APP_NAME || '')))
  .listen(process.env.PORT || 3000)
