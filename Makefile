FRONTEND_CONTAINER_NAME = ace-books-frontend-app-1

frontend-docker-exec:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) $(filter-out $@,$(MAKECMDGOALS))

frontend-pnpm-install:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) pnpm install

frontend-pnpm-add:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) pnpm add $(filter-out $@,$(MAKECMDGOALS))

frontend-pnpm-remove:
	@docker exec -it $(FRONTEND_CONTAINER_NAME) pnpm remove $(filter-out $@,$(MAKECMDGOALS))
