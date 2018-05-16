import get from './get'

/**
 * 从数组中根据 value 值移除特定的 item
 *
 * @param  {Array}  array  数组数据源
 * @param  {*}  val  特定的 item 值, 必须为普通数据类型
 * @return {*}  返回删除的 item 值, 如果没有找到这个 item 则为 undefined
 *
 * @example
 *
 * removeOne(['a', 'b', 'c', 'd', 'e'], 'd')
 * // => d
 *
 * removeOne(['a', 'b', 'c', 'd', 'e'], 'f')
 * // => undefined
 *
 * removeOne(undefined, 'f')
 * // => undefined
 */
export default function removeOne (array: any[] = [], val: any): any {
  const index = array.findIndex(v => v === val)
  return index <= 0 ? undefined : get(array.splice(index, 1), '0')
}
