CREATE TABLE payments{

    customer_name varchar(123);
    processed_at date;
    amount int;
}

CREATE TABLE balances {
    username varchar(128);
    balance int;
}

CREATE TABLE large_table{
    random_int int;
}

INSERT INTO payments VALUE ('clement', '2019-12-15',10);
INSERT INTO payments VALUE ('antoine', '2020-01-01',100);
INSERT INTO payments VALUE ('clement', '2020-01-02',10);
INSERT INTO payments VALUE ('antoine', '2020-01-03',100);
INSERT INTO payments VALUE ('antoine', '2020-02-05',100);
INSERT INTO payments VALUE ('simon',   '2020-02-01',1000);
INSERT INTO payments VALUE ('antoine', '2020-02-03',100);
INSERT INTO payments VALUE ('clement', '2020-01-12',10);
INSERT INTO payments VALUE ('meghan',  '2020-01-13',80);
INSERT INTO payments VALUE ('meghan',  '2020-01-14',70);
INSERT INTO payments VALUE ('meghan',  '2019-12-11',90);
INSERT INTO payments VALUE ('alex',    '2020-02-01',10);
INSERT INTO payments VALUE ('clement', '2020-01-19',10);
INSERT INTO payments VALUE ('marli',   '2020-01-02',10);
INSERT INTO payments VALUE ('alex',    '2019-12-15',10);
INSERT INTO payments VALUE ('marli',   '2020-01-25',10);
INSERT INTO payments VALUE ('marli',   '2020-02-02',10);

INSERT INTO balances VALUE ('antoine', 0);
INSERT INTO balances VALUE ('clement', 1000);


INSERT INTO large_table VALUE (1);
SELECT round(random() * 1000000000)
FROM generate_series(1,50000000) s(i);