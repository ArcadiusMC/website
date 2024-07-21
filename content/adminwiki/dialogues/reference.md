---
title: Reference
type: techdocs
toc: true
---

Reference page for dialogue information.

## General Settings
---
### `available-format` (Optional)
---
**Default**: ` &b&l> &b${buttonText}`  
**Description**: Optional setting that determines the format used for available 
buttons in a dialogue.  
  
Use `${buttonText}` placeholder for the actual text the button will show.

#### Examples
```yml
available-format: " &b&l> &b${buttonText}"
available-format: "&b[${buttonText}]"
available-format: "${buttonText}"
```

### `unavailable-format` (Optional)
---
**Default**: ` &8&l> &7${buttonText}`  
**Description**: Optional setting that determines the format used for 
unavailable buttons in a dialogue.  
  
Use `${buttonText}` placeholder for the actual text the button will show.

#### Examples
```yml
unavailable-format: " &8&l> &7${buttonText}"
```

### `highlight-format` (Optional)
---
**Default**: ` &8&l> &7${buttonText}`  
**Description**: Optional setting that determines the format used for 
highlighted buttons in a dialogue.  
  
Use `${buttonText}` placeholder for the actual text the button will show.  
  
To see how to make buttons highlighted, see the **Links** sections.
#### Examples
```yml
highlight-format: " &6&l> &e${buttonText}"
```

### `prefix` (Optional)
---
**Default**: "" (Empty text)  
**Description**: Optional text that prefixes each node's text and error 
messages.

#### Examples
```yml
prefix: "\n&6[Magistrate Marius]:\n"
prefix: ""
prefix: "${border:35}\n"
```

### `suffix` (Optional)
---
**Default**: "" (Empty text)  
**Description**: Optional text that is appended onto the end of each node's text
and error messages.

#### Examples
```yml
suffix: ""
suffix: "\n"
suffix: "\n${border:35}"
```

### `talk-sound` (Optional)
---
**Default**: None, no sound is played  
**Description**: Plays a sound when a player interacts with a node.

#### Examples
```yml
talk-sound: "arcadiusmc:dialogue_chatter"
talk-sound: none
```

## Dialogue Settings
---
Includes all options from the **General Settings** as well as one extra setting.

### `entry-node` (Optional)
---
**Default**: "" (No node name)  
**Description**: Sets the name of the node that players will first see when 
interacting with the node.
  
Generally, you'll want to name this node something `greet`, `greeting`, `enter`
or `main`.
#### Examples
```yml
entry-node: greet
entry-node: greeting
entry-node: ""
entry-node: main
```

## Nodes
---
### `settings` (Optional)
---
See the **General Settings** sections, values set here override values set in 
the dialogue root.

### `prompt` (Optional)
---
**Default**: "" (Empty text)  
**Description**: Button text that will allow players to click on this node.  

#### Examples
```yml
prompt: "That sounds good, where can I learn more?"
prompt: "Give me money!"
```
  
### `prompt-hover` (Optional)
---
**Default**: "" (Empty text)  
**Description**: Hover text applied to the `prompt` text.  

#### Examples
```yml
prompt-hover: "Starts the [Totally exciting quest] questline."
prompt-hover: "Try to ask the man for money, you doubt it'll go well."
```

### `text` (Optional)
---
**Default**: [] (Empty list)  
**Description**: A list of text lines that will be shown to the player when the
node is interacted with.

#### Examples
```yml
text:
  - "Line 1"
  - "Line 2"

text:
  - "Ave! Would you like to be come a latin?"
  - ""

text: []
```

### `links` (Optional)
---
**Default**: [] (Empty list)  
**Description**: A list of links to other dialogues or nodes. See the **Links**
section below for more information.

#### Examples
```yml
links:
  - node: join_button

  - node: leave_button
    prompt: "Click to leave"
    
  - dialogue: "tribune_tullius"
    button-type: highlight
```

### `conditions` (Optional)
---
**Default**: (No conditions)  
**Description**: Specifies a list of conditions to be checked in order for a
player to be allowed to view a node. If a player fails these condtiions, they
will not be shown any of the node's text and none of the `on-view` actions are
executed.
  
Conditions are a list of usables conditions, see the [Usables](../../usables/) for
more info.

#### Examples
```yml
# 
# This requires players to have all the items that are in the container 
# pointed to by the first condition as well as needing to have 50,000 
# Denarii.
# 
conditions:
  - has_items: "#container world=void x=13 y=43 z=53"
  - has_balances: "50000"
```

### `on-view` (Optional)
---
**Default**: (No actions)  
**Description**: A list of Usables actions executed when the player opens the
node.  
This is a usables actions list, so see the [Usables](../../usables) for more 
info.

#### Examples
```yml
on-view:
  - take_items: "#container world=void x=13 y=43 z=53"
  - remove_balances: "50000"
```

## Links
---
### `node` or `dialogue`
---
**Description**: Sets what the link is pointing to: either another node in the
same dialogue file, or to an external dialogue.
  
Notes: 
- You cannot use both dialogue and node in the same link.
- You can reference specific nodes in other dialogues by adding a `;` after
  the dialogue name, followed by the node name, eg: `dialogue;node`

#### Examples
```yml
node: node-name
dialogue: dialogue-name
dialogue: dialogue-name;specific-node
```

### `prompt` (Optional)
---
**Default**: (None, uses the link target's prompt text)  
**Description**: Overrides the link's prompt text. Same as the 
[`prompt` (Optional)](#prompt-optional) above.

### `prompt-hover` (Optional)
---
**Default**: (None, uses the link target's prompt hover value)  
**Description**: Overrides the link target's prompt hover text.

### `button-type` (Optional)
---
**Default**: `default`  
**Description**: Sets the button type to display the link target as.
  
Note that if you use the `regular` or `highlighted` types then the button may
still be displayed as `unavailable` if the interacting player fails any 
conditions attached to the link target.
  
Possible values:
- `regular`: Displayed using the `available-format` setting.
- `highlighted`: Displayed using the `highlight-format` setting.
- `unavailable`: Displayed using the `unavailable-format` setting.
#### Examples
```yml
button-type: regular
button-type: highlighted
button-type: unavailable
```
---