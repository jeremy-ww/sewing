import formatJSONString from './internal/formatJSONString'
import isType from './isType'
import clone from './clone'

/**
 * 递归格式化 json 对象或者字符串, 为保证超大数值的精准性, 不会将超大数值的字符串转为数字.
 * @param  {string|Object} json 待格式化的 json 对象或者字符串
 * @return {string|Object} 格式化之后的值
 *
 * @example
 *
 * // will convert `age` to numeric type
 * parseJSONString({ name: 'tom', age: 18 })
 * // => { name: 'tom', age: 18 }
 *
 * // will not convert `orderID` to numeric type
 * parseJSONString({ orderID: '1200020707947551541', riderName: 'bush' })
 * // => { orderID: '1200020707947551541' }
 *
 * parseJSONString({ person: "{ \"name\": \"tom\", \"age\": 18 }" })
 * // => { person: { name: 'tom', age: 18 } }
 *
 * parseJSONString({ person: "{ \"name\": \"tom\", \"age\": 20, \"other\": \"{ \\\"female\\\": true }\", \"birth\": \"beijin\", \"parent\": \"{ \\\"father\\\": \\\"bush\\\" }\" }" })
 * // => { person: { name: 'tom', age: 20, other: { female: true }, birth: 'beijin', parent: { father: 'bush' } } }
 */
const { MAX_SAFE_INTEGER = 9007199254740991 } = Number

export default function parseJSONString (json: any): any {
  const shallowParsedObj = clone(formatJSONString(json))
  if (!isType(shallowParsedObj, ['Object', 'Array'])) return shallowParsedObj

  Object.keys(shallowParsedObj).forEach(v => {
    const value = shallowParsedObj[v]
    const target = isType(value, 'String') && (Math.abs(value) > MAX_SAFE_INTEGER)
      ? value
      : formatJSONString(value)
    shallowParsedObj[v] = isType(target, ['Object', 'Array']) ? parseJSONString(target) : target
  })

  return shallowParsedObj
}
