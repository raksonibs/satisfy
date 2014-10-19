var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/complaints', function(req, res) {
    var db = req.db;
    db.collection('complaints').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;
