import isEmptyObject from 'sewing/isEmptyObject'

describe('isEmptyObject method', function () {

  it('should find the empty object', function () {
    expect(isEmptyObject(undefined)).toBe(true)
    expect(isEmptyObject(null)).toBe(true)
    expect(isEmptyObject('')).toBe(true)
    expect(isEmptyObject([])).toBe(true)
    expect(isEmptyObject({})).toBe(true)
    expect(isEmptyObject()).toBe(true)

    expect(isEmptyObject(['a', 'b', 'c'])).toBe(false)
    expect(isEmptyObject({ name: 'tom' })).toBe(false)
  })
})
