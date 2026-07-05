# Intents request guide

If your whitelabel bot grows past **10,000 servers**, Discord requires you to verify the application and justify any privileged intents it uses. This page walks through the questions Discord asks and gives suggested answers for a Prosperity whitelabel bot.

Whitelabel bots run on Prosperity's infrastructure and follow the same data practices, so most answers apply as written. Replace the documentation link with your own if you host separate docs for your bot.

::: info Which intent applies
Prosperity uses the **Server Members** intent (also called the Guild Members intent). It does not use the Message Content intent. See [Intents and data](/reference/intents-and-data) for the reasoning.
:::

## Application details

### What does your application do?

Discord asks for a detailed description, with links to images or video where possible.

```txt
This bot is a custom (white label) version of the Prosperity Bot.

Prosperity is a levelling bot for Discord. Members earn XP for taking part in a
server, level up over time, and are automatically granted roles at levels the
server configures.

Core features include:
- Message-based levelling: members earn XP for sending messages, subject to a
  per-server cooldown, and level up as their XP accumulates.
- Level roles: roles that are granted automatically when a member reaches a
  configured level, with a choice of stacking or swapping roles as members climb.
- Leaderboard: a per-server ranking of members by XP.
- Configurable XP: a per-server XP multiplier and cooldown so server owners can
  tune progression.
- Exclusions: server owners can exclude specific channels or roles from earning XP.
- Level-up notifications: a configurable channel and type for level-up messages.
- Whitelabel branding: premium users can run the bot under their own name and
  application.

The bot reacts to the fact that a member sent a message; it does not read or
store message content.

Full documentation with screenshots is available at https://docs.prosperitybot.net
```

### Do you have a public Privacy Policy?

```txt
Yes
```

**Where is it available?**

```txt
The Privacy Policy is publicly available on the Prosperity Bot GitHub.
```

**Link to your Privacy Policy:**

```txt
https://github.com/prosperitybot/legal/blob/main/PRIVACY.md
```

## Privileged gateway intents

**Which intents are you applying for?**

- Server Members intent

## Server Members intent

### Why do you need the Guild Members intent?

```txt
The bot requires the Server Members intent to operate its core functionality:

1. Resolving member roles to enforce ignored-role rules. Before awarding XP for a
   message, the bot checks the author's roles against a server-defined ignore list
   and skips members who hold an ignored role.
2. Assigning and removing level roles on level-up. When a member reaches a
   configured level, the bot grants the matching role and, in single-role mode,
   removes the previous level role. This requires knowing the member's current roles.
3. Enforcing command permissions. Administrative commands are gated on Manage
   Server or Administrator, which is checked against the member running the command.
4. Recording members when they join, so a member's levelling profile is ready from
   their first message.

The bot does not use the Message Content intent and does not read or store message
content. It only needs to know that a member was active, not what they wrote.

Without this intent, the bot cannot resolve member roles & permissions, which are
fundamental to every operation.
```

### Screenshots or videos demonstrating your use case

```txt
Full documentation with screenshots demonstrating these features is available at:

- How levelling works: https://docs.prosperitybot.net/guide/how-levelling-works
- Level roles: https://docs.prosperitybot.net/guide/levels-and-roles
- Ignoring channels and roles: https://docs.prosperitybot.net/guide/ignoring-channels-roles
- Command reference: https://docs.prosperitybot.net/commands/
- Intents and data usage: https://docs.prosperitybot.net/reference/intents-and-data
```

## Storing data off-platform

### Are you storing any API data off-platform (outside of Discord)?

```txt
Yes.
```

**Are you storing it for 30 days or less?**

```txt
No.
```

**How do users contact you to request deletion of their activity data?**

```txt
Users can request deletion of their data via emailing support@bhcloudlabs.com with
the deletion request.
```

**Are you encrypting the data you store at rest?**

```txt
Yes. Data is encrypted at rest.
```

## Related

- [Whitelabel bots](/guide/whitelabel) for setting up a branded bot.
- [Intents and data](/reference/intents-and-data) for what is stored and why.
- [Privacy and data retention](/reference/privacy).
