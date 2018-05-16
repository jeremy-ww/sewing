import isType from './isType'

/**
 * 根据每次传递节流函数参数的不同, 来决定当前函数是否被节流. 例如:
 * 根据接口返回的 http code 进行前端的交互性提示, http code 的不同来保证相同的 http code 在错误提醒时, 只会触发一次.
 * 查看 throttle 和 debounce 区别: https://css-tricks.com/debouncing-throttling-explained-examples/
 *
 * @param {Function}  func        需要节流的函数
 * @param {number}    [wait = 50] 延迟时间 (毫秒)
 * @param {Function}  comparator  对比每次进行节流的参数
 * @return {*}
 *
 * @example
 *
 * const shouldWarnHttpError = ([prev = {}], [next]) => prev.status === next.status
 *
 * const error = throttleWith(err => {
 *   alert(err.status)
 * }, 50, shouldWarnHttpError)
 *
 * fetch('www.examples/404')
 *  .then(noop, error)
 *
 * fetch('www.examples/404')
 *  .then(noop, error)
 *
 * fetch('www.examples/502')
 *  .then(noop, error)
 *
 * // => will only alert 404、502 once
 */
export default function throttleWith (
  func: (...args: any[]) => void,
  wait: number = 50,
  comparator: Function
) {
  let last = 0
  let params = [] as any[]

  const isFunctionalComparator = isType(comparator, 'Function')

  return function (...args: any[]) {
    if (!isFunctionalComparator) return

    const now = Date.now()
    if (!comparator(params, args) || now - last >= wait) {
      last = now
      params = args
      return func(...args)
    }
  }
}
