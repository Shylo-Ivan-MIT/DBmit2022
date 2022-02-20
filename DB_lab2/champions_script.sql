CREATE TABLE "participants" (
  "id" SERIAL,
  "full_name" varchar,
  "age" int,
  "gender" bool,
  "team_id" int
);

CREATE TABLE "teams" (
  "id" SERIAL,
  "team_name" varchar,
  "country" varchar
);

CREATE TABLE "champions" (
  "name" varchar,
  "year" date,
  "sponsors_id" int,
  "organizators_id" int,
  "teams" int
);

CREATE TABLE "organizations" (
  "id" SERIAL,
  "name" varchar,
  "type" varchar,
  "internatinal" varchar
);

CREATE TABLE "sponsors" (
  "id" SERIAL,
  "name" varchar,
  "private" bool,
  "donation" int
);

ALTER TABLE "participants" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("id");

ALTER TABLE "teams" ADD FOREIGN KEY ("id") REFERENCES "champions" ("teams");

ALTER TABLE "sponsors" ADD FOREIGN KEY ("id") REFERENCES "champions" ("sponsors_id");

ALTER TABLE "organizations" ADD FOREIGN KEY ("id") REFERENCES "champions" ("organizators_id");
