import debounce from 'sewing/debounce'

describe('debounce method', function () {

  it('should debounce with default wait value', function (done) {
    let index1 = 0
    const func1 = debounce(function () { ++index1 })
    func1()
    func1()
    setTimeout(func1, 10)
    setTimeout(() => {
      expect(index1).toBe(1)
      done()
    }, 500)
  })

  it('should debounce with specific wait value', function (done) {
    let index2 = 0
    const func2 = debounce(function () { ++index2 })
    func2()
    func2()
    func2()
    func2()
    setTimeout(func2, 60)
    setTimeout(() => {
      expect(index2).toBe(2)
      done()
    }, 500)
  })
})
