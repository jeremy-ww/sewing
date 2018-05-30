import formatJSONString from './internal/formatJSONString'
import isType from './isType'
import clone from './clone'

/**
 * 递归格式化 json 对象或者字符串
 * @param  {string|Object} json 待格式化的 json 对象或者字符串
 * @return {string|Object} 格式化之后的值
 *
 * @example
 *
 * parseJSONString({ name: 'tom', age: 18 })
 * // => { name: 'tom', age: 18 }
 *
 * parseJSONString({ person: "{ \"name\": \"tom\", \"age\": 18 }" })
 * // => { person: { name: 'tom', age: 18 } }
 *
 * parseJSONString({ person: "{ \"name\": \"tom\", \"age\": 20, \"other\": \"{ \\\"female\\\": true }\", \"birth\": \"beijin\", \"parent\": \"{ \\\"father\\\": \\\"bush\\\" }\" }" })
 * // => { person: { name: 'tom', age: 20, other: { female: true }, birth: 'beijin', parent: { father: 'bush' } } }
 */
export default function parseJSONString (json: any): any {
  const shallowParsedObj = clone(formatJSONString(json))
  if (!isType(shallowParsedObj, ['Object', 'Array'])) return shallowParsedObj

  Object.keys(shallowParsedObj).forEach(v => {
    const target = formatJSONString(shallowParsedObj[v])
    shallowParsedObj[v] = isType(target, ['Object', 'Array']) ? parseJSONString(target) : target
  })

  return shallowParsedObj
}
