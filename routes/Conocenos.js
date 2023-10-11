var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/views/Conocenos.hbs', function(req, res, next) {
    res.send('' );
});

module.exports = router;