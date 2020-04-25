var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../public/index.html'), { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../public/about.html'), { title: 'Express' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../public/products.html'), { title: 'Express' });
});

/* GET products page. */
router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../public/contact.html'), { title: 'Express' });
});

module.exports = router;
