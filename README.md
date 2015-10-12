

# web_manage



## Usage



## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.


###Start
1. Download Nodejs from: https://nodejs.org/download/
2. Create two mysql database tables (Presume)
[a] TestCase
CREATE TABLE TestCase
(
ID INT(10) NOT NULL AUTO_INCREMENT,
NAME varchar(30),
Caption varchar(30),
Description varchar(50),
is_negative nchar,
date_created datetime,
PRIMARY KEY(ID)
);


[b]
CREATE TABLE  TestResult
(
ID  INT(10) NOT NULL,
TestCaseID INT(10),
Result varchar(10),  //pass, failed, not run, error
description varchar(50),
date_created datetime
);

CREATE TABLE user
(
Name varchar(30),
Password varchar(30), 
);

3. Add 10 items in each table aforementioned.

INSERT INTO TestCase VALUES(11,'login','Login','Login as any user os passwd','N','2015-06-25');
INSERT INTO TestCase VALUES(12,'logout','Logout','Logout','N','2015-06-25'); 
INSERT INTO TestCase VALUES(13,'stress','Login','Login as any user os passwd','Y','2015-06-25');
INSERT INTO TestCase VALUES(14,'','','none testcase name','N','2015-06-25'); 
INSERT INTO TestCase VALUES(15,'case5','Case5','','N','2015-06-25');

INSERT INTO TestResult VALUES(1,1,'PASS','Successful','2015-06-26');
INSERT INTO TestResult VALUES(2,2,'Failed','Successful','2015-06-26');
INSERT INTO TestResult VALUES(3,3,'Not Run','Successful','2015-06-26');
INSERT INTO TestResult VALUES(4,4,'Error','Successful','2015-06-26');
INSERT INTO TestResult VALUES(5,5,'PASS','Successful','2015-06-26');

4. Clone project with : git clone https://github.com/jungleli/nodejs
5. Under project folder, run "npm install" to install the related module
6. Run "npm start" to start server, then visit http://localhost:3000 on your browser


###Note1:Configure to restart service automatic.Then you no need to restart the service every time some changed have been made.
>npm install -g nodemon
>nodemon -v
Modify package.json：
"start": "nodemon ./bin/www"
>npm start



