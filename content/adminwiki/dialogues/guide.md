---
title: Guide
type: wiki
toc: true
---

Tutorial for creating a basic dialogue. This teaches you how to create the
Tribune Tullius NPC infront of the palace door at Latium. (Complete example at 
the end)

## Step 1: The Dialogue File

All Dialogue files have their own `.yml` file located in `/plugins/Dialogues/`.
You can check out the [`example.yml`](/adminwiki/dialogues/example1/), however 
keep in mind, the example file is stuffed with information and is meant more as 
a reference manual.
  
To start making Tribune Tullius, we first create the file for him, we'll call it
`tribune-tullius.yml` (Keep in mind the naming scheme, lower case words 
separated by dashes or underscores).  
The result's file path should be `/plugins/Dialogues/tribune-tullius.yml`.
  
## Step 2: First node

First we'll specify the greeting the dialogue is intended to show. We'll do this
like so:
```yml
greeting:
  text:
    - "Ave, citizen!"
    - "How can I help?"
    - ""
```
Let me explain what each part here does:
- `greeting` is the name of the node, you can set this to anything, I chose 
  greeting to indicate to people that might later edit this file, that this is
  the first node a player will see
- `text` is a YAML array of strings (Color codes and other chat functions are 
  allowed here) that makes up the text that will be shown to the player

Keep in mind the indentation here. YAML relies on indentation to make things 
work, so make sure you're indenting properly.

## Step 3: Entry Point

We've created a node but this alone isn't enough for the Dialogue system to know
which node to use, so we'll need to specify a `settings` section at the top of 
the file (Or at the bottom or anywhere in between, it doesn't matter where)

```yml
settings:
  entry-node: greeting
  
greeting:
  text:
    - "Ave, citizen!"
    - "How can I help?"
    - ""
```

At this point we can save the file and do `/dialogues reload` in game to be able
to use the dialogue. And then we can use `/dialogues show tribune-tullius @s` to
show the dialogue to ourselves.

[[INSERT SCREENSHOT OF NODE AT THIS POINT]]