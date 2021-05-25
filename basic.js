const WebSocket = require('ws')
const restify = require('restify')


const server = restify.createServer()

server.get('/', async (req, res, next) => {
  const ws = new WebSocket('wss://api.bitfinex.com/ws/')

  ws.on('error', () => {})
  setTimeout(() => {
    ws.close()
    ws.terminate()
  }, 1000)
  res.send()
  next()
})

server.listen(3000)
