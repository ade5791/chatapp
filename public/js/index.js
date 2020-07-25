let socket = io();
socket.on('connect', function () {
 console.log ('Connected to server.');

 socket.emit('createMessage', {
     from: "Adetola",
     text:"Wats going on!"
 })
})

socket.on('disconnect', function ()  {
 console.log ('disconnected from server.');
})

socket.on('newMessage', function(message){
    console.log ("newMessage", message);
})