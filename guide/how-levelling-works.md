# How levelling works

Prosperity turns activity into progress. This page explains exactly how XP is earned and how levels are calculated, so you can predict and tune the experience for your server.

## Earning XP

Every message a member sends can earn XP, subject to a cooldown:

- Each qualifying message earns a **random amount between 15 and 30 XP**.
- A member can only earn XP once per **cooldown window**. The default window is set per server with [`/settings delay`](/commands/settings), measured in seconds. Messages sent during the cooldown still count as chat, they just do not earn additional XP.
- **Bot messages never earn XP.**
- Messages in [ignored channels](/guide/ignoring-channels-roles) earn no XP.
- Members who hold an [ignored role](/guide/ignoring-channels-roles) earn no XP.

The cooldown is what stops members from spamming their way up the leaderboard. Set it higher for a slower, chat-quality-focused server, or lower for a fast, casual one.

## The XP multiplier

`/settings multiplier` stores an XP rate for your server, from 0 up to 10, with 1 being the standard rate. Use it to run a double-XP weekend or to slow progression down. Set it back to 1 to return to normal.

## The level curve

Levels are based on **total XP earned**, not XP since the last level. The amount of total XP needed to reach a level follows a fixed curve:

```
XP to reach level L = (5 / 6) x L x (2L^2 + 27L + 91)
```

The curve gets steeper as levels rise, so early levels come quickly and later ones take real commitment. The maximum level is **1000**.

### Total XP at a glance

| Level | Total XP required | Rough messages to get there |
| ---: | ---: | ---: |
| 1 | 100 | ~5 |
| 2 | 255 | ~11 |
| 5 | 1,150 | ~51 |
| 10 | 4,675 | ~208 |
| 50 | 268,375 | ~11,900 |
| 100 | 1,899,250 | ~84,000 |

The message estimates assume an average of 22.5 XP per message and a multiplier of 1. They ignore the cooldown, so real numbers depend on how often a member is eligible to earn.

## Levelling up

When a member's total XP crosses the threshold for the next level, Prosperity:

1. Works out the new level (a single message can cross more than one level boundary at low levels).
2. Updates any [level roles](/guide/levels-and-roles) the member has earned.
3. Posts a congratulations message. Where it appears depends on your [notification settings](/guide/notifications).
4. Sends the member a direct message with the same congratulations.

## Checking progress

- `/level` shows your current level and the XP remaining to the next one.
- `/level user:@member` shows another member's standing.
- `/leaderboard` ranks members by XP. See [The leaderboard](/guide/leaderboard).

## Adjusting XP by hand

Server managers can correct or reward XP and levels directly:

- `/xp give` and `/xp take` change a member's XP and recalculate their level.
- `/levels give` and `/levels take` change a member's level directly.

Both are documented in [XP and levels (admin)](/commands/admin-xp-levels).
