# 使用官方 Node.js 作為基礎映像
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 與 package-lock.json 到工作目錄
COPY package*.json ./

# 安裝相依套件
RUN npm install

# 複製所有檔案到工作目錄
COPY . .

# 開放 3000 port
EXPOSE 3000

# 安裝 nestjs cli 與 nodemon
RUN npm install -g @nestjs/cli nodemon

# 啟動 NestJS 伺服器
CMD ["nodemon", "--watch", "src", "--exec", "npm run start:dev"]