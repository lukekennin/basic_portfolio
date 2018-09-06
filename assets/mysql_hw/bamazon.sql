DROP DATABASE IF EXISTS bamazonDB;

CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT (100) NOT NULL,
  PRIMARY KEY (item_id)
);

Select * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Electronics", 1200.00, 10),
("Fry Pan", "Kitchen", 20.00, 8),
("Keurig", "Kitchen", 45.00, 15),
("Tent", "Outdoors", 500.00, 18),
("Stereo System", "Electronics", 100.00, 5),
("Basketball", "Sports", 15.00, 200),
("Tent", "Camping", 80.00, 40),
("Old Shrimp", "Seafood", 20000.00, 20),
("TV", "Electronics", 200.00, 50),
("Towel Set", "Home", 39.99, 45),
("Decorative Pinecones", "Home", 10.00, 300);