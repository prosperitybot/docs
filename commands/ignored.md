# `/ignored`

Excludes channels and role holders from earning XP.

**Permission:** Manage Server. Not available in direct messages.

See [Ignoring channels and roles](/guide/ignoring-channels-roles) for when to use each.

## Channels

Messages in an ignored channel earn no XP.

### `/ignored channels add`

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | Channel | Yes | The channel to exclude. |

```
/ignored channels add channel:#bot-commands
```

### `/ignored channels remove`

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | Channel | Yes | The channel to stop excluding. |

```
/ignored channels remove channel:#bot-commands
```

### `/ignored channels list`

Lists every ignored channel. No options.

```
/ignored channels list
```

## Roles

A member who holds an ignored role earns no XP anywhere in the server.

### `/ignored roles add`

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | Role | Yes | The role to exclude. |

```
/ignored roles add role:@Muted
```

### `/ignored roles remove`

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | Role | Yes | The role to stop excluding. |

```
/ignored roles remove role:@Muted
```

### `/ignored roles list`

Lists every ignored role. No options.

```
/ignored roles list
```

::: info Bots are always skipped
Bot accounts never earn XP, whether or not they hold an ignored role.
:::
