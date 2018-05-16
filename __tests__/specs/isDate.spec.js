import isDate from 'sewing/isDate'

describe('isDate method', function () {

  it('should find the right date', function () {
    expect(isDate(Date.now())).toBe(true)
    expect(isDate(new Date())).toBe(true)

    expect(isDate(Date.now() + '')).toBe(false)
    expect(isDate(Math.random())).toBe(true)
    expect(isDate(undefined)).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate()).toBe(false)
  })
})
