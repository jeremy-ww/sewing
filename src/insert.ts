import isType from './isType'

/**
 * 对数组和字符串进行插入操作, 如果插入对象类型不是为数组对象直接返回插入对象
 * @param  {Array|string} target 插入对象
 * @param  {number} index  插入位置索引
 * @param  {*} source 插入对象
 *
 * @example
 *
 * insert(['a', 'b', 'c'], 0, 'TEST')
 * // => ["TEST", "a", "b", "c"]
 *
 * insert(['a', 'b', 'c'], 0, { foo: true })
 * // => [{ foo: true }, "a", "b", "c"]
 *
 * insert('123456', 4, 'TEST')
 * // => 1234TEST56
 *
 * insert('object in string', 4, { foo: true })
 * // => obje{"foo":true}ct in string
 *
 * insert(undefined, 0, 'foo')
 * // => undefined
 *
 * insert(null, 0, 'foo')
 * // => null
 */
export default function insert (
  target: any[] | string,
  index: number,
  source: number
): any {
  if (Array.isArray(target)) {
    return target.splice(index, 0, source) && target
  }

  if (isType(target, 'string')) {
    return target.slice(0, index) + JSON.stringify(source).replace(/^"|"$/g, '') + target.slice(index, target.length)
  }

  return target
}
