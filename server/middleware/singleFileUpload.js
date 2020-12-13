const multer = require('multer');

const storage = multer.memoryStorage();

module.exports = (fieldName) => multer({ storage }).single(fieldName);
