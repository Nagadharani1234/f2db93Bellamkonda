var express = require('express');
var router = express.Router();
const cat_controlers= require('../controllers/cat');
var router = express.Router();
router.get('/', cat_controlers.cat_view_all_Page);
router.get('/', function(req, res, next) {
  res.render('cat', { title: 'Search Results cat' });
});

/* GET cats */

router.get('/detail', cat_controlers.cat_view_one_Page);
router.get('/create',secured, cat_controlers.cat_create_Page);
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
router.get('/update', secured,cat_controlers.cat_update_Page);
router.get('/delete', secured,cat_controlers.cat_delete_Page);
module.exports = router;
