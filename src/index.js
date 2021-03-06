// MIDDLEWARE IMPORTS
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// ROUTE IMPORT
const routes = require('./index.routes');

// INSTANCE OF EXPRESS
const server = express();

//  REQ/RES MIDDLEWARE
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json());

// MOUNTING ROUTES TO API PATH
server.use(routes);

// PORT
const port = process.env.PORT;
server.listen(port, () => console.log(`server up and running on port ${port}`));

module.exports = server; 