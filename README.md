# expo-django-mysql-template

## expo
1. **expoプロジェクトを作成する**
```shell
docker-compose run --rm expo expo init <project_name>
```
  => blank/blank(TypeScript)/tabs(TypeScript)/minimal からプロジェクトに合うものを選択する

2. **docker-compose.ymlのworking_dirのコメントアウトを外す**
```yml
# initした後に下記コメントアウトを外し、プロジェクト名をinitで指定したものに変更する
# working_dir: /expo/project_name
```

3. **依存関係をインストールする**
```shell
docker-compose run expo npx expo install react-native-web react-dom @expo/metro-runtime
```

4. **アプリの立ち上げ**
```shell
docker-compose up
# expoのみ立ち上げる場合は以下
docker-compose up expo
```

5. **ブラウザでアクセスする**
- localhost:8081に接続することで画面を見ることができる
- 立ち上げ後にブラウザにアクセスすると最初は表示までは時間がかかる 

## django-mysql
1. **.envファイルを作成する**
```
# .envファイルの内容の例
MYSQL_DATABASE=mydatabase
MYSQL_USER=myuser
MYSQL_PASSWORD=mypassword
MYSQL_ROOT_PASSWORD=some_root_password
DB_HOST=db
SECRET_KEY=mysecretkey
```

2. **プロジェクトを作成する**  
```shell
docker-compose run --rm web django-admin startproject <project_name> .
```

3. **アプリ（機能）を作成する**  
```shell
docker-compose run --rm web python manage.py startapp <app_name>
```

4. **settings.pyでDBの設定をする**
```python
# from pathlib import Pathの次の行に追加
import os

# sqliteの設定を上書きする
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.getenv('DB_NAME'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST', 'db'),
        'PORT': os.getenv('DB_PORT', '3306'),
    }
}
```

5. **アプリを起動する**  
```shell
./start-services.sh

# ここでブラウザで見れるか確認する
# コンテナ削除する場合、volumeも削除すること
```

6. **マイグレーション**
```shell

# docker(web)の中に入る
docker exec -it <コンテナ名> bash

# マイグレーションファイルの作成
python manage.py makemigrations

# マイグレーションの実行
python manage.py migrate
```

### 備考
- `docker-compose up`だとdepends_onで指定されていてもdbよりwebが先に立ち上がってしまいエラーが出るため、dbの起動を確認した後にwebを起動する`start-services.sh`スクリプトを利用する
- 必要に応じてSECRET_KEYを.envに追加し、settings.pyで設定をする
- requirements.txtにインストールする記載があるが、REST Frameworkを使用する場合はsettings.pyにも以下の設定を追加する
```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```
