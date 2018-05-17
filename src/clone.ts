import isPrimitive from './isPrimitive'
import isType from './isType'

/**
 * 深度克隆一个对象, 即使是包含了日期、正则、函数. 对于函数即使 clone 过, 也能拿到正确的 `this`.
 *
 * @param  {*} obj 待克隆的对象
 * @return {*}     深度克隆对象
 *
 * @example
 *
 * clone({ name: 'tom', range: [60, 80, 75] })
 * // => { name: 'tom', range: [60, 80, 75] }
 *
 * clone({ date: new Date(), regexp: new RegExp('d+', 'g'), call: function () { console.log('sewing') } })
 * // => { date: new Date(), regexp: new RegExp('d+', 'g'), call: function () { console.log('sewing') } }
 *
 * const obj = {
 *   range: 10,
 *   setRange () {
 *     return ++this.range && this
 *   }
 * }
 * clone(obj).setRange().range
 * // => 11
 *
 * obj.range
 * // => 10
 */
export interface CloneInterface extends Date, RegExp, Function {
  [propName: string]: any
  constructor: ObjectConstructor
}

export default function clone<T extends CloneInterface> (
  obj: T,
  context?: any
): T {
  if (isPrimitive(obj)) return obj

  const result = isType(obj, 'Date') ? new Date(obj as Date)
    : isType(obj, 'RegExp') ? new RegExp(obj.source, obj.flags)
      : isType(obj, 'Function') ? obj.bind(context)
        : obj.constructor ? new obj.constructor() : Object.create(null)

  return Object.assign(result, ...Object.keys(obj).map(key => ({ [key]: clone(obj[key], result) })))
}
