/**
 * 判断一个数是否在一段区间内, 与 lodash/inRange 不同的是: lodash 认为 7 不在 [3, 7] 这个区间内
 * @param  {number} number 需要判断区间的参数
 * @param  {number} [start=0] 起始区间, 默认值是 0
 * @param  {number} [end=Number.MAX_VALUE] 终止区间, 默认值是最大值
 * @return {boolean}       是否存在于一段区间内
 *
 * @example
 *
 * inRange(7, 3, 7)
 * // => true
 *
 * inRange(1, 3, 5)
 * // => false
 *
 * inRange(10, 9)
 * // => true
 *
 * inRange(0)
 * // => true
 */
export default function inRange (
  number: number,
  start: number = 0,
  end: number = Number.MAX_VALUE
): boolean {
  return number >= Math.min(start, end) && number <= Math.max(start, end)
}
