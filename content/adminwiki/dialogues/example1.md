---
title: "example.yml"
type: rawfile
---
```yml
#
# Example file of a dialogue tree
#
# Note:
#  This file was written to contain as much information as possible,
#  if you'd like to see a regular use-case example, see 'example2.yml'
#

#
# Settings applied to this dialogue tree
#
# Note:
#  Including any of these options is not required, they're all optional
#
# Note 2:
#  Settings can be specified in each node to override the file's
#  root settings
#
# - available-format (Optional):
#     Sets the format used for buttons that are available for players to 
#     click on.
#     Use '${buttonText}' as a placeholder for the button's text
#     Default: " &b&l> &b${buttonText}"
#
# - unavailable-format (Optional):
#     Sets the format used for buttons that are NOT available for players to 
#     click on.
#     Use '${buttonText}' as a placeholder for the button's text
#     Default: " &8&l> &7${buttonText}"
#
# - highlight-format (Optional):
#     Sets the format used for buttons that are NOT available for players to 
#     click on.
#     Use '${buttonText}' as a placeholder for the button's text
#     Default: " &6&l> &e${buttonText}"
#
# - prefix (Optional):
#     Text that prefixes each node when it's viewed by a player
#     Default: ""
#
# - suffix (Optional):
#     Text that's appended to the end of each node's text
#     Default: ""
#
# - entry-node (Optional):
#     Entry point for any players that are interacting with this dialogue tree
#     Defaults to an empty value, meaning there's no entry point
#
settings:
  available-format: " &b&l> &b${buttonText}"
  unavailable-format: " &8&l> &7${buttonText}"
  highlight-format: " &6&l> &e${buttonText}"
  prefix: ""
  suffix: ""
  entry-node: "name-of-a-node"

#
# Dialogue node
#
name-of-a-node:

  #
  # Sets the ${buttonText} component (shown above in the button-format)
  # that's shown for this node.
  #
  # Optional value.
  #
  prompt: "Hi, I'm a button :3"

  #
  # Over text applied over the whole prompt button.
  #
  prompt-hover: "I'm a hover text"

  #
  # Array of usables tests that are tested when a player might
  # view this node.
  #
  # If these conditions are failed, then players will not be
  # shown this node's text and anytime a button that points
  # to this node is used in another node, that button will be
  # shown as unavailable.
  #
  # You can include a 'error-message' value to override a
  # condition's error message
  #
  # Optional value.
  #
  conditions:
    - has_score: "objective=crown range=3.."

    - inventory_empty: ""
      error-message: "You've got something in your inventory :\\"

  #
  # Array of usables actions that are ran when this node is
  # viewed by a player.
  #
  # Inputs are the same as the usables 'add' commands.
  # For more info, see https://arcadiusmc.net/adminwiki/usables
  #
  # These actions are executed before any dialogue is shown
  # to the player
  #
  # Optional value.
  #
  on-view:
    - console_cmd: "kill %player"
    - player_cmd: "say aww man :("
    - script: "script/file/asda.js"
    - js: "player.health = 0"

  #
  # Buttons included at the bottom of the text displayed
  # by this node.
  #
  # Optional value.
  #
  links:
    #
    # Displays a button to another node in this file.
    # Uses the prompt set by that node.
    #
    # If the specified node doesn't have a prompt set,
    # an error will be logged.
    #
    - node: name-of-another-node

    #
    # Like the example above, except it overrides the
    # node's prompt
    #
    - node: name-of-a-third-node
      prompt: "Oh, I say!"

    #
    # References the entry-point of another dialogue tree,
    # uses that dialogue's entry-point's prompt.
    #
    # If the specified dialogue tree doesn't exist, or doesn't have
    # an entry-point, or the entry-point has no prompt, then an error
    # is logged
    #
    # You can also reference specific nodes in another dialogue tree
    # by using this format:
    # <dialogue tree name>;<node name>
    # Without the '<' and '>'
    #
    # Dialogue tree names are just the file names of the YML file where
    # the dialogue is created (minus the '.yml' suffix)
    #
    - dialogue: dialogue-name

    #
    # Same as above, but it references a node named just 'node' in a
    # dialogue tree, that's just called 'dialogue' and it overrides
    # the node's prompt
    #
    - dialogue: dialogue;node
      prompt: "Hi there :3"

  #
  # Array of text lines that makes up the actual content
  # of this node
  #
  # Optional value.
  #
  text:
    - "Line 1"
    - "Line 2"
    - "Line 3"

name-of-another-node:
  prompt: "I'm a button, click me"

  text:
    - "Thank you for clicking on me :)"
    - ""
    - "Hi"
```