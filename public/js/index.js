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
    let li = document.createElement('li');
    li.innerText = `${message.from}:${message.text}`
    document.querySelector('body').appendChild(li)
});

document.querySelector('#submit-btn').addEventListener('click',function(e){
    e.preventDefault();

    socket.emit("createMessage", {
        from: "user",
        text: document.querySelector('input[name="message"]').value
    }, function() {
    })
})
