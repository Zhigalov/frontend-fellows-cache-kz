var express = require('express');
var app = express();
var fetchProducts = require('./fetchProducts');
var redis = require('redis');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);

var client = redis.createClient();

app.get('/', (req, res) => {
    client.getAsync('coffee')
        .then(data => {
            if (data) {
                return JSON.parse(data);
            }

            return fetchProducts().then(data => {
                client.set('coffee', JSON.stringify(data));
                return data;
            });
        })
        .then(data => res.json(data));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
