import isEmpty from './isEmpty'

/**
 * 判断对象是否为空, 或者对象的一级属性上是否有为空的 value
 * @param  {Object}  obj 判断的对象
 * @return {boolean}     当前对象是否存在空值
 *
 * @example
 *
 * isEmptyValueObj(null)
 * // => true
 *
 * isEmptyValueObj({})
 * // => true
 *
 * isEmptyValueObj({ name: 'tom', age: 0 })
 * // => false
 *
 * isEmptyValueObj({ name: '', age: 0 })
 * // => true
 */
export default function isEmptyValueObj (obj: any): boolean {
  if (isEmpty(obj) || !Object.keys(obj).length) return true

  return !Object.values(obj).every(v => !isEmpty(v))
}
