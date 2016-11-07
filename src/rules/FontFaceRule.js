import {toCss} from '../utils'

/**
 * Font-face rules.
 *
 * @api public
 */
export default class Rule {
  constructor(selector, style, options) {
    this.type = 'font-face'
    this.options = options
    this.selector = selector
    this.style = style
  }

  /**
   * Generates a CSS string.
   *
   * @see toCss
   * @api public
   */
  toString(options) {
    if (Array.isArray(this.style)) {
      let str = ''
      for (let index = 0; index < this.style.length; index++) {
        str += toCss(this.selector, this.style[index], options)
        if (this.style[index + 1]) str += '\n'
      }
      return str
    }

    return toCss(this.selector, this.style, options)
  }
}
