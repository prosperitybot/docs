# Whitelabel bots

Whitelabel lets premium users run Prosperity under their own bot: their own name, avatar, and Discord application, backed by the same levelling engine. Members see your brand, not Prosperity.

This is a premium feature. The `/whitelabel` command only works for users whose account is marked as premium.

## Before you start

You need a Discord application of your own. In the [Discord Developer Portal](https://discord.com/developers/applications):

1. Create a new application, or open an existing one.
2. Add a bot to it and copy the **bot token**.
3. From the application's **General Information** page, copy the **Public Key**.

Keep both to hand. The token is a secret: treat it like a password and do not share it.

::: warning Administrator required
`/whitelabel` requires the **Administrator** permission in the server where you run it, in addition to a premium account.
:::

## 1. Run setup

In a server where your account has Administrator, run:

```
/whitelabel setup token:<your bot token> public_key:<your public key>
```

Prosperity validates the token, registers your bot, and replies with an **interactions endpoint URL**. It looks like:

```
https://<worker host>/interactions/<your bot id>
```

## 2. Set the interactions endpoint in Discord

Back in the Developer Portal, on your application's **General Information** page, paste that URL into the **Interactions Endpoint URL** field and save. The reply from setup links you straight to the right page.

Discord sends a verification request when you save. If the URL is correct and the bot is running, Discord accepts it and your bot can start receiving commands.

::: tip Re-running setup
If you run setup again for a bot you already have, Prosperity recreates it with the new token and public key. Use this if you regenerate your token or move to a different application.
:::

## 3. Invite your bot and register commands

Invite your own bot to your server with the same permissions Prosperity needs: reading and sending messages, and managing roles. See [Required permissions](/reference/permissions).

Prosperity registers the full command set against your bot automatically, so `/level`, `/leaderboard`, `/settings`, and the rest are all available under your brand.

## Managing a running bot

Use the actions menu to control your bot's session:

```
/whitelabel actions
```

Pick your bot from the first dropdown, then choose an action:

| Action | What it does |
| --- | --- |
| Start | Brings the bot online and connects it to Discord |
| Stop | Takes the bot offline and closes its connection |
| Restart | Stops the bot and starts it again |
| Delete | Stops the bot and removes it from management |

Actions are picked up within a few seconds. There is no need to run anything on your side.

## How it works behind the scenes

Your bot runs on Prosperity's infrastructure. When you choose an action, it is queued and the events service applies it on its next poll, which runs every five seconds. Slash commands and message interactions for your bot are delivered to the same worker that powers Prosperity, routed by your bot's application ID.

Your bot shares the levelling engine but not the data: XP, levels, and settings are tracked per server, so your community's progress is entirely its own.

## Verification and intents

Once your bot passes 10,000 servers, Discord requires you to verify the application and justify the Server Members intent. The [Intents request guide](/guide/whitelabel-intents) gives the questions Discord asks and suggested answers for a Prosperity whitelabel bot.

## Related

- [`/whitelabel` command reference](/commands/whitelabel) for exact options.
- [Intents request guide](/guide/whitelabel-intents) for Discord verification.
- [Required permissions](/reference/permissions).
