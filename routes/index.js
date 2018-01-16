const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile('/Users/sarahlaine/Desktop/Fullstack/twitter-js/public/stylesheets/style.css');
// })

router.use(express.static('public'));

module.exports = router;

