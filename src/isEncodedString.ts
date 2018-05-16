import isType from './isType'

/**
 * 判断字符串是否是经过 encode
 *
 * @param  {string}        str 需要判断的字符串, 如果不是 String 类型则返回 false
 * @return {boolean|string}    没有经过 encode 会返回 false, 反之直接返回 decode 的结果
 *
 * @example
 *
 * isEncodedString('name=tom&age=29')
 * // => false
 *
 * isEncodedString('name%3Dtom%26age%3D29')
 * // => 'name=tom&age=29'
 */
export default function isEncodedString (str: string): boolean | string {
  if (!isType(str, 'String')) return false
  const decodeString = decodeURIComponent(str)
  return decodeString !== str && decodeString
}
