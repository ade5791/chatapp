const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io');

const publicPath =  path.join(__dirname, '/../public');

const port = process.env.PORT || 5000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath))


io.on('connection', (socket) =>{
    console.log ("a new user just connected");

    socket.emit('newMessage',{
        from: "Mike",
        text: "This is sad"
    })

    socket.on('createMessage', (message) => {
        console.log("createMessage", message);
    })

    socket.on('disconnect', (socket) =>{
        console.log ("User was disconnected")
    
    })
})



server.listen(port, () => {
    console.log(`server is up on port ${port}`)
})