var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



// ************** DAY 1 ****************

// Node.js program to demonstrate the   
// path.basename() method
  
// Import the path module
// const path = require('path');
  
// path1 = path.basename('/home/user/bash/index.txt');
// console.log(path1)
  
// // Using the extension parameter
// path2 = path.basename('/home/user/bash/index.txt', '.txt');
// console.log(path2)




// Node.js program to demonstrate the   
// path.delimiter property
  
// Allocating path module
// const path = require('path');
  
// Printing path.delimiter value
// console.log(path.delimiter);



// Node.js program to demonstrate the    
// path.dirname() method 
     
// Import the path module
// const path = require('path');
   
// Complete file path
// path1 = path.dirname("/users/admin/website/index.html");
// console.log(path1)
   
// // Only file name
// // returns a period (.)
// path2 = path.dirname("readme.md");
// console.log(path2)
   
// // Path with file not specified
// path3 = path.dirname("website/post/comments")
// console.log(path3);

// Node.js program to demonstrate the    
// path.dirname() method 
     
// Import the path module
// const path = require('path');
   
// console.log("File name:", __filename);
// path1 = path.dirname(__filename);
// console.log(path1);
   
// console.log("Directory name:", __dirname);
// path2 = path.dirname(__dirname);
// console.log(path2);





// Node.js program to demonstrate the   
// path.extname() method
  
// Import the path module
// const path = require('path');
   
// path1 = path.extname("hello.txt");
// console.log(path1)
   
// path2 = path.extname("readme.md");
// console.log(path2)
   
// // File with no extension
// // Returns empty string
// path3 = path.extname("fileDump")
// console.log(path3)
   
// // File with blank extension
// // Return only the period
// path4 = path.extname("example.")
// console.log(path4)
   
// path5 = path.extname("readme.md.txt")
// console.log(path5)
   
// // Extension name of the current script
// path6 = path.extname(__filename)
// console.log(path6)



// Node.js program to demonstrate the   
// path.extname() method
  
// Import the path module
// const path = require('path');
   
// Comparing extensions from a
// list of file paths
// paths_array = [
//     "/home/user/website/index.html",
//     "/home/user/website/style.css",
//     "/home/user/website/bootstrap.css",
//     "/home/user/website/main.js",
//     "/home/user/website/contact_us.html",
//     "/home/user/website/services.html",
// ]
   
// paths_array.forEach(filePath => {
//     if (path.extname(filePath) == ".html")
//         console.log(filePath);
// });




// Import the path module
// const path = require('path');

// CASE 1
// If "dir", "root" and "base" are all given,
// "root" is ignored.
// let path1 = path.format({
// 	root: "/ignored/root/",
// 	dir: "/home/user/personal",
// 	base: "details.txt",
// });
// console.log("Path 1:", path1);

// // CASE 2
// // If "dir" is not specified then "root" will be used
// // If only "root" is provided
// // platform separator will not be included.
// // "ext" will be ignored.
// let path2 = path.format({
// 	root: "/",
// 	base: "game.dat",
// 	ext: ".noextension",
// });
// console.log("Path 2:", path2);

// // CASE 3
// // If "base" is not specified
// // "name" and "ext" will be used
// let path3 = path.format({
// 	root: "/images/",
// 	name: "image",
// 	ext: ".jpg",
// });
// console.log("Path 3:", path3);



//************* Cookie Parser ***************/

// const express = require('express');
// const cookieParser = require('cookie-parser');
  
// const app = express();
  
// app.get('/', (req, res) => {
//    res.cookie('name', 'GeeksForGeeks').send('Cookie-Parser');
// });
  
// app.listen(3000, (err) => {
//     if(err){ console.log(err) } 
//     else { console.log('Success!!') }
// });



// const express = require('express')
// const app = express()

// respond with "hello world" when a GET request is made to the homepage


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3001;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });


// app.get('/', (req, res) => {
//   res.send('hello world')
//   res.cookie('name', 'GeeksForGeeks').send();
//   console.log(req.cookies);
// })


// var express = require('express')
// var cookieParser = require('cookie-parser')
   
// // var app = express()
// app.use(cookieParser('GFG'))
   
// app.get('/', function (req, res) {
//   res.cookie('name', 'GeeksForGeeks', { signed: true }).send();
//   console.log(req.signedCookies)
// })
   
// app.listen(3000, (err) => {
//   if(err) { console.log(err) }
//   else { console.log('Success') }
// })

// app.listen(3000, (err) => {
//   if(err){ console.log(err) } 
//   else { console.log('Success!!') }
// });

// var cookieParser = require('cookie-parser');
// app.use(cookieParser());

// app.get('/', function (req, res) {
//   // Cookies that have not been signed
//   console.log('Cookies: ', req.cookies);

//   // Cookies that have been signed
//   console.log('Signed Cookies: ', req.signedCookies);
// })

// app.listen(8080);