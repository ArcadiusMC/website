---
title: "Price Files"
type: wiki
toc: true
---

Price files are located in `plugins/SellShop/prices/`. [Prices Example File](../prices-example)

## Loader File
The Loader file, or `loader.yml` is the file that is used to link price files 
together and tells the plugin which ones have to be loaded and what IDs they 
use.

### `sources` (Required)
A list of file names (Without the `.json` suffix) from which an entry loads 
price data.

**Examples**:
```yml
sources: ['mining','farming','mineral','mob-drops']
sources: ['latin-shop']
sources: ['pirate-shop']
```

### `global`
**Default**: false  

Determines if the prices specified in this entry are used globally. This means
(most of the time) that the prices in the file are used in the generic `/shop`.

If `global` is set to `true`, prices loaded from this entry will be used when 
calculating auto sold item prices.

**Examples**:
```yml
global: true
global: false
```

### Examples
```yml
common:
  sources: ['mining','farming','mineral','mob-drops']
  global: true

latin:
  sources: ['latin-shop']

pirate:
  sources: ['pirate-shop']
```

## Price Files
Price files are JSON files that each specify a list of item prices, along with 
other settings.

The following is a list of values that each entry in a price file list supports.

### `material` (Required)
Specifies the material of the item.

**Examples**:
```yml
"material": "minecraft:stone"
"material": "minecraft:emerald_block"
"material": "minecraft:diamond_block"
```

### `price` (Required)
The base price of the item.

**Examples**:
```yml
"price": 9
"price": 90
"price": 489
```

### `compact-multiplier` 
**Default:** `0` (Compact selling disabled)

Sets the price multiplier for selling compact variants of this item.

**Examples**:
```yml
"compact-multiplier": 9
"compact-multiplier": 4
"compact-multiplier": 2
```

### `compact-material` 
**Default:** `""` (Compact selling disabled)

Sets the material of the compact variant of this item.

**Examples**:
```yml
"compact-material": "minecraft:diamond_block"
"compact-material": "minecraft:redstone_block"
"compact-material": "minecraft:hay_block"
```

### `max-earnings`
**Default:** Defined in the plugin's config  

Sets the maximum amount of money that can be earned from selling this item.

**Examples**:
```yml
"max-earnings": 900000
"max-earnings": 400000
"max-earnings": 200000
```

### Examples
```json
[
  {
    "material": "coal",
    "price": 10,
    "compact-material": "coal_block",
    "compact-multiplier": 9
  },
  {
    "material": "emerald",
    "price": 7,
    "compact-material": "emerald_block",
    "compact-multiplier": 9,
    "max-earnings": 250000
  }
]
```