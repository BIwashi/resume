.DEFAULT_GOAL := help


##### SETUP #####
.PHONY: setup
setup: ## Setup project ## make setup
	pnpm install

##### LINT #####
.PHONY: lint
lint:
	pnpm lint --fix

##### BUILD PDF #####
.PHONY: build/pdf
build/pdf: ## Build PDF ## make build/pdf
	pnpm build:pdf

##### HELP #####

.PHONY: help
help: ## Display this help screen ## make or make help
	@echo ""
	@echo "Usage: make SUB_COMMAND argument_name=argument_value"
	@echo ""
	@echo "Command list:"
	@echo ""
	@printf "\033[36m%-30s\033[0m %-50s %s\n" "[Sub command]" "[Description]" "[Example]"
	@grep -E '^[/a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | perl -pe 's%^([/a-zA-Z_-]+):.*?(##)%$$1 $$2%' | awk -F " *?## *?" '{printf "\033[36m%-30s\033[0m %-50s %s\n", $$1, $$2, $$3}'
