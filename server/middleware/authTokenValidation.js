/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');

module.exports = (req, res, next) => {
  const token = req.header('X-Auth-Token');

  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: 'Invalid token' });
      return;
    }

    req.user = { id: ObjectId(decoded.id) };
    next();
  });
};
