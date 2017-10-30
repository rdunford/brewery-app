create table products_ordered (
id serial primary key,
productid integer not null references products(productid),
userid integer not null references users(userid),
)
-- quantity integer not null