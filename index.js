'use strict';
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const greetController = require('./routes/greet');
const lukeController = require('./routes/luke');
const ahsokaController = require('./routes/ahsoka');
const hanController = require('./routes/han');

app.use('/', rootController);
app.use('/greet', greetController);
app.use('/greet/luke', lukeController);
app.use('/greet/ahsoka', ahsokaController);
app.use('/greet/han', hanController);