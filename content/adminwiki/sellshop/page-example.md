---
title: "example.yml"
type: rawfile
---

```yml
#
# Example menu
#

#
# Inventory title. (Only used as a display name)
#
# Default: "" (No title)
#
title: "Example Inventory"

#
# Extends another menu. Extending means this menu will copy all the
# items, and settings from the specified menu.
#
# All unchanged settings in this menu are set to values from the extended
# menu, explicitly set values are not overridden.
#
# Menu names are determined by their file name (without the . suffix)
#
# Default: "" (No extension)
#
extends: "other-menu-name"

#
# Marks this menu as a 'template'
#
# Template inventories are never registered as standalone menus, but are only
# used for the purpose of being extended by another menu and are disposed after
# menu loading has been completed.
#
# Default: false
#
template: false

#
# Size of the inventory, can be a number (In which case it must be a multiple
# of 9 and less than 55) or a row number.
#
# Examples: 9, 18, 27, 36, 1row, 2rows, 3rows, 4rows
#
# 6rows (or 54) is the maximum allowed value.
#
# Default: 9, aka, 1row
#
size: 4rows

#
# Item type that's shown at the very top middle of the menu.
#
# Default: "minecraft:stone" lol
#
header-item: "minecraft:stone"

#
# Style of the item name of the menu header
# Default: "yellow"
#
header-name-style: "yellow"

#
# Description shown in the menu header
#
# Default: [] (Empty description)
#
description: [ "This is an example menu :)" ]

#
# Sets whether the inventory has a border around the edge slots
#
# Default: true
#
border: true

#
# A list of arbitrary tags applied to the page. Certain tags
# may be used by other plugins to provide functionality of
# some kind.
#
# For example, the arcadius-factions plugin uses the
# "faction:<insert faction name here>" tag to modify item
# prices based off of your reputation with a specific faction.
#
# Default: [] (Empty list)
#
tags:
  - "any"
  - "arbitrary"
  - "tags"

#
# List of items in this menu
#
# All items must have a 'slot' value that determines where in the
# inventory the item is located. This is an x,y value string where
# coordinates start at 0.
#
# For example, the most top left slot is 0,0 and the slot in the
# top right is 8,0.
#
# Slots here are just randomly assigned for the purpose of example
#
# Each entry, alongside the 'slot' value, must have a node value,
# this is EITHER 'hardcoded', 'open-menu', 'sell' or 'item', these
# values cannot be mixed and are mutually exclusive.
#
# Each node value will generate an item to take up the slot and
# handle click actions on their own.
#
# Default: [] (No items)
#
items:

  #
  # "hardcoded" values are, as the name suggests, items that are
  # hardcoded into the plugin.
  #
  # Possible hardcoded values:
  # - filter_name: Named items filter toggle.
  # - filter_lore: Items with lore filter toggle.
  # - toggle_compact: Toggles compact selling.
  # - sell_amount_1: Changes the amount of items you sell to 1.
  # - sell_amount_16: Changes the amount of items you sell to 16.
  # - sell_amount_64: Changes the amount of items you sell to 64.
  # - sell_amount_all: Changes the amount of items you sell to all.
  #
  - slot: 1,1
    hardcoded: "toggle_compact"

  #
  # "open-menu" opens a menu with the specified name when clicked.
  #
  # Menu names are determined by their file name (without the . suffix)
  #
  # The item used to represent the menu in this inventory is the header-item
  # of the specified inventory
  #
  - slot: 1,2
    open-menu: "other-menu-name"

  #
  # Sets the item in the slot to be a 'sellable' item.
  #
  # This follows a format set in the prices/loader.yml file, with this pattern for values:
  # <price file name>:<material>.
  #
  # For example: prices/loader.yml has an entry named 'common' and that entry has a price for
  # stone, you would reference that entry like so: "common:stone"
  #
  - slot: 1,3
    sell: "prices-file:stone"

  #
  # Direct item reference
  #
  # Values:
  # - item (Required):
  #     Specifies the item that's shown
  # - on-click (Optional):
  #     Specifies a list of commands executed when the item is clicked
  #     See https://arcadiusmc.net/adminwiki/commandplaceholders/ for
  #     supported placeholders
  #
  # item values:
  # - material (Required):
  #     Item type, eg: "minecraft:stone"
  # - name (Optional):
  #     Item name
  # - lore (Optional):
  #     Item lore list
  #
  - slot: 1,4
    item:
      material: "minecraft:stone"
      name: "Hi :3"
      lore: [ "Line 1", "Line 2" ]
    on-click: [
      "tellraw %player Hello! :)"
    ]
```