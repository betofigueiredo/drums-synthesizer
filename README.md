# drums-synthesizer

![image](https://github.com/betofigueiredo/drums-synthesizer/assets/7251116/f5226e1e-2f29-4f20-87da-ee7ec948e56f)

#### Start de application

`docker compose up`

#### Run de migrations (only first time)

`docker compose exec drums_api alembic upgrade head`

#### Seed first kit

`./api/seed.sql`

#### Access

http://localhost:5050
