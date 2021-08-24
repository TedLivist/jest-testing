const stringLength = require('./stringLength')

test('returns the length of a string', () => {
  expect(stringLength('soring')).toBe(6)
})

test('throws error when length is less than 1', () => {
  expect(() => stringLength('')).toThrow('Less than 1 or greater than 10')
})

