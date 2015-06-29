var mysql = require('mysql');
var $conf = require('../../configure/db');
var $util = require('../../configure/util');
var $sql = require('./index');


var pool  = mysql.createPool($util.extend({}, $conf.mysql));


module.exports = {
		queryAll: function(req, res, next) {
			var json = ''
			pool.getConnection(function(err, connection) {	
				if(err) throw err;
				console.log($sql.queryAll);
				connection.query($sql.queryAll, function(
						err, result) {
					res.json(result);
					connection.release();
				});
			});
		}
	};
