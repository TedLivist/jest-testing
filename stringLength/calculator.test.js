const { add, subtract } = require('./calculator')

describe('add function', () => {
  test('adds 2 numbers', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('adds 3 numbers', () => {
    expect(add(1, 2, 3)).toBe(6)
  })

  test('adds 6 numbers', () => {
    expect(add(1, 2, 3, 5, 6, 10)).toBe(27)
  })
})

describe('subtract function', () => {
  test('returns negative number for subtracting from lower number', () => {
    expect(subtract(1, 2)).toBe(-1)
  })

  test('returns positive for subtracting from higher number', () => {
    expect(subtract(2, 1)).toBe(1)
  })

  test('returns NaN when one argument is a string', () => {
    expect(subtract('sww', 2)).toBe(NaN)
  })
})