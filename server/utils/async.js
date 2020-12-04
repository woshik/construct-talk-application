exports.asyncController = (handler) => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    next(error);
  }
};

exports.asyncFunction = (handler) => async (...args) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await handler(...args);
  } catch (error) {
    throw error;
  }
};
