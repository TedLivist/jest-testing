const capitalize = (str) => {
  let firstLetter = str[0]
  let otherLetters = ""
  for (let i = 1; i < str.length; i++) {
    otherLetters += str[i].toLowerCase()
  }
  return firstLetter.toUpperCase() + otherLetters
}

module.exports = capitalize