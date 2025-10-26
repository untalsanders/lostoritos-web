CREATE TABLE "players" (
  "id" integer NOT NULL PRIMARY KEY,
  "first_name" character(30) UNIQUE,
  "last_name" character(30),
  "birthdate" date NOT NULL,
  "height" smallint NOT NULL,
  "weight" smallint NOT NULL,
  "dorsal" smallint
)