/**
 * New node file
 */
module.exports = {
		insert:'INSERT INTO testrun VALUES(?,?,?,?,?,?,?,?,?)',
		update:'update testrun set NAME=? where ID=?',
		deleted:'delete from testrun where ID=?',
		getTestRelease:'select DISTINCT testRelease FROM TestRun WHERE (LENGTH(testRelease) >= 1) ORDER BY testRelease DESC',
		getTestBuildByRelease:'select testBuild, testBuildNumber FROM TestRun where testRelease=? order by testBuildDate desc',
		getrunTestByBuild:'SELECT runID, runScope, testPC, testBuild, Locale, testRelease, testBuildNumber, testBuildDate FROM TestRun WHERE (testBuildNumber = ?) ORDER BY runID DESC',
		queryById:'select * from testrun where ID=?',
		queryAll:'select * from testrun',
		queryResult: ''
}
