var express = require('express');
var router = express.Router();
var testcase = require('../model/testcase/testcase')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('testcase', { title: 'TestCaseDisplay' });
});

router.get('/queryAll',function(req,res,next){
    console.log('select all testcase');
	testcase.queryAll(req,res,next);
});

router.get('/queryResult',function(req,res,next){
    console.log('Check testcase rusult');
	testcase.queryResult(req,res,next);
});

module.exports = router;


