import isEncodedString from 'sewing/isEncodedString'

describe('isEncodedString method', function () {

  it('should isEncodedString work well', function () {
    expect(isEncodedString('name=tom&age=29')).toEqual(false)
    expect(isEncodedString('person=name%3Dtom%26age%3D29')).toEqual('person=name=tom&age=29')
  })
})
