'use strict'
let express = require ('express');
let app = express ();

app.use (express.static ('assets'));

app.use ('/lch', require ('reset.js'));

app.use ('/twbs', express.static ('node_modules/bootstrap/dist/css'));

app.use ('/fa', express.static ('node_modules/font-awesome/css'));
app.use ('/fonts', express.static ('node_modules/font-awesome/fonts'));

app.get ('/', (req, res) => {
  res.sendFile (require ('path').join (__dirname, 'assets/static/index.html'));
})

app.listen (8080);