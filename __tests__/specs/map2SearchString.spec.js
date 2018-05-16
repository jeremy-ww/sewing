import map2SearchString from 'sewing/map2SearchString'

describe('map2SearchString method', function () {

  it('should map2SearchString work well', function () {
    expect(map2SearchString({ foo: null, bar: undefined }))
      .toBe('?foo=null&bar=undefined')

    expect(map2SearchString({ regexp: /\d+/g, blank: 'foo bar' }))
      .toBe('?regexp=%2F%5Cd%2B%2Fg&blank=foo%20bar')

    expect(map2SearchString({ func () { return 'hello world' } }))
      .toBe("?func=function%20func()%20%7B%0A%20%20%20%20%20%20%20%20return%20'hello%20world'%3B%0A%20%20%20%20%20%20%7D")

    expect(map2SearchString({ name: 'tom', age: 20 }))
      .toBe('?name=tom&age=20')

    expect(map2SearchString({ array: [1, 2, 3, 4], map: { foo: true, bar: -1 } }))
      .toBe('?array=%5B1%2C2%2C3%2C4%5D&map=%7B%22foo%22%3Atrue%2C%22bar%22%3A-1%7D')
  })
})
