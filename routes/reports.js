var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('reports', { title: 'Учет отсутствия / Отчеты', brand: 'ГУП «Оренбургремдорстрой»', user: req.user });
});

module.exports = router;
