const reverseString = (str) => {
  const reversedArray = []
  for (let i = 0; i < str.length; i++) {
    reversedArray.unshift(str[i])
  }
  return reversedArray.join('')
}

module.exports = reverseString