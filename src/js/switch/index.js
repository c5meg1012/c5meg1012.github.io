const $ = require('jquery');

export default class SwitchFade {
  constructor () {
    this.sign = $('#js_sign');
    this.select = $('#js_select');
    this.backButton = $('.js_back');
    this.detail = $('.js_detail');
  }

  firstSwitch() {
    setTimeout(() => {
      $.when(
        this.sign.fadeOut()
      ).done (() => {
        this.select.fadeIn();
      });
    },1500);
  }

  backSwitch() {
    this.backButton.on('click', () => {
      $.when(
        this.detail.fadeOut()
      ).done (() => {
        this.select.fadeIn();
      });
    });
  }
}
