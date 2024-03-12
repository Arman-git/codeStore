#Используем образ линукс Alpine с версией node 14
FROM node:20.10.0-alpine

#Указываем нашу рабучую директорию
WORKDIR /app

#Скопировать package.json и package-lock.json внутрь контейнера
COPY package*.json ./

#Устанавливаем зависимости
RUN npm install
                   

#Копируем оставшееся приложение в контейнер 
COPY . .

#Установить Prisma
RUN npm install -g prisma 

#Генерируем Prisma Client
RUN prisma generate

#Копируем Prisma schema
COPY prisma/schema.prisma ./prisma/

#Открыть порт в нашей контейнере
EXPOSE 3000

#Запускаем наш сервер
CMD ["npm", "start"]


