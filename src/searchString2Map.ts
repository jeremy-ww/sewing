import isEncodedString from './isEncodedString'
import parseString from './parseString'
import isType from './isType'

/**
 * 将 url search string 格式转化为 map 形式, 键值对中的值将被转化为原始类型. 可从 string 中直接解析出 JSON.
 *
 * @param  {string}  search 传入的 search string, 如果不传或者类型不为 String, 将使用 location.search 作为默认值
 * @return {Object}         转化后的 map 结构对象
 *
 * @example
 *
 * searchString2Map('?name=tom&age=18&sex=male')
 * // => { name: 'tom', age: 18, sex: 'male' }
 *
 * searchString2Map('?obj=%7Bname%3A%20'tom'%2C%20age%3A%2018%2C%20sex%3A%20'male'%7D&app=true')
 * => { obj: { name: 'tom', age: 18, sex: 'male' }, app: true }
 */
export default function searchString2Map (search: string): object {
  const searchString = isType(search, 'String')
    ? search
    : window.location.search

  return searchString.slice(1).split('&').reduce((sum, item) => {
    const [key, val] = item.split('=')

    return Object.assign(sum, {
      [key]: parseString(isEncodedString(val) || val)
    })
  }, {})
}
