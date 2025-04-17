FROM node:18

# Создание рабочей директории
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем всё остальное
COPY . .

# Открываем порт
EXPOSE 3000

# Старт приложения
CMD ["npm", "start"]
