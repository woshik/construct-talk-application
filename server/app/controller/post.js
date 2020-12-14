/* eslint-disable consistent-return */
const uuid = require('uuid').v4;
const { insertPost, getPost } = require('../model/post');
const s3 = require('../../utils/s3');

exports.createPost = async (req, res, next) => {
  const { file } = req;

  if (file) {
    const fileInfo = file.originalname.split('.');

    const fileType = fileInfo[fileInfo.length - 1];

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${uuid()}.${fileType}`,
      Body: file.buffer,
    };

    s3.upload(params, async (error, data) => {
      if (error) {
        return next();
      }

      const postData = {
        user_id: req.user.id,
        post: req.body.post,
        image: data.Location,
        time: new Date(),
      };

      const inserted = await insertPost(postData);

      if (inserted) {
        res.json({ success: true });
      } else {
        next();
      }
    });
  } else {
    const postData = {
      user_id: req.user.id,
      post: req.body.post,
      time: new Date(),
    };

    const inserted = await insertPost(postData);

    if (inserted) {
      res.json({ success: true });
    } else {
      next();
    }
  }
};

exports.getPost = async (req, res) => {
  const postList = await getPost({
    user_id: req.user.id,
    start: parseInt(req.query.start, 10),
  });

  res.json({ postList });
};
