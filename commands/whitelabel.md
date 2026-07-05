# `/whitelabel`

Sets up and manages a branded (whitelabel) bot. See [Whitelabel bots](/guide/whitelabel) for the full walkthrough, including the Discord Developer Portal steps.

**Permission:** Administrator, and the account must be a premium (whitelabel) account. If your account is not premium, the command tells you so and does nothing.

## `/whitelabel setup`

Registers your own Discord application as a branded bot and returns the interactions endpoint URL to paste into the Developer Portal.

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | String | Yes | Your bot's token from the Developer Portal. |
| `public_key` | String | Yes | Your application's public key. |

```
/whitelabel setup token:<your bot token> public_key:<your public key>
```

Prosperity validates the token, registers the bot, and replies with a URL of the form `https://<worker host>/interactions/<your bot id>` along with a link to the right Developer Portal page. Paste the URL into the application's **Interactions Endpoint URL** field and save.

If you already have a whitelabel bot, running setup again recreates it with the new token and public key.

::: warning Keep your token secret
Your bot token grants full control of your bot. Run this command where others cannot read it, and regenerate the token in the Developer Portal if it is ever exposed.
:::

## `/whitelabel actions`

Opens a menu to control your bot's session. Pick your bot from the first dropdown, then choose an action.

**Options:** none. The command is interactive.

```
/whitelabel actions
```

| Action | What it does |
| --- | --- |
| Start | Brings the bot online. |
| Stop | Takes the bot offline. |
| Restart | Stops then starts the bot. |
| Delete | Stops the bot and removes it from management. |

Actions are applied within a few seconds. You can only manage bots your own account owns.
