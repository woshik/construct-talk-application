// const Joi = require('joi');

exports.createPost = (req, res, next) => {
  // const schema = Joi.object({
  //   post: Joi.string().required(),
  // });

  // req.validationResult = schema.validate(req.body);

  next();
};
