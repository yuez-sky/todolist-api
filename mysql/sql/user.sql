CREATE TABLE  IF NOT EXISTS  `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT, # 用户ID
  `unique` char(32) DEFAULT NULL, # 用户唯一ID
  `email` varchar(255) DEFAULT NULL,    # 邮箱地址
  `password` varchar(255) DEFAULT NULL, # 密码
  `name` varchar(255) DEFAULT NULL,     # 用户名
  `dated` DATETIME DEFAULT NULL,   # 创建时间
  `modified_dated` DATETIME DEFAULT NULL, # 修改时间
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;