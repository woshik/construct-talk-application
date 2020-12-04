/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { getUserByEmail, userRegistration } = require('../model/user');

exports.login = async (req, res, next) => {
  const { email, password } = req.routeData;

  const userData = await getUserByEmail(email, {});

  if (!userData) {
    return res.status(400).json({ message: 'Wrong email address' });
  }

  const isMatch = await bcrypt.compare(password, userData.password);

  if (isMatch) {
    delete userData.password;

    jwt.sign({ id: userData._id }, process.env.SECRET_TOKEN, (err, token) => {
      if (err) {
        return next();
      }

      delete userData._id;

      return res
        .header('auth-token', token)
        .json({ token, userData });
    });
  } else {
    return res.status(400).json({ message: 'Invalid password' });
  }

  return null;
};

exports.registration = async (req, res, next) => {
  const userData = req.routeData;

  const userExist = await getUserByEmail(userData.email);

  if (userExist) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

  userData.password = hashedPassword;
  delete userData.confirmPassword;

  const inserted = await userRegistration(userData);

  if (inserted) {
    res.json({ success: true });
  } else {
    next();
  }

  return null;
};
