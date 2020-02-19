var express = require('express');
var router = express.Router();

const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/my', function(req, res, next) {
  (async (req, res, next) => {
    let response = await axios({
      url: "http://localhost:3000",
      method: "get"
    })
    console.log('my response', response.statusText)
    res.send(response.statusText)
  })(req, res, next)

});


/* GET home page. */
router.get('/google', async function(req, res, next) {
  let response = await axios.get("https://www.google.com")
  console.log('google response', response.statusText)
  res.send(response.statusText)
});


module.exports = router;
