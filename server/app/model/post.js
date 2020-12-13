const { getDB } = require('../../database/connection');
const { asyncFunction } = require('../../utils/async');

exports.insertPost = asyncFunction(async (data) => {
  const posts = await getDB().collection('posts');

  const post = await posts.insertOne(data);

  return post.insertedCount === 1;
});
