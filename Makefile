# === Makefile Helper ===

# Styles
YELLOW=$(shell echo "\033[00;33m")
RED=$(shell echo "\033[00;31m")
RESTORE=$(shell echo "\033[0m")

# Variables
PHP_BIN := php
COMPOSER := composer
CURRENT_DIR := $(shell pwd)
.DEFAULT_GOAL := list

.PHONY: list
list:
	@echo "******************************"
	@echo "${YELLOW}Available targets${RESTORE}:"
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf " ${YELLOW}%-15s${RESTORE} > %s\n", $$1, $$2}'
	@echo "${RED}==============================${RESTORE}"

.PHONY: codeclean
codeclean: ## Coding Standard checks
	$(PHP_BIN) ./vendor/bin/php-cs-fixer fix --config=.cs/.php_cs.php --allow-risky=yes
	$(PHP_BIN) ./vendor/bin/phpcs --standard=.cs/cs_ruleset.xml --extensions=php bundle
	$(PHP_BIN) ./vendor/bin/phpcs --standard=.cs/cs_ruleset.xml --extensions=php lib
	$(PHP_BIN) ./vendor/bin/phpmd bundle text .cs/md_ruleset.xml
	$(PHP_BIN) ./vendor/bin/phpmd lib text .cs/md_ruleset.xml
	$(PHP_BIN) ./vendor/bin/phpcs --standard=.cs/cs_ruleset.xml --extensions=php tests
	$(PHP_BIN) ./vendor/bin/phpmd tests text .cs/md_ruleset.xml


.PHONY: install
install: ## Install vendors
	$(COMPOSER) install

.PHONY: clean
clean: ## Removes the vendors, and caches
	rm -f .php_cs.cache
	rm -rf vendor
	rm -f composer.lock
