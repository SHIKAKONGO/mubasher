$(function() {
	//1- navbar work
	//a-navbar shrink 
	$(document).ready(function () {
			$(window).scroll(function (){
				if($(document).scrollTop() > 150 ) {
					$('.navbar').addClass('shrink'); 
				} else {
					$('.navbar').removeClass('shrink');
				}
			})
		}); 
	//b-navbar smotth scroll and active link 
	$(document).ready(function (){
			var scrollLink = $('.scroll');
			// smooth scroll 
			scrollLink.click(function (e){
				e.preventDefault();
				$('body,html').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000);
			});
		});
	//
	 $(window).scroll(function(){
        $('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
            }
        });
    });

	//2-aside work 
	var aside = document.getElementById('mainAside');
	var asideOn = false
	document.getElementById('icon').addEventListener('click', function (){
		if(asideOn) {
			aside.style.right = '-400px';
			asideOn = false;
		}else {
			aside.style.right = '15px';
			asideOn = true ; 
		}
	});
	//
	$('#icon').click(function(){
    	$('#icon').toggleClass('active');
    });
    //3-typed js 
    $('#home .content h2 span').typed({
        strings: ["hosting" , "developing" , "mubasher"],
        loop: true,
        startDelay: 2000,
        backDelay: 3000
    });
    //4-clock time 
    function clock() {// We create a new Date object and assign it to a variable called "time".
	var time = new Date(),
	    // Access the "getHours" method on the Date object with the dot accessor.
	    hours = time.getHours(),
	    // Access the "getMinutes" method with the dot accessor.
	    minutes = time.getMinutes(),
	    seconds = time.getSeconds();
	document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
	  
	  function harold(standIn) {
	    if (standIn < 10) {
	      standIn = '0' + standIn
	    }
	    return standIn;
	  }
	}
	setInterval(clock, 1000);
	//5-road map plugin
	 $(document).ready(function() {

            var events = [{
                    date: 'HAPPY - CLIENTS',
                    content: '2000'
                },
                {
                    date: 'WAITING - CLIENTS',
                    content: '2500'
                },
                {
                    date: 'PROJECTS',
                    content: '3000'
                },
                {
                    date: 'CALLS',
                    content: '2800'
                },
                {
                    date: 'EMAILS',
                    content: '4500'
                },
                {
                    date: '2019',
                    content: 'mubasherInformation.com  <small>for hosting</small>'
                },
                {
                    date: '2019',
                    content: 'new-YorkC-ompany.com  <small>For Graphic Design</small>'
                },

                {
                    date: '2017',
                    content: 'good-safe-healthy.com  <small>For clinic services</small>'
                },

                {
                    date: '2018',
                    content: 'high-scholl.com  <small>For eduction</small>'
                },
                {
                    date: '2019',
                    content: 'blues.com  <small>for sports</small>'
                },
                {
                    date: '2017',
                    content: 'last-news.com  <small>for media</small>'
                },
                {
                    date: '2019',
                    content: 'all-together.com  <small>non profit</small>'
                }
            ];

            $('#my-timeline').roadmap(events, {
                eventsPerSlide: 6,
                slide: 1,
                prevArrow: '<i class="fas fa-chevron-left"></i>',
                nextArrow: '<i class="fas fa-chevron-right"></i>'
            });
        });
	 	//6-owl carousel for plans section
	 	/*$(document).ready(function(){
		    $("#testimonial-slider").owlCarousel({
		        items:1,
		        itemsDesktop:[1000,1],
		        itemsDesktopSmall:[979,1],
		        itemsTablet:[768,1],
		        itemsMobile:[650,1],
		        pagination:true,
		        autoPlay:true
		    });
		});*/
	 	//7-carosel for taem section 
	 	$(document).ready(function(){
	    $("#team-slider").owlCarousel({
	        items:1,
	        itemsDesktop:[1000,1],
	        itemsDesktopSmall:[979,1],
	        itemsTablet:[768,1],
	        itemsMobile:[650,1],
	        pagination:true,
	        autoPlay:true
		    });
		});
		//8-carousel for news slider 
		$(document).ready(function(){
	    $("#news-slider").owlCarousel({
	        items:1,
	        itemsDesktop:[1000,1],
	        itemsDesktopSmall:[979,1],
	        itemsTablet:[768,1],
	        itemsMobile:[650,1],
	        pagination:true,
	        autoPlay:true
		    });
		});
		//9-carousel for blog page 
		$(document).ready(function(){
	    $("#server-slider").owlCarousel({
	        items:1,
	        itemsDesktop:[1000,1],
	        itemsDesktopSmall:[979,1],
	        itemsTablet:[768,1],
	        itemsMobile:[650,1],
	        pagination:true,
	        autoPlay:true
		    });
		});
		//10-COUNTERUP PLUGIN
		$(".counterup").counterUp({
        delay: 1,
        time: 1000
     	}); 
		//11-scroll button
		 var scrollButton = $("#scroll-top");
        $(window).scroll(function()
           { 
             $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
          });     
                // click on button scroll
            scrollButton.click(function()
            {
                $("html,body").animate({scrollTop: 0}, 600);
            });





});