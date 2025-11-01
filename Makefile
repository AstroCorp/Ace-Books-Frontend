FRONTEND_CONTAINER_NAME = ace-books-frontend-app-1

frontend-docker-exec:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) $(filter-out $@,$(MAKECMDGOALS))

frontend-yarn-install:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) yarn install

frontend-yarn-add:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) yarn add $(filter-out $@,$(MAKECMDGOALS))

frontend-yarn-remove:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) yarn remove $(filter-out $@,$(MAKECMDGOALS))
