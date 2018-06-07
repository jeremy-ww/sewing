import baseCreateElement from './internal/baseCreateElement'

/**
 * 创建一个 link[rel="stylesheet"] 并且直接插入到页面的 head 标签下
 *
 * @param  {string} href     标签的样式源
 * @return {HTMLLinkElement} 创建过的 link 标签
 *
 * @example
 *
 * function prefetch (url, type = 'image') {
 *   createStyleElement(url, element => {
 *     element.rel = 'prefetch'
 *     element.as = type
 *     return element
 *   })
 * }
 *
 * prefetch('https://bit.ly/2HqROmb')
 * // => <link rel="prefetch" href="https://bit.ly/2HqROmb" as="image"/>
 *
 * createStyleElement('https://unpkg.com/minireset.css/minireset.css')
 * // => <link rel="stylesheet" href="https://unpkg.com/minireset.css/minireset.css"/>
 */
export default function createStyleElement (
  href: string,
  prophase: <T extends HTMLLinkElement>(element: T) => T = element => element
) {
  const link = baseCreateElement('link') as HTMLLinkElement
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(prophase(link))
  return link
}
