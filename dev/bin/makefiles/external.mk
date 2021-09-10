DOCKER_COMPOSE = docker-compose -f ./dev/docker-compose.yml
EXEC_APP = docker exec app
BIN = node_modules/.bin

.PHONY: bootstrap
bootstrap: get-permissions bootstrap-deps bootstrap-images

.PHONY: bootstrap-deps
bootstrap-deps:
	yarn install

.PHONY: bootstrap-images
bootstrap-images:
	$(DOCKER_COMPOSE) build

.PHONY: up
up:
	$(DOCKER_COMPOSE) up -d --no-recreate --remove-orphans

.PHONY: down
down:
	$(DOCKER_COMPOSE) down --rmi local

.PHONY: log
log:
	$(DOCKER_COMPOSE) logs -f $(_ARGS)

.PHONY: start
start: up

.PHONY: stop
stop: down

.PHONY: restart
restart: down up

.PHONY: test
test:
	$(EXEC_APP) make run-test

.PHONY: build
build:
	$(BIN)/tsc

.PHONY: clean
clean: down
	rm -rf ./node_modules && rm -rf ./out

.PHONY: create-migration
create-migration:
	$(BIN)/sequelize-cli create:migration
