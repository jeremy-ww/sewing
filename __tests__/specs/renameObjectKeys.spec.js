import renameObjectKeys from 'sewing/renameObjectKeys'

describe('renameObjectKeys method', function () {

  it('should rename object keys', function () {
    expect(renameObjectKeys({ name: 'male' }, { name: 'sex' }))
      .toEqual(jasmine.objectContaining({ sex: 'male' }))

    expect(Object.keys(renameObjectKeys({ name: 'male' }, { name: 'sex' })))
      .not.toContain('name')

    expect(renameObjectKeys({ name: 'male', education: '18' }, { name: 'sex', education: 'age' }))
      .toEqual(jasmine.objectContaining({ sex: 'male', age: '18' }))

    expect(renameObjectKeys({ name: 'tom' }))
      .toEqual(jasmine.objectContaining({ name: 'tom' }))

    expect(Object.keys(renameObjectKeys()).length).toBe(0)
  })
})
