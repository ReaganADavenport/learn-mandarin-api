create table greetings (
    id serial primary key,
    character varchar(100),
    pinyin varchar(200),
    english varchar(200)
);

create table nationalities (
    id serial primary key,
    character varchar(100),
    pinyin varchar(200),
    english varchar(200)
);

create table family (
    id serial primary key,
    character varchar(100),
    pinyin varchar(200),
    english varchar(200)
);

create table numbers (
    id serial primary key,
    character varchar(100),
    pinyin varchar(200),
    english varchar(200)
);

create table days_and_months (
    id serial primary key,
    character varchar(100),
    pinyin varchar(200),
    english varchar(200)
);

create table dates (
    id serial primary key,
    character varchar(100),
    pinyin varchar(200),
    english varchar(200)
);