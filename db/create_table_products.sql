CREATE TABLE products (
productid serial primary key NOT NULL,
category VARCHAR(80),
productname text,
price decimal,
img text,
description text
);