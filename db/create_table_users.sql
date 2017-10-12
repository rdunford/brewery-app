CREATE TABLE users (
userid serial primary key,
user_name VARCHAR(80),
email varchar(80),
img text,
auth_id text,
admin bool
);