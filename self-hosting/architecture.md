# Architecture

This page is for operators running Prosperity. It describes how the system fits together. Most server admins do not need it.

Prosperity is two Go services and a shared library, both talking to one MySQL database.

## The two services

### worker

The `worker` is an HTTP service built on Echo. It receives Discord **interaction webhooks**: slash commands and message components. Discord posts them to a single endpoint, the worker verifies each request, routes it to the right command or component handler, and replies.

- Listens on port **3000**.
- `POST /interactions/:bot_id` handles all interactions. Every request is verified with Ed25519 signature checking against the application's public key before it is processed. The `:bot_id` distinguishes the main bot from whitelabel bots.
- `GET /health` is a health check that also confirms the database is reachable.

Because interactions arrive as webhooks, the worker is stateless and horizontally scalable.

### events

The `events` service is the gateway half. It holds persistent WebSocket connections to Discord and handles gateway events:

- **message create**: awards XP and handles level-ups.
- **guild create, delete, update**: registers, deactivates, and renames servers.
- **guild member add**: records new members so their levelling profile is ready.

It also owns the lifecycle of whitelabel bot sessions.

### common

`common` is a shared Go module imported by both services. It holds the database models, the logger, shared utilities, and the XP formula (`GetXPRequired`, with a maximum level of 1000).

## How the two services coordinate

Both services use the same MySQL database, and the database is how they coordinate. The clearest example is whitelabel: the worker's `/whitelabel` command writes a requested action (start, stop, restart, delete) into the `whitelabel_bots` table. The events service polls that table every **five seconds** and opens or closes gateway sessions to match.

## Data model

The main tables are:

- `guilds`: per-server settings.
- `users`: Discord users seen by the bot.
- `guild_users`: a user's XP, level, and message count within a server.
- `level_roles`: roles granted at a level.
- `ignored_channels`, `ignored_roles`: exclusions.
- `message_logs`: a record of XP gained per message. It holds the member, server, XP amount, and timestamps. It does not hold message text.
- `whitelabel_bots`: credentials and state for premium branded bots.

See [Intents and data](/reference/intents-and-data) for what each field is used for.
