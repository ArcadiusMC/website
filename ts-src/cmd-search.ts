const searchResults: HTMLDivElement = document.getElementById("search-results")
const searchInput: HTMLInputElement = document.getElementById("search-query")
const enableAdmin: HTMLInputElement = document.getElementById("admin-cmds")
const enableMeta: HTMLInputElement = document.getElementById("show-metadata")
const searchButton: HTMLButtonElement = document.getElementById("search-cmd-btn")

const LABEL_MATCH_WEIGHT = 10
const ALIAS_MATCH_WEIGHT = 2.5
const MAX_DIST = 3

interface CmdQuery {
  admin: boolean
  metadata: boolean
  query: string
}

interface CommandEntry {
  name: string
  aliases: string[]
  permission: string
  description: string
  category: string
  usages: Usage[]
  adminCommand?: boolean
}

interface Usage {
  arguments: string
  info: string[]
  adminUse?: boolean
}

interface SearchResult {
  entry: CommandEntry
  weight: number
}

let commandData: CommandEntry[] = []

initSearch()

function initSearch() {
  let errorState = false

  if (searchInput == null) {
    console.error("No search-input found :(")
    errorState = true
  }
  if (searchResults == null) {
    console.error("No search-results found :(")
    errorState = true
  }
  if (enableAdmin == null) {
    console.error("No admin-cmds found :(")
    errorState = true
  }
  if (enableMeta == null) {
    console.error("No show-metadata found :(")
    errorState = true
  }

  if (errorState) {
    return
  }

  fetch("/commands.json")
    .then(response => {
      if (!response.ok) {
        console.error(`Failed to fetch commands JSON: ${response.statusText}`)
        return
      }

      return response.json()
    })
    .then(json => {
      if (!(json instanceof Array)) {
        console.log("Commands JSON file was not a JSON array :(", json)
        return
      }

      commandData = json

      let urlSearch = getSearchFromUrl()
      searchInput.value = urlSearch

      performSearch({
        query: urlSearch,
        metadata: false,
        admin: false
      })
    })
  
  enableAdmin.onclick = () => onCommandSearch()
  enableMeta.onclick = () => onCommandSearch()
  searchButton.onclick = () => onCommandSearch()

  searchInput.addEventListener("keypress", event => {
    if (event.key != "Enter") {
      return
    }
    onCommandSearch()
  })
}

function getSearchFromUrl(): string {
  let params = new URLSearchParams(window.location.search)
  let param = params.get("search")

  if (param == null) {
    return ""
  }

  return param
}

function onCommandSearch() {
  searchResults.replaceChildren()

  let searchSettings = {
    admin: enableAdmin.checked,
    metadata: enableMeta.checked,
    query: searchInput.value
  }

  performSearch(searchSettings)
}

function performSearch(settings: CmdQuery): void {
  console.log("Settings", settings)

  let foundCommands = lookupCommands(settings)

  console.log("Existing commands", commandData)
  console.log("Found", foundCommands)

  renderCommands(foundCommands, settings, searchResults)
}

function renderCommands(searchResults: CommandEntry[], settings: CmdQuery, parent: HTMLDivElement): void {
  if (searchResults.length < 1) {
    parent.appendChild(document.createTextNode("Found 0 results"))
    return
  }

  parent.appendChild(document.createTextNode(`Found ${searchResults.length} results`))

  for (let index in searchResults) {
    let entry = searchResults[index]

    let div = document.createElement("div")

    let title = document.createElement("h2")
    title.textContent = `/${entry.name}`
    title.className = "mb-0"

    let hr1 = document.createElement("hr")
    hr1.style.marginBottom = "4px"

    let desc = createFieldElement("Description", entry.description)
    let aliases = createFieldElement("Aliases", entry.aliases, aliases => {
      if (aliases.length < 1) {
        return null
      }

      let aliasElem: HTMLElement = document.createElement("div")      
      aliasElem.className = "inline-block"

      aliases.forEach((alias, index) => {
        if (index != 0) {
          aliasElem.appendChild(document.createTextNode(", "))
        }

        let code = document.createElement("code")
        code.textContent = alias
        aliasElem.appendChild(code)
      })

      return aliasElem
    })
    let permission = createFieldElement("Permission", entry.permission, perm => {
      let code = document.createElement("code")
      code.textContent = perm
      return code
    })
    let category = createFieldElement("Category", entry.category)
    let isAdmin = createFieldElement("Admin Command", entry.adminCommand, b => {
      return document.createTextNode(b ? "Yes" : "No")
    })
    let uses = createUsesElement(entry, settings)

    div.appendChild(title)
    div.appendChild(hr1)

    if (desc) {
      div.appendChild(desc)
    }
    if (aliases) {
      div.appendChild(aliases)
    }
    if (permission && settings.metadata) {
      div.appendChild(permission)
    }
    if (category && settings.metadata) {
      div.appendChild(category)
    }
    if (isAdmin && settings.metadata) {
      div.appendChild(isAdmin)
    }
    if (uses) {
      div.appendChild(uses)
    }

    parent.appendChild(div)
  }
}

