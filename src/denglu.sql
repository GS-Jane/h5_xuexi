/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : good

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:44:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for denglu
-- ----------------------------
DROP TABLE IF EXISTS `denglu`;
CREATE TABLE `denglu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `add_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of denglu
-- ----------------------------
INSERT INTO `denglu` VALUES ('1', '13888889898', '123456', '2018-02-08 23:00:13');
INSERT INTO `denglu` VALUES ('2', '17688881701', '88888888', '2018-02-09 00:10:34');
INSERT INTO `denglu` VALUES ('3', '17888881701', '1234', '2018-02-08 23:00:59');
INSERT INTO `denglu` VALUES ('5', '17688811111', '12345', '2018-02-08 23:18:41');
INSERT INTO `denglu` VALUES ('6', '17688881788', '', '2018-02-08 23:27:17');
INSERT INTO `denglu` VALUES ('7', '1111111111', '12345', '2018-02-08 23:31:16');
INSERT INTO `denglu` VALUES ('8', '1111', '111111', '2018-02-08 23:31:55');
INSERT INTO `denglu` VALUES ('9', '13455555', '12345', '2018-02-08 23:34:21');
INSERT INTO `denglu` VALUES ('10', '166666', '12345', '2018-02-08 23:36:41');
INSERT INTO `denglu` VALUES ('11', '188888', '123', '2018-02-08 23:39:33');
INSERT INTO `denglu` VALUES ('12', '10000', '12356777', '2018-02-08 23:41:02');
INSERT INTO `denglu` VALUES ('13', '222222', '12356777', '2018-02-08 23:41:25');
INSERT INTO `denglu` VALUES ('14', '3333333', '12345665', '2018-02-08 23:43:56');
INSERT INTO `denglu` VALUES ('15', '123777777', '12344555', '2018-02-08 23:46:42');
INSERT INTO `denglu` VALUES ('16', '34354654', '454335', '2018-02-08 23:54:32');
INSERT INTO `denglu` VALUES ('17', '313123123', '1231312312', '2018-02-08 23:54:54');
INSERT INTO `denglu` VALUES ('18', '176888811111', '888888888', '2018-02-08 23:58:45');
INSERT INTO `denglu` VALUES ('19', '18888889090', '123456', '2018-02-09 11:25:11');
SET FOREIGN_KEY_CHECKS=1;
