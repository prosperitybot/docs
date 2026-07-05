# Ignoring channels and roles

Not every channel should count towards levelling, and some members should sit outside the system. Prosperity lets you exclude both channels and roles from earning XP.

## Ignored channels

Messages sent in an ignored channel earn no XP. This is useful for:

- Bot command channels, where activity is not really conversation.
- Spam or counting channels.
- Off-topic or archive channels you do not want to reward.

Add one with the **Manage Server** permission:

```
/ignored channels add channel:#bot-commands
```

Remove it later:

```
/ignored channels remove channel:#bot-commands
```

List every ignored channel:

```
/ignored channels list
```

## Ignored roles

A member who holds an ignored role earns no XP anywhere in the server, regardless of which channel they post in. This is useful for:

- Muted or timed-out members.
- Bots that are not flagged as bot accounts.
- Staff or alt accounts you want to keep off the leaderboard.

```
/ignored roles add role:@Muted
/ignored roles remove role:@Muted
/ignored roles list
```

::: info How the check works
When a member sends a message, Prosperity checks their roles against the ignored list before awarding XP. If any of their roles is ignored, the message earns nothing. Bot accounts are always skipped, whether or not they hold an ignored role.
:::

## What being ignored does not do

Ignoring a channel or role only stops **new** XP. It does not remove XP a member has already earned, and it does not remove any level roles they already hold. To reset a member's progress, use [`/xp take` or `/levels take`](/commands/admin-xp-levels).

## Related

- [`/ignored` command reference](/commands/ignored) for exact options.
