---
title: "Page Files"
type: wiki
toc: true
---

Sell Shop page files are stored in `plugins/SellShop/pages/`, 
[Example file](../page-example)

## Menu Options

### `title`
**Default:** `""` (No title)  
Inventory title, only used as a display name.
  
**Examples:** 
```yml
title: "Inventory Title"
title: "Minerals"
title: "Vikings Shop"
```

### `extends`
**Default:** `""` (No extension)  
Extends another menu. Extending means this menu will copy all the items, and 
settings from the specified menu. All unchanged settings in this menu are set 
to values from the extended menu, explicitly set values are not overridden.
  
Menu names are determined by their file name (without the `.yml` suffix)
  
**Examples:**
```yml
extends: "other-menu"
extends: "generic"
```

### `template`
**Default:** `false`  
Template inventories are never registered as standalone menus, but are only
used for the purpose of being extended by another menu and are disposed after
menu loading has been completed.

**Examples:**
```yml
template: false
template: true
```

### `size`
**Default:** `1row`  

Size of the inventory, can be a number *(In which case it must be a multiple of 9
and less than 55)* or a row number.

**Examples:**
```yml
size:  9 # Can also be written as 1rows
size: 36 # Can also be written as 4rows
size: 54 # Can also be written as 6rows
size: 1rows
size: 4rows
size: 6rows # Maximum number of rows
```

### `header-item`
**Default:** `minecraft:stone`  
Item used to represent this menu. Will sit at the top of the menu as the 
'header' and will be used when navigating to this menu from another menu.

**Examples:**
```yml
header-item: "minecraft:stone"
header-item: "minecraft:golden_sword"
header-item: "minecraft:amethyst"
```

### `header-name-style`
**Default:** `yellow`
Style of the name of the `header-item`

**Examples:**
```yml
header-style: "yellow"
header-style: "red;bold"
header-style: "gray;italic;bold"
```

### `description`
**Default:** `[]` (No description)  
Description shown in the description of the `header-item`

**Examples:**
```yml
description: []
description:
  - "Line 1"
  - "Line 2"
description: ["Line 1", "Line 2"]
```

### `border`
**Default:** `true` (`minecraft:gray_stained_glass_pane`)  
Sets whether the menu has a border around the side.

**Examples:**
```yml
border: true
border: false
border: 'minecraft:stone'
border: 'minecraft:gray_stained_glass_pane'
```

### `tags`
**Default:** `[]` (No Tags)  
A list of arbitrary tags other plugins may use.

**Examples:**
```yml
tags: []
tags: ["tag1", "tag2"]
```

### `items`
**Default:** `[]` (No Items)  
List of items in the menu.
  
See the [Item Options](#item-options) section for more information.

## Item Options
When specifying an item in the [`items`](#items) array, each entry must have a
[`slot`](#slot) value.  
After a slot has been set, **one** of the following values must be used to 
specify the item's data:
- [`hardcoded`](#hardcoded)
- [`open-menu`](#open-menu)
- [`sell`](#sell)
- [`item`](#direct-item-options)

### `slot`
**Default:** None, value is required.  
Specifies the slot the item is placed at in the menu. Can be written as a 
number (Index from `0` to `53`) or as an X,Y (Column,Row) coordinate, starting 
at `0,0` (Top left)

**Examples:**
```yml
slot: 0
slot: 8
slot: '1,2' # 2nd column from the left, 3rd row from the top
slot: '0,1' # 1st column from the left, 2nd row from the top
```

### `hardcoded`
Hardcoded values for the item that will be shown and what will happen its 
clicked.  
Accepts one of the following values:
- `filter_name` - When clicked, toggles selling items that have names
- `filter_lore` - When clicked, toggles selling items that have lore
- `toggle_compact` - When clicked, toggles between selling compacted items, 
  and regular items.
- `sell_amount_1` - Changes the amount of items you sell to 1
- `sell_amount_16` - Changes the amount of items you sell to 16
- `sell_amount_64` - Changes the amount of items you sell to 64
- `sell_amount_all` - Changes the amount of items you sell to all

**Examples:**
```yml
- slot: 0,1
  hardcoded: 'filter_name'

- slot: 1,1
  hardcoded: 'sell_amount_16'
```

### `open-menu`
Opens a menu with the specified file name. Uses the specified menu's 
[`header-item`](#header-item).
  
Menu names are determined by their file name (without the `.yml` suffix)

**Examples:**
```yml
- slot: 0,1
  open-menu: "vikings"

- slot: 1,1
  open-menu: "milton"

- slot: 1,2
  open-menu: "minerals"
```

### `sell`
Sets the item in the slot to be a 'sellable' item.  

This follows a format set in the `prices/loader.yml` file, with this pattern
`<price file name>:<material>`.  

For example, assume `prices/loader.yml` has an entry named `common` and that 
entry hjas a price for `minecraft:stone`, you would reference that entry like 
so: `common:stone`

**Examples:**
```yml
- slot: 0,1
  sell: "nether:netherrack"

- slot: 1,1
  open-menu: "common:stone"

- slot: 1,2
  open-menu: "end:end_stone"
```

## Direct `item` Value
For `item` values used in the [Item Options](#item-options) section.

### `item.material` (Required)
Sets the item's type.

**Examples:**
```yml
item:
  material: "minecraft:stone"

item:
  material: "minecraft:emerald_block"
```

### `item.name` (Required)
Sets the item's name

**Examples:**
```yml
item:
  name: "Haiiii"

item:
  name: "&eWebshop"
```

### `item.lore`
Sets the item's lore  

**Examples:**
```yml
item:
  lore:
    - "Line 1"
    - "Line 2"

item:
  lore: "&7Pressing this takes you to our Webstore!"
```

### `on-click` 
Specifies a list of commands that are executed when the player clicks on this 
item.  
See [Command Placeholders](/adminwiki/commandplaceholders) for supported 
placeholders.

**Examples:**
```yml
on-click: [
  "tellraw %player Hello, world!"
]
```


### Examples
```yml
  - slot: 1,4
    item:
      material: "minecraft:stone"
      name: "Hi :3"
      lore: [ "Line 1", "Line 2" ]
    on-click: [
      "tellraw %player Hello! :)"
    ]

  - slot: 4,1
    item:
      material: "minecraft:emerald_block"
      name: "&aWebstore"
      lore: "&7Pressing this takes you to our Webstore!"
    on-click: [
      "tellraw %player &bhttps://store.arcadiusmc.net/",
      "close-menu %player"
    ]
```