const Joi = require('joi');
const getParamsFromRoute = require('../utils/getParamsFromRoute');

exports.login = (req, res, next) => {
  const data = getParamsFromRoute(req);

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).require(),
  });

  const result = schema.validate(data, {
    abortEarly: false,
  });

  if (result.error) {
    res.status(422).json(result.error);
  } else {
    next();
  }
};
