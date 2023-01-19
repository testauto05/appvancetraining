-- dbvendor=ORACLE
-- username=aiq
-- password=aiq
-- host=oraclesmoketest.c7nn5t4czzya.us-west-2.rds.amazonaws.com
-- schema=ORCL
-- port=1521
-- connect
SELECT * from Definition where DefinitionID = :definitionId
-- storeInLocker
-- disconnect
                