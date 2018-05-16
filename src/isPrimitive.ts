/**
 * 判断一个对象是否是 primitive 值 (Number、String、Boolean、Undefined、Null、Symbol)
 * @param  {*} obj    判断的对象
 * @return {boolean}  是否是 primitive value
 *
 * @example
 *
 * isPrimitive(null)
 * // => true
 *
 * isPrimitive('tom')
 * // => true
 *
 * isPrimitive(Symbol(12345))
 * // => true
 *
 * isPrimitive({})
 * // => false
 *
 * isPrimitive([])
 * // => false
 *
 * isPrimitive(function () {})
 * // => false
 */
export default function isPrimitive (obj: any): boolean {
  return Object(obj) !== obj
}
