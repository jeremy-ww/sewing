import inRange from 'sewing/inRange'

describe('inRange method', function () {

  it('should in the range', function () {
    expect(inRange(1, 3, 5)).toEqual(false)
    expect(inRange(7, 3, 7)).toEqual(true)
    expect(inRange(10, 9)).toEqual(true)
    expect(inRange(0)).toEqual(true)

    expect(inRange(1, undefined, 100)).toEqual(true)
    expect(inRange(1, '', -100)).toEqual(false)
    expect(inRange('', '', '')).toEqual(true)
    expect(inRange('', '')).toEqual(true)
    expect(inRange(false)).toEqual(true)
    expect(inRange()).toEqual(false)
  })
})
