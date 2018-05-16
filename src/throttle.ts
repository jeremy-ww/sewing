/**
 * 节流函数, 规定时间内函数只会被调用一次.
 * 查看 throttle 和 debounce 区别: https://css-tricks.com/debouncing-throttling-explained-examples/
 *
 * @param {Function} func        需要节流的函数
 * @param {number}   [wait = 50] 延迟时间 (毫秒)
 * @return {*}
 *
 * @example
 *
 * window.addEventListener('resize', throttle(function () { console.log(this) }, 100))
 */
export default function throttle (
  func: (...args: any[]) => void,
  wait: number = 50
) {
  let last = 0

  return function (...args: any[]) {
    const now = Date.now()

    if (now - last >= wait) {
      last = now
      return func(...args)
    }
  }
}
