# Reddit Boilerplate

All credit to Ben Awad for [this](https://www.youtube.com/watch?v=I6ypD7qv3Z8) incredible 14hr tutorial on youtube!

A reddit clone, not to directly match reddit, but a boilerplate for future projects. I absolutely love this tech and it is such a blast to play with!

Tech:

- React
- Chakra
- Next.js
- TypeScript
- GraphQL
- TypeGraphQL
- URQL/Apollo (Middle of switching)
- Node.js
- PostgreSQL
- TypeORM
- Redis
- Docker
- DigitalOcean & VPS

Frontend on Vercel (to remove load on VPS & scale independently), backend on DigitalOcean & VPS. Dokku managing the entire app. Nginx sitting on front - proxying requests to NodeJS(GraphQL, TypeORM) server. PostgreSQL DB sitting in a Docker container with a Redis container right next to it for sessions.
