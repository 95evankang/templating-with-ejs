const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Our Home Page';
  res.render('pages/index',{title,title});
});

//about-us
app.get('/about-us', (req, res) => {
  var title = 'Our About Us Page';
  res.render('pages/about-us',{title,title});
});

app.get('/texas-flooding', (req, res) => {
  var title = 'Texas Flooding';
  res.render('pages/texas-flooding',{title,title});
});

app.get('/little-wing', (req, res) => {
  var title = 'Little Wing';
  res.render('pages/little-wing',{title,title});
});

app.get('/little-pan-alley', (req, res) => {
  var title = 'Little Pan Alley';
  res.render('pages/little-pan-alley',{title,title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
