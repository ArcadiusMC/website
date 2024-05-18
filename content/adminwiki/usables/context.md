---
title: "Context Values"
type: wiki
weight: 40
toc: true
---

Context values are contextual values that you'll most likely only interact with
when writing scripts.

## Accessing (via script functions)
Context values can be accessed and changed with the following script functions:
- `getContextValue(name)`: Gets a context value, or `null` if the value is 
  not set.
- `requireContextValue(name)`: Gets a context value, or throws an error if the
  value is not present.
- `listContextValues()`: Gets an array of context value names.
- `setContextValue(name, value)`: Sets the value of a context entry.
- `hasContextValue(name)`: Tests if a context value is present.

## General
Values present in all contexts.
- `player`: The player interacting with the usable
- `silent`: Silence state. Determines if the usable sends error messages or 
  announces commands.

## Block and Entity Values
Values included in both usable and entity values.
- `location`: [Bukkit Location](https://jd.papermc.io/paper/1.20/org/bukkit/Location.html)
  of the usable.
- `world`: [Bukkit World](https://jd.papermc.io/paper/1.20/org/bukkit/World.html)
  of the usable.
- `cancel_vanilla`: Vanilla cancellation state.  
  One of `true`, `false`,  `if_tests_fail`, `if_tests_succeed`.
- `hand`: Interaction hand.  
  One of `hand`, `off_hand`.

## UsableBlock Values
- `block`: [Bukkit Block](https://jd.papermc.io/paper/1.20/org/bukkit/block/Block.html)
  object that the usable block is tied to.
- `useItem`: Sets if the item the player is holding will be used.  
  One of: `allow`, `deny`, `default`
- `useBlock`: Sets if the block the player clicked on will be used.  
  One of: `allow`, `deny`, `default`

## UsableEntity Values
- `entity`: [Bukkit Entity](https://jd.papermc.io/paper/1.20/org/bukkit/entity/Entity.html)
  of the usable entity.

## UsableItem Values
- `item`: The [Bukkit ItemStack](https://jd.papermc.io/paper/1.20/org/bukkit/inventory/ItemStack.html)
  of the usable.
- `useItem`: Sets if the item the player is holding will be used.  
  One of: `allow`, `deny`, `default`
- `useBlock`: Sets if the block the player clicked on will be used.  
  One of: `allow`, `deny`, `default`

## UsableTrigger Values
- `area`: A Bounds3i (Java object) representing the area the trigger takes up.
- `triggerName`: Name of the trigger.
- `location`: [Bukkit Location](https://jd.papermc.io/paper/1.20/org/bukkit/Location.html)
  of the center of the trigger.
- `world`: [Bukkit World](https://jd.papermc.io/paper/1.20/org/bukkit/World.html)
  of the trigger.
- `regionAction`: The action that triggered the interaction.  
  One of: `enter`, `exit`, `move_inside`.