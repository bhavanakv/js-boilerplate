import express from 'express';
import path from 'path';
import open from 'open';

let port = 9000;
let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) throw err;
    open('http://localhost:' + port);
});
