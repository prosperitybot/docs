# `/levelroles`

Manages the roles Prosperity grants automatically when members reach a level.

**Permission:** Manage Server. Not available in direct messages.

See [Level roles](/guide/levels-and-roles) for the concepts, including stack and single behaviour.

## `/levelroles add`

Registers a role to be granted at a level, and immediately grants it to members already at or above that level.

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | Role | Yes | The role to grant. |
| `level` | Integer | Yes | The level at which to grant it. Must be 1 or higher. |

```
/levelroles add role:@Regular level:5
```

The command refuses a role that is already registered, or a level that already has a role. When it runs, it also assigns the role to every member currently between this level and the next configured level role.

::: warning Role position
Prosperity can only assign roles positioned below its own highest role. If assignment appears to do nothing, move the Prosperity role above your level roles.
:::

## `/levelroles remove`

Stops granting a role at level-up.

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | Role | Yes | The level role to remove. |

```
/levelroles remove role:@Regular
```

This removes the rule only. Members who already hold the role keep it. Remove it from them manually if needed.

## `/levelroles list`

Lists every level role and the level it is granted at.

**Options:** none

```
/levelroles list
```
