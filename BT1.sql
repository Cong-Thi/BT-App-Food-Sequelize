CREATE TABLE user(
user_id int NOT NULL AUTO_INCREMENT,
full_name varchar(255),
email varchar(255),
password varchar(255),
PRIMARY KEY (user_id)
);

CREATE TABLE food(
food_id int NOT NULL AUTO_INCREMENT,
food_name varchar(255),
image varchar(255),
price float,
des varchar(255),
type_id int NOT NULL,
PRIMARY KEY (food_id),
FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

CREATE TABLE orders(
user_id int NOT NULL,
food_id int NOT NULL,
amount int,
code varchar(255),
arr_sub_id varchar(255),
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN KEY (food_id) REFERENCES food(food_id)
);

CREATE TABLE sub_food(
sub_id int NOT NULL AUTO_INCREMENT,
sub_name varchar(255),
sub_price float,
food_id int NOT NULL,
PRIMARY KEY (sub_id),
FOREIGN KEY (food_id) REFERENCES food(food_id)
);

CREATE TABLE rate_res(
user_id int NOT NULL,
res_id int NOT NULL,
amount int,
date_rate datetime,
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

CREATE TABLE restaurant(
res_id int NOT NULL AUTO_INCREMENT,
res_name varchar(255),
Image varchar(255),
des varchar(255),
PRIMARY KEY (res_id)
);

CREATE TABLE like_res(
user_id int NOT NULL,
res_id int NOT NULL,
date_like datetime,
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);


CREATE TABLE food_type(
type_id int NOT NULL AUTO_INCREMENT,
type_name varchar(255),
PRIMARY KEY (type_id)
);


-- Bài Tập --
-- Cau1: 5 người đã like nhà hàng nhiều nhất
SELECT user.user_id, user.full_name , SUM(rate_res.amount) as luot_like
FROM user 
INNER JOIN rate_res
ON user.user_id = rate_res.user_id
INNER JOIN restaurant
ON rate_res.res_id = restaurant.res_id 
GROUP BY user.user_id
ORDER BY luot_like DESC
LIMIT 5
;

-- Cau2: 2 nhà hàng có lượt like nhiều nhất
SELECT restaurant.res_id, restaurant.res_name, SUM(rate_res.amount) as total_like
FROM restaurant 
INNER JOIN rate_res
ON restaurant.res_id = rate_res.res_id
INNER JOIN user
ON user.user_id = rate_res.user_id 
GROUP BY restaurant.res_id
ORDER BY total_like DESC
LIMIT 2
;

-- Cau3: tìm người đã đặt hàng nhiều nhất
select user.full_name as name , orders.amount as dat_hang
FROM user
INNER JOIN orders
ON user.user_id = orders.user_id
INNER JOIN food
ON orders.food_id = food.food_id
ORDER BY orders.amount DESC
LIMIT 1
;

-- cau4: tìm người dùng không hoạt dộng trong hệ thống
SELECT user.full_name as name
FROM rate_res
RIGHT JOIN orders
ON rate_res.user_id = orders.user_id
RIGHT JOIN user
ON orders.user_id = user.user_id
WHERE rate_res.amount  IS NULL AND orders.amount IS NULL
;

-- cau5: tính trung bình sub_food của một food
SELECT sub_food.food_id as id , food.food_name as ten_mon , AVG(sub_food.sub_price) as trung_binh
FROM sub_food
LEFT JOIN food
ON sub_food.food_id = food.food_id
GROUP BY id
;




