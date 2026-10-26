# Planwise — AI-Assisted Lesson Planner and Parent Communication Portal

A GraphQL-first lesson planning and family communication demo. The React client uses Apollo Client with an in-memory cache; the Express API exposes GraphQL queries and mutations; PostgreSQL schema and Docker Compose are included.

## Run locally

1. Install Node.js 20+ and Docker Desktop.
2. Run `npm install` in this folder.
3. Copy `.env.example` to `.env`.
4. Start the database with `docker compose up -d db`.
5. In one terminal run `npm run server`; in another run `npm run client`.
6. Open http://localhost:5173. GraphQL endpoint: http://localhost:4000/graphql.

For a quick UI preview, the API includes fallback sample data if PostgreSQL is unavailable. In fallback mode, create/update operations are not persisted. Parent messages are stored as records and are not actually emailed. This demo does not call an AI model; “AI-assisted” is the product concept, and any generated lesson content should be integrated with an explicitly configured provider and teacher review.

## Useful GraphQL operations

```graphql
query Dashboard { dashboardSummary { totalLessons readyLessons totalMessages unreadMessages } }
query Lessons { lessons { id title subject gradeLevel scheduledDate status objectives } }
mutation AddLesson($input: LessonInput!) { createLesson(input: $input) { id title status } }
```

## Structure

- `server/typeDefs.js` — GraphQL schema.
- `server/resolvers.js` — SQL-backed resolvers with demo fallback.
- `server/db.js` — PostgreSQL connection pool.
- `server/schema.sql` — tables and indexes.
- `server/validation.js` — input validation helpers.
- `client/src/App.jsx` — lesson planner, parent messages, and forms.
- `client/src/main.jsx` — Apollo Client setup and cache policies.
