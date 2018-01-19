'use strict';

const express = require('express');
const router = express.Router();
var tweetBank = require('../tweetBank.js');
module.exports = router;

router.use(express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function (req, res) {
  var id = +req.params.id;
  var list = tweetBank.find( { id: id} );
  res.render( 'index', { tweets: list });
})

router.post('/tweets', function(req, res) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
});
