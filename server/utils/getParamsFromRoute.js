module.exports = (req) => {
  let params;

  switch (req.method) {
    case 'GET':
      params = { ...req.query, ...req.params };
      break;
    case 'POST':
    case 'PUT':
    case 'UPDATE':
    case 'DELETE':
      params = { ...req.body, ...req.params };
      break;

    default:
      params = { ...req.params };
      break;
  }

  return params;
};
