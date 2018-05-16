import isEmpty from './isEmpty'

/**
 * 通过对象的路径获取对象上的值
 *
 * @param  {Object} obj          待获取特定值的对象
 * @param  {string} path         特定值的路径
 * @param  {*} defaultValue      路径中存在值为 null/undefined 时的默认值
 * @return {*}                   获取到的特定值
 *
 * @example
 *
 * get({ person: { tom: { age: 10 } } }, 'person.tom.age', '18')
 * // => 10
 *
 * get({ person: { tom: { age: 10 } } }, 'person.tom.sex', 'male')
 * // => male
 *
 * get({ person: null }, 'person.tom.sex', 'female')
 * // => female
 *
 * get({ person: { tom: { sex: undefined } } }, 'person.tom.sex', 'female')
 * // => female
 *
 * get({ person: { tom: { sex: undefined } } }, null)
 * // => { person: { tom: { sex: undefined } } }
 */
export default function get (obj: any, path: string, defaultValue?: any) {
  if (obj == null) return defaultValue
  if (isEmpty(path)) return obj

  const keys = path.split('.')
  const { length } = keys

  let foundObject = obj
  let index = 0

  while (foundObject != null && index < length) {
    foundObject = foundObject[keys[index++]]
  }

  return foundObject == null ? defaultValue : foundObject
}
