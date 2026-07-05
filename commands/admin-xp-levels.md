# `/xp` and `/levels`

Adjust a member's progress by hand. Use these to reward, correct, or reset.

**Permission:** Manage Server. Not available in direct messages.

## `/xp`

Changes a member's XP and recalculates their level to match.

### `/xp give`

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `user` | User | Yes | The member to give XP to. |
| `xp` | Integer | Yes | The amount to give. Must be 1 or higher. |

```
/xp give user:@member xp:500
```

### `/xp take`

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `user` | User | Yes | The member to take XP from. |
| `xp` | Integer | Yes | The amount to take. Must be 1 or higher. |

```
/xp take user:@member xp:500
```

After either command, Prosperity recalculates the member's level from their new XP total.

## `/levels`

Changes a member's level directly. Prosperity sets their XP to the start of the new level.

### `/levels give`

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `user` | User | Yes | The member to promote. |
| `levels` | Integer | Yes | How many levels to add. Must be 1 or higher. |

```
/levels give user:@member levels:3
```

### `/levels take`

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `user` | User | Yes | The member to demote. |
| `levels` | Integer | Yes | How many levels to remove. Must be 1 or higher. |

```
/levels take user:@member levels:3
```

A member's level cannot go below 0. Taking more levels than they have is rejected.

::: info XP and levels stay in sync
`/xp` recalculates the level from the XP. `/levels` sets the XP to the threshold for the new level. Either way, `/level` and the leaderboard reflect the change immediately.
:::
