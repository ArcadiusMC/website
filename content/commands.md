---
title: "Command Search"
linkTitle: "Commands"
description: Command help
type: commands
---

<div class="container flex flex-row">
  <input placeholder="Enter a command" name="cmd-search" id="search-query" type="text" class="flex-grow h-10 mx-3 my-4 px-5 py-2.5 rounded-lg dark:bg-gray-600 bg-stone-700 text-black dark:text-white p-1">
  <button id="search-cmd-btn" class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
    Search
  </button>
</div>

<div class="mx-3">
  <input class="accent-gray-500" type="checkbox" name="enable-admin" id="admin-cmds">
  <label class="text-gray-500" for="enable-admin">Show Admin commands</label>
</div>

<div class="mx-3">
  <input class="accent-gray-500" type="checkbox" name="showmeta" id="show-metadata">
  <label class="text-gray-500" for="showmeta">Show command metadata</label>
</div>

<hr style="margin-top: 10px; margin-bottom: 10px;">

<div id="search-results">
</div>