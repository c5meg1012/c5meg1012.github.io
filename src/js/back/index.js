const $ = require('jquery');

export default class backFade {
  constructor () {
    this.backButton = $('.js_back');
    this.detail = $('.js_detail');
    this.select = $('#js_select');
  }

  backToSelect() {
    this.backButton.on('click', () => {
      this.detail.fadeOut();

      setTimeout(() => {
        this.select.fadeIn();
      },500);
    });
  }
}
