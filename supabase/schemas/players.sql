create table players (
  id integer not null primary key,
  first_name character(30) not null unique,
  last_name character(30),
  birthdate date not null,
  height smallint not null,
  weight smallint not null,
  dorsal smallint,
  position player_position not null
);