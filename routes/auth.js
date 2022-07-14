var express = require('express');
const { render } = require('../app');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Auth Page!'});
})

router.get('/login', function(req, res, next) {
  res.render('login', {title: "Login Page"});
})

module.exports = router;