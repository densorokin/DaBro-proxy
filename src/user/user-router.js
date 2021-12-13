const express = require('express');
const controller = require('./user-controller');
const router = express.Router();

router.get('/user/:id', (req, res, next) => {
  controller
    .getUser(req.id)
    .then((json) => res.json(json))
    .catch(next);
});

router.post('user/:id', (req, res, next) => {
  const { email, phoneNumber, password, firstName, lastName, birthday } = req;

  controller
    .createUser({ email, phoneNumber, password, firstName, lastName, birthday })
    .then((json) => res.json(json))
    .catch(next);
});
