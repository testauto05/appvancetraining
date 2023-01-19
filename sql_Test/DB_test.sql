-- step=Connect
-- username=aiq
-- password=aiq
-- url=jdbc:mysql://localhost:3306/aiq
-- driver_class=com.mysql.jdbc.Driver
-- database=aiq
-- dialect=org.appvance.hibernate.dialect.MySQLDialect
-- connect
-- step=Step1
SELECT * FROM `aiq`.`SummaryElement` LIMIT 1000;
SELECT * FROM `aiq`.`Definition` LIMIT 1000;
-- step=Step2
SELECT * FROM `aiq`.`summarystatsontime` LIMIT 1000;
-- step=Step3
SELECT * FROM `aiq`.`nodedefinition` LIMIT 1000;
-- step=Step4
SELECT * FROM `aiq`.`nodeperscenario` LIMIT 1000;
-- step=Step5
SELECT * FROM `aiq`.`summaryelement` LIMIT 1000;
-- step=Step6
SELECT * FROM `aiq`.`vduration` LIMIT 1000;
-- step=Step7
SELECT * FROM `aiq`.`vduration` LIMIT 1000;
-- step=Step8
SELECT * FROM `aiq`.`vactiveusers` LIMIT 1000;
-- step=Step9
SELECT * FROM `aiq`.`vactiveusers` LIMIT 1000;
-- step=Step10
SELECT * FROM `aiq`.`vdurationpercentil` LIMIT 1000;
-- step=Step11
SELECT * FROM `aiq`.`vsuccessfailure` LIMIT 1000;
-- step=Step12
SELECT * FROM `aiq`.`vsizepercentil` LIMIT 1000;
-- step=Step13
SELECT * FROM `aiq`.`vactiveusers` LIMIT 1000;
-- step=Step14
SELECT * FROM `aiq`.`typelong` LIMIT 1000;
-- step=Step15
SELECT * FROM `aiq`.`vduration` LIMIT 1000;
-- step=Step16
SELECT * FROM `aiq`.`vduration` LIMIT 1000;
-- step=Step17
SELECT * FROM `aiq`.`defaultpercentil` LIMIT 1000;
-- step=Step18
SELECT * FROM `aiq`.`detailedduration` LIMIT 1000;
-- step=Step19
SELECT * FROM `aiq`.`detailedelementattribute` LIMIT 1000;
-- step=Step20
SELECT * FROM `aiq`.`summarychildelement` LIMIT 1000;
-- step=Step21
SELECT * FROM `aiq`.`summarychildelement` LIMIT 1000;
-- step=BeforeDisc
-- step=Disconnect
-- disconnect
                