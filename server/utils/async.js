exports.asyncController = (handler) => async (req, res, next) => {
  try {
    await handler(req, res);
  } catch (error) {
    next(error);
  }
};

exports.asyncFunction = (handler) => async (...args) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await handler(...args);
  } catch (error) {
    throw error;
  }
};
