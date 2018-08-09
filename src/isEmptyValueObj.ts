import isPrimitive from './isPrimitive'
import isEmpty from './isEmpty'

/**
 * 判断对象是否为空, 或者判断对象不同层级上是否有为空的值
 * @param  {Object}  obj   判断的对象
 * @param  {number}  depth 递归判断对象的层级
 * @return {boolean}       当前对象是否存在空值
 *
 * @example
 *
 * isEmptyValueObj({ name: 'tom', age: 0 })
 * // => false
 *
 * isEmptyValueObj({ name: '', age: 0 })
 * // => true
 *
 * isEmptyValueObj({
 *   name: 'lee',
 *   age: 18,
 *   empty_object: [{ name: undefined }]
 * })
 * // => false
 *
 * isEmptyValueObj({
 *   name: 'lee',
 *   age: 18,
 *   empty_object: [{ name: undefined }]
 * }, 2)
 * // => true
 */
export default function isEmptyValueObj (obj: any, depth = 0): boolean {
  if (isEmpty(obj)) return true

  let recursionIndex = 0

  function internal (obj: any): boolean {
    const keys = Object.keys(obj)
    const result = keys.length > 0 && keys.some(key => {
      const value = obj[key]
      return recursionIndex >= depth || isPrimitive(value)
        ? isEmpty(value)
        : (++recursionIndex && internal(value)) as boolean
    })
    recursionIndex = 0
    return result
  }

  return internal(obj)
}
