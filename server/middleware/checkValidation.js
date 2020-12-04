/* eslint-disable consistent-return */
module.exports = (req, res, next) => {
  if (req.validationResult) {
    if (req.validationResult.error) {
      return res.status(422).json(req.validationResult.error.details[0]);
    }
  }

  req.routeData = req.validationResult.value;
  delete req.validationResult;
  next();
};
