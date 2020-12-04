const { getDB } = require('../../database/connection');
const { asyncFunction } = require('../../utils/async');

exports.getUserByEmail = asyncFunction(async (email, projection = {
  _id: 0,
  password: 0,
}) => {
  const users = await getDB().collection('users');

  const user = await users.findOne({
    email,
  }, {
    projection,
  });

  return user;
});

exports.userRegistration = asyncFunction(async (userData) => {
  const users = await getDB().collection('users');

  const user = await users.insertOne(userData);

  return user.insertedCount === 1;
});
