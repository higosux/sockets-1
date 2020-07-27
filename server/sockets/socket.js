const { io } = require('../server');

io.on('connection', (client) => {

    console.log('User connected');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome to the APP'
    })


    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Listen client

    client.on('sendMessage', (data, callback) => {

        client.broadcast.emit('sendMessage', data); // Everyone
        console.log(data);
        // if (message.user) {
        //     callback({
        //         response: 'Everything Ok'
        //     });
        // } else {
        //     callback({
        //         response: 'Something is wrong'
        //     })
        // }
    });
});