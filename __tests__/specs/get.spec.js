import get from 'sewing/get'

describe('get method', function () {

  it('should get the right property', function () {
    expect(get({ person: { tom: { age: 10 } } }, 'person.tom.age', '18')).toEqual(10)
    expect(get({ person: { tom: { age: 10 } } }, 'person.tom.sex', 'male')).toEqual('male')
    expect(get({ person: null }, 'person.tom.sex', 'female')).toEqual('female')
    expect(get({ person: { tom: { sex: undefined } } }, 'person.tom.sex', 'female')).toEqual('female')
    expect(get({ person: 'tome' }, null)).toEqual(jasmine.objectContaining({ person: 'tome' }))

    expect(get(null, 'person.tom.name', 'tom')).toEqual('tom')
    expect(get('', 'person.tom.name', 'tom')).toEqual('tom')
    expect(get({}, 'person.tom.name', 'tom')).toEqual('tom')
  })
})
