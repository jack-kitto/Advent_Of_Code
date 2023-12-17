const ONE = 'one'
const TWO = 'two'
const THREE = 'three'
const FOUR = 'four'
const FIVE = 'five'
const SIX = 'six'
const SEVEN = 'seven'
const EIGHT = 'eight'
const NINE = 'nine'
const number_words = [ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE]

export const day1 = (input) => {
  const items = input.split("\n")
  console.log(items)
  const results = items.map((item) => {
    let string = item
    const words_to_replace = number_words.filter((word) => string.includes(word))
    const map = words_to_replace.map((word, index) => ({ word_index: index, start_pos: string.split(word)[0].length - 1 }))
    map.forEach((item) => {
      if (string.includes(number_words[item.word_index])) {
        string = string.replace(number_words[item.word_index], item.word_index + 1)
      }
    })
    console.log(string)
    const nums = []
    for (let i = 0; i < string.length; i++) {
      if (isNumber(string[i])) nums.push(string[i])
    }
    return [nums[0], nums[nums.length - 1]].join("")
  })
  console.log(results.filter((item) => item.length > 0).reduce((acc, curr) => parseInt(acc) + parseInt(curr)))
}

const isNumber = (char) => {
  return char >= '0' && char <= '9'
}


