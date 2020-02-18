const express = require('express');

const AccountsRouter = require('./api/accounts-router');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter);

server.get('/', (req, res) => {
  res.send('<h2>Learning SQL<h2>');
});

module.exports = server;
