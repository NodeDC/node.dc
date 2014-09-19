$(document).ready(function(){
  
	var bg = $('.bg-hex');
	var bgPath = $('.bg-hex path');
	var hex = $('.hex path');
	var hexPath = $('.hex path');

	var d = $('.d');
	var dPath = $('.d path');

	var c = $('.c');
	var cPath = $('.c');
  
  //setting timeout for performance reasons on codepen
  var animate = setTimeout(function(){
    hex.velocity({strokeDashoffset: 0, rotateZ: -180},{duration: 2000});
	hex.velocity({fillOpacity: 1, rotateZ: -180},{duration: 2000, delay: 0});

	d.velocity({strokeDashoffset: 0},{duration: 2000, delay: 2000});
	d.velocity({fillOpacity: 1},{duration: 1000, delay: 0});

	c.velocity({strokeDashoffset: 0},{duration: 2000, delay: 2000});
	c.velocity({fillOpacity: 1},{duration: 1000, delay: 0});

	bg.velocity({scale: 50},{duration: 2000, delay: 4000, begin: function(){
		hex.velocity({strokeOpacity: 0},{delay: 0})
	},complete: function(){
		// $('.loader').velocity({opacity:0},{duration: 400, delay: 0, complete: function(){
		// 	$('.loader').remove();
		// }})
	}});
  }, 500);
	
});