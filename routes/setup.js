var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('setup', {
        title: 'Учет отсутствия / Настройки',
        brand: 'ГУП «Оренбургремдорстрой»',
        user: req.user
    });
});

module.exports = router;