;(function($){

	$(window).load(function(){


		var ipadSlider = $('.ba-slider');
		ipadSlider.slick({
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false
		});

		var projectSlider = $('.ba-slider__projects');
		projectSlider.slick({
			slidesToShow: 5,
  			slidesToScroll: 1,
  			centerMode: true,
  			focusOnSelect: true,
  			autoplay: true,
			autoplaySpeed: 3000,
  			arrows: false,
  			asNavFor: '.ba-slider__description',
  			responsive: [
  			{
  				breakpoint: 700,
  					settings: {
  						slidesToShow: 3
  					}
  			}]
		});

		var descriptionSlider = $('.ba-slider__description');
		descriptionSlider.slick({
			slidesToShow: 1,
  			slidesToScroll: 1,
  			infinite: false,
  			arrows: true,
  			fade: true,
  			swipe: false,
  			asNavFor: '.ba-slider__projects'
		});

		if($.fn.swipebox){
			$( '.swipebox' ).swipebox();
		}

		console.log($.fn.isotope);
		if($.fn.isotope){
			var $grid = $('.ba-works').isotope({
  			itemSelector: '.ba-gallery'
			});


			$('.ba-filters-button-group').on( 'click', 'button', function() {
  				var filterValue = $( this ).attr('data-filter');
  				// use filterFn if matches value
  				$grid.isotope({ filter: filterValue });
			});

			$('.ba-button-group').each( function( i, buttonGroup ) {
  				var $buttonGroup = $( buttonGroup );
  				$buttonGroup.on( 'click', 'button', function() {
    			$buttonGroup.find('.ba-checked').removeClass('ba-checked');
    			$( this ).addClass('ba-checked');
  				});
			});
		}

		if(typeof google !== 'undefined'){
			var mapDiv = $('#map')[0];
			var coordinates = {lat: 49.592552, lng: 34.547128};
			var map = new google.maps.Map(mapDiv, {
	  		center: coordinates,
	  		zoom: 18,
	  		mapTypeId: google.maps.MapTypeId.ROADMAP
	  		});
			var marker = new google.maps.Marker({
			position: coordinates,
			map: map,
			title: 'Hello World!'
  			});
		}


	});

})(jQuery);
