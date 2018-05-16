import parseString from 'sewing/parseString'

describe('parseString method', function () {

  it('should parseString with primitive value', function () {
    expect(parseString('0')).toEqual(0)
    expect(parseString('true')).toEqual(true)
    expect(parseString('false')).toEqual(false)
    expect(parseString('string')).toEqual('string')
    expect(parseString('null')).toEqual(null)
    expect(parseString('undefined')).toEqual(undefined)
  })

  it('should parseString with non-primitive value', function () {
    expect(parseString("['1', 'tom', 2, { age: 20 }, [3, 4]]")).toEqual(['1', 'tom', 2, { age: 20 }, [3, 4]])
    expect(parseString("{ name: 'tom', age: 20, parent: { name: 'jack' } }")).toEqual({ name: 'tom', age: 20, parent: { name: 'jack' } })
  })

  it('should parseString with expr', function () {
    expect(parseString('1 + 10 * 3')).toEqual(31)
  })
})
