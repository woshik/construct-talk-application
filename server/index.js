const express = require('express');
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
  // secure the server with HTTP headers
  .use(helmet())
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

// 404 api not found route
server.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'route not found',
  });
});

// server error handling
server.use((error, req, res) => {
  logger.error({ label: 'server error', message: error.stack });

  res.status(500).json({
    status: 500,
    message: 'Server Error, Please try again later',
  });
});

connectWithMongodb(() => {
  logger.info('database connected');
});

module.exports = server;
