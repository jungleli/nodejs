/**
 * New node file
 */
module.exports = {
		insert:'INSERT INTO TestCase VALUES(?,?,?,?,?,?)',
		update:'update TestCase set NAME=? where ID=?',
		deleted:'delete from TestCase where ID=?',
		queryById:'select * from TestCase where ID=?',
		queryAll:'select * from TestCase',
		queryResult: 'select * from TestCase,TestResult where TestCase.ID=TestResult.ID'
}
