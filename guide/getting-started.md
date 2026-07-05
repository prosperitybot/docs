# Add Prosperity to your server

Getting started takes a few minutes. You invite the bot, give it the permissions it needs, and optionally set up your first level role.

## 1. Invite the bot

Use the invite link for Prosperity and select the server you want to add it to. You need the **Manage Server** permission on that server to complete the invite.

https://discord.com/oauth2/authorize?client_id=930157747385798666&scope=bot%20applications.commands&permissions=277294154816

When Discord asks which permissions to grant, keep the defaults. Prosperity needs to read messages so it can award XP, send messages so it can post level-up notifications, and manage roles so it can grant level roles. See [Required permissions](/reference/permissions) for the full breakdown.

## 2. Confirm it is working

Send a few messages in any channel, then run:

```
/level
```

You should see your current level and how much XP you need to reach the next one. If you have just joined, you start at level 0 and climb from there.

::: info First message
Prosperity creates your profile the first time you send a message after it joins. If `/level` says a member has "never talked before", they have not sent a message since the bot was added.
:::

## 3. Set your first level role (optional)

If you want members to earn a role as they level up, add one now. You need **Manage Server** to run this command.

```
/levelroles add role:@Regular level:5
```

This grants the `@Regular` role automatically when a member reaches level 5. Any member already at level 5 or above receives it straight away. See [Level roles](/guide/levels-and-roles) for stacking behaviour and more detail.

::: warning Role position
Prosperity can only assign roles that sit **below** its own highest role in your server's role list. Drag the Prosperity role above any level roles you create, or role assignment will fail silently.
:::

## 4. Tune the pace (optional)

The defaults work out of the box. When you are ready to adjust them:

- `/settings delay` sets the cooldown between XP-earning messages, in seconds.
- `/settings multiplier` scales how much XP members earn.
- `/settings notifications` chooses where level-up messages appear.
- `/ignored channels add` and `/ignored roles add` exclude channels or roles from earning XP.

## Next steps

- [How levelling works](/guide/how-levelling-works) explains the XP curve.
- [The command reference](/commands/) lists every command and its options.
