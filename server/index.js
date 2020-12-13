const express = require('express');
const { resolve } = require('path');
const helmet = require('helmet');
const cors = require('cors');

const logger = require('./utils/serverErrorLogger');
const { connectWithMongodb } = require('./database/connection');

const server = express();

// server exception handling
process.on('uncaughtException', (error) => {
  logger.error({
    label: 'uncaughtException',
    message: error.stack,
  });

  process.exit(1);
});

// server rejection handling
process.on('unhandledRejection', (error) => {
  logger.error({
    label: 'unhandledRejection',
    message: error.stack,
  });

  process.exit(1);
});

// important middleware
server
  // enable cors for server, Access-Control-Allow-Origin: *
  .use(cors())
  // secure the server with headers
  .use(helmet({
    contentSecurityPolicy: false,
  }))
  .use(express.json())
  .use(
    express.urlencoded({
      extended: true,
    }),
  );

// api route mapping
server.use(
  '/api/v1',
  require('./routes/urlConfig')(require('./routes/api'), __dirname),
);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  server.use(express.static(resolve(__dirname, '../client/build')));

  // Handle React routing, return all requests to React app
  server.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../client/build/index.html'));
  });
}

// 500 error handling
server.use((req, res) => {
  res.status(500).json({
    message: 'Server Error, Please try again later',
  });
});

connectWithMongodb(() => {
  // eslint-disable-next-line no-console
  console.log('database connected');
});

module.exports = server;
