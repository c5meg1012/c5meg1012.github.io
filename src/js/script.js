/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj = {
    "top": {
        "strokepath": [
            {
                "path": "M91.2,54.4c1.5,38.7,13.6,76.9,34.5,109.5",
                "duration": 600
            },
            {
                "path": "M152.4,52.9c-1.1,21.8-3.4,44-12,64.1s-24.2,38.1-45,44.9c-3.5,1.2-7.4,2-10.9,0.7c-4.2-1.6-6.7-5.9-8-10.2  c-2.6-8.6-1.3-18.2,2.6-26.3s10.3-14.9,17.6-20.2c10.9-7.8,23.9-12.5,37.3-13.5c10.7-0.7,22,1.1,30.6,7.6c6.1,4.6,10.4,11.1,13.5,18  c3.5,7.9,5.6,16.6,5.1,25.2c-0.5,8.6-3.8,17.3-9.9,23.4c-3.7,3.7-8.5,6.5-13.8,6.7",
                "duration": 600
            },
            {
                "path": "M238.9,70.9c9-2,18.3-2.2,27.4-0.4c1.6,0.3,3.3,0.7,4.3,1.9c1.9,2.2,0.7,5.7-0.9,8.2c-3.8,5.7-9,10.4-14.4,14.6  c-10.2,8.1-21.1,15.2-32.6,21.3c15.4-11.2,37.3-12.3,53.8-2.9c4.4,2.5,8.6,6,10.4,10.7c3.1,8.2-1.8,17.3-7.7,23.8  c-4.3,4.8-9.2,9-14.6,12.5c-5.5,3.6-13.1,6.5-18.4,2.5c-3.9-2.9-4.8-8.7-3.1-13.2s5.7-7.9,10-10.1c5-2.6,10.9-3.9,16.2-2.3  c7.3,2.2,12.3,9.8,12.5,17.4c0,0.6-0.1,1.3-0.7,1.4s-0.5-1.1-0.1-0.8",
                "duration": 800
            },
            {
                "path": "M342.2,103.1c2.3-8,7.7-15.5,15.5-18.5c1.7-0.6,3.5-1,5.2-0.5c3.2,0.9,4.7,4.5,5.5,7.8  c2.2,9.2,1.8,18.9-1.2,27.9c6-6.6,13.3-12.8,22.1-13.9c8.8-1.1,19,5.3,18.7,14.2c-0.2,7.3-6.7,12.6-12.8,16.5  c-10.2,6.6-31.7,22.4-44.8,16.5c-7.1-3.3-7.4-12.6-8.4-19.3C340.6,123.8,339.3,113.1,342.2,103.1z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 534,
            "height": 242
        }
    }
};


/*
 Setup and Paint your lazyline!
 */

$(document).ready(function(){
  $('#top').lazylinepainter({
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99",
    "speedMultiplier": .5
  }).lazylinepainter('paint');

  setTimeout(function(){
    $('#top').fadeOut();
  },1500);

  setTimeout(function(){
    $('#main').fadeIn();
  },2000);

  $('#engineer').on('click',function(){
     $('#main').fadeOut();
     setTimeout(function(){
       $('#engineer_meru').fadeIn();
     },500);
  });

  $('#musician').on('click',function(){
     $('#main').fadeOut();
     setTimeout(function(){
       $('#musician_meru').fadeIn();
     },500);
  });
});
