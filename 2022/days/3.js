const getArrOfLines = (input) => {
  return input.split('\n').filter((line) => line !== '')
}

const getPriority = (item) => {
  if (item.length !== 1) return 0
  if (!item.match(/[a-z]/i)) return 0
  if (item.match(/[a-z]/)) return item.charCodeAt(0) - 96
  return item.charCodeAt(0) - 64 + 26
}

const getCommonItemsFromRucksack = (rucksack) => {
  if (!Array.isArray(rucksack)) return 'error'
  if (rucksack.length != 2) return 'error'
  const arrOfCompartmentAItems = rucksack[0].split('').filter((item) => item != '')
  const arrOfCompartmentBItems = rucksack[1].split('').filter((item) => item != '')
  let commonItem = ''
  arrOfCompartmentAItems.forEach((item) => {
    if (arrOfCompartmentBItems.includes(item)) return commonItem = item
  })
  return commonItem
}

const getCompartments = (line) => {
  if (line.length % 2 !== 0) return null
  if (line.match(/[^a-z]/i)) return null
  let compartmentA = line.substring(0, line.length / 2)
  let compartmentB = line.substring(line.length / 2, line.length)
  return [compartmentA, compartmentB]
}

const onError = (msg) => {
  console.error("ERROR: ", msg)
}

const Part1 = (input) => {
  console.log('Part 1')
  const arrOfLines = getArrOfLines(input)
  let index = 0
  let total = 0
  let endIndex = arrOfLines.length - 1
  const getLine = () => arrOfLines[index]
  const next = () => index++
  while (index <= endIndex) {
    const line = getLine()
    if (!line) return onError("cannot get line")
    const rucksack = getCompartments(line)
    if (!rucksack) return onError("cannot get rucksack")
    const item = getCommonItemsFromRucksack(rucksack)
    if (!item) return onError("cannot get common item")
    const priority = getPriority(item)
    if (!priority) return onError("cannot get priority")
    total += priority
    next()
  }
  console.log("                           ")
  console.log("Total: ", total)
  console.log("---------------------------")

}

const getBadgeInGroup = (group) => {
  if (!Array.isArray(group)) return null
  if (group.some(line => line.match(/[^a-z]/i))) return null
  if (group.length < 2) return null
  const LEN = group.length
  const charGroup = group.map(line => line.split('').filter((item) => item !== ''))
  for (let i = 0; i < charGroup[0].length; i++) {
    const char = charGroup[0][i]
    let isBadge = true
    for (let j = 1; j < LEN; j++) {
      if (!charGroup[j].includes(char)) isBadge = false
    }
    if (isBadge) return char
  }
}

const Part2 = (input) => {
  console.log('Part 2')
  const arrOfLines = getArrOfLines(input)
  const GROUP_LENGTH = 3
  let index = 0
  let total = 0
  let endIndex = arrOfLines.length - 1
  const getLinesInGroup = () => {
    let lines = []
    for (let i = 0; i < GROUP_LENGTH; i++) {
      lines.push(arrOfLines[index + i])
    }
    return lines
  }
  const next = () => index += GROUP_LENGTH
  while (index <= endIndex) {
    const lines = getLinesInGroup()
    const badge = getBadgeInGroup(lines)
    total += getPriority(badge)
    next()
  }
  console.log("                           ")
  console.log("Total: ", total)
  console.log("---------------------------")


}

export const day3 = (input) => {
  console.log("----------------------- Day 3 --------------------------")
  Part1(input)
  Part2(input)
}
