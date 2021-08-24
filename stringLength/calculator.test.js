const { add, subtract, multiply, divide } = require('./calculator')

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

describe('multiple function', () => {
  test('multiplies 2 numbers', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  test('multplies 5 numbers', () => {
    expect(multiply(1, 2, 3, 4, 5)).toBe(120)
  })

  test('multiplies 3 numbers', () => {
    expect(multiply(1, 2, 3)).toBe(6)
  })
})

describe('divide function', () => {
  test('correctly divides two numbers', () => {
    expect(divide(21, 3)).toBe(7)
  })

  test('returns Not-A-Number if one of the arguments is a string', () => {
    expect(divide('str', 2)).toBe(NaN)
  })

  test('returns 0 when zero is the numerator', () => {
    expect(divide(0, 2)).toBe(0)
  })
})