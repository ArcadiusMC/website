---
title: ArcadiusMC is open!
date: 2024-12-18T00:00:00+02:00
summary: "ArcadiusMC's initial release after beta."
author: JulieWoolie
authorimage: "/images/people/juliewoolie.png"
featured_image: "/images/posts/index-bg.png"
---

ArcadiusMC Is here! Anyone can now join and play on it.
  
I hope you enjoy the server. I've put in a good bit of work (and 
procrastination) to make an enjoyable expirience!

# What's new?
- Added a whole new quest line in the Pirate's hideout of Calavera. At the end 
  of the quest, you get the **Pirate's Spade**, a special shovel!
- Added **Edward, the Librarian** to the palace library in *Latium*. He sells OP
  enchantments for a ludicrous price.
- **Custom Advancements** (Make sure to read the guide after joining the server
  for the first time)
- A new **Bank** for you to loot and plunder!

# What's next?
Next I plan to finish January 2025's event and then work on the Dungeons. 
Speaking of the dungeons, I've gotten to a good point with the generator that I
feel like I can move on to other aspects of the Dungeons plugin.
  
On top of that, I plan to add more small quest lines as we go for other special
items and tools.

# Patch notes
### Additions
- Custom Advancements for bank runs.
- Custom Advancements for using, making and naming waypoints.
- Custom Advancements for purchasing from Edward.
- Custom Advancements for smoking weed.
- Add `disabled` property to waypoints, allowing them to be turned off.
- Add ability to modify dialogue text dynamically.
- Add ability for emperors to levy taxes, increase rent or cut taxes and 
  decrease rent.
- Add a *"Owned Shop"* field to `/profile` for admins.
- Add slight variance to the text colors in chat for clarity.
- Add pirate's spade quest
- Add pirate's quest boss battle
- Add 2 bank vaults: Aurum (gold) and Argenti (silver) vaults.
- Add coin piles: Piles of coins that can be picked up by right clicking.
- Added several dynamic server icons, including specific ones for: Apil Fools, 
  Christmas, Pride Month, and a random one that has a 0.1% chance to appear.
- Add new survial world
- Add survival world spawn, named *Colonia*.
- Added armor stands that will dynamically change depending on the current 
  emperor.
- Added 4 loot crates to Latium.
- Added parrot pets.
### Modifications
- Enlarged *Latium*.
- Stop suggesting waypoint aliases in the `/vr` command.
- Move projectile-launch-deny functionality from JS script to java plugin.
- Broaden `/wild` command for admin use.
- In player shop lists: use shop owner head instead of red-colored head.
- Change *Captain Jack*'s dialogue so you can use him to travel to Calavera, 
  Latium and Colonia from either of those places.
- Adjusted admin shop prices.
- Enabled PvP in the PvP arena.
### Fixes
- Fix `/listwaypoints` suggesting Waypoint UUIDs when clicking on a waypoint name.
- Fix bug with the buttons in `/settings` using the wrong font (Using `twemoji`
  font when they should use `minecraft:uniform`)
- Fix internal error thrown when doing per-player rendering of the Waypoint 
  "Click to Edit" sign.
- Fix permissions issue with the `error-overrides` argument on some commands.
- Fix sign shop history messages giving "unknown message" errors
- Fix `/signshop line` commands having incorrectly rendered placeholder.
- Fix display issues with player shop rent, tax and price modifiers.
- Fix waypoint commands being overridden by other plugins.
- Fix issues with OP enchantments not properly being applied to items.
- Fix unknown message error in `/ranks` menu.
- Fix some grammar issues in the server intro.