var express = require('express');
var router = express.Router();
var path = require("path");
/* GET users listing. */
router.get('/admin', function(req, res) {
  res.send('mệ mỏi');
  res.render(path.resolve("admin/main"));
});
router.get('/single', function(req, res, next){
  res.sendfile(__dirname+'/single.hbs');
});
module.exports = router;

