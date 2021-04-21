$(document).ready(function() {

	$('body').on('click','.menu-btn', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.top-nav').toggleClass('active');
        $('body').toggleClass('hidden');
    });
	$("body").on("click", ".top-nav.active .top-nav__item.m-sub .top-nav-toggle", function(e){
		$(this).parents('.top-nav__item').find('.submenu').slideToggle();
        $(this).parents('.top-nav__item').toggleClass('toggled');
	});

	//INDUSTRIES-SLIDER
    if ($( ".industries-slider" ).length>0) {
        var $slider_i = $('.industries-slider');

        $slider_i.slick({
            infinite: true,
            dots: false,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            // variableWidth: true,
            centerMode:true,
            //speed: 250,
            autoplay: true,
            autoplaySpeed: 3500,
        });
    };

	if($('.success-slider').length>0){
		var currentSlide;
  		var slidesCount;
		var sliderCounter = $('.success-slider-counter__in');
		var $slider_s = $('.success-slider');
		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).text(currentSlide + '/' +slidesCount)
		};

		$slider_s.on('init', function(event, slick) {
			updateSliderCounter(slick);
		});
		$slider_s.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

        $slider_s.slick({
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
			infinite:true,
			prevArrow: $('.success-slider-prev__arr'),
			nextArrow: $('.success-slider-next__arr'),
        });
	};

	if($('.our-reviews__slider').length>0){
		var currentSlide;
  		var slidesCount;
		var sliderCounter = $('.reviews-slider-counter__in');
		var $slider_r = $('.our-reviews__slider');
		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).text(currentSlide + '/' +slidesCount)
		};

		$slider_r.on('init', function(event, slick) {
			updateSliderCounter(slick);
		});
		$slider_r.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

        $slider_r.slick({
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
			infinite:true,
			prevArrow: $('.reviews-slider-prev__arr'),
			nextArrow: $('.reviews-slider-next__arr'),
        });
	};




	if ($('.more__counter').length>0) {
        $('.more__counter').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                // easing: 'linear',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    };



	$('#custom-file-upload').change(function() {
		$('#custom-file-upload-input').val($('#custom-file-upload')[0].files[0].name);
	});



	//NEWS-IN slider
    if ($( ".news-in-media-slider" ).length>0) {
		var currentSlide;
  		var slidesCount;
		var sliderCounter = $('.news-slider-counter__in');
		var $slider_m = $('.news-in-media-slider');
		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).text(currentSlide + '/' +slidesCount)
		};

		$slider_m.on('init', function(event, slick) {
			updateSliderCounter(slick);
		});
		$slider_m.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});
        
        $slider_m.slick({
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            fade:true,
            prevArrow: $('.news-slider-prev__arr'),
			nextArrow: $('.news-slider-next__arr'),
        });


        // if (slideCount<2) {
        //     $('.slick-dots').hide();
        // }
    };
});


