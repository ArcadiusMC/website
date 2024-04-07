---
title: "Block Usables"
type: "wiki"
---

Block usables are usables attached to block entities, they are triggered when 
you right click the block in question. Other interactions such as breaking, 
damaging or walking over a block (in the case of pressure plates) are not 
supported.

## Creating a usable block
To create a usable block you simply have to add an action or condition to a 
specified block.
  
For this example, we'll add a simple `show_text` action to a chest that'll tell
a player "Hello, &lt;player name&gt;!". First we look at a block we wish to add 
the action to and type in `/usableblock `. If you're then standing close enough
to the block, you'll see the block's coordinates in the auto completions like 
this:
<img src="/images/adminwiki/usableblock-autocomplete.png" class="rounded-lg">

Then we complete the command like so: 
```txt
/usableblock -44 47 104 actions add show_text Hello, ${player}!
```
If done correctly, you should something like this:
<img src="/images/adminwiki/usableblock-success.png" class="rounded-lg">

To see if it worked, Right-Click the chest!  
Oh no! Right-Clicking the chest causes it to open. To prevent vanilla block
behavior, we use this command:
```txt
/usableblock -44 47 104 cancel-interaction true
```
  
If that command was run correctly, you should see this:
<img src="/images/adminwiki/ub-ci.png" class="rounded-lg">


Now when we Right-Click the block we should see something like this, with your
own name instead of mine.
<img src="/images/adminwiki/ub-end.png" class="rounded-lg">