var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
  res.render('users/signup');
});

router
    .get('/login', function(req, res, next) {
        res.render('users/login');
    })
    .post('/login', function(req, res, next) {
        res.send("username: " + req.body.username + "<br /> password: " + req.body.password);
    })
;

module.exports = router;
