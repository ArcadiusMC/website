---
title: "Usables Scripting"
type: wiki
weight: 45
---
## General
You can use scripts with Usables with the `script_file` or `js` actions. 
And scripts can be used as conditions with the `test_script` or `js` conditions.
  
## Built in functions
Usables script have built in functions:
- `getData()`: Any user-defined data object that is persisted beyond the script's
  lifetime.
- `setData(data)`: Sets the script's persistent data, can be any JS object, 
  array or primitive.

More built in functions for accessing and modifying interaction context can be
found at [Context Values](../context).
