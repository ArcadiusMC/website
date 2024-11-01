---
title: "Scripting"
type: "wiki"
weight: 100
---

ArcadiusMC uses the [Rhino Scripting Engine](https://github.com/mozilla/rhino) 
(+ some input pre-processing) as our JavaScript scripting engine.
  
For the most part, scripts are found inside the `ScriptingEngine` plugin's 
`scripts` directory as `.js` files

## Running Script files
Place any script files you've created inside `/plugins/ScriptingEngine/scripts/`
and then open chat, and type in the following command: `/scripts run `. All 
existing script files will be shown in the auto completions, select the script
file you wish to run and simply hit enter.
  
### Example
We have this script file, named `kill-player.js` which contains this code:
```js
let player = source.asPlayer()
player.health = 0
```
We can run this script file like so:
```txt
/scripts run kill-player.js
```

## Running Raw JavaScript
You can also run raw javascript code with the `/js` command like so:
```txt
/js let player = source.asPlayer(); player.health = 0
```
This Javascript has the same effect as the above shown example.
