const Joi = require('joi');

exports.login = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Enter a valid email address',
      'any.required': 'Enter a valid email address',
    }),
    password: Joi.string().min(6).required(),
  });

  req.validationResult = schema.validate(req.routeData);
  next();
};

exports.registration = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required().messages(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    dob: Joi.date().required(),
    companyName: Joi.string().allow(''),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    specialty: Joi.string().required(),
    otherSpecialty: Joi.when('specialty', {
      is: 'Other',
      then: Joi.string().required(),
    }),
  });

  req.validationResult = schema.validate(req.routeData);

  next();
};
