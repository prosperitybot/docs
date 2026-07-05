# General commands

Commands any member can run.

## `/about`

Shows information about the bot along with statistics for the network: the number of active servers and the number of members Prosperity is tracking.

**Permission:** Everyone

**Options:** none

```
/about
```

## `/level`

Shows a member's current level and how much XP they need to reach the next one.

**Permission:** Everyone

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `user` | User | No | The member to look up. Defaults to you. |

```
/level
/level user:@member
```

If the member has not sent a message since Prosperity joined, the command reports that they have never talked before.

## `/leaderboard`

Ranks members by total XP, ten per page, from most to least.

**Permission:** Everyone

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | Integer | No | The page to show. Defaults to 1. Values below 1 are treated as 1. |

```
/leaderboard
/leaderboard page:3
```

Each row shows the member's position, name, and current level. See [The leaderboard](/guide/leaderboard) for how ranking works.
