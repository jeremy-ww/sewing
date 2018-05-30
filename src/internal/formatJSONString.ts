import isType from '../isType'

/**
 * 转换 json 格式的 string 为 json 对象, 如果不是则直接返回 string 本身
 * @param  {string}   str json 格式的参数
 * @return {Object|*} 转化之后的 json 对象或者原始值本身
 *
 * @example
 *
 * formatJSONString({ name: 'tom', age: 18 })
 * // => { name: 'tom', age: 18 }
 *
 * formatJSONString('{"name":"tom","age":18}')
 * // => { name: "tom", age: 18 }
 *
 * formatJSONString("{\"author\":\"\",\"datetime\":\"\",\"description\":\"default version\",\"modelName\":\"delta\",\"version\":\"eta_agent3.9\"}")
 * // => { author: "", datetime: "", description: "default version", modelName: "delta", version: "eta_agent3.9" }
 */
export default function formatJSONString (str: string | any): string | any {
  if (!isType(str, 'String')) return str
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}
