echo "

drop table users;

create table users (
  userid   varchar(255) primary key,
  password varchar(255) not null,
  email    varchar(255) unique
);

insert into users (userid, password, email) values ('a', 'a', 'a');
insert into users (userid, password, email) values ('b', 'b', 'b');

" | psql reg

