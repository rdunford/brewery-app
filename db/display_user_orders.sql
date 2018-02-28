select email, category from users
join products_ordered on products_ordered.userid = users.userid
join products on products.productid = products_ordered.productid