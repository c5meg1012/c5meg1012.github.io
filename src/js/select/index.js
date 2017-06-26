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
      this.select.fadeOut();

      if ($(e.target).hasClass('js_select_engineer')) {
        this.selectEngineer();
      } else {
        this.selectMusician();
      }
    });
  }

  selectEngineer() {
    setTimeout(() => {
      this.engineerDetail.fadeIn();
    },500);
  }

  selectMusician() {
    setTimeout(() => {
      this.musicianDetail.fadeIn();
    },500);
  }
}
