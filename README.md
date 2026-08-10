# Task Manager — TypeORM

The Week 6 Task Manager schema and queries, rebuilt in TypeORM against
PostgreSQL.

## Setup

```bash
npm install
```

Copy `.env.example` to `.env` and fill in your local Postgres credentials.

## Run

```bash
npx tsx src/index.ts
```

## Structure

src/
├── entities/ # User, Project, Task, Tag
├── migrations/ # generated, committed migrations
├── data-source.ts # TypeORM DataSource config
└── index.ts # connection sanity check


`synchronize` is always `false` — schema changes go through committed
migrations only, never auto-sync.