const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');
const restricted = require('../auth/restricted-middleware');
const server = express();
server.use(cors());

server.use(helmet());
server.use(express.json());

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

server.get('/', (req, res) => {
  res.send(`${utc}`);
});

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;
