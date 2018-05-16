import searchString2Map from 'sewing/searchString2Map'

describe('searchString2Map method', function () {

  it('should searchString2Map with primitive value', function () {
    expect(searchString2Map('?name=&age=')).toEqual({ name: undefined, age: undefined })
    expect(searchString2Map('?name=tom&age=')).toEqual({ name: 'tom', age: undefined })
    expect(searchString2Map('?name=tom&age=18&sex=male')).toEqual({ name: 'tom', age: 18, sex: 'male' })
  })

  it('should searchString2Map with non-primitive value', function () {
    expect(searchString2Map("?obj=%7Bname%3A%20'tom'%2C%20age%3A%2018%2C%20sex%3A%20'male'%7D&app=true"))
      .toEqual({ obj: { name: 'tom', age: 18, sex: 'male' }, app: true })

    expect(searchString2Map("?name=foo&list=%5B1%2C%202%2C%203%2C%20%7B%20name%3A%204%20%7D%2C%20false%2C%20'55'%5D&map=%7Bname%3A%20'tom'%2Cage%3A%2066%7D"))
      .toEqual({
        name: 'foo',
        list: [1, 2, 3, { name: 4 }, false, '55'],
        map: {
          name: 'tom',
          age: 66
        }
      })
  })
})
