# NestJS Template
> A production ready NestJS template with Domain Driven Design architecture and CQRS & predefined configurations

# Features
- [Environment configuration](#environment-configuration)
- [Built in exception filter](#built-in-exception-filter)
- [Base RestAPI response](#base-universial-restapi-response-with-openapi-support)
- [SQL database connection](#sql-database-connection-with-typeorm)
- [Commithook & commitlint](#commithook--commitlint)
- [Error handling](#error-handling)
- [Database migration](#database-migration)
- [Body compression](#body-compression)

## Environment configuration
## Built-in exception filter
## Base universial RestAPI response with OpenAPI support
## SQL Database connection with TypeORM
## Commithook & commitlint
## Error handling
## Database migration

```sh
yarn run typeorm:migration:generate ./src/migrations/MigrationChanges # Generate migration file

yarn run typeorm:migration:run # Run pending migrations files

yarn run typeorm:migration:revert # Revert migration 1 step back
```

# TODO items
- [x] Database migration
- [x] Business Error handling
- [ ] Sample CRUD
- [ ] CI/CD pipeline
- [ ] CQRS
- [ ] Domain Driven architecture
- [ ] BaseModule, BaseCRUD
- [ ] Pagination
- [ ] Locking mechanism
- [ ] Feature flag
- [ ] HttpServices
- [ ] Auth
- [ ] Logging, Tracing & Monitoring
- [ ] Deployment
- [ ] Microservices
- [ ] Caching
- [ ] MessageQueue
- [ ] GraphQL
- [ ] Monorepo
- [ ] CMS Integration
- [ ] High-level application architecture