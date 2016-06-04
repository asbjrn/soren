$( document ).ready(function() {

initslider();
switchbackground();
    
});


function initslider(){
    var $wrap   = $('#footer-carousel');
		var $frame  = $('#footer-carousel').find('.frame');
		var $slidee = $('#footer-carousel').find('.slidee');

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')			
		});
    $wrap.css("visibility","visible");
}

function switchbackground(){
 //switch background on slidee hover
    $(".carouselimage").mouseenter(function(){
        var image = $(this).css("background-image");
        $("body").css("background-image",image);
        console.log("lol");
    });
}