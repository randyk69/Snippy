var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

//var snippetData = require('../data/codes.json');

router.get('/add-form', function(req, res) {
	res.render('add');
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/save-code', function(req, res, next) {

	var obj = {
	   code_collection: []
	};
	
	var title = req.body.title;
	var category = req.body.category;
    var codes = req.body.codes;
    var txtFile = title.replace(/\s+/g, '-').toLowerCase(); 

    //save json file
    fs.readFile('./data/codes.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); 
        //for (i=0; i<5 ; i++){
        obj.code_collection.push({ "title": title, "title2":txtFile, "cat":category });
        //}
        var json = JSON.stringify(obj); 
        fs.writeFile('./data/codes.json', json, (error) => { 
        	/* handle error */ 
        	if (err) throw err;
        }); 
    }});

    //save to txt file
    fs.writeFile(path.resolve(__dirname, '../public/codes/') + '/' + category + '/' + txtFile + '.txt', codes, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    res.redirect('/');
	});

	next;	 
});



module.exports = router;