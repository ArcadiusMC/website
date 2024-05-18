---
title: Reference
type: wiki
weight: 30
toc: true
---

## Reference
---
Types that act as both actions and conditions.

### Items
---
**Actions**: 
- `give_items`: Give players items. When giving items, it'll first attempt to 
  insert the items into a player's inventory, if that fails, it simply drops the
  items at the player's feet. 
- `take_items`: removes items from any slot in the player's inventory. 
  
**Conditions**: 
- `has_items`: Tests if a player has all specified items.
- `does_not_have_items`: Tests if a player does NOT have the specified items.
  
(altough only `give_items` is used to document, the following applies to both)

#### Uses
- {{<cmduse text="give_items #container [world=<name>] x=<cord> y=<cord> z=<cord>">}}
  Creates a copy of all the items in container block at the specified 
  coordinates and uses those items to perform the action/condition.
    
  All `<coord>` values support the `~` relative coordinates.

- {{<cmduse text="give_items #held-item">}}
  Uses the item you're holding. (Item is copied)

- {{<cmduse text="give_items #inventory">}}
  Uses every item in your inventory (Items are copied)

- {{<cmduse text="give_items #hotbar">}}
  Uses every item in your hotbar (Items are copied)

- {{<cmduse text="give_items #item-list <items>">}}
  Manually specified list of items.
    
  The List follows a format of: `<amount>;<item>`, for example: `16;stone`, to
  use multiple items, separate entries with a comma, for example:  
  `16;stone, 4;egg, 1;diamond_sword[max_stack_size=16]`

#### Examples
- {{<cmduse text="give_items #held-item">}}
- {{<cmduse text="give_items #inventory">}}
- {{<cmduse text="give_items #hotbar">}}
- {{<cmduse text="give_items #item-list 1;stone">}}
- {{<cmduse text="give_items #item-list 1;stone, 14;gravel">}}
- {{<cmduse text="give_items #container world=world x=1432 y=64 z=3434">}}
- {{<cmduse text="give_items #container x=~ y=~-2 z=~">}}

### File-loaded Scripts
---
**Actions**: `script_file`  
**Conditions**: `test_script`
  
Executes a script file.  
See [Usables Scripting](../scripting) for more info on Usables scripting.

#### Examples
- {{<cmduse text="script_file debts/pay">}}

### Raw JavaScript
---
**Actions**: `js`  
**Conditions**: `js`
  
Executes raw JavaScript code.
  
*While this may be easy to set up and use, `js` actions may be hard to maintain
later down the line, as such, it is recommended to use the `script_file`/`test_script`
instead for most things.*
  
See [Usables Scripting](../scripting) for more info on Usables scripting.

#### Examples
- {{<cmduse text="js player.health = 0">}}
  lol

## Actions
---
### `teleport`
---
Teleports a player to a specified location.

#### Uses
- {{<cmduse text="teleport">}}
  Creates a teleport action that teleports players to the location
  you're standing at right now.

- {{<cmduse text="teleport [world=<name>] x=<cord> y=cord> z=<cord> [yaw=<yaw>] [pitch=<pitch>]">}}
  Creates a teleport action that teleports players to the specified coordinates.  
    
  The `world`, `yaw` and `pitch` are optional arguments that don't have to be 
  specified.  
    
  If the `world` argument is not set, the world the player creating the action
  is in is used.
    
  If the `yaw` and `pitch` arguments are not set, then the rotation values of
  player being teleported are used.

#### Examples
- {{<cmduse text="teleport">}}
- {{<cmduse text="teleport world=void x=-301.5 y=93.0 z=-637.5 yaw=-90.0">}}
- {{<cmduse text="teleport x=-301.5 y=93.0 z=-637.5">}}

### Commands (`console_cmd` and `player_cmd`)
---
Either performs a console command or forces the interacting player to perform
a command.  
  
Inputs for this action support [Command Placeholders](/adminwiki/commandplaceholders).
You can also use the entity selector '@p' as a placeholder for the player's name.

#### Uses
- {{<cmduse text="console_cmd <command>">}}

#### Examples
- {{<cmduse text="console_cmd kill %player">}}
- {{<cmduse text="player_cmd Hello, all!">}}

### Text / Messages (`show_text` and `show_actionbar`)
---
Shows text to a player, either in their chat or in their actionbar.

#### Uses
- {{<cmduse text="show_text <text>">}}
  Creates an action that shows text to a player, color codes and all other chat
  functions (as well as [Placeholders](/adminwiki/placeholders)) are supported.

#### Examples
- {{<cmduse text="show_text &eHello, world!">}}

### `play_sound`
---
Plays a sound to the interacting player or to all players in a specified radius,
  
**Arguments**:
{{<cmduse text="play_sound sound=<sound name> [channel=<val>] [pitch=<0..2>] [volume=<0..>] [play-radius=<0..>] [repeat=<1..>] [delay=<val>]">}}
| Argument name | Description | Defaults to |
|--|--|--|
|`sound`|Name of the sound to play||
|`channel`|Channel for sound to play on (eg: `master`, `record`)| `master`|
|`pitch`|Sound pitch| `1` |
|`volume`|Sound Volume| `1` |
|`play-radius`|Radius to play the sound in (Originates from the usable)| `0` |
|`repeat`|How many times the sound repeats| `1` |
|`delay`|Time delay before the sound is played| `0s` |

**Notes**: 
- If both a `delay` and `repeat` are set, then, when playing the sound, after 
  the delay ends, all the sounds are played at once, repeated.

## Conditions
---
### `not` (Inverted condition)
---
A condition that takes in another condition and inverts the result of the 
specified condition.
  
**Note**:  
You should most likely override the error message of `not` conditions, because
the error message is simply the error message of the inverted condition with a
"NOT" prepended onto it.

#### Uses
- {{<cmduse text="not <condition type> [<input>]">}}
  Specifies a condition type (eg: `not_alt`, `has_items`) and an optional input
  for that type.

#### Examples
- {{<cmduse text="not is_faction_member latins">}}
- {{<cmduse text="not has_items #item-list 1;minecraft:stone_pickaxe">}}

### `in_world`
---
Tests if the player is in the specified world.

#### Uses
- {{<cmduse text="in_world">}}
  Uses the world you're standing in.
- {{<cmduse text="in_world <world name>">}}
  Uses the specified world.

#### Examples
- {{<cmduse text="in_world resource1">}}

### `hand`
---
Tests if a player is using the correct hand (main-hand or off-hand)

#### Examples
- {{<cmduse text="hand weapon.mainhand">}}
- {{<cmduse text="hand weapon.offhand">}}

### `has_permission`
---
Tests if a player has a specified permission

#### Uses
- {{<cmduse text="has_permission <permision name>">}}
#### Examples
- {{<cmduse text="has_permission arcadius.warps.portal">}}

### `cooldown`
---
Places players on cooldown and denies players that are on the cooldown.

#### Use
- {{<cmduse text="cooldown <time>">}}
  Creates a cooldown condition.

#### Examples
- {{<cmduse text="cooldown 30m">}}
- {{<cmduse text="cooldown 30m+35s">}}
- {{<cmduse text="cooldown 2.5m">}}

## Simple Conditions
---
Simple conditions require no actual input, just that you type in the name of
condition.

| Condition Type | Description |
|--|--|
|`one_use_individual`| Only allows a player to use something once.|
|`one_use_global`| Only allows 1 player to ever use something.|
|`not_alt`| Only allows non alt accounts to use something.|
|`inventory_empty`| Only allows players with an empty inventory to use something|
|`no_riders`| Only allows players that have no one riding them to use something|
