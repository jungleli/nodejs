var express = require('express');
var router = express.Router();
var select = require('../model/cascade/cascade');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('select', { title: 'cascade select' });
});

router.get('/release',function(req,res,next){
    console.log('select release');
	select.getTestRelease(req,res,next);
});

router.get('/queryAll',function(req,res,next){
    console.log('select runTest');
    select.queryAll(req,res,next);
});

router.get('/build',function(req, res, next){
	select.getTestBuildByRelease(req, res, next);
});

router.get('/result',function(req, res, next){
	select.getrunTestByBuild(req, res, next);
});

module.exports = router;
