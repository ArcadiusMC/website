---
title: Reference
type: wiki
toc: true
---

Reference page for dialogue information.

## General Settings
---
### `available-format` (Optional)
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
**Default**: ` &8&l> &7${buttonText}`  
**Description**: Optional setting that determines the format used for 
unavailable buttons in a dialogue.  
  
Use `${buttonText}` placeholder for the actual text the button will show.

#### Examples
```yml
unavailable-format: " &8&l> &7${buttonText}"
```

### `highlight-format` (Optional)
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
**Default**: "" (Empty text)  
**Description**: Optional text that is appended onto the end of each node's text
and error messages.

#### Examples
```yml
suffix: ""
suffix: "\n"
suffix: "\n${border:35}"
```

## Dialogue Settings
---
Includes all options from the **General Settings** as well as one extra setting.

### `entry-node` (Optional)
**Default**: "" (No node name)  
**Description**: Sets the name of the node that players will first see when 
interacting with the node.
  
Generally, you'll want to name this node something 'greet', 'greeting', 'enter'
or 'main'.
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
See the **General Settings** sections, values set here override values set in 
the dialogue root.

### `prompt` (Optional)
**Default**: "" (Empty text)
**Description**: Text that will be used to display this node in another node.

### `prompt-hover` (Optional)

### `text` (Optional)
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

### `on-view` (Conditional)

## Links

### `node` or `dialogue`

### `prompt` (Optional)

### `prompt-hover` (Optional)

### `button-type` (Optional)