import baseCreateElement from './internal/baseCreateElement'

/**
 * 通过标签名称来创建 src 元素并绑定 load 事件, 非 HTMLMediaElement | HTMLImageElement 元素
 * 会被直接插入到页面的 head 标签下.
 *
 * @param  {string} tag 元素标签名称
 * @param  {string} src 元素的 src 属性
 * @return {Promise}    load/error 事件触发返回 promise
 *
 * @example
 *
 * createSrcElement('script', 'https://unpkg.com/vue')
 *   .then(script => {
 *     console.log(script) // => <script src="https://unpkg.com/vue"></script>
 *   })
 *
 * const setImageCrossOrigin = img => {
 *   img.crossOrigin = 'Anonymous'
 *   return img
 * }
 * createSrcElement('img', 'https://example.com/example.png', setImageCrossOrigin)
 *  .then(images => {
 *    console.log(image)
 *  })
 */

export type SrcElement = HTMLAudioElement | HTMLEmbedElement | HTMLIFrameElement
  | HTMLImageElement | HTMLInputElement | HTMLScriptElement | HTMLSourceElement
  | HTMLTrackElement | HTMLVideoElement

export default function createSrcElement (
  tag: string,
  src: string,
  prophase: <T extends SrcElement> (element: T) => T = element => element
) {
  return new Promise((resolve, reject) => {
    const element = prophase(baseCreateElement(tag) as SrcElement)

    const event = element instanceof HTMLMediaElement ? 'loadeddata' : 'load'
    element.addEventListener(event, () => { resolve(element) })
    element.addEventListener('error', reject)
    element.src = src

    if (!(element instanceof HTMLMediaElement || element instanceof HTMLImageElement)) {
      document.head.appendChild(element)
    }
  })
}
