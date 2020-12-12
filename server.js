const cluster = require('cluster');
const http = require('http');
const server = require('./server/index');

// clustering only apply on production server
if (cluster.isMaster) {
  require('dotenv').config({
    path: './server/.env',
    debug: process.env.NODE_ENV !== 'production',
  });

  let cpu_num = process.env.NODE_ENV === 'production' ? require('os').cpus().length : 1;
  
  for (let i = 0; i < cpu_num; i++) {
    cluster.fork();
  }

  // every time when any child process fail start new process
  cluster.on('exit', () => {
    cluster.fork();
  });
} else {
  // http server start running
  const { PORT = 5000 } = process.env;

  http
    .createServer(server)
    .listen(PORT, () => console.log(`server is running on port ${PORT}`));
}
