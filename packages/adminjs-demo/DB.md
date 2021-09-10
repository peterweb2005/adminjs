#

##

```
CREATE SCHEMA `adminjs-demo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

ALTER USER 'adminjs-demo'@'%' IDENTIFIED WITH mysql_native_password BY 'p@ssw0rd';

GRANT ALL PRIVILEGES ON `adminjs-demo`.* TO 'adminjs-demo'@'%' WITH GRANT OPTION;
```
