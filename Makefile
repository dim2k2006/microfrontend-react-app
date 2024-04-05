install: install-deps

develop-shell:
	npx nx run shell:serve

build-shell:
  npx nx run shell:build

develop-user-form:
	npx nx run user-form:serve

build-user-form:
  npx nx run user-form:build

develop-users-list:
	npx nx run users-list:serve

build-users-list:
  npx nx run users-list:build

install-deps:
	npm install

lint:
	npx nx run-many --target=lint --all

prettier:
	npx nx run-many --target=prettier --all

ts-check:
	npx nx run-many --target=tsCheck --all

test:
	npx nx run-many --target=test --all -- --passWithNoTests

.PHONY: test
