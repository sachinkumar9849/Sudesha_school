var preloader = document.getElementById('loading');

function myFunction() {
    preloader.style.display = 'none';

}
var $slide = $(".slide")
    .slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 4000,
        autoplay: true
    })
    .on({
        beforeChange: function(event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
            $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
        },
        afterChange: function() {
            $(".preve-slide", this).removeClass("preve-slide　slide-animation");
        }
    });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");


///////////////////////////// SLIDER END

// MENU START
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// MENU END

// SEARCH START
$(function() {
    $('#search-menu').removeClass('toggled');

    $('#search-icon').click(function(e) {
        e.stopPropagation();
        $('#search-menu').toggleClass('toggled');
        $("#popup-search").focus();
    });

    $('#search-menu input').click(function(e) {
        e.stopPropagation();
    });

    $('#search-menu, body').click(function() {
        $('#search-menu').removeClass('toggled');
    });
});
// SEARCH END
$(".slick_testimonial").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,

});

// NAVE SCROOL


$(document).ready(function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header");
        header.classList.toggle("sticky-bar", window.scrollY > 50);
    });

});


// NOTICE POPUP START 

$(document).ready(function() {
    $('#myModal').modal('show');
});
// NOTICE POPUP END