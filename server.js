const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const entryRouter = require('./routes/entryRouter');
const quoteRouter = require('./routes/quoteRouter');
//const userRouter = require('./routes/userRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//routers
app.use('/entries', entryRouter);
app.use('/quotes', quoteRouter);
//user settings -- where all the info about user(s) is stored...?
//app.use('/users', userRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});