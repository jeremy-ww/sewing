import isEmpty from './isEmpty'

/**
 * 判断对象是否是一个空对象
 *
 * @param  {*} obj      待判断对象
 * @return {boolean}    是否是空对象
 *
 * @example
 *
 * isEmptyObject()
 * // => true
 *
 * isEmptyObject('')
 * // => true
 *
 * isEmptyObject(null)
 * // => true
 *
 * isEmptyObject(undefined)
 * // => true
 *
 * isEmptyObject([])
 * // => true
 *
 * isEmptyObject({})
 * // => true
 *
 * isEmptyObject(['a', 'b', 'c'])
 * // => false
 *
 * isEmptyObject({ name: 'tom' })
 * // => false
 */
export default function isEmptyObject (obj: any): boolean {
  return isEmpty(obj) || Object.keys(obj).length === 0
}
