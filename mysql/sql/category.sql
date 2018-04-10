CREATE TABLE  IF NOT EXISTS  `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT, # ID
  `name` varchar(255) DEFAULT NULL, # 分类名称
  `is_deleted` TINYINT DEFAULT 0, # 是否删除
  `dated` DATETIME DEFAULT NULL,   # 创建时间
  `modified_dated` DATETIME DEFAULT NULL, # 修改时间
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS  `category_bind` (
  `id` int(11) NOT NULL AUTO_INCREMENT, # ID
  `category_id` int(11) DEFAULT NULL, # 分类名称
  `unique` char(32) DEFAULT NULL,   # 用户
  `is_deleted` TINYINT DEFAULT 0, # 是否删除
  `dated` DATETIME DEFAULT NULL,   # 创建时间
  `modified_dated` DATETIME DEFAULT NULL, # 修改时间
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;