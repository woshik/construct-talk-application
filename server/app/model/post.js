const { getDB } = require('../../database/connection');
const { asyncFunction } = require('../../utils/async');

exports.insertPost = asyncFunction(async (data) => {
  const posts = await getDB().collection('posts');

  const post = await posts.insertOne(data);

  return post.insertedCount === 1;
});

exports.getPost = asyncFunction(async (data) => {
  const posts = await getDB().collection('posts');

  const postList = await posts
    .find(
      {
        user_id: data.user_id,
      },
      {
        skip: data.start,
        limit: 10,
      },
    )
    .toArray();

  return postList;
});
