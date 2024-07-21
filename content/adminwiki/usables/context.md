---
title: "Context Values"
type: techdocs
weight: 40
toc: true
---

Context values are contextual values that you'll most likely only interact with
when writing scripts.

## Accessing (via script functions)
Context values can be accessed and changed with the following script functions:

| Function | Description | Return Type |
|--|--|--|
|`getContextValue(name)`|Gets a context value, or `null` if the value is  not set.|`any`|
|`requireContextValue(name)`| Gets a context value, or throws an error if the value is not present.|`any`|
|`listContextValues()`|Gets an array of context value names.|`string[]`|
|`setContextValue(name, value)`|Sets the value of a context entry.|`void`|
|`hasContextValue(name)`|Tests if a context value is present.|`boolean`|

## Context Values
<table>
  <thead>
    <tr class="bg-black bg-opacity-25">
      <th>Value</th>
      <th>Description</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <!-- Global -->
    <tr class="bg-black bg-opacity-15">
      <td colspan="3">General values</td>
    </tr>
    <tr>
      <td><code>"player"</code></td>
      <td>The player interacting with the usable</td>
      <td><a href="https://jd.papermc.io/paper/1.21/org/bukkit/entity/Player.html">org.bukkit.entity.Player</a></td>
    </tr>
    <tr>
      <td><code>"silent"</code></td>
      <td>Silence state. Determines if the usable sends error messages or announces commands.</td>
      <td>boolean</td>
    </tr>
    <!-- Blocks and entities -->
    <tr class="bg-black bg-opacity-15">
      <td colspan="3">Block and Entity Values</td>
    </tr>
    <tr>
      <td><code>"location"</code></td>
      <td>Location of the usable.</td>
      <td><a href="https://jd.papermc.io/paper/1.21/org/bukkit/Location.html">Location</a></td>
    </tr>
    <tr>
      <td><code>"world"</code></td>
      <td>World the usable is in.</td>
      <td><a href="https://jd.papermc.io/paper/1.21/org/bukkit/World.html">World</a></td>
    </tr>
    <tr>
      <td><code>"cancel_vanilla"</code></td>
      <td>Vanilla interaction cancellation state.</td>
      <td>string, one of: <code>"true"</code>, <code>"false"</code>, <code>"if_tests_fail"</code>, <code>"if_tests_succeed"</code></td>
    </tr>
    <tr>
      <td><code>"hand"</code></td>
      <td>Interaction hand.</td>
      <td>string, one of: <code>"hand"</code>, <code>"off_hand"</code></td>
    </tr>
    <!-- Blocks -->
    <tr class="bg-black bg-opacity-15">
      <td colspan="3">Block specific Values</td>
    </tr>
    <tr>
      <td><code>"block"</code></td>
      <td>Bukkit Block.</td>
      <td><a href="https://jd.papermc.io/paper/1.21/org/bukkit/block/Block.html">Block</a></td>
    </tr>
    <tr>
      <td><code>"useBlock"</code></td>
      <td>Sets if the block the player clicked on will be used.</td>
      <td>string, one of: <code>"allow"</code>, <code>"deny"</code>, <code>"default"</code></td>
    </tr>
    <tr>
      <td><code>"useItem"</code></td>
      <td>Sets if the item the player is holding will be used.</td>
      <td>string, one of: <code>"allow"</code>, <code>"deny"</code>, <code>"default"</code></td>
    </tr>
    <!-- Entities -->
    <tr class="bg-black bg-opacity-15">
      <td colspan="3">Entity specific Values</td>
    </tr>
    <tr>
      <td><code>"entity"</code></td>
      <td>Bukkit Entity.</td>
      <td><a href="https://jd.papermc.io/paper/1.21/org/bukkit/entity/Entity.html">Entity</a></td>
    </tr>
    <!-- Items -->
    <tr class="bg-black bg-opacity-15">
      <td colspan="3">Item specific Values</td>
    </tr>
    <tr>
      <td><code>"item"</code></td>
      <td>Bukkit ItemStack.</td>
      <td><a href="https://jd.papermc.io/paper/1.21/org/bukkit/inventory/ItemStack.html">ItemStack</a></td>
    </tr>
    <tr>
      <td><code>"useBlock"</code></td>
      <td>Sets if the block the player clicked on will be used.</td>
      <td>string, one of: <code>"allow"</code>, <code>"deny"</code>, <code>"default"</code></td>
    </tr>
    <tr>
      <td><code>"useItem"</code></td>
      <td>Sets if the item the player is holding will be used.</td>
      <td>string, one of: <code>"allow"</code>, <code>"deny"</code>, <code>"default"</code></td>
    </tr>
    <!-- Items -->
    <tr class="bg-black bg-opacity-15">
      <td colspan="3">Area Trigger specific Values</td>
    </tr>
    <tr>
      <td><code>"area"</code></td>
      <td>The area the trigger represents.</td>
      <td>WorldBounds3i</td>
    </tr>
    <tr>
      <td><code>"triggerName"</code></td>
      <td>The name of the trigger.</td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>"location"</code></td>
      <td>Center of the trigger.</td>
      <td><a href="https://jd.papermc.io/paper/1.21/org/bukkit/Location.html">Location</a></td>
    </tr>
    <tr>
      <td><code>"world"</code></td>
      <td>World the trigger is in.</td>
      <td><a href="https://jd.papermc.io/paper/1.21/org/bukkit/World.html">World</a></td>
    </tr>
    <tr>
      <td><code>"regionAction"</code></td>
      <td>Action that triggered the interaction.</td>
      <td>string, one of: <code>enter</code>, <code>exit</code>, <code>move_inside</code></td>
    </tr>
  </tbody>
</table>