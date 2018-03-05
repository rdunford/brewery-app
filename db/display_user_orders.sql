-- select email, category from users
-- join products_ordered on products_ordered.userid = users.userid
-- join products on products.productid = products_ordered.productid
-- where userId = $1;
select productname from users
join products_ordered on products_ordered.userid = users.userid
join products on products.productid = products_ordered.productid
where products_ordered.userId = $1
limit 5;