import isType from './isType'

/**
 * map 结构对象转化为 url search string. 支持 Array、Object、Function.
 * 应该注意的是 url 的长度最好应该在 2048 之内, 否则可能有部分浏览器不支持.
 *
 * @param  {Object} map map 结构的对象
 * @return {string}     转化后的 search string
 *
 * @example
 *
 * map2SearchString({ foo: undefined, bar: null })
 * // => '?foo=undefined&bar=null'
 *
 * map2SearchString({ regexp: /\\d+/g, blank: 'foo bar' })
 * // => '?regexp=%2F%5Cd%2B%2Fg&blank=foo%20bar'
 *
 * map2SearchString({ name: 'tom', age: 20 })
 * // => '?name=tom&age=20'
 *
 * map2SearchString({ func () { return 'hello world' } })
 * // => "?func=func()%20%7B%20return%20'hello%20world'%20%7D"
 *
 * map2SearchString({ array: [1, 2, 3, 4], map: { foo: true, bar: -1 } })
 * // => '?array=%5B1%2C2%2C3%2C4%5D&map=%7B%22foo%22%3Atrue%2C%22bar%22%3A-1%7D'
 */
export default function map2SearchString (map: { [propName: string]: any } = {}): string {
  const items = Object.keys(map).map(key => {
    const rawValue = map[key]
    const val = isType(rawValue, ['Array', 'Object'])
      ? JSON.stringify(map[key]).replace(/^"|"$/g, '')
      : String(rawValue)
    return `${key}=${encodeURIComponent(val)}`
  })
  return `?${items.join('&')}`
}
