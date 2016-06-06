$(document).ready(function(){


	//smooth scrolling
	$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);


        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    
    
    // on scroll animation
    var fadeOnScroll = $(".fade-on-scroll");
    var rotation = $(".rotate");
	$(window).on("scroll", function(){


        var scrolled		= window.pageYOffset;
		var translateY	    = scrolled / 2;
		var rotate          = scrolled / 8;
		var opacity			= 1 - (scrolled / 800);

    
    	fadeOnScroll.css({
            "webkitTransform":"translateY(" + translateY + "px)",
            "MozTransform":"translateY(" + translateY + "px)",
            "msTransform":"translateY(" + translateY + "px)",
            "OTransform":"translateY(" + translateY + "px)",
            "transform":"translateY(" + translateY + "px)",
            "opacity" : opacity
        });
        rotation.css({
            "webkitTransform":"rotate(" + rotate + "deg)",
            "MozTransform":"rotate(" + rotate + "deg)",
            "msTransform":"rotate(" + rotate + "deg)",
            "OTransform":"rotate(" + rotate + "deg)",
            "transform":"rotate(" + rotate + "deg)",
        });

	    $(".nav").addClass("reveal");
       

	});
	

    

});

