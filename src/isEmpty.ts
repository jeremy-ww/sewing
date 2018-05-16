/**
 * 判断一个对象是否是 Empty
 * @param  {Object} obj 判断的对象
 * @return {boolean}    是否为空
 *
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(undefined)
 * // => true
 *
 * isEmpty('')
 * // => true
 *
 * isEmpty(0)
 * // => false
 *
 * isEmpty({})
 * // => false
 */
export default function isEmpty (obj: any): boolean {
  return obj == null || obj === ''
}
