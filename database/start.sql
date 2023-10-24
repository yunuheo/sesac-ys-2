
show databases;

use sesac_test;

create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 테이블을 조회하는 명령어(db가 선택이 되어있어야함!) 
show tables;

select * from user;

-- 컬럼을 추가하는 명령어
alter table user add gender enum('여자','남자');
-- 컬럼을 삭제하는 명령어 
alter table user drop column age;

-- 컬럼을 수정하는 명령어
alter table user modify gender varchar(2) not null;
-- 테이블을 삭제하는 명령어
drop table user;

-- 실습!!!!!!!!!!!!
create table user2(
	id varchar(20) primary key not null,
    name varchar(5) not null,
    age int ,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

-- select 문(데이터 조회)
-- select [속성...] form [테이블이름] [where [조건]]
-- user라는 테이블의 모든 값을 조회하겠다.
select * from user;
select id from user;
select * from user2;
desc user2;

alter table user2 modify id varchar(10);
alter table user2 drop column age;
alter table user2 add column interest varchar(100);

-- insert문 (데이터 추가)
insert into user (id, password,gender) values('yunu','1234','남자');
insert into user values('lily',2345,'여자');


-- 외래키 내용 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
CREATE TABLE customer
(
custid CHAR(10) NOT NULL PRIMARY KEY,
custname VARCHAR(10) NOT NULL,
addr CHAR(10) NOT NULL,
phone CHAR(11),
birth DATE
);

CREATE TABLE orders
(
orderid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
custid CHAR(10) NOT NULL,
prodname CHAR(6) NOT NULL,
price INT NOT NULL,
amount SMALLINT NOT NULL,
FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade
);

-- @@@@@@@@@@@@@@@@@@@@@@@@cutomer과 orders 테이블에 데이터 삽입!!!@@@@@@@@@@@@@@@@@@@@@@@@
INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);
-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@데이터 삽입@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

select * from customer;
-- custid 가 bunny인 회원
select * from orders where custid='bunny';
select * from customer where custid != 'bunny';
select * from customer where not custid = 'bunny';
-- 2000년 01월 01일 이후에 태어난 회원 조회
select * from customer where birth >= '2000-01-01';
-- 2000년01월01 ~ 2005-01월01 사이에 태어난 회원 조회
select * from customer where birth between '2000-01-01' and '2005-01-01';
-- addr가 대한민국 서울, 미국 로스엔젤레스 둘 중 하나라면 조회
select * from customer where addr in ('대한민국 서울', '미국 로스엔젤레스');
-- addr가 대힌민국을 포함한 회원 조회(like 이용)
select * from customer where addr like '%대한민국%';
select * from customer where custname like '__수';
select * from customer where custname like '%해_'; -- 끝에서 두번째가 '해' 찾아봄
-- is null 사용 예시
select * from customer where not custname is null;
-- AND, OR, NOT --
select * from customer where addr like '%대한민국%' AND birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' OR birth <= '2000-05-05';
select * from customer order by custname ASC;
select * from customer order by custname DESC;

-- addr에 대한민국을 포함하고 있는 회원 조회. custname 기준으로 내림차순 정렬
select * from customer
where addr like '%대한민국%'
order by custname desc;

select * from customer
where addr like '%대한민국%'
order by custname desc
limit 2; -- 정렬 된 것중에 n개만 보여줌!!

-- update문
update customer set custname = '강해란' where custid = 'bunny';
-- delete문
-- 오류발생. 이유? 삭제하려 하는 데이터를 외래키로 사용하는 데이터가 있기 때문에(참조무결성제약조건 위배)
-- delete from customer where custid = 'wow123';

create table user3(
	id varchar(10) primary key not null,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F','M','') default '',
    birthday DATE not null,
    age int(3) not null default 0
);

select * from user3;

insert into user3 values('hong1234', '8o4bkg', '홍길동','M', '1990-01-31', 33 );
insert into user3 values('sexysung', '87awjkdf', '성춘향','F', '1992-03-31', 31 );
insert into user3 values('power70', 'qxur8sda', '변사또','M', '1970-05-02', 53 );
insert into user3 values('hanzo', 'jk48fn4', '한조','M', '1984-10-18', 39 );
insert into user3 values('widowmaker', '38ewifh3', '위도우','F', '1976-06-27', 47 );
insert into user3 values('dvadva', 'k3f3ah', '송하나','F', '2001-06-03', 22 );
insert into user3 values('jungkrat', '4ifha7f', '정크랫','M', '1999-11-11', 24 );

select * from user3 order by birthday asc;
select * from user3  where gender = 'M' order by name desc;
select id, name from user3 where birthday between '1990-01-01' and '1999-01-01';
select * from user3 where birthday like('%-06-%') order by birthday asc;
select * from user3 where gender = 'M' and birthday between '1970-01-01' and '1979-01-01';
select * from user3 order by age desc limit 3;
select * from user3 where age between 25 and 50;
update user3 set pw = '12345678' where id = 'hong1234';
delete from user3 where id = 'jungkrat';

select addr from customer;
select distinct addr from customer;

select * from orders;
select count(*) as 'total_orders' from orders;

-- orders 테이블에 존재하는 주문 개수 
select count(*) from orders;
-- 사람별 주문 건수
-- select에서 group by를 쓸 때, group by 뒤에 쓴 속성과 집계함수로 새로만든 속성만 쓰도록 하는게 좋음!
select custid, count(*) as 'count' from orders group by custid;
-- 사람별로 구매한 상품의 개수
select * from orders; 
select custid, sum(amount) as 'total_amount' from orders group by custid;
-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회
-- group by에 의해 생겨난 속성은 having 절로 조건을 줄 수 있음!
select custid, sum(amount) as 'total_amount' from orders where custid != 'bunny' group by custid having sum(amount) >= 5;

-- 사람별로 결제한 금액
select custid, sum(amount*price) as 'total_amount' from orders group by custid;
-- customer, orders을 innter join > 주문별로 배송지를 알고 싶어서
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid; 








