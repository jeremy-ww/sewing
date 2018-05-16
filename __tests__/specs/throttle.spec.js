import throttle from 'sewing/throttle'

describe('throttle method', function () {

  it('should throttle work well', function (done) {
    let index1 = 0
    const func1 = throttle(function () { ++index1 }, 20)
    func1()
    func1()
    func1()
    setTimeout(() => {
      expect(index1).toBe(1)
      done()
    }, 500)
  })

  it('should throttle with specific wait value', function (done) {
    let index2 = 0
    const func2 = throttle(function () { ++index2 }, 20)
    func2()
    func2()
    setTimeout(func2, 60)
    func2()
    func2()
    setTimeout(() => {
      expect(index2).toBe(2)
      done()
    }, 500)
  })
})
