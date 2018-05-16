import insert from 'sewing/insert'

describe('insert method', function () {

  it('should insert item into target', function () {
    expect(insert(['a', 'b', 'c'], 0, 'TEST')).toContain('TEST')
    expect(insert(['a', 'b', 'c'], 0, { foo: true })[0]).toEqual({ foo: true })
    expect(insert('123456', 4, 'TEST')).toContain('1234TEST56')
    expect(insert('object in string', 4, { foo: true })).toContain('{"foo":true}')

    expect(insert(undefined, 0, 'foo')).toBeUndefined()
    expect(insert(null, 0, 'foo')).toBeNull()
  })
})
