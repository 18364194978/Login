/*
 * ���ʱ�䣺2017-08-15
 * ˵��:��ӽṹ���ı�
 */
 CREATE TABLE `menulist` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `name` varchar(20) DEFAULT NULL,
   `text` varchar(64) DEFAULT NULL,
   `leaf` varchar(64) DEFAULT NULL,
   `checked` varchar(64) DEFAULT NULL,
   `parentid` varchar(64) DEFAULT NULL,
   PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8