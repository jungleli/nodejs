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
		//http://localhost:3000/testcase/addtestcase?ID=16&NAME=Test
	add : function(req, res, next) {
		pool.getConnection(function(err, connection) {
			if (err)
				throw err;
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.insert, [ param.ID, param.NAME,
					param.Caption, param.Description, param.is_negative,
					param.date_created ], function(err, result) {
				if (result) {
					result = {
						code : 200,
						msg : '增加成功'
					};
				} else {
					console.log(err.message);
				}
				res.json(result);
				// 释放连接
				connection.release();
			});
		});
	},
	
	//http://localhost:3000/testcase/update?ID=16&NAME=hello
	update : function(req, res, next) {
		// var param = req.body;
		var param = req.query || req.params;
		// console.log(param);
		if (param.ID === null) {
			res.json(undefined);
			return;
		}
		pool.getConnection(function(err, connection) {
			connection.query($sql.update, [ param.NAME, param.ID ], function(
					err, result) {
				if (result.affectedRows > 0) {
					result = {
						code : 200,
						msg : 'success'
					};
				} else {
					result = {
						code : 200,
						msg : 'false'
					};
				}
				console.log($sql.update);
				console.log("===========================================");
				res.json(result);
				connection.release();
			});
		});

	},
	//http://localhost:3000/testcase/delete?ID=16
	deleted : function(req, res, next) {
		// delete by Id
		pool.getConnection(function(err, connection) {
			var id = +req.query.ID;
			connection.query($sql.deleted, id, function(err, result) {
				if (result.affectedRows > 0) {
					result = {
						code : 200,
						msg : '删除成功'
					};
				} else {
					result = void 0;
				}
				res.json(result);
				connection.release();
			});
		});
	},
		queryResult : function(req, res, next) {
		var json = '';
		pool.getConnection(function(err, connection) {
			if (err)
				throw err;
			console.log("-----------------------");
			console.log($sql.queryAll);
			connection.query($sql.queryResult, function(err, result) {
				res.json(result);
				connection.release();
			});
		});
	},
  //http://localhost:3000/testcase/queryById?ID=2
	queryById : function(req, res, next) {
		var id = +req.query.ID;
		var json = '';
		pool.getConnection(function(err, connection) {
			console.log("-----------------------");
			console.log($sql.queryById);
			connection.query($sql.queryById, id, function(err, result) {
				res.json(result);
				console.log(result);
				connection.release();

			});
		});
	},
	//http://localhost:3000/testcase/queryAll
	queryAll : function(req, res, next) {
		var json = '';
		pool.getConnection(function(err, connection) {
			if (err)
				throw err;
			console.log("-----------------------");
			console.log($sql.queryAll);
			connection.query($sql.queryAll, function(err, result) {
				res.json(result);
				connection.release();
			});
		});
	}
};

