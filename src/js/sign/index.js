global.jQuery = require('jquery');
const $ = require('jquery');
require('lazy-line-painter');
const pathObj = require('./path');

export default class Sign {
  constructor () {
    this.signBox = $('#js_sign');
  }

  playSign() {
    this.signBox.lazylinepainter({
      "svgData": pathObj,
      "strokeWidth": 4,
      "strokeColor": "#000",
      "speedMultiplier": .5
    }).lazylinepainter('paint');
  }
}
