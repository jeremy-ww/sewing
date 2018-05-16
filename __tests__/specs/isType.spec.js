import isType from 'sewing/isType'

describe('isType method', function () {

  it('should return object type', function () {
    expect(isType(undefined, 'undefined')).toBe(true)
    expect(isType(null, 'null')).toBe(true)
    expect(isType({}, 'object')).toBe(true)
    expect(isType('', 'string')).toBe(true)
    expect(isType([], 'ARRAY')).toBe(true)
    expect(isType(0, 'number')).toBe(true)
    expect(isType([], ['string', 'array', 'BOOLEAN'])).toBe(true)
  })
})
