const stringLength = require('./stringLength')

test('returns the length of a string', () => {
  expect(stringLength('some string')).toBe(11)
})