CREATE DATABASE node_mysql_ts;

CREATE TABLE posts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(200) NOT NULL,
    description NVARCHAR(200) NOT NULL,
    image_url NVARCHAR(200),
    create_at TIMESTAMP DEFAULT current_timestamp
);


DESCRIBE posts;