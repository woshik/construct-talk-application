const validation = require('../validation/index');
const singleFileUpload = require('../middleware/singleFileUpload');
const authTokenValidation = require('../middleware/authTokenValidation');

module.exports = {
  login: {
    url: '/login',
    method: 'post',
    controller: 'auth',
    function: 'login',
    middleware: [validation.login],
  },
  registration: {
    url: '/registration',
    method: 'post',
    controller: 'auth',
    function: 'registration',
    middleware: [validation.registration],
  },
  getPost: {
    url: '/post',
    method: 'get',
    controller: 'post',
    function: 'getPost',
    middleware: [authTokenValidation],
  },
  post: {
    url: '/post',
    method: 'post',
    controller: 'post',
    function: 'createPost',
    middleware: [authTokenValidation, singleFileUpload('image'), validation.createPost],
  },
};
