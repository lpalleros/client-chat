const express = require('express');

const app = express();

const PORT = 4000;

app.listen(PORT);

app.use(express.static(__dirname));

app.get('/', (req,res) => {
    console.log('Connected');
});