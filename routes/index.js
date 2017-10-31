var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Учет отсутствия', brand: 'ГУП «Оренбургремдорстрой»', user: req.user });
});

module.exports = router;
