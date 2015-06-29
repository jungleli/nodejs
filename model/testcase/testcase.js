var mysql = require('mysql');
var $conf = require('../../configure/db');
var $util = require('../../configure/util');
var $sql = require('./index');


var pool  = mysql.createPool($util.extend({}, $conf.mysql));
//var pool  = mysql.createPool($conf.mysql);
//var pool = mysql.createPool(
//		{
//						host:'127.0.0.1',
//						user:'root',
//						password:'jungleli',
//						database:'test',
//						port:3307
//		});


module.exports = {
		queryResult: function(req,res,next){
			var json='';
			pool.getConnection(function(err,connection){
				if(err) throw err;
				console.log("-----------------------");
				console.log($sql.queryAll);
				connection.query($sql.queryResult, function(
						err, result) {
					res.json(result);
					connection.release();
			});
		  });
		},
		queryAll: function(req, res, next) {
			var json = ''
			pool.getConnection(function(err, connection) {	
				if(err) throw err;
				console.log("-----------------------");
				console.log($sql.queryAll);
				connection.query($sql.queryAll, function(
						err, result) {
					res.json(result);
					connection.release();
				});
			});
		}
	};

/*module.exports = {
	queryAll: function(req, res, next) {
		var json = ''
		pool.getConnection(function(err, connection) {	
			debugger;
			if(err) throw err;
			console.log("-----------------------");
			console.log($sql.queryAll);
			connection.query($sql.queryAll, function(
//			connection.query("select * from TestCase", function(
					err, result) {
//				jsonWrite(res,result);
				// 释放连接
				debugger;
				res.json(result);
				connection.release();
			});
		});
	}
};*/