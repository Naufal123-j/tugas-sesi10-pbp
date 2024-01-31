const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaControler');

const app = express();
const PORT = 3000;

app.parser(bodyParser.json());

//endpoint untuk mahasiswa
app.use('/mahasiswa', mahasiswaController);

//jalankan server
app.listen(PORT, () => {
    console.log('server is running on http://localhost:${PORT}');
});