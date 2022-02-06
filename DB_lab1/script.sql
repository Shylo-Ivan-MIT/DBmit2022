create table Teams (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	team_name VARCHAR(100) NOT NULL,
	country VARCHAR(50) NOT NULL
);

create table Part_s (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	full_name VARCHAR(50) NOT NULL,
	age INT NOT NULL,
	gender VARCHAR(50) NOT NULL,
    team_id BIGINT REFERENCES Teams (id)
);