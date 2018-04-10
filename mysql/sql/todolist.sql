CREATE TABLE  IF NOT EXISTS  `todolist` (
  `id` int(11) NOT NULL AUTO_INCREMENT, # ID
  `unique` char(32) DEFAULT NULL, # 用户唯一ID
  `description` varchar(255) DEFAULT NULL, # 描述
  `deadline` DATETIME DEFAULT NULL,   # 截止时间
  `state` TINYINT DEFAULT 0, # 状态  0 1 2
  `is_deleted` TINYINT DEFAULT 0, # 是否删除
  `dated` DATETIME DEFAULT NULL,   # 创建时间
  `modified_dated` DATETIME DEFAULT NULL, # 修改时间
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;