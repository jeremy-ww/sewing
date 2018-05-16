const { toString } = Object.prototype

/**
 * 判断对象的类型
 * @param {*} obj 需要判断类型的对象
 * @param {string|Array} [types=''] 对象的类型
 * @return {boolean} 入参对象是否与给定的对象类型匹配
 *
 * @example
 *
 * isType(null, 'null')
 * // => true
 *
 * isType({}, 'object')
 * // => true
 *
 * isType([], 'ARRAY')
 * // => true
 *
 * isType(undefined, 'undefined')
 * // => true
 *
 * isType([], ['string', 'array', 'BOOLEAN'])
 * // => true
 */
export default function isType (obj: any, types: string[] | string = ''): boolean {
  const type: string = toString.call(obj).slice(8, -1).toLowerCase()
  return Array.isArray(types)
    ? types.map(t => t.toLowerCase()).includes(type)
    : types.toLowerCase() === type
}
