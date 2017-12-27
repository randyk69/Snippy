var express = require('express');
var router = express.Router();
//var path = require('path');

// Declare variables
var fs = require('fs');


router.get('/category/:cat', function(req, res) {
  
  var data;
  var coll_arr;
  //var fileNames = [];
  var temp;
  var obj;

  fs.readFile('./data/codes.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    var category = req.params.cat;
    category = category.charAt(0).toUpperCase() + category.slice(1);

    //res.render(req.params.cat, {
    res.render('codes', {
      pageTitle: category,
      cat: req.params.cat,
      snippets: obj
    }); 

  });

  

  
    /*

  fs.readFile('./data/codes.json', (err, data) => {
    if (err) throw err;
    //console.log(data);
  });


  switch(req.params.cat) {
	case 'php':
	  data = req.app.get('phpData');
	  coll_arr = data.php_collection;
	  break;
	default:
	  console.log('Category not found...');
  }

  
  coll_arr.forEach(function(item) {
      temp = item.title;
      fileNames = temp.replace(/\s+/g, '-').toLowerCase(); 
      console.log(temp.replace(/\s+/g, '-').toLowerCase());
  });
  */

  //data = req.app.get('codeData');
  //coll_arr = obj.code_collection;

  //var data = req.app.get('appData');
  //var php_coll = data.php_collection;
  

});

module.exports = router;
