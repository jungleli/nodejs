/**
 * New node file
 */
module.exports = {
		insert:'INSERT INTO TestResult VALUES(?,?,?,?,?)',
		update:'update TestResult set Result=? where ID=?',
		deleted:'delete from TestResult where ID=?',
		queryByID:'select * from TestResult where ID=?',
		queryAll:'select * from TestResult'
}
