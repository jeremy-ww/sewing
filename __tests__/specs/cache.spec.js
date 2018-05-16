import cache from 'sewing/cache'

let count = 0

const cachedToUpperCase = cache(function (str) {
  ++count
  return str.toUpperCase()
})

const cachedFunctionWithParam = cache(function (str, fn) {
  return fn(str)
})

const map = {
  name: 'tom',
  count: 0,
  cachedToUpperCase: cache(function () {
    ++this.count
    return this.name.toUpperCase()
  })
}

describe('cache method', function () {

  it('should cache function result', function () {
    expect(count).toEqual(0)
    expect(cachedToUpperCase('a')).toEqual('A')
    expect(count).toEqual(1)
    expect(cachedToUpperCase('a')).toEqual('A')
    expect(count).toEqual(1)

    expect(cachedFunctionWithParam('figure', str => str.big())).toEqual('<big>figure</big>')
    expect(cachedFunctionWithParam('figure', str => str.small())).toEqual('<big>figure</big>')

    expect(map.cachedToUpperCase()).toEqual('TOM')
    expect(map.count).toEqual(1)
    expect(map.cachedToUpperCase()).toEqual('TOM')
    expect(map.count).toEqual(1)

    map.name = 'mary'
    expect(map.cachedToUpperCase()).toEqual('TOM')
    expect(map.count).toEqual(1)
    expect(map.cachedToUpperCase(Math.random())).toEqual('MARY')
    expect(map.count).toEqual(2)
  })
})
