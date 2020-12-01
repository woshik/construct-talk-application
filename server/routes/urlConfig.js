/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const express = require('express');
const { resolve } = require('path');
const { asyncController } = require('../middleware/async');

const router = express.Router();

module.exports = (api, appDIR) => {
  Object.entries(api).forEach((route) => {
    const routeInfo = route[1];

    // console.log(routeInfo.url, routeInfo.middleware ?? [], require(resolve(`${appDIR}/app/controller/${routeInfo.path ?? ''}/${routeInfo.controller}`))[routeInfo.function] )
    router[routeInfo.method](
      routeInfo.url,
      routeInfo.middleware ?? [],
      asyncController(require(resolve(`${appDIR}/app/controller/${routeInfo.path ?? ''}/${routeInfo.controller}`))[routeInfo.function]),
    );
  });

  return router;
};
