var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/store', function(req, res, next) {
    res.render('store');
});

router.get('/aboutus', function(req, res, next) {
    res.render('aboutus');
});

module.exports = router;
