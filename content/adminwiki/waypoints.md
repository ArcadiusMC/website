---
title: "Waypoints"
type: wiki
toc: true
weight: 56
---

## Creating waypoints
Player waypoints (those made with `/kit waypoints`) can only be made with that 
kit, but region waypoints, invisible (admin) waypoints and legacy Region Poles
can be made by admins with commands.
- {{<cmduse text="/waypoints create admin">}}
  Creates an invisible waypoint.
- {{<cmduse text="/waypoints create faction-region">}}
  Creates a region waypoint found in places like Latium or Colonia.
- {{<cmduse text="/waypoints create region-pole">}}
  Creates a legacy Region Pole waypoint.

{{<alert>}}
Once a waypoint has been made, it won't have a name, so to modify it
with commands, stand inside the waypoint and use `-current` instead of a 
waypoint name in commands. (For example, use `/waypoints info -current` instead
of something like `/waypoints info Latium`)
{{</alert>}}

## Naming Waypoints
Waypoints can be given names and aliases. Names are the primary identifier used
for waypoints, while aliases just allow you to type a different name for the 
same region when doing `/visit <region>`

You can set a waypoint's name by changing the `name` property, like so:
{{<cmduse text="/waypoints property set <waypoint> name <new name>">}}

And a waypoint's aliases can be changed by modifying the `aliases` property, 
like so
{{<cmduse text="/waypoints property set <waypoint> aliases <new aliases>">}}

example: `/waypoints property set Latium aliases l latins spawn` Makes the 
Latium waypoint, use `l`, `latins`, `spawn` as its aliases.

{{<alert>}}
When changing aliases on a waypoint that already has aliases set, do 
`/waypoints property unset Latium aliases` before setting new aliases. 
Otherwise, the name validator will not allow you to change them.
{{</alert>}}

## Moving a waypoint
Waypoints can be moved to where you are standing with 
{{<cmduse text="/waypoints move <waypoint>">}}

## Changing waypoint metadata
### Display Item
Waypoints use display items in the waypoint gui, by default, they use a name 
tag. This can be changed with:
{{<cmduse text="/waypoints property set <waypoint> display_material <item>">}}
example: `/waypoints property set <waypoint> display_material minecraft:stone`

### Description
Waypoints have descriptions, these are shown when hovering over the waypoint's 
name in `/waypointlist` or when looking at the items in the waypoint gui.  
Descriptions can be changed like so:
{{<cmduse text="/waypoints description set <waypoint> <description>">}}

### Name Color
Waypoint name colors can be changed, like so:
{{<cmduse text="/waypoints property set <waypoint> name_color <color>">}}
The command accepts any name color, like `red`, `yellow`, etc. It also accepts
hex colors with either a `0x` prefix, or `#` prefix.

## Rotating a waypoint
By default, waypoints face east, this can be changed with:
{{<cmduse text="/waypoints property set <waypoint> direction <direction>">}}
Accepts one of the following values: `east`, `west`, `south`, `north`

## Destroying a waypoint
Waypoints can be removed with a command:
{{<cmduse text="/waypoints remove <waypoint>">}}