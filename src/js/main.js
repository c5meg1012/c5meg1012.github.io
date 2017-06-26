'use strict';

import $ from 'jquery';
import Sign from './sign/';

const sign = new Sign();

/*
 Setup and Paint your lazyline!
 */

$(function(){

  sign.playSign();

  setTimeout(function(){
    $('#js_sign').fadeOut();
  },1500);

  setTimeout(function(){
    $('#js_select').fadeIn();
  },2000);

  $('#js_engineer').on('click',function(){
     $('#js_select').fadeOut();
     setTimeout(function(){
       $('#js_engineer_detail').fadeIn();
     },500);
  });

  $('#js_musician').on('click',function(){
     $('#js_select').fadeOut();
     setTimeout(function(){
       $('#js_musician_detail').fadeIn();
     },500);
  });
});
