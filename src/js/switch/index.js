const $ = require('jquery');

export default class SwitchFade {
  constructor () {
    this.sign = $('#js_sign');
    this.select = $('#js_select');
  }

  playSwitch() {
    setTimeout(() => {
      this.sign.fadeOut();
    },1500);

    setTimeout(() => {
      this.select.fadeIn();
    },2000);
  }
}
