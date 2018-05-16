/**
 * 将字符串作为 JavaScript 并执行
 *
 * @param  {string} str JavaScript 表达式, 语句或一系列语句的字符串
 * @return {*}          返回计算后的结果
 *
 * @example
 *
 * parseString('true')
 * // => true
 *
 * parseString("{ name: 'tom', age: 20, parent: { name: 'jack' } }")
 * // => { name: 'tom', age: 20, parent: { name: 'jack' } }
 *
 * parseString('1 + 10 * 3')
 * // => 31
 */
export default function parseString (str: string | any): any {
  /* eslint-disable no-new-func */
  try {
    return (new Function('return ' + str))()
  } catch (e) {
    return str
  }
}
