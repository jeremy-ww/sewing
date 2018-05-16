import isPrimitive from 'sewing/isPrimitive'

describe('isPrimitive method', function () {

  it('should detect primitive value', function () {
    expect(isPrimitive(null)).toBe(true)
    expect(isPrimitive('tom')).toBe(true)
    expect(isPrimitive(Symbol(12345))).toBe(true)
    expect(isPrimitive({})).toBe(false)
    expect(isPrimitive([])).toBe(false)
    expect(isPrimitive(function () { })).toBe(false)
  })
})
