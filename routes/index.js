var express = require('express');
var router = express.Router();
var userRef = new Firebase('https://dwabit.firebaseio.com/');
var distressSignals = new Firebase('https://dwabit.firebaseio.com/DistressSignals/');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Security' });
});

router.get('/users/:id', function(req, res, next) {
	res.render('user', { title: 'User', id: req.params.id});

});

router.get('/user/police', function(req, res, next) {
	res.render('userpolice', { title: 'Call Police'});
});

module.exports = router;
