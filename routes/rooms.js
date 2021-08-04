var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('rooms');
});

router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    let id = ""
    for (let i = 0; i < 4; i++) {
        id += Math.floor(Math.random() * 9)
    }
  res.redirect(`/rooms/${id}`);
});

module.exports = router;
