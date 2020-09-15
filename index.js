const express = require('express');
const mime = require('mime');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/download', (req, res) => {
    const file = __dirname + '/upload/coffeeCup.gif';
    console.log('file: ' + file);

    const filename = path.basename(file);
    console.log('filename: ' + filename);
    const mimetype = mime.getType(file);
    console.log('mimetype: ' + mimetype);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    const filestream = fs.createReadStream(file);
    filestream.pipe(res);
})

app.get('/download2', (req, res) => {
    const file = __dirname + '/upload/coffeeCup.gif';

    res.download(file);
})

app.listen(PORT, () => console.log(`Server is on port ${PORT}.`));