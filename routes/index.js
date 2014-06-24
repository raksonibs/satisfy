var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var db = req.db
  var collection = db.get('complaints')
  collection.find({}, {}, function(err, response) {
    res.render('index', {
      "complaints": response
    })
  })
  // res.render('index.jade', { title: 'Express' });
});

router.post('/addcomplaint', function(req,res) {
  var db= req.db
  var complaintString = req.body.complaintstring

  var collection = db.get('complaints')

  collection.insert({
    "complaint": complaintString
  }, function (err, doc) {
      if (err) {
        res.send("Failed adding to database")
      } else {
        res.location('/')
        res.redirect('/')
      }
    })
})

module.exports = router;
