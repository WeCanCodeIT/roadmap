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


$(document).on('click','div#today',function(){
	var today = new Date();
	var currentDate = today.getFullYear().toString() + (today.getMonth()+1) +today.getDate();
	//currentDate=20180319;
	currentDate = parseInt(currentDate);
	var index = getDateIndex(currentDate);
	index = recalculateIndex(index);
	scrollTo("h2.week",index);
});

function getDateIndex(currentDate){
	var weekIndex = 0;
	$("h2.week").each(function(index){
		var weekDate = parseInt($(this).data("date"));
		weekIndex = index;
		if(weekDate > currentDate){
			return false;
		}
	});
	return weekIndex;
}

function scrollTo(el,index){
	$('html, body').animate({
		scrollTop: $(el).eq(index).offset().top
	}, 2000);
}

function recalculateIndex(index){
	//computing index -> stay inbounds
	return (index>0 && index < $("h2.week").length-1 ?index-1:index); 
}