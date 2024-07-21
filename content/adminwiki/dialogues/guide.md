---
title: Guide
type: techdocs
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

{{<wikiimg src="/images/adminwiki/dia_1.png">}}

Perfect!
  
## Step 4: Shop list Button
Now, we need Tribune Tullius to be able to open up a list of available player
shop in Latium for you, but only if you're a latin yourself.
  
This means we'll need to create a node in the dialogue file and use both 
`on-view` actions and `conditions`.
  
We'll call this node `shop-list`

Which we create like so:
```yml
shop-list:
  on-view:
    - console_cmd: "open-market-list latins %player"
  
  conditions:
    - is_faction_member: latins
      error-message: "&cI'm sorry, only fellow citizens are allowed to see that."
```
`on-view` specifies a list of actions of various types to be executed when a 
player opens this dialogue node, but those actions won't be ran unless all 
conditions pass.  
  
We specified that the only condition is that the player must be a latins faction
member, we also specified an error message (Because the default one is boring)

Now we'll quickly set a prompt button text like so:
```yml
shop-list:
  prompt: "Show me the shop list."
  prompt-hover: "Opens the shop list."
```
And then link it to the main greeting node like so:
```yml
greeting:
  text:
    - "Ave, citizen!"
    - "How can I help?"
    - ""
  
  links:
    - node: shop-list
```
Now we save it again and check it ingame:

{{<wikiimg src="/images/adminwiki/dia_2.png">}}

This is starting to get cramped though, let's add an empty line before and after
the text. We do that by adding a `prefix` and `suffix` value to the `settings`.
We should also say the name of the NPC there as well.
```yml
settings:
  entry-node: greeting
  prefix: "\n&6[Tribune Tullius]:\n"
  suffix: "\n
```
{{<wikiimg src="/images/adminwiki/dia_3.png">}}
Much better!

{{<wikiimg src="/images/adminwiki/dia_4.png">}}
The faction condition works! (I was a pirate)

{{<wikiimg src="/images/adminwiki/dia_5.png">}}
And it works when I'm a latin too!

## Step 5: Debts Repayment
The Debts button relies on scripts that are beyond the scope of this guide, but
the debts node is written like this:
```yml
debts:
  prompt: "Repay debts."
  conditions:
    - script_file: debts/has_debt
  on-view:
    - script_file: debts/pay
```
Add it to the greeting's links as well:
```yml
  links:
    - node: shop-list
    - node: debts
```

## Step 6: Becoming a latin info
This is a simple node that just tells the player to head inside the palacee to
become a latin. But it does require a check to see if you're not already a 
latin.
```yml
become-latin:
  prompt: "How do I become a latin?"

  conditions:
   - not: is_faction_member latins
     error-message: "&cYou're already a latin haha!"

  text:
    - "Head inside and talk to &6[Magistrate Marius]&r,"
    - "he'll help you out with that."
```
Add it to the greeting's links as well:
```yml
  links:
    - node: shop-list
    - node: become-latin
    - node: debts
```

## Step 7: Triggering the dialogue when you interact with an entity
This step involves using the Usables system, it is just one command through.
Walk up to the entity you wish to make interactable and type in 
`/usableentity ` and let it auto complete the entity's UUID, like so:

{{<wikiimg src="/images/adminwiki/dia_6.png">}}
Then, after the UUID, type in `actions add dialogue tribune-tullius` and that's 
it! Now you can right click the entity to use the dialogue.  
In my case the command becomes

{{<cmduse text="/usableentity 796080ee-2724-4f21-bca7-62be937dcd95 actions add dialogue tribune-tullius">}}