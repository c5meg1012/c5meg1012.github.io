'use strict';

import $ from 'jquery';
import Sign from './sign/';
import Select from './select/';
import SwitchFade from './switch/';
import BackFade from './back/';

const sign = new Sign();
const select = new Select();
const switchFade = new SwitchFade();
const backFade = new BackFade();

$(function(){
  sign.playSign();
  select.selectMeru();
  switchFade.playSwitch();
  backFade.backToSelect();
});
