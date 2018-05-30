import parse from 'sewing/parseJSONString'

describe('parseJSONString method', function () {

  it('should parse work well', function () {
    expect(parse("{\"author\":\"\",\"datetime\":\"\",\"description\":\"default version\",\"modelName\":\"delta\",\"version\":\"eta_agent3.9\"}"))
      .toEqual({ author: '', datetime: '', description: 'default version', modelName: 'delta', version: 'eta_agent3.9' })

    expect(parse({ person: "{ \"name\": \"tom\", \"age\": 20, \"other\": \"{ \\\"female\\\": true }\", \"birth\": \"beijin\", \"parent\": \"{ \\\"father\\\": \\\"bush\\\" }\" }" }))
      .toEqual({ person: { name: 'tom', age: 20, other: { female: true }, birth: 'beijin', parent: { father: 'bush' } } })

    expect(parse({ person: "{ \"name\": \"tom\", \"age\": 18 }" }))
      .toEqual({ person: { name: 'tom', age: 18 } })

    expect(parse("{ \"orderID\": \"1200020707947551541\", \"riderName\": \"bush\" }"))
      .toEqual({ orderID: '1200020707947551541', riderName: 'bush' })

    expect(parse({ orderID: '1200020707947551541', riderName: 'bush' }))
      .toEqual({ orderID: '1200020707947551541', riderName: 'bush' })

    expect(parse({ name: 'tom', age: 18 }))
      .toEqual({ name: 'tom', age: 18 })

    expect(parse({ foo: { bar: [{ person: "{ \"name\": \"tom\" }" }] } }))
      .toEqual({ foo: { bar: [{ person: { name: 'tom' } }] } })
  })
})
