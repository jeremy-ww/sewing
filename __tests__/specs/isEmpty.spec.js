import isEmpty from 'sewing/isEmpty'

describe('isEmpty method', function () {

  it('should find the empty target', function () {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(0)).toBe(false)

    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ name: '' })).toBe(false)
    expect(isEmpty([1, 2, 3])).toBe(false)
  })
})
