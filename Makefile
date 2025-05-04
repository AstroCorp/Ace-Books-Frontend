FRONTEND_CONTAINER_NAME = ace-books-frontend-app-1

frontend-docker-exec:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) $(cmd)

frontend-yarn-install:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) yarn install

frontend-yarn-add:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) yarn add $(packages)

frontend-yarn-remove:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) yarn remove $(packages)
