FROM node:20

RUN npm install -g expo-cli

# expo init後にプロジェクト名を指定したWORKDIRのコメントアウトを外す
WORKDIR /expo
# WORKDIR /expo/project_name

CMD ["yarn", "start"]

