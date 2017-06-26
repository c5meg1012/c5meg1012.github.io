const $ = require('jquery');

export default class Select {
  constructor () {
    this.select = $('#js_select');
    this.selectButton = $('.js_select_meru');
    this.engineerDetail = $('#js_engineer_detail');
    this.musicianDetail = $('#js_musician_detail');
  }

  selectMeru() {
    this.selectButton.on('click', (e) => {
      $.when(
        this.select.fadeOut()
      ).done (() => {
        this.showMeru(e.target);
      });
    });
  }

  showMeru(target) {
    if ($(target).hasClass('js_select_engineer')) {
      this.engineerDetail.fadeIn();
    } else {
      this.musicianDetail.fadeIn();
    }
  }
}
