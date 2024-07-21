---
title: Command Placeholders
weight: 60
type: techdocs
---
Command placeholders are placeholders that can be used as placeholders for actual
information in certain places, for example in the `console_cmd` or `player_cmd`
usables actions.

## Arcadius' Placeholders
|Placeholder|Description|Output Example|
|---|---|---|
|`%player`|Player's name|JulieWoolie|
|`%player.block`|Player's block position|43 23 -135|
|`%player.pos`|Player's position|43.1564 23.0 -135.156489|
|`%player.worldkey`|Key of the player's world|minecraft:overworld|
|`%player.world`|Name of the player's world|world_the_end|
|`%player.x`|Player's X coordinate|234.343452|
|`%player.y`|Player's Y coordinate|54.000564|
|`%player.z`|Player's Z coordinate| -546.59674|
|`%player.bx`|Player's X block coordinate|234|
|`%player.by`|Player's X block coordinate|54|
|`%player.bz`|Player's X block coordinate| -545|
|`%player.yaw`|Player's yaw rotation|90|
|`%player.pitch`|Player's pitch rotation|90|
|`%player.uuid`|Player's UUID|ff09eaf1-b01e-4a17-a6f9-81468ce42f3a|

Examples in commands:
- `/tp %player 0 100 0`  
  Becomes: `/tp JulieWoolie 0 100 0`
- `/tellraw %player "You are at %player.block yaw=%player.yaw pitch=%player.pitch"`  
  Becomes: `/tellraw JulieWoolie "You are at 12 3 200 yaw=45 pitch=-45"`  

## AncientGates placeholder
|Placeholder|Description|Output Example|
|---|---|---|
|`%p`|Player's name| JulieWoolie|

## WorldGuard placeholder
|Placeholder|Description|Output Example|
|---|---|---|
|`%username%`|Player's name|JulieWoolie|