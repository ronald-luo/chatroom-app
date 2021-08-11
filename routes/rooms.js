var express = require('express');
var router = express.Router();

let roomList = {
    "0000": {
        // messages: [
        //     {
        //         text: "hi whats up",
        //         user: "Joe",
        //     },
        //     {
        //         text: "nm how about you",
        //         user: "Flow",
        //     },
        // ]
    },
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('rooms');
});

router.get('/:id', function(req, res, next) {
    if (roomList[req.params.id]) {
        res.render('room', { id: req.params.id });
    }
    else {
        res.render('error')
    }
});

// router.post('/:id', function(req, res, next) {
//     roomList[req.params.id].messages.push({text: req.body.message });
//     res.render('room', { chat: roomList[req.params.id].messages, id: req.params.id});
// });

router.post('/', function(req, res, next) {
    let id = ""
    for (let i = 0; i < 4; i++) {
        id += Math.floor(Math.random() * 9)
    }

    roomList[id] = { messages: [] }
    res.redirect(`/rooms/${id}`);
});

module.exports = router;
