const net = require('net')

function apendzero (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    apendzero(d.getMonth() + 1) + '-' +
    apendzero(d.getDate()) + ' ' +
    apendzero(d.getHours()) + ':' +
    apendzero(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
