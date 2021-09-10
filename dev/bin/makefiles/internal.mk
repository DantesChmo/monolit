BIN = node_modules/.bin

.PHONY: run-test
run-test:
	$(BIN)/jest --coverage

.PHONY: watch-app
watch-app: sleep migrate
	$(BIN)/nodemon \
		-e ts \
 		--watch ./src \
 		--exec "$(BIN)/ts-node ./src/index.ts"

.PHONY: sleep
sleep:
	sleep 10

.PHONY: migrate
migrate:
	$(BIN)/sequelize-cli db:migrate
