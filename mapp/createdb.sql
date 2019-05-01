drop table users;

create table users (
  userid varchar(255) primary key,
  password varchar(255) not null
);

insert into users (userid, password) values ('a', 'a');
insert into users (userid, password) values ('b', 'b');

