CREATE DATABASE test_form;
USE test_form;

CREATE TABLE messages (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          email VARCHAR(255) NOT NULL,
                          message TEXT NOT NULL,

);