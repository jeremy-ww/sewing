/**
 * 根据参数缓存函数执行的结果, 同样的参数只会执行一次缓存函数
 *
 * @param {Function} fn 需要缓存的函数
 * @return {function(string): *} 缓存过的函数
 *
 * @example
 *
 * const cachedToUpperCase = cache(function (str) {
 *  return console.error(str.toUpperCase())
 * })
 *
 * const cachedFunctionWithParam = cache(function (str, fn) {
 *  return fn(str)
 * })
 *
 * cachedToUpperCase('a')
 * // => 'A'
 *
 * cachedToUpperCase('a')
 * // => 'A'
 *
 * cachedFunctionWithParam('figure', str => str.big())
 * // => '<big>figure</big>'
 *
 * cachedFunctionWithParam('figure', str => str.small())
 * // => '<big>figure</big>'
 */
export default function cache (fn: (str: any) => any) {
  const cache: { [propName: string]: any } = {}
  return function cachedFn () {
    const str = arguments[0]
    const hit = cache[str]
    return cache.hasOwnProperty(str) ? hit : (cache[str] = fn.apply(this, arguments))
  }
}
