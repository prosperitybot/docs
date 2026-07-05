# Deployment

This page is for operators. It covers the environment each service needs and how they are built. It assumes you have a MySQL database and a Discord application already.

## Environment variables

Both services read configuration from environment variables, loaded from a `.env` file if present.

### Database (both services)

| Variable | Description |
| --- | --- |
| `DB_USER` | MySQL user. |
| `DB_PASSWORD` | MySQL password. |
| `DB_HOST` | MySQL host. |
| `DB_PORT` | MySQL port. |
| `DB_NAME` | Database name. |

The connection uses `parseTime=true` so timestamps map to Go time values.

### Discord (both services)

| Variable | Description |
| --- | --- |
| `BOT_TOKEN` | The main bot's token. |
| `DISCORD_APPLICATION_ID` | The main application's ID, used to register commands. |
| `DISCORD_PUBLIC_KEY` | The public key used to verify interaction requests. |

### Worker

| Variable | Description |
| --- | --- |
| `WORKER_BASE_URL` | The public host of the worker, used to build the interactions endpoint URL given to whitelabel bots. |

### Behaviour

| Variable | Description |
| --- | --- |
| `ENV` | `prod` enables whitelabel loading and the five-second action poll, and registers commands globally. `dev` registers commands to a single guild. |
| `DEVGUILD_ID` | The guild to register commands against when running in `dev`. |

## Ports

- The worker listens on **3000**. Discord must be able to reach `POST /interactions/:bot_id` over HTTPS, so put it behind a TLS-terminating proxy.
- The events service holds outbound WebSocket connections to Discord and does not expose a port.

## Building

Each service is a Go binary and ships with a Dockerfile.

- Worker: `go build -o worker ./cmd/worker`, or build the worker Dockerfile. The CI pipeline builds, vets, tests, scans the image, and publishes to `ghcr.io/prosperitybot/worker`.
- Events: `go build -o events ./cmd/events`, or build its Dockerfile. It is a long-running process.

::: warning Go version mismatch
The Dockerfiles pin Go 1.19, while the `go.mod` files declare newer versions (1.22 for the worker, 1.25 for common and events). Align these before building, or a build using the pinned toolchain will fail on newer language or standard-library features. Confirm the intended Go version with the maintainers.
:::

## Database schema

The services expect their tables to already exist. There are no migration files in the repository, so the schema is managed outside it. Create the tables listed in [Architecture](/self-hosting/architecture) before first run, and confirm the exact column definitions against the models in `common/model`.
