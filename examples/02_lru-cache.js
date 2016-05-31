var express = require('express');
var app = express();
var fetchProducts = require('./fetchProducts');
var LRU = require('lru-cache');
var cache = LRU({ maxAge: 3000 });

app.get('/', (req, res) => {
    if (!cache.has('coffee')) {
        cache.set('coffee', fetchProducts());
    }

    cache
        .get('coffee')
        .then(data => res.json(data));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
