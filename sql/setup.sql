-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE if exists users cascade;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
password_hash VARCHAR NOT NULL
);

INSERT INTO users (username, password_hash) VALUES ('yoyosworld', 'Christmastreeswhores')

