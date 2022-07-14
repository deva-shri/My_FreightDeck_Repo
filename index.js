
const express = require('express');
const cookieParser = require('cookie-parser');
  
const app = express();
  
app.get('/', (req, res) => {
   res.cookie('name', 'GeeksForGeeks').send('Cookie-Parser');
});
  
app.listen(3000, (err) => {
    if(err){ console.log(err) } 
    else { console.log('Success!!') }
});