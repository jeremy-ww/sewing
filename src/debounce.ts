/**
 * 防抖动函数, 规定时间内的多次调用归为一次函数调用. 适用于 input、scroll 等事件.
 * 查看 debounce 和 throttle 区别: https://css-tricks.com/debouncing-throttling-explained-examples/
 *
 * @param {Function} func        需要防抖动的函数
 * @param {number}   [wait = 50] 延迟时间 (毫秒)
 * @return {*}
 *
 * @example
 *
 * window.addEventListener('resize', debounce(function () { console.log(this) }, 100))
 */
export default function debounce (
  func: () => void,
  wait: number = 50
): (...args: any[]) => void {
  let timer: any = null

  return function (...args) {
    const later = () => {
      timer = null
      func.call(this, ...args)
    }
    clearTimeout(timer)
    timer = setTimeout(later, wait)
  }
}
