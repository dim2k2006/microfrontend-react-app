install: install-deps

develop-shell:
	npx nx run shell:serve

develop-user-form:
	npx nx run user-form:serve

develop-users-list:
	npx nx run users-list:serve

install-deps:
	npm install

test:
	npx nx run-many --target=test --all -- --passWithNoTests

lint:
	npx nx run-many --target=lint --all

prettier:
	npx nx run-many --target=prettier --all

ts-check:
	npx nx run-many --target=tsCheck --all

.PHONY: test
