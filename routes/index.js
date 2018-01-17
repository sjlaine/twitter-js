'use strict';

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
module.exports = router;

// module.exports = function makeRouterWithSockets(io) {
//   function respondWithAllTweets (req, res, next){
//     var allTheTweets = tweetBank.list();
//     res.render('index', {
//       title: 'Twitter.js',
//       tweets: allTheTweets,
//       showForm: true
//     });
// }

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true});
});

// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile('/Users/sarahlaine/Desktop/Fullstack/twitter-js/public/stylesheets/style.css');
// })

router.use(express.static('public'));


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  var id = Number.parseInt(req.params.id, 10);
   var list = tweetBank.find( {id: id});
   res.render( 'index', { tweets: list } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  io.sockets.emit('new_tweet', newTweet);
  res.redirect('/');
});


