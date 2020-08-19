DROP TABLE IF EXISTS "cities";
DROP SEQUENCE IF EXISTS cities_id_seq;
CREATE SEQUENCE cities_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."cities" (
    "id" integer DEFAULT nextval('cities_id_seq') NOT NULL,
    "name" character(255) NOT NULL,
    CONSTRAINT "cities_name" UNIQUE ("name")
) WITH (oids = false);

INSERT INTO "cities" ("id", "name") VALUES
(1,	'Odessa'),
(2,	'Kyiv');





DROP TABLE IF EXISTS "weather";
DROP SEQUENCE IF EXISTS weather_id_seq;
CREATE SEQUENCE weather_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."weather" (
    "id" integer DEFAULT nextval('weather_id_seq') NOT NULL,
    "cityId" integer NOT NULL,
    "temperature" integer,
    "humidity" integer,
    "date" timestamp NOT NULL
) WITH (oids = false);

INSERT INTO "weather" ("id", "cityId", "temperature", "humidity", "date") VALUES
(1,	1,	27,	NULL,	'2020-08-19 10:21:54'),
(2,	1,	28,	NULL,	'2020-08-18 10:21:54'),
(3,	1,	30,	NULL,	'2020-08-17 10:21:54'),
(4,	1,	19,	NULL,	'2020-08-16 10:21:54'),
(5,	1,	22,	NULL,	'2020-08-15 10:21:54'),
(6,	1,	25,	NULL,	'2020-08-14 10:21:54'),
(7,	1,	29,	NULL,	'2020-08-13 10:21:54');
