create table users
(
    username VARCHAR(50),
    password varchar(50),
    fullnames varchar(254),
    status BOOLEAN
);


--insert into users(username, password, fullnames, status) values('marco.garcia', 'abc123', 'Marco Antonio Garcia Leon', true);
insert into users values('marco.garcia', 'abc123', 'Marco Antonio Garcia Leon', true);

-------------
select * from users