//=====================================//
//======== Font license info  =========//
//=====================================//
/*    
## Entypo
   Copyright (C) 2012 by Daniel Bruce
   Author:    Daniel Buce
   License:   SIL (http://scripts.sil.org/OFL)
   Homepage:  http://www.entypo.com

## Font Awesome
   Copyright (C) 2012 by Dave Gandy
   Author:    Dave Gandy
   License:   CC BY 3.0 (http://creativecommons.org/licenses/by/3.0/)
   Homepage:  https://fortawesome.github.com/Font-Awesome/

## Web Symbols
   Copyright (c) 2011 by Just Be Nice studio. All rights reserved.
   Author:    Just Be Nice studio
   License:   SIL (http://scripts.sil.org/OFL)
   Homepage:  http://www.justbenicestudio.com/studio/websymbols/
*/
//=====================================//

$(document).ready(function(){
	
});
$('nav ul#main_nav').on('click','li',function(){
	var $type=$(this).attr('data-title');
	$("nav ul#main_nav li").removeClass("active")
	$("div#timeline_container > div.week").removeClass("hidden");	
	if ($type=='all') {
		$(this).addClass('active');
		$('div#timeline_container> div.week >ul> li').removeClass('hidden');
		$('div#timeline_container> div.week >ul> li').removeClass('active');
		$($('div#timeline_container> div.week >ul> li')).addClass('active');
	} 
	else if($type=="info"){
		$(this).addClass('active');
		$("div#timeline_container > div.week").addClass("hidden");	
		$('div#timeline_container> div.week >ul> li').removeClass('active');
		$($('div#timeline_container >ul> li.'+$type+'_event')).addClass('active');
	}
	else {
		$(this).addClass("active");
		$('div#timeline_container > div.week >ul> li').addClass('hidden');	
		$('div#timeline_container> div.week >ul> li.'+$type+'_event').removeClass('hidden');
		$('div#timeline_container> div.week >ul> li').removeClass('active');
		$($('div#timeline_container> div.week >ul> li.'+$type+'_event')).addClass('active');
	}
			
});

$(document).on('scroll',function(){

	$('div#info_container').fadeIn('fast');


	$("div.week").each(function( index ) {
		var week = $(this);
		var position = week.position().top - $(window).scrollTop();
		var weekLI = week.children("ul").children("li");
		//try and remove fixed positions below and work from current week size. (next week offset - current week offset?)
		if (position <= 150 && position >=-150) {
			weekLI.addClass("active");
		} else {
			weekLI.removeClass("active");
	
		}
	});


});


$(document).on('click','div#info_container',function(){
	$('div#instructions_container').fadeIn('fast');
	$('div#info_container').fadeOut('fast');
});



