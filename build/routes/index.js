var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/simplePost', function(req, res, next) {
    res.json({ name: 'aaa', pwd: '123' })
});

module.exports = router;