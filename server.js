const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(cors())

server.use('/api/schemes', SchemeRouter);

module.exports = server;