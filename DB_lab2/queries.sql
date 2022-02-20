-- Лабораторна робота № 2
-- З дисципліни Бази даних та інформаційні системи
-- Студента групи МІТ-31 Шило Івана Костянтиновича

-- 1) select all
Select * from organizations;
-- 2)select names of Championships from table champions and describe as Championships
Select name as Championships from champions; 
-- 3)select full name and age
Select full_name, age from participants;
-- 4)select all female participants
Select * from participants where gender = 'F';
-- 5)show all names but in uppercase
Select upper(name) from champions;
-- 6)same? but in lowercase
Select lower(name) from champions;
-- 7)it should display organizations that with country that mentioned only once
Select distinct(international) from organizations;
-- 8)select team and its country in format  
Select team_name + 'from' + country as "Team from Country" from teams;
-- 9)select full_name with "Hello"  
Select 'Hello ' + full_name from participants;
-- 10)name of participant contains d
Select * from participants where full_name like '%d%';
-- 11)starts on A
Select * from participants where full_name like 'A%';
-- 12)ends on a
Select * from participants where full_name like '%a';
-- 13)ends on 'on' or starts on 'Ar'
Select full_name from participants where full_name like '%on' or full_name like 'Ar%';
-- 14)get all details from the sponsors table, order by amount of donation Ascending
Select * from sponsors order by donation asc;
-- 15)order by Descending
Select * from sponsors order by donation desc;
-- 16)get all details from the sponsors table, id Ascending, donation Descending
Select * from sponsors order by id asc, donation desc;
-- 17) select with <
Select * from sponsors where donation < 10500;
-- 18) select with >
Select * from sponsors where donation > 10500;
-- 19) get full_name after removing spaces from right side
Select * from sponsors where donation between 10500 and 19000;
-- 20) get full_name after removing spaces from right side
Select RTRIM(full_name) from participants;
-- 21)remove spaces from left
Select LTRIM(full_name) from participants;
-- 22)get lenght of full name
Select len(full_name) from participants;
-- 23)get names with replaced 's' with '$'
Select replace(full_name, 's','$') from participants;
-- 24)get all details of sports (table "champions"), name starts with 'S' and contain 5 latters (4 lower spaces)
-- Skies
Select * from champions where name like "S____";
-- 25)Skies, Tenis, Chess
Select * from champions where name like "____s";
-- 26)get participants whose name starts not on latters between a to p
Select * from participants where full_name like '[^a-p]%';
-- 27)after 2019-03
Select * from champions where year > '2019';
-- 28)before 
Select * from champions where year < '2019'; 
-- 29)db date
Select getdate();
-- 30)UTC-date
Select getutcdate();
-- not shure if it would work? but i will not change
-- 31)select only month part of date ("year")
Select Datepart(MONTH, year) from champions;
-- 32)select only year part of date ("year")
Select Datepart(YEAR, year) from champions;
-- 33)select with date between 
Select * from champions where year between '2020-01' and '2020-10';
-- 34) select top n-th 
Select top 1 * from sponsors;
-- 35) select top 1 donation from sponsors 
Select top 1 donation from sponsors;
-- 36) select 2econd highest donation from sponsors
Select top 1 donation from (select top 2 from sponsors order by donation desc) top order by donation asc;  
-- 37) select top 2 donation
Select top 2 * from sponsors order by donation desc; 
-- 38) select top highest donations
Select Max(donation) from (select top 6 * from sponsors) A; 
-- 39) select min donations
Select Min(donation) from (select top 6 * from sponsors) A;
-- 40) count sponsors
Select count(*) from sponsors;
-- 41) count sponsors whose name starts on M
Select count(*) from sponsors where name like "M%";
-- 42) count sponsors whose name consist of 10 simbols
Select count(*) from sponsors where name like "__________";
-- 43) show first 5 participants
Select * from participants limit 5;
-- 44) 10% of participants
Select top .10 from participants;
-- 45) all orgs that are private
Select * from organizations where type="private";
-- 46) boolean false
Select * from sponsors where private="false";
-- 47) boolean true and limit 5
Select * from sponsors where private="true" limit 5;
-- 48) average
Select avg(donation) from sponsors;
-- 49) suma
Select sum(donation) from sponsors;
-- 50) --combined queries 
Select sum(donation) + avg(donation) from sponsors;
-- 51) --combined queries 
Select top 3 * from sponsors where private="true";
-- 52) --combined queries 
Select * from teams where country between Brazil and Brazil;
-- 53) --combined queries 
Select * from teams where country before Brazil and id not 1;
-- 54) --combined queries  India
Select * from teams where country like 'I%' and 'I____';
-- 55) random record from table
Select top 1 * from participants order by NEWID();
-- 56) clone a table without Create, will be created in same database
Select Top 6 * INTO teams_clone from teams;
-- 57) ger names of participants sorted by lenght 
Select full_name, lenght(full_name) len from participants order by len desc;
-- 58) just for demonstration purposes - there none tables with null
-- sort by number with null-values after others
Select id from participants order by id NULLS LAST;
-- 59) sort by number with null-values before every other
Select id from participants order by id NULLS first;
-- 60) sort from higher to lower values, nulls after lowest
Select id from participants order by id desc NULLS last;
-- 61) from lowest values to highest, nulls before
Select id from participants order by id asc NULLS first;
--  operators for WHERE - already used not numbered
-- 00) "=" equals
-- 66) "!=" "<>" not equals
-- 00) ">" greater than 
-- 00) "<" less than
-- 62) ">=" graater or equal
-- 63) "<=" less or equal
-- 00) AND
-- 00) OR
-- 64) "IN" Return true if a value matches any value in a list
-- 00) BETWEEN	Return true if a value is between a range of values
-- 00) IS NULL	Return true if a value is NULL 
-- 65) NOT	Negate the result of other operators
-- 67) select by conditions and order but get only the first row, "first" = "1"
Select full_name, team_id from participants order by age fetch first row only;
-- 68) but with a number of rows? first five rows
Select full_name, team_id from participants order by age fetch first 5 row only;
-- 67) pass the first five, show next five
Select full_name, team_id from participants order by age offset 5 rows fetch first row only;
--
--

--
--
