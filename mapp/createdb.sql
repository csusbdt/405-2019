drop table users;

create table users (
  userid   varchar(255) primary key,
  password varchar(255) not null,
  email    varchar(255) 
);

insert into users (userid, password, email) values ('a', 'a', 'a@mail.com');
insert into users (userid, password, email) values ('b', 'b', 'a@mail.com');

