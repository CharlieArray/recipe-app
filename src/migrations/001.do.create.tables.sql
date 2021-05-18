

CREATE DATABASE brokerage;

DROP TABLE IF EXISTS user;


CREATE TABLE users(
    id INT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    user_name VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    email VARCHAR(25) NOT NULL,
);

DROP TABLE IF EXISTS watchlist;

CREATE TABLE watchlist(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    stock_name TEXT NOT NULL, 
    last_price INT NOT NULL,
    users_id INT REFERENCES users(id),
);