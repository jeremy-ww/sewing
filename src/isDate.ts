import isType from './isType'

/**
 * 判断是否是日期
 * @param  {Date|number} date 可以是 date 或者 getTime 之后的数字
 * @return {boolean}     是否是日期类型
 *
 * @example
 *
 * isDate(Date.now())
 * // => true
 *
 * isDate(new Date())
 * // => true
 *
 * isDate(Date.now() + '')
 * // => false
 */
export default function isDate (date: Date | number): boolean {
  if (date instanceof Date) return true

  return isType(date, 'string') || isType(date, 'number')
    ? ('' + new Date(date)) !== 'Invalid Date'
    : false
}
