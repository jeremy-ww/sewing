import removeOne from 'sewing/removeOne'

describe('removeOne method', function () {

  it('should remove item in array by item once', function () {
    const Alphabet = ['a', 'b', 'c', 'd', 'e']
    expect(removeOne(Alphabet, 'd')).toEqual('d')
    expect(Alphabet).toEqual(['a', 'b', 'c', 'e'])

    expect(removeOne(['a', 'b', 'c', 'd', 'e'], 'f')).toEqual(undefined)
    expect(removeOne(undefined, 'f')).toEqual(undefined)
  })
})
