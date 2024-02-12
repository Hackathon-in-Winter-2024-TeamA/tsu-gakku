#!/bin/bash

# .env ファイルから環境変数を読み込む
export $(egrep -v '^#' .env | xargs)

docker-compose up -d db

# MySQLが起動してポートが開くまで待機
echo "Waiting for MySQL to start..."
while ! docker-compose exec db mysqladmin --user=root --password=${MYSQL_ROOT_PASSWORD} --host "127.0.0.1" ping --silent &> /dev/null ; do
    echo -n "."
    sleep 1
done
echo "MySQL is up and running!"

docker-compose up -d web

