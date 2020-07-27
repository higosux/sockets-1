var socket = io();

// listen
socket.on('connect', function() {
    console.log('Connected to server');
});

// listen 
socket.on('disconnect', function() {
    console.log('Lost connection to server');
});

// Los emit son para enviar información
socket.emit('sendMessage', {
    user: 'Gosu', // Comment for verify the server response
    message: 'Test'
}, function(resp) {
    console.log('Server response', resp);
});
//
socket.on('sendMessage', function(message) {
    console.log('Server:', message);

});