# Startup from Scratch DB

This is the database we use for the project. It is made using docker and you can run it with a single command.

## Steps to run

`docker-compose up` OR `docker-compose up -d` (if you want to background the service)

## Steps to connect to database
`psql -h localhost -p 5432 -d startup_from_scratch -U postgres`
