const express = require('express');
const controller = require('./product-controller');
const router = express.Router();

router.get('/', (_, res, next) => {
  controller
    .getAllData()
    .then((json) => res.json(json))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  controller
    .getProducts(req.id)
    .then((json) => res.json(json))
    .catch(next);
});

router.post('/create', (req, res, next) => {
  const { title, description } = req;

  controller
    .createProduct({ title, description })
    .then((json) => res.json(json))
    .catch(next);
});

module.exports = router;
