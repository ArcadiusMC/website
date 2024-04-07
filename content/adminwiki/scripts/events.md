---
title: "Events"
type: "wiki"
description: "JavaScript event listeners"
---

## Examples
The following are various examples of how the events object can be used

### Simple event registration
```js
// Declare the Java type
import JoinEvent from "org.bukkit.event.player.PlayerJoinEvent"

// Register a function to list to the given event
events.register(JoinEvent, onPlayerJoin);

// Function called when event is triggered
function onPlayerJoin(event) {
  logger.info("Player {} joined the server!", event.player.getName());
}
```
### Prioritized listener registration
Please see [The Bukkit Wiki](https://bukkit.fandom.com/wiki/Event_API_Reference#:~:text=false-,Event%20Priorities,-There%20are%20six) 
for information about EventPriority.

```js
// Register a function to list to the given event with the LOWEST
// priority
events.register(PlayerJoinEvent, onPlayerJoin, "lowest");
```

### Ignoring cancelled events
This section is very similar to the past one, with simply one extra parameter
```js
// The final parameter states whether events that have been cancelled by
// other listeners that were executed before this listener, should be ignored.
// If true, cancelled events won't call the given function, if false, they will
events.register(PlayerJoinEvent, onPlayerJoin, "lowest", true);
```

## TypeScript documentation
```ts

declare const events: EventHandler

type EventCallback = (event: any) => void;

interface EventHandler {

  /**
   * Registers an event listener.
   * 
   * For information about the event priority:
   * {@link https://bukkit.fandom.com/wiki/Event_API_Reference#Event_Priorities | Bukkit Event API}
   * 
   * @param eventClass Java event class
   * @param callbackfn Event callback
   * @param ignoreCancelled 'true' to not execute the callback function if the 
   *                        event was cancelled, 'false' otherwise
   * @param priority Event listener priority
   */
  register(
    eventClass: any, 
    callbackfn: EventCallback, 
    ignoreCancelled?: boolean, 
    priority?: string
  ): void;

  /**
   * Unregisters all listeners registered by the script
   */
  unregisterAll(): void;

  /**
   * Unregisters all listeners from the specified event class
   * @param eventClass Java Event class
   */
  unregisterFrom(eventClass: any): void;
}
```