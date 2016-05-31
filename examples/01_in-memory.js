var express = require('express');
var app = express();
var fetchProducts = require('./fetchProducts');

var cache;

app.get('/', (req, res) => {
    cache = cache || fetchProducts();
    cache.then(data => res.json(data));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
