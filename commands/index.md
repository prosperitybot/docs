# Command reference

Every Prosperity feature is a slash command. This page lists them all with the permission each one needs. The pages that follow document the options in detail.

## Permission levels

- **Everyone**: any member can run it.
- **Manage Server**: the member needs Discord's Manage Server permission.
- **Administrator, premium**: the member needs Administrator, and the account must be a premium (whitelabel) account.

Admin commands are hidden from members who lack the permission, because Prosperity sets Discord's default member permissions on each command. Server owners can further restrict commands per channel or role using Discord's built-in **Integrations** settings.

## All commands

| Command | Purpose | Permission |
| --- | --- | --- |
| `/about` | Bot statistics for the server and member counts | Everyone |
| `/level [user]` | Show your level and XP, or another member's | Everyone |
| `/leaderboard [page]` | Rank members by XP, ten per page | Everyone |
| `/levelroles add\|remove\|list` | Manage roles granted at a level | Manage Server |
| `/levels give\|take` | Adjust a member's level directly | Manage Server |
| `/xp give\|take` | Adjust a member's XP and recalculate level | Manage Server |
| `/ignored channels add\|remove\|list` | Exclude channels from earning XP | Manage Server |
| `/ignored roles add\|remove\|list` | Exclude role holders from earning XP | Manage Server |
| `/settings notifications` | Choose where level-up messages appear | Manage Server |
| `/settings roles` | Set role behaviour to single or stack | Manage Server |
| `/settings multiplier` | Set the XP multiplier, 0 to 10 | Manage Server |
| `/settings delay` | Set the XP cooldown in seconds, 1 to 86400 | Manage Server |
| `/whitelabel setup\|actions` | Set up and manage a branded bot | Administrator, premium |

Most admin commands are unavailable in direct messages and only work inside a server.

## By topic

- [General](/commands/general): `/about`, `/level`, `/leaderboard`.
- [Level roles](/commands/level-roles): `/levelroles`.
- [Ignored channels and roles](/commands/ignored): `/ignored`.
- [Settings](/commands/settings): `/settings`.
- [XP and levels (admin)](/commands/admin-xp-levels): `/xp`, `/levels`.
- [Whitelabel](/commands/whitelabel): `/whitelabel`.
