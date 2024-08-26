const io = require('socket.io')

io.on('play', move => {
    Game.updateOne(move)
})