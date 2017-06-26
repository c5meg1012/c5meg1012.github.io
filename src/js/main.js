'use strict';

import $ from 'jquery';
import Sign from './sign/';
import Select from './select/';
import SwitchFade from './switch/';

const sign = new Sign();
const select = new Select();
const switchFade = new SwitchFade();

$(function(){
  sign.playSign();
  switchFade.firstSwitch();
  switchFade.backSwitch();
  select.selectMeru();
});
