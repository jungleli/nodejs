var express = require('express');
var router = express.Router();
var testcase = require('../model/testcase/testcase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('testcase', { title: 'TestCaseDisplay' });
});

router.get('/queryAll',function(req,res,next){
    console.log('select all testcase');
	testcase.queryAll(req,res,next);
});
router.get('/queryById',function(req,res,next){
	console.log("querry by id");
	testcase.queryById(req,res,next);
});
router.get('/queryResult',function(req,res,next){
    console.log('Check testcase rusult');
	testcase.queryResult(req,res,next);
});
router.get('/addtestcase', function(req, res, next) {
	console.log("add user");
    testcase.add(req, res, next);
});
router.get('/delete', function(req, res, next) {
	console.log("delete testcase");
    testcase.deleted(req, res, next);
});
router.get('/update', function(req, res, next) {
	console.log("update testcase");
    testcase.update(req, res, next);
});

module.exports = router;


