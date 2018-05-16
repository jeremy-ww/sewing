import clone from 'sewing/clone'

describe('clone method', function () {

  it('should clone with primitive value', function () {
    expect(clone(1)).toBe(1)
    expect(clone('')).toBe('')
    expect(clone(false)).toBe(false)
    expect(clone(null)).toBe(null)
    expect(clone(undefined)).toBe(undefined)

    const symbol = Symbol('')
    expect(clone(symbol)).toBe(symbol)
  })

  it('should clone with object', function () {
    expect(clone({ name: 'tom', range: [60, 80, 75] })).toEqual({ name: 'tom', range: [60, 80, 75] })

    const obj1 = { name: 'tom', range: [60, 80, 75] }
    const cloneObj1 = clone(obj1)
    expect(cloneObj1).toEqual(obj1)

    Object.assign(obj1, { name: 'mary', range: [0, 0, 0] })
    expect(cloneObj1.range).toEqual([60, 80, 75])
    expect(cloneObj1.name).toBe('tom')

    const obj2 = { date: new Date(), regexp: new RegExp('d+', 'g'), call: function () { return 'sewing' } }
    const cloneObj2 = clone(obj2)
    expect(cloneObj2.call()).toEqual(obj2.call())
    expect(cloneObj2.date).toEqual(jasmine.any(Date))
    expect(cloneObj2.regexp).toEqual(jasmine.any(RegExp))

    const obj3 = {
      range: 10,
      setRange () {
        console.log(++this.range)
      }
    }
    const cloneObj3 = clone(obj3)
    cloneObj3.setRange()
    expect(cloneObj3.range).toBe(11)
    expect(obj3.range).toBe(10)
  })
})
