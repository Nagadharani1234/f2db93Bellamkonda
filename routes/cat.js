var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cat', { title: 'Search Results cat' });
});
const cat_controlers= require('../controllers/cat');
/* GET cats */
router.get('/', cat_controlers.cat_view_all_Page );
router.get('/detail', cat_controlers.cat_view_one_Page);
router.get('/create', cat_controlers.cat_create_Page);
router.get('/update', cat_controlers.cat_update_Page);
router.get('/delete', cat_controlers.cat_delete_Page);
module.exports = router;
module.exports = router;