function createUsesElement(entry: CommandEntry, settings: CmdQuery): HTMLElement | null {
  let uses: Usage[] = entry.usages;

  // Filter out admin use cases
  if (uses && !settings.admin) {
    uses = uses.filter(value => {
      if (value.adminUse == null) {
        return true
      }
      return !value.adminUse
    })
  }

  if (uses == null || uses.length < 1) {
    return null
  }

  if (uses.length == 1) {
    let use = uses[0]

    if (use.arguments.length < 1) {
      return null
    }
  }

  let div = document.createElement("div")
  let title = document.createElement("h3")
  title.textContent = "Uses"
  title.className = "cmd-uses-header"

  //let hr = document.createElement("hr")
  //hr.className = "no-mar"

  let usesList = document.createElement("ul")

  for (let index in uses) {
    let use = uses[index]
    let listItem = document.createElement("li")

    let argPre = document.createElement("pre")
    argPre.className = "cmd-usage"
    argPre.textContent = `/${entry.name} ${use.arguments}`

    listItem.appendChild(argPre)

    for (let infoIndex in use.info) {
      let info = use.info[infoIndex]

      if (infoIndex != "0") {
        listItem.appendChild(document.createElement("br"))
      }

      listItem.appendChild(document.createTextNode(info))
    }

    usesList.appendChild(listItem)
  }

  div.appendChild(title)
  //div.appendChild(hr)
  div.appendChild(usesList)

  return div
}

function createFieldElement<T>(
  fieldName: string, 
  valueStr: T, 
  valueFactory?: (arg: T) => (Node | null)
): HTMLElement | null {
  if (fieldName == null || fieldName.length < 1 || valueStr == null) {
    return null
  }

  let valueElement: Node;

  if (valueFactory == null) {
    valueElement = document.createTextNode(valueStr.toString())
  } else {
    let temp: Node | null = valueFactory(valueStr)

    if (temp == null) {
      return null
    }

    valueElement = temp
  }

  let div = document.createElement("div")
  let b = document.createElement("b")

  b.textContent = `${fieldName}: `
  div.appendChild(b)
  div.appendChild(valueElement)

  return div
}

function lookupCommands(settings: CmdQuery): CommandEntry[] {
  if (commandData == null || !(commandData instanceof Array) || commandData.length < 1) {
    return []
  }

  let results: SearchResult[] = []

  for (let i = 0; i < commandData.length; i++) {
    let entry: CommandEntry = commandData[i]
    let result: SearchResult = { weight: 0, entry: entry }

    // If admin command, and we're not showing admin commands,
    // skip it
    if (entry.adminCommand != undefined && entry.adminCommand && !settings.admin) {
//      console.log(`Entry ${entry.name} is admin=${entry.adminCommand}`)
      continue
    }

    if (settings.query.length > 0) {
      addMatchWeight(result, settings.query, entry.name, LABEL_MATCH_WEIGHT)

      if (entry.aliases) {
        entry.aliases.forEach(alias => {
          addMatchWeight(result, settings.query, alias, ALIAS_MATCH_WEIGHT)
        })
      }

      if (result.weight < 1) {
        continue
      }
    }

    results.push(result)
  }

  results.sort((a, b) => b.weight - a.weight)
  return results.map(value => value.entry)
}

function addMatchWeight(result: SearchResult, query: string, label: string, m: number): void {
  if (query == label) {
    result.weight += query.length * m * 2
    return
  }
  if (label.indexOf(query) != -1) {
    result.weight += query.length * m * 0.5
    return
  }

  let dist = levenshteinDistance(label, query)
  if (dist > MAX_DIST) {
    return
  }
  result.weight += dist * m
}

function levenshteinDistance(s: string, t: string): number {
  if (s.length == 0) {
    return t.length;
  }

  if (t.length == 0) {
    return s.length;
  }

  const arr: number[][] = [];

  for (let i = 0; i <= t.length; i++) {
    arr[i] = [i];

    for (let j = 1; j <= s.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
            );
    }
  }

  return arr[t.length][s.length];
};