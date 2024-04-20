---
title: "Text Placeholders"
type: wiki
weight: 70
---

Placeholders are pieces of text that are replaced with other values when sent to a player. For example: `You have ${viewer.balances}` becomes `You have 1,000 Denarii`  
As a note, since we have PlaceholderAPI installed, all placeholders that plugin supports, are also supported by Arcadius

List of placeholders:
|Placeholder|Description|Output Example|
|---|---|---|
|`${js: <java script code>}`| Executes JS code and returns the result as text|`${js: 1 + 2 * 3}` -> 7|
|`${script: <script file>}`| Executes a JS script file and returns the result as text.
|`${rank: <rank name>}`| Specified rank's display name|
|`${border:<length>}`|Clean strikethrough line with a set length|
|`${spaces:<length>}`|Whitespace with a set length|
|`${keybind:<bind>}`|Player-specific message for a keybind|`${keybind:key.attack}` -> Left Button|
|`${viewer}`| Display name of the player being shown the text|JulieWoolie|
|`${viewer.x}`| Player's X coordinate (Rounded to 2 decimal places)|25.06|
|`${viewer.y}`| Player's Y coordinate (Rounded to 2 decimal places)|79.00|
|`${viewer.z}`| Player's Z coordinate (Rounded to 2 decimal places)| -240.09|
|`${viewer.bx}`| Player's X coordinate (Rounded to 0 decimal places)|25|
|`${viewer.by}`| Player's Y coordinate (Rounded to 0 decimal places)|79|
|`${viewer.bz}`| Player's Z coordinate (Rounded to 0 decimal places)| -240|
|`${viewer.location}`|Players X, Y and Z coordinates|12x 13y 14z|
|`${viewer.world_location}`|Same as above, except with world also specified|12x 13y 14z, world: Overworld|
|`${viewer.balances}`|Amount of money the user has|1,000 Rhines|
|`${viewer.gems}`|User gems|100 Gems|
|`${viewer.world}`|User's world|"Overworld", "Resource World"|
|`${viewer.uuid}`|User's UUID|ff09eaf1-b01e-4a17-a6f9-81468ce42f3a|
|`${viewer.votes}`| Total player votes|14 Votes|
|`${viewer.playtime}`| Total playtime|425 Hours|
|`${viewer.ip}`| Player's IP|167.105.19.21|
|`${viewer.timestamp:<stamp>}`|A player's specific time field`|`${viewer.timestamp:lastLogin}` -> 12th Aug 2024|
|`${viewer.property:<name>}`|A player's specific data property|`${viewer.property:flying}` -> true|

Don't know how to explain this one without sounding mad, so I'll show some examples of the `text` placeholder:  
- `${text: content='[Button]' hover='Click me!' run_command='/say I was ran :)'}`  
- `${text: content='I am red' color='red'}`  
- `${text: content='I am some hex code' color='#FFAABB'}`  
- `${text: content='I am italic and bold' color='red' italic=true bold=true}`  
- `${text: content='I am a link' hover='Click me!' open_url='https://forthecrown.net'}`  
  This one might be a bit funky and not work, due to how links are processed before placeholders

## User Time stamps
- `nextAllowedTeleport`
- `firstJoined`
- `lastLoad`
- `lastJoin`
- `afkStart`
- `afkTime`
- `market_ownershipBegan`
- `market_lastAction`
- `lastMoveIn`