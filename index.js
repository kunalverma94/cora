var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

console.log("staer");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get('/get', function (req, res) {
  request.get(req.query.url, function (error, response, body) {
    res.send(body);
  })
});
app.get('/', function (req, res) {
  let s = 'https://coraa.herokuapp.com/get?url=[[URL HERE]]'
  let e = 'https://coraa.herokuapp.com/get?url=https://m.9gag.com/v1/group-posts/group/default/type/hot?c=1'
  res.send('hello world :RID OF CORS issue <br> USE:' + s + ' <br>' + e);
});
app.listen(process.env.PORT || 5000);
module.exports = router;