var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/books', function(req, res, next) {
  res.render('index', { title: 'Books Page!' });
});

module.exports = router;