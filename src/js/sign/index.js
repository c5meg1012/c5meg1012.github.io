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
      "strokeWidth": 2,
      "strokeColor": "#e09b99",
      "speedMultiplier": .5
    }).lazylinepainter('paint');
  }
}
