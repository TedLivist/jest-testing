const stringLength = (str) => {
  if (str.length > 1 && str.length < 10) {
    return str.length
  } else {
    throw new Error('Less than 1 or greater than 10')
  }
}

module.exports = stringLength