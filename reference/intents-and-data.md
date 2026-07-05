# Intents and data

This page explains which Discord gateway intents Prosperity uses, why, and exactly what data it stores. It is written for server owners deciding whether to trust the bot, and for Discord's review process.

## Gateway intents

Prosperity requests the **Server Members** intent (also called the Guild Members intent).

### Why the Server Members intent is needed

The intent is used for core levelling functions:

- **Resolving member roles.** When a member sends a message, Prosperity checks their roles against the [ignored roles](/guide/ignoring-channels-roles) list before awarding XP. Without member data it cannot tell whether a member should be excluded.
- **Assigning and removing level roles.** On level-up, Prosperity grants the role configured for the new level and, in single mode, removes the previous one. This requires knowing the member's current roles.
- **Enforcing command permissions.** Admin commands are gated on Manage Server or Administrator, which is checked against the member running them.
- **Backfilling members.** When someone joins, Prosperity records them so their levelling profile is ready from their first message.

### Message content

Prosperity does **not** read or store message content. It treats a message as a signal that a member was active. The text of the message is never inspected, logged, or retained. Awarding XP needs only that a message was sent, by whom, and in which channel.

## What Prosperity stores

Prosperity stores the minimum needed to track levelling across sessions. Data is held off-platform in the bot's database.

| Data | Purpose |
| --- | --- |
| User ID, username, discriminator | To identify a member on the leaderboard and in commands. |
| Server (guild) ID and name | To keep levelling separate per server. |
| XP, level, message count | The member's progress in a server. |
| Timestamp of last XP-earning message | To enforce the per-server cooldown. |
| A per-message log of XP gained (member, server, XP amount, time) | To record activity for levelling. This log does not contain message text. |
| Server settings (multiplier, cooldown, notification channel, role mode) | Your configuration. |
| Level roles and ignored channels and roles | Your configuration. |
| Whitelabel bot credentials, for premium users only | To run a branded bot on the member's behalf. |

## Retention and deletion

Levelling data is retained for as long as the bot is in your server, because it represents ongoing progress. It is kept for longer than 30 days by design.

Members can request deletion of their activity data by emailing **support@bhcloudlabs.com**.

For the full policy, encryption commitments, and your rights under UK GDPR, see [Privacy and data retention](/reference/privacy).
