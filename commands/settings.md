# `/settings`

Configures how levelling behaves on your server.

**Permission:** Manage Server. Not available in direct messages.

## `/settings notifications`

Chooses where level-up messages appear.

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | Channel | No | Send all level-up messages to this channel. |

```
/settings notifications channel:#level-ups
```

Run it **without** a channel and Prosperity shows a dropdown to pick the notification type instead:

```
/settings notifications
```

The dropdown offers four types:

- **Reply to Message**: reply to the message that triggered the level-up.
- **Specify Channel**: send level-up messages to a channel you choose.
- **Direct Messages**: send the notification to the member's direct messages.
- **Disable Notifications**: turn level-up messages off.

See [Level-up notifications](/guide/notifications) for detail and screenshots.

## `/settings roles`

Sets whether level roles stack or swap.

| Option | Type | Required | Choices | Description |
| --- | --- | --- | --- | --- |
| `type` | String | Yes | `single`, `stack` | Role behaviour on level-up. |

```
/settings roles type:single
/settings roles type:stack
```

- **single**: remove the previous level role when a new one is granted. Default.
- **stack**: keep every level role a member has passed.

See [Level roles](/guide/levels-and-roles) for detail.

## `/settings multiplier`

Sets the XP multiplier for the server.

| Option | Type | Required | Range | Description |
| --- | --- | --- | --- | --- |
| `multiplier` | Number | Yes | 0 to 10 | The XP rate. 1 is the standard rate. |

```
/settings multiplier multiplier:2
```

Use a higher value for an XP event, or a lower one to slow progression. Set it to 1 to return to normal.

## `/settings delay`

Sets the cooldown between XP-earning messages.

| Option | Type | Required | Range | Description |
| --- | --- | --- | --- | --- |
| `delay` | Integer | Yes | 1 to 86400 | Cooldown in seconds. |

```
/settings delay delay:60
```

A member can earn XP once per cooldown window. 86400 seconds is 24 hours. A longer cooldown rewards sustained participation over bursts of messages.
