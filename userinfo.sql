CREATE nodejs IF NOT EXISTS nodejs CHARACTER SET UTF8;

USE nodesample;
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'key',
  `UserName` varchar(64) NOT NULL ,
  `UserPass` varchar(64) NOT NULL ,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;