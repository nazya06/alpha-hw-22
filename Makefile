# npm init -y
# npm install express mongoose
# npm install dotenv
# npm install swagger-ui-express

# docker-compose up --build

# Через VS Code:
# - Установи расширение REST Client (Huachao Mao).
# - Открой файл request.http и просто нажимай кнопку "Send Request" над каждым блоком.

# Или запускай вручную в терминале как curl-запросы.

# в MongoDB (и с Mongoose) не нужно заранее создавать сущности (таблицы), 
# как в PostgreSQL. Всё создаётся "на лету"


ENV_FILE=.env
COMPOSE_FILE=deployments/docker-compose.yml

install:
	npm install
	npm install express mongoose
	npm install swagger-ui-express
	npm install dotenv

# Локальный запуск
start:
	node app.js

# Docker билд и запуск
docker-up:
	docker-compose -f $(COMPOSE_FILE) up --build

# Остановка Docker
docker-down:
	docker-compose -f $(COMPOSE_FILE) down

# Удаление контейнеров и томов
docker-clean:
	docker-compose -f $(COMPOSE_FILE) down -v --remove-orphans

# Перезапуск
docker-restart: docker-down docker-up


# ❓ Help
help:
	@echo "  Доступные команды:"
	@echo "  install         - Установить зависимости"
	@echo "  start           - Запуск локально (Node.js)"
	@echo "  docker-up       - Запуск проекта в Docker"
	@echo "  docker-down     - Остановить Docker-контейнеры"
	@echo "  docker-clean    - Удалить контейнеры и тома"
	@echo "  docker-restart  - Перезапуск в Docker"

