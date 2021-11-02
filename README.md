# A really vulnerable app
Application created for showcasing SQL injection on my presentation. Written using NodeJS with Express and EJS for page rendering. As a DB, I chose PostgreSQL


# How to setup

Firstly, set up local Postgres database and create `.env` file, with following properties

```
HOST={host_url}
DB={db_name}
PASSWORD={db_password}
PORT={host_port}
USER={db_user}
```
Then, run following command in the project folder
```
npm i --save
```

# How to run

Just run `node app.js` and exploit :)