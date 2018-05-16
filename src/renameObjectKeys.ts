import clone from './clone'

/**
 * 替换一个对象的一级 key 名称, 再不修改原始对象的情况下返回一个新的对象.
 *
 * @param  {Object} [target={}] 等待替换名称的对象
 * @param  {Object} [source={}] key-value 结构, 包含替换前后的 key 名称, 替换后的名称不应该存在原始对象的名称中
 * @return {Object}        替换名称之后的对象
 *
 * @example
 *
 * renameObjectKeys({ name: 'male' }, { name: 'sex' })
 * // => { sex: 'male' }
 *
 * renameObjectKeys({ name: 'male', education: '18' }, { name: 'sex', education: 'age' })
 * // => { sex: 'male', age: '18' }
 */
interface CloneInterface extends Date, RegExp, Function {
  [propName: string]: any
  constructor: ObjectConstructor
}

export default function renameObjectKeys (
  target: any = {},
  source: any = {}
): any[] | object {
  const object: { [propName: string]: any } = clone(target as CloneInterface)

  Object.keys(source).forEach(key => {
    if (target.hasOwnProperty(key)) {
      object[source[key]] = target[key]
      delete object[key]
    }
  })
  return object
}
