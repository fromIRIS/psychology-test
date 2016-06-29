var express = require('express');
var router = express.Router();
var calculate = require('../fn/calculate.js');
var questionList = require('../models/question-list.js');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { questionList: questionList });
});

router.post('/api/submit', function (req, res, next) {
  // var dataJson = JSON.parse(req.body);
  var resultJson = calculate(req.body);
  res.json({
    isSuccess: true,
    data: resultJson
  })
})
module.exports = router;
