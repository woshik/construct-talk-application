const validation = require('../validation/index');

module.exports = {
  login: {
    url: '/auth/login',
    method: 'post',
    controller: 'auth',
    function: 'login',
    middleware: [validation.login],
  },
};
