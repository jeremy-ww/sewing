const { createElement } = document

/**
 * 通过给定的标签名创建一个元素
 * @param  {string} tag  标签名称
 * @return {HTMLElement} DOM 元素
 *
 * @example
 *
 * baseCreateElement('div')
 * // => <div></div>
 *
 * baseCreateElement('script')
 * // => <script></script>
 *
 * baseCreateElement('examples')
 * // => <examples></examples>
 */
export default function baseCreateElement (tag: string): HTMLElement {
  return createElement.bind(document)(tag)
}
