const { MongoClient } = require('mongodb');
const logger = require('../utils/serverErrorLogger');

let dbClient;
let db;

exports.connectWithMongodb = (callback) => {
  MongoClient.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 60000,
    // tls: true,
    poolSize: 100,
  })
    .then((client) => {
      dbClient = client;
      db = dbClient.db(process.env.DB_NAME);
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      logger.error({
        label: 'connectWithMongodb',
        message: error.trace,
      });
    });
};

exports.getDBClient = () => dbClient;

exports.getDB = () => db;
