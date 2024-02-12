# バージョンを適宜変更
FROM python:3.8

WORKDIR /app

COPY . /app

RUN apt-get update && apt-get install -y default-libmysqlclient-dev gcc

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
