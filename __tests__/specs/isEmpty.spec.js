import isEmpty from 'sewing/isEmpty'

describe('isEmpty method', function () {

  it('should find the empty target', function () {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('')).toBe(true)

    expect(isEmpty(0)).toBe(false)
    expect(isEmpty({})).toBe(false)
  })
})
