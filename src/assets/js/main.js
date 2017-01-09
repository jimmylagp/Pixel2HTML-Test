/**
 * Pixel2HTML - 1/1
 */

var msg = 'Pixel2HTML - 1/1';

function printLog(log){
    'use strict';
  return console && console.log(log);
}

printLog(msg);


$(document).ready(function(){
	$('.slider__container').slick({
		dots: true
	});
});
