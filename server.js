const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const PORT = 4000;

http.listen(PORT);
app.use(bodyParser.json());

app.use(express.static(__dirname));

const messages = [
    {name: 'lucas', message: 'simple message'},
    {name: 'josh', message: 'simple messages'},
]

app.get('/messages', (req,res) => {
    res.send(messages);
});

app.post('/messages', (req,res) => {
    io.emit('message',req.body);
    messages.push( req.body );
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    console.log(socket);
})

app.get('/', (req,res) => {
    console.log('Connected');
});