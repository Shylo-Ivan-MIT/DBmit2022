CREATE USER default_user WITH PASSWORD 'admin';
GRANT ALL ON DATABASE "MyFirstDB" TO default_user;
CREATE USER guest_user WITH PASSWORD '1111';
GRANT connect ON DATABASE "MyFirstDB" TO guest_user;