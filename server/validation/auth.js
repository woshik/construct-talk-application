const Joi = require('joi');
const getParamsFromRoute = require('../middleware/getParamsFromRoute');

exports.login = (req, res, next) => {
  const data = getParamsFromRoute(req);

  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Enter a valid email address',
    }),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  });

  const result = schema.validate(data);

  if (result.error) {
    res.status(422).json(result.error);
  } else {
    next();
  }
};
