import isEmptyValueObj from 'sewing/isEmptyValueObj'

describe('isEmptyValueObj method', function () {

  it('should find the empty object', function () {
    expect(isEmptyValueObj({ name: '', age: 0 })).toBe(true)
    expect(isEmptyValueObj(null)).toBe(true)
    expect(isEmptyValueObj({})).toBe(true)

    expect(isEmptyValueObj({ name: 'tom', age: 0 })).toBe(false)
  })
})
