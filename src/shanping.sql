/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : good

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:44:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shanping
-- ----------------------------
DROP TABLE IF EXISTS `shanping`;
CREATE TABLE `shanping` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(10) DEFAULT NULL,
  `promotionprice` varchar(10) DEFAULT NULL,
  `lishen` varchar(255) NOT NULL,
  `add_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shanping
-- ----------------------------
INSERT INTO `shanping` VALUES ('1', 'img/l1.jpg', 'THE SAEM 得鲜', '三色眼影KH01', '￥89.00', '69.00', '立省￥20', '2018-02-09 09:38:52');
INSERT INTO `shanping` VALUES ('2', 'img/l1.jpg', 'THE SAEM 得鲜', '三色眼影BL01', '￥89.00', '69.00', '立省￥20', '2018-02-09 09:38:57');
INSERT INTO `shanping` VALUES ('3', 'img/l2.jpg', 'I\'M MEME', '我爱口红', '美美湘优惠价', '119.00', '立省￥0.00', '2018-02-09 09:39:02');
INSERT INTO `shanping` VALUES ('4', 'img/l3.jpg', 'Pony Effect', '悠蓝炫彩磁铁化妆刷', '美美湘优惠价', '329.00', '立省￥0.00', '2018-02-09 09:40:23');
INSERT INTO `shanping` VALUES ('5', 'img/l4.jpg', 'I\'M MEME', '我爱工具 #B10我爱混合眼影刷', '美美箱优惠价', '89.00', '立省￥0.00', '2018-02-09 09:43:06');
INSERT INTO `shanping` VALUES ('6', 'img/l5.jpg', 'I\'M MEME', '我爱工具 #B007我爱两用清洁毛孔刷', '美美箱优惠价', '139.00', '立省￥0.00', '2018-02-09 09:43:11');
INSERT INTO `shanping` VALUES ('7', 'img/l6.jpg', 'I\'M MEME', '我爱十色眼影盘 #SP01约会之日', '美美箱优惠价', '249.00', '立省￥0.00', '2018-02-09 09:43:59');
INSERT INTO `shanping` VALUES ('8', 'img/l7.jpg', 'Pony Effect ', '便携式手提卡片刷套', '￥58', '48.00', '立省￥10.00', '2018-02-09 09:44:28');
INSERT INTO `shanping` VALUES ('9', 'img/l8.jpg', 'Pony Effect', '磁铁小号眼影刷#201', '美美箱优惠价', '118', '立省￥0.00', '2018-02-09 09:45:12');
INSERT INTO `shanping` VALUES ('10', 'img/l9.jpg', 'Pony Effect', '磁铁高光刷#102', '美美箱优惠价', '138.00', '立省￥0.00', '2018-02-09 09:46:15');
INSERT INTO `shanping` VALUES ('11', 'img/l10.jpg', 'Pony Effect', '磁铁化妆刷框架 不含刷子', '美美箱优惠价', '268', '立省￥0.00', '2018-02-09 09:47:50');
INSERT INTO `shanping` VALUES ('12', 'img/l11.jpg', 'Pony Effect', '磁铁化妆刷框架 不含刷子', '￥178', '157', '立省￥21.00', '2018-02-09 09:47:50');
INSERT INTO `shanping` VALUES ('13', 'img/l12.jpg', 'Pony X MEMEBOX ', '闪耀蜜色8色眼影盘', '美美箱优惠价', '219.00 ', '立省￥0.00', '2018-02-09 09:53:42');
INSERT INTO `shanping` VALUES ('14', 'img/l13.jpg', 'Pony Effect ', '小布丁粉扑', '￥88', '82', '立省￥0.00', '2018-02-09 10:10:17');
INSERT INTO `shanping` VALUES ('15', 'img/l14.jpg', 'Pony Effect ', '磁铁粉底刷#106', '￥228', '189', '立省￥39.00', '2018-02-09 10:15:44');
INSERT INTO `shanping` VALUES ('16', 'img/l15.jpg', 'Pony Effect', '玩转色彩轻巧调色板/抹刀组合', '￥158', '126', '立省￥32', '2018-02-09 10:18:35');
INSERT INTO `shanping` VALUES ('17', 'img/l16.jpg', 'Pony Effect', '磁铁化妆刷框架', '美美箱优惠价', '288', '立省￥0.00', '2018-02-09 10:20:32');
INSERT INTO `shanping` VALUES ('18', 'img/l17.jpg', 'I\'M MEME', '我爱水凝唇液', '美美箱优惠价', '119', '立省￥0.00', '2018-02-09 10:21:37');
INSERT INTO `shanping` VALUES ('19', 'img/l18.jpg', 'I\'M MEME', '我爱单色眼影', '美美箱优惠价', '89', '立省￥0.00', '2018-02-09 10:22:48');
INSERT INTO `shanping` VALUES ('20', 'img/l19.jpg', 'I\'M MEME', '我爱魔法棒', '美美箱优惠价', '129', '立省￥0.00', '2018-02-09 10:26:17');
SET FOREIGN_KEY_CHECKS=1;
