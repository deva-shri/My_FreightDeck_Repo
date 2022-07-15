var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.render('index', { title: 'Books Page!' });
});

router.get('/search', function(req, res, next) {
	res.status(200).json({id: 1, name: "Harry Potter", author: "J.K. Rowling"})
});

router.get('/add', function (req, res, next){
  res.render('bookAdd', {title: 'Book Details'})
});

//****** Case 2 *****/
router.post('/add', function (req, res, next) {
	var name = req.body.bookName;
	var id = req.body.bookID;
	var author = req.body.authorName;

  console.log(name + " " + id + " " + author);
	res.status(200).json({ message:  "Book Saved Successfully" });
});

router.get('/add/:id', function(req, res, next) {
  const {id} = req.params;
  console.log("This is id: "+id);
  console.log("1. "+id.bookName);
  console.log("2. "+id.bookID);
  console.log("3. "+id.authorName);

	res.status(200).json({ message:  "Book Saved Successfully" });
})

//***** Case 1 *****/
// router.post('/add', function (req, res, next) {
// 	console.info(req.body);
// 	res.status(200).json({ message:  "Book Saved Successfully" });
// });

router.get('/find/:id', function (req, res, next) {
	const {id} = req.params;
	console.info(`here is the id you have entered ${id}`);
	res.status(200).json({ message:  "Book Found" });
});

module.exports = router;
