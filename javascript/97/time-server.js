const net = require('net')

let port = (Number(process.argv[2]));


function dateTime() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}

const server = net.createServer(function (socket) {
    socket.end(dateTime() + '\n')
})
server.listen(port);





// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))




// var net = require('net')
// var port = process.argv[2]

// function zeroFill(i) {
//     return (i < 10 ? '0' : '') + i
// }

// function now() {
//     var d = new Date()
//     return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//     socket.on('data', function (data) {
//         console.log(data.toString())
//     })
// })
// server.listen(port)

// var socket = require('net').Socket()
// socket.connect(port)
// socket.end(now() + '\n')