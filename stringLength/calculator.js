const add = (...args) => {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    sum += args[i]
  }
  return sum
}

const subtract = (a, b) => {
  return a - b
}

const multiply = (...args) => {
  let result = args.reduce((a, b) => a * b)
  return result
}

module.exports = { add, subtract, multiply }