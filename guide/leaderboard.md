# The leaderboard

The leaderboard ranks members by total XP, so everyone can see who is most active.

## Viewing it

```
/leaderboard
```

This shows the top members, ten per page, ordered from most XP to least. Each entry shows the member's position, their name, and their current level.

![A leaderboard showing the top ten members ranked by level, headed Top 10 Members Page 1 of 47409](/screenshots/leaderboard.png)

The header shows the current page and the total number of pages, so you can tell how far the ranking runs.

## Paging through

Pass a page number to see further down the ranking:

```
/leaderboard page:2
```

Page 1 is the top ten, page 2 is positions 11 to 20, and so on. Any page below 1 is treated as page 1.

## How ranking works

- Members are ranked by **total XP**, not by level. Two members on the same level can sit in a different order depending on how far each is through that level.
- Only members who have earned XP appear. A member who has never sent a message since Prosperity joined is not listed.

## Related

- [`/leaderboard` command reference](/commands/general) for exact options.
- [How levelling works](/guide/how-levelling-works) for how XP is earned.
