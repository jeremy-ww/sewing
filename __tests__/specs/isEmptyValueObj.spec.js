import isEmptyValueObj from 'sewing/isEmptyValueObj'

describe('isEmptyValueObj method', function () {

  it('should find the empty object', function () {
    expect(isEmptyValueObj(0)).toBe(false)
    expect(isEmptyValueObj(false)).toBe(false)
    expect(isEmptyValueObj('string')).toBe(false)

    expect(isEmptyValueObj('')).toBe(true)
    expect(isEmptyValueObj(null)).toBe(true)
    expect(isEmptyValueObj(undefined)).toBe(true)
    expect(isEmptyValueObj([1, 2, 3])).toBe(false)
    expect(isEmptyValueObj([1, 2, undefined])).toBe(false)
    expect(isEmptyValueObj([1, 2, null])).toBe(false)
    expect(isEmptyValueObj({})).toBe(true)
    expect(isEmptyValueObj({ name: 'tom' })).toBe(false)

    expect(
      isEmptyValueObj({
        name: 'lee',
        age: 18,
        empty_object: [{ name: undefined }]
      })
    ).toBe(false)
    expect(
      isEmptyValueObj({
        name: 'lee',
        age: 18,
        empty_object: [{ name: undefined }]
      }, 1)
    ).toBe(true)
    expect(
      isEmptyValueObj({
        name: 'lee',
        age: 18,
        empty_object: [{ person: { name: 'lee' } }]
      }, 1)
    ).toBe(false)
  })
})
