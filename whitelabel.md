---
title: Whitelabel Setup Guide
description: 
published: true
date: 2022-02-13T19:27:02.420Z
tags: 
editor: markdown
dateCreated: 2022-02-13T19:27:02.420Z
---

# Whitelabel Setup Guide

First off, thank you so much for supporting the ongoing development of Prosperity!
Please make sure to follow this guide to the exact steps listed, otherwise I cannot guarantee the bot working properly.

## Link Patreon Account

If you haven't already gained access to whitelabel, please link your Patreon account to Discord.
Click [here](https://support.patreon.com/hc/en-gb/articles/212052266-How-do-I-connect-Discord-to-Patreon-Patron-) to view a detailed guide regarding this.

## Create a Bot

1. Visit the Discord Developer Portal
![whitelabel-1.png](/whitelabel-1.png)
2. Click `New Application`
![whitelabel-2.png](/whitelabel-2.png)
3. Enter a name for your bot
![whitelabel-3.png](/whitelabel-3.png)
4. Click `Create`
5. Click `Bot`
![whitelabel-5.png](/whitelabel-5.png)
6. Click `Add Bot`
7. Click `Yes, do it!`

## Change Bot Settings

1. Turn off `Public Bot`
![whitelabel-settings-1.png](/whitelabel-settings-1.png)
2. Turn on `Server Members Intent`
![whitelabel-settings-2.png](/whitelabel-settings-2.png)

## Initialising the Bot

1. Join the [Support Server](https://discord.gg/S5sN8HH)
2. in `#commands` run `/whitelabel setup` with the following arguments:
	1. `token`: The token of the bot (found on the Bot Settings page)
  2. `bot_id`: The Id of the bot (found under General Information labelled Application Id)
3. Use `/whitelabel actions` to start the bot

## Inviting the Bot

Use the following link, replacing `YOUR_APPLICATION_ID` with the Id of the Bot:

https://discord.com/oauth2/authorize?client_id=YOUR_APPLICATION_ID&permissions=277294156864&scope=applications.commands%20bot