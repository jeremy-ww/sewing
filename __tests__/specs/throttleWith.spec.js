import throttleWith from 'sewing/throttleWith'

describe('throttleWith method', function () {

  jest.setTimeout(10000)

  it('should throttleWith work well', done => {
    const httpErrorCodeRecord = []
    const shouldWarnHttpError = ([prev = {}], [next]) => prev.status === next.status

    const error = throttleWith(err => {
      httpErrorCodeRecord.push(err.status)
    }, 4000, shouldWarnHttpError)

    ;(async () => {
      await fetch('https://httpstat.us/404').then(error)
      await fetch('https://httpstat.us/404').then(error)
      await fetch('https://httpstat.us/500').then(error)
      await fetch('https://httpstat.us/500').then(error)
      await fetch('https://httpstat.us/500').then(error)
      await fetch('https://httpstat.us/500').then(error)

      expect(httpErrorCodeRecord).toEqual([404, 500])
      done()
    })()
  })

  it('should throttleWith without comparator', function () {
    const record = []
    const handler = throttleWith(result => { record.push(result) }, 50)
    handler('a')
    handler('b')
    handler('c')
    expect(record).toEqual([])
  })
})
