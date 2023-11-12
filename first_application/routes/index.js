var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    {name: 'Home', rating: 10},
    {name: 'Grandmas House', rating: 9},
    {name: 'San Francisco', rating: 5},
    {name: 'San Antonio', rating: 6},
    {name: 'Virginia Beach', rating: 5}
  ];

  var myname = "Ollie"

  res.render('index', { title: 'Favorite Places',
  places: places,
  myname: myname
});
});

module.exports = router;
