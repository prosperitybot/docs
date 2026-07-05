# Introduction

Prosperity is a levelling bot for Discord. It rewards members for taking part in your server: every message earns a small amount of XP, members level up as that XP builds, and you can grant roles automatically when they reach a level.

It is built for server owners who want light gamification without a heavy setup. There is no web dashboard to configure. Everything is managed with slash commands from inside Discord, and Prosperity keeps track of XP, levels, and roles in the background.

## The idea in one minute

- A member sends a message. If they are not on cooldown, they earn between 15 and 30 XP.
- XP accumulates. When it crosses the threshold for the next level, the member levels up.
- On level-up, Prosperity posts a message and can grant a role you have configured for that level.
- Members can check their standing with `/level`, and see the top members with `/leaderboard`.

You control the pace with a per-server XP multiplier and cooldown, and you can exclude specific channels or roles from earning XP.

## What you can configure

| Area | Command | What it controls |
| --- | --- | --- |
| Level roles | `/levelroles` | Which role is granted at which level |
| Role behaviour | `/settings roles` | Whether roles stack or swap on level-up |
| Notifications | `/settings notifications` | Where level-up messages are posted |
| XP rate | `/settings multiplier` | A multiplier applied to XP |
| Cooldown | `/settings delay` | The gap between XP-earning messages |
| Exclusions | `/ignored` | Channels and roles that earn no XP |

See the [command reference](/commands/) for the full list.

## Who runs Prosperity

Prosperity is operated by BH Cloud Labs Ltd. Premium users can run their own branded version of the bot, called a whitelabel bot, backed by the same infrastructure. See [Whitelabel bots](/guide/whitelabel) for how that works.

Ready to start? Head to [Add Prosperity to your server](/guide/getting-started).